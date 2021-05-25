@extends('admin.layouts.master')
@section('content')
    <div class="card shadow mb-4">
        <div class="card-header py-3 clearfix">
            <h6 class="m-0 font-weight-bold text-primary">Permissions List</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-striped table-bordered" id="dataTable" width="100%">
                    <caption>List of permissions</caption>
                    <thead class="table-primary">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Is Main</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($permissions as $permission)
                            <tr>
                                <td>{{ $permission->id }}</td>
                                <td>{{ toWord($permission->name) }}</td>
                                <td>
                                    @if ($permission->is_main === 1)
                                        <b class="text-success">Yes</b>
                                    @else
                                        <b class="text-danger">No</b>
                                    @endif
                                </td>
                                <td>
                                    <a href="{{ route('admin.permission.edit', $permission->id) }}"
                                        class="float-left mx-2 btn btn-sm btn-info" title="Edit">
                                        <i class="fas fa-pen" aria-hidden="true"></i>
                                    </a>
                                    @if ($permission->is_main !== 1)
                                        <form action="{{ route('admin.permission.destroy', $permission->id) }}"
                                            method="POST" class="clearfix">
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
