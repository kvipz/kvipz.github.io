export const personal = {
  name: 'Vipin Kumar',
  title: 'Principal Engineer',
  subtitle: 'Multi-Cloud Platform Specialist',
  summary:
    'Senior Platform Engineering professional with 15 years of experience across AWS, Azure and Kubernetes ecosystem. Consistent focus on platform-as-a-product thinking, developer experience and operational excellence. Advocate for modern engineering practices and a collaborative approach to platform enablement.',
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
    role: 'Design Architect | Senior Engineer',
    company: 'HCL Technologies & Ericsson Global India',
    location: 'Noida',
    period: '2014 – 2019',
    current: false,
    highlights: [
      'Designed fault-tolerant cloud architectures across AWS and Azure',
      'Built CI/CD pipelines using Jenkins and CloudFormation',
      'Automated network KPI monitoring — 20% efficiency increase, 30% manual effort reduction',
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
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF', year: '2026', badge: 'K8s' },
  { name: 'Certified Kubernetes Application Developer (CKAD)', issuer: 'CNCF', year: '2020', badge: 'K8s' },
  { name: 'Microsoft Azure AI Fundamentals', issuer: 'Microsoft', year: '2025', badge: 'Azure' },
  { name: 'AWS Advanced Networking Specialty', issuer: 'Amazon', year: '2023', badge: 'AWS' },
  { name: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', year: '2021', badge: 'TF' },
  { name: 'Azure Solution Architect Expert', issuer: 'Microsoft', year: '2020', badge: 'Azure' },
  { name: 'AWS Certified Solution Architect Associate', issuer: 'Amazon', year: '2017', badge: 'AWS' },
];

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
