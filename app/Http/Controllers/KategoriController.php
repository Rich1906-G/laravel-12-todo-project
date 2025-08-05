<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KategoriController extends Controller
{
    public function index()
    {
        $kategori = Kategori::all();

        return Inertia::render('Kategori/Index', [
            'kategori' => $kategori
        ]);
    }

    public function store(Request $request)
    {
        Kategori::create($request->validate([
            'nama_kategori' => 'required'
        ]));

        return to_route('kategori')->with('success', 'Kategori Berhasil Ditambahkan');
    }

    public function delete($id)
    {
        $id = Kategori::findOrFail($id);

        $id->delete();

        return to_route('kategori')->with('success', 'Kategori Berhasil Dihapus.');
    }
}
