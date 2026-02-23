<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class AdminContactController extends Controller
{
    /**
     * Display a listing of contacts
     */
    public function index()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();
        return response()->json($contacts);
    }

    /**
     * Display a single contact
     */
    public function show($id)
    {
        $contact = Contact::findOrFail($id);
        
        // Mark as read when viewed
        if (!$contact->is_read) {
            $contact->update(['is_read' => true]);
        }
        
        return response()->json($contact);
    }

    /**
     * Update contact status
     */
    public function update(Request $request, $id)
    {
        $contact = Contact::findOrFail($id);
        
        $validated = $request->validate([
            'status' => 'sometimes|in:pending,replied,archived',
            'is_read' => 'sometimes|boolean',
        ]);
        
        $contact->update($validated);
        
        return response()->json([
            'message' => 'Contact updated successfully',
            'contact' => $contact
        ]);
    }

    /**
     * Delete a contact
     */
    public function destroy($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();
        
        return response()->json([
            'message' => 'Contact deleted successfully'
        ]);
    }

    /**
     * Get contact statistics
     */
    public function stats()
    {
        $stats = [
            'total' => Contact::count(),
            'unread' => Contact::where('is_read', false)->count(),
            'pending' => Contact::where('status', 'pending')->count(),
            'replied' => Contact::where('status', 'replied')->count(),
            'archived' => Contact::where('status', 'archived')->count(),
        ];
        
        return response()->json($stats);
    }

    /**
     * Mark multiple contacts as read
     */
    public function markAsRead(Request $request)
    {
        $ids = $request->input('ids', []);
        Contact::whereIn('id', $ids)->update(['is_read' => true]);
        
        return response()->json([
            'message' => 'Contacts marked as read'
        ]);
    }
}
