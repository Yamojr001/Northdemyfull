<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;

class PartnerController extends Controller
{
    public function index() { return response()->json(Partner::all()); }
    public function store(Request $request) { return response()->json(Partner::create($request->all())); }
    public function show($id) { return response()->json(Partner::findOrFail($id)); }
    public function update(Request $request, $id) { 
        $partner = Partner::findOrFail($id);
        $partner->update($request->all()); 
        return response()->json($partner); 
    }
    public function destroy($id) { 
        Partner::findOrFail($id)->delete(); 
        return response()->noContent(); 
    }
}