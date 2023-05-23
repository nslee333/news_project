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

    public function test_check_cooldown_returns_false_if_cooldown_is_inactive(): void 
    {
        $controller = new MainController; 

        $boolean = $controller->check_cooldown();

        $this->assertFalse($boolean);
    }

    public function test_test_cooldown_returns_true_if_cooldown_is_active(): void
    {
        $controller = new MainController;

        $controller->start_cooldown();

        $boolean = $controller->check_cooldown();
        
        $this->assertTrue($boolean);
    }

    public function test_start_cooldown_starts_cooldown(): void
    {
        $controller = new MainController;

        $current_time = time();

        $controller->start_cooldown();

        $cooldown = $controller->cooldown;

        $this->assertTrue($cooldown > $current_time);
    }

    public function test_start_cooldown_adds_30_minutes_to_cooldown(): void
    {
        $controller = new MainController;

        $expected_time = time() + 30 * 60;

        $controller->start_cooldown();

        $cooldown = $controller->cooldown;

        $this->assertTrue($cooldown === $expected_time);
    }

} 
