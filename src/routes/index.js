import Home from '~/pages/Home';
import Catalog from '~/pages/Catalog';
import Detail from '~/pages/Detail';
import config from '~/config';
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path:  config.routes.catalog, component: Catalog },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.search, component: Catalog },
];
