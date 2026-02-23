<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        Testimonial::create([
            'quote' => 'NorthDemy transformed our entire healthcare system. The Bloom Health Initiative platform they built has enabled us to reach over 50,000 patients in remote areas. Their expertise in health-tech is unmatched.',
            'author' => 'Dr. Maryam Abubakar',
            'role' => 'Director, Bloom Health Initiative',
            'image' => 'https://ui-avatars.com/api/?name=Maryam+Abubakar&size=400&background=10b981&color=fff',
            'order' => 1,
            'is_active' => true
        ]);

        Testimonial::create([
            'quote' => 'The livestock management app NorthDemy developed for us has revolutionized how farmers in Jigawa State manage their livestock. We have seen a 40% increase in productivity and early disease detection has saved countless animals.',
            'author' => 'Hon. Ibrahim Musa',
            'role' => 'Commissioner, Ministry of Livestock, Jigawa State',
            'image' => 'https://ui-avatars.com/api/?name=Ibrahim+Musa&size=400&background=2563eb&color=fff',
            'order' => 2,
            'is_active' => true
        ]);

        Testimonial::create([
            'quote' => 'Our ERP implementation was seamless thanks to NorthDemy\'s expertise. They delivered on time, within budget, and provided exceptional training to our team. The efficiency gains have been remarkable - we have reduced operational costs by 35%.',
            'author' => 'Engr. Fatima Suleiman',
            'role' => 'CTO, Premier Manufacturing Group',
            'image' => 'https://ui-avatars.com/api/?name=Fatima+Suleiman&size=400&background=7c3aed&color=fff',
            'order' => 3,
            'is_active' => true
        ]);

        Testimonial::create([
            'quote' => 'The training program at NorthDemy gave me the skills I needed to launch my career as a software developer. Within 6 months of graduating, I landed a job at a leading fintech company. The instructors are world-class and the curriculum is industry-relevant.',
            'author' => 'Aisha Bello',
            'role' => 'Software Engineer, AfriPay Technologies',
            'image' => 'https://ui-avatars.com/api/?name=Aisha+Bello&size=400&background=dc2626&color=fff',
            'order' => 4,
            'is_active' => true
        ]);

        Testimonial::create([
            'quote' => 'NorthDemy\'s incubation program was instrumental in helping us secure seed funding and launch our startup. The mentorship, resources, and connections they provided were invaluable. We are now serving 10,000+ customers across West Africa.',
            'author' => 'Usman Aliyu',
            'role' => 'Founder & CEO, AgriConnect',
            'image' => 'https://ui-avatars.com/api/?name=Usman+Aliyu&size=400&background=0891b2&color=fff',
            'order' => 5,
            'is_active' => true
        ]);

        Testimonial::create([
            'quote' => 'The cybersecurity solutions NorthDemy implemented have given us peace of mind. In an industry where trust is everything, their Digital Safety services ensure our platform and customer data are secure. Zero breaches in 3 years of operations.',
            'author' => 'Mohammed Yusuf',
            'role' => 'Head of Security, Northern Bank',
            'image' => 'https://ui-avatars.com/api/?name=Mohammed+Yusuf&size=400&background=ea580c&color=fff',
            'order' => 6,
            'is_active' => true
        ]);

        Testimonial::create([
            'quote' => 'As a partner organization, we have worked with NorthDemy on multiple government digital transformation projects. Their professionalism, technical excellence, and commitment to delivering impact is consistently impressive.',
            'author' => 'Prof. Zainab Hassan',
            'role' => 'Director-General, National Digital Authority',
            'image' => 'https://ui-avatars.com/api/?name=Zainab+Hassan&size=400&background=10b981&color=fff',
            'order' => 7,
            'is_active' => true
        ]);

        Testimonial::create([
            'quote' => 'The real estate platform NorthDemy built for us has transformed how we do business. The 3D virtual tours and advanced search features have increased our conversion rate by 60%. Our agents love the intuitive CRM system.',
            'author' => 'Alhaji Sani Bello',
            'role' => 'Managing Director, African Properties Inc.',
            'image' => 'https://ui-avatars.com/api/?name=Sani+Bello&size=400&background=2563eb&color=fff',
            'order' => 8,
            'is_active' => true
        ]);
    }
}
