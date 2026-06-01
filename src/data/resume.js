import { poeticExperience, CAREER_START } from '../utils/dates';

export const personal = {
  name: 'Vipin Kumar',
  title: 'Principal Platform Engineer',
  subtitle: 'Multi-Cloud Platform Specialist',
  roles: ['Principal Platform Engineer', 'Cloud Architect', 'SRE', 'Engineering Leader'],
  get summary() {
    const exp = poeticExperience(CAREER_START);
    return `Platform engineering professional with ${exp} of experience across AWS, Azure and Kubernetes ecosystem. Consistent focus on platform-as-a-product thinking, developer experience and operational excellence. Advocate for modern engineering practices and a collaborative approach to platform enablement.`;
  },
  email: 'k.vipz88@gmail.com',
  phone: '+91-9891302743',
  linkedin: 'https://linkedin.com/in/linked-vip-in',
  github: 'https://github.com/kvipz',
  location: 'Gurugram, India',
};

export const highlights = [
  {
    icon: '⚡',
    title: 'Operational Excellence',
    metric: '8x faster',
    description: 'Enabled proxy whitelisting 8x faster — directly improving developer velocity. Implemented governance monitoring framework for 1000+ AWS instances.',
  },
  {
    icon: '🤖',
    title: 'Automation at Scale',
    metric: '5x provisioning',
    description: 'Designed a scalable Python-based CLI IPAM solution eliminating manual workflows and delivering 5x faster provisioning cycles.',
  },
  {
    icon: '🎓',
    title: 'Enterprise Training',
    metric: '200+ engineers',
    description: 'Designed and delivered a 3-day Terraform deep-dive training programme enabling 200+ engineers on IaC best practices.',
  },
  {
    icon: '🧠',
    title: 'Enterprise AI Initiative',
    metric: 'Incident Copilot',
    description: 'Leading Incident Copilot Programme covering Intelligent Routing, Incident Analysis, Case Memory, Assisted Automation and Shift Left approaches.',
  },
];

export const experience = [
  {
    role: 'Principal Engineer – AzureOps',
    company: 'Fidelity International',
    location: 'Gurugram',
    period: 'Aug 2024 – Present',
    current: true,
    highlights: [
      'Automated IP Allocation: Python-based CLI IPAM delivering 5x faster provisioning',
      'Workload Monitoring: Real-time health alerting via Azure Functions & Azure Monitor',
      'Built AI Assistants (WoWDesk, PairWise, JiraBot) using ChatGPT for engineering enablement',
      'Led Team Transformation: Storming → Norming via 6-dimension Ways of Working framework',
      'Embedded Cloud Governance through Azure Policy for compliant-by-default environments',
    ],
  },
  {
    role: 'Principal Engineer – AWSOps',
    company: 'Fidelity International',
    location: 'Gurugram',
    period: 'Dec 2022 – Aug 2024',
    current: false,
    highlights: [
      'Co-Led Proxy Whitelist Pipeline enabling 8x faster proxy whitelisting',
      'Built Cloud Instance Governance Monitoring across 1000+ AWS instances with ServiceNow integration',
      'Delivered enterprise-wide Terraform training enabling 200+ engineers on IaC best practices',
      'Architected complex AWS networking solutions (VPCs, Transit Gateway, Direct Connect)',
      'Enforced Cloud Security Posture via SCPs and Security Responder Frameworks',
    ],
  },
  {
    role: 'Distinguished Engineer – Platform Squad (Product Owner)',
    company: 'Fidelity International',
    location: 'Gurugram',
    period: 'Aug 2021 – Dec 2022',
    current: false,
    highlights: [
      'Platform Product Owner for a 4-person squad with bottom-up product roadmap across 4 dimensions',
      'Led CI/CD modernisation: Jenkins → AWS CodePipeline',
      'Built Inner Source Terraform modules for enterprise-wide IaC acceleration',
      'Embedded pair programming, TDD and continuous delivery as daily team practices',
    ],
  },
  {
    role: 'Associate Technical Specialist',
    company: 'Barco Electronics Ltd',
    location: 'Noida',
    period: 'Jan 2021 – Aug 2021',
    current: false,
    highlights: [
      'Multi-cloud platform operations across Kubernetes, AWS and Azure',
      'EKS migration from self-managed Kubernetes',
      'Azure IoT Hub Auto-scaling via event-driven architecture (Azure Functions)',
      'Terragrunt implementation for IaC modularity',
    ],
  },
  {
    role: 'Tech Lead – Cloud Solution Architect',
    company: 'Tech Mahindra Ltd',
    location: 'Noida',
    period: 'Dec 2019 – Jan 2021',
    current: false,
    highlights: [
      'Engineering Manager + Cloud Architect: hiring, goal-setting, architecture, client SLAs',
      'Architected on-premises to Azure migration for AT&T BSS applications',
      'Achieved 99.9% availability for mission-critical workloads through fault-tolerant design',
      'Led enterprise Azure training and AZ-103 certification programme',
    ],
  },
  {
    role: 'Design Architect',
    company: 'HCL Technologies',
    location: 'Noida',
    period: '2019',
    current: false,
    highlights: [
      'Designed fault-tolerant cloud architectures for public-facing applications across AWS and Azure',
      'Built CI/CD pipelines using Jenkins and CloudFormation enabling continuous deployments',
    ],
  },
  {
    role: 'Senior Engineer',
    company: 'Ericsson Global India',
    location: 'Noida',
    period: '2014 – 2019',
    current: false,
    highlights: [
      'Automated network KPI monitoring — 20% efficiency increase, 30% manual effort reduction',
      'Designed and maintained large-scale telecom network infrastructure and monitoring systems',
    ],
  },
  {
    role: 'Assistant Manager – Network Operations',
    company: 'Tata Teleservices Ltd',
    location: 'Delhi',
    period: 'Oct 2010 – Dec 2014',
    current: false,
    highlights: [
      'Enhanced network infrastructure monitoring through automation',
      'Delivered critical upgrades with zero service disruption',
    ],
  },
];

export const skills = [
  {
    category: 'Cloud Platforms',
    icon: '☁️',
    items: ['AWS', 'Azure', 'Kubernetes'],
  },
  {
    category: 'Kubernetes Ecosystem',
    icon: '⚙️',
    items: ['EKS', 'kubeadm', 'Helm', 'Kustomize', 'Flannel', 'Calico', 'Nginx Ingress', 'Istio'],
  },
  {
    category: 'CI/CD & IaC',
    icon: '🔄',
    items: ['Terraform', 'Terragrunt', 'GitHub Actions', 'Azure DevOps', 'AWS CodePipeline', 'Jenkins'],
  },
  {
    category: 'Programming',
    icon: '💻',
    items: ['Python', 'Shell Scripting', 'PowerShell', 'Golang (Basic)', 'JavaScript (Basic)'],
  },
  {
    category: 'Networking',
    icon: '🌐',
    items: ['VPC', 'Transit Gateway', 'Direct Connect', 'VWAN', 'ExpressRoute', 'Private Endpoint', 'Azure Firewall', 'Azure DNS', 'NSG'],
  },
  {
    category: 'Monitoring & Observability',
    icon: '📊',
    items: ['CloudWatch', 'Azure Monitor', 'Log Analytics', 'Grafana', 'Prometheus', 'ELK', 'Application Insights'],
  },
  {
    category: 'Security',
    icon: '🔐',
    items: ['IAM', 'SCPs', 'Azure Policy', 'Azure Entra ID', 'Key Vault', 'RBAC', 'Security Groups', 'HashiCorp Vault'],
  },
  {
    category: 'Platform Engineering',
    icon: '🏗️',
    items: ['Platform-as-a-Product', 'DORA Metrics', 'Developer Experience', 'Inner Source', 'Agile / Kanban', 'Team Transformation'],
  },
];

export const certifications = [
  {
    name: 'Certified Kubernetes Administrator',
    abbr: 'CKA',
    issuer: 'CNCF / Linux Foundation',
    year: '2026',
    logo: '/badges/cka.png',
    color: 'sky',
    credly: 'https://www.credly.com/badges/40ef033b-5986-4bc4-b918-6f31a5714bb2',
  },
  {
    name: 'Certified Kubernetes Application Developer',
    abbr: 'CKAD',
    issuer: 'CNCF / Linux Foundation',
    year: '2020',
    logo: '/badges/ckad.png',
    color: 'sky',
    credly: 'https://www.credly.com/badges/d373898e-541f-4a7a-bc06-89dddf29e060',
  },
  {
    name: 'Microsoft Azure AI Fundamentals',
    abbr: 'AI-900',
    issuer: 'Microsoft',
    year: '2025',
    logo: '/badges/azure-ai.png',
    color: 'blue',
    credly: 'https://learn.microsoft.com/api/credentials/share/en-us/VipinKumar-7205/DDFAD3C1146C74F4?sharingId=A0A9F0E1F495A220',
  },
  {
    name: 'AWS Advanced Networking Specialty',
    abbr: 'ANS-C01',
    issuer: 'Amazon Web Services',
    year: '2023',
    logo: '/badges/aws-networking.png',
    color: 'orange',
    credly: 'https://www.credly.com/badges/223abb67-b9d9-4721-9cbd-aa1f930af2c6',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    abbr: 'TF-002',
    issuer: 'HashiCorp',
    year: '2021',
    logo: '/badges/terraform.png',
    color: 'purple',
    credly: 'https://www.credly.com/badges/7f042b02-f213-470d-a90a-a73c3332b602',
  },
  {
    name: 'Azure Solutions Architect Expert',
    abbr: 'AZ-303/304',
    issuer: 'Microsoft',
    year: '2020',
    logo: '/badges/azure-architect.svg',
    color: 'blue',
    credly: 'https://www.credly.com/badges/46f764b1-68b1-4357-885a-f27d81608df4',
  },
  {
    name: 'AWS Certified Solutions Architect Associate',
    abbr: 'SAA-C01',
    issuer: 'Amazon Web Services',
    year: '2017',
    logo: '/badges/aws-sa.png',
    color: 'orange',
    credly: 'https://www.credly.com/badges/0331b211-aec9-45df-a734-2289a862921b',
  },
];

export const books = {
  reading: [
    {
      title: "The Culture Map",
      author: "Erin Meyer",
      cover: "https://covers.openlibrary.org/b/id/10854287-L.jpg",
      note: "Decoding how people think, lead, and get things done across cultures.",
    },
    {
      title: "The 48 Laws of Power",
      author: "Robert Greene",
      cover: "https://covers.openlibrary.org/b/id/6424160-L.jpg",
      note: "Timeless lessons on power, strategy, and human nature.",
    },
    {
      title: "The Manager's Path",
      author: "Camille Fournier",
      cover: "https://covers.openlibrary.org/b/id/8667291-L.jpg",
      note: "A guide for tech leaders navigating growth from engineer to executive.",
    },
    {
      title: "The Staff Engineer's Path",
      author: "Tanya Reilly",
      cover: "/badges/staff-eng-path.webp",
      note: "What it means to be a senior technical contributor without management.",
    },
    {
      title: "An Elegant Puzzle",
      author: "Will Larson",
      cover: "/badges/elegant-puzzle.jpg",
      note: "Systems of engineering management — how to build and scale engineering organisations.",
    },
  ],
  completed: [
    {
      title: "Platform Engineering",
      author: "Camille Fournier & Ian Nowland",
      cover: "/badges/platform-engineering.webp",
      note: "The what, why, and how of building Internal Developer Platforms.",
    },
    {
      title: "The First 90 Days",
      author: "Michael D. Watkins",
      cover: "/badges/first-90-days.png",
      note: "Strategies for getting up to speed faster in any new leadership role.",
    },
    {
      title: "Accelerate",
      author: "Nicole Forsgren, Jez Humble & Gene Kim",
      cover: "https://covers.openlibrary.org/b/id/8509069-L.jpg",
      note: "The science of lean software and DevOps — backed by four years of research.",
    },
    {
      title: "Modern Software Engineering",
      author: "David Farley",
      cover: "https://covers.openlibrary.org/b/id/13627918-L.jpg",
      note: "Engineering discipline applied to software — how to build better systems.",
    },
    {
      title: "Production Kubernetes",
      author: "Josh Rosso et al.",
      cover: "https://covers.openlibrary.org/b/id/13504439-L.jpg",
      note: "Running Kubernetes at scale in real-world production environments.",
    },
    {
      title: "Team Topologies",
      author: "Matthew Skelton & Manuel Pais",
      cover: "https://covers.openlibrary.org/b/id/10354937-L.jpg",
      note: "Organising teams for fast flow and effective platform delivery.",
    },
  ],
};

export const interests = [
  {
    icon: '🎤',
    title: 'Toastmasters – VP Education',
    description:
      'Serving as Vice President Education at Fidelity International Toastmasters, driving member development through structured Pathways learning programs, speech coaching, and club excellence initiatives.',
    link: 'https://toastthemost.github.io',
    linkText: 'Club App →',
  },
  {
    icon: '🏔️',
    title: 'Trekking & Adventure',
    description: 'Love exploring the Himalayas and going on treks — a great way to disconnect, reset, and find clarity.',
  },
  {
    icon: '📚',
    title: 'Reading & Learning',
    description: 'Passionate about books on technology leadership, systems thinking, and personal growth.',
  },
  {
    icon: '🤖',
    title: 'AI & Emerging Tech',
    description: 'Actively exploring AI-powered tools and their real-world applications in platform engineering and operations.',
  },
];
