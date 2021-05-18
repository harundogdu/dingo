<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create([
            'name' => 'create-user',
            'is_main' => 1,
            'guard_name' => 'web'
        ]);

        Permission::create([
            'name' => 'edit-user',
            'is_main' => 1,
            'guard_name' => 'web'
        ]);
        Permission::create([
            'name' => 'update-user',
            'is_main' => 1,
            'guard_name' => 'web'
        ]);

        Permission::create([
            'name' => 'delete-user',
            'is_main' => 1,
            'guard_name' => 'web'
        ]);

        Permission::create([
            'name' => 'show-user',
            'is_main' => 1,
            'guard_name' => 'web'
        ]);
    }
}
