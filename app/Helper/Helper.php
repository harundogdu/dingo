<?php


namespace App\Helper;


use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Str;

class Helper
{
    public  static  function  setRoles(){
        $defaultSystemVars = getVar('system');
        $roles = Role::all()->pluck('name')->all();
        $permissions = Permission::all()->pluck('name')->all();
        $role = '';
        $permission = '';

        foreach ($defaultSystemVars['default_role'] as $value) {
            if (!in_array($value['name'], $roles)) {
                if ($value['slug'] !== "user")
                    $is_see_admin = 1;
                else
                    $is_see_admin = 0;
                $role = Role::create([
                    'name' => $value['name'],
                    'slug' => $value['slug'],
                    'description' => $value['description'],
                    'is_main' => 1,
                    'is_see_admin' => $is_see_admin,
                    'guard_name' => $value['guard_name']
                ]);
            }
        }

        foreach ($defaultSystemVars['default_permission'] as $value) {
            if (!in_array($value['name'], $permissions)) {
                $permission = Permission::create([
                    'name' => $value['name'],
                    'is_main' => 1,
                    'guard_name' => $value['guard_name'],
                    'slug' => Str::slug($value['name'])
                ]);
            }
        }
    }
}
