import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { Moon, Sun } from "react-feather";

const ThemeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <button
      className="ml-6"
      onClick={() => setTheme(type === "light" ? "dark" : "light")}
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSwitch;
