import { AppState } from './types';

export const INITIAL_STATE: AppState = {
  config: {
    heroHeadline: "Coaching, community & curriculum to help everyone thrive in our AI-powered future.",
    heroSubheadline: "We bridge the gap between human potential and artificial intelligence with world-class training and strategic consulting.",
    heroImage: "https://picsum.photos/800/600?grayscale",
    contactEmail: "hello@innovateai.com"
  },
  courses: [
    {
      id: '1',
      title: "AI Fundamentals for Leaders",
      description: "Understand the strategic implications of AI without getting lost in the code.",
      duration: "4 Weeks",
      level: "Beginner",
      price: "$499"
    },
    {
      id: '2',
      title: "Generative Design Mastery",
      description: "Learn to use Midjourney, DALL-E, and Stable Diffusion for professional creative work.",
      duration: "6 Weeks",
      level: "Intermediate",
      price: "$799"
    },
    {
      id: '3',
      title: "Large Language Model Engineering",
      description: "Deep dive into prompting, fine-tuning, and integrating LLMs into enterprise workflows.",
      duration: "8 Weeks",
      level: "Advanced",
      price: "$1,299"
    },
    {
      id: '4',
      title: "AI Foundations for Young Adults & Teens",
      description: "Empower the next generation with essential AI literacy, creative tools, and ethical frameworks for the future.",
      duration: "4 Weeks",
      level: "Beginner",
      price: "$399"
    }
  ],
  services: [
    {
      id: 's1',
      title: "AI Strategy Consulting",
      description: "We help organizations identify high-impact AI use cases and build a roadmap for implementation.",
      features: ["Audit of current tech stack", "Opportunity mapping", "Risk assessment"]
    },
    {
      id: 's2',
      title: "Corporate Training Workshops",
      description: "On-site or virtual training sessions tailored to upskill your workforce specifically.",
      features: ["Custom curriculum", "Hands-on labs", "Certification"]
    },
    {
      id: 's3',
      title: "Digital Transformation",
      description: "End-to-end support for modernizing legacy systems using AI-driven automation.",
      features: ["Workflow automation", "Data migration", "Change management"]
    }
  ],
  posts: [
    {
      id: 'b1',
      title: "The Future of Work is Augmented",
      excerpt: "Why AI won't replace you, but a person using AI might. Explore the shifting landscape of employment.",
      content: "Full article content placeholder...",
      tags: ["Future of Work", "Opinion"],
      date: "Oct 12, 2023",
      imageUrl: "https://picsum.photos/600/400?random=1"
    },
    {
      id: 'b2',
      title: "Prompt Engineering 101",
      excerpt: "The subtle art of talking to machines. How to get the best results from ChatGPT and Claude.",
      content: "Full article content placeholder...",
      tags: ["Tutorial", "Technical"],
      date: "Nov 05, 2023",
      imageUrl: "https://picsum.photos/600/400?random=2"
    },
    {
      id: 'b3',
      title: "Ethics in Artificial Intelligence",
      excerpt: "Navigating the gray areas of copyright, bias, and truth in the age of generative models.",
      content: "Full article content placeholder...",
      tags: ["Ethics", "Policy"],
      date: "Nov 20, 2023",
      imageUrl: "https://picsum.photos/600/400?random=3"
    }
  ],
  testimonials: [
    {
      id: 't1',
      name: "Sarah Jenkins",
      role: "CTO",
      company: "TechFlow Inc.",
      content: "The consulting team completely transformed how we approach product development. The AI integration roadmap they built was flawless.",
      avatarUrl: "https://picsum.photos/100/100?random=10"
    },
    {
      id: 't2',
      name: "Marcus Chen",
      role: "Founder",
      company: "StartUp Lab",
      content: "The 'AI Fundamentals' course gave me the confidence to pitch AI-driven features to my investors. Highly recommended.",
      avatarUrl: "https://picsum.photos/100/100?random=11"
    },
    {
      id: 't3',
      name: "Elena Rodriguez",
      role: "Marketing Director",
      company: "Global Corp",
      content: "We automated 40% of our content pipeline thanks to the workshops provided by Innovate AI.",
      avatarUrl: "https://picsum.photos/100/100?random=12"
    }
  ]
};