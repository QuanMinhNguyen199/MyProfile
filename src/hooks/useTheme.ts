import { useEffect, useState } from 'react'
export type Theme = 'dark' | 'light'
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark')
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme) }, [theme])
  return { theme, toggleTheme: () => setTheme((value) => value === 'dark' ? 'light' : 'dark') }
}
