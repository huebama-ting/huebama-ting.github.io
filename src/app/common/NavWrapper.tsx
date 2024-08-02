import { Stack } from "@mantine/core";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import styles from "src/app/shared/styles/layout.module.css";

const Loading = lazy(() => import("src/app/shared/components/Loading"));
const NavigationBar = lazy(() => import("src/app/common/NavigationBar"));

export function NavWrapper() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <NavigationBar />
      </Suspense>

      <Stack className={styles["appContainer"]}>
        <Outlet />
      </Stack>
    </>
  );
}

export default NavWrapper;
