import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideoView from '../views/Video.vue'
import VideoInfo1 from '../views/video/VideoInfo1.vue'
import VideoInfo2 from '../views/video/VideoInfo2.vue'
// import { compile } from 'vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/video/:id',
    name: 'video',
    component: VideoView,
    children: [
      { path: 'info1', name: 'video-info1', component: VideoInfo1 },
      { path: 'info2', name: 'video-info2', component: VideoInfo2 }
    ],
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
