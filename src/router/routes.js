
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/choosequiz', component: () => import('pages/ChooseQuiz.vue') },
      { path: '/addquiz', component: () => import('pages/AddQuiz.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/randomquiz', component: () => import('pages/RandomQuiz.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
