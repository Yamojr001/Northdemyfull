<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\Partner;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Seed Services
        Service::create([
            'title' => 'Talent Development',
            'description' => 'World-class training programs in cybersecurity, software development, and emerging technologies.',
            'icon' => 'GraduationCap',
            'link' => '/programs',
            'order' => 1,
            'is_active' => true
        ]);

        Service::create([
            'title' => 'Startup Incubation',
            'description' => 'From idea to market-ready product with funding, mentorship, and technical support.',
            'icon' => 'Rocket',
            'link' => '/incubation',
            'order' => 2,
            'is_active' => true
        ]);

        // Add more services as needed...

        // Seed Partners
        Partner::create([
            'name' => 'Microsoft',
            'logo_url' => 'microsoft-logo.png',
        ]);

        Partner::create([
            'name' => 'Google',
            'logo_url' => 'google-logo.png',
        ]);

        // Add more partners as needed...
    }
}