<?php

namespace App\Channels;

use Illuminate\Notifications\Notification;

class WordPressChannel
{
    /**
     * Send the given notification.
     *
     * @param  mixed  $notifiable
     * @param  \Illuminate\Notifications\Notification  $notification
     * @return void
     */
    public function send($notifiable, Notification $notification)
    {
        $result = $notification->toWordpress($notifiable);
        // $resultには、投稿された結果が入っています
        // dump($result);
    }
}