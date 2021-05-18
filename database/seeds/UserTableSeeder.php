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
            'name' => 'Harun',
            'email' => 'harundogdu@gmail.com',
            'password' => bcrypt('12345678')
        ]); // Admin

        User::create([
            'name' => 'Seher',
            'email' => 'seherdogdu@gmail.com',
            'password' => bcrypt('12345678')
        ]); // Editör

        User::create([
            'name' => 'Gül',
            'email' => 'guldogdu@gmail.com',
            'password' => bcrypt('12345678')
        ]); // Üye
    }
}
