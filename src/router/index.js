import { createRouter, createWebHistory } from 'vue-router'

import ExerciseOnePage from '../views/ExerciseOnePage.vue'
import ExerciseTwoPage from '../views/ExerciseTwoPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Exercise 1',
      component: ExerciseOnePage
    },
    {
      path: '/exercisetwo',
      name: 'Exercise 2',
      component: ExerciseTwoPage
    }
  ]
})

export default router
