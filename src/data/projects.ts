const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function assetPath(path: string) {
  return `${basePath}${path}`
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  id: string
  name: string
  appLabel: string
  iconText: string
  iconGradient: [string, string]
  iconImage?: string
  tagline: string
  description: string
  stack: string[]
  links: ProjectLink[]
  featured?: boolean
  kind?: 'hackathon' | 'project'
  previewUrl?: string
  previewImage?: string
  previewNote?: string
  award?: string
  advisor?: string
}

export type PhoneHomeItem =
  | {
      type: 'app'
      projectId: string
    }
  | {
      type: 'folder'
      id: string
      name: string
      items: Array<{ type: 'app'; projectId: string }>
    }

export const projects: Project[] = [
  {
    id: 'osulation',
    name: 'osulation!',
    appLabel: 'osulation',
    iconText: 'OS',
    iconGradient: ['#fb7185', '#a855f7'],
    tagline: 'Play osu! with hand signals (CV).',
    description:
      'A hackathon project that maps hand gestures to osu! inputs using computer vision. ',
    stack: ['MATLAB', 'Streamlit', 'Python', 'MediaPipe', 'Roboflow'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/osulation' },
      { label: 'GitHub', href: 'https://github.com/elise-yz/osulation' },
    ],
    kind: 'hackathon',
    featured: true,
    iconImage: '/projects/osulation.png',
    previewImage: '/project_displays/osulation.png',
    award: 'Best Use of Roboflow — MHacks 2024 (University of Michigan)',
  },
  {
    id: 'perfect-match',
    name: 'Perfect Match',
    appLabel: 'Perfect Match',
    iconText: 'PM',
    iconGradient: ['#f472b6', '#fb7185'],
    tagline: 'Matching 5k+ Cornell students yearly.',
    description:
      'A web app + matching algorithm that helps Cornell undergrads find their Perfect Match every Valentine’s Day, at scale.',
    stack: ['Tailwind CSS', 'Algorithms', 'TypeScript', 'MongoDB'],
    links: [{ label: 'Live site', href: 'https://perfectmatch.ai/' }],
    kind: 'project',
    featured: true,
    iconImage: '/projects/perfectmatch.png',
    previewUrl: 'https://perfectmatch.ai/',
  },
  {
    id: 'data-quality-framework',
    name: 'Data Quality Framework Analysis',
    appLabel: 'DQ Framework',
    iconText: 'DQ',
    iconGradient: ['#60a5fa', '#a78bfa'],
    tagline: 'Data quality research at Millennium Management.',
    description:
      'A data pipeline to collect, clean, and analyze large datasets to support signal research and robust portfolio construction. Conducted under Millennium Management.',
    stack: ['Python', 'Statistics', 'Jupyter Notebook'],
    links: [
      {
        label: 'Slides',
        href: 'https://docs.google.com/presentation/d/e/2PACX-1vSxVGlQyrbJDL9avGNhj6pERkPeYL5LhubW9qYet-2fjaTcNQ5q1knhQpK-EU4uvjpw5CJ13ffajiEs/view',
      },
    ],
    kind: 'project',
    iconImage: '/projects/Millennium_Management_logo_2024.png',
    previewUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSxVGlQyrbJDL9avGNhj6pERkPeYL5LhubW9qYet-2fjaTcNQ5q1knhQpK-EU4uvjpw5CJ13ffajiEs/embed?start=false&loop=false&delayms=3000',
    advisor: 'Advised under Millennium Management',
  },
  {
    id: 'waves',
    name: 'Waves',
    appLabel: 'Waves',
    iconText: '🌊',
    iconGradient: ['#22d3ee', '#3b82f6'],
    tagline: 'Multimodal dataset pipeline for music understanding.',
    description:
      'Large-scale multimodal dataset pipeline aligning audio, visual, and text features from YouTube videos, enabling cross-modal model training for music performance understanding.',
    stack: [],
    links: [],
    kind: 'project',
    advisor: 'Advised under John Thickstun',
    previewNote: 'WIP — submission for ISMIR \'26',
  },
  {
    id: 'pi-pal',
    name: 'Pi-Pal',
    appLabel: 'Pi-Pal',
    iconText: 'π',
    iconGradient: ['#34d399', '#10b981'],
    tagline: 'Raspberry Pi CV pipeline for on-device inference.',
    description:
      'A Raspberry Pi-based computer vision pipeline for on-device inference and object detection. ',
    stack: ['OpenCV', 'Databricks', 'Llama Index', 'MongoDB', 'Next.js', 'Python', 'Tailwind CSS'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/pi-pal' },
      { label: 'GitHub', href: 'https://github.com/cindyzli/pi-pal' },
    ],
    kind: 'hackathon',
    iconImage: '/projects/pipal.png',
    previewImage: '/project_displays/pi-pal.png',
    award: 'Won Grand Prize at Hoya Hacks 2025 (Georgetown hackathon)',
  },
  {
    id: 'wubwub',
    name: 'WubWub',
    appLabel: 'WubWub',
    iconText: 'WW',
    iconGradient: ['#c084fc', '#7c3aed'],
    tagline: 'Gesture-controlled DJ board in the browser.',
    description:
      'A web-based, gesture-controlled DJ mixing interface powered by computer vision. Control volume, bass, and effects with hand movements — no keyboard needed.',
    stack: ['YouTube DLP', 'Arduino', 'Flask', 'Vite', 'Figma', 'Python', 'MediaPipe', 'Web Audio API', 'Gemini', 'MongoDB', 'OpenCV'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/wubwub' },
      { label: 'GitHub', href: 'https://github.com/cindyzli/wubwub' },
    ],
    kind: 'hackathon',
    iconImage: '/projects/wubwub.png',
    previewImage: '/project_displays/wubwub.png',
    award: 'Grand Prize — Big Red Hacks 2025 (Cornell)',
  },
  {
    id: 'mayhem-monkey',
    name: 'Mayhem Monkey',
    appLabel: 'Mayhem',
    iconText: '🐒',
    iconGradient: ['#fbbf24', '#f59e0b'],
    tagline: 'AI-driven chaos engineering for the vibe-coding era.',
    description:
      'An AI-powered chaos engineer that automatically probes your web app for vulnerabilities — SQL injection, XSS, auth bypasses — using multi-agent Gemini reasoning and real browser automation via Playwright.',
    stack: ['Gemini', 'Python', 'Playwright', 'Vite', 'Figma', 'Tailwind CSS'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/mayhem-monkey' },
      { label: 'GitHub', href: 'https://github.com/cindyzli/mayhem-monkey' },
    ],
    kind: 'hackathon',
    iconImage: '/projects/mayhemmonkey.png',
    previewImage: '/project_displays/mayhemmonkey.png',
    award: 'Popular Vote — DevFest 2026 (Columbia)',
  },
  {
    id: 'jiggle-wiggle',
    name: 'Jiggle Wiggle',
    appLabel: 'Jiggle',
    iconText: 'JW',
    iconGradient: ['#fb923c', '#ef4444'],
    tagline: 'Real-time AI movement coach from any video.',
    description:
      'An AI coach that integrates with YouTube, Zoom, and AI-generated videos to give live feedback based on body geometry — scoring every move with per-limb breakdowns and spoken coaching.',
    stack: ['Next.js', 'Zoom SDK', 'YouTube DLP', 'MediaPipe', 'OpenAI', 'Bright Data', 'HeyGen', 'Render', 'Modal'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/jiggle-wiggle' },
      { label: 'GitHub', href: 'https://github.com/cindyzli/jigglewiggle' },
    ],
    kind: 'hackathon',
    iconImage: '/projects/jigglewiggle.png',
    previewImage: '/project_displays/jigglewiggle.png',
    award: 'Zoom Track + Inference Runner-up — TreeHacks 2026 (Stanford)',
  },
]

export const phoneHome: PhoneHomeItem[] = [
  { type: 'app', projectId: 'perfect-match' },
  {
    type: 'folder',
    id: 'research',
    name: 'Research',
    items: [
      { type: 'app', projectId: 'data-quality-framework' },
      { type: 'app', projectId: 'waves' },
    ],
  },
  {
    type: 'folder',
    id: 'hackathons',
    name: 'Hackathons',
    items: [
      { type: 'app', projectId: 'osulation' },
      { type: 'app', projectId: 'pi-pal' },
      { type: 'app', projectId: 'wubwub' },
      { type: 'app', projectId: 'mayhem-monkey' },
      { type: 'app', projectId: 'jiggle-wiggle' },
    ],
  },
]

export const projectsById: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.id, p]),
)

