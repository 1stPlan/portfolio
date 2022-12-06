<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Post; 

class PostController extends Controller
{
  public function create(Request $request){

    try {

      $insert['content'] = $request['content'];
      $insert['pass'] = $request['pass'];
      // $insert['role_id'] = $request['rol'];
      $insert['blog_id'] = $request['blog'];

      // Post::insert($insert);
      Post::create($insert);

      $response['message'] = "Save succesful";
      $response['succes'] = true;

    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['succes'] = true;
    }
     
    return $response;
  }
  
  public function list(){
    try {

      $data = Post::with("role")->get();
      $response['data'] = $data;
      $response['success'] = true;

    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['success'] = false;
    }
    return $response;

  }
  
  public function get($id){

    try {

      $data = Post::with("role")->find($id);

      if ($data) {
        $response['data'] = $data;
        $response['message'] = "Load successful";
        $response['success'] = true;
      }
      else {
        $response['message'] = "Not found data id => $id";
        $response['success'] = false;
      }

    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['success'] = false;
    }
    return $response;
  }
  
//  public function update(Request $request,$id){

//     try {

//       $insert['content'] = $request['content'];
//       $insert['pass'] = $request['pass'];
//       $insert['role_id'] = $request['rol'];
//       $insert['category_id'] = $request['category'];

//       Post::where("id",$id)->update($data);

//       $response['message'] = "Updated successful";
//       $response['success'] = true;

//     } catch (\Exception $e) {
//       $response['message'] = $e->getMessage();
//       $response['success'] = false;
//     }
//     return $response;

//   }

  public function delete($id){

    try {
      $res = Post::where("id",$id)->delete();
      $response['res'] = $res;
      $response['message'] = "Deleted successful";
      $response['success'] = true; 
    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['success'] = false;
    }

    return $response;
  }
  
  public function role()
  {
      $res =\DB::table('roles')->get();

      $response['data'] = $res;
      $response['message'] = "Load successful";
      $response['success'] = true;

      return $response;
  }

  // public function category()
  // {
  //     $res =\DB::table('categories')->get();

  //     $response['data'] = $res;
  //     $response['message'] = "Load successful";
  //     $response['success'] = true;

  //     return $response;
  // }

}
