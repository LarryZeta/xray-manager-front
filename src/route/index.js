import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Footbar from '@/components/Footbar'
import Service from '@/pages/Service'
import Clients from '@/pages/Clients'
import Orders from '@/pages/Orders'
import Users from '@/pages/Users'
import Accounts from '@/pages/Accounts'
import Profile from '@/pages/Profile'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/navbar/',
      name: 'navbar',
      component: Navbar
    },
    {
      path: '/footbar/',
      name: 'footbar',
      component: Footbar
    },
    {
        path: '/service/',
        name: 'service',
        component: Service
    },
    {
        path: '/clients/',
        name: 'clients',
        component: Clients
    },
    {
        path: '/orders/',
        name: 'orders',
        component: Orders
    },
    {
        path: '/users/',
        name: 'users',
        component: Users
    },
    {
        path: '/accounts/',
        name: 'accounts',
        component: Accounts
    },
    {
        path: '/profile/',
        name: 'profile',
        component: Profile
    }
  ]
})
