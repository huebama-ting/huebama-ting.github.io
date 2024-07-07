import styled from "@emotion/styled";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

const Loading = lazy(() => import("src/app/shared/Loading"));
const NavigationBar = lazy(() => import("src/app/common/NavigationBar"));

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

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
