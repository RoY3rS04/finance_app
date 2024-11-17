<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BSAccountDetail extends Model
{
    //
    protected $fillable = [
        'balance_sheet_id',
        'bs_account_id',
        'ammount'
    ];

    protected $table = 'bs_account_details';

    public function balance_sheet(): BelongsTo
    {
        return $this->belongsTo(BalanceSheet::class);
    }

    public function bs_account(): BelongsTo
    {
        return $this->belongsTo(BSAccount::class);
    }
}
