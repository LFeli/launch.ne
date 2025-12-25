interface Site {
  name: string
  url: string
  description: string
  keywords: string[]
  author: {
    name: string
    github: string
  }
}

export type { Site }
