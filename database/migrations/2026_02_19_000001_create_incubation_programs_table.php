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
        Schema::create('incubation_programs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('short_description')->nullable();
            $table->string('image_url')->nullable();
            $table->string('category')->default('incubation');
            $table->text('benefits')->nullable();
            $table->text('requirements')->nullable();
            $table->string('duration')->default('6 months');
            $table->string('level')->default('All Levels');
            $table->string('instructor')->nullable();
            $table->decimal('funding_available', 10, 2)->nullable();
            $table->integer('batch_size')->default(20);
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
        Schema::dropIfExists('incubation_programs');
    }
};
