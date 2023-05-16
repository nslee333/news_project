<?php

namespace Tests\Unit;

use Inertia\Testing\AssertableInertia as Assert;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class WebTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    
    {

//         
//         Http::fake([
//             '/' => Http::response(
//                 [
//                     $fake_data
//                 ],
//                 200
//             ),
//         ]);

        // $lol = "jfjf";
        // dd($lol);

        $response = $this->get("/");
        // dd($response);
        $response->assertStatus(200);

        // $this->assertJsonStringEqualsJsonString(
        //     $response->body(),
        //     json_encode([
        //         '' => '',
        //         '' => ''
        //     ],)
        // );
    }





    // public function test_response_has_articles(): void
    
    // {
    //     $response = $this->get('/');

    //     // dd($response);
        
    //     $response->assertInertia(fn (Assert $page) => $page
    //     ->has('props')
    //     ->has('props.articles')
    //     );
    // }
    
}