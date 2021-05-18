<?php

namespace App\Http\Middleware;

use Closure;
use DB;

class Ancyra
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

        if(checkDBConnection()){
            DB::connection()->disableQueryLog();
        }


        return $next($request);
    }
}
