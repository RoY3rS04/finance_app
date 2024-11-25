<?php

use App\Http\Controllers\AccountsController;
use App\Http\Controllers\PeriodController;
use App\Models\Period;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    return inertia('Home', [
        'name' => 'Doggy'
    ]);
});

Route::resource('periods', PeriodController::class);

Route::get('/accounts', [AccountsController::class, 'index']);

Route::get('/accounts/types', [AccountsController::class, 'getAccountTypes']);

Route::patch('/accounts', [AccountsController::class, 'updateAccount']);

Route::patch('/accounts/{id}', [AccountsController::class, 'removeAccount']);

Route::post('/accounts', [AccountsController::class, 'createAccount']);

Route::post('periods/{period}/accounts', [PeriodController::class, 'addAccounts']);

Route::post('/periods/{period}/add_account', [PeriodController::class, 'addAccountSimplified']);

Route::get('/accounts_info', [AccountsController::class, 'getAccounts']);

Route::get('/periods/{period}/ratios', [PeriodController::class, 'getPeriodRatios']);

Route::post('/periods/{period}/ratios', [PeriodController::class, 'calculateRatios']);

Route::patch('/periods/{period}/reports', [PeriodController::class, 'saveReportsInfo']);

Route::patch('/periods/{period}/details', [PeriodController::class, 'deleteAccountDetail']);