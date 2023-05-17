<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\MainController;
use Illuminate\Http\Client\Response;
use Illuminate\Testing\Fluent\AssertableJson;
use Illuminate\Testing\TestResponse; 
use PHPUnit\Framework\Assert;
// use PHPUnit\Framework\TestCase;



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

        // dd($response);
        // dd(gettype($response));

        // $response->assertContent("status");

        // & I don't think I'm using it correctly.
        // & assertContent is not a method because $response is not an http response.
        // & Response is an object not a response, that's why the methods don't work.
        // * Maybe the issue is that response is not a json object anymore
        
        // * Every assertion that I've used hasn't worked.

        // * I think I saw some code in the App/ dir - maybe I should put mock_http + mock_data there.

        // * Need to binge Laravel tutorials
        // $decide
        //     ->assertJson(fn (AssertableJson $json) => 
        //         $json->hasAll([
        //             'status',
        //             'totalResults',
        //             'articles',
        //         ])->etc()
        //     );
        // $response->assert('status');

        // return $decide;
    }
} 
