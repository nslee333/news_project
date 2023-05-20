<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use App\Http\Controllers\Controller;
use Illuminate\Http\Client\Response;
class MockHttp  
{

  public function mock_api(): Response
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