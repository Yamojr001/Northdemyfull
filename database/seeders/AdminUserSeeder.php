<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@northdemy.org',
            'role' => 'admin',
            'password' => Hash::make('NorthDemy@2026!SecureAdmin#Pass$'),
            'email_verified_at' => now(),
        ]);
    }
}
