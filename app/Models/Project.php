<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'overview',
        'client_name',
        'industry',
        'project_type',
        'technologies',
        'features',
        'outcomes',
        'image',
        'thumbnail',
        'website_url',
        'app_store_url',
        'google_play_url',
        'completion_date',
        'budget_range',
        'team_size',
        'is_active',
        'order'
    ];

    protected $casts = [
        'technologies' => 'array',
        'features' => 'array',
        'outcomes' => 'array',
        'is_active' => 'boolean',
        'completion_date' => 'date'
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc');
    }

    public function scopeByType($query, $type)
    {
        return $query->where('project_type', $type);
    }
}
