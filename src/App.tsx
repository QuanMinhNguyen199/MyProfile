import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'
import { useLanguage } from './hooks/useLanguage'
import { useTheme } from './hooks/useTheme'

// Change to true after placing QUAN-MINH-NGUYEN-CV-EN.pdf in /public.
const HAS_CV = false
export default function App() { const {language,toggleLanguage}=useLanguage(); const {theme,toggleTheme}=useTheme(); return <><Navbar language={language} theme={theme} toggleLanguage={toggleLanguage} toggleTheme={toggleTheme} hasCv={HAS_CV}/><main><Hero language={language} hasCv={HAS_CV}/><About language={language}/><Skills language={language}/><Projects language={language}/><Experience language={language}/><Education language={language}/><Contact language={language}/></main><Footer language={language}/></> }
