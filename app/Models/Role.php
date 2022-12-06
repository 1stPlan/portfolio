<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;

class Role extends Model
{
    use HasFactory;

    protected $table = "roles";
    protected $fillable = [
      'role_name'
    ];
    public $timestamps = false;

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
