import { lazy } from "react";
/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import PrivateLayout from "../layouts/PrivateLayout";
import ErrorBoundary from "~/layouts/ErrorBoundary";
import PublicLayout from "../layouts/PublicLayout";

const Dashboard = lazy(() => import("../views/Dashboard/index"));
const Login = lazy(() => import("../views/authentication/Login"));
const LogsList = lazy(() => import("../views/LogsList/index"));
const UsersList = lazy(() => import("../views/UsersList/index"));
const NotFound = lazy(() => import("../views/NotFound/index"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />} path="/" element={<Outlet />}>
      <Route path="/" element={<PrivateLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/logs" Component={LogsList} />
        <Route path="/logs/:id" Component={LogsList} />
        <Route path="/users" Component={UsersList} />
        <Route path="/users/:id" Component={UsersList} />
      </Route>
      <Route path="/" element={<PrivateLayout emptyLayout="true" />}>
        <Route path="/*" Component={NotFound} />
      </Route>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/login" Component={Login} />
      </Route>
    </Route>
  )
);
