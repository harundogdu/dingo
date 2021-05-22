<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:3|max:90',
            'email' => 'required|min:6|max:200|unique:users',
            'password' => 'required|string|min:8'
        ];
    }
    public function messages(){
        return [
            'name.required' => 'İsim Alanı Gereklidir!',
            'email.required' => 'Email Alanı Gereklidir!',
            'password.required' => 'Şifre Alanı Gereklidir!'
        ];
    }
}
