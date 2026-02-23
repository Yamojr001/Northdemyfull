import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import AdminCrud from '../../Components/AdminCrud';

const Projects = () => {
  const fields = [
    { name: 'title', label: 'Title' },
    { name: 'slug', label: 'Slug' },
    { name: 'description', label: 'Description', type: 'textarea', fullWidth: true },
    { name: 'overview', label: 'Overview', type: 'textarea', fullWidth: true },
    { name: 'client_name', label: 'Client Name' },
    { name: 'industry', label: 'Industry' },
    {
      name: 'project_type',
      label: 'Project Type',
      type: 'select',
      options: [
        { value: 'web', label: 'Web' },
        { value: 'mobile', label: 'Mobile' },
        { value: 'enterprise', label: 'Enterprise' },
        { value: 'consulting', label: 'Consulting' },
        { value: 'hybrid', label: 'Hybrid' },
        { value: 'other', label: 'Other' },
      ],
    },
    { name: 'technologies', label: 'Technologies (comma separated)', type: 'array', fullWidth: true },
    { name: 'features', label: 'Features (comma separated)', type: 'array', fullWidth: true },
    { name: 'outcomes', label: 'Outcomes (comma separated)', type: 'array', fullWidth: true },
    { name: 'image', label: 'Image', type: 'image' },
    { name: 'thumbnail', label: 'Thumbnail', type: 'image' },
    { name: 'website_url', label: 'Website URL' },
    { name: 'app_store_url', label: 'App Store URL' },
    { name: 'google_play_url', label: 'Google Play URL' },
    { name: 'completion_date', label: 'Completion Date', type: 'date' },
    { name: 'budget_range', label: 'Budget Range', type: 'number' },
    { name: 'team_size', label: 'Team Size', type: 'number' },
    { name: 'order', label: 'Order', type: 'number' },
    { name: 'is_active', label: 'Active', type: 'checkbox', checkboxLabel: 'Active' },
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'client_name', label: 'Client' },
    { key: 'industry', label: 'Industry' },
    { key: 'project_type', label: 'Type' },
  ];

  return (
    <AdminLayout title="Projects">
      <AdminCrud
        title="Projects"
        description="Create, update, and delete enterprise projects and case studies."
        endpoint="/api/admin/projects"
        fields={fields}
        columns={columns}
      />
    </AdminLayout>
  );
};

export default Projects;
