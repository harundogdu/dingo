@extends('admin.layouts.master')
@section('content')
    <div class="card">
        <div class="card-header">
            <h6 class="card-title text-info">Edit Role : <b>{{toWord($role->name)}}</b></h6>
        </div>
        <div class="card-body shadow">
            <form action="{{ route('admin.role.update',$role->id) }}" method="post">
                @csrf
                @method('put')
                <div class="form-row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" class="form-control" value="{{toWord($role->name)}}" placeholder="Enter name...">
                            @error('name')
                                <small class="pl-1 text-danger font-weight-bold">{{ $message }}</small>
                            @enderror
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="description" id="description" name="description" class="form-control"
                                placeholder="Enter description..." value="{{$role->description}}">
                            @error('description')
                                <small class="pl-1 text-danger font-weight-bold">{{ $message }}</small>
                            @enderror
                        </div>
                    </div>

                </div>
                <div class="form-row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="is_see_admin">is See Admin?</label>
                            <select name="is_see_admin" id="is_see_admin" class="form-control">
                                <option @if($role->is_see_admin === 1) selected @endif value="0">No</option>
                                <option @if($role->is_see_admin === 1) selected @endif value="1">Yes</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button class="btn btn-block btn-info" type="submit">Update Role</button>
            </form>
        </div>
    </div>
@endsection
