import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { EditPage } from "./EditPage";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Stack direction="row">
              <Sidebar />
              <HomePage />
            </Stack>
          </PrivateRoute>
        }
      />
      <Route
        path="/task/:id"
        element={
          <Stack direction="row">
            <Sidebar />
            <EditPage />
          </Stack>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
