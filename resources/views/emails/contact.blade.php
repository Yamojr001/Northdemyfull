<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .content {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #4F46E5;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .info-row {
            margin: 15px 0;
            padding: 10px;
            border-left: 3px solid #4F46E5;
            background-color: #f8f8f8;
        }
        .label {
            font-weight: bold;
            color: #4F46E5;
        }
        .message-box {
            background-color: #f0f0f0;
            padding: 15px;
            border-radius: 5px;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
            <div class="info-row">
                <span class="label">Name:</span> {{ $contact->name }}
            </div>
            
            <div class="info-row">
                <span class="label">Email:</span> {{ $contact->email }}
            </div>
            
            @if($contact->phone)
            <div class="info-row">
                <span class="label">Phone:</span> {{ $contact->phone }}
            </div>
            @endif
            
            <div class="info-row">
                <span class="label">Subject:</span> {{ $contact->subject }}
            </div>
            
            <div class="info-row">
                <span class="label">Submitted at:</span> {{ $contact->created_at->format('M d, Y H:i:s') }}
            </div>
            
            <div class="message-box">
                <div class="label">Message:</div>
                <p>{{ $contact->message }}</p>
            </div>
        </div>
    </div>
</body>
</html>
