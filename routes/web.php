<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrustedCompanyController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\TeamMemberController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/programs', function () {
    return Inertia::render('Programs');
})->name('programs');

Route::get('/partners', function () {
    return Inertia::render('Partners');
})->name('partners');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('/team', function () {
    return Inertia::render('Team');
})->name('team');

Route::get('/board', function () {
    return Inertia::render('Board');
})->name('board');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/incubation-hub', function () {
    return Inertia::render('IncubationHub');
})->name('incubation');

Route::get('/service/{id}', function ($id) {
    return Inertia::render('ServiceDetail', ['id' => $id]);
})->name('service.detail');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('AdminDashboard');
    })->name('dashboard');
});

Route::prefix('api/admin')->middleware('auth')->group(function () {
    Route::apiResource('trusted-companies', TrustedCompanyController::class);
    Route::apiResource('programs', ProgramController::class);
    Route::apiResource('partners', PartnerController::class);
    Route::apiResource('team-members', TeamMemberController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';