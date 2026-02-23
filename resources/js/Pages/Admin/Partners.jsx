import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import AdminCrud from '../../Components/AdminCrud';

const Partners = () => {
  const fields = [
    { name: 'name', label: 'Name' },
    { name: 'logo_url', label: 'Logo', type: 'image' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'logo_url', label: 'Logo URL' },
  ];

  return (
    <AdminLayout title="Partners">
      <AdminCrud
        title="Partners"
        description="Create, update, and delete partner organizations and logos."
        endpoint="/api/admin/partners"
        fields={fields}
        columns={columns}
      />
    </AdminLayout>
  );
};

export default Partners;
