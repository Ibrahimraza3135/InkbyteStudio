import { ClipboardCheck, FileText, RefreshCw, Bell, ArrowRight, CheckCircle, ShieldCheck, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

interface WikipediaServicesProps {
  onNavigate: (page: string) => void;
}

export default function WikipediaServices({ onNavigate }: WikipediaServicesProps) {
  const services = [
    {
      icon: ClipboardCheck,
      title: 'Notability Assessment',
      badge: '6–12 Hours',
      description:
        "Expert review of your subject's eligibility based on Wikipedia's strict notability criteria. We analyze existing third-party coverage and provide an honest, actionable report.",
      features: [
        'Comprehensive media coverage analysis',
        'Expert eligibility evaluation report',
        'Detailed recommendations on next steps',
        'Quick turnaround — results in 6–12 hours',
      ],
      action: 'Check My Notability',
    },
    {
      icon: FileText,
      title: 'Wikipedia Page Creation',
      badge: 'Full Service',
      description:
        'End-to-end Wikipedia article creation — from sourcing and research to professional drafting, review, and strategic submission. We handle every detail so your article meets the highest editorial standards.',
      features: [
        'Comprehensive research & source gathering',
        'Professional encyclopedic writing',
        'Proper Wikipedia citation formatting',
        'Strategic submission process',
        'Post-publication revision support',
      ],
      action: 'Create My Wiki Page',
    },
    {
      icon: RefreshCw,
      title: 'Page Upgrades & Rewrites',
      badge: 'Enhancement',
      description:
        'Transform existing Wikipedia pages with improved content, stronger citations, and enhanced compliance. Ideal for outdated, poorly written, or flagged articles.',
      features: [
        'Content quality improvement',
        'Citation updates & new additions',
        'Neutrality & tone compliance fixes',
        'Article structure optimization',
        'Removal of promotional language',
      ],
      action: 'Revamp My Page',
    },
    {
      icon: Bell,
      title: 'Monitoring & Maintenance',
      badge: 'Ongoing',
      description:
        'Continuous protection and upkeep for your Wikipedia presence. We monitor edits, address deletion risks, and keep your article current, accurate, and fully compliant.',
      features: [
        'Monthly page health monitoring',
        'Vandalism detection & reversal',
        'Content freshness updates',
        'Deletion risk mitigation',
        'Change log reporting',
      ],
      action: 'Subscribe for Monitoring',
    },
  ];

  const guidelines = [
    {
      icon: ShieldCheck,
      title: 'Notability Standards',
      description: 'Wikipedia requires subjects to have significant, independent coverage in reliable publications. We assess this rigorously before any work begins.',
    },
    {
      icon: BookOpen,
      title: 'Research Integrity',
      description: 'We only cite secondary sources with editorial oversight — major newspapers, journals, and books. No press releases, social media, or primary sources.',
    },
    {
      icon: CheckCircle,
      title: 'Publishing Safety',
      description: "Articles are drafted in a neutral encyclopedic tone, reviewed for compliance, and submitted following Wikipedia's recommended submission best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#FAF9F6] to-amber-50/20 pt-24 pb-12">
      <Helmet>
        <title>Wikipedia Services | Inkbyte Studio</title>
        <meta name="description" content="Expert Wikipedia services: notability assessment, page creation, upgrades, and monitoring. Full compliance with Wikipedia guidelines." />
        <link rel="canonical" href="https://InkbyteStudio.net/services-wikipedia" />
        <meta property="og:title" content="Wikipedia Services | InkbyteStudio" />
        <meta property="og:description" content="Professional Wikipedia page creation, upgrades, and monitoring in full compliance with Wikipedia editorial guidelines." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-semibold text-amber-700 uppercase tracking-widest mb-6">
              <BookOpen className="w-4 h-4" />
              Wikipedia Services
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Professional Wikipedia{' '}
              <span className="text-gold-gradient">Page Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From notability assessment to long-term maintenance — we manage every stage of your Wikipedia presence with precision and full editorial compliance.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-500/10 hover:border-amber-500/30 gold-shadow h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-[#FAF9F6] border border-amber-500/10 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:border-amber-500/30 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-amber-600 group-hover:text-amber-400 transition-colors duration-500" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed flex-grow">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-amber-500/10 border border-amber-500/10 rounded-full flex items-center justify-center mt-0.5">
                        <ArrowRight className="w-3 h-3 text-amber-600" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-4 bg-black text-amber-400 hover:text-amber-300 border border-amber-500/20 rounded-xl font-semibold text-lg hover:bg-zinc-900 transition-all duration-300 shadow-lg"
                >
                  {service.action}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Standards Section */}
        <AnimatedSection delay={100}>
          <div className="bg-gradient-to-br from-zinc-950 to-black border border-amber-500/20 rounded-3xl p-10 md:p-16 mb-16 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                Our Editorial Standards
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We don't just create Wikipedia pages — we build articles that last, following every guideline that keeps them safe from deletion.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guidelines.map((g, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/20 hover:bg-white/10 transition-all duration-300">
                  <g.icon className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{g.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{g.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={200}>
          <div className="text-center bg-white border border-amber-500/10 rounded-3xl p-12 shadow-xl gold-shadow">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Ready to Get Published on Wikipedia?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Start with a free consultation. We'll assess your notability and outline the exact path to your Wikipedia presence.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-black text-amber-400 hover:text-amber-300 border border-amber-500/20 rounded-lg font-semibold text-lg hover:bg-zinc-900 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Book a Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
