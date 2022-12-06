<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notifications\WordPressNotification;
use Illuminate\Support\Facades\Notification;

class TestController extends Controller
{
    public function index()
    {
        $post_data = [
            'title' => "タイトル",
            'content' => "記事の本文",
            'status' => "draft",
            'date' => date('Y-m-d H:i:s'),
            'slug' => "laravel-m-wp-test"
        ];
    
        //WPに送信
        Notification::route('wordpress', null)->notify(new WordPressNotification($post_data));


        return view('test');
    }
}
