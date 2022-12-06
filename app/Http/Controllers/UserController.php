<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $users = User::get();
        $test_1 = "テスト1";

        // dd("test");

        return view('user')->with([
            "test_1" => $test_1,
            "users" => $users,
         ]);
    }

    public function create()
       {
         //
       }

    public function store(Request $request)
      {
        //
      }

    public function show($id)
      {
        //
      }

    public function edit($id)
      {
        //
      }

    public function update(Request $request, $id)
      {
        //
      }

    public function destroy($id)
      {
        //
      }

}
