@extends('admin.layouts.master')
@section('content')
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Route List</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-striped table-bordered" id="dataTable" width="100%">
                    <caption>List of routes</caption>
                    <thead class="table-primary">
                        <tr>
                            <th>Method</th>
                            <th>URI</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($routes as $route)
                            @if ($route->getPrefix() !== '_ignition' && $route->getPrefix() !== '_debugbar')
                                <tr>
                                    <td>{{$route->Methods()[0]}}</td>
                                    <td>{{ $route->uri }}</td>
                                    <td>{{ $route->getName() }}</td>
                                    <td>{{ $route->getPrefix() }}</td>
                                    <td>{{ $route->getActionMethod() }}</td>
                                </tr>
                            @endif
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection

{{-- css and js --}}
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
