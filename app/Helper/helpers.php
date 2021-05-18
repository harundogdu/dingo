<?php
/* clear function */
if (!function_exists('clearAllLogs')) {
    function clearAllLogs()
    {
        Artisan::call('route:clear');
        Artisan::call('config:clear');
        Artisan::call('cache:clear');
    }
}
/* check dbconnection  */
if (!function_exists('checkDBConnection')) {
    function checkDBConnection()
    {
        $conn = @mysqli_connect(
            config('database.connections.' . env('DB_CONNECTION') . '.host'),
            config('database.connections.' . env('DB_CONNECTION') . '.username'),
            config('database.connections.' . env('DB_CONNECTION') . '.password')
        );

        if ($conn) {
            return mysqli_select_db($conn, config('database.connections.' . env('DB_CONNECTION') . '.database'));           
        }
        return false;
    /*     try {
            DB::connection()
                ->getPdo();
        } catch (Exception $e) {
            abort($e instanceof PDOException ? 503 : 500);
        } */
    }
}
