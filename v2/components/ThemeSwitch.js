import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { Moon, Sun } from "react-feather";

const ThemeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const nextTheme = type === "light" ? "dark" : "light";

  return (
    <button
      className="ml-6"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSwitch;
