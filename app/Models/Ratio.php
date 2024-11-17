<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ratio extends Model
{
    //
    protected $fillable = [
        'ratio_type_id',
        'period_id',
        'ratio_name',
        'value'
    ];

    public function period(): BelongsTo {
        return $this->belongsTo(Period::class);
    }

    public function ratio_type(): BelongsTo {
        return $this->belongsTo(RatioType::class);
    }
}
