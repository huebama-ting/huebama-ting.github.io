import { Center, Stack } from "@mantine/core";

import { ChildrenProps } from "src/app/types/prop";

export function Page(props: ChildrenProps) {
  return (
    <Center>
      <Stack align="center">{props.children}</Stack>
    </Center>
  );
}

export default Page;
