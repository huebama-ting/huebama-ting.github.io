import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";
import { Suspense, lazy } from "react";
import { IoClipboard, IoHome, IoPerson } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";

import { Routes } from "src/app/shared/constants";

const ColourModeToggle = lazy(() => import("src/app/common/ColourModeToggle"));
const Loading = lazy(() => import("src/app/shared/components/Loading"));

export function NavigationBar() {
  const accessCode = sessionStorage.getItem("COOP_ROUTE_ACCESS_CODE");
  const isAuthorised =
    accessCode === import.meta.env.VITE_COOP_ROUTE_ACCESS_CODE;

  return (
    <Box
      minHeight="5rem"
      maxHeight="5rem"
      display="flex"
      flexGrow={1}
      justifyContent="space-between"
      margin="0 1rem"
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Link
          startDecorator={<IoHome className="react-icon" />}
          component={RouterLink}
          to={Routes.ROOT}
        >
          Home
        </Link>
        <Link
          startDecorator={<IoPerson className="react-icon" />}
          component={RouterLink}
          to={Routes.DOLL_DIRECTORY}
        >
          Doll Directory
        </Link>
        {isAuthorised && (
          <Link
            startDecorator={<IoClipboard />}
            component={RouterLink}
            to={Routes.COOP_REPORT}
          >
            Co-op Reports
          </Link>
        )}
      </Stack>
      <Suspense fallback={<Loading />}>
        <ColourModeToggle />
      </Suspense>
    </Box>
  );
}

export default NavigationBar;
