import { Button, Group } from "@mantine/core";
import {
  IconClipboard,
  IconHomeFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { Suspense, lazy } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Routes } from "src/app/shared/constants";

import styles from "./styles/navigation-bar.module.css";

const ColourModeToggle = lazy(() => import("src/app/common/ColourModeToggle"));
const Loading = lazy(() => import("src/app/shared/components/Loading"));

export function NavigationBar() {
  // const accessCode = sessionStorage.getItem("COOP_ROUTE_ACCESS_CODE");
  // const isAuthorised =
  //   accessCode === import.meta.env.VITE_COOP_ROUTE_ACCESS_CODE;

  return (
    <Group className={styles["nav"]}>
      <Group>
        <Button
          component={RouterLink}
          to={Routes.ROOT}
          leftSection={<IconHomeFilled />}
          variant="subtle"
        >
          Home
        </Button>
        <Button
          component={RouterLink}
          to={Routes.DOLL_DIRECTORY}
          leftSection={<IconUserFilled />}
          variant="subtle"
        >
          Doll Directory
        </Button>
        <Button
          component={RouterLink}
          to={Routes.COOP_REPORT}
          leftSection={<IconClipboard />}
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
