<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
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
        Todo::create($request->validate([
            'kegiatan' => ['required'],
            'tanggal' => ['required', 'date'],
            'jam'  => ['required'],
        ]));

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
        $data->update(
            $request->validate(
                [
                    'kegiatan' => ['required'],
                    'tanggal' => ['required', 'date'],
                    'jam' => ['required'],
                ]
            )
        );

        return redirect()->route('todo.home');
    }

    public function delete($id)
    {
        $id = Todo::findOrFail($id);
        $id->delete();

        return redirect()->route('todo.home');
    }
}
