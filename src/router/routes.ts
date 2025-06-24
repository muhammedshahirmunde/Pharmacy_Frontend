import type { RouteObject } from "react-router";
import RootInjector from "../layout/RootInjector";
import Root from "../layout/Root";
import DrugsList from "../screens/DrugsList";
import Login from "../screens/Login";


export const routes: RouteObject[] = [
  {
    path: "",
    Component: RootInjector,
    children: [
      {
        path: "/",
        Component: Root,
        children: [
          {
            index: true,
            Component: DrugsList
          },
          {
            path: "login",
            Component: Login,
          },
        ],
      },
    ],
  },
];
