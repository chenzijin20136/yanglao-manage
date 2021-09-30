export default [
  {
    name: 'customer',
    icon: 'solution',
    path: '/consumer',
    routes: [
      {
        path: '/consumer',
        component: './consumer',
      },
      {
        name: 'batchadd',
        hideInMenu: true,
        path: '/consumer/batchadd',
        component: './consumer/Batchadd'
      },
      {
        name: 'batchadd',
        hideInMenu: true,
        path: '/consumer/batchaddscore',
        component: './consumer/BatchaddScore'
      },
    ]
  },
  {
    name: 'employee',
    icon: 'user',
    path: '/employee',
    component: './employee',
  },
  {
    name: 'order',
    icon: 'table',
    path: '/order',
    component: './order',
  },
  {
    path: '/',
    redirect: '/consumer',
  },
  {
    component: './404',
  },
];