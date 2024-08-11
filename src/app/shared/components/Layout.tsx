import { Stack } from "@mantine/core";

import { ChildrenProps } from "src/app/types/prop";

export function Page(props: ChildrenProps) {
  return <Stack align="center">{props.children}</Stack>;
}

export default Page;
