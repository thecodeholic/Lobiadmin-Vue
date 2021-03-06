import router from '../../../shared/router'
import Login from "./Login";

let {routes} = router.options;
const mainRoute = routes.find(r => r.name === 'auth');

mainRoute.children.push(
    {
      path: 'login',
      component: Login,
    }
);

router.addRoutes([mainRoute]);
