<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function testing()
    {
        return Inertia::render('Testing', ['nama' => 'David Richardo Gultom', 'umur' => 22]);
    }

    public function index()
    {
        return Inertia::render('Index');
    }

    public function home()
    {
        $kategori = Kategori::all();

        return Inertia::render('Home', [
            'kategori' => $kategori
        ]);
    }
}
