<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::all();
        return view('admin.pages.role', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.pages_ex.create-role');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $role = Role::create([
            'name' => slugify($request->name),
            'description' => $request->description,
            'is_main' => 0,
            'is_see_admin' => $request->is_see_admin
        ]);

        if ($role)
            return redirect()->route('admin.role.index');
        else
            return redirect()->back()->withErrors(['description' => 'Hatalı İşlem']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $role = Role::findOrFail($id);
        return view('admin.pages_ex.edit-role', compact('role'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $role = Role::findOrFail($id);
        if ($role) {
            $role->name = slugify($request->name);
            $role->description = $request->description;
            $role->is_see_admin = $request->is_see_admin;
            $role->save();

            return redirect()->route('admin.role.index');
        } else
            return redirect()->back()->withErrors(['name' => 'Hatalı İşlem']);
    }

    public function menagePermissions($id)
    {
        $role = Role::findOrFail($id)->load('permissions');
        $permissions = Permission::all();
        return view('admin.pages_ex.role-menage-permission', compact('role', 'permissions'));
    }

    public function menagePermissionsStore(Request $request)
    {        
        $role = Role::find($request->role_id);
        $permissions = Permission::all();
        foreach ($permissions as $permission) {
            $permission->removeRole($role);
        }
        $reqPermissions = $request->permissions;
        if ($reqPermissions) {
            foreach ($reqPermissions as $key => $value) {
                $dbPerm = Permission::find($key);
                $role->givePermissionTo($dbPerm);
            }
        }
        return redirect()->route('admin.role.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
