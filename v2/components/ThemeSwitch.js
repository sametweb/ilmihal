import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";

const ThemeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const nextTheme = type === "light" ? "dark" : "light";
  const iconName = isDark ? "ri-sun-fill" : "ri-moon-clear-fill";

  return (
    <button
      className="ml-6 text-xl"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
    >
      <i className={`${iconName}`} />
    </button>
  );
};

export default ThemeSwitch;
