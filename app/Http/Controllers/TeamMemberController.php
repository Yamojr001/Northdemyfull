<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TeamMemberController extends Controller
{
    public function index()
    {
        $members = TeamMember::active()->ordered()->get();
        return response()->json($members);
    }

    public function show($id)
    {
        $member = TeamMember::active()->findOrFail($id);
        return response()->json($member);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'category' => 'required|string|in:leadership,team,board,trustee,training,incubation',
            'image_url' => 'nullable',
            'linkedin' => 'nullable|string|url',
            'twitter' => 'nullable|string|url',
            'facebook' => 'nullable|string|url',
            'instagram' => 'nullable|string|url',
            'email' => 'nullable|email',
            'order' => 'nullable|integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('image_url')) {
            $request->validate([
                'image_url' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('image_url')->store('uploads/team', 'public');
            $validated['image_url'] = Storage::url($path);
        }

        $member = TeamMember::create($validated);
        return response()->json($member, 201);
    }

    public function update(Request $request, $id)
    {
        $member = TeamMember::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'role' => 'sometimes|required|string|max:255',
            'bio' => 'nullable|string',
            'category' => 'sometimes|required|string|in:leadership,team,board,trustee,training,incubation',
            'image_url' => 'nullable',
            'linkedin' => 'nullable|string|url',
            'twitter' => 'nullable|string|url',
            'facebook' => 'nullable|string|url',
            'instagram' => 'nullable|string|url',
            'email' => 'nullable|email',
            'order' => 'nullable|integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('image_url')) {
            $request->validate([
                'image_url' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('image_url')->store('uploads/team', 'public');
            $validated['image_url'] = Storage::url($path);
        }

        $member->update($validated);
        return response()->json($member);
    }

    public function destroy($id)
    {
        TeamMember::findOrFail($id)->delete();
        return response()->noContent();
    }
}