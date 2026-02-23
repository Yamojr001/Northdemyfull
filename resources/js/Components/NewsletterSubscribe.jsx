import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function NewsletterSubscribe() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate email
        if (!email || !email.includes('@')) {
            setError('Please enter a valid email address');
            return;
        }
        
        setLoading(true);
        setError('');
        console.log('Newsletter subscribe with email:', email);

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Response data:', data);

            if (response.ok) {
                setSuccess(true);
                setEmail('');
                setTimeout(() => setSuccess(false), 5000);
            } else {
                setError(data.message || 'Failed to subscribe');
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow-lg p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                    <p className="text-indigo-100">Subscribe to our newsletter for the latest news, updates, and exclusive offers.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    {success ? (
                        <div className="p-4 bg-green-500 rounded-lg flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            <span>Thank you for subscribing!</span>
                        </div>
                    ) : (
                        <>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Enter your email"
                                        className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none text-gray-900"
                                        disabled={loading}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading || !email}
                                    className="px-8 py-2 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all cursor-pointer"
                                >
                                    {loading ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </div>
                            {error && (
                                <p className="text-sm text-red-200">{error}</p>
                            )}
                            <p className="text-xs text-indigo-100">We respect your privacy. Unsubscribe at any time.</p>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}
