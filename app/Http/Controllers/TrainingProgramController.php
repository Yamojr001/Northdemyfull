<?php

namespace App\Http\Controllers;

use App\Models\TrainingProgram;
use Illuminate\Http\Request;

class TrainingProgramController extends Controller
{
    /**
     * Display a listing of training programs.
     */
    public function index()
    {
        return response()->json(
            TrainingProgram::where('is_active', true)->get(),
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
            'curriculum' => 'nullable|string',
            'outcomes' => 'nullable|string',
            'duration' => 'nullable|string',
            'level' => 'nullable|string',
            'instructor' => 'nullable|string',
            'price' => 'nullable|numeric',
            'max_participants' => 'nullable|integer',
            'format' => 'nullable|string|in:online,offline,hybrid',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        return response()->json(TrainingProgram::create($validated), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(TrainingProgram $training_program)
    {
        return response()->json($training_program, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TrainingProgram $training_program)
    {
        $validated = $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'short_description' => 'nullable|string|max:500',
            'image_url' => 'nullable|url',
            'curriculum' => 'nullable|string',
            'outcomes' => 'nullable|string',
            'duration' => 'nullable|string',
            'level' => 'nullable|string',
            'instructor' => 'nullable|string',
            'price' => 'nullable|numeric',
            'max_participants' => 'nullable|integer',
            'format' => 'nullable|string|in:online,offline,hybrid',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        $training_program->update($validated);
        return response()->json($training_program, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TrainingProgram $training_program)
    {
        $training_program->delete();
        return response()->noContent();
    }
}
