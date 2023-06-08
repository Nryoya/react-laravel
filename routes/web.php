<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TaskController;
use App\Models\Task;

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

Route::resource('/tasks', TaskController::class)->only(['index', 'create', 'store', 'edit', 'update', 'destroy']);