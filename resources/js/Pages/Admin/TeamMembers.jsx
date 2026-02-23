import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import AdminCrud from '../../Components/AdminCrud';

const TeamMembers = () => {
  const fields = [
    { name: 'name', label: 'Name' },
    { name: 'role', label: 'Role' },
    { name: 'bio', label: 'Bio', type: 'textarea', fullWidth: true },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: [
        { value: 'leadership', label: 'Leadership' },
        { value: 'team', label: 'Team' },
        { value: 'board', label: 'Board' },
        { value: 'trustee', label: 'Trustee' },
        { value: 'training', label: 'Training' },
        { value: 'incubation', label: 'Incubation' },
      ],
    },
    { name: 'image_url', label: 'Image', type: 'image' },
    { name: 'linkedin', label: 'LinkedIn' },
    { name: 'twitter', label: 'Twitter' },
    { name: 'facebook', label: 'Facebook' },
    { name: 'instagram', label: 'Instagram' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'order', label: 'Order', type: 'number' },
    { name: 'is_active', label: 'Active', type: 'checkbox', checkboxLabel: 'Active' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'category', label: 'Category' },
    { key: 'email', label: 'Email' },
  ];

  return (
    <AdminLayout title="Team Members">
      <AdminCrud
        title="Team Members"
        description="Create, update, and delete leadership, team, board, trustee, training, and incubation members."
        endpoint="/api/admin/team-members"
        fields={fields}
        columns={columns}
      />
    </AdminLayout>
  );
};

export default TeamMembers;
