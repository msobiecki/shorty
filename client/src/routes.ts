import { ReactElement } from 'react';
import { Home, Search } from './pages';

type RouteType = {
  path: string;
  exact?: boolean;
  component: () => ReactElement;
  routes?: Array<RouteType>;
};

const routes: Array<RouteType> = [
  {
    path: '/search',
    exact: true,
    component: Search,
  },
  {
    path: '/',
    exact: true,
    component: Home,
  },
];

export default routes;
