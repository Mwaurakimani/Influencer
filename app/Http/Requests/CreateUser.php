<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUser extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        $type = $this->route('type');

        if($type == 'Marketer'){
            return [
                'first_name' => 'required|string|max:130',
                'last_name' => 'required|string|max:130',
                'email' => 'required|string|email|max:130|unique:users,email',
                'phone' => 'required|string|max:130',
                'password' => 'required|string',
                'account_type' => 'required|string',
                'confirm_password' => 'required|string|same:password',
            ];
        }else{
            return [
            ];
        }


    }
}
