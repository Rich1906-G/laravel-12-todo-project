<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubKategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sub_kategori')->insert([
            ['kategori_id' => 1, 'nama_sub_kategori' => 'INTERNASIONAL', 'created_at' => Carbon::now()],
            ['kategori_id' => 1, 'nama_sub_kategori' => 'DAERAH', 'created_at' => Carbon::now()],
            ['kategori_id' => 1, 'nama_sub_kategori' => 'DAERAH 3T', 'created_at' => Carbon::now()],
            ['kategori_id' => 1, 'nama_sub_kategori' => 'NASIONAL', 'created_at' => Carbon::now()],
            ['kategori_id' => 2, 'nama_sub_kategori' => 'SEPAK BOLA', 'created_at' => Carbon::now()],
            ['kategori_id' => 2, 'nama_sub_kategori' => 'ARENA', 'created_at' => Carbon::now()],
            ['kategori_id' => 2, 'nama_sub_kategori' => 'OTOSPOT', 'created_at' => Carbon::now()],
            ['kategori_id' => 3, 'nama_sub_kategori' => 'KESEHATAN', 'created_at' => Carbon::now()],
            ['kategori_id' => 3, 'nama_sub_kategori' => 'HOBI', 'created_at' => Carbon::now()],
            ['kategori_id' => 3, 'nama_sub_kategori' => 'WISATA', 'created_at' => Carbon::now()],
            ['kategori_id' => 3, 'nama_sub_kategori' => 'KULINER', 'created_at' => Carbon::now()],
            ['kategori_id' => 3, 'nama_sub_kategori' => 'HIBURAN', 'created_at' => Carbon::now()],
            ['kategori_id' => 3, 'nama_sub_kategori' => 'IPTEK', 'created_at' => Carbon::now()],
            ['kategori_id' => 4, 'nama_sub_kategori' => 'UMKM', 'created_at' => Carbon::now()],
            ['kategori_id' => 4, 'nama_sub_kategori' => 'BISNIS', 'created_at' => Carbon::now()],
            ['kategori_id' => 4, 'nama_sub_kategori' => 'KEUANGAN', 'created_at' => Carbon::now()],
            ['kategori_id' => 5, 'nama_sub_kategori' => 'ANTI KORUPSI', 'created_at' => Carbon::now()],
            ['kategori_id' => 5, 'nama_sub_kategori' => 'HUKUM', 'created_at' => Carbon::now()],
            ['kategori_id' => 5, 'nama_sub_kategori' => 'KRIMINALITAS', 'created_at' => Carbon::now()],
            ['kategori_id' => 6, 'nama_sub_kategori' => 'WAWANCARA', 'created_at' => Carbon::now()],
            ['kategori_id' => 6, 'nama_sub_kategori' => 'FEATURES', 'created_at' => Carbon::now()],
        ]);
    }
}
