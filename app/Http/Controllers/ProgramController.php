<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProgramController extends Controller
{
    /**
     * Display a listing of all active programs.
     */
    public function index()
    {
        return response()->json(
            Program::where('is_active', true)
                ->orderBy('created_at', 'desc')
                ->get(),
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
            'image_url' => 'nullable',
            'category' => 'nullable|string|in:training,incubation,mentorship',
            'duration' => 'nullable|string',
            'level' => 'nullable|string',
            'instructor' => 'nullable|string',
            'curriculum' => 'nullable|string',
            'outcomes' => 'nullable|string',
            'price' => 'nullable|numeric',
            'max_participants' => 'nullable|integer',
            'format' => 'nullable|string|in:online,offline,hybrid',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('image_url')) {
            $request->validate([
                'image_url' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('image_url')->store('uploads/programs', 'public');
            $validated['image_url'] = Storage::url($path);
        }

        return response()->json(Program::create($validated), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Program $program)
    {
        return response()->json($program, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Program $program)
    {
        $validated = $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'short_description' => 'nullable|string|max:500',
            'image_url' => 'nullable',
            'category' => 'nullable|string|in:training,incubation,mentorship',
            'duration' => 'nullable|string',
            'level' => 'nullable|string',
            'instructor' => 'nullable|string',
            'curriculum' => 'nullable|string',
            'outcomes' => 'nullable|string',
            'price' => 'nullable|numeric',
            'max_participants' => 'nullable|integer',
            'format' => 'nullable|string|in:online,offline,hybrid',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('image_url')) {
            $request->validate([
                'image_url' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('image_url')->store('uploads/programs', 'public');
            $validated['image_url'] = Storage::url($path);
        }

        $program->update($validated);
        return response()->json($program, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Program $program)
    {
        $program->delete();
        return response()->noContent();
    }
}
