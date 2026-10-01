<?php

namespace App\GraphQL\Queries;

use App\Services\NotificationService;

class ListNotifications
{
    public function __construct(
        private NotificationService $notificationService
    ) {}

    public function __invoke($_, array $args): iterable
    {
        return $this->notificationService->listForUser((int) $args['user_id']);
    }
}
