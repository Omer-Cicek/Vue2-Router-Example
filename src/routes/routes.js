// import User from '../components/user/User.vue';
import Home from '../components/Home.vue';
// import UserStart from '../components/user/UserStart.vue';
// import UserDetail from '../components/user/UserDetail.vue';
// import UserEdit from '../components/user/UserEdit.vue';

const User = (resolve) => {
  require.ensure(
    ['../components/user/User.vue'],
    () => {
      resolve(require('../components/user/User.vue'));
    },
    'user'
  );
};
const UserStart = (resolve) => {
  require.ensure(
    ['../components/user/UserStart.vue'],
    () => {
      resolve(require('../components/user/UserStart.vue'));
    },
    'user'
  );
};
const UserDetail = (resolve) => {
  require.ensure(
    ['../components/user/UserDetail.vue'],
    () => {
      resolve(require('../components/user/UserDetail.vue'));
    },
    'user'
  );
};
const UserEdit = (resolve) => {
  require.ensure(
    ['../components/user/UserEdit.vue'],
    () => {
      resolve(require('../components/user/UserEdit.vue'));
    },
    'user'
  );
};

export const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/user',
    component: User,
    children: [
      { path: '', component: UserStart },
      {
        path: ':id',
        component: UserDetail,
        name: 'userDetail',
        beforeEnter: (to, from, next) => {
          console.log('inside route setup');
          next();
        },
      },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ],
  },
  {
    path: '/redirect-me',
    redirect: { name: 'home' },
  },
  {
    path: '*',
    redirect: '/',
  },
];
