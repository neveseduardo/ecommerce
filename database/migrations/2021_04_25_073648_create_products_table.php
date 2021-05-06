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
			$table->text('description');
			$table->decimal('value', 12, 2);
			$table->decimal('discount', 12, 2)->nullable();
			$table->boolean('active')->default(true);
			$table->integer('views')->nullable();
			$table->integer('hating')->nullable();
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
