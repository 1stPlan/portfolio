<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Mockery;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
    //     $mock = Mockery::mock(HogeService::class)
    //     ->shouldReceive('scrape')
    //     ->andReturn('aaaaaaaaaaa')
    //     ->getMock();

    //     $this->app->bind('HogeService', function() use ($mock) {
    //         return $mock;
    //     });

    // $response = $this->get('http://localhost/api/scraping2');
    // $response->assertStatus(200);

    $response = $this->get('/');
    $response->assertStatus(302);

    }
}
