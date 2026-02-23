<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'quote',
        'author',
        'role',
        'image',
        'order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    // Scope for active testimonials
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // Scope for ordered testimonials
    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc');
    }
}