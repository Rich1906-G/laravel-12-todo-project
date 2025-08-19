<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BeritaTerkiniController extends Controller
{
    public function home()
    {
        return Inertia::render('BeritaTerkini/Index');
    }
}
