<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrustedCompanyController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\TeamMemberController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\IncubationProgramController;
use App\Http\Controllers\MentorshipProgramController;
use App\Http\Controllers\TrainingProgramController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\AdminContactController;
use App\Http\Controllers\AdminNewsletterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Pages
Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/programs', function () {
    return Inertia::render('Programs');
})->name('programs');

Route::get('/programs/training', function () {
    return Inertia::render('Training');
})->name('programs.training');

Route::get('/programs/incubation', function () {
    return Inertia::render('Incubation');
})->name('programs.incubation');

Route::get('/programs/mentorship', function () {
    return Inertia::render('Mentorship');
})->name('programs.mentorship');

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

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/services/consulting', function () {
    return Inertia::render('Consulting');
})->name('services.consulting');

Route::get('/services/digital-safety', function () {
    return Inertia::render('DigitalSafety');
})->name('services.digital-safety');

Route::get('/services/enterprise', function () {
    return Inertia::render('EnterpriseServices');
})->name('services.enterprise');

Route::get('/service/{id}', function ($id) {
    return Inertia::render('ServiceDetail', ['id' => $id]);
})->name('service.detail');

Route::get('/enterprise', function () {
    return Inertia::render('Enterprise');
})->name('enterprise');

Route::get('/projects', function () {
    return Inertia::render('Projects');
})->name('projects');

Route::get('/projects/{slug}', function ($slug) {
    return Inertia::render('ProjectDetail', ['slug' => $slug]);
})->name('projects.show');

Route::get('/my-love', function () {
    return Inertia::render('Auth/Login');
})->name('login');

// Public API Routes (no auth required)
Route::prefix('api')->group(function () {
    // Testimonials & Partners
    Route::get('/testimonials', [TestimonialController::class, 'index']);
    Route::get('/partners', [PartnerController::class, 'index']);
    Route::get('/services', [App\Http\Controllers\ServiceController::class, 'index']);
    
    // Programs - Training
    Route::get('/training', [TrainingProgramController::class, 'index']);
    Route::get('/training/{training_program}', [TrainingProgramController::class, 'show']);
    
    // Programs - Incubation
    Route::get('/incubation', [IncubationProgramController::class, 'index']);
    Route::get('/incubation/{incubation_program}', [IncubationProgramController::class, 'show']);
    
    // Programs - Mentorship
    Route::get('/mentorship', [MentorshipProgramController::class, 'index']);
    Route::get('/mentorship/{mentorship_program}', [MentorshipProgramController::class, 'show']);
    
    // General Programs
    Route::get('/programs', [ProgramController::class, 'index']);
    Route::get('/programs/{program}', [ProgramController::class, 'show']);
    
    // Projects
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/{project}', [ProjectController::class, 'show']);
    Route::get('/projects/type/{type}', [ProjectController::class, 'byType']);
    
    // Team Members (Public)
    Route::get('/team-members', [TeamMemberController::class, 'index']);
    
    // Contact Form
    Route::post('/contact', [ContactController::class, 'store']);
    
    // Newsletter Subscription
    Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
});

// Newsletter unsubscribe routes (public, no auth)
Route::get('/newsletter/unsubscribe/{token}', [NewsletterController::class, 'unsubscribe']);
Route::post('/newsletter/resubscribe/{token}', [NewsletterController::class, 'resubscribe']);

// Admin API Routes
Route::prefix('api/admin')->group(function () {
    Route::apiResource('trusted-companies', TrustedCompanyController::class);
    Route::apiResource('programs', ProgramController::class);
    Route::apiResource('training', TrainingProgramController::class);
    Route::apiResource('incubation', IncubationProgramController::class);
    Route::apiResource('mentorship', MentorshipProgramController::class);
    Route::apiResource('partners', PartnerController::class);
    Route::apiResource('team-members', TeamMemberController::class);
    Route::apiResource('testimonials', TestimonialController::class);
    Route::apiResource('projects', ProjectController::class);
    Route::apiResource('users', AdminUserController::class);
    
    // Contact Management
    Route::apiResource('contacts', AdminContactController::class);
    Route::get('contacts-stats', [AdminContactController::class, 'stats']);
    Route::post('contacts/mark-read', [AdminContactController::class, 'markAsRead']);
    
    // Newsletter Management
    Route::apiResource('newsletter-subscribers', AdminNewsletterController::class);
    Route::get('newsletter-stats', [AdminNewsletterController::class, 'stats']);
    Route::post('newsletter-subscribers/send', [AdminNewsletterController::class, 'sendNewsletter']);
    Route::put('newsletter-subscribers/{id}/toggle-status', [AdminNewsletterController::class, 'toggleStatus']);
});

// Admin Routes
Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
    Route::get('/team-members', function () {
        return Inertia::render('Admin/TeamMembers');
    })->name('admin.team-members');
    Route::get('/projects', function () {
        return Inertia::render('Admin/Projects');
    })->name('admin.projects');
    Route::get('/programs', function () {
        return Inertia::render('Admin/Programs');
    })->name('admin.programs');
    Route::get('/partners', function () {
        return Inertia::render('Admin/Partners');
    })->name('admin.partners');
    Route::get('/testimonials', function () {
        return Inertia::render('Admin/Testimonials');
    })->name('admin.testimonials');
    Route::get('/users', function () {
        return Inertia::render('Admin/Users');
    })->name('admin.users');
    Route::get('/contacts', function () {
        return Inertia::render('Admin/Contacts');
    })->name('admin.contacts');
    Route::get('/newsletter', function () {
        return Inertia::render('Admin/Newsletter');
    })->name('admin.newsletter');
});

// Authenticated Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
