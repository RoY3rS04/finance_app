<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    return inertia('Home', [
        'name' => 'Doggy'
    ]);
});

Route::get('/periods', function() {
    return inertia('Periods');
});