import { BrainCircuit, Layers3, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { about } from '../../data/profile'
import type { Language } from '../../types'
import { SectionHeading } from '../layout/SectionHeading'
const cards = [{icon:BrainCircuit,en:'AI Engineering',vi:'Kỹ thuật AI'},{icon:Layers3,en:'Reliable Backend',vi:'Backend Tin cậy'},{icon:Sparkles,en:'Product & UX Thinking',vi:'Tư duy Sản phẩm & UX'}]
export function About({language}:{language:Language}) { return <section id="about" className="section"><div className="container"><SectionHeading eyebrow={language==='en'?'01 / About':'01 / Giới thiệu'} title={language==='en'?'Engineering meets product thinking.':'Kỹ thuật kết hợp tư duy sản phẩm.'}/><div className="about-grid"><div className="about-copy">{about[language].map(p=><p key={p}>{p}</p>)}</div><div className="value-cards">{cards.map(({icon:Icon,...card},i)=><motion.div key={card.en} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="value-card"><span>0{i+1}</span><Icon/><h3>{card[language]}</h3></motion.div>)}</div></div></div></section> }
