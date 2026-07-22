export type Language = 'en' | 'vi'
export type Localized = { en: string; vi: string }

export interface Profile { name: string; title: Localized; headline: Localized; intro: Localized; email: string; github: string; linkedin: string; location: Localized }
export interface SkillCategory { title: Localized; skills: string[] }
export interface Project { name: string; role: Localized; description: Localized; contributions: Localized[]; technologies: string[]; link?: string; visual: 'security' | 'agent' | 'rpg' | 'design' }
export interface Experience { role: Localized; organization: string; period: string; description: Localized[] }
export interface Education { degree: Localized; specialization: Localized; university: string; period: string; gpa: string }
export interface Certification { name: Localized; institution: string; year: string; description: Localized }
