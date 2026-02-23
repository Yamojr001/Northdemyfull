<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('team_members', function (Blueprint $table) {
            $table->text('bio')->nullable()->after('role');
            $table->string('category')->default('team')->after('bio'); // team, board, trustee
            $table->string('linkedin')->nullable()->after('category');
            $table->string('twitter')->nullable()->after('linkedin');
            $table->string('facebook')->nullable()->after('twitter');
            $table->string('instagram')->nullable()->after('facebook');
            $table->string('email')->nullable()->after('instagram');
            $table->integer('order')->default(0)->after('email');
            $table->boolean('is_active')->default(true)->after('order');
        });
    }

    public function down(): void
    {
        Schema::table('team_members', function (Blueprint $table) {
            $table->dropColumn(['bio', 'category', 'linkedin', 'twitter', 'facebook', 'instagram', 'email', 'order', 'is_active']);
        });
    }
};
