import { useEffect, useState } from 'react'
import type { Language } from '../types'
export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('language') as Language) || 'en')
  useEffect(() => { document.documentElement.lang = language; localStorage.setItem('language', language) }, [language])
  return { language, toggleLanguage: () => setLanguage((value) => value === 'en' ? 'vi' : 'en') }
}
