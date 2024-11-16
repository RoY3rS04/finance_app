<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Response;

class AccountsController extends Controller
{
    public function index(): Response {

        $balanceAccounts = DB::select('SELECT bs_accounts.id, account_name, bs_account_types.type_name, bs_account_subtypes.subtype_name FROM bs_accounts INNER JOIN bs_account_types ON bs_account_type_id = bs_account_types.id LEFT JOIN bs_account_subtypes ON bs_account_subtype_id = bs_account_subtypes.id');

        $incomeStatementAccounts =
        DB::select('SELECT is_accounts.id, account_name, is_account_types.type_name FROM is_accounts INNER JOIN is_account_types ON is_account_type_id = is_account_types.id');

        $catalog = [
            'balance_sheet' => $balanceAccounts,
            'income_statement' => $incomeStatementAccounts
        ];

        return inertia('Accounts', [
            'catalog' => $catalog
        ]);
    }

    public function getAccountTypes(): JsonResponse {

        $bs_types = DB::select('SELECT id, type_name FROM bs_account_types');
        $bs_subtypes =
        DB::select('SELECT id, subtype_name FROM bs_account_subtypes');
        $is_types =
        DB::select('SELECT id, type_name FROM is_account_types');

        return response()->json([
            'balance_sheet' => [
                'types' => $bs_types,
                'subtypes' => $bs_subtypes
            ],
            'income_statement' => [
                'types' => $is_types
            ]
        ]);

    }
}
