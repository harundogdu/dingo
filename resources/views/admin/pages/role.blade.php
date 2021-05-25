@extends('admin.layouts.master')
@section('content')
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Role List</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-striped table-bordered" id="dataTable" width="100%">
                    <caption>List of roles</caption>
                    <thead class="table-primary">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>is Main?</th>
                            <th>is See Admin?</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($roles as $role)
                            <tr>
                                <td>{{ toWord($role->name) }}</td>
                                <td>{{ $role->description }}</td>
                                <td>
                                    @if ($role->is_main === 1) <b
                                        class="text-success">Yes</b> @else <b class="text-danger">No</b> @endif
                                </td>
                                <td>
                                    @if ($role->is_see_admin === 1) <b
                                        class="text-success">Yes</b> @else <b class="text-danger">No</b> @endif
                                </td>
                                <td width="125">
                                    <a href="{{ route('admin.role.edit', $role->id) }}"
                                        class="float-left btn btn-sm btn-info" title="Edit">
                                        <i class="fas fa-pen" aria-hidden="true"></i>
                                    </a>
                                    <a href="{{ route('admin.role.menage-permissions', $role->id) }}"
                                        class="float-left mx-1 btn btn-sm btn-dark" title="Menage Permissions">
                                        <i class="fas fa-plus" aria-hidden="true"></i>
                                    </a>
                                    @if (slugify($role->name) !== 'admin')
                                        <form action="{{ route('admin.role.destroy', $role->id) }}" method="POST"
                                            class="clearfix">
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
