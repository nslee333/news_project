<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Artisan;

class MainControllerTest extends TestCase
{
  // * Test cooldown feature here.



  // public function test_setup(): void
  // {
  //   Artisan::call('serve');

  //   Artisan::call("shutdown");
  //   // * Testing how to setup and teardown application to test

  //   Artisan::call("Ctrl + C");
  // }

  // public function test_controller_returns_copy_of_data_after_second_request(): void
  // {
  //   $controller = new MainController;

  //   $result = $this->get('/');

  //   dd($controller->cooldown);

  //   $first_check_cooldown = $controller->check_cooldown();
    
  //   $this->assertFalse($first_check_cooldown);
    
  //   $this->get('/');
    
  //   $second_check_cooldown = $controller->check_cooldown();
    
  //   dd([$first_check_cooldown, $second_check_cooldown]);
    
  //   // $this->assertTrue($second_check_cooldown);

    // & Stopped at adding second assertion.
    // * I don't think this test will work since I need the framework to be running to test this feature - might 
    // * Need to look into phpunit fixtures.
    // * I'm going to come back to this later.
  // }
 
} 
