<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class HeadlessCmsController extends Controller
{
    public function index(Request $request) //TODO:ここでのリクエストは何を持ってきている？
    {
       
        $page = intval($request->input('page', 1));
        $per_page = intval($request->input('per_page', 10));

        $username = config('services.wordpress.username');
        $application_password = config('services.wordpress.password');
        $url = config('services.wordpress.url');

        $authorization = 'Basic ' . base64_encode($username . ':' . $application_password);
        $should_verify = ! app()->environment('local');
        $category_ids = [1,38,54]; // 取得したいサイトのカテゴリ ID（適宜変更してください）

        $response = Http::withHeaders(['Authorization' => $authorization])
            ->withOptions(['verify' => $should_verify])
            ->get($url, [
                '_fields' => 'id,title,content,thumbnail_url,date',
                // 'categories' => implode(',', $category_ids),
                'page' => $page,
                'per_page' => $per_page,
                'orderby' => 'date',
                'order' => 'desc',
            ]);

        if($response->ok()) {

            return [
                'data' => $response->json(),
                'pagination' => [
                    'total' => $response->header('X-WP-Total'),
                    'total_pages' => $response->header('X-WP-TotalPages'),
                ],
            ];

        }

        abort(500, 'Failed to get posts.');
    }
}
