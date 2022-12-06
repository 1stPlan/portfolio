<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Weidner\Goutte\GoutteFacade as Goutte;
use Symfony\Component\DomCrawler\Crawler;

class ScrapingController extends Controller
{
    public function scrape()
    {
        $service = app()->make('HogeService');
        $text = $service->scrape();
        dd($text);
    }
}