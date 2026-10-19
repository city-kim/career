export type ProjectTone = 'violet' | 'blue' | 'mint'

export type Project = {
  no: string
  period: string
  company: string
  title: string
  summary: string
  coverage: { name: string; period: string }[]
  scope?: string[]
  metrics: string[]
  tags: string[]
  tone: ProjectTone
  image: string | null
  animation?: string
  blur?: boolean
  detail: {
    category: string
    role?: string
    caption?: string
    screenshots?: {
      image: string
      animation?: string
      blur?: boolean
      label: string
      caption?: string
    }[]
    background: string
    caseStudies?: {
      title: string
      area?: string
      problem: string
      decision: string
      result: string
    }[]
    work: { title: string; description: string; area?: string }[]
    architecture: string[]
    links?: { label: string; href: string }[]
  }
}
