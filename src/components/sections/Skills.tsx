import { skillCategories } from '../../data/skills'
import type { Language } from '../../types'
import { SectionHeading } from '../layout/SectionHeading'
import { Badge } from '../ui/Badge'
export function Skills({language}:{language:Language}) { return <section id="skills" className="section section-tint"><div className="container"><SectionHeading eyebrow={language==='en'?'02 / Skills':'02 / Kỹ năng'} title={language==='en'?'A multidisciplinary toolkit.':'Bộ công cụ đa lĩnh vực.'} text={language==='en'?'Technologies and methods I use to move from idea to dependable product.':'Công nghệ và phương pháp tôi dùng để biến ý tưởng thành sản phẩm đáng tin cậy.'}/><div className="skills-grid">{skillCategories.map((category,i)=><article className="skill-card" key={category.title.en}><div className="card-number">0{i+1}</div><h3>{category.title[language]}</h3><div className="badges">{category.skills.map(s=><Badge key={s}>{s}</Badge>)}</div></article>)}</div></div></section> }
