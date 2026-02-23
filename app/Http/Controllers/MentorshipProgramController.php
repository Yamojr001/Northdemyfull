<?php

namespace App\Http\Controllers;

use App\Models\MentorshipProgram;
use Illuminate\Http\Request;

class MentorshipProgramController extends Controller
{
    /**
     * Display a listing of mentorship programs.
     */
    public function index()
    {
        return response()->json(
            MentorshipProgram::where('is_active', true)->get(),
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
            'mentor_name' => 'nullable|string',
            'mentor_title' => 'nullable|string',
            'mentor_bio' => 'nullable|string',
            'mentor_image' => 'nullable|url',
            'participants_limit' => 'nullable|integer',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        return response()->json(MentorshipProgram::create($validated), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(MentorshipProgram $mentorship_program)
    {
        return response()->json($mentorship_program, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MentorshipProgram $mentorship_program)
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
            'mentor_name' => 'nullable|string',
            'mentor_title' => 'nullable|string',
            'mentor_bio' => 'nullable|string',
            'mentor_image' => 'nullable|url',
            'participants_limit' => 'nullable|integer',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        $mentorship_program->update($validated);
        return response()->json($mentorship_program, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MentorshipProgram $mentorship_program)
    {
        $mentorship_program->delete();
        return response()->noContent();
    }
}
