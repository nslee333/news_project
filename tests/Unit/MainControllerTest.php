<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers;
use App\Http\Controllers\MainController;
use Inertia\Testing\AssertableInertia as Assert;
use Illuminate\Testing\Fluent\AssertableJson;


class MainControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_returns_response_from_api(): void // 
    {
        
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $decide
            ->assertJson(fn (AssertableJson $json) => 
            $json->hasAll(['status', 'totalResults', 'articles'])
        );
    }
}
