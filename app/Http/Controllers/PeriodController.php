<?php

namespace App\Http\Controllers;

use App\Models\BSAccount;
use App\Models\ISAccount;
use App\Models\Period;
use Illuminate\Http\Request;
use Inertia\Response;

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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Period $period)
    {
        //
    }

    public function addAccounts(Request $request, Period $period) {

        $validated = $request->validate([
            'accountName' => ['required', 'min:4'],
            'accountType' => ['required'],
            'statementType' => ['required'],
            'accountSubtype' => ['nullable'],
            'ammount' => ['required']
        ]);

        $period = $period->load(['balance_sheet', 'income_statement']);

        if($validated['statementType'] == 'balance_sheet') {

            $account = BSAccount::where('account_name', '=', $validated['accountName'])->first();

            if($account == null) {
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
}
