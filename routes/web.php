<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MainController;
use App\Http\Controllers;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// function data() 
// {
//     $data = MainController::fetch();

//     return $data;

// } 
// function fetch() 
// {
//     $timer = time();
//     $data_save = [];
//     // echo $data_save[0];
    
//     if ($timer < time()) {
//         $timer = time() + 15 * 60;
//         $response = Http::get("https://newsapi.org/v2/top-headlines", [
//             "apiKey" => env('NEWS_API_KEY'),
//             "language" => "en"
//         ]);
//         $data_save = $response;
//         return $response;

//     } else {
//         return $data_save;
//     }

// }

// & Trying to send data to frontend.

Route::get('/', [MainController::class, 'index']);
Route::get('/', function () 
{
    $props = MainController::fetch();  
    return MainController::index($props);
});


// Route::get('/', function () 
// {
    // $data = fetch();

    // return json_encode($data);

    
    // $props = Http::get("https://newsapi.org/v2/top-headlines", [
    //     "apiKey" => env('NEWS_API_KEY'),
    //     "language" => "en"
    // ]);

    // $props = fetch();
    

    
    // echo "$props";
    // return Inertia::render('Main', ['props' => $props]);



    // & Still trying to pass props with render
    // * Worry about fetch() after you get props passed properly
    // https://laravel.com/docs/10.x/frontend
// });

require __DIR__.'/auth.php';
