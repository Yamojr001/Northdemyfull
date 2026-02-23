<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PartnerController extends Controller
{
    public function index()
    {
        return response()->json(Partner::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'logo_url' => 'nullable',
        ]);

        if ($request->hasFile('logo_url')) {
            $request->validate([
                'logo_url' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('logo_url')->store('uploads/partners', 'public');
            $validated['logo_url'] = Storage::url($path);
        }

        return response()->json(Partner::create($validated), 201);
    }

    public function show($id)
    {
        return response()->json(Partner::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $partner = Partner::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'logo_url' => 'nullable',
        ]);

        if ($request->hasFile('logo_url')) {
            $request->validate([
                'logo_url' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('logo_url')->store('uploads/partners', 'public');
            $validated['logo_url'] = Storage::url($path);
        }

        $partner->update($validated);
        return response()->json($partner);
    }

    public function destroy($id)
    {
        Partner::findOrFail($id)->delete();
        return response()->noContent();
    }
}