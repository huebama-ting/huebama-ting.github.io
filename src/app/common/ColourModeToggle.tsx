import IconButton from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy/styles";
import { IoMoon, IoSunny } from "react-icons/io5";

export function ColourModeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      aria-label="Theme toggle"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
      variant="plain"
    >
      {mode === "light" ? (
        <IoMoon className="react-icon" />
      ) : (
        <IoSunny className="react-icon" />
      )}
    </IconButton>
  );
}

export default ColourModeToggle;
