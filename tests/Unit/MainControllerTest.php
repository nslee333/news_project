<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\MainController;
use Inertia\Testing\AssertableInertia as Assert;

class MainControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    
    public function test_(): void
    {
        $controller = new MainController;

        $response = $controller->index();

    }
    
} 
