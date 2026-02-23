import React, { useState, useEffect } from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import { Mail, Eye, Trash2, Check, Archive, Clock, Search, Filter } from 'lucide-react';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedContact, setSelectedContact] = useState(null);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch('/api/admin/contacts');
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            console.error('Failed to fetch contacts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleView = async (contact) => {
        setSelectedContact(contact);
        
        // Mark as read
        if (!contact.is_read) {
            try {
                await fetch(`/api/admin/contacts/${contact.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ is_read: true })
                });
                fetchContacts();
            } catch (error) {
                console.error('Failed to mark as read:', error);
            }
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this contact?')) return;

        try {
            await fetch(`/api/admin/contacts/${id}`, {
                method: 'DELETE'
            });
            setContacts(contacts.filter(c => c.id !== id));
            if (selectedContact?.id === id) {
                setSelectedContact(null);
            }
        } catch (error) {
            console.error('Failed to delete contact:', error);
        }
    };

    const handleStatusChange = async (id, status) => {
        try {
            await fetch(`/api/admin/contacts/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            fetchContacts();
            if (selectedContact?.id === id) {
                setSelectedContact({ ...selectedContact, status });
            }
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const filteredContacts = contacts.filter(contact => {
        const matchesFilter = filter === 'all' || 
            (filter === 'unread' && !contact.is_read) ||
            (filter === 'pending' && contact.status === 'pending') ||
            (filter === 'replied' && contact.status === 'replied') ||
            (filter === 'archived' && contact.status === 'archived');

        const matchesSearch = searchTerm === '' ||
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.subject.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    const getStatusBadge = (status) => {
        const styles = {
            pending: 'bg-yellow-100 text-yellow-800',
            replied: 'bg-green-100 text-green-800',
            archived: 'bg-gray-100 text-gray-800'
        };
        return styles[status] || styles.pending;
    };

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
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
                    <p className="text-gray-600">View and manage contact form submissions</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-sm text-gray-600">Total Messages</div>
                        <div className="text-2xl font-bold">{contacts.length}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-sm text-gray-600">Unread</div>
                        <div className="text-2xl font-bold text-blue-600">
                            {contacts.filter(c => !c.is_read).length}
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-sm text-gray-600">Pending</div>
                        <div className="text-2xl font-bold text-yellow-600">
                            {contacts.filter(c => c.status === 'pending').length}
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-sm text-gray-600">Replied</div>
                        <div className="text-2xl font-bold text-green-600">
                            {contacts.filter(c => c.status === 'replied').length}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Contact List */}
                    <div className="lg:col-span-1 bg-white rounded-lg shadow">
                        <div className="p-4 border-b">
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search contacts..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {['all', 'unread', 'pending', 'replied', 'archived'].map(f => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`px-3 py-1 rounded text-sm ${
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
                        <div className="overflow-y-auto max-h-[600px]">
                            {loading ? (
                                <div className="p-4 text-center text-gray-500">Loading...</div>
                            ) : filteredContacts.length === 0 ? (
                                <div className="p-4 text-center text-gray-500">No contacts found</div>
                            ) : (
                                filteredContacts.map(contact => (
                                    <div
                                        key={contact.id}
                                        onClick={() => handleView(contact)}
                                        className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                                            !contact.is_read ? 'bg-blue-50' : ''
                                        } ${selectedContact?.id === contact.id ? 'bg-indigo-50' : ''}`}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="font-medium text-gray-900">{contact.name}</div>
                                                {!contact.is_read && (
                                                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                                                )}
                                            </div>
                                            <span className={`text-xs px-2 py-1 rounded ${getStatusBadge(contact.status)}`}>
                                                {contact.status}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-1">{contact.email}</div>
                                        <div className="text-sm text-gray-900 font-medium mb-1 truncate">
                                            {contact.subject}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {formatDate(contact.created_at)}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Contact Detail */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow">
                        {selectedContact ? (
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                                            {selectedContact.subject}
                                        </h2>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Mail className="h-4 w-4" />
                                                {selectedContact.email}
                                            </div>
                                            {selectedContact.phone && (
                                                <div>📞 {selectedContact.phone}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <select
                                            value={selectedContact.status}
                                            onChange={(e) => handleStatusChange(selectedContact.id, e.target.value)}
                                            className="px-3 py-2 border rounded-lg text-sm"
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="replied">Replied</option>
                                            <option value="archived">Archived</option>
                                        </select>
                                        <button
                                            onClick={() => handleDelete(selectedContact.id)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="text-sm text-gray-500 mb-2">
                                        From: <span className="font-medium text-gray-900">{selectedContact.name}</span>
                                    </div>
                                    <div className="text-sm text-gray-500 mb-4">
                                        Date: {formatDate(selectedContact.created_at)}
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-gray-900 mb-2">Message:</h3>
                                    <p className="text-gray-700 whitespace-pre-wrap">{selectedContact.message}</p>
                                </div>

                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    {/* <p className="text-sm text-blue-800">
                                        💡 <strong>Note:</strong> A copy of this message has been sent to yamojr001@gmail.com
                                    </p> */}
                                </div>
                            </div>
                        ) : (
                            <div className="p-12 text-center text-gray-500">
                                <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                                <p>Select a contact to view details</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
