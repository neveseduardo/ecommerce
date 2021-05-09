<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('products', function (Blueprint $table) {
			$table->id();
			$table->string('title');
			$table->text('description')->nullable();
			$table->decimal('value', 12, 2)->nullable()->default(0);
			$table->integer('discount')->nullable()->default(0);
			$table->integer('margin')->nullable()->default(0);
			$table->boolean('active')->nullable()->default(true);
			$table->integer('views')->nullable()->default(0);
			$table->integer('hating')->nullable()->default(5);
			$table->string('cod_bar')->nullable()->unique();
			$table->integer('quantity')->nullable()->default(0);
			$table->string('image')->nullable();
			$table->unsignedBigInteger('category_id');
			$table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
			$table->unsignedBigInteger('admin_id');
			$table->foreign('admin_id')->references('id')->on('admins')->onDelete('cascade');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('products');
	}
}
