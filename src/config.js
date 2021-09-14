import { lazy } from "react-router-guard";

export default [
  {
    path: "/",
    component: lazy(() => import("./layouts/MainLayout")),
    routes: [
      {
        path: "/",
        exact: true,
        redirect: "/home/1"
      },
      {
        path: "/services",
        redirect: "/services/1"
      },
      {
        path: "/home/1",
        component: lazy(() => import("./pages/Home/Component"))
      },
      {
        path: "/home/2",
        component: lazy(() => import("./pages/Home/System"))
      },
      {
        path: "/services/1",
        component: lazy(() => import("./pages/Services/NewService1"))
      },
      {
        path: "/services/2",
        component: lazy(() => import("./pages/Services/NewService2"))
      }
    ]
  }
];
