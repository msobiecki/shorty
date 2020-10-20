import { Home } from "./pages";

type RouteType = {
  path: string;
  exact?: boolean;
  component: () => JSX.Element;
  routes?: Array<RouteType>;
};

const routes: Array<RouteType> = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
];

export default routes;
