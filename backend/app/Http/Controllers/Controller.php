<?php

namespace App\Http\Controllers;

// 1. THÊM DÒNG NÀY VÀO TRÊN CÙNG
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
// Các use statement khác (Validation, Routing...) có thể đã có ở đây

abstract class Controller
{
    // 2. THÊM DÒNG NÀY VÀO TRONG CLASS
    use AuthorizesRequests;
    
    // Các Trait khác (như ValidatesRequests) có thể đã có ở đây
}