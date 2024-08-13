import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export function ColourModeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      aria-label="Theme toggle"
      onClick={() => {
        setColorScheme(colorScheme === "light" ? "dark" : "light");
      }}
      variant="subtle"
    >
      {colorScheme === "light" ? <IconMoonFilled /> : <IconSunFilled />}
    </ActionIcon>
  );
}

export default ColourModeToggle;
