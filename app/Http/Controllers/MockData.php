<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use App\Http\Controllers\Controller;
use GuzzleHttp\Promise\PromiseInterface;
class MockData extends Controller 
{

  public function data()
  {
    $data = new Data;

      
    $encoded_mock_data = json_encode($data->mock_data);

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