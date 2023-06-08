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
     * postリクエストされたタスクの登録
     *
     * @param array<string, string> $task
     * @return void
     */
    public function store($task): void
    {
        $this->name = $task['name'];
        
        $this->save();
    }

    /**
     * postリクエストされたタスクの変更
     *
     * @param array<string, string> $task
     * @return void
     */
    public function modelUpdate($task): void
    {
        $this->name = $task['name'];

        $this->save();
    }

    /**
     * テーブルに値が存在するか
     *
     * @returns Task | null
     */
    public function isExists(): Task | null
    {
        return $this->first();
    }
}