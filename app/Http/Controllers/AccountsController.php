<?php

namespace App\Http\Controllers;

use App\Models\BalanceSheet;
use App\Models\BSAccount;
use App\Models\BSAccountSubtype;
use App\Models\BSAccountType;
use App\Models\ISAccount;
use App\Models\ISAccountType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Response;

class AccountsController extends Controller
{
    public function index(): Response {

        $balance_sheet_accounts = BSAccount::with('bs_account_type', 'bs_account_subtype')->get();

        $income_statement_accounts = ISAccount::with('is_account_type')->get();

        $catalog = [
            'balance_sheet' => $balance_sheet_accounts->map(function ($account) {
                return [
                    'id' => $account->id,
                    'account_name' => $account->account_name,
                    'type_name' => $account->bs_account_type->type_name,
                    'subtype_name' =>
                    $account?->bs_account_subtype?->subtype_name,
                ];
            }),
            'income_statement' => $income_statement_accounts->map(function ($account) {
                return [
                    'id' => $account->id,
                    'account_name' => $account->account_name,
                    'type_name' => $account->is_account_type->type_name,
                ];
            })
        ];

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
}
