<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;



class MainController extends Controller
{
  public function fetch() 
  {
    $response = Http::get("https://newsapi.org/v2/top-headlines", [
      "apiKey" => env('NEWS_API_KEY'),
      "language" => "en"
    ]);
    return $response;

  }
}