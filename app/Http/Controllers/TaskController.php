<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @param Task $task
     * @return Response
     */
    public function index(Task $task): Response
    {
        return Inertia::render('Todo', ['tasks' => $task->all()]);
    }

    /**
     * Show the form for creating a new resource.
     * 
     * @param Task $task
     * @returns RedirectResponse | Response
     */
    public function create(Task $task): RedirectResponse | Response
    {
        $isExists = $task->isExists();
        
        if(is_null($isExists)) {
            return Inertia::render('Create');
        } 
        
        return redirect()->route('tasks.index', ['tasks' => $task->all()]);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param StoreTaskRequest $request
     * @param Task $task
     * @return RedirectResponse
     */
    public function store(StoreTaskRequest $request, Task $task): RedirectResponse
    {
        $validated = $request->validated();
        
        $task->store($validated);

        return redirect()->route('tasks.index', ['tasks' => $task->all()]);
    }

    /**
     * Display the specified resource.
     * 
     * @param Task $task
     * @return RedirectResponse
     */
    public function show(Task $task): RedirectResponse
    {
        return redirect()->route('tasks.index', ['tasks' => $task->all()]);
    }

    /**
     * Show the form for editing the specified resource.
     * 
     * @param Task $task
     * @return Response
     */
    public function edit(Task $task): Response
    {
        return Inertia::render('Edit', ['task' => $task]);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param UpdateTaskRequest $request
     * @param Task $task
     * @return RedirectResponse
     */
    public function update(UpdateTaskRequest $request, Task $task): RedirectResponse
    {
        $validated = $request->validated();

        $task->modelUpdate($validated);

        return redirect()->route('tasks.index', ['tasks' => $task->all()]);
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param Task $task
     * @return RedirectResponse
     */
    public function destroy(Task $task): RedirectResponse
    {
        $task->delete();

        return redirect()->route('tasks.index', ['tasks' => $task->all()]);
    }
}