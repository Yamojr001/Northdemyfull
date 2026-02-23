<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MentorshipProgram extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'description',
        'short_description',
        'image_url',
        'category',
        'benefits',
        'requirements',
        'duration',
        'level',
        'mentor_name',
        'mentor_title',
        'mentor_bio',
        'mentor_image',
        'participants_limit',
        'start_date',
        'end_date',
        'is_active',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'is_active' => 'boolean',
    ];
}
