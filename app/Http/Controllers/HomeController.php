<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Home');
    }
}
