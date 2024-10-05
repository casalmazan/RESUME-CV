import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/components/Profile';
import Skills from '@/components/Skills';
import Education from '@/components/Educ';

Vue.use(Router);

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills,
    },
    {
      path: '/education',
      name: 'Education',
      component: Education,
    },
  ],
});