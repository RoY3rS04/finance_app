<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BSAccountSubtype extends Model
{
    //
    protected $fillable = [
        'subtype_name',
        'deleted'
    ];

    protected $table = 'bs_account_subtypes';

    public function bs_accounts(): HasMany {
        return $this->hasMany(BSAccount::class);
    }
}
