export const personal = {
  name: 'Vipin Kumar',
  title: 'AWS Platform Owner & Engineering Manager',
  subtitle: 'Platform Engineering Leader',
  roles: ['AWS Platform Lead', 'Product Owner', 'Engineering Manager', 'Multi-Cloud Architect'],
  traits: ['Leader Who Codes', 'Strategic Leader', 'Systems Thinker'],
  previousRole: 'Principal Engineer',
  summary: 'I own an enterprise AWS platform end to end — roadmap, delivery and operations — and lead a distributed team building a secure-by-default, self-service landing zone. Grounded in platform-as-a-product thinking, developer experience and operational excellence.',
  email: 'k.vipz88@gmail.com',
  phone: '+91-9891302743',
  linkedin: 'https://linkedin.com/in/linked-vip-in',
  github: 'https://github.com/kvipz',
  cv: '/Vipin_Kumar_Resume.pdf',
  location: 'Gurugram, India',
};

export const highlights = [
  {
    icon: '☁️',
    title: 'Platform Ownership',
    metric: 'Enterprise scale',
    description: 'Own the enterprise AWS platform end to end — roadmap, delivery and operations for a secure-by-default, self-service landing zone spanning hundreds of accounts.',
  },
  {
    icon: '📈',
    title: 'Delivery Throughput',
    metric: '+50%',
    description: 'Introduced delivery measurement where none existed and removed bottlenecks — lifting throughput from ~40 to ~60 story points per 4 weeks.',
  },
  {
    icon: '👥',
    title: 'Distributed Leadership',
    metric: 'Global team',
    description: 'Lead a distributed engineering team across India, China and the UK — hiring, coaching and growing careers across time zones.',
  },
  {
    icon: '🎓',
    title: 'Enterprise Training',
    metric: '200+ engineers',
    description: 'Designed and delivered a 3-day Terraform deep-dive training programme enabling 200+ engineers on IaC best practices.',
  },
];

export const education = {
  degree: 'B.E. Electronics & Communication Engineering',
  school: 'Delhi College of Engineering, Delhi',
  year: '2010',
};

export const eras = [
  {
    title: 'Platform Engineering & Leadership',
    period: '2021 – Present',
    blurb: 'Building and owning internal cloud platforms, then leading the team that runs them.',
    companies: ['Fidelity International'],
  },
  {
    title: 'Cloud Architecture',
    period: '2019 – 2021',
    blurb: 'Designing and migrating workloads across AWS, Azure and Kubernetes.',
    companies: ['Barco Electronics Ltd', 'Tech Mahindra Ltd', 'HCL Technologies'],
  },
  {
    title: 'Telecom Networks',
    period: '2010 – 2019',
    blurb: 'Running large-scale network infrastructure and automating its monitoring.',
    companies: ['Ericsson Global India', 'Tata Teleservices Ltd'],
  },
];

