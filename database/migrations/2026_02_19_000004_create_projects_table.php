<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->text('overview');
            $table->string('client_name');
            $table->string('industry');
            $table->string('project_type'); // web, mobile, enterprise, consulting, etc.
            $table->json('technologies')->nullable(); // JSON array of technologies used
            $table->json('features')->nullable(); // JSON array of key features
            $table->json('outcomes')->nullable(); // JSON array of project outcomes/results
            $table->string('image')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('website_url')->nullable();
            $table->string('app_store_url')->nullable();
            $table->string('google_play_url')->nullable();
            $table->date('completion_date')->nullable();
            $table->integer('budget_range')->nullable(); // in thousands
            $table->integer('team_size')->nullable();
            $table->boolean('is_active')->default(true);
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
