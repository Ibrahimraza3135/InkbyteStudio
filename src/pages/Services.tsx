import { BookOpen, Code2, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#FAF9F6] to-amber-50/20 pt-24 pb-12">
      <Helmet>
        <title>Services | InkbyteStudio – Wikipedia & Web Development</title>
        <meta name="description" content="InkbyteStudio offers two core service pillars: professional Wikipedia services and full-stack web development solutions." />
        <link rel="canonical" href="https://InkbyteStudio.net/services" />
        <meta property="og:title" content="Services | InkbyteStudio" />
        <meta property="og:description" content="Expert Wikipedia services and web development — two pillars, one studio." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              What We Do For You
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              InkbyteStudio operates across two specialized service pillars — designed to build your credibility and power your digital presence.
            </p>
          </div>
        </AnimatedSection>

        {/* Two Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Wikipedia Card */}
          <AnimatedSection delay={100}>
            <div className="group bg-white rounded-3xl p-10 border border-amber-500/10 hover:border-amber-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 gold-shadow h-full flex flex-col">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-9 h-9 text-amber-600" />
              </div>

              <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">Wikipedia Services</h2>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-4">Credibility · Compliance · Presence</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                We handle every aspect of your Wikipedia journey — from assessing your notability to writing, submitting, and maintaining your article in full compliance with Wikipedia's strict editorial standards.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Notability Assessment (6–12 hours)',
                  'Full Wikipedia Page Creation',
                  'Page Upgrades & Rewrites',
                  'Ongoing Monitoring & Maintenance',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onNavigate('services-wikipedia')}
                className="w-full py-4 bg-black text-amber-400 border border-amber-500/20 rounded-xl font-bold text-lg hover:bg-zinc-900 hover:text-amber-300 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Explore Wikipedia Services <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>

          {/* Web Dev Card */}
          <AnimatedSection delay={200}>
            <div className="group bg-white rounded-3xl p-10 border border-amber-500/10 hover:border-amber-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 gold-shadow h-full flex flex-col">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Code2 className="w-9 h-9 text-amber-600" />
              </div>

              <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">Web Development</h2>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-4">React · Node.js · MongoDB · Automation</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                From custom web applications to workflow automation systems — we engineer digital products that are fast, scalable, and built to last, using the modern MERN stack and industry best practices.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Custom Web Application Development',
                  'Full-Stack MERN Solutions',
                  'Responsive UI/UX Design',
                  'Workflow & Email Automation Systems',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onNavigate('services-webdev')}
                className="w-full py-4 bg-white text-black border-2 border-black rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Explore Web Dev Services <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Not Sure CTA */}
        <AnimatedSection delay={200}>
          <div className="text-center bg-white border border-amber-500/10 rounded-3xl p-12 shadow-xl gold-shadow">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your goals and find the right solution — Wikipedia, web development, or both.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-black text-amber-400 hover:text-amber-300 border border-amber-500/20 rounded-lg font-semibold text-lg hover:bg-zinc-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
