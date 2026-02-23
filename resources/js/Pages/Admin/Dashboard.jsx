import React, { useEffect, useMemo, useState } from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import { 
  Users, 
  Briefcase, 
  Award, 
  FileText, 
  TrendingUp, 
  Activity,
  ArrowUp
} from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [counts, setCounts] = useState({ partners: 0, users: 0 });
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const colorMap = useMemo(() => ({
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
  }), []);

  const timeAgo = (dateString) => {
    if (!dateString) return 'just now';
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
    ];
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
    return 'just now';
  };

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const [teamRes, projectsRes, programsRes, testimonialsRes, partnersRes, usersRes] = await Promise.all([
          fetch('/api/admin/team-members'),
          fetch('/api/admin/projects'),
          fetch('/api/admin/programs'),
          fetch('/api/admin/testimonials'),
          fetch('/api/admin/partners'),
          fetch('/api/admin/users'),
        ]);

        const [team, projects, programs, testimonials, partners, users] = await Promise.all([
          teamRes.json(),
          projectsRes.json(),
          programsRes.json(),
          testimonialsRes.json(),
          partnersRes.json(),
          usersRes.json(),
        ]);

        setStats([
          { icon: Users, label: 'Team Members', value: team.length, change: 'Total members', trend: 'neutral', color: 'blue' },
          { icon: Briefcase, label: 'Projects', value: projects.length, change: 'Total projects', trend: 'neutral', color: 'purple' },
          { icon: Award, label: 'Programs', value: programs.length, change: 'Total programs', trend: 'neutral', color: 'green' },
          { icon: FileText, label: 'Testimonials', value: testimonials.length, change: 'Total testimonials', trend: 'neutral', color: 'orange' },
        ]);

        setCounts({
          partners: partners.length,
          users: users.length,
        });

        const activityItems = [
          ...team.map((item) => ({
            action: 'Team member updated',
            user: item.name,
            time: item.updated_at || item.created_at,
            type: 'success',
          })),
          ...projects.map((item) => ({
            action: 'Project updated',
            user: item.title,
            time: item.updated_at || item.created_at,
            type: 'info',
          })),
          ...testimonials.map((item) => ({
            action: 'Testimonial updated',
            user: item.author,
            time: item.updated_at || item.created_at,
            type: 'success',
          })),
          ...partners.map((item) => ({
            action: 'Partner updated',
            user: item.name,
            time: item.updated_at || item.created_at,
            type: 'warning',
          })),
          ...users.map((item) => ({
            action: 'User updated',
            user: item.name,
            time: item.updated_at || item.created_at,
            type: 'info',
          })),
        ]
          .sort((a, b) => new Date(b.time) - new Date(a.time))
          .slice(0, 6)
          .map((item) => ({
            ...item,
            time: timeAgo(item.time),
          }));

        setRecentActivity(activityItems);
        setLastUpdated(new Date());
      } catch (err) {
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const quickActions = [
    { label: 'Add Team Member', path: '/admin/team-members/create', color: 'blue' },
    { label: 'Create Project', path: '/admin/projects/create', color: 'purple' },
    { label: 'Add Program', path: '/admin/programs/create', color: 'green' },
    { label: 'New Partner', path: '/admin/partners/create', color: 'orange' },
  ];

  return (
    <AdminLayout title="Dashboard">
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-600 font-semibold">
          {error}
        </div>
      )}

      {loading && (
        <div className="mb-8 bg-white rounded-2xl border border-slate-200 p-10 text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          <p className="mt-3 text-slate-600">Loading dashboard data...</p>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${colorMap[stat.color]?.bg || 'bg-slate-100'}`}>
                <stat.icon size={24} className={`${colorMap[stat.color]?.text || 'text-slate-600'}`} />
              </div>
              {stat.trend === 'up' && (
                <span className="flex items-center text-green-600 text-sm font-bold">
                  <ArrowUp size={16} />
                  <span className="ml-1">12%</span>
                </span>
              )}
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
            <p className="text-sm font-semibold text-slate-600 mb-1">{stat.label}</p>
            <p className="text-xs text-slate-400">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-slate-900">Recent Activity</h2>
              <Activity size={20} className="text-slate-400" />
            </div>
            <div className="space-y-4">
              {recentActivity.length === 0 && !loading && (
                <p className="text-sm text-slate-500">No recent activity found.</p>
              )}
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-green-500' : 
                    activity.type === 'info' ? 'bg-blue-500' : 
                    'bg-orange-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900">{activity.action}</p>
                    <p className="text-sm text-slate-600">{activity.user}</p>
                    <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-6">
            <h2 className="text-xl font-black mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all font-semibold text-sm"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-black text-slate-900 mb-4">Live Overview</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Partners</span>
                <span className="text-sm font-bold text-slate-900">{counts.partners}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Users</span>
                <span className="text-sm font-bold text-slate-900">{counts.users}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Last Refresh</span>
                <span className="text-sm font-bold text-slate-900">
                  {lastUpdated ? lastUpdated.toLocaleTimeString() : '—'}
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Updated</span>
                  <span className="font-semibold">
                    {lastUpdated ? lastUpdated.toLocaleDateString() : '—'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
