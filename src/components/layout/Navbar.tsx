import { useState } from 'react'
import { Download, Languages, Menu, Moon, Sun, X } from 'lucide-react'
import type { Language } from '../../types'
import type { Theme } from '../../hooks/useTheme'

const labels = { en:['About','Skills','Projects','Experience','Education','Contact'], vi:['Giới thiệu','Kỹ năng','Dự án','Kinh nghiệm','Học vấn','Liên hệ'] }
const ids = ['about','skills','projects','experience','education','contact']
export function Navbar({ language, theme, toggleLanguage, toggleTheme, hasCv }: { language: Language; theme: Theme; toggleLanguage:()=>void; toggleTheme:()=>void; hasCv:boolean }) {
 const [open,setOpen]=useState(false)
 const cvPath = `${import.meta.env.BASE_URL}QUAN-MINH-NGUYEN-CV-EN.pdf`
 return <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation">
  <a href="#top" className="logo" aria-label="Quan Minh Nguyen home"><span>Q</span>N</a>
  <button className="menu-button" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
  <div className={`nav-panel ${open?'open':''}`}>
   <div className="nav-links">{ids.map((id,i)=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{labels[language][i]}</a>)}</div>
   <div className="nav-actions">
    <button onClick={toggleLanguage} aria-label={language==='en'?'Switch to Vietnamese':'Chuyển sang tiếng Anh'}><Languages/><span>{language==='en'?'VI':'EN'}</span></button>
    <button onClick={toggleTheme} aria-label={theme==='dark'?'Switch to light mode':'Switch to dark mode'}>{theme==='dark'?<Sun/>:<Moon/>}</button>
    {hasCv?<a className="nav-cv" href={cvPath} download><Download/>{language==='en'?'CV':'Tải CV'}</a>:<span className="nav-cv disabled" title="Add the CV PDF to public/"><Download/>{language==='en'?'CV unavailable':'Chưa có CV'}</span>}
   </div>
  </div>
 </nav></header>
}
