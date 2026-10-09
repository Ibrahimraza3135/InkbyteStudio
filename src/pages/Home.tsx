import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  Users,
  FileCheck,
  Shield,
  TrendingUp,
  Clock,
  ArrowRight,
  ArrowDown,
  Code2,
  Layers,
  Zap,
  Globe,
  Cpu,
  LayoutDashboard,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import WikipediaGlobe from '../components/WikipediaGlobe';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const wikiSteps = ['Notability', 'Research', 'Draft', 'Review', 'Submit', 'Monitor'];
const devSteps = ['Discovery', 'Design', 'Development', 'Testing', 'Deployment'];

const wikibenefits = [
  { icon: CheckCircle, title: 'Credibility That Lasts', description: 'Establish permanent digital presence that enhances your reputation' },
  { icon: Users, title: 'Expert Wikipedia Editors', description: 'Our team understands Wikipedia guidelines and compliance standards' },
  { icon: FileCheck, title: 'Reliable Source Research', description: 'We identify and cite only the most credible secondary sources' },
  { icon: Shield, title: 'Compliance Guaranteed', description: 'Every article meets strict Wikipedia neutrality and notability rules' },
  { icon: TrendingUp, title: 'Transparent Process', description: 'Full visibility into every stage of research, writing, and submission' },
  { icon: Clock, title: 'Fast Delivery Options', description: 'Expedited services available for urgent publishing needs' },
];

const devBenefits = [
  { icon: Code2, title: 'Custom Web Applications', description: 'Tailored web apps built from scratch to solve your unique business challenges' },
  { icon: Layers, title: 'Full-Stack MERN Solutions', description: 'React, Node.js, Express & MongoDB — end-to-end development under one roof' },
  { icon: LayoutDashboard, title: 'Responsive UI/UX Design', description: 'Modern, accessible interfaces that convert visitors into clients' },
  { icon: Zap, title: 'Workflow & Email Automation', description: 'Automated systems that save time and eliminate repetitive manual tasks' },
  { icon: Globe, title: 'API Integrations', description: 'Seamlessly connect your product with third-party services and data sources' },
  { icon: Cpu, title: 'Scalable Architecture', description: 'Built for growth — clean code, best practices, and maintainable systems' },
];

const stats = [
  { value: '30+', label: 'Industries Served (Wikipedia)' },
  { value: '100+', label: 'Web Development Projects' },
  { value: '100%', label: 'Compliance Rate' },
  { value: '24/7', label: 'Monitoring & Support' },
];

export default function Home({ onNavigate }: HomeProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeWorkflow, setActiveWorkflow] = useState<'wikipedia' | 'webdev'>('wikipedia');

  useEffect(() => {
    const steps = activeWorkflow === 'wikipedia' ? wikiSteps : devSteps;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeWorkflow]);

  const activeSteps = activeWorkflow === 'wikipedia' ? wikiSteps : devSteps;

  return (
    <div className="min-h-screen bg-ash-white">
      {/* SEO */}
      <Helmet>
        <title>InkbyteStudio – Wikipedia & Web Development Agency</title>
        <meta name="description" content="Dual-pillar digital studio: expert Wikipedia page creation & compliance, plus high-performance web development (MERN, React, UI/UX, Automation)." />
        <link rel="canonical" href="https://InkbyteStudio.net/" />
        <meta property="og:title" content="InkbyteStudio – Wikipedia & Web Development Agency" />
        <meta property="og:description" content="Build your digital credibility with expert Wikipedia services and high-performance web solutions." />
        <meta property="og:url" content="https://InkbyteStudio.net/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "InkbyteStudio",
            "url": "https://InkbyteStudio.net",
            "description": "Wikipedia page creation and web development agency.",
            "serviceType": ["Wikipedia Page Creation", "Web Development", "UI/UX Design", "Workflow Automation"]
          }`}
        </script>
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#FAF9F6] to-amber-50/30 pt-28 pb-12 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-semibold text-amber-700 uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
                Wikipedia Services · Web Development
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-none animate-fade-in">
                Your Wikipedia Presence.{' '}
                <span className="text-gold-gradient drop-shadow-sm font-extrabold block">
                  Your Digital Product.
                </span>
                <span className="text-3xl md:text-4xl font-bold text-gray-500 block mt-2">One Studio.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                We establish your digital credibility via Wikipedia <span className="font-semibold text-amber-700">and</span> build the high-performance web solutions that power your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={() => onNavigate('services-wikipedia')}
                  className="px-7 py-4 bg-black text-amber-400 hover:text-amber-300 border border-amber-500/30 rounded-lg font-semibold text-base hover:bg-zinc-900 transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
                >
                  <span>Explore Wikipedia Services</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('services-webdev')}
                  className="px-7 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold text-base hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
                >
                  <span>Explore Web Development</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right: Globe */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="absolute w-72 h-72 bg-amber-500/5 rounded-full filter blur-3xl -z-10 animate-pulse" />
              <WikipediaGlobe />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/80 border border-amber-500/10 backdrop-blur-sm rounded-2xl gold-shadow">
                <p className="text-3xl font-extrabold text-amber-600 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Interactive Workflow */}
          <div className="bg-white/80 border border-amber-500/10 backdrop-blur-sm rounded-2xl p-8 gold-shadow max-w-5xl mx-auto mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
              <h3 className="text-sm font-semibold tracking-wider text-amber-800 uppercase">
                Our Process
              </h3>
              <div className="flex gap-2">
                {(['wikipedia', 'webdev'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => { setActiveWorkflow(type); setCurrentStep(0); }}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                      activeWorkflow === type
                        ? 'bg-black text-amber-400 border border-amber-500/30'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {type === 'wikipedia' ? 'Wikipedia' : 'Web Dev'}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 w-full">
              {activeSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                  <div
                    className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-500 text-center w-full md:w-auto text-sm ${
                      index === currentStep
                        ? 'bg-black text-amber-400 border border-amber-500/50 scale-105 md:scale-110 shadow-lg'
                        : index < currentStep
                        ? 'bg-amber-500/10 text-amber-700 border border-amber-500/10'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {step}
                  </div>
                  {index < activeSteps.length - 1 && (
                    <>
                      <ArrowRight className={`hidden md:block w-5 h-5 mx-1 transition-colors duration-500 flex-shrink-0 ${index < currentStep ? 'text-amber-500' : 'text-gray-300'}`} />
                      <ArrowDown className={`block md:hidden w-5 h-5 my-1 transition-colors duration-500 ${index < currentStep ? 'text-amber-500' : 'text-gray-300'}`} />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DUAL SERVICES GRID ===== */}
      <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Two Pillars. One Studio.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Whether you need an authoritative Wikipedia presence or a custom digital product — we deliver both with the same level of precision.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              {/* Wikipedia Column */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Wikipedia Services</h3>
                    <p className="text-sm text-amber-700 font-medium">Credibility · Compliance · Presence</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {wikibenefits.map((benefit, index) => (
                    <AnimatedSection key={index} delay={index * 80}>
                      <div className="group p-6 bg-[#FAF9F6] border border-transparent rounded-2xl hover:bg-white hover:border-amber-500/10 transition-all duration-300 cursor-pointer gold-shadow-hover">
                        <benefit.icon className="w-9 h-9 text-amber-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="text-base font-bold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                <button
                  onClick={() => onNavigate('services-wikipedia')}
                  className="mt-8 w-full py-4 bg-black text-amber-400 border border-amber-500/20 rounded-xl font-semibold hover:bg-zinc-900 hover:text-amber-300 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  View Wikipedia Services <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Web Dev Column */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Web Development</h3>
                    <p className="text-sm text-amber-700 font-medium">React · Node.js · MongoDB · Tailwind</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {devBenefits.map((benefit, index) => (
                    <AnimatedSection key={index} delay={index * 80}>
                      <div className="group p-6 bg-[#FAF9F6] border border-transparent rounded-2xl hover:bg-white hover:border-amber-500/10 transition-all duration-300 cursor-pointer gold-shadow-hover">
                        <benefit.icon className="w-9 h-9 text-amber-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="text-base font-bold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                <button
                  onClick={() => onNavigate('services-webdev')}
                  className="mt-8 w-full py-4 bg-white text-black border-2 border-black rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  View Web Dev Services <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== PROCESS (dual) ===== */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-br from-zinc-950 to-black text-white border-t border-b border-amber-500/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                How We Work
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Two streamlined workflows, both built for quality and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Wikipedia Process */}
              <div>
                <h3 className="text-xl font-extrabold text-amber-400 mb-6 tracking-tight flex items-center gap-2">
                  <FileCheck className="w-6 h-6" /> Wikipedia Process
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Notability Check', description: 'Expert review of eligibility based on Wikipedia criteria' },
                    { step: '2', title: 'Research', description: 'Comprehensive collection of reliable secondary sources' },
                    { step: '3', title: 'Draft Creation', description: 'Professional writing in neutral, encyclopedic tone' },
                    { step: '4', title: 'Submission', description: 'Strategic publishing following Wikipedia best practices' },
                    { step: '5', title: 'Monitoring', description: 'Ongoing updates and protection against deletion risks' },
                  ].map((item, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/20 rounded-2xl p-5 transition-all duration-300">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 text-black rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Web Dev Process */}
              <div>
                <h3 className="text-xl font-extrabold text-amber-400 mb-6 tracking-tight flex items-center gap-2">
                  <Code2 className="w-6 h-6" /> Web Development Process
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Discovery', description: 'Deep-dive into your business goals, users, and technical requirements' },
                    { step: '2', title: 'Design', description: 'Wireframes, UI mockups, and interactive prototypes for your approval' },
                    { step: '3', title: 'Development', description: 'Clean, scalable code built with modern technologies and best practices' },
                    { step: '4', title: 'Testing', description: 'Thorough QA across devices, browsers, and performance benchmarks' },
                    { step: '5', title: 'Deployment', description: 'Smooth launch, handover documentation, and post-launch support' },
                  ].map((item, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/20 rounded-2xl p-5 transition-all duration-300">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 text-black rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== CTA ===== */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-br from-zinc-950 to-black text-white text-center border-t border-amber-500/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether it's a Wikipedia page, a custom web application, or both — let's make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
              >
                Book a Free Consultation <ArrowRight className="w-6 h-6" />
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
