<?php

namespace App\Http\Controllers;

use App\Models\TrustedCompany;
use Illuminate\Http\Request;

class TrustedCompanyController extends Controller
{
    public function index() { return response()->json(TrustedCompany::all()); }
    public function store(Request $request) { return response()->json(TrustedCompany::create($request->all())); }
    public function show($id) { return response()->json(TrustedCompany::findOrFail($id)); }
    public function update(Request $request, $id) { 
        $company = TrustedCompany::findOrFail($id);
        $company->update($request->all()); 
        return response()->json($company); 
    }
    public function destroy($id) { 
        TrustedCompany::findOrFail($id)->delete(); 
        return response()->noContent(); 
    }
}