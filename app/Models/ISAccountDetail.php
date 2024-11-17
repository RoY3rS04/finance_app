<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ISAccountDetail extends Model
{
    //
    protected $fillable = [
        'income_statement_id',
        'is_account_id',
        'ammount'
    ];

    protected $table = 'is_account_details';

    public function income_statement(): BelongsTo {
        return $this->belongsTo(IncomeStatement::class);
    }

    public function is_account(): BelongsTo {
        return $this->belongsTo(ISAccount::class);
    }
}
