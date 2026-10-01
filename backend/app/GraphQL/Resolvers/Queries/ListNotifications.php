<?php

namespace App\GraphQL\Resolvers\Queries;

use App\Services\NotificationService;
use Illuminate\Support\Enumerable;

class ListNotifications
{
    public function __construct(
        private NotificationService $notificationService
    ) {}

    public function __invoke($_, array $args): Enumerable
    {
        return $this->notificationService->listForUser((int) $args['user_id']);
    }
}
