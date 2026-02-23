<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class IncubationProgram extends Model
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
        'instructor',
        'funding_available',
        'batch_size',
        'start_date',
        'end_date',
        'is_active',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'is_active' => 'boolean',
        'funding_available' => 'decimal:2',
    ];
}
