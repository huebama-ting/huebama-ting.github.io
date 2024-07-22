import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import { AppContainer } from "src/app/shared/Layout";

const Loading = lazy(() => import("src/app/shared/Loading"));
const NavigationBar = lazy(() => import("src/app/common/NavigationBar"));

export function NavWrapper() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <NavigationBar />
      </Suspense>

      <AppContainer>
        <Outlet />
      </AppContainer>
    </>
  );
}

export default NavWrapper;
