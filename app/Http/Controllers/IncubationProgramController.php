<?php

namespace App\Http\Controllers;

use App\Models\IncubationProgram;
use Illuminate\Http\Request;

class IncubationProgramController extends Controller
{
    /**
     * Display a listing of incubation programs.
     */
    public function index()
    {
        return response()->json(
            IncubationProgram::where('is_active', true)->get(),
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'short_description' => 'nullable|string|max:500',
            'image_url' => 'nullable|url',
            'benefits' => 'nullable|string',
            'requirements' => 'nullable|string',
            'duration' => 'nullable|string',
            'level' => 'nullable|string',
            'funding_available' => 'nullable|numeric',
            'batch_size' => 'nullable|integer',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        return response()->json(IncubationProgram::create($validated), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(IncubationProgram $incubation_program)
    {
        return response()->json($incubation_program, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, IncubationProgram $incubation_program)
    {
        $validated = $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'short_description' => 'nullable|string|max:500',
            'image_url' => 'nullable|url',
            'benefits' => 'nullable|string',
            'requirements' => 'nullable|string',
            'duration' => 'nullable|string',
            'level' => 'nullable|string',
            'funding_available' => 'nullable|numeric',
            'batch_size' => 'nullable|integer',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        $incubation_program->update($validated);
        return response()->json($incubation_program, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(IncubationProgram $incubation_program)
    {
        $incubation_program->delete();
        return response()->noContent();
    }
}
