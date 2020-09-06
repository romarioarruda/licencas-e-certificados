const routes = [
  {
    path: '/',
    component: () => import('../pages/Index.vue')
  },
  {
    path: '/tecnologias',
    component: () => import('../pages/Tecnology.vue')
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes