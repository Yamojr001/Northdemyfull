<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscriber;
use App\Mail\NewsletterMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AdminNewsletterController extends Controller
{
    /**
     * Display a listing of newsletter subscribers
     */
    public function index()
    {
        $subscribers = NewsletterSubscriber::orderBy('created_at', 'desc')->get();
        return response()->json($subscribers);
    }

    /**
     * Display a single subscriber
     */
    public function show($id)
    {
        $subscriber = NewsletterSubscriber::findOrFail($id);
        return response()->json($subscriber);
    }

    /**
     * Delete a subscriber
     */
    public function destroy($id)
    {
        $subscriber = NewsletterSubscriber::findOrFail($id);
        $subscriber->delete();
        
        return response()->json([
            'message' => 'Subscriber deleted successfully'
        ]);
    }

    /**
     * Get newsletter statistics
     */
    public function stats()
    {
        $stats = [
            'total' => NewsletterSubscriber::count(),
            'active' => NewsletterSubscriber::where('is_active', true)->count(),
            'inactive' => NewsletterSubscriber::where('is_active', false)->count(),
        ];
        
        return response()->json($stats);
    }

    /**
     * Send newsletter to all active subscribers
     */
    public function sendNewsletter(Request $request)
    {
        $validated = $request->validate([
            'subject' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        try {
            $subscribers = NewsletterSubscriber::where('is_active', true)->get();
            
            if ($subscribers->isEmpty()) {
                return response()->json([
                    'message' => 'No active subscribers found.'
                ], 404);
            }

            $sentCount = 0;
            $failedCount = 0;

            foreach ($subscribers as $subscriber) {
                try {
                    Mail::to($subscriber->email)->send(
                        new NewsletterMail(
                            $validated['subject'],
                            $validated['content'],
                            $subscriber->unsubscribe_token
                        )
                    );
                    $sentCount++;
                } catch (\Exception $e) {
                    $failedCount++;
                    \Log::error('Failed to send newsletter to ' . $subscriber->email . ': ' . $e->getMessage());
                }
            }

            return response()->json([
                'message' => "Newsletter sent successfully to {$sentCount} subscribers.",
                'sent' => $sentCount,
                'failed' => $failedCount,
                'total' => $subscribers->count()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to send newsletter.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Toggle subscriber status
     */
    public function toggleStatus($id)
    {
        $subscriber = NewsletterSubscriber::findOrFail($id);
        $subscriber->update(['is_active' => !$subscriber->is_active]);
        
        return response()->json([
            'message' => 'Subscriber status updated successfully',
            'subscriber' => $subscriber
        ]);
    }
}
