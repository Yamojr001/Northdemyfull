<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TrainingProgram extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'description',
        'short_description',
        'image_url',
        'category',
        'curriculum',
        'outcomes',
        'duration',
        'level',
        'instructor',
        'price',
        'max_participants',
        'format',
        'start_date',
        'end_date',
        'is_active',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'is_active' => 'boolean',
        'price' => 'decimal:2',
    ];
}
