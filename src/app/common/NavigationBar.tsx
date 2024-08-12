import { Button, Group } from "@mantine/core";
import { Suspense, lazy } from "react";
import { IoClipboard, IoHome, IoPerson } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";

import { Routes } from "src/app/shared/constants";

const ColourModeToggle = lazy(() => import("src/app/common/ColourModeToggle"));
const Loading = lazy(() => import("src/app/shared/components/Loading"));

export function NavigationBar() {
  // const accessCode = sessionStorage.getItem("COOP_ROUTE_ACCESS_CODE");
  // const isAuthorised =
  //   accessCode === import.meta.env.VITE_COOP_ROUTE_ACCESS_CODE;

  return (
    <Group justify="space-between" m="lg">
      <Group>
        <Button
          component={RouterLink}
          to={Routes.ROOT}
          leftSection={<IoHome />}
          variant="subtle"
        >
          Home
        </Button>
        <Button
          component={RouterLink}
          to={Routes.DOLL_DIRECTORY}
          leftSection={<IoPerson />}
          variant="subtle"
        >
          Doll Directory
        </Button>
        <Button
          component={RouterLink}
          to={Routes.COOP_REPORT}
          leftSection={<IoClipboard />}
          variant="subtle"
        >
          Co-op Reports
        </Button>
      </Group>

      <Suspense fallback={<Loading />}>
        <ColourModeToggle />
      </Suspense>
    </Group>
  );
}

export default NavigationBar;
