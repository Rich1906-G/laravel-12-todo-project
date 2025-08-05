<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubKategori extends Model
{
    protected $table = 'sub_kategori';

    protected $fillable = [];

    public function kategori()
    {
        return $this->belongsTo(Kategori::class);
    }
}
