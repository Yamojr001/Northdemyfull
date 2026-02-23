<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::active()
            ->ordered()
            ->get();

        return response()->json($projects);
    }

    public function show($id)
    {
        $project = Project::active()->findOrFail($id);
        return response()->json($project);
    }

    public function byType($type)
    {
        $projects = Project::active()
            ->byType($type)
            ->ordered()
            ->get();

        return response()->json($projects);
    }

    public function store(Request $request)
    {
        foreach (['technologies', 'features', 'outcomes'] as $field) {
            $value = $request->input($field);
            if (is_string($value)) {
                $decoded = json_decode($value, true);
                if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                    $request->merge([$field => $decoded]);
                } else {
                    $request->merge([
                        $field => array_values(array_filter(array_map('trim', explode(',', $value))))
                    ]);
                }
            }
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:projects,slug',
            'description' => 'required|string',
            'overview' => 'required|string',
            'client_name' => 'required|string|max:255',
            'industry' => 'required|string|max:255',
            'project_type' => 'required|string|in:web,mobile,enterprise,consulting,hybrid,other',
            'technologies' => 'nullable|array',
            'features' => 'nullable|array',
            'outcomes' => 'nullable|array',
            'image' => 'nullable',
            'thumbnail' => 'nullable',
            'website_url' => 'nullable|string|url',
            'app_store_url' => 'nullable|string|url',
            'google_play_url' => 'nullable|string|url',
            'completion_date' => 'nullable|date',
            'budget_range' => 'nullable|integer|min:10|max:1000000',
            'team_size' => 'nullable|integer|min:1|max:1000',
            'is_active' => 'boolean',
            'order' => 'nullable|integer'
        ]);

        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('image')->store('uploads/projects', 'public');
            $validated['image'] = Storage::url($path);
        }

        if ($request->hasFile('thumbnail')) {
            $request->validate([
                'thumbnail' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('thumbnail')->store('uploads/projects', 'public');
            $validated['thumbnail'] = Storage::url($path);
        }

        $project = Project::create($validated);
        return response()->json($project, 201);
    }

    public function update(Request $request, Project $project)
    {
        foreach (['technologies', 'features', 'outcomes'] as $field) {
            $value = $request->input($field);
            if (is_string($value)) {
                $decoded = json_decode($value, true);
                if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                    $request->merge([$field => $decoded]);
                } else {
                    $request->merge([
                        $field => array_values(array_filter(array_map('trim', explode(',', $value))))
                    ]);
                }
            }
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'slug' => 'sometimes|required|string|unique:projects,slug,' . $project->id,
            'description' => 'sometimes|required|string',
            'overview' => 'sometimes|required|string',
            'client_name' => 'sometimes|required|string|max:255',
            'industry' => 'sometimes|required|string|max:255',
            'project_type' => 'sometimes|required|string|in:web,mobile,enterprise,consulting,hybrid,other',
            'technologies' => 'nullable|array',
            'features' => 'nullable|array',
            'outcomes' => 'nullable|array',
            'image' => 'nullable',
            'thumbnail' => 'nullable',
            'website_url' => 'nullable|string|url',
            'app_store_url' => 'nullable|string|url',
            'google_play_url' => 'nullable|string|url',
            'completion_date' => 'nullable|date',
            'budget_range' => 'nullable|integer|min:10|max:1000000',
            'team_size' => 'nullable|integer|min:1|max:1000',
            'is_active' => 'boolean',
            'order' => 'nullable|integer'
        ]);

        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('image')->store('uploads/projects', 'public');
            $validated['image'] = Storage::url($path);
        }

        if ($request->hasFile('thumbnail')) {
            $request->validate([
                'thumbnail' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('thumbnail')->store('uploads/projects', 'public');
            $validated['thumbnail'] = Storage::url($path);
        }

        $project->update($validated);
        return response()->json($project);
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return response()->json(null, 204);
    }
}
