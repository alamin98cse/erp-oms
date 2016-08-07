<?php

	namespace App\Models;
	use Illuminate\Database\Eloquent\Model;

	class Role extends Model
	{
	    protected $table = 'roles';

		/**
		 * One to Many relation
		 *
		 * @return Illuminate\Database\Eloquent\Relations\hasMany
		 */
		public function users() 
		{
		  return $this->hasMany('App\Models\User');
		}
	}