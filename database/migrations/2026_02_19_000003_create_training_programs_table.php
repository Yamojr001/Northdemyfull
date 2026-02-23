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
        Schema::create('training_programs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('short_description')->nullable();
            $table->string('image_url')->nullable();
            $table->string('category')->default('training');
            $table->text('curriculum')->nullable();
            $table->text('outcomes')->nullable();
            $table->string('duration')->default('12 weeks');
            $table->string('level')->default('Beginner');
            $table->string('instructor')->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->integer('max_participants')->default(30);
            $table->string('format')->default('hybrid'); // online, offline, hybrid
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
        Schema::dropIfExists('training_programs');
    }
};
