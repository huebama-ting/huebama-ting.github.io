import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

import { NavigationBar } from "src/app/common/NavigationBar";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

export function NavWrapper() {
  return (
    <>
      <NavigationBar />
      <AppContainer>
        <Outlet />
      </AppContainer>
    </>
  );
}

export default NavWrapper;
