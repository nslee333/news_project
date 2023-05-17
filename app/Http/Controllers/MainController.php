<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Http\Controllers\MockHttp as MockHttp;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Http\Client\Response;


  class MainController extends Controller
  {
    public $mock_response = [];
    public $cooldown = 0;
    public $response_copy = [];

    public function start_cooldown(): void
    {
      $this->cooldown = time() + 30 * 60; 
    }

    public function check_cooldown(): Bool
    {
      $cooldown = $this->cooldown;

      if ($cooldown == 0) {
        return false;
      } else {
        return true;
      }
    }

    public function decide(): mixed
    {
      $cooldown_bool = $this->check_cooldown();

      if ($cooldown_bool) {
        return $this->response_copy;
      } else {
        return $this->fetch_from_api()->json();
      }
    }


    public function fetch_from_api(): Response 
    {

      // $api_response = Http::get("https://newsapi.org/v2/top-headlines",
      // [
      //   'apiKey' => env('NEWS_API_KEY'),
      //   'language' => "en",
      // ]);


      $MockHttp = new MockHttp;
        
      $response = $MockHttp->mock_api();


      $this->start_cooldown();
      $this->response_copy = $response;

      return $response;
      // return $api_response;
    }



    public function index() 
    {
      $response = $this->decide();

     return Inertia::render('Main', [
      'props' => $response
    ]);
  }
}