<?php

use App\Http\Controllers\AccountsController;
use App\Http\Controllers\PeriodController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    return inertia('Home', [
        'name' => 'Doggy'
    ]);
});

Route::resource('periods', PeriodController::class);

Route::get('/accounts', [AccountsController::class, 'index'])->name('accounts.index');

Route::get('/accounts/types', [AccountsController::class, 'getAccountTypes']);

Route::patch('/accounts', [AccountsController::class, 'updateAccount']);