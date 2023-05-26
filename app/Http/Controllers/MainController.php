<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\MockData\MockHttp as MockHttp;
use Inertia\Inertia;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;


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

      if ($cooldown === 0) {
        return false;

      } else {
        return true;
      }
    }

    public function decide(): mixed
    {
      $cooldown_bool = $this->check_cooldown();

      if ($cooldown_bool) {
        $data = $this->response_copy;
        return array("cooldown_bool" => $cooldown_bool, "data" => $data);

      } else {
        $data =  $this->fetch_from_api()->json();
        return array("cooldown_bool" => $cooldown_bool, "data" => $data);
      }
    }


    public function fetch_from_api(): Response 
    {

      $api_response = Http::get("https://newsapi.org/v2/top-headlines",
      [
        'apiKey' => env('NEWS_API_KEY'),
        'language' => "en",
      ]);

      // & This code below displays saved mock data for developing.
      
      // $MockHttp = new MockHttp;
      // $response = $MockHttp->mock_api();
      
      // $this->start_cooldown();
      // $this->response_copy = $response;

      // return $response;
      return $api_response;
    }



    public function index() 
    {
      $response = $this->decide()['data'];

     return Inertia::render('Main', [
      'props' => $response
    ]);
  }
}