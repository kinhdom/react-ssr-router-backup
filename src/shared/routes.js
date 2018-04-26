import Detail from "./components/Detail";
import Home from './components/Home'
const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/detail/:id",
    component: Detail
  }
];

export default routes;
