<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NewsletterController extends Controller
{
    /**
     * Subscribe to newsletter
     */
    public function subscribe(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255|unique:newsletter_subscribers,email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'This email is already subscribed to our newsletter.',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $subscriber = NewsletterSubscriber::create([
                'email' => $request->email,
            ]);

            return response()->json([
                'message' => 'Thank you for subscribing to our newsletter!',
                'subscriber' => $subscriber
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to subscribe. Please try again later.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Unsubscribe from newsletter
     */
    public function unsubscribe($token)
    {
        $subscriber = NewsletterSubscriber::where('unsubscribe_token', $token)->first();

        if (!$subscriber) {
            return view('newsletter.unsubscribe-error');
        }

        $subscriber->update(['is_active' => false]);

        return view('newsletter.unsubscribe-success', ['email' => $subscriber->email]);
    }

    /**
     * Resubscribe using token
     */
    public function resubscribe($token)
    {
        $subscriber = NewsletterSubscriber::where('unsubscribe_token', $token)->first();

        if (!$subscriber) {
            return response()->json([
                'message' => 'Invalid subscription token.'
            ], 404);
        }

        $subscriber->update(['is_active' => true]);

        return response()->json([
            'message' => 'You have been resubscribed to our newsletter!',
            'subscriber' => $subscriber
        ], 200);
    }
}