export const experience = [
  {
    role: 'AWS Platform Owner & Engineering Manager – AWSOps',
    company: 'Fidelity International',
    location: 'Gurugram',
    period: 'Jul 2026 – Present',
    current: true,
    highlights: [
      'Own the AWS platform end to end — roadmap, delivery and operations across an enterprise estate of hundreds of accounts',
      'Lead a distributed engineering team across India, China and the UK — hiring, coaching and career development across time zones',
      'Raised delivery throughput ~50% (~40 → ~60 story points per 4 weeks) by introducing flow measurement, tightening reviews, cutting ad-hoc changes and moving pipeline runs to engineering pairs',
      'Conceived and secured approval for a multi-region EU resilience initiative — cyber-recovery continuity, reduced regional concentration risk and secure GenAI (Bedrock) access',
      'Own the Terraform landing-zone codebase — reusable account modules, a YAML configuration layer and Python tooling, delivered through AWS CodePipeline',
      'Co-own governance-gated account vending with Security, Governance and Architecture: an approved ServiceNow request auto-raises a PR, and the pipeline provisions a baselined, network-connected account',
      'Deliver secure-by-default accounts through policy-as-code — preventive SCP guardrails, automated remediation, Security Hub, GuardDuty and IAM Identity Center with permission boundaries',
      'Run hybrid networking — Transit Gateway hub-and-spoke, Route 53 Resolver DNS, SD-WAN on-prem connectivity and a central egress proxy with SLA-backed allow-listing',
      'Platform lead for ISO 27001 and internal/external audits under EU DORA; enforce change quality with automated checks, staged rollouts, two-person review, on-call and RCAs',
      'Champion AI-assisted engineering and docs-as-code; own tagging standards with FinOps and support emerging platforms on architecture and operations',
    ],
  },
  {
    role: 'Principal Engineer – AzureOps',
    company: 'Fidelity International',
    location: 'Gurugram',
    period: 'Aug 2024 – Jul 2026',
    current: false,
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

export const skills = {
  core: [
    {
      icon: 'Cloud',
      title: 'AWS Platforms',
      summary: 'Multi-account landing zones, governed account vending and secure baselines at enterprise scale.',
      certs: ['SAA-C01'],
      items: ['AWS Organizations', 'Landing Zones', 'Account Vending', 'IAM Identity Center', 'Permission Boundaries', 'AWS CodePipeline', 'FinOps Tagging'],
    },
    {
      icon: 'FileCode2',
      title: 'Infrastructure as Code',
      summary: 'Reusable Terraform modules and config-driven pipelines that other teams build on.',
      certs: ['TF-002'],
      items: ['Terraform', 'Terragrunt', 'Inner-Source Modules', 'GitHub Actions', 'Azure DevOps', 'Jenkins'],
    },
    {
      icon: 'Network',
      title: 'Cloud Networking',
      summary: 'Hybrid hub-and-spoke connectivity, DNS and controlled egress between cloud and on-prem.',
      certs: ['ANS-C01'],
      items: ['VPC', 'Transit Gateway', 'Direct Connect', 'Route 53 Resolver', 'SD-WAN', 'Egress Proxy', 'Azure VWAN', 'ExpressRoute', 'Private Endpoint', 'Azure Firewall', 'Azure DNS', 'NSG'],
    },
    {
      icon: 'ShieldCheck',
      title: 'Security & Compliance',
      summary: 'Preventive guardrails and automated remediation in code, backed by audit-ready controls.',
      certs: [],
      items: ['Policy-as-Code', 'SCPs', 'Security Hub', 'GuardDuty', 'HashiCorp Vault', 'ISO 27001', 'EU DORA'],
    },
    {
      icon: 'Container',
      title: 'Kubernetes',
      summary: 'Cluster operations and migrations, from self-managed kubeadm clusters to EKS.',
      certs: ['CKA', 'CKAD'],
      items: ['EKS', 'kubeadm', 'Helm', 'Kustomize', 'Istio', 'Nginx Ingress', 'Calico', 'Flannel'],
    },
    {
      icon: 'CloudCog',
      title: 'Azure Platforms',
      summary: 'Compliant-by-default Azure environments with policy guardrails and event-driven automation.',
      certs: ['AZ-303/304'],
      items: ['Azure Policy', 'Entra ID', 'RBAC', 'Key Vault', 'Azure Functions'],
    },
  ],
  toolbox: [
    { label: 'Languages', items: ['Python', 'Shell', 'PowerShell', 'Go (working knowledge)', 'JavaScript (working knowledge)'] },
    { label: 'Observability', items: ['CloudWatch', 'Azure Monitor', 'Log Analytics', 'Application Insights', 'Grafana', 'Prometheus', 'ELK'] },
    { label: 'Ways of working', items: ['Platform-as-a-Product', 'Developer Experience', 'DORA Metrics', 'Docs-as-Code', 'AI-Assisted Engineering', 'Agile / Kanban'] },
  ],
};

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
      title: "Crucial Conversations",
      author: "Joseph Grenny, Kerry Patterson et al.",
      cover: "https://covers.openlibrary.org/b/isbn/9781260474183-L.jpg",
      note: "Tools for talking when stakes are high — and staying in dialogue when emotions run strong.",
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
      title: "The Culture Map",
      author: "Erin Meyer",
      cover: "https://covers.openlibrary.org/b/id/10854287-L.jpg",
      note: "Decoding how people think, lead, and get things done across cultures.",
    },
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

export const tools = [
  {
    icon: 'Shuffle',
    title: 'Pairwise',
    description:
      'Weekly pair-planning tool for platform engineering teams — set up your team once, mark weekly availability, and generate support pairs, floats, and engineering pairs that avoid recent repeats.',
    link: 'https://kvipz.github.io/pairwise/',
  },
  {
    icon: 'Mic2',
    title: 'Toastmasters Club App',
    description:
      'Meeting toolkit for Toastmasters clubs — manage the speaker lineup, evaluation forms, timer, ah-counter, and grammarian roles all in one place.',
    link: 'https://toastthemost.github.io',
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Team Culture Map',
    description:
      'Interactive sliders for mapping how a team or org actually operates across 7 cultural dimensions — from secrecy to openness, top-down to bottom-up, fast to deliberate, and more.',
    link: 'https://kvipz.github.io/team-culture-map/',
    reference: 'Framework from "The Staff Engineer\'s Path" by Tanya Reilly',
  },
  {
    icon: 'Grid2x2',
    title: 'Power-Interest Grid',
    description:
      'Stakeholder mapping tool — add stakeholders and drag them into the quadrant that fits their power and interest level to plan engagement strategy.',
    link: 'https://kvipz.github.io/power-interest-grid/',
    reference: 'Framework from "Platform Engineering" by Camille Fournier & Ian Nowland',
  },
  {
    icon: 'CalendarRange',
    title: 'Office Scheduler',
    description:
      'Plans monthly office attendance — tracks holidays, leave, and WFH days for two people and computes the in-office attendance balance for the month.',
    link: 'https://vip-in-the-cloud.dev/office-scheduler/',
  },
  {
    icon: 'BookOpen',
    title: 'First 90 Days',
    description:
      'Interactive frameworks from Michael Watkins — assess your situation, map STARS priorities, plan key conversations, and evaluate your team all in one place.',
    link: 'https://vip-in-the-cloud.dev/first-90-days/',
    reference: 'Framework from "The First 90 Days" by Michael Watkins',
  },
  {
    icon: 'Disc3',
    title: 'Wheel of Names',
    description:
      'Spinning name picker for standups, draws and raffles — paste a list, spin, and pick what happens to the winner: stay on the wheel, park in a standby queue that releases the longest-waiting name, or drop off entirely. The whole wheel exports and imports as JSON.',
    link: 'https://vip-in-the-cloud.dev/wheel-of-names/',
  },
];

const flickrPhoto = (id, secret, title) => ({
  title,
  image: `https://live.staticflickr.com/65535/${id}_${secret}_c.jpg`,
  link: `https://www.flickr.com/photos/204645078@N07/${id}/`,
});

export const photography = {
  profile: 'https://www.flickr.com/photos/204645078@N07/',
  photos: [
    flickrPhoto('55323011502', '447c606ac1', 'Wing it!'),
    flickrPhoto('55324374625', 'ef52a2ebca', 'Immense'),
    flickrPhoto('55323043677', '0ed9249729', 'Slumber'),
    flickrPhoto('55324756083', '34d32286ab', 'Four Shades of Chaukhamba'),
    flickrPhoto('55324374205', '4a132ebb84', 'Watch'),
    flickrPhoto('55323946861', '3bf3b9f864', 'Food Chain Magnate'),
  ],
};

export const speaking = {
  videoId: 'F7F_BAxe_Fs',
  title: 'Introduction to Toastmasters Mentoring',
  description: 'A Toastmasters speech introducing mentoring — delivered to a hybrid audience, in the room and online.',
  url: 'https://www.youtube.com/watch?v=F7F_BAxe_Fs',
};
