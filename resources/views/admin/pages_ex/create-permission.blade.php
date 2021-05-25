@extends('admin.layouts.master')
@section('content')
    <div class="card">
        <div class="card-header">
            <h6 class="card-title text-danger font-weight-bold">Add Permission</h6>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.permission.store') }}" method="post">
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
                </div>
                <button class="btn btn-block btn-primary" type="submit">Add Permission</button>
            </form>

        </div>
    </div>
@endsection
