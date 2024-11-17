<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BSAccountType extends Model
{
    //
    protected $fillable = [
        'type_name',
        'deleted'
    ];

    protected $table = 'bs_account_types';

    public function bs_accounts(): HasMany
    {
        return $this->hasMany(BSAccount::class);
    }
}
