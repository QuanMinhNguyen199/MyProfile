import { ArrowUpRight, Code2, Mail, MapPin, Network } from 'lucide-react'
import { profile } from '../../data/profile'
import type { Language } from '../../types'

export function Contact({language}:{language:Language}) {
 const links=[{icon:Mail,label:profile.email,href:`mailto:${profile.email}`},{icon:Code2,label:'GitHub',href:profile.github},{icon:Network,label:'LinkedIn',href:profile.linkedin}]
 return <section id="contact" className="section contact"><div className="container contact-grid"><div><span className="contact-eyebrow">06 / {language==='en'?'Contact':'Liên hệ'}</span><h2>{language==='en'?<>Let’s build something <em>intelligent.</em></>:<>Cùng xây dựng điều gì đó <em>thông minh.</em></>}</h2><p>{language==='en'?'I am open to AI Engineer, Generative AI, AI Agent, backend, and AI evaluation opportunities.':'Tôi sẵn sàng cho các cơ hội về AI Engineer, Generative AI, AI Agent, backend và đánh giá AI.'}</p></div><div className="contact-links">{links.map(({icon:Icon,...link})=><a key={link.label} href={link.href} target={link.href.startsWith('http')?'_blank':undefined} rel={link.href.startsWith('http')?'noreferrer':undefined}><Icon/><span>{link.label}</span><ArrowUpRight/></a>)}<div><MapPin/><span>{profile.location[language]}</span></div></div></div></section>
}
