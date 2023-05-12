<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;


// public function fetch() 
// {
  //   $response = Http::get("https://newsapi.org/v2/top-headlines", [
  //     "apiKey" => env('NEWS_API_KEY'),
  //     "language" => "en"
  //   ]);
  //   return $response;
  
  // }
  
  
  class MainController extends Controller
  {
    public static function fetch() 
    // & Need to make sure this works.
    {
        $timer = time();
        $data_save = [];
        // echo $data_save[0];
        $response = Http::get("https://newsapi.org/v2/top-headlines", [
            "apiKey" => env('NEWS_API_KEY'),
            "language" => "en"
        ]);
        
        if ($timer < time()) {
            $timer = time() + 15 * 60;
            $data_save = $response;
            return $response;
            
          } else {
            return $data_save;
          }
          
        }
    public static function index($props) 
    {
      $response = Http::get("https://newsapi.org/v2/top-headlines", [
          "apiKey" => env('NEWS_API_KEY'),
          "language" => "en"
      ]);

      // & I'm finally passing data with response.
      // & Now my issue is how do I access the response data?

      
          // $res = MainController::fetch();

          // echo $response;

          $arr = $response;
          
      $props = [
        "data" => $arr,
        "name" => "lol"
      ];

     return Inertia::render('Main', [
      'props' => $props
    ]);
    
  }
}