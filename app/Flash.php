<?php

namespace App;

class Flash
{
    protected function create($title, $message, $class, $key = 'flash_message')
    {
        session()->flash($key, [
            'title' => $title,
            'message' => $message,
            'class' => $class
        ]);
    }
    public function info($title, $message)
    {
        return $this->create($title, $message, 'info');
    }
    public function error($title, $message)
    {
        return $this->create($title, $message, 'error');
    }
    public function warning($title, $message)
    {
        return $this->create($title, $message, 'warning');
    }
    public function success($title, $message)
    {
        return $this->create($title, $message, 'success');
    }
    public function overlay($title, $message, $class = 'success')
    {
        return $this->create($title, $message, 'flash_message_overlay');
    }
}
