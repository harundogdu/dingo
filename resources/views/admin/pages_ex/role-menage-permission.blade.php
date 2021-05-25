@extends('admin.layouts.master')
@section('content')
    <div class="card">
        <div class="card-header">
            <h6 class="card-title text-danger font-weight-bold">Edit Permissions</h6>
        </div>
        <div class="card-body">
            <h6 class="text-lead font-weight-bold">
               Available Permission List
            </h6>
            <form action="{{ route('admin.role.menage-permissions-store') }}" method="POST">
                <div class="checkbox row">
                    @csrf
                    @php
                        $perm = 0;
                    @endphp
                    @foreach ($permissions as $permission)
                        @foreach ($role->permissions as $val)
                            @if ($permission->name === $val->name) @php $perm = 1; @endphp
                            @endif
                        @endforeach
                        <div class="col-sm-4">
                            <div class="form-check my-1">
                                <input @if ($perm === 1) checked @endif
                                    class="form-check-input" type="checkbox" name="permissions[{{ $permission->id }}]"
                                    id="id-{{ $permission->id }}">
                                <label style="font-size:17px" class="font-weight-bold form-check-label"
                                    for="id-{{ $permission->id }}">
                                    {{ toWord($permission->name) }}
                                </label>
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="mt-4 row">
                    <button type="submit" class="btn btn-sm btn-danger btn-block">Give Permissions</button>
                    <input type="hidden" name="role_id" value="{{ $role->id }}">
                </div>
            </form>
        </div>
    </div>
@endsection
