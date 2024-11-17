<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BalanceSheet extends Model
{
    //
    protected $fillable = [
        'period_id'
    ];

    public function period(): BelongsTo {
        return $this->belongsTo(Period::class);
    }

    public function bs_account_details(): HasMany {
        return $this->hasMany(BSAccountDetail::class);
    }
}
