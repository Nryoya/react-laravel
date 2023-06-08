<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TaskController;
use App\Models\Task;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [TaskController::class, 'create']); 

Route::resource('/tasks', TaskController::class);

Route::fallback(static fn (Task $task) => redirect()->route('tasks.index', ['tasks' => $task->all()]));