<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\MainController;
class MainControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    
    public function test_decide_returns_data_copy_if_cooldown_is_active(): void
    {
        $controller = new MainController;

        $controller->fetch_from_api();

        $decide_result = $controller->decide();

        $this->assertTrue($decide_result['cooldown_bool']);

    }
    public function test_decide_returns_fetch_from_api_if_cooldown_is_not_active(): void
    {
        $controller = new MainController;

        $decide = $controller->decide();

        $this->assertFalse($decide['cooldown_bool']);
    }

    }

} 
