<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function() {
    return inertia('Home', [
        'name' => 'Doggy'
    ]);
});