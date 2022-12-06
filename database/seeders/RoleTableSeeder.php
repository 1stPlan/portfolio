<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use Illuminate\Support\Facades\DB;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('roles')->insert([
        [
            'id' => '1',
            'role_name' => 'User',
        ],
        [
            'id' => '2',
            'role_name' => 'Admin',
        ],
      ]);
    }
}