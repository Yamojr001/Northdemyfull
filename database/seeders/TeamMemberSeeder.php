<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class TeamMemberSeeder extends Seeder
{
    public function run(): void
    {
        // Leadership Team
        TeamMember::create([
            'name' => 'Dr. Amina Mohammed',
            'role' => 'Chief Executive Officer',
            'bio' => 'Dr. Amina has over 20 years of experience in digital transformation and enterprise technology. She holds a PhD in Computer Science from MIT and has led successful digital initiatives across Africa.',
            'category' => 'leadership',
            'image_url' => 'https://ui-avatars.com/api/?name=Amina+Mohammed&size=400&background=2563eb&color=fff',
            'linkedin' => 'https://linkedin.com/in/amina-mohammed',
            'twitter' => 'https://twitter.com/amina_mohammed',
            'email' => 'amina@northdemy.org',
            'order' => 1,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Yusuf Abdullahi',
            'role' => 'Chief Technology Officer',
            'bio' => 'Yusuf is a technology visionary with expertise in cloud infrastructure, AI, and cybersecurity. He has architected solutions for Fortune 500 companies and government institutions.',
            'category' => 'leadership',
            'image_url' => 'https://ui-avatars.com/api/?name=Yusuf+Abdullahi&size=400&background=2563eb&color=fff',
            'linkedin' => 'https://linkedin.com/in/yusuf-abdullahi',
            'twitter' => 'https://twitter.com/yusuf_tech',
            'email' => 'yusuf@northdemy.org',
            'order' => 2,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Fatima Ibrahim',
            'role' => 'Chief Operating Officer',
            'bio' => 'Fatima brings extensive experience in operations management and organizational excellence. She has successfully scaled multiple tech organizations across West Africa.',
            'category' => 'leadership',
            'image_url' => 'https://ui-avatars.com/api/?name=Fatima+Ibrahim&size=400&background=2563eb&color=fff',
            'linkedin' => 'https://linkedin.com/in/fatima-ibrahim',
            'facebook' => 'https://facebook.com/fatima.ibrahim',
            'email' => 'fatima@northdemy.org',
            'order' => 3,
            'is_active' => true
        ]);

        // Core Team Members
        TeamMember::create([
            'name' => 'Ibrahim Sani',
            'role' => 'Lead Software Engineer',
            'bio' => 'Ibrahim specializes in full-stack development with expertise in React, Laravel, and cloud architecture. He has delivered 50+ enterprise applications.',
            'category' => 'team',
            'image_url' => 'https://ui-avatars.com/api/?name=Ibrahim+Sani&size=400&background=10b981&color=fff',
            'linkedin' => 'https://linkedin.com/in/ibrahim-sani',
            'twitter' => 'https://twitter.com/ibrahim_dev',
            'email' => 'ibrahim@northdemy.org',
            'order' => 4,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Aisha Bello',
            'role' => 'Senior UX/UI Designer',
            'bio' => 'Aisha is passionate about creating intuitive and beautiful user experiences. She has designed award-winning interfaces for healthcare and fintech applications.',
            'category' => 'team',
            'image_url' => 'https://ui-avatars.com/api/?name=Aisha+Bello&size=400&background=10b981&color=fff',
            'linkedin' => 'https://linkedin.com/in/aisha-bello',
            'instagram' => 'https://instagram.com/aisha_designs',
            'email' => 'aisha@northdemy.org',
            'order' => 5,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Musa Abdullahi',
            'role' => 'DevOps Engineer',
            'bio' => 'Musa ensures our infrastructure is scalable, secure, and highly available. Expert in Kubernetes, Docker, and CI/CD pipelines.',
            'category' => 'team',
            'image_url' => 'https://ui-avatars.com/api/?name=Musa+Abdullahi&size=400&background=10b981&color=fff',
            'linkedin' => 'https://linkedin.com/in/musa-abdullahi',
            'twitter' => 'https://twitter.com/musa_devops',
            'email' => 'musa@northdemy.org',
            'order' => 6,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Zainab Usman',
            'role' => 'Data Scientist',
            'bio' => 'Zainab leverages machine learning and data analytics to drive insights. She has implemented predictive models for agriculture and healthcare sectors.',
            'category' => 'team',
            'image_url' => 'https://ui-avatars.com/api/?name=Zainab+Usman&size=400&background=10b981&color=fff',
            'linkedin' => 'https://linkedin.com/in/zainab-usman',
            'twitter' => 'https://twitter.com/zainab_data',
            'email' => 'zainab@northdemy.org',
            'order' => 7,
            'is_active' => true
        ]);

        // Board of Directors
        TeamMember::create([
            'name' => 'Prof. Bashir Garba',
            'role' => 'Board Chairman',
            'bio' => 'Professor of Information Systems at Bayero University. Over 30 years of experience in academia and technology policy. Advisor to multiple government ministries.',
            'category' => 'board',
            'image_url' => 'https://ui-avatars.com/api/?name=Bashir+Garba&size=400&background=7c3aed&color=fff',
            'linkedin' => 'https://linkedin.com/in/bashir-garba',
            'email' => 'bashir.garba@board.northdemy.org',
            'order' => 8,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Halima Suleiman',
            'role' => 'Board Member',
            'bio' => 'CEO of Northern Ventures. Serial entrepreneur and angel investor with a focus on technology startups. Board member of 5 tech companies.',
            'category' => 'board',
            'image_url' => 'https://ui-avatars.com/api/?name=Halima+Suleiman&size=400&background=7c3aed&color=fff',
            'linkedin' => 'https://linkedin.com/in/halima-suleiman',
            'twitter' => 'https://twitter.com/halima_ventures',
            'email' => 'halima.suleiman@board.northdemy.org',
            'order' => 9,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Engr. Ahmed Musa',
            'role' => 'Board Member',
            'bio' => 'Former Director-General of Nigerian Communications Commission. Expert in telecommunications policy and digital infrastructure development.',
            'category' => 'board',
            'image_url' => 'https://ui-avatars.com/api/?name=Ahmed+Musa&size=400&background=7c3aed&color=fff',
            'linkedin' => 'https://linkedin.com/in/ahmed-musa',
            'email' => 'ahmed.musa@board.northdemy.org',
            'order' => 10,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Dr. Hauwa Sani',
            'role' => 'Board Member',
            'bio' => 'Healthcare technology expert and founder of multiple health-tech startups. Advisor to WHO on digital health initiatives in Africa.',
            'category' => 'board',
            'image_url' => 'https://ui-avatars.com/api/?name=Hauwa+Sani&size=400&background=7c3aed&color=fff',
            'linkedin' => 'https://linkedin.com/in/hauwa-sani',
            'twitter' => 'https://twitter.com/dr_hauwa',
            'email' => 'hauwa.sani@board.northdemy.org',
            'order' => 11,
            'is_active' => true
        ]);

        // Board of Trustees
        TeamMember::create([
            'name' => 'Alhaji Sani Dangote',
            'role' => 'Chairman of Trustees',
            'bio' => 'Philanthropist and business leader. Founding trustee committed to advancing technology education and innovation in Northern Nigeria.',
            'category' => 'trustee',
            'image_url' => 'https://ui-avatars.com/api/?name=Sani+Dangote&size=400&background=dc2626&color=fff',
            'linkedin' => 'https://linkedin.com/in/sani-dangote',
            'email' => 'sani.dangote@trustees.northdemy.org',
            'order' => 12,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Dr. Amina Abubakar',
            'role' => 'Trustee',
            'bio' => 'Former Minister of Education. Champion of digital literacy and STEM education. Founder of multiple educational foundations.',
            'category' => 'trustee',
            'image_url' => 'https://ui-avatars.com/api/?name=Amina+Abubakar&size=400&background=dc2626&color=fff',
            'linkedin' => 'https://linkedin.com/in/amina-abubakar',
            'email' => 'amina.abubakar@trustees.northdemy.org',
            'order' => 13,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Chief Ibrahim Badamasi',
            'role' => 'Trustee',
            'bio' => 'Community leader and patron of technology initiatives. Advocate for youth empowerment and digital skills development.',
            'category' => 'trustee',
            'image_url' => 'https://ui-avatars.com/api/?name=Ibrahim+Badamasi&size=400&background=dc2626&color=fff',
            'linkedin' => 'https://linkedin.com/in/ibrahim-badamasi',
            'email' => 'ibrahim.badamasi@trustees.northdemy.org',
            'order' => 14,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Hajiya Rakiya Abdullahi',
            'role' => 'Trustee',
            'bio' => 'Women empowerment advocate and tech industry pioneer. First female CTO in Northern Nigeria. Mentor to hundreds of women in tech.',
            'category' => 'trustee',
            'image_url' => 'https://ui-avatars.com/api/?name=Rakiya+Abdullahi&size=400&background=dc2626&color=fff',
            'linkedin' => 'https://linkedin.com/in/rakiya-abdullahi',
            'twitter' => 'https://twitter.com/rakiya_tech',
            'email' => 'rakiya.abdullahi@trustees.northdemy.org',
            'order' => 15,
            'is_active' => true
        ]);

        // Training Team
        TeamMember::create([
            'name' => 'Kabiru Suleiman',
            'role' => 'Head of Training',
            'bio' => 'Expert trainer in software development and digital skills. Has trained over 2,000 developers across Nigeria.',
            'category' => 'training',
            'image_url' => 'https://ui-avatars.com/api/?name=Kabiru+Suleiman&size=400&background=ea580c&color=fff',
            'linkedin' => 'https://linkedin.com/in/kabiru-suleiman',
            'twitter' => 'https://twitter.com/kabiru_trainer',
            'email' => 'kabiru@northdemy.org',
            'order' => 16,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Safiya Ahmad',
            'role' => 'Training Coordinator',
            'bio' => 'Passionate about empowering youth through technology. Coordinates bootcamps and workshops across Northern Nigeria.',
            'category' => 'training',
            'image_url' => 'https://ui-avatars.com/api/?name=Safiya+Ahmad&size=400&background=ea580c&color=fff',
            'linkedin' => 'https://linkedin.com/in/safiya-ahmad',
            'instagram' => 'https://instagram.com/safiya_trains',
            'email' => 'safiya@northdemy.org',
            'order' => 17,
            'is_active' => true
        ]);

        // Incubation Team
        TeamMember::create([
            'name' => 'Usman Bello',
            'role' => 'Incubation Manager',
            'bio' => 'Startup mentor and business development expert. Has supported 30+ startups to secure funding and achieve growth.',
            'category' => 'incubation',
            'image_url' => 'https://ui-avatars.com/api/?name=Usman+Bello&size=400&background=0891b2&color=fff',
            'linkedin' => 'https://linkedin.com/in/usman-bello',
            'twitter' => 'https://twitter.com/usman_startups',
            'email' => 'usman@northdemy.org',
            'order' => 18,
            'is_active' => true
        ]);

        TeamMember::create([
            'name' => 'Khadija Musa',
            'role' => 'Startup Coach',
            'bio' => 'Former startup founder turned coach. Specializes in product development, market validation, and fundraising strategies.',
            'category' => 'incubation',
            'image_url' => 'https://ui-avatars.com/api/?name=Khadija+Musa&size=400&background=0891b2&color=fff',
            'linkedin' => 'https://linkedin.com/in/khadija-musa',
            'email' => 'khadija@northdemy.org',
            'order' => 19,
            'is_active' => true
        ]);
    }
}
