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

        $response = $this->get("/");

        $response->assertStatus(200);
    }

    public function test_response_returns_inertia_response(): void
    {
        $response = $this->get('/');

        $response->assertInertia(fn (Assert $page) => $page);
    }


    public function test_response_has_main_component(): void
    {
        $response = $this->get('/');

        $response->assertInertia(fn (Assert $page) => $page
        ->component('Main')
        );
    }
    public function test_response_has_props(): void
    {
        $response = $this->get('/');

        $response->assertInertia(fn (Assert $page) => $page
        ->has('props')
        );
    }

    public function test_response_has_articles(): void
    {
        $response = $this->get('/');

        $response->assertInertia(fn (Assert $page) => $page
        ->has('props')
        ->has('props.articles')
        );
    }
    
}