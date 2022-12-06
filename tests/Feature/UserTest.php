<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testIndex()
    {
        // `users` テーブルにデータを作成 (Tips参照)
        // $user = User::factory()->create();
        
        // GET リクエスト
        // $response = $this->get(url('/post/index'));

        // dd($response);

        // レスポンスの検証
        // $response->assertOk()  # ステータスコードが 200
            // ->assertJsonCount(); # レスポンスの配列の件数が1件
            // ->assertJsonFragment([ # レスポンスJSON に以下の値を含む
            //     'id' => '1',
            // ]);

        $response = $this->get('/home');

        // dd($response);
        $response->assertStatus(200);
    }
}
