import { Stack } from "@mantine/core";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import styles from "./styles/shell.module.css";

const Loading = lazy(() => import("src/app/shared/components/Loading"));
const NavigationBar = lazy(() => import("src/app/common/NavigationBar"));

export function Shell() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <NavigationBar />
      </Suspense>

      <Stack className={styles["app-container"]}>
        <Outlet />
      </Stack>
    </>
  );
}

export default Shell;
