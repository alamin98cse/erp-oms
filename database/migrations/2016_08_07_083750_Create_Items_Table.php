<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Items', function (Blueprint $table) {
            $table->increments('id');
            $table->string('sku',10);
            $table->integer('order_id')->unsigned();
            $table->string('item_code',20);
            $table->double('quantity');
            $table->string('l_status',20);
            $table->string('p_status',20);
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
        Schema::drop('Items');
    }
}
