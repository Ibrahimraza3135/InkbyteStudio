import {
  Code2,
  Layers,
  Zap,
  Globe,
  Cpu,
  LayoutDashboard,
  ArrowRight,
  CheckCircle,
  Server,
  Smartphone,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

interface WebDevServicesProps {
  onNavigate: (page: string) => void;
}

export default function WebDevServices({ onNavigate }: WebDevServicesProps) {
  const services = [
    {
      icon: Code2,
      title: 'Custom Web Application Development',
      badge: 'Core Service',
      description:
        'Purpose-built web applications tailored to your exact business requirements. We architect, design, and develop full-featured apps from scratch — no templates, no shortcuts.',
      features: [
        'Requirements discovery & technical scoping',
        'Custom architecture & database design',
        'React frontend with clean, component-based UI',
        'RESTful or GraphQL API integration',
        'Secure authentication & authorization',
        'Deployment & post-launch support',
      ],
    },
    {
      icon: Layers,
      title: 'Full-Stack MERN Solutions',
      badge: 'MERN Stack',
      description:
        'End-to-end development using MongoDB, Express.js, React, and Node.js. A proven, modern stack that powers scalable and maintainable web products.',
      features: [
        'MongoDB database design & optimization',
        'Express.js REST API development',
        'React 18 with TypeScript & Tailwind CSS',
        'Node.js server-side logic',
        'JWT auth, middleware & security best practices',
        'CI/CD pipeline setup & cloud deployment',
      ],
    },
    {
      icon: LayoutDashboard,
      title: 'Responsive UI/UX Design',
      badge: 'Design',
      description:
        'Modern, accessible interfaces designed to convert. We create wireframes, interactive prototypes, and production-ready designs that work beautifully across all devices.',
      features: [
        'Wireframing & information architecture',
        'High-fidelity UI mockups',
        'Mobile-first responsive design',
        'Accessibility (WCAG 2.1) compliance',
        'Tailwind CSS implementation',
        'Design system & component library',
      ],
    },
    {
      icon: Zap,
      title: 'Workflow & Email Automation',
      badge: 'Automation',
      description:
        'Eliminate repetitive manual work with smart automation systems. From email sequences to business workflow orchestration — we build the pipes that keep your operation running.',
      features: [
        'Email marketing & transactional automation',
        'CRM & tool integration (Zapier, Make, custom)',
        'Lead capture & nurture workflows',
        'Scheduled tasks & background jobs',
        'Notification systems & webhooks',
        'Analytics & performance reporting',
      ],
    },
    {
      icon: Globe,
      title: 'API Integrations',
      badge: 'Integrations',
      description:
        'Connect your platform to any third-party service. We implement clean, reliable integrations with payment gateways, analytics platforms, communication tools, and more.',
      features: [
        'Payment gateway integration (Stripe, PayPal)',
        'Authentication providers (Google, GitHub)',
        'Communication APIs (Twilio, SendGrid)',
        'Data & analytics integrations',
        'Webhook handling & event-driven architecture',
        'Custom API wrapper development',
      ],
    },
    {
      icon: Server,
      title: 'SaaS & Dashboard Development',
      badge: 'SaaS',
      description:
        'Build multi-tenant SaaS platforms or internal admin dashboards with real-time data, user management, billing, and role-based access control — all production-ready.',
      features: [
        'Multi-tenant SaaS architecture',
        'Admin & user dashboard interfaces',
        'Role-based access control (RBAC)',
        'Subscription billing integration',
        'Real-time data with WebSockets',
        'Analytics & reporting modules',
      ],
    },
  ];

  const techStack = [
    { label: 'React', category: 'Frontend' },
    { label: 'TypeScript', category: 'Frontend' },
    { label: 'Tailwind CSS', category: 'Frontend' },
    { label: 'Node.js', category: 'Backend' },
    { label: 'Express.js', category: 'Backend' },
    { label: 'MongoDB', category: 'Database' },
    { label: 'PostgreSQL', category: 'Database' },
    { label: 'REST APIs', category: 'Architecture' },
    { label: 'GraphQL', category: 'Architecture' },
    { label: 'JWT Auth', category: 'Security' },
    { label: 'Vite', category: 'Tooling' },
    { label: 'Git & CI/CD', category: 'DevOps' },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', description: 'Understanding your goals, users, and technical constraints through structured kickoff sessions.' },
    { step: '02', title: 'Design', description: 'Wireframes, prototypes, and high-fidelity mockups reviewed and approved before development begins.' },
    { step: '03', title: 'Development', description: 'Agile sprints with regular check-ins. Clean, documented, and test-covered code throughout.' },
    { step: '04', title: 'Testing & QA', description: 'Cross-browser, cross-device, and performance testing to ensure a flawless launch.' },
    { step: '05', title: 'Deployment', description: 'Smooth production launch, documentation handover, and 30-day post-launch support included.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#FAF9F6] to-amber-50/20 pt-24 pb-12">
      <Helmet>
        <title>Web Development Services | InkbyteStudio</title>
        <meta name="description" content="Custom web applications, full-stack MERN solutions, UI/UX design, and workflow automation systems built by expert developers." />
        <link rel="canonical" href="https://InkbyteStudio.net/services-webdev" />
        <meta property="og:title" content="Web Development Services | InkbyteStudio" />
        <meta property="og:description" content="React, Node.js, MongoDB, Tailwind CSS — full-stack web development from discovery to deployment." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-semibold text-amber-700 uppercase tracking-widest mb-6">
              <Code2 className="w-4 h-4" />
              Web Development Services
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              High-Performance{' '}
              <span className="text-gold-gradient">Web Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Custom-built web applications, intuitive interfaces, and powerful automation systems — designed to grow with your business.
            </p>
          </div>
        </AnimatedSection>

        {/* Tech Stack Badges */}
        <AnimatedSection delay={50}>
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {techStack.map((tech) => (
              <span key={tech.label} className="px-4 py-2 bg-white border border-amber-500/10 text-gray-700 rounded-full text-sm font-semibold gold-shadow hover:border-amber-500/30 transition-colors">
                <span className="text-amber-600 text-xs font-bold mr-1">{tech.category}:</span>{tech.label}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-500/10 hover:border-amber-500/30 gold-shadow h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-[#FAF9F6] border border-amber-500/10 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:border-amber-500/30 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-amber-600 group-hover:text-amber-400 transition-colors duration-500" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed flex-grow">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-4 bg-black text-amber-400 hover:text-amber-300 border border-amber-500/20 rounded-xl font-semibold text-base hover:bg-zinc-900 transition-all duration-300 shadow-lg"
                >
                  Request a Quote
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Process Section */}
        <AnimatedSection delay={100}>
          <div className="bg-gradient-to-br from-zinc-950 to-black border border-amber-500/20 rounded-3xl p-10 md:p-16 mb-16 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                Our Development Process
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                A structured, transparent approach — from first conversation to launch day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/20 hover:bg-white/10 transition-all duration-300 h-full">
                    <span className="text-3xl font-black text-amber-500/40 mb-3 block">{step.step}</span>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-amber-500/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Responsive Callout */}
        <AnimatedSection delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-amber-500/10 rounded-3xl p-8 gold-shadow flex items-start gap-5">
              <Smartphone className="w-10 h-10 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile-First, Always</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Every interface we build is designed mobile-first and tested across all major devices and screen sizes — no afterthought responsiveness.</p>
              </div>
            </div>
            <div className="bg-white border border-amber-500/10 rounded-3xl p-8 gold-shadow flex items-start gap-5">
              <Cpu className="w-10 h-10 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Built to Scale</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Clean architecture, documented code, and best practices ensure your product can grow without needing a costly rewrite six months later.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={200}>
          <div className="text-center bg-white border border-amber-500/10 rounded-3xl p-12 shadow-xl gold-shadow">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tell us about your idea. We'll scope it, plan it, and build it — on time, within budget.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-black text-amber-400 hover:text-amber-300 border border-amber-500/20 rounded-lg font-semibold text-lg hover:bg-zinc-900 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Request a Project Quote <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
