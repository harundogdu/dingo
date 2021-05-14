@extends('admin.layouts.master')
@section('content')
    <table class="table table-striped table-bordered">
        <caption>List of routes</caption>
        <thead class="table-primary">
            <tr>
                <th>URI</th>
                <th>Name</th>
                <th>Type</th>
                <th>Method</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($routes as $route)
                @if ($route->getPrefix() !== '_ignition' && $route->getPrefix() !== '_debugbar')
                    <tr>
                        <td>{{ $route->uri }}</td>
                        <td>{{ $route->getName() }}</td>
                        <td>{{ $route->getPrefix() }}</td>
                        <td>{{ $route->getActionMethod() }}</td>
                    </tr>
                @endif
            @endforeach
        </tbody>
    </table>
@endsection
