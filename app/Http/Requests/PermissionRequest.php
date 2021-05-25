<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PermissionRequest extends FormRequest
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
            'name' => 'required|string|min:6|max:20|unique:permissions',
        ];
    }
    public function messages(){
        return [
            'name.required' => 'İsim Alanı Gereklidir!',
            'name.unique' => 'Lütfen Olmayan Bir Yetki Giriniz!',
            'name.min' => 'İsim Alanı Minimum 6 karakter olmalıdır!',
            'name.max' => 'İsim Alanı Maximum 20 karakter olmalıdır!',
        ];
    }
}
