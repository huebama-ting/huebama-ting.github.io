import styled from "@emotion/styled";
import Sheet from "@mui/joy/Sheet";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export function Page(props: PageProps) {
  return (
    <Sheet sx={{ padding: "1rem" }}>
      <FlexContainerColumn>{props.children}</FlexContainerColumn>
    </Sheet>
  );
}

export default Page;
