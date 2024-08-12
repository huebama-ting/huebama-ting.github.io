import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { NavWrapper } from "src/app/common/NavWrapper";
import { PwaReloadPrompt } from "src/app/common/PwaReloadPrompt";
import { ErrorElement } from "src/app/routes/ErrorElement";
import { Routes } from "src/app/shared/constants";
import { Doll } from "src/app/types/doll";

import "./index.css";

const fontFamily =
  "Overpass Variable, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
const theme = createTheme({
  fontFamily,
  headings: { fontFamily },
});
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
      },
      {
        path: Routes.COOP_REPORT,
        lazy: async () => {
          const { CoopReport } = await import("src/app/routes/coop/CoopReport");

          return { Component: CoopReport };
        },
      },
      {
        path: Routes.DOLL_DIRECTORY,
        lazy: async () => {
          const { DollDirectory } = await import(
            "src/app/routes/doll/DollDirectory"
          );

          return { Component: DollDirectory };
        },
      },
      {
        path: Routes.DOLL_INFO,
        lazy: async () => {
          const { DollInfo } = await import("src/app/routes/doll/DollInfo");

          return { Component: DollInfo };
        },
        loader: async ({ params }) => {
          return (await import(`@assets/dolls/${params["name"]}.json`)) as Doll;
        },
      },
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorSchemeScript defaultColorScheme="auto" />
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <RouterProvider router={router} />
      <PwaReloadPrompt />
    </MantineProvider>
  </StrictMode>,
);
