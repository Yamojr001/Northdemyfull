<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    public function index() { return response()->json(Program::all()); }
    public function store(Request $request) { return response()->json(Program::create($request->all())); }
    public function show($id) { return response()->json(Program::findOrFail($id)); }
    public function update(Request $request, $id) { 
        $program = Program::findOrFail($id);
        $program->update($request->all()); 
        return response()->json($program); 
    }
    public function destroy($id) { 
        Program::findOrFail($id)->delete(); 
        return response()->noContent(); 
    }
}