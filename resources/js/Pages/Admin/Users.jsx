import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import AdminCrud from '../../Components/AdminCrud';

const Users = () => {
  const fields = [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email', type: 'email' },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
      ],
    },
    { name: 'password', label: 'Password', type: 'password', skipIfEmpty: true },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ];

  return (
    <AdminLayout title="Users">
      <AdminCrud
        title="Users"
        description="Create, update, and delete user accounts."
        endpoint="/api/admin/users"
        fields={fields}
        columns={columns}
      />
    </AdminLayout>
  );
};

export default Users;
