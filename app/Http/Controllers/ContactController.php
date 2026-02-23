<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Submit a contact form
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|min:10',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // Save contact to database
            $contact = Contact::create($request->all());

            // Send email to admin and info email (but don't fail if email fails)
            try {
                Mail::to([
                    'yamojr001@gmail.com',
                    'info@northdemy.com'
                ])->send(new ContactFormMail($contact));
            } catch (\Exception $emailError) {
                \Log::warning('Failed to send contact email: ' . $emailError->getMessage());
            }

            return response()->json([
                'message' => 'Thank you for contacting us! We will get back to you soon.',
                'contact' => $contact
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to save contact message. Please try again later.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
