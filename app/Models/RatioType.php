<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RatioType extends Model
{
    //
    protected $fillable = [
        'ratio_type'
    ];

    public function ratios(): HasMany {
        return $this->hasMany(Ratio::class);
    }
}
