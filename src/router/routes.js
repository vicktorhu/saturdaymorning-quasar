
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Pythagoras', component: () => import('pages/Pythagoras.vue') },
      { path: 'Factorial', component: () => import('pages/Factorial.vue') },
      { path: 'Prime', component: () => import('pages/Prime.vue') },
      { path: 'Trigonometry', component: () => import('pages/Trigonometry.vue') },
      { path: 'vuextest', component: () => import('pages/vuextest.vue') },
    ]
  },
  // {
  //   path: '/Pythagoras',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Pythagoras.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
