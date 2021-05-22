@extends('admin.layouts.master')
@section('content')
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">User List</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-striped table-bordered" id="dataTable" width="100%">
                    <caption>List of routes</caption>
                    <thead class="table-primary">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($users as $user)
                            <tr>
                                <td>{{ toWord($user->name) }}</td>
                                <td>{{ $user->email }}</td>
                                <td>
                                    @foreach ($user->roles as $role)
                                        @if ($role->name)
                                            <b class="text-success">{{ $role->name }}</b>
                                        @else
                                            <b class="text-danger">Role Not Found</b>
                                        @endif
                                    @endforeach
                                </td>
                                <td>
                                    <a href="{{ route('admin.user.edit', $user->id) }}" class="float-left mx-2 btn btn-sm btn-info"
                                        title="Edit">
                                        <i class="fas fa-pen" aria-hidden="true"></i>
                                    </a>
                                    @if (slugify($role->name) !== 'admin')
                                        <form action="{{ route('admin.user.destroy', $user->id) }}" method="POST" class="clearfix">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="float-left btn btn-sm btn-danger" title="Delete">
                                                <i class="fas fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </form>
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
@section('page-level-css')
    <link href="{{ asset('admins/js/datatables/dataTables.bootstrap4.min.css') }}" rel="stylesheet">
@endsection
@section('page-level-scripts')
    <!-- Page level plugins -->
    <script src="{{ asset('admins/js/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('admins/js/datatables/dataTables.bootstrap4.min.js') }}"></script>
    <!-- Page level custom scripts -->
    <script src="{{ asset('admins/js/demo/datatables-demo.js') }}"></script>
@endsection
