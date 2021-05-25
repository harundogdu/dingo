<?php
namespace App\Helper;

use App\Models\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class Helper
{
    public  static  function  setRoles()
    {
        $defaultSystemVars = getVar('system');

        $roles = Role::all()->pluck('name')->all();
        $users = User::all()->pluck("email")->all();
        $permissions = Permission::all()->pluck('name')->all();

        // foreach for roles
        foreach ($defaultSystemVars['default_role'] as $value) {
            if (!in_array(slugify($value['name']), $roles)) {
                if (slugify($value['name']) !== "user")
                    $is_see_admin = 1;
                else
                    $is_see_admin = 0;
                Role::create([
                    'name' => slugify($value['name']),
                    'description' => $value['description'],
                    'is_main' => 1,
                    'is_see_admin' => $is_see_admin,
                    'guard_name' => $value['guard_name']
                ]);
            }
        }

        //         foreach for users
        foreach ($defaultSystemVars['default_users'] as $value) {
            if (!in_array($value['email'], $users)) {
                User::create([
                    'name' => slugify($value['name']),
                    'email' => $value['email'],
                    'password' => bcrypt($value['password'])
                ]);
            }
        }

        //         foreach for permissions
        foreach ($defaultSystemVars['default_permission'] as $value) {
            if (!in_array(slugify($value['name']), $permissions)) {
                Permission::create([
                    'name' => slugify($value['name']),
                    'is_main' => 1,
                    'guard_name' => $value['guard_name']
                ]);
            }
        }

        // Authorization operations
        $permissions = Permission::all();
        $adminRole = Role::whereName('admin')->first();
        $adminUser = User::whereEmail('admin@dingo.com')->first();
        /* $editorRole = Role::whereName('editor')->first();
        $editorUser = User::whereEmail('editor@dingo.com')->first(); */
        $userRole =  Role::whereName('user')->first();
        $webUser = User::whereEmail('user@dingo.com')->first();

        $adminUser->assignRole($adminRole);
        /* $editorUser->assignRole($editorRole); */
        $webUser->assignRole($userRole);
        $adminRole->givePermissionTo($permissions);
    }
}
