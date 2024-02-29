import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layout/index.vue'),
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: () => import('../views/Overview.vue')
        },
        {
          path: 'operation',
          name: 'overation',
          component: () => import('../views/Operation.vue')
        },
        {
          path: 'classrooms',
          name: 'classrooms',
          component: () => import('../views/ClassRooms.vue')
        }
      ]
    }
  ]
})

export default router
