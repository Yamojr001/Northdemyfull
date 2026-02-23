<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('programs', function (Blueprint $table) {
            if (!Schema::hasColumn('programs', 'short_description')) {
                $table->text('short_description')->nullable();
            }
            if (!Schema::hasColumn('programs', 'category')) {
                $table->string('category')->default('training');
            }
            if (!Schema::hasColumn('programs', 'duration')) {
                $table->string('duration')->default('12 weeks');
            }
            if (!Schema::hasColumn('programs', 'level')) {
                $table->string('level')->default('Beginner');
            }
            if (!Schema::hasColumn('programs', 'instructor')) {
                $table->string('instructor')->nullable();
            }
            if (!Schema::hasColumn('programs', 'curriculum')) {
                $table->text('curriculum')->nullable();
            }
            if (!Schema::hasColumn('programs', 'outcomes')) {
                $table->text('outcomes')->nullable();
            }
            if (!Schema::hasColumn('programs', 'price')) {
                $table->decimal('price', 10, 2)->nullable();
            }
            if (!Schema::hasColumn('programs', 'max_participants')) {
                $table->integer('max_participants')->default(30);
            }
            if (!Schema::hasColumn('programs', 'format')) {
                $table->string('format')->default('hybrid');
            }
            if (!Schema::hasColumn('programs', 'start_date')) {
                $table->date('start_date')->nullable();
            }
            if (!Schema::hasColumn('programs', 'end_date')) {
                $table->date('end_date')->nullable();
            }
            if (!Schema::hasColumn('programs', 'is_active')) {
                $table->boolean('is_active')->default(true);
            }
        });
    }

    public function down(): void
    {
        Schema::table('programs', function (Blueprint $table) {
            $columns = [
                'short_description',
                'category',
                'duration',
                'level',
                'instructor',
                'curriculum',
                'outcomes',
                'price',
                'max_participants',
                'format',
                'start_date',
                'end_date',
                'is_active',
            ];
            foreach ($columns as $column) {
                if (Schema::hasColumn('programs', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
