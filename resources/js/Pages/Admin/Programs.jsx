import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import AdminCrud from '../../Components/AdminCrud';

const Programs = () => {
  const fields = [
    { name: 'title', label: 'Title' },
    { name: 'description', label: 'Description', type: 'textarea', fullWidth: true },
    { name: 'short_description', label: 'Short Description', type: 'textarea', fullWidth: true },
    { name: 'image_url', label: 'Image', type: 'image' },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: [
        { value: 'training', label: 'Training' },
        { value: 'incubation', label: 'Incubation' },
        { value: 'mentorship', label: 'Mentorship' },
      ],
    },
    { name: 'duration', label: 'Duration' },
    { name: 'level', label: 'Level' },
    { name: 'instructor', label: 'Instructor' },
    { name: 'curriculum', label: 'Curriculum', type: 'textarea', fullWidth: true },
    { name: 'outcomes', label: 'Outcomes', type: 'textarea', fullWidth: true },
    { name: 'price', label: 'Price', type: 'number' },
    { name: 'max_participants', label: 'Max Participants', type: 'number' },
    {
      name: 'format',
      label: 'Format',
      type: 'select',
      options: [
        { value: 'online', label: 'Online' },
        { value: 'offline', label: 'Offline' },
        { value: 'hybrid', label: 'Hybrid' },
      ],
    },
    { name: 'start_date', label: 'Start Date', type: 'date' },
    { name: 'end_date', label: 'End Date', type: 'date' },
    { name: 'is_active', label: 'Active', type: 'checkbox', checkboxLabel: 'Active' },
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'format', label: 'Format' },
    { key: 'price', label: 'Price' },
  ];

  return (
    <AdminLayout title="Programs">
      <AdminCrud
        title="Programs"
        description="Create, update, and delete training, incubation, and mentorship programs."
        endpoint="/api/admin/programs"
        fields={fields}
        columns={columns}
      />
    </AdminLayout>
  );
};

export default Programs;
