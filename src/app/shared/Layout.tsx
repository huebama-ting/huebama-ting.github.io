import styled from "@emotion/styled";
import Sheet from "@mui/joy/Sheet";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export function Page(props: PageProps) {
  return (
    <Sheet>
      <Container>{props.children}</Container>
    </Sheet>
  );
}

export default Page;
