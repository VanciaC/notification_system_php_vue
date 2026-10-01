<?php

namespace App\Repositories\Interfaces;

use App\Models\Notification;

interface NotificationRepositoryInterface
{
    public function findById(int $id): Notification;

    public function create(array $data): Notification;

    public function markAsRead(Notification $notification): Notification;

    public function findByUserId(int $userId): iterable;
}
