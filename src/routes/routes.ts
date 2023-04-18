import { lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyLoad1" */ "../lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyLoad2" */ "../lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyLoad3" */ "../lazyload/pages/LazyPage3"));

export const routes: Route[] = [
    {
        path: '/lazy1',
        to: 'lazy1',
        Component: Lazy1,
        name: 'Lazy Page 1',
    },
    {
        path: '/lazy2',
        to: 'lazy2',
        Component: Lazy2,
        name: 'Lazy Page 2',
    },
    {
        path: '/lazy3',
        to: 'lazy3',
        Component: Lazy3,
        name: 'Lazy Page 3',
    },

];