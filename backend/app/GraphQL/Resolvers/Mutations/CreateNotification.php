<?php

namespace App\GraphQL\Resolvers\Mutations;

use App\Models\Notification;
use App\Services\NotificationService;

class CreateNotification
{
    public function __construct(
        private NotificationService $notificationService
    ) {}

    public function __invoke($_, array $args): Notification
    {
        return $this->notificationService->create(
            userId: (int) $args['user_id'],
            title: $args['title'],
            message: $args['message'],
        );
    }
}
