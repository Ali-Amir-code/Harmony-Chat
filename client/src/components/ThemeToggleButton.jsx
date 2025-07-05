import { useThemeMode } from '../theme/ThemeContext';

export default function ThemeToggleButton() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <button onClick={toggleTheme}>
      Switch to {mode === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
