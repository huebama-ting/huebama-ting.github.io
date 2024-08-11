import { Stack } from "@mantine/core";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

const Loading = lazy(() => import("src/app/shared/components/Loading"));
const NavigationBar = lazy(() => import("src/app/common/NavigationBar"));

export function NavWrapper() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <NavigationBar />
      </Suspense>

      <Stack justify="center" flex={1}>
        <Outlet />
      </Stack>
    </>
  );
}

export default NavWrapper;
