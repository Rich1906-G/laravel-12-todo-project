<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kategori')->insert([
            ['nama_kategori' => 'BERITA', 'created_at' => Carbon::now()],
            ['nama_kategori' => 'OLAHRAGA', 'created_at' => Carbon::now()],
            ['nama_kategori' => 'GAYA HIDUP', 'created_at' => Carbon::now()],
            ['nama_kategori' => 'EKONOMI', 'created_at' => Carbon::now()],
            ['nama_kategori' => 'HUKUM', 'created_at' => Carbon::now()],
            ['nama_kategori' => 'BERITA LAIN', 'created_at' => Carbon::now()],
        ]);
    }
}
