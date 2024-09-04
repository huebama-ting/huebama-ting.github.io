import { Burger, Button, Drawer, Group, Stack, em } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconClipboard,
  IconHomeFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { JSX, Suspense, lazy } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Routes } from "src/app/shared/constants";

import styles from "./styles/navigation-bar.module.css";

const ColourModeToggle = lazy(() => import("src/app/common/ColourModeToggle"));
const Loading = lazy(() => import("src/app/shared/components/Loading"));

export function NavigationBar() {
  const [opened, { open, close }] = useDisclosure();
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  const accessCode = sessionStorage.getItem("COOP_ROUTE_ACCESS_CODE");
  const isAuthorised =
    accessCode === import.meta.env.VITE_COOP_ROUTE_ACCESS_CODE;
  const navButtonClass = "nav-button";
  const buttons = [
    <Button
      component={RouterLink}
      to={Routes.ROOT}
      leftSection={<IconHomeFilled />}
      variant="subtle"
      className={styles[navButtonClass]}
      key="home"
      onClick={close}
    >
      Home
    </Button>,
    <Button
      component={RouterLink}
      to={Routes.DOLL_DIRECTORY}
      leftSection={<IconUserFilled />}
      variant="subtle"
      className={styles[navButtonClass]}
      key="doll-directory"
      onClick={close}
    >
      Doll Directory
    </Button>,
    <Button
      component={RouterLink}
      to={Routes.COOP_REPORT}
      leftSection={<IconClipboard />}
      variant="subtle"
      className={styles[navButtonClass]}
      display={isAuthorised ? "" : "none"}
      key="coop-report"
      onClick={close}
    >
      Co-op Reports
    </Button>,
  ];
  const themeToggle = (
    <Suspense fallback={<Loading />}>
      <ColourModeToggle />
    </Suspense>
  );
  let navBar: JSX.Element;

  if (isMobile) {
    navBar = (
      <Group className={styles["nav"]}>
        <Drawer
          opened={opened}
          onClose={close}
          size="xs"
          closeButtonProps={{ "aria-label": "Close navigation drawer" }}
        >
          <Stack>{buttons.map((button) => button)}</Stack>
        </Drawer>

        <Burger
          opened={opened}
          onClick={open}
          aria-label="Toggle navigation drawer"
        />

        {themeToggle}
      </Group>
    );
  } else {
    navBar = (
      <Group className={styles["nav"]}>
        <Group>{buttons.map((button) => button)}</Group>

        {themeToggle}
      </Group>
    );
  }

  return navBar;
}

export default NavigationBar;
