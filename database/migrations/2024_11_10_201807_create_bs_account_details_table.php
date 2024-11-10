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
        Schema::create('bs_account_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('balance_sheet_id')->constrained();
            $table->foreignId('bs_account_id')->constrained();
            $table->decimal('ammount', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bs_account_details');
    }
};
