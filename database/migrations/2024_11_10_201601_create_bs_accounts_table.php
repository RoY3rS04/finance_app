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
        Schema::create('bs_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('account_name');
            $table->foreignId('bs_account_type_id')->constrained();
            $table->foreignId('bs_account_subtype_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bs_accounts');
    }
};
