<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'id' => '1',
                'category_name' => 'Webページお悩み',
                'category_content' => 'お悩み相談➀お悩みお悩み相談➀お悩み相談➀お悩み相談➀お悩み相談➀お悩み相談➀お悩み相談➀お悩み相談➀',
            ],
            [
                'id' => '2',
                'category_name' => 'SNSでのお悩み',
                'category_content' => 'お悩み相談➁お悩み相談➁お悩み相談➁お悩み相談➁お悩み相談➁お悩み相談➁お悩み相談➁お悩み相談➁お悩み相談➁お悩み相談➁',
            ],
            [
                'id' => '3',
                'category_name' => 'お悩み相談',
                'category_content' => 'お悩み相談➂お悩み相談➂おお悩み相談➂お悩み相談➂お悩み相談➂お悩み相談➂悩み相談➂お悩み相談➂お悩み相談➂お悩み相談➂',
            ],

          ]);
    }
}
