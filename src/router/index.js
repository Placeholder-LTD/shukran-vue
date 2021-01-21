import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import Home from '@/components/Home'
import Support from '@/components/Support'
import ThankYou from '@/components/ThankYou'
import Admin from '@/components/Admin'
import Reset from '@/components/Reset'
import Pricing from '@/components/Pricing'
import Index from '@/components/Index'
import Terms from '@/components/Terms'
import Blog from '@/components/Blog'
import HowItWorks from '@/components/HowItWorks'
import Subscribers from '@/components/Subscribers'
import Year2020 from '@/components/2020'
import NotFoundErrorPage from '@/components/404'
import BossIn from '@/components/BossIn'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/who',
      name: 'BossIn',
      component: BossIn,
      meta: {
        title: 'Who you?'
      }
    },
    {
      path: '/2020',
      name: '2020',
      component: Year2020,
      meta: {
        title: 'The Shukran 2020 Highlight'
      }
    },
    {
      path: '/terms',
      name: 'Terms and Conditions',
      component: Terms,
      meta: {
        title: 'Terms and Conditions - Shukran'
      }
    },
    {
      path: '/subscribers',
      name: 'Subscribers',
      component: Subscribers,
      meta: {
        title: 'Your Subscribers'
      }
    },
    {
      path: '/how-it-works',
      name: 'HowItWorks',
      component: HowItWorks,
      meta: {
        title: 'Shukran, how it works'
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: {
        title: 'Shukran Blog'
      }
    },
    {
      path: '/index', // needs deleting
      name: 'Home',
      component: Home,
      meta: {
        title: 'Homepage - Shukran'
      }
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: 'Welcome, and Shukran'
      }
    },
    {
      path: '/accounts',
      name: 'Hello',
      component: Hello,
      meta: {
        title: 'Register - Shukran'
      }
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
      meta: {
        title: 'Pricing - Shukran'
      }
    },
    {
      path: '/dash',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard - Shukran'
      }
    },
    {
      path: '/boss',
      name: 'Admin',
      component: Admin,
      meta: {
        title: 'Admin - Shukran',
        authenticate: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        title: 'Profile - Shukran'
      }
    },
    {
      path: '/cr/:username',
      name: 'Support',
      component: Support,
      meta: {
        reload: false,
        title: vm => `Shukran ${vm.$route.params.username}`
      }
    },
    {
      path: '/thanks',
      name: 'ThankYou',
      component: ThankYou
    },
    {
      path: '/resetpassword',
      name: 'Reset',
      component: Reset,
      meta: {
        title: 'Reset - Shukran'
      }
    },
    {
      path: '*',
      name: '404',
      component: NotFoundErrorPage,
      meta: {
        title: '📸👩🏾‍💻📹✍️🎙️💅🏻🎼❤️'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/boss') {
    if (sessionStorage.getItem('++') && sessionStorage.getItem('++') === 'false') {
      next({
          path: '/who',
          params: { nextUrl: to.fullPath }
      })
    } else if (sessionStorage.getItem('++') === 'true') { // should really be jwt or sth
      next()
    }
  } else {
    next()
  }
})

export default router
