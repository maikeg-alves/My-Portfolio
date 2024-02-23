import { ErrorPage, Home } from "@/screens";
import { RouteProps } from "react-router-dom";

export const router: RouteProps[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Sobre",
    element: <div>About</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Serviços",
    element: <div>About</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Processo",
    element: <div>Skills</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <div>projects</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Proficional",
    element: <div>projects</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Contacto",
    element: <div>contact</div>,
    errorElement: <ErrorPage />,
  },
];
