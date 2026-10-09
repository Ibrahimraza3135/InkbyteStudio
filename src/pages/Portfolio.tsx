import { useState } from 'react';
import { ArrowRight, BookOpen, Code2, Briefcase, CheckCircle } from 'lucide-react';
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
    title: 'Executive Biography Wikipedia Deployment',
    description: 'Comprehensive Wikipedia article research, drafting, and publication adhering to strict notability criteria and neutral point of view standards. Compiled and verified citations from major independent news journals to secure lasting mainspace status.',
    results: [
      'Published with 100% Wikipedia guideline compliance',
      'Documented across 12+ independent secondary sources',
      'Stable mainspace persistence with zero deletion flags',
    ],
    tags: ['Page Creation', 'Notability Evaluation', 'Source Research'],
    icon: BookOpen,
  },
  {
    id: 2,
    category: 'webdev' as const,
    title: 'Full-Stack SaaS Analytics Platform',
    description: 'Engineered an administrative analytics dashboard featuring real-time data visualisations, secure role-based access control (RBAC), and subscription billing automation built on a modern MERN architecture.',
    results: [
      'Sub-200ms average API response time',
      'Automated recurring billing and subscription workflows',
      'Fully responsive data tables and interactive charts',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    icon: Code2,
  },
  {
    id: 3,
    category: 'wikipedia' as const,
    title: 'Wikipedia Page Neutrality Upgrade & Rehabilitation',
    description: 'Comprehensive remediation of an encyclopedia article flagged for tone and sourcing issues. Overhauled language to eliminate promotional phrasing, added 30+ reliable citations, and restored full compliance with neutrality standards.',
    results: [
      'All editorial flags successfully cleared',
      '30+ reliable secondary citations added',
      'Maintained permanent encyclopedia presence',
    ],
    tags: ['Page Upgrade', 'Compliance Remediation', 'Citation Indexing'],
    icon: BookOpen,
  },
  {
    id: 4,
    category: 'webdev' as const,
    title: 'E-Commerce Workflow & Email Automation Architecture',
    description: 'Designed and deployed an automated event-driven messaging system integrating order fulfillment webhooks with automated transactional emails and customer nurture sequences.',
    results: [
      'Automated 8-stage customer lifecycle flow',
      'Real-time webhook processing with error fallback',
      'Zero manual follow-up required',
    ],
    tags: ['Node.js', 'Workflow Automation', 'Webhooks', 'Transactional Email'],
    icon: Code2,
  },
  {
    id: 5,
    category: 'wikipedia' as const,
    title: 'Creative & Arts Wikipedia Article Creation',
    description: 'Structured encyclopedic article creation for an internationally recognized creative subject. Sourced from high-authority cultural and trade publications to establish documented notability and neutral coverage.',
    results: [
      'Approved on initial review submission',
      'Over 15 independent cultural publications cited',
      'Complete infobox and metadata schema setup',
    ],
    tags: ['Creative Arts', 'Article Drafting', 'Notability Standards'],
    icon: BookOpen,
  },
  {
    id: 6,
    category: 'webdev' as const,
    title: 'Custom Client Operations & Deliverables Portal',
    description: 'Constructed a unified digital operations dashboard consolidating project milestones, file distribution, and messaging into a single responsive application.',
    results: [
      'Replaced disparate tools with unified dashboard',
      'Intuitive mobile-first responsive layout',
      'End-to-end encrypted file uploads',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Full-Stack Architecture'],
    icon: Code2,
  },
  {
    id: 7,
    category: 'wikipedia' as const,
    title: 'Wikipedia Article Monitoring & Retainer Protection',
    description: 'Ongoing maintenance protocol including automated revision tracking, immediate reversal of unauthorized edits, and regular updates to reflect verified developments in secondary sources.',
    results: [
      'Continuous active revision monitoring',
      'Immediate vandalism mitigation and rollbacks',
      'Complete factual consistency and policy adherence',
    ],
    tags: ['Monitoring Retainer', 'Vandalism Defense', 'Content Updates'],
    icon: BookOpen,
  },
  {
    id: 8,
    category: 'webdev' as const,
    title: 'Multi-System Scheduling & Messaging API Integration Suite',
    description: 'Architected an integration suite connecting online scheduling systems with two-way SMS dispatch, calendar synchronisation, and external webhook listeners.',
    results: [
      'Real-time bi-directional synchronization',
      'Cross-platform API payload normalization',
      'High reliability event dispatching',
    ],
    tags: ['API Integrations', 'Webhooks', 'Event Handling', 'Node.js'],
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
        <title>Portfolio & Projects | InkbyteStudio</title>
        <meta name="description" content="Explore InkbyteStudio's technical portfolio of Wikipedia deployments and custom web engineering projects." />
        <link rel="canonical" href="https://InkbyteStudio.net/portfolio" />
        <meta property="og:title" content="Portfolio & Projects | InkbyteStudio" />
        <meta property="og:description" content="Explore our Wikipedia deployments and web development project architectures." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-semibold text-amber-700 uppercase tracking-widest mb-6">
              <Briefcase className="w-4 h-4" />
              Completed Deliverables & Architecture
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Selected <span className="text-gold-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An overview of our technical implementations across encyclopedic publishing and full-stack software development.
            </p>
          </div>
        </AnimatedSection>

        {/* Highlight Stats Bar */}
        <AnimatedSection delay={30}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-14">
            <div className="bg-white border border-amber-500/10 rounded-2xl p-6 text-center gold-shadow flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-black text-gray-900">30+ Industries Served</p>
                <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider">Wikipedia Services</p>
              </div>
            </div>

            <div className="bg-white border border-amber-500/10 rounded-2xl p-6 text-center gold-shadow flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Code2 className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-black text-gray-900">100+ Projects Completed</p>
                <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider">Web Development</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={60}>
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
            <AnimatedSection key={project.id} delay={index * 60}>
              <div className="group bg-white rounded-3xl p-8 border border-amber-500/10 hover:border-amber-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 gold-shadow h-full flex flex-col">
                {/* Category Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      project.category === 'wikipedia'
                        ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                        : 'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}>
                      {project.category === 'wikipedia' ? 'Wikipedia Deployment' : 'Web Engineering'}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight leading-tight">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                {/* Technical Results */}
                <div className="bg-[#FAF9F6] border border-amber-500/10 rounded-2xl p-5 mb-6">
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3">Key Technical Deliverables</p>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
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
        <AnimatedSection delay={150}>
          <div className="text-center bg-gradient-to-br from-zinc-950 to-black border border-amber-500/20 rounded-3xl p-12 shadow-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              We provide strategic guidance and full engineering execution tailored to your requirements.
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
