<?php

namespace App\Http\Controllers;

use App\Models\BalanceSheet;
use App\Models\BSAccount;
use App\Models\BSAccountSubtype;
use App\Models\BSAccountType;
use App\Models\ISAccount;
use App\Models\ISAccountType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class AccountsController extends Controller
{
    public function index(): Response {

        $balance_sheet_accounts = BSAccount::with('bs_account_type', 'bs_account_subtype')->where('deleted', '=', '0')->get();

        $income_statement_accounts = ISAccount::with('is_account_type')->where('deleted', '=', '0')->get();

        $catalog = [
            'balance_sheet' => $balance_sheet_accounts->map(function ($account) {
                return [
                    'id' => $account->id,
                    'account_name' => $account->account_name,
                    'type' => [
                        'name' => $account->bs_account_type->type_name,
                        'id' => $account->bs_account_type->id
                    ],
                    'subtype'
                    => [
                        'name' => $account?->bs_account_subtype?->subtype_name,
                        'id' => $account?->bs_account_subtype?->id
                    ],
                    'statement_type' => 'balance_sheet'
                ];
            }),
            'income_statement' => $income_statement_accounts->map(function ($account) {
                return [
                    'id' => $account->id,
                    'statement_type' => 'income_statement',
                    'account_name' => $account->account_name,
                    'type' => [
                        'name' => $account->is_account_type->type_name,
                        'id' => $account->is_account_type->id
                    ],
                ];
            })
        ];
        
        //dd($catalog);

        return inertia('Accounts', [
            'catalog' => $catalog
        ]);
    }

    public function getAccountTypes(): JsonResponse {

        return response()->json([
            'balance_sheet' => [
                'types' => BSAccountType::all()->map->only(['id', 'type_name']),
                'subtypes' => BSAccountSubtype::all()->map->only(['id', 'subtype_name'])
            ],
            'income_statement' => [
                'types' => ISAccountType::all()->map->only(['id', 'type_name'])
            ]
        ]);

    }

    public function createAccount(Request $request): RedirectResponse {
        $validated = $request->validate([
            'accountName' => ['required', 'min:4'],
            'accountType' => ['required'],
            'statementType' => ['required'],
            'accountSubtype' => ['nullable'],
        ]);

        if($validated['statementType'] == 'balance_sheet') {

            if($validated['accountSubtype']) {
                BSAccount::create([
                    'account_name' => $validated['accountName'],
                    'bs_account_type_id' => $validated['accountType'],
                    'bs_account_subtype_id' => $validated['accountSubtype']
                ]);
            } else {
                BSAccount::create([
                    'account_name' => $validated['accountName'],
                    'bs_account_type_id' => $validated['accountType']
                ]);
            }

        } else {

            ISAccount::create([
                'account_name' => $validated['accountName'],
                'is_account_type_id' => $validated['accountType']
            ]);

        }

        return redirect()->back(303)->with('alert', [
            'type' => 'Success',
            'msg' => 'Cuenta creada correctamente'
        ]); 
    }

    public function updateAccount(Request $request): RedirectResponse {

        $validated = $request->validate([
            'accountName' => ['required', 'min:4'],
            'accountType' => ['required'],
            'lastStatementType' => ['required'],
            'newStatementType' => ['required'],
            'accountSubtype' => ['nullable'],
            'account_id' => ['required']
        ]);

        $account = null;

        if($validated['lastStatementType'] == 'balance_sheet') {

            $account = BSAccount::find($validated['account_id']);

            if($validated['lastStatementType'] == $validated['newStatementType']) {

                $alreadyExists = BSAccount::where([
                    ['account_name', '=', $validated['accountName']],
                    ['deleted', '=', 0]
                ])->first();

                if ($alreadyExists) {

                    return redirect()->back(303)->with('alert', [
                        'type' => 'Error',
                        'msg' => 'Ya existe una cuenta con esas caracteristicas'
                    ]);
                }

                $account->account_name = $validated['accountName'];
                $account->bs_account_type_id = $validated['accountType'];

                if ($account->bs_account_subtype_id && isset($validated['accountSubtype'])) {
                    $account->bs_account_subtype_id = $validated['accountSubtype'];
                }

            } else {

                $alreadyExists = ISAccount::where([
                    ['account_name', '=', $validated['accountName']],
                    ['deleted', '=', 0]
                ])->first();

                if ($alreadyExists) {

                    return redirect()->back(303)->with('alert', [
                        'type' => 'Error',
                        'msg' => 'Ya existe una cuenta con esas caracteristicas'
                    ]);
                }

                $account->deleted = true;

                ISAccount::create([
                    'account_name' => $validated['accountName'],
                    'is_account_type_id' => $validated['accountType']
                ]);
            }

            $account->save();
            
        } else if($validated['lastStatementType'] == 'income_statement') {
            $account = ISAccount::find($validated['account_id']);

            if($validated['lastStatementType'] == $validated['newStatementType']) {

                $alreadyExists = ISAccount::where([
                    ['account_name', '=', $validated['accountName']],
                    ['deleted', '=', 0]
                ])->first();

                if ($alreadyExists) {

                    return redirect()->back(303)->with('alert', [
                        'type' => 'Error',
                        'msg' => 'Ya existe una cuenta con esas caracteristicas'
                    ]);
                }

                $account->is_account_type_id = $validated['accountType'];
                $account->account_name = $validated['accountName'];

            } else {

                $alreadyExists = BSAccount::where([
                    ['account_name', '=', $validated['accountName']],
                    ['deleted', '=', 0]
                ])->first();

                if($alreadyExists) {

                    return redirect()->back(303)->with('alert', [
                        'type' => 'Error',
                        'msg' => 'Ya existe una cuenta con esas caracteristicas'
                    ]);
                }

                $account->deleted = true;

                BSAccount::create([
                    'account_name' => $validated['accountName'],
                    'bs_account_type_id' => $validated['accountType'],
                    'bs_account_subtype_id' => $validated['accountSubtype']
                ]);
            }

            $account->save();
        }
        
        return redirect()->back(303)->with('alert', [
            'type' => 'Success',
            'msg' => 'Cuenta actualizada correctamente'
        ]);
    }

    public function removeAccount(Request $request, string $id): RedirectResponse {

        $validated = $request->validate([
            'statementType' => ['required']
        ]);

        if($validated['statementType'] == 'balance_sheet') {
            $account = BSAccount::find($id);

            if (!$account) {
                return redirect()->back(303)->with('alert', [
                    'type' => 'Error',
                    'msg' => 'No se encontro la cuenta que se desea eliminar'
                ]);
            }

            $account->deleted = true;

            $account->save();
        } else {
            $account = ISAccount::find($id);

            if(!$account) {
                return redirect()->back(303)->with('alert', [
                    'type' => 'Error',
                    'msg' => 'No se encontro la cuenta que se desea eliminar'
                ]);
            }

            $account->deleted = true;

            $account->save();
        }

        return redirect()->back(303)->with('alert', [
            'type' => 'Success',
            'msg' => 'Cuenta eliminada correctamente'
        ]);
    }

    public function getAccounts(): JsonResponse {

        return response()->json([
            'balance_sheet' => BSAccount::where('deleted', '=', '0')->get(),
            'income_statement' => ISAccount::where('deleted', '=', '0')->get()
        ]);

    }
}
