import styled from "@emotion/styled";
import { Center, Stack } from "@mantine/core";

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
    <Center>
      <Stack align="center">{props.children}</Stack>
    </Center>
  );
}

export default Page;
