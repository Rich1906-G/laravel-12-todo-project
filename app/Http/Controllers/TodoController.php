<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index()
    {
        $todo = Todo::all();
        return Inertia::render('Todo/Home', ['data' => $todo]);
    }

    public function create()
    {
        return Inertia::render('Todo/Create');
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'kegiatan' => ['required'],
            'tanggal' => ['required', 'date'],
            'jam'  => ['required'],
            'foto' => ['required', 'image', 'mimes:jpeg,jpg,png'],
        ]);

        if ($request->hasFile('foto')) {
            $fileName = "Foto tanggal" . time() . '.' . $request->file('foto')->extension();
            $path = $request->file('foto')->storeAs('uploads', $fileName, 'public');
            $validate['foto'] = $path;
        }

        Todo::create($validate);

        return to_route('todo.home');
    }

    public function edit($id)
    {
        $data = Todo::findOrFail($id);
        return Inertia::render('Todo/Edit', ['data' => $data]);
    }

    public function update(Request $request, $id)
    {
        $data = Todo::findOrFail($id);

        $validate = $request->validate([
            'kegiatan' => ['required'],
            'tanggal' => ['required', 'date'],
            'jam' => ['required'],
            'foto' => ['required', 'image', 'mimes:jpg,jpeg,png'],
        ]);

        if ($request->hasFile('foto')) {
            // 🔥 Optional: hapus foto lama biar nggak numpuk di storage
            if ($data->foto && Storage::disk('public')->exists($data->foto)) {
                Storage::disk('public')->delete($data->foto);
            }

            // ✅ Upload foto baru
            $newFileName = "Foto_" . time() . "." . $request->file('foto')->extension();
            $pathNewImage = $request->file('foto')->storeAs('uploads', $newFileName, 'public');

            $validate['foto'] = $pathNewImage;
        }

        $data->update($validate);

        return redirect()->route('todo.home');
    }

    public function delete($id)
    {
        $id = Todo::findOrFail($id);
        
        $id->delete();

        return redirect()->route('todo.home');
    }
}
