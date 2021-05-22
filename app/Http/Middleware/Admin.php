<?php

namespace App\Http\Middleware;

use Closure;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (checkDBConnection()) {
            if (auth()->check()) {
                $roles = auth()->user()->roles()->get();

                foreach ($roles as $role) {
                    if ($role->is_see_admin) {
                        return $next($request);
                    } else {
                        return redirect('/');
                    }
                }
            }
        }
        return $next($request);
    }
}
