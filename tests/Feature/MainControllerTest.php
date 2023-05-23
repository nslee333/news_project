<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Http\Controllers\MainController;

class MainControllerTest extends TestCase
{
  // * Test cooldown feature here.

  public function test_controller_returns_copy_of_data_after_second_request(): void
  {
    $controller = new MainController;

    $first_request = $this->get('/');

    $first_check_cooldown = $controller->check_cooldown();

    $this->assertFalse($first_check_cooldown);

    $first_request = $this->get('/');

    // & Stopped at adding second assertion.
  }
 
} 
