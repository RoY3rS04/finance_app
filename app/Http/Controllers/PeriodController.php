<?php

namespace App\Http\Controllers;

use App\Models\BSAccount;
use App\Models\ISAccount;
use App\Models\Period;
use App\Models\Ratio;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Response;

enum RatioTypes: int
{
    case liquidity = 1;
    case activity = 2;
    case solvency = 3;
    case profitability = 4;
}

class PeriodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return inertia('Periods', [
            'periods' => Period::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //return inertia('CreatePeriod');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => ['required', 'min:10'],
            'created_at' => ['required']
        ]);

        $period = Period::create($validated);

        $period->balance_sheet()->create([]);
        $period->income_statement()->create([]);


        return redirect()->back(303)->with([
            'alert' => [
                'type' => 'Success',
                'msg' => 'Periodo creado correctamente!'
            ]
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Period $period)
    {
        return inertia('Period', [
            'period' => $period->load([
                'balance_sheet.bs_account_details.bs_account.bs_account_type',
                'balance_sheet.bs_account_details.bs_account.bs_account_subtype',
                'income_statement.is_account_details.is_account.is_account_type'
            ])
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Period $period)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Period $period)
    {
        $validated = $request->validate([
            'description' => ['required', 'min:10'],
            'created_at' => ['required']
        ]);

        $period->description = $validated['description'];
        $period->created_at = $validated['created_at'];

        $period->save();

        return redirect()->back(303)->with([
            'alert' => [
                'type' => 'Success',
                'msg' => 'Periodo actualizado correctamente!'
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Period $period)
    {
        $period->load('balance_sheet');
        $period->load('income_statement');
        $period->load('ratios');

        if($period->balance_sheet) {
            $period->balance_sheet->bs_account_details()->delete();
            $period->balance_sheet->delete();
        }

        if($period->income_statement) {
            $period->income_statement->is_account_details()->delete();
            $period->income_statement->delete();
        }

        $period?->ratios()?->delete();

        $period->delete();

        return redirect()->back(303)->with([
            'alert' => [
                'type' => 'Success',
                'msg' => 'Periodo eliminado correctamente!'
            ]
        ]);
    }

    public function addAccounts(Request $request, Period $period)
    {

        $validated = $request->validate([
            'accountName' => ['required', 'min:4'],
            'accountType' => ['required'],
            'statementType' => ['required'],
            'accountSubtype' => ['nullable'],
            'ammount' => ['required']
        ]);

        $period = $period->load(['balance_sheet', 'income_statement']);

        if ($validated['statementType'] == 'balance_sheet') {

            $account = BSAccount::where('account_name', '=', $validated['accountName'])->first();

            if ($account == null) {
                $account = BSAccount::create([
                    'account_name' => $validated['accountName'],
                    'bs_account_type_id' => $validated['accountType'],
                    'bs_account_subtype_id' => $validated['accountSubtype']
                ]);
            }

            $period->balance_sheet->bs_account_details()->create([
                'bs_account_id' => $account->id,
                'ammount' => $validated['ammount']
            ]);
        } else {
            $account = ISAccount::where('account_name', '=', $validated['accountName'])->first();

            if ($account == null) {
                $account = ISAccount::create([
                    'account_name' => $validated['accountName'],
                    'is_account_type_id' => $validated['accountType']
                ]);
            }

            $period->income_statement->is_account_details()->create([
                'is_account_id' => $account->id,
                'ammount' => $validated['ammount']
            ]);
        }

        return redirect()->back(303)->with([
            'alert' => [
                'type' => 'Success',
                'msg' => 'Cuenta agregada correctamente!'
            ]
        ]);
    }

    public function addAccountSimplified(Request $request, Period $period): RedirectResponse
    {

        $validated = $request->validate([
            'account_info' => ['required'],
            'ammount' => ['required']
        ]);

        $account_info = json_decode($validated['account_info']);

        $period->load([
            'balance_sheet.bs_account_details',
            'income_statement.is_account_details'
        ]);

        if ($account_info->type == 'balance_sheet') {

            $alreadyExists = $period->balance_sheet->bs_account_details()
                ->where('bs_account_id', '=', $account_info->id)
                ->first();

            if ($alreadyExists) {
                return redirect()->back(303)->with([
                    'alert' => [
                        'type' => 'Error',
                        'msg' => 'Ya existe dicha cuenta en tu balance general!'
                    ]
                ]);
            }

            $period->balance_sheet->bs_account_details()->create([
                'bs_account_id' => $account_info->id,
                'ammount' => $validated['ammount']
            ]);

            return redirect()->back(303)->with([
                'alert' => [
                    'type' => 'Success',
                    'msg' => 'Cuenta agregada correctamente a tu balance general!'
                ]
            ]);
        } else {
            $alreadyExists = $period->income_statement->is_account_details()
                ->where('is_account_id', '=', $account_info->id)
                ->first();

            if ($alreadyExists) {
                return redirect()->back(303)->with([
                    'alert' => [
                        'type' => 'Error',
                        'msg' => 'Ya existe dicha cuenta en tu estado de resultados!'
                    ]
                ]);
            }

            $period->income_statement->is_account_details()->create([
                'is_account_id' => $account_info->id,
                'ammount' => $validated['ammount']
            ]);

            return redirect()->back(303)->with([
                'alert' => [
                    'type' => 'Success',
                    'msg' => 'Cuenta agregada correctamente a tu estado de resultados!'
                ]
            ]);
        }
    }

    public function getPeriodRatios(Period $period)
    {

        $period->load('ratios');

        $mappedRatios = $period->ratios->map(function ($ratio) use ($period) {
            if ($ratio->ratio_name == "Capital de Trabajo") {

                $ratio->act_cir = DB::selectOne("SELECT dbo.getTotalCirculante(?) AS act_cir", [$period->id])->act_cir + 0;

                $ratio->pas_cir = DB::selectOne("SELECT dbo.getTotalPasivoCirculante(?) AS pas_cir", [$period->id])->pas_cir + 0;

                return $ratio;
            }

            return $ratio;
        });

        $period->unsetRelation('ratios');
        $period->setRelation('ratios', $mappedRatios);

        return inertia('PeriodRatios', [
            'period' => $period,
        ]);
    }

    public function calculateRatios(Period $period): RedirectResponse
    {

        $period->load('ratios');

        if (!$period->ratios->isEmpty()) {
            return redirect()->back(303)->with([
                'alert' => [
                    'type' => 'Error',
                    'msg' => 'Ya has hecho un analisis de las razones de este periodo!'
                ]
            ]);
        }

        $period->load('balance_sheet');
        $period->load('income_statement');

        if ($period->balance_sheet->bs_account_details->isEmpty() && $period->income_statement->is_account_details->isEmpty()) {
            return redirect()->back(303)->with([
                'alert' => [
                    'type' => 'Error',
                    'msg' => 'No hay informacion suficiente para realizar el analisis!'
                ]
            ]);
        }

        $period->ratios()->saveMany([
            new Ratio([
                'ratio_type_id' => RatioTypes::liquidity,
                'ratio_name' => 'Razon Circulante',
                'value' => DB::selectOne("SELECT dbo.calculateRazonCirculante(?) AS razon_circulante", [$period->id])->razon_circulante + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::liquidity,
                'ratio_name' => 'Prueba Acida',
                'value' => DB::selectOne("SELECT dbo.calculatePruebaAcida(?) AS prueba_acida", [$period->id])->prueba_acida + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::liquidity,
                'ratio_name' => 'Capital de Trabajo',
                'value' => DB::selectOne("SELECT dbo.calculateCapitalNetoTrabajo(?) AS cap_trabajo", [$period->id])->cap_trabajo + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::activity,
                'ratio_name' => 'Rotacion de Inventario',
                'value' => DB::selectOne("SELECT dbo.calculateRotacionInventarios(?) AS rotacion_inv", [$period->id])->rotacion_inv + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::activity,
                'ratio_name' => 'Rotacion cuentas por cobrar',
                'value' => DB::selectOne("SELECT dbo.calculateRotacionCuentasPorCobrar(?) AS rotacion_cuentas_cobrar", [$period->id])->rotacion_cuentas_cobrar + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::activity,
                'ratio_name' => 'Periodo Promedio de Cobro',
                'value' => DB::selectOne("SELECT dbo.calculatePeriodoPromedioCobro(?) AS periodo_prom_cobro", [$period->id])->periodo_prom_cobro + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::solvency,
                'ratio_name' => 'Deuda Total',
                'value' => DB::selectOne("SELECT dbo.calculateDeudaTotal(?) AS deuda_total", [$period->id])->deuda_total + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::solvency,
                'ratio_name' => 'Pasivo-Capital',
                'value' => DB::selectOne("SELECT dbo.calculatePasivoCapital(?) AS pasivo_capital", [$period->id])->pasivo_capital + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::solvency,
                'ratio_name' => 'Rotacion de intereses a utilidades',
                'value' => DB::selectOne("SELECT dbo.calculateRotacionInteresUtilidades(?) AS rotacion_int_uti", [$period->id])->rotacion_int_uti + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::profitability,
                'ratio_name' => 'MUB',
                'value' => DB::selectOne("SELECT dbo.calculateMargenUtilidadBruta(?) AS mun", [$period->id])->mun + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::profitability,
                'ratio_name' => 'MUO',
                'value' => DB::selectOne("SELECT dbo.calculateMargenUtilidadOperativa(?) AS muo", [$period->id])->muo + 0
            ]),
            new Ratio([
                'ratio_type_id' => RatioTypes::profitability,
                'ratio_name' => 'MUN',
                'value' => DB::selectOne("SELECT dbo.calculateMargenUtilidadNeta(?) AS mun", [$period->id])->mun + 0
            ]),
        ]);

        return redirect()->back(303)->with([
            'alert' => [
                'type' => 'Success',
                'msg' => 'Analisis realizado correctamente!'
            ]
        ]);
    }

    function saveReportsInfo(Request $request, Period $period): RedirectResponse
    {

        $period->load('balance_sheet');
        $period->load('income_statement');

        if($period->balance_sheet->bs_account_details->isEmpty() && $period->income_statement->is_account_details->isEmpty()) {
            return redirect()->back(303)->with([
                'alert' => [
                    'type' => 'Error',
                    'msg' => 'No hay nada que actualizar!'
                ]
            ]);
        }

        foreach ($request->all() as $jsonRatio) {

            $ratio = json_decode($jsonRatio);
            $ratio->amount += 0;

            if($ratio->statementType == 'balance_sheet') {
                $period->balance_sheet->bs_account_details()
                ->where('bs_account_id', '=', $ratio->id)
                ->update([
                    'ammount' => $ratio->amount
                ]);
            } else {
                $period->income_statement->is_account_details()
                ->where('is_account_id', '=', $ratio->id)
                ->update([
                    'ammount' => $ratio->amount
                ]);
            }
        }

        return redirect()->back(303)->with([
            'alert' => [
                'type' => 'Success',
                'msg' => 'Estados Financieros Actualizados Correctamente!'
            ]
        ]);
    }

    function deleteAccountDetail(Request $request, Period $period): RedirectResponse {

        $period->load('balance_sheet');
        $period->load('income_statement');

        if($request['statementType'] == 'balance_sheet') {
            $period->balance_sheet->bs_account_details()
            ->where('id', '=', $request->input('id'))
            ->delete();
        } else {
            $period->income_statement->is_account_details()
            ->where('id', '=', $request->input('id'))
            ->delete();
        }

        return redirect()->back(303)->with([
            'alert' => [
                'type' => 'Success',
                'msg' => 'Cuenta eliminada correctamente!'
            ]
        ]);
    }
}
