<?php

namespace App\Http\Controllers;

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
        return inertia('Periods');
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Period $period)
    {
        return inertia('Period', [
            'period' => $period
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
}
