<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BSAccount extends Model
{
    //
    protected $fillable = [
        'account_name',
        'bs_account_type_id',
        'bs_account_subtype_id',
        'deleted'
    ];

    protected $table = 'bs_accounts';

    public function bs_account_type(): BelongsTo {
        return $this->belongsTo(BSAccountType::class);
    }

    public function bs_account_subtype(): BelongsTo
    {
        return $this->belongsTo(BSAccountSubtype::class);
    }

    public function bs_account_details(): HasMany {
        return $this->hasMany(BSAccountDetail::class);
    }
}
