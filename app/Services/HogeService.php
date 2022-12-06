<?php
namespace App\Services;
use Symfony\Component\DomCrawler\Crawler;
use Mockery;
use GuzzleHttp\Client;


class HogeService
{
    // https://qiita.com/ucan-lab/items/41ed62a766845cd484c6
    // Guzzleの書き方が変更されている。上記を参考にする。
    // class HeadlessCmsController の方が今回の書き方が正しい。


    public function scrape()
    {
        $url = "https://ryuunosato-yadomi.com/";

        $client = new Client();
        $response = $client->request('GET',$url );
        $crawler = new Crawler($response->getBody()->getContents());

        $header_text = $crawler->filter('body')->each(function ($node) {

            $title = $node->filter('h2')->text();
            $body = $node->filter('#cont03 > div')->text();

            return [$title, $body];
        });

        return $header_text;
    }
}
