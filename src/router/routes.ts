import type { RouteObject } from "react-router";
import RootInjector from "../layout/RootInjector";
import Root from "../layout/Root";
import DrugsList from "../screens/DrugsList";

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
        ],
      },
    ],
  },
];
