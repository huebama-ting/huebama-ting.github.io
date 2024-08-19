import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export function ColourModeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      aria-label={
        colorScheme === "light"
          ? "Switch to dark theme"
          : "Switch to light theme"
      }
      onClick={() => {
        setColorScheme(colorScheme === "light" ? "dark" : "light");
      }}
      variant="subtle"
      size="lg"
    >
      {colorScheme === "light" ? <IconMoonFilled /> : <IconSunFilled />}
    </ActionIcon>
  );
}

export default ColourModeToggle;
