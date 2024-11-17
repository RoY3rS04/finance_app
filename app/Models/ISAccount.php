<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ISAccount extends Model
{
    //
    protected $fillable = [
        'account_name',
        'is_account_type_id',
        'deleted'
    ];

    protected $table = 'is_accounts';

    public function is_account_details(): HasMany {
        return $this->hasMany(ISAccountDetail::class);
    }

    public function is_account_type(): BelongsTo {
        return $this->belongsTo(ISAccountType::class);
    }
}
