<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\MainController;
use Illuminate\Testing\Fluent\AssertableJson;
use Illuminate\Testing\TestResponse; 


class MainControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_returns_response_from_api() // 
    {
        
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide->getBody());

        dd($response);
        // dd(gettype($response));

        // $response->assertContent("status");

        // & I don't think I'm using it correctly.
        // & assertContent is not a method because $response is not an http response.
        // & Response is an object not a response, that's why the methods don't work.
        
        

        // $response
        //     ->assertJson(fn (AssertableJson $json) => 
        //         $json->hasAll([
        //             'status',
        //             'totalResults',
        //             'articles',
        //         ])->etc()
        //     );

        // return $decide;
    }
}
