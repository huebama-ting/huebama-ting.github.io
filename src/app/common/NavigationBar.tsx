import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";
import { IoClipboard, IoHome, IoPerson } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";

import { ColourModeToggle } from "src/app/common/ColourModeToggle";
import { Routes } from "src/app/shared/constants";

export function NavigationBar() {
  const accessCode = sessionStorage.getItem("COOP_ROUTE_ACCESS_CODE");
  const isAuthorised =
    accessCode === import.meta.env.VITE_COOP_ROUTE_ACCESS_CODE;

  return (
    <Box
      sx={{
        height: "10%",
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        margin: "0 1rem",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ display: "flex" }}
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
      <ColourModeToggle />
    </Box>
  );
}

export default NavigationBar;
