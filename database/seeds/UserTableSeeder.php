<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@dingo.com',
            'password' => bcrypt('12345678')
        ]); // Admin

        User::create([
            'name' => 'Editor',
            'email' => 'editor@dingo.com',
            'password' => bcrypt('12345678')
        ]); // Editör

        User::create([
            'name' => 'User',
            'email' => 'user@dingo.com',
            'password' => bcrypt('12345678')
        ]); // Üye
       
    }
}
