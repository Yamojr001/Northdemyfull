<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrustedCompanyController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\TeamMemberController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return view('welcome');
    })->name('dashboard');

    Route::get('/{any?}', function () {
        return view('welcome');
    })->where('any', '.*');
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