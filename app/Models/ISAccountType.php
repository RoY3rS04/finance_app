<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ISAccountType extends Model
{
    //
    protected $fillable = [
        'type_name',
        'deleted'
    ];

    protected $table = 'is_account_types';

    public function is_accounts(): HasMany {
        return $this->hasMany(ISAccount::class);
    }
}
