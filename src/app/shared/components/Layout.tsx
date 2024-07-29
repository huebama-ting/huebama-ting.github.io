import styled from "@emotion/styled";
import Sheet from "@mui/joy/Sheet";

import { ChildrenProps } from "src/app/types/prop";

export const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
export const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export function Page(props: ChildrenProps) {
  return (
    <Sheet sx={{ padding: "1rem" }}>
      <FlexContainerColumn>{props.children}</FlexContainerColumn>
    </Sheet>
  );
}

export default Page;
