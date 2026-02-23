<?php

namespace Database\Seeders;

use App\Models\Program;
use App\Models\TrainingProgram;
use App\Models\IncubationProgram;
use App\Models\MentorshipProgram;
use Illuminate\Database\Seeder;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Training Programs
        TrainingProgram::create([
            'title' => 'Full-Stack Web Development',
            'description' => 'Comprehensive training covering frontend (React, Vue) and backend (Node.js, Laravel) development',
            'short_description' => 'Master modern web development with hands-on projects',
            'image_url' => 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
            'category' => 'training',
            'duration' => '12 weeks',
            'level' => 'Beginner',
            'instructor' => 'Dr. Ahmed Hassan',
            'curriculum' => 'HTML, CSS, JavaScript, React, Node.js, MongoDB, Git',
            'outcomes' => 'Build production-ready web applications',
            'price' => 2999.00,
            'max_participants' => 30,
            'format' => 'hybrid',
            'start_date' => now()->addDays(30),
            'end_date' => now()->addDays(30 + 84),
            'is_active' => true,
        ]);

        TrainingProgram::create([
            'title' => 'Mobile App Development',
            'description' => 'Build native and cross-platform mobile applications for iOS and Android',
            'short_description' => 'Create stunning mobile apps with React Native and Flutter',
            'image_url' => 'https://images.unsplash.com/photo-1517694712708-62eeb5139e6f?w=500&h=300&fit=crop',
            'category' => 'training',
            'duration' => '10 weeks',
            'level' => 'Intermediate',
            'instructor' => 'Fatima Okonkwo',
            'curriculum' => 'React Native, Flutter, Firebase, State Management',
            'outcomes' => 'Deploy apps to App Store and Google Play',
            'price' => 2499.00,
            'max_participants' => 25,
            'format' => 'online',
            'start_date' => now()->addDays(45),
            'end_date' => now()->addDays(45 + 70),
            'is_active' => true,
        ]);

        TrainingProgram::create([
            'title' => 'Cybersecurity & Ethical Hacking',
            'description' => 'Learn to identify, prevent, and respond to security threats',
            'short_description' => 'Master cybersecurity fundamentals and ethical hacking',
            'image_url' => 'https://images.unsplash.com/photo-1526374965328-7f5e00bbed59?w=500&h=300&fit=crop',
            'category' => 'training',
            'duration' => '8 weeks',
            'level' => 'Intermediate',
            'instructor' => 'Chukwu Okafor',
            'curriculum' => 'Network Security, Penetration Testing, Encryption, Compliance',
            'outcomes' => 'CEH certification ready knowledge',
            'price' => 3299.00,
            'max_participants' => 20,
            'format' => 'offline',
            'start_date' => now()->addDays(60),
            'end_date' => now()->addDays(60 + 56),
            'is_active' => true,
        ]);

        TrainingProgram::create([
            'title' => 'Data Science & Analytics',
            'description' => 'Transform raw data into actionable insights using advanced analytics',
            'short_description' => 'Learn data analysis, visualization, and predictive modeling',
            'image_url' => 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop',
            'category' => 'training',
            'duration' => '14 weeks',
            'level' => 'Advanced',
            'instructor' => 'Prof. Amara Okonkwo',
            'curriculum' => 'Python, SQL, Pandas, NumPy, Scikit-learn, Tableau',
            'outcomes' => 'Build data pipelines and predictive models',
            'price' => 3599.00,
            'max_participants' => 25,
            'format' => 'hybrid',
            'start_date' => now()->addDays(75),
            'end_date' => now()->addDays(75 + 98),
            'is_active' => true,
        ]);

        // Incubation Programs
        IncubationProgram::create([
            'title' => 'Tech Startup Accelerator',
            'description' => '6-month intensive program designed to accelerate your tech startup from idea to Series A ready',
            'short_description' => 'Transform your idea into a funded, scalable business',
            'image_url' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
            'category' => 'incubation',
            'benefits' => 'Seed funding, office space, mentorship, investor access, networking',
            'requirements' => 'Strong team, viable product idea, commitment to program',
            'duration' => '6 months',
            'level' => 'All Levels',
            'instructor' => 'Entrepreneurship Team',
            'funding_available' => 50000.00,
            'batch_size' => 15,
            'start_date' => now()->addDays(45),
            'end_date' => now()->addDays(45 + 180),
            'is_active' => true,
        ]);

        IncubationProgram::create([
            'title' => 'FinTech Innovation Lab',
            'description' => 'Specialized incubation program for financial technology entrepreneurs',
            'short_description' => 'Build the future of finance with expert guidance',
            'image_url' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
            'category' => 'incubation',
            'benefits' => 'Seed funding, regulatory guidance, investor network, technical resources',
            'requirements' => 'FinTech focus, regulatory understanding, scalable solution',
            'duration' => '4 months',
            'level' => 'All Levels',
            'instructor' => 'Finance Innovation Team',
            'funding_available' => 75000.00,
            'batch_size' => 10,
            'start_date' => now()->addDays(60),
            'end_date' => now()->addDays(60 + 120),
            'is_active' => true,
        ]);

        IncubationProgram::create([
            'title' => 'Social Impact Ventures',
            'description' => 'Incubation for startups focused on solving social and environmental challenges',
            'short_description' => 'Build profitable businesses that create positive impact',
            'image_url' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
            'category' => 'incubation',
            'benefits' => 'Impact funding, CSR partnerships, NGO connections, grants access',
            'requirements' => 'Social/environmental focus, community engagement, scalability',
            'duration' => '6 months',
            'level' => 'All Levels',
            'instructor' => 'Impact Team',
            'funding_available' => 40000.00,
            'batch_size' => 12,
            'start_date' => now()->addDays(90),
            'end_date' => now()->addDays(90 + 180),
            'is_active' => true,
        ]);

        // Mentorship Programs
        MentorshipProgram::create([
            'title' => 'Leadership & Strategy Mentorship',
            'description' => 'One-on-one mentorship focused on developing leadership skills and strategic thinking',
            'short_description' => 'Learn from seasoned leaders and develop strategic vision',
            'image_url' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
            'category' => 'mentorship',
            'benefits' => 'Weekly 1-on-1 sessions, networking events, leadership framework training',
            'requirements' => 'Mid-level managers or founders, commitment to growth',
            'duration' => '3 months',
            'level' => 'Intermediate',
            'mentor_name' => 'Segun Adeyemi',
            'mentor_title' => 'CEO & Entrepreneur',
            'mentor_bio' => '20+ years in business, founded 3 successful companies',
            'participants_limit' => 8,
            'start_date' => now()->addDays(30),
            'end_date' => now()->addDays(30 + 90),
            'is_active' => true,
        ]);

        MentorshipProgram::create([
            'title' => 'Tech Product Management',
            'description' => 'Learn product management from industry veterans',
            'short_description' => 'Master the skills of building successful tech products',
            'image_url' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
            'category' => 'mentorship',
            'benefits' => 'Bi-weekly mentoring, product strategy training, portfolio development',
            'requirements' => 'Technology background, passion for product development',
            'duration' => '3 months',
            'level' => 'Intermediate',
            'mentor_name' => 'Zainab Ibrahim',
            'mentor_title' => 'Senior Product Manager',
            'mentor_bio' => 'Led product teams at top tech companies across Africa',
            'participants_limit' => 6,
            'start_date' => now()->addDays(45),
            'end_date' => now()->addDays(45 + 90),
            'is_active' => true,
        ]);

        MentorshipProgram::create([
            'title' => 'Sales & Business Development',
            'description' => 'Master the art of selling and building profitable business relationships',
            'short_description' => 'Learn enterprise sales and B2B deal-making from experts',
            'image_url' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
            'category' => 'mentorship',
            'benefits' => 'Sales training, deal simulation, networking with enterprise clients',
            'requirements' => 'Sales or business development role, target orientation',
            'duration' => '2 months',
            'level' => 'All Levels',
            'mentor_name' => 'Chisom Okonkwo',
            'mentor_title' => 'VP Sales',
            'mentor_bio' => 'Built sales teams generating $50M+ in annual revenue',
            'participants_limit' => 10,
            'start_date' => now()->addDays(60),
            'end_date' => now()->addDays(60 + 60),
            'is_active' => true,
        ]);
    }
}
