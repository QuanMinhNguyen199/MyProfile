import { ArrowDown, Code2, Download, Mail, MapPin, Network } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { profile } from '../../data/profile'
import type { Language } from '../../types'

export function Hero({ language, hasCv }: { language: Language; hasCv: boolean }) {
 const [imageFailed,setImageFailed]=useState(false)
 const profileImage = `${import.meta.env.BASE_URL}profile.jpg`
 const cvFilename = language === 'en' ? 'QUAN-MINH-NGUYEN-CV-EN.pdf' : 'QUAN-MINH-NGUYEN-CV.pdf'
 const cvPath = `${import.meta.env.BASE_URL}${cvFilename}`
 return <section id="top" className="hero"><div className="container hero-grid">
  <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55}} className="hero-copy">
   <div className="status"><i/>{language==='en'?'Open to AI engineering opportunities':'Sẵn sàng cho cơ hội kỹ thuật AI'}</div>
   <p className="kicker">{profile.title[language]} · {profile.location[language]}</p>
   <h1>{language==='en'?'Building reliable AI agents and ': 'Xây dựng AI Agent đáng tin cậy và '}<em>{language==='en'?'intelligent digital products.':'sản phẩm số thông minh.'}</em></h1>
   <p className="hero-intro">{profile.intro[language]}</p>
   <div className="hero-buttons"><Button href="#projects">{language==='en'?'View My Projects':'Xem Dự án'}<ArrowDown/></Button><Button variant="secondary" href={hasCv?cvPath:undefined} download={hasCv||undefined} disabled={!hasCv}><Download/>{language==='en'?'Download CV':'Tải CV'}</Button></div>
   <div className="socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Network/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a><span><MapPin/> {profile.location[language]}</span></div>
  </motion.div>
  <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.6,delay:.1}} className="portrait-shell"><div className="portrait-grid"/>{!imageFailed?<img src={profileImage} alt="Quan Minh Nguyen" onError={()=>setImageFailed(true)}/>:<div className="portrait-fallback" aria-label="Quan Minh Nguyen initials">QN</div>}<div className="portrait-label"><span>Quan Minh Nguyen</span><small>{profile.title[language]}</small></div></motion.div>
 </div></section>
}
