<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Period extends Model
{
    //
    protected $fillable = [
        'description',
        'balance_sheet_id',
        'income_statement_id'
    ];

    public function balance_sheet(): HasOne{
        return $this->hasOne(BalanceSheet::class);
    }

    public function income_statement(): HasOne {
        return $this->hasOne(IncomeStatement::class);
    }

    public function ratios(): HasMany {
        return $this->hasMany(Ratio::class);
    }
}
