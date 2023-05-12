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
    public function fetch() 
    // & Need to make sure this works.
    {
        $timer = time();
        $data_save = [];
        // echo $data_save[0];
        
        if ($timer < time()) {
            $timer = time() + 15 * 60;
            $response = Http::get("https://newsapi.org/v2/top-headlines", [
                "apiKey" => env('NEWS_API_KEY'),
                "language" => "en"
            ]);
            $data_save = $response;
            return $response;
    
        } else {
            return $data_save;
        }
    
    }
    public function index($props) 
    {
      
      // $props = fetch();
      // echo $props;
      
    // & We're getting data from fetch().
    // & React components are working properly.
    // & With all of that in mind ~ The issue must be in the inertia render part.

     return Inertia::render('Main', [
      'props' => $props
    ]);
    
  }
}