@extends('admin.layouts.master')
@section('content')
    <form action="{{ route('admin.user.store') }}" method="post">
        @csrf
        <div class="form-row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" class="form-control" placeholder="Enter name...">
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
                            <option value="{{ $role->id }}">{{ toWord($role->name) }}</option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" class="form-control" placeholder="Enter email...">
                    @error('email')
                        <small class="pl-1 text-danger font-weight-bold">{{ $message }}</small>
                    @enderror
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" class="form-control"
                        placeholder="Enter password...">
                    @error('password')
                        <small class="pl-1 text-danger font-weight-bold">{{ $message }}</small>
                    @enderror
                </div>
            </div>
        </div>
        <button class="btn btn-block btn-primary" type="submit">Add User</button>
    </form>
@endsection
