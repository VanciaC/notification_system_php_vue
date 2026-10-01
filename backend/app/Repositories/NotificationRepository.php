<?php

namespace App\Repositories;

use App\Models\Notification;
use App\Repositories\Interfaces\NotificationRepositoryInterface;

class NotificationRepository implements NotificationRepositoryInterface
{
    public function findById(int $id): Notification
    {
        return Notification::findOrFail($id);
    }

    public function create(array $data): Notification
    {
        return Notification::create($data);
    }

    public function markAsRead(Notification $notification): Notification
    {
        $notification->update(['read' => true]);

        return $notification;
    }

    public function findByUserId(int $userId): iterable
    {
        return Notification::where('user_id', $userId)
            ->orderByDesc('created_at')
            ->get();
    }
}
