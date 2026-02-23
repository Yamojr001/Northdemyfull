<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Bloom Health Initiative',
                'slug' => 'bloom-health-initiative',
                'description' => 'Comprehensive healthcare platform serving underserved communities across West Africa',
                'overview' => 'Bloom Health Initiative is a comprehensive digital health platform designed to improve healthcare accessibility and outcomes in underserved communities. We developed the full-stack solution including web dashboard, mobile app, and backend infrastructure to support telemedicine, patient records management, and health data analytics.',
                'client_name' => 'Bloom Health Initiative',
                'industry' => 'Healthcare Technology',
                'project_type' => 'web',
                'technologies' => json_encode(['React', 'Laravel', 'PostgreSQL', 'AWS', 'Twilio']),
                'features' => json_encode([
                    'Telemedicine consultation platform',
                    'Patient electronic health records (EHR)',
                    'Appointment scheduling system',
                    'Health data analytics dashboard',
                    'Mobile app for patients and providers',
                    'SMS and voice integration',
                    'Multi-language support'
                ]),
                'outcomes' => json_encode([
                    '50,000+ registered patients',
                    '1,000+ healthcare providers',
                    '200,000+ consultations facilitated',
                    '95% patient satisfaction rate',
                    'Reduced patient wait times by 60%'
                ]),
                'image' => 'https://prep-ai.xyz/ogasaid/bloom.jpg',
                'thumbnail' => 'https://prep-ai.xyz/ogasaid/bloom-thumb.jpg',
                'website_url' => 'https://bloomhealthinitiative.org/',
                'completion_date' => '2024-06-15',
                'budget_range' => 250,
                'team_size' => 8,
                'is_active' => true,
                'order' => 1
            ],
            [
                'title' => 'Jigawa State Livestock Management Mobile App',
                'slug' => 'jigawa-livestock-app',
                'description' => 'Agricultural mobile application for livestock monitoring and management in Jigawa State',
                'overview' => 'A sophisticated mobile application developed for the Jigawa State Ministry of Livestock to modernize livestock management, veterinary services, and agricultural data collection. The app enables farmers to track livestock health, access veterinary services, and report disease outbreaks in real-time.',
                'client_name' => 'Jigawa State Ministry of Livestock',
                'industry' => 'Agriculture & Government',
                'project_type' => 'mobile',
                'technologies' => json_encode(['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Mapbox']),
                'features' => json_encode([
                    'Real-time livestock health tracking',
                    'Veterinary appointment scheduling',
                    'Disease outbreak reporting system',
                    'GPS-based farm location mapping',
                    'Livestock vaccination records',
                    'Government advisory broadcast',
                    'Market price information',
                    'Offline functionality'
                ]),
                'outcomes' => json_encode([
                    '25,000+ active farmers',
                    'Early detection of 3 disease outbreaks',
                    '40% improvement in veterinary response time',
                    '₦500M+ economic impact',
                    'Expanded to 2 additional states'
                ]),
                'image' => 'https://prep-ai.xyz/ogasaid/jigawa.jpg',
                'thumbnail' => 'https://prep-ai.xyz/ogasaid/jigawa-thumb.jpg',
                'google_play_url' => 'https://play.google.com/store/apps/details?id=com.jigawa.livestock',
                'completion_date' => '2024-03-20',
                'budget_range' => 120,
                'team_size' => 6,
                'is_active' => true,
                'order' => 2
            ],
            [
                'title' => 'Enterprise Resource Planning (ERP) System',
                'slug' => 'enterprise-erp-system',
                'description' => 'Custom ERP solution for large-scale manufacturing and distribution enterprise',
                'overview' => 'We designed and implemented a comprehensive ERP system for a multi-facility manufacturing enterprise. The solution integrates supply chain management, inventory control, financial management, and human resources into a unified platform supporting 500+ users across multiple locations.',
                'client_name' => 'Leading Manufacturing Group',
                'industry' => 'Manufacturing & Distribution',
                'project_type' => 'enterprise',
                'technologies' => json_encode(['SAP Integration', 'C#/.NET', 'SQL Server', 'Azure', 'Power BI']),
                'features' => json_encode([
                    'Integrated supply chain management',
                    'Real-time inventory tracking',
                    'Financial module with multi-currency support',
                    'HR and payroll management',
                    'Production planning and scheduling',
                    'Quality control system',
                    'Advanced analytics and reporting'
                ]),
                'outcomes' => json_encode([
                    '₦2.5B operational efficiency gains',
                    '35% reduction in inventory costs',
                    '99.9% system uptime',
                    'Reduced financial close from 15 days to 3 days',
                    'Supporting 500+ concurrent users'
                ]),
                'image' => 'https://prep-ai.xyz/ogasaid/erp.jpg',
                'thumbnail' => 'https://prep-ai.xyz/ogasaid/erp-thumb.jpg',
                'completion_date' => '2024-01-30',
                'budget_range' => 450,
                'team_size' => 12,
                'is_active' => true,
                'order' => 3
            ],
            [
                'title' => 'Financial Services Platform',
                'slug' => 'fintech-platform',
                'description' => 'Secure fintech platform providing payment processing and financial inclusion services',
                'overview' => 'A modern financial services platform built to provide secure payment processing, money transfer, and financial inclusion services to underserved populations. The platform handles millions of transactions daily with enterprise-grade security and compliance.',
                'client_name' => 'African FinTech Solutions',
                'industry' => 'Financial Technology',
                'project_type' => 'web',
                'technologies' => json_encode(['Python', 'Django', 'PostgreSQL', 'Kubernetes', 'TensorFlow']),
                'features' => json_encode([
                    'Real-time payment processing',
                    'Multi-currency support',
                    'Fraud detection using ML',
                    'KYC/AML compliance engine',
                    'Mobile money integration',
                    'Transaction analytics',
                    'API for third-party integration'
                ]),
                'outcomes' => json_encode([
                    '2M+ registered users',
                    '₦15B daily transaction volume',
                    'PCI DSS Level 1 certified',
                    '99.99% uptime',
                    '45% increase in financial inclusion'
                ]),
                'image' => 'https://prep-ai.xyz/ogasaid/fintech.jpg',
                'thumbnail' => 'https://prep-ai.xyz/ogasaid/fintech-thumb.jpg',
                'website_url' => 'https://africanfintech.example.com',
                'completion_date' => '2024-05-10',
                'budget_range' => 350,
                'team_size' => 15,
                'is_active' => true,
                'order' => 4
            ],
            [
                'title' => 'E-Learning Platform for Universities',
                'slug' => 'university-elearning',
                'description' => 'Comprehensive online learning platform serving 50,000+ students across multiple universities',
                'overview' => 'We developed a scalable e-learning platform adopted by leading universities to deliver online education. The platform supports interactive courses, real-time collaboration, assessment tools, and analytics to enhance the learning experience for 50,000+ students.',
                'client_name' => 'Coalition of West African Universities',
                'industry' => 'Education Technology',
                'project_type' => 'web',
                'technologies' => json_encode(['React', 'GraphQL', 'Node.js', 'MongoDB', 'AWS Lambda']),
                'features' => json_encode([
                    'Live classroom sessions with video',
                    'Course management system',
                    'Interactive assignments and quizzes',
                    'Student progress tracking',
                    'Peer collaboration tools',
                    'Content library with 10,000+ resources',
                    'Mobile access'
                ]),
                'outcomes' => json_encode([
                    '50,000+ active students',
                    '200+ courses published',
                    '85% course completion rate',
                    '92% student satisfaction',
                    '60% reduction in dropout rates'
                ]),
                'image' => 'https://prep-ai.xyz/ogasaid/elearning.jpg',
                'thumbnail' => 'https://prep-ai.xyz/ogasaid/elearning-thumb.jpg',
                'completion_date' => '2024-04-05',
                'budget_range' => 280,
                'team_size' => 10,
                'is_active' => true,
                'order' => 5
            ],
            [
                'title' => 'Government Digital Identity System',
                'slug' => 'digital-identity-system',
                'description' => 'Secure national digital identity and authentication infrastructure',
                'overview' => 'A government-grade digital identity system providing secure authentication, citizen identification, and service delivery across multiple government agencies. The system processes millions of identity verifications daily with enterprise-level security and compliance.',
                'client_name' => 'National Digital Authority',
                'industry' => 'Government & Security',
                'project_type' => 'enterprise',
                'technologies' => json_encode(['Java', 'Spring Boot', 'Oracle Database', 'Blockchain', 'HSM']),
                'features' => json_encode([
                    'Biometric verification (fingerprint, facial)',
                    'Secure identity document issuance',
                    'Multi-factor authentication',
                    'Blockchain-based verification',
                    'Integration with government services',
                    'Audit trail and compliance reporting',
                    'Mobile verification app'
                ]),
                'outcomes' => json_encode([
                    '5M+ citizens registered',
                    '100M+ verifications processed',
                    'ISO 27001 certified',
                    'Zero security breaches',
                    'Reduced service delivery time by 75%'
                ]),
                'image' => 'https://prep-ai.xyz/ogasaid/identity.jpg',
                'thumbnail' => 'https://prep-ai.xyz/ogasaid/identity-thumb.jpg',
                'completion_date' => '2023-11-20',
                'budget_range' => 500,
                'team_size' => 18,
                'is_active' => true,
                'order' => 6
            ],
            [
                'title' => 'Real Estate Management Platform',
                'slug' => 'real-estate-platform',
                'description' => 'Full-stack property management and listing platform connecting buyers, sellers, and agents',
                'overview' => 'A comprehensive real estate platform serving as a marketplace for property listings, management, and transactions. Features virtual tours, advanced search, agent collaboration tools, and secure transaction management for 500+ agents and 100,000+ properties.',
                'client_name' => 'African Properties Inc.',
                'industry' => 'Real Estate Technology',
                'project_type' => 'web',
                'technologies' => json_encode(['Vue.js', 'Laravel', 'PostgreSQL', 'Redis', 'AWS S3', '3D.js']),
                'features' => json_encode([
                    '3D virtual tours',
                    'Advanced property search with filters',
                    'CRM for real estate agents',
                    'Document management',
                    'Secure escrow service',
                    'Analytics dashboard',
                    'Mobile app for property search'
                ]),
                'outcomes' => json_encode([
                    '500+ agent partnerships',
                    '100,000+ property listings',
                    '₦50B annual transaction volume',
                    '2M+ monthly active users',
                    '98% agent satisfaction'
                ]),
                'image' => 'https://prep-ai.xyz/ogasaid/realestate.jpg',
                'thumbnail' => 'https://prep-ai.xyz/ogasaid/realestate-thumb.jpg',
                'website_url' => 'https://africanproperties.example.com',
                'completion_date' => '2024-02-15',
                'budget_range' => 200,
                'team_size' => 9,
                'is_active' => true,
                'order' => 7
            ],
            [
                'title' => 'Renewable Energy Monitoring System',
                'slug' => 'renewable-energy-monitoring',
                'description' => 'IoT-based solar farm monitoring and energy management platform',
                'overview' => 'An advanced IoT monitoring system for solar installations and renewable energy facilities. The platform provides real-time monitoring, predictive maintenance, and energy optimization for 200+ solar installations generating 500MW+ of renewable energy.',
                'client_name' => 'Pan-African Green Energy',
                'industry' => 'Clean Energy & IoT',
                'project_type' => 'hybrid',
                'technologies' => json_encode(['Python', 'IoT/MQTT', 'InfluxDB', 'Grafana', 'Machine Learning']),
                'features' => json_encode([
                    'Real-time energy generation monitoring',
                    'Predictive maintenance using ML',
                    'Performance analytics and reporting',
                    'IoT sensor integration',
                    'Mobile alerts',
                    'Weather integration',
                    'Revenue tracking'
                ]),
                'outcomes' => json_encode([
                    '200+ installations monitored',
                    '500MW+ energy generation tracked',
                    '30% improvement in efficiency',
                    'Maintenance costs reduced by 45%',
                    '₦200M annual revenue increase'
                ]),
                'image' => 'https://prep-ai.xyz/ogasaid/energy.jpg',
                'thumbnail' => 'https://prep-ai.xyz/ogasaid/energy-thumb.jpg',
                'completion_date' => '2024-07-10',
                'budget_range' => 300,
                'team_size' => 11,
                'is_active' => true,
                'order' => 8
            ]
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
