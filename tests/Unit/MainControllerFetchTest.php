<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\MainController;


class MainControllerFetchTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_response_from_fetch_returns_status_ok(): void
    {
        $controller = new MainController;

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $this->assertTrue($response->{"status"} === "ok");

    }
    public function test_fetch_response_has_articles(): void
    {
        $controller = new MainController;

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles) !== "Undefined");
    }
    public function test_fetch_response_articles_is_an_array(): void
    {
        $controller = new MainController;

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles) === "array");
    }
    public function test_fetch_response_article_has_an_author(): void
    {
        $controller = new MainController;

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"author"}) !== "undefined");
    }
    public function test_fetch_response_article_has_a_title(): void
    {
        $controller = new MainController;

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"title"}) !== "undefined");
    }
    public function test_fetch_response_article_has_a_url(): void
    {
        $controller = new MainController;

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"url"}) !== "undefined");
    }
    public function test_fetch_response_article_has_a_urlToImage(): void
    {
        $controller = new MainController;

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"urlToImage"}) !== "undefined");
    }
    public function test_fetch_response_article_has_a_published_at_field(): void
    {
        $controller = new MainController;

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"publishedAt"}) !== "undefined");
    }
    public function test_fetch_response_article_has_a_source(): void
    {
        $controller = new MainController;

        $decide = $controller->fetch_from_api();

        $response = json_decode($decide);

        $articles = $response->{"articles"};

        $this->assertTrue(gettype($articles[0]->{"source"}->{"name"}) !== "undefined");
    }

    public function test_fetch_starts_cooldown(): void
    {
        $controller = new MainController;

        $controller->fetch_from_api();

        $current = time();
        
        $cooldown_time = $controller->cooldown;
        
        $this->assertTrue($cooldown_time > $current);
    }

    public function test_fetch_sets_response_copy(): void
    {
        $controller = new MainController;

        $controller->fetch_from_api();

        $response_copy = $controller->response_copy;

        $this->assertTrue(gettype($response_copy['status']) !== "undefined");
    }
}