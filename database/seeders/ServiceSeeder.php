<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'Talent Development',
                'description' => 'World-class training programs designed to upskill the next generation of African tech talents. From web development to cybersecurity, our comprehensive curriculum covers the latest technologies and industry best practices.',
                'icon' => 'GraduationCap',
                'link' => '/programs/training',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Startup Incubation',
                'description' => 'From idea to execution: we help transform innovative ideas into sustainable businesses. Our incubation program provides funding, mentorship, and access to investor networks.',
                'icon' => 'Rocket',
                'link' => '/programs/incubation',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'Cybersecurity Solutions',
                'description' => 'Enterprise-grade security infrastructure and consulting to protect your digital assets. We provide comprehensive threat assessment, penetration testing, and 24/7 security monitoring.',
                'icon' => 'ShieldCheck',
                'link' => '/contact',
                'order' => 3,
                'is_active' => true,
            ],
            [
                'title' => 'Enterprise Systems',
                'description' => 'Custom software solutions tailored to meet complex organizational requirements. Our expert team develops scalable, high-performance systems for businesses of all sizes.',
                'icon' => 'Code',
                'link' => '/contact',
                'order' => 4,
                'is_active' => true,
            ],
            [
                'title' => 'Digital Transformation',
                'description' => 'Strategic guidance to modernize your operations and embrace digital-first approaches. We help organizations optimize processes, automate workflows, and achieve digital maturity.',
                'icon' => 'TrendingUp',
                'link' => '/contact',
                'order' => 5,
                'is_active' => true,
            ],
            [
                'title' => 'Consulting & Advisory',
                'description' => 'Expert consultation on technology strategy, security, and organizational scaling. Our C-level advisors bring decades of experience to help drive your business forward.',
                'icon' => 'Users',
                'link' => '/contact',
                'order' => 6,
                'is_active' => true,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
