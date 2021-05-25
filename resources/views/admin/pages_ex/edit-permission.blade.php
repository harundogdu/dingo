@extends('admin.layouts.master')
@section('content')
    <div class="card">
        <div class="card-header">
            <h6 class="card-title text-danger font-weight-bold">Edit Permission</h6>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.permission.update', $permission->id) }}" method="post">
                @csrf
                @method('put')
                <div class="form-row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" class="form-control"
                                value="{{ toWord($permission->name) }}" placeholder="Enter permission name...">
                            @error('name')
                                <small class="pl-1 text-danger font-weight-bold">{{ $message }}</small>
                            @enderror
                        </div>
                    </div>
                </div>
                <button class="btn btn-block btn-info" type="submit">Edit Permission</button>
            </form>

        </div>
    </div>
@endsection
