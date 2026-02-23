import React, { useState, useEffect } from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import { Mail, Trash2, Send, Users, UserCheck, UserX, Search, Plus } from 'lucide-react';

export default function Newsletter() {
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showComposeModal, setShowComposeModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [newsletter, setNewsletter] = useState({
        subject: '',
        content: ''
    });
    const [sending, setSending] = useState(false);

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const fetchSubscribers = async () => {
        try {
            const response = await fetch('/api/admin/newsletter-subscribers');
            const data = await response.json();
            setSubscribers(data);
        } catch (error) {
            console.error('Failed to fetch subscribers:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this subscriber?')) return;

        try {
            await fetch(`/api/admin/newsletter-subscribers/${id}`, {
                method: 'DELETE'
            });
            setSubscribers(subscribers.filter(s => s.id !== id));
        } catch (error) {
            console.error('Failed to delete subscriber:', error);
        }
    };

    const handleToggleStatus = async (id) => {
        try {
            const response = await fetch(`/api/admin/newsletter-subscribers/${id}/toggle-status`, {
                method: 'PUT'
            });
            const data = await response.json();
            setSubscribers(subscribers.map(s => 
                s.id === id ? data.subscriber : s
            ));
        } catch (error) {
            console.error('Failed to toggle status:', error);
        }
    };

    const handleSendNewsletter = async (e) => {
        e.preventDefault();
        
        if (!newsletter.subject || !newsletter.content) {
            alert('Please fill in both subject and content');
            return;
        }

        if (!confirm(`Send newsletter to ${subscribers.filter(s => s.is_active).length} active subscribers?`)) {
            return;
        }

        setSending(true);
        try {
            const response = await fetch('/api/admin/newsletter-subscribers/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newsletter)
            });
            const data = await response.json();
            
            alert(data.message);
            setShowComposeModal(false);
            setNewsletter({ subject: '', content: '' });
        } catch (error) {
            console.error('Failed to send newsletter:', error);
            alert('Failed to send newsletter. Please try again.');
        } finally {
            setSending(false);
        }
    };

    const filteredSubscribers = subscribers.filter(subscriber => {
        const matchesFilter = filter === 'all' || 
            (filter === 'active' && subscriber.is_active) ||
            (filter === 'inactive' && !subscriber.is_active);

        const matchesSearch = searchTerm === '' ||
            subscriber.email.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h1>
                        <p className="text-gray-600">Manage subscribers and send newsletters</p>
                    </div>
                    <button
                        onClick={() => setShowComposeModal(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        <Send className="h-4 w-4" />
                        Send Newsletter
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center gap-3">
                            <Users className="h-8 w-8 text-indigo-600" />
                            <div>
                                <div className="text-sm text-gray-600">Total Subscribers</div>
                                <div className="text-2xl font-bold">{subscribers.length}</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center gap-3">
                            <UserCheck className="h-8 w-8 text-green-600" />
                            <div>
                                <div className="text-sm text-gray-600">Active</div>
                                <div className="text-2xl font-bold text-green-600">
                                    {subscribers.filter(s => s.is_active).length}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center gap-3">
                            <UserX className="h-8 w-8 text-red-600" />
                            <div>
                                <div className="text-sm text-gray-600">Unsubscribed</div>
                                <div className="text-2xl font-bold text-red-600">
                                    {subscribers.filter(s => !s.is_active).length}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-lg shadow mb-6 p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex gap-2">
                            {['all', 'active', 'inactive'].map(f => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                                        filter === f
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {f.charAt(0).toUpperCase() + f.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subscribers Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Subscribed Date
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {loading ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                                        Loading subscribers...
                                    </td>
                                </tr>
                            ) : filteredSubscribers.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                                        No subscribers found
                                    </td>
                                </tr>
                            ) : (
                                filteredSubscribers.map(subscriber => (
                                    <tr key={subscriber.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                                                <span className="text-sm text-gray-900">{subscriber.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs rounded-full ${
                                                subscriber.is_active
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                            }`}>
                                                {subscriber.is_active ? 'Active' : 'Unsubscribed'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {formatDate(subscriber.created_at)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleToggleStatus(subscriber.id)}
                                                className={`mr-3 ${
                                                    subscriber.is_active
                                                        ? 'text-orange-600 hover:text-orange-900'
                                                        : 'text-green-600 hover:text-green-900'
                                                }`}
                                            >
                                                {subscriber.is_active ? 'Deactivate' : 'Activate'}
                                            </button>
                                            <button
                                                onClick={() => handleDelete(subscriber.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <Trash2 className="h-4 w-4 inline" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Compose Newsletter Modal */}
                {showComposeModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">Compose Newsletter</h2>
                                    <button
                                        onClick={() => setShowComposeModal(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <form onSubmit={handleSendNewsletter}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            value={newsletter.subject}
                                            onChange={(e) => setNewsletter({ ...newsletter, subject: e.target.value })}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Enter newsletter subject..."
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Content
                                        </label>
                                        <textarea
                                            value={newsletter.content}
                                            onChange={(e) => setNewsletter({ ...newsletter, content: e.target.value })}
                                            rows="12"
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Write your newsletter content here..."
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                        <p className="text-sm text-blue-800">
                                            📧 This will be sent to <strong>{subscribers.filter(s => s.is_active).length} active subscribers</strong>
                                        </p>
                                        <p className="text-xs text-blue-600 mt-2">
                                            Each email will include an unsubscribe link automatically.
                                        </p>
                                    </div>

                                    <div className="flex gap-3 justify-end">
                                        <button
                                            type="button"
                                            onClick={() => setShowComposeModal(false)}
                                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={sending}
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 flex items-center gap-2"
                                        >
                                            <Send className="h-4 w-4" />
                                            {sending ? 'Sending...' : 'Send Newsletter'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
