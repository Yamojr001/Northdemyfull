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
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
        }
        .unsubscribe {
            margin-top: 15px;
        }
        .unsubscribe a {
            color: #4F46E5;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>{{ config('app.name') }} Newsletter</h2>
        </div>
        <div class="content">
            {!! nl2br(e($content)) !!}
            
            <div class="footer">
                <p>You are receiving this email because you subscribed to our newsletter.</p>
                <div class="unsubscribe">
                    <a href="{{ url('/newsletter/unsubscribe/' . $unsubscribeToken) }}">
                        Unsubscribe from future emails
                    </a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
