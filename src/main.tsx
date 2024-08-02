import "@fontsource-variable/overpass";
import "@fontsource-variable/overpass/wght-italic.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "src/index.css";
import { NavWrapper } from "src/app/common/NavWrapper";
// import { PwaReloadPrompt } from "src/app/common/PwaReloadPrompt";
import { ErrorElement } from "src/app/routes/ErrorElement";
import { Routes } from "src/app/shared/constants";
// import { Doll } from "src/app/types/doll";

// const theme = extendTheme({
//   fontFamily: {
//     display:
//       '"Overpass Variable", "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol")',
//     body: '"Overpass Variable", "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol")',
//   },
// });
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavWrapper />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: Routes.ROOT,
        lazy: async () => {
          const { Home } = await import("src/app/routes/home/Home");

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
      },
      // {
      //   path: Routes.DOLL_DIRECTORY,
      //   lazy: async () => {
      //     const { DollDirectory } = await import(
      //       "src/app/routes/DollDirectory"
      //     );

      //     return { Component: DollDirectory };
      //   },
      // },
      // {
      //   path: Routes.DOLL_INFO,
      //   lazy: async () => {
      //     const { DollInfo } = await import("src/app/routes/DollInfo");

      //     return { Component: DollInfo };
      //   },
      //   loader: async ({ params }) => {
      //     return (await import(`@assets/dolls/${params["name"]}.json`)) as Doll;
      //   },
      // },
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
