<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mentorship_programs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('short_description')->nullable();
            $table->string('image_url')->nullable();
            $table->string('category')->default('mentorship');
            $table->text('benefits')->nullable();
            $table->text('requirements')->nullable();
            $table->string('duration')->default('3 months');
            $table->string('level')->default('All Levels');
            $table->string('mentor_name')->nullable();
            $table->string('mentor_title')->nullable();
            $table->text('mentor_bio')->nullable();
            $table->string('mentor_image')->nullable();
            $table->integer('participants_limit')->default(15);
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mentorship_programs');
    }
};
