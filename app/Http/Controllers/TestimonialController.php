<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::active()->ordered()->get();
        return response()->json($testimonials);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'quote' => 'required|string|max:1000',
            'author' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'image' => 'nullable',
            'order' => 'integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('image')->store('uploads/testimonials', 'public');
            $validated['image'] = Storage::url($path);
        }

        $testimonial = Testimonial::create($validated);
        return response()->json($testimonial, 201);
    }

    public function show($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        return response()->json($testimonial);
    }

    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);
        
        $validated = $request->validate([
            'quote' => 'sometimes|string|max:1000',
            'author' => 'sometimes|string|max:255',
            'role' => 'sometimes|string|max:255',
            'image' => 'nullable',
            'order' => 'integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'image|mimes:jpg,jpeg,png,webp,gif|max:4096',
            ]);
            $path = $request->file('image')->store('uploads/testimonials', 'public');
            $validated['image'] = Storage::url($path);
        }

        $testimonial->update($validated);
        return response()->json($testimonial);
    }

    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        $testimonial->delete();
        return response()->noContent();
    }
}