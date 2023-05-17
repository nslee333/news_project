<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use App\Http\Controllers\Controller;
use GuzzleHttp\Promise\PromiseInterface;
class MockHttp extends Controller 
{

  public function mock_api()
  {
    $mock_data = new MockData;

      

    Http::fake([
        "fake_data" => Http::response(
            $mock_data->data,
            200
        ),
    ]);
    

    $response = Http::get("fake_data");

    return $response;
}

} 