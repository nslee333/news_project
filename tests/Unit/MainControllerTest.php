<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\MainController;

class MainControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    
    public function test_response_from_fetch_returns_status_ok() // 
    {
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $this->assertTrue($response->{"status"} === "ok");

    }
    public function test_fetch_response_has_articles() // 
    {
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles) !== "Undefined");
    }
    public function test_fetch_response_articles_is_an_array() // 
    {
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles) === "array");
    }
    public function test_fetch_response_article_has_an_author() // 
    {
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"author"}) !== "undefined");
    }
    public function test_fetch_response_article_has_a_title() // 
    {
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"title"}) !== "undefined");
    }
    public function test_fetch_response_article_has_a_url() // 
    {
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"url"}) !== "undefined");
    }
    public function test_fetch_response_article_has_a_urlToImage() // 
    {
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"urlToImage"}) !== "undefined");
    }
    public function test_fetch_response_article_has_a_published_at_field() // 
    {
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"publishedAt"}) !== "undefined");
    }
    public function test_fetch_response_article_has_a_source() // 
    {
        $controller = new MainController;

        $controller->start_cooldown();

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"source"}->{"name"}) !== "undefined");
    }
} 
