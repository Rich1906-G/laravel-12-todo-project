<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/test', [HomeController::class, 'testing']);

Route::get('/index', [HomeController::class, 'index'])->name('index');

Route::get('/todo', [TodoController::class, 'index'])->name('todo.home');
Route::get('/todo-create', [TodoController::class, 'create'])->name('todo.create');
Route::post('/todo-store', [TodoController::class, 'store'])->name('todo.store');
Route::get('/todo-edit/{id}', [TodoController::class, 'edit'])->name('todo.edit');
Route::post('/todo-update/{id}', [TodoController::class, 'update'])->name('todo.update');
Route::post('/todo-delete/{id}', [TodoController::class, 'delete'])->name('todo.delete');

Route::get('/home', [HomeController::class, 'home'])->name('home');

Route::get('/kategori', [KategoriController::class, 'index'])->name('kategori');
Route::post('/kategori-store', [KategoriController::class, 'store'])->name('kategori.store');
Route::post('/kategori-update', [KategoriController::class, 'update'])->name('kategori.update');
Route::post('/kategori-delete/{id}', [KategoriController::class, 'delete'])->name('kategori.delete');

require __DIR__ . '/auth.php';
