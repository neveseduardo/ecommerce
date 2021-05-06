<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

		\DB::table('users')->insert([
			'name' => 'Usuário Padrão',
			'email' => 'user@example.com',
			'password' => \Hash::make('password'),
		]);
		\DB::table('admins')->insert([
			'name' => 'Usuário Padrão',
			'email' => 'user@example.com',
			'password' => \Hash::make('password'),
		]);
    }
}
