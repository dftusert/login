<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->only('login', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            if($user->hasRole('Student')) return redirect()->intended('/student');
            if($user->hasRole('Organization')) return redirect()->intended('/organization');
            if($user->hasRole('Admin')) return redirect()->intended('/admin');
            return redirect()->intended('/');
        }

        return back()->withErrors(['message' => 'Неверные учетные данные ' . Hash::make($credentials['password'])]);
    }

    public function logout(Request $request) {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
