<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;

class TeamMemberController extends Controller
{
    public function index() { return response()->json(TeamMember::all()); }
    public function store(Request $request) { return response()->json(TeamMember::create($request->all())); }
    public function show($id) { return response()->json(TeamMember::findOrFail($id)); }
    public function update(Request $request, $id) { 
        $teamMember = TeamMember::findOrFail($id);
        $teamMember->update($request->all()); 
        return response()->json($teamMember); 
    }
    public function destroy($id) { 
        TeamMember::findOrFail($id)->delete(); 
        return response()->noContent(); 
    }
}