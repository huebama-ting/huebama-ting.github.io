import "@fontsource-variable/overpass";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "src/index.css";
import { NavWrapper } from "src/app/common/NavWrapper";
import { PwaReloadPrompt } from "src/app/common/PwaReloadPrompt";
import { ErrorElement } from "src/app/routes/ErrorElement";
import { Routes } from "src/app/shared/constants";

const theme = extendTheme({
  fontFamily: {
    display:
      '"Overpass Variable", "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol")',
    body: '"Overpass Variable", "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol")',
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavWrapper />,
    children: [
      {
        path: Routes.ROOT,
        lazy: async () => {
          const { Home } = await import("src/app/routes/Home");

          return { Component: Home };
        },
        errorElement: <ErrorElement />,
      },
      {
        path: Routes.COOP_REPORT,
        lazy: async () => {
          const { CoopReport } = await import("src/app/routes/CoopReport");

          return { Component: CoopReport };
        },
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <RouterProvider router={router} />
      <PwaReloadPrompt />
    </CssVarsProvider>
  </StrictMode>,
);
