<script setup lang="ts">
import { useGetNotificationsQuery, useMarkAsReadMutation } from '@/graphql/generated'

//Just for test
const userId = '1'

const { result, loading, error, refetch } = useGetNotificationsQuery({ userId })
const { mutate: markAsRead } = useMarkAsReadMutation()

async function handleMarkAsRead(id: string) {
  await markAsRead({ id })
  refetch()
}

function formatDate(value: unknown): string {
  const date = new Date(value as string)
  return date.toLocaleString('fr-FR', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>

<template>
  <div class="panel">
    <header class="panel-header">
      <h1>Notifications</h1>
      <span v-if="result?.notifications?.length" class="count">
        {{ result.notifications.filter((n) => !n.read).length }} non lues
      </span>
    </header>

    <p v-if="loading" class="state">Chargement…</p>
    <p v-else-if="error" class="state state-error">{{ error.message }}</p>

    <ul v-else-if="result?.notifications?.length" class="list">
      <li
        v-for="notification in result.notifications"
        :key="notification.id"
        class="item"
        :class="{ 'is-unread': !notification.read }"
      >
        <div class="item-body">
          <div class="item-top">
            <strong class="item-title">{{ notification.title }}</strong>
            <time class="item-time">{{ formatDate(notification.created_at) }}</time>
          </div>
          <p class="item-message">{{ notification.message }}</p>
        </div>
        <div class="item-action">
          <button
            v-if="!notification.read"
            class="mark-read"
            @click="handleMarkAsRead(notification.id)"
          >
            Marquer comme lu
          </button>
        </div>
      </li>
    </ul>

    <p v-else class="state">Aucune notification pour l'instant</p>
  </div>
</template>

<style scoped>
.panel {
  width: 560px;
  max-width: calc(100vw - 3rem);
  margin: 4.5rem auto;
  padding: 0 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  color: #e8e9ed;
  box-sizing: border-box;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;
}

.panel-header h1 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.01em;
}

.count {
  font-size: 0.78rem;
  color: #8b8d96;
  background: #1e2025;
  border: 1px solid #2c2e35;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
}

.state {
  color: #8b8d96;
  font-size: 0.9rem;
  padding: 2.5rem 0;
  text-align: center;
}

.state-error {
  color: #e06c6c;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #1a1c21;
  padding: 1rem 1.15rem;
  border: 1px solid #26282e;
  border-left: 3px solid #26282e;
  border-radius: 10px;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.item.is-unread {
  border-left-color: #5b8def;
  background: #1c1f26;
}

.item-body {
  flex: 1;
  min-width: 0;
}

.item-action {
  flex-shrink: 0;
  width: 136px;
  display: flex;
  justify-content: flex-end;
}

.item-top {
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
  margin-bottom: 0.3rem;
}

.item-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #c7c9d1;
}

.item.is-unread .item-title {
  color: #ffffff;
}

.item-time {
  font-size: 0.72rem;
  color: #6b6d76;
  white-space: nowrap;
}

.item-message {
  margin: 0;
  font-size: 0.86rem;
  color: #8b8d96;
  line-height: 1.45;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.mark-read {
  flex-shrink: 0;
  background: transparent;
  border: 1px solid #33363d;
  color: #a7a9b3;
  font-size: 0.76rem;
  font-weight: 500;
  padding: 0.45rem 0.8rem;
  border-radius: 7px;
  cursor: pointer;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.mark-read:hover {
  border-color: #5b8def;
  color: #5b8def;
}
</style>