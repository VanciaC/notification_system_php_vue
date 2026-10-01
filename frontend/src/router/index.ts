import { createRouter, createWebHistory } from 'vue-router'
import NotificationsView from '@/views/NotificationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'notifications', component: NotificationsView },
  ],
})

export default router