<?php

namespace App\Notifications;

use App\Channels\WordpressChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class WordPressNotification extends Notification
{
    use Queueable;

    private $post_data;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($post_data)
    {
        $this->post_data = $post_data;

        // dump($post_data);
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [WordpressChannel::class];
    }

    public function toWordpress($notifiable) {

        $api_url = config('services.wordpress.url');
        $username = config('services.wordpress.username');
        $password = config('services.wordpress.password');

        $data = $this->post_data;

        // dump($data);

        $headers = [
            'Authorization: Basic ' . base64_encode($username .':'. $password),
            'Content-Type: application/json',
        ];

        //////////////////////////
        //CURL処理
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $api_url );
        // curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');            // post
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));   // jsonデータを送信
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);             // リクエストにヘッダーを含める
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true );
        curl_setopt($ch, CURLOPT_HEADER, true );

        // dump($ch);

        $response = curl_exec($ch);

        // dump($response);

        $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE); 
        $header = substr($response, 0, $header_size);
        $body = substr($response, $header_size);

        $result = json_decode($body, true); 

        curl_close($ch);

        return $result;

    }

}
