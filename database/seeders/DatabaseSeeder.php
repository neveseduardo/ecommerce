<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Models\Category;
use App\Models\User;
use App\Models\Admin;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 *
	 * @return void
	 */
	public function run()
	{
		$this->makeUsers();
		$this->makeAdmins();
		$this->makeCategories();
	}
	/**
	 * Seed the application's database.
	 *
	 * @return void
	 */
	public function makeUsers()
	{
		User::create([
			'name' => 'Usuário Padrão',
			'email' => 'user@example.com',
			'password' => \Hash::make('password'),
		]);
	}
	/**
	 * Seed the application's database.
	 *
	 * @return void
	 */
	public function makeAdmins()
	{
		Admin::create([
			'name' => 'Usuário Padrão',
			'email' => 'admin@example.com',
			'password' => \Hash::make('password'),
		]);
	}

	public function makeCategories()
	{
		$categories = ['Consoles', 'Jogos', 'Tecnologia', 'Livros', 'HQ\'s', 'Camisetas', 'Acessórios', 'Relógios', 'Smartphones', 'PC'];
		foreach (range(0, 9) as $i) {
			Category::create([
				'title' => $categories[$i],
				'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quos, cupiditate, ab eaque sunt possimus laborum nesciunt dolores maxime odio earum voluptates excepturi doloribus animi expedita vitae quae quisquam cumque.',
				'admin_id' => 1,
			]);
		}
	}
}
