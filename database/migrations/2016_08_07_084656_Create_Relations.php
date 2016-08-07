<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
         Schema::table('users', function (Blueprint $table) {
            $table->foreign('role_id')
                  ->references('id')
                  ->on('roles')
                  ->onDelete('restrict')
                  ->onUpdate('restrict');
        });

        Schema::table('Products', function (Blueprint $table) {
            $table->foreign('catId')
                  ->references('id')
                  ->on('Categories')
                  ->onDelete('restrict')
                  ->onUpdate('restrict');
        });
        Schema::table('Items', function (Blueprint $table) {
            $table->foreign('sku')
                  ->references('sku')
                  ->on('Products')
                  ->onDelete('restrict')
                  ->onUpdate('restrict');
        });
        Schema::table('OrderDetails', function (Blueprint $table) {
            $table->foreign('order_id')
                  ->references('id')
                  ->on('Orders')
                  ->onDelete('restrict')
                  ->onUpdate('restrict');
        });
        Schema::table('Orders', function (Blueprint $table) {
            $table->foreign('custId')
                  ->references('id')
                  ->on('Customers');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_role_id_foreign');
        });
        Schema::table('Products', function (Blueprint $table) {
            $table->dropForeign('Products_catId_foreign');
        });
       Schema::table('Items', function (Blueprint $table) {
            $table->dropForeign('Items_sku_foreign');
        });
       Schema::table('OrderDetails', function (Blueprint $table) {
            $table->dropForeign('OrderDetails_order_id_foreign');

        });
       Schema::table('Orders', function (Blueprint $table) {
            $table->dropForeign('Orders_custId_foreign');

        });
       
    }
}
