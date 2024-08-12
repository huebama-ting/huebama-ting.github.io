import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IoMoon, IoSunny } from "react-icons/io5";

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
      {colorScheme === "light" ? <IoMoon /> : <IoSunny />}
    </ActionIcon>
  );
}

export default ColourModeToggle;
