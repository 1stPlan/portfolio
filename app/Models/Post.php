<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Role;
// use App\Models\Cotegory;

class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "posts";
    protected $fillable = [
      'content',
      'pass',
      // 'category_id',
      'blog_id',
      'role_id'
    ];
    protected $dates = ['deleted_at'];

    public function role(){
      return $this->belongsTo(Role::class);
    }
    // public function category(){
    //   return $this->belongsTo(Cotegory::class);
    // }
}
