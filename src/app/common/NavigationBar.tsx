import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";
import { Link as RouterLink } from "react-router-dom";

import { ColourModeToggle } from "src/app/common/ColourModeToggle";
import { Routes } from "src/app/shared/constants";

export function NavigationBar() {
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
        spacing={1}
        sx={{ display: "flex" }}
      >
        <Link component={RouterLink} to={Routes.ROOT}>
          Home
        </Link>
        <Link component={RouterLink} to={Routes.COOP_REPORT}>
          Co-op Reports
        </Link>
      </Stack>
      <ColourModeToggle />
    </Box>
  );
}

export default NavigationBar;
