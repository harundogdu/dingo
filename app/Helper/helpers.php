<?php 
/* clear function */
if(!function_exists('clearAllLogs')){
    function clearAllLogs() {
        Artisan::call('route:clear');
        Artisan::call('config:clear');
        Artisan::call('cache:clear');
    }
}
?>