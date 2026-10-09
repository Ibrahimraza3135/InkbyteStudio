import { useState } from 'react';
import { ArrowRight, BookOpen, Code2, ExternalLink, Briefcase } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

interface PortfolioProps {
  onNavigate: (page: string) => void;
}

type FilterType = 'all' | 'wikipedia' | 'webdev';

const projects = [
  {
    id: 1,
    category: 'wikipedia' as const,
    title: 'Executive Wikipedia Page – Tech Industry CEO',
    client: 'Fortune 500 Executive',
    description: 'Comprehensive Wikipedia article creation for a prominent tech industry CEO. Involved extensive source research from Forbes, TechCrunch, and WSJ, resulting in a fully compliant, neutrally written page that has remained stable for 18+ months.',
    results: ['18+ months live with no deletion flags', 'Cited in 12 major tech publications', '5-star client review'],
    tags: ['Page Creation', 'Notability Assessment', 'Source Research'],
    icon: BookOpen,
  },
  {
    id: 2,
    category: 'webdev' as const,
    title: 'SaaS Dashboard – Client Analytics Platform',
    client: 'B2B SaaS Startup',
    description: 'Full-stack React + Node.js admin dashboard with real-time analytics, role-based access control, and Stripe subscription billing. Reduced manual reporting time by 80% for the client team.',
    results: ['80% reduction in manual reporting', 'Sub-200ms average response time', 'Launched in 6 weeks'],
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'RBAC'],
    icon: Code2,
  },
  {
    id: 3,
    category: 'wikipedia' as const,
    title: 'Wikipedia Rehabilitation – Flagged Corporate Article',
    client: 'Mid-Size Enterprise',
    description: 'Rescued a corporate Wikipedia article flagged for promotional language and poor sourcing. Full rewrite with 30+ reliable citations, neutrality compliance fixes, and removal of all COI-related content.',
    results: ['All deletion flags removed within 2 weeks', '30+ new reliable citations added', 'Article reinstated to mainspace'],
    tags: ['Page Upgrade', 'Compliance', 'Citation Work'],
    icon: BookOpen,
  },
  {
    id: 4,
    category: 'webdev' as const,
    title: 'E-Commerce Automation System',
    client: 'Online Retail Brand',
    description: 'End-to-end email marketing and order workflow automation integrated with Shopify and SendGrid. Built custom triggers, abandoned cart sequences, and post-purchase nurture flows.',
    results: ['42% increase in email open rates', '3x ROI on abandoned cart recovery', 'Fully automated 8-step workflow'],
    tags: ['Automation', 'SendGrid', 'Webhook Integration', 'Node.js'],
    icon: Code2,
  },
  {
    id: 5,
    category: 'wikipedia' as const,
    title: 'Artist Wikipedia Page Creation',
    client: 'Award-Winning Musician',
    description: 'Created a notable Wikipedia presence for an internationally recognized musician. Sourced from Billboard, Rolling Stone, and regional press to establish eligibility and create a well-structured, policy-compliant article.',
    results: ['Page approved on first submission', 'Coverage from 15+ independent sources cited', 'No edits required post-publication'],
    tags: ['Arts & Entertainment', 'Page Creation', 'Notability Assessment'],
    icon: BookOpen,
  },
  {
    id: 6,
    category: 'webdev' as const,
    title: 'Agency Client Portal – Project Management Tool',
    client: 'Digital Marketing Agency',
    description: 'Custom-built client portal allowing the agency to manage deliverables, share files, and communicate with 50+ active clients. Replaced a patchwork of Notion, email, and Slack with a unified, branded dashboard.',
    results: ['50+ active clients onboarded in week 1', 'Average client response time cut by 60%', 'Zero external tools needed'],
    tags: ['React', 'Full-Stack', 'Custom Dashboard', 'File Management'],
    icon: Code2,
  },
  {
    id: 7,
    category: 'wikipedia' as const,
    title: 'Wikipedia Monitoring – Ongoing Retainer',
    client: 'Public Figure (Confidential)',
    description: 'Long-term monitoring and maintenance retainer for a high-profile public figure. Monthly audits, proactive vandalism reversals, and regular content updates to reflect new verified achievements.',
    results: ['24 consecutive months of active monitoring', '6 vandalism incidents resolved', '100% uptime — article never flagged'],
    tags: ['Monitoring', 'Maintenance', 'Long-Term Retainer'],
    icon: BookOpen,
  },
  {
    id: 8,
    category: 'webdev' as const,
    title: 'API Integration Suite – Healthcare Scheduling',
    client: 'Healthcare Technology Company',
    description: 'Developed a suite of API integrations connecting a healthcare SaaS platform to Twilio (SMS reminders), Google Calendar, and a custom FHIR-compliant health records API. Reduced appointment no-show rates significantly.',
    results: ['35% reduction in appointment no-shows', 'Real-time sync across 3 external systems', 'HIPAA-conscious implementation'],
    tags: ['API Integration', 'Twilio', 'Node.js', 'Healthcare'],
    icon: Code2,
  },
];

const filterLabels: Record<FilterType, string> = {
  all: 'All Projects',
  wikipedia: 'Wikipedia Deployments',
  webdev: 'Web Development',
};

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#FAF9F6] to-amber-50/20 pt-24 pb-12">
      <Helmet>
        <title>Portfolio & Case Studies | InkbyteStudio</title>
        <meta name="description" content="Browse InkbyteStudio's portfolio of Wikipedia deployments and web development projects. Case studies from real client engagements." />
        <link rel="canonical" href="https://InkbyteStudio.net/portfolio" />
        <meta property="og:title" content="Portfolio | InkbyteStudio" />
        <meta property="og:description" content="Wikipedia deployments and web development case studies from InkbyteStudio." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-semibold text-amber-700 uppercase tracking-widest mb-6">
              <Briefcase className="w-4 h-4" />
              Portfolio & Case Studies
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Our Work,{' '}
              <span className="text-gold-gradient">Our Results</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A selection of our Wikipedia deployments and web development projects. Specific details are kept confidential where requested by clients.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={50}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {(Object.keys(filterLabels) as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter
                    ? 'bg-black text-amber-400 border border-amber-500/30 shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-500/20 hover:text-amber-700 gold-shadow'
                }`}
              >
                {filter === 'wikipedia' && <BookOpen className="w-4 h-4" />}
                {filter === 'webdev' && <Code2 className="w-4 h-4" />}
                {filter === 'all' && <Briefcase className="w-4 h-4" />}
                {filterLabels[filter]}
                <span className={`text-xs px-2 py-0.5 rounded-full ${activeFilter === filter ? 'bg-amber-500/20 text-amber-300' : 'bg-gray-100 text-gray-500'}`}>
                  {filter === 'all' ? projects.length : projects.filter((p) => p.category === filter).length}
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filtered.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 80}>
              <div className="group bg-white rounded-3xl p-8 border border-amber-500/10 hover:border-amber-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 gold-shadow h-full flex flex-col">
                {/* Category Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      project.category === 'wikipedia'
                        ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                        : 'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}>
                      {project.category === 'wikipedia' ? 'Wikipedia' : 'Web Dev'}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-amber-500 transition-colors" />
                </div>

                <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mb-2">{project.client}</p>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight leading-tight">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                {/* Results */}
                <div className="bg-[#FAF9F6] border border-amber-500/10 rounded-2xl p-4 mb-6">
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3">Key Results</p>
                  <ul className="space-y-1.5">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={200}>
          <div className="text-center bg-gradient-to-br from-zinc-950 to-black border border-amber-500/20 rounded-3xl p-12 shadow-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's add your success story to this portfolio.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
            >
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
