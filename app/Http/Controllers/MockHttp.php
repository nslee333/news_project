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

      
    $encoded_mock_data = json_encode($mock_data->data);

    Http::fake([
        "fake_data" => Http::response(
                [$encoded_mock_data],
            200
        ),
    ]);
    

    $response = Http::get("fake_data");

    return $response;
}

} 