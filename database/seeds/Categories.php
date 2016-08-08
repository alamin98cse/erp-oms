<?php

use Illuminate\Database\Seeder;

class Categories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table('categories')->insert([
            'id' => 1,
            'name' => 'Undefined',
            'description' => 'Used only for system generated products'
            
        ]);
    }
}
