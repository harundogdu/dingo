<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PermissionRequest;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $permissions = Permission::all();
        return view('admin.pages.permission', compact('permissions'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.pages_ex.create-permission');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PermissionRequest $request)
    {
        $permission = Permission::whereName(slugify($request->name));
        if (!$permission) {
            Permission::create([
                'name' => slugify($request['name']),
                'guard_name' => 'web',
                'is_main' => 0
            ]);
            return redirect()->route('admin.permission.index');
        } else {
            return redirect()->back()->withErrors(['name' => 'Lütfen Olmayan Bir Yetki Giriniz!']);
        }
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
        $permission = Permission::findOrFail($id);
        return view('admin.pages_ex.edit-permission', compact('permission'));
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
        $permission = Permission::findOrFail($id);
        if ($permission) {
            $permission->name = slugify($request->name);
            $permission->save();
            return redirect()->route('admin.permission.index');
        } else {
            return redirect()->back()->withErrors(['name' => 'Hatalı Kullanım!']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $permission = Permission::findOrFail($id);
        if($permission && $permission->is_main !== 1){
            $permission->delete();
            return redirect()->route('admin.permission.index');
        }else{
            return redirect()->route('admin.permission.index')->withErrors(['name'=>'Hatalı Talep']);
        }
    }
}
