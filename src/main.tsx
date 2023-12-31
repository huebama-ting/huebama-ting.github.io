import "@fontsource-variable/overpass";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "src/index.css";
import { Routes } from "src/app/common/constants";
import { ErrorElement } from "src/app/routes/ErrorElement";

if (typeof window !== "undefined") {
  import("src/pwa");
}

const theme = extendTheme({
  fontFamily: {
    display:
      '"Overpass Variable", "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol")',
    body: '"Overpass Variable", "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol")',
  },
});
const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    lazy: async () => {
      const { Home } = await import("src/app/routes/Home");

      return { Component: Home };
    },
    errorElement: <ErrorElement />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <RouterProvider router={router} />
    </CssVarsProvider>
  </React.StrictMode>
);
