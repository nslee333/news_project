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
    // public function test_returns_response_from_api() // 
    // {
        
    //     $controller = new MainController;

    //     $controller->start_cooldown();

    //     $decide = $controller->fetch_from_api();

    //     // $decide
    //     //     ->assertJson(fn (AssertableJson $json) => 
    //     //     $json->hasAll(['status', 'totalResults', 'articles'])
    //     // );
    //     // $data = $this->getOriginalContent()->getData();
    //     // dd(json_decode($decide->getBody()));
    //     $response = json_decode($decide->getBody());

    //     $response
    //         ->assertJson(fn (AssertableJson $json) => 
    //             $json->hasAll([
    //                 'status',
    //                 'totalResults',
    //                 'articles',
    //             ])
    //         );

    //     // return $decide;
    // }
}
