<?php

namespace App\Services;

use App\Models\Notification;
use App\Repositories\Interfaces\NotificationRepositoryInterface;
use Illuminate\Support\Enumerable;

class NotificationService
{
    public function __construct(
        private NotificationRepositoryInterface $repository
    ) {}

    public function markAsRead(int $id): Notification
    {
        $notification = $this->repository->findById($id);

        return $this->repository->markAsRead($notification);
    }

    public function create(int $userId, string $title, string $message): Notification
    {
        return $this->repository->create([
            'user_id' => $userId,
            'title' => $title,
            'message' => $message,
            'read' => false,
        ]);
    }

    public function listForUser(int $userId): Enumerable
    {
        return $this->repository->findByUserId($userId);
    }
}
