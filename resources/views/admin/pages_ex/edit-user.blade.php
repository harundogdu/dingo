@extends('admin.layouts.master')
@section('content')
    <form action="{{ route('admin.user.update', $user->id) }}" method="post">
        @csrf
        @method('put')
        @php
            $old_role_id = null;
        @endphp
        <div class="form-row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" class="form-control" value="{{ $user->name }}">
                    @error('name')
                        <small class="pl-1 text-danger font-weight-bold">{{ $message }}</small>
                    @enderror
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="role_id">Role</label>
                    <select name="role_id" id="role_id" class="form-control">
                        @foreach ($roles as $role)
                            @foreach ($user->roles as $item)
                                @if ($role->id === $item->id)
                                    @php
                                         $old_role_id = $role->id;
                                    @endphp
                                    <option selected value="{{ $role->id }}">{{ toWord($role->name) }}</option>
                                @else
                                    <option value="{{ $role->id }}">{{ toWord($role->name) }}</option>
                                @endif
                            @endforeach
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" class="form-control" value="{{ $user->email }}">
                    @error('email')
                        <small class="pl-1 text-danger font-weight-bold">{{ $message }}</small>
                    @enderror
                </div>
            </div>
        </div>                            
        <<input type="hidden" name="old_role_id" value="{{ $old_role_id}}">
        <button class="btn btn-block btn-info" type="submit">Update User</button>
        
    </form>
@endsection
