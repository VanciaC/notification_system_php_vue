<?php

namespace App\GraphQL\Resolvers\Mutations;

use App\Models\Notification;
use App\Services\NotificationService;

class MarkNotificationAsRead
{
    public function __construct(
        private NotificationService $notificationService
    ) {}

    public function __invoke($_, array $args): Notification
    {
        return $this->notificationService->markAsRead((int) $args['id']);
    }
}
