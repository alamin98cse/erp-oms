<?php

    namespace App\Models;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Auth\Passwords\CanResetPassword;
    use Illuminate\Foundation\Auth\User as Authenticatable;
    use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
    class User extends Authenticatable
    {
        
        protected $table = 'users';

        /**
         * The attributes excluded from the model's JSON form.
         *
         * @var array
         */
        protected $fillable = [
            'name', 'email','role_id', 'password',
        ];

        protected $hidden = ['password', 'remember_token'];

        /**
         * One to Many relation
         *
         * @return Illuminate\Database\Eloquent\Relations\BelongsTo
         */
        public function role() 
        {
            return $this->belongsTo('App\Models\Role');
        }

        /**
         * Check media all access
         *
         * @return bool
         */
        public function accessMediasAll()
        {
            return $this->role->slug == 'admin';
        }

        /**
         * Check media access one folder
         *
         * @return bool
         */
        public function accessMediasFolder()
        {
            return $this->role->slug != 'user';
        }
    }
