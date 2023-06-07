<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    /**
     * Undocumented variable
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
    ];

    /**
     * Undocumented function
     *
     * @param array<string, string> $task
     * @return void
     */
    public function store($task): void
    {
        $this->create([
            'name' => $task->name,
        ]);
    }
}