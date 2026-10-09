import { useState } from 'react';
import { ChevronDown, HelpCircle, BookOpen, Code2, Layers, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

interface FAQProps {
  onNavigate: (page: string) => void;
}

type FAQCategory = 'all' | 'wikipedia' | 'webdev';

interface FAQItem {
  question: string;
  answer: string;
  category: 'wikipedia' | 'webdev';
}

export default function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<FAQCategory>('all');

  const faqs: FAQItem[] = [
    // Wikipedia FAQs
    {
      category: 'wikipedia',
      question: 'Can anyone have a Wikipedia page?',
      answer:
        'No. Only subjects with significant coverage from reliable sources can be approved. Wikipedia has strict notability guidelines that require substantial third-party coverage in reputable publications. Our notability assessment service can determine if you qualify before undertaking any drafting.',
    },
    {
      category: 'wikipedia',
      question: 'How long does it take to create a Wikipedia page?',
      answer:
        'Typically 2–6 weeks depending on research availability and review times. The timeline includes comprehensive research (1-2 weeks), professional writing and citation (1-2 weeks), and submission/review process (1-2 weeks). Complex subjects with extensive coverage may take longer to ensure thoroughness.',
    },
    {
      category: 'wikipedia',
      question: 'Can you update an existing Wikipedia page?',
      answer:
        'Yes, we offer rewrite and maintenance plans for existing Wikipedia pages. Whether your page needs better citations, content updates, neutrality improvements, or structure optimization, our team can enhance it to meet current Wikipedia standards. We also offer ongoing monitoring to keep your page current.',
    },
    {
      category: 'wikipedia',
      question: 'How much does it cost to create a Wikipedia page?',
      answer:
        'Pricing varies based on the complexity of the subject, amount of research required, and turnaround time needed. We offer different service tiers from basic notability assessment to full-service creation and ongoing monitoring. Contact us for a personalized quote based on your specific needs.',
    },
    {
      category: 'wikipedia',
      question: 'What makes your sources "reliable" for Wikipedia?',
      answer:
        'Wikipedia requires secondary sources from independent, reputable publications with editorial oversight. This includes major newspapers, magazines, academic journals, books from established publishers, and recognized industry publications. We avoid blogs, press releases, social media, and other sources that Wikipedia considers unreliable.',
    },
    {
      category: 'wikipedia',
      question: 'Can I write my own Wikipedia page?',
      answer:
        'Wikipedia strongly discourages subjects from writing their own pages due to conflict of interest (COI). Articles written by subjects often contain promotional language, lack neutrality, and violate guidelines. Even if technically allowed, self-written pages face much higher scrutiny and deletion rates. Professional editing ensures compliance and objectivity.',
    },

    // Web Development FAQs
    {
      category: 'webdev',
      question: 'What technologies and frameworks do you use for web development?',
      answer:
        'We specialize in modern full-stack architectures, primarily the MERN stack (MongoDB, Express.js, React, Node.js) paired with TypeScript and Tailwind CSS. We also build with Next.js, Vite, PostgreSQL, REST/GraphQL APIs, and headless integrations according to project requirements.',
    },
    {
      category: 'webdev',
      question: 'Do you build custom web apps or rely on pre-made templates?',
      answer:
        'We build custom solutions from scratch. Every application is engineered according to your exact product logic, database schemas, and UX wireframes. This guarantees zero bloat, high performance, top-tier security, and complete flexibility for scaling your business.',
    },
    {
      category: 'webdev',
      question: 'How does the web development lifecycle work from start to finish?',
      answer:
        'We adhere to a streamlined 5-stage lifecycle: Discovery & Technical Scoping → UI/UX Prototyping → Agile Development Sprints → Quality Assurance & Cross-Browser Testing → Deployment & Knowledge Handover. You receive milestone demos and continuous updates throughout each phase.',
    },
    {
      category: 'webdev',
      question: 'Can you automate our business workflows and email systems?',
      answer:
        'Yes. We build custom webhook handlers, background worker queues, transactional email automation (via SendGrid, Resend, or AWS SES), and multi-platform integrations with payment providers (Stripe) and CRMs to automate your recurring workflows.',
    },
    {
      category: 'webdev',
      question: 'Do you offer ongoing website maintenance and support post-launch?',
      answer:
        'Yes, we provide ongoing retainer plans covering routine software updates, security patches, performance optimization, database backups, uptime monitoring, and priority feature enhancements.',
    },
    {
      category: 'webdev',
      question: 'Can I combine Wikipedia services with a new web development project?',
      answer:
        'Yes! Many founders, brands, and public figures partner with InkbyteStudio as their all-in-one digital studio — establishing public authority with an encyclopedic Wikipedia article while launching high-performance web platforms and landing systems.',
    },
  ];

  const filteredFaqs = activeTab === 'all' ? faqs : faqs.filter((faq) => faq.category === activeTab);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#FAF9F6] to-amber-50/20 pt-24 pb-12">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>FAQ | InkbyteStudio – Wikipedia & Web Development Questions</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Wikipedia page creation, notability assessments, and custom web development services at InkbyteStudio."
        />
        <link rel="canonical" href="https://InkbyteStudio.net/faq" />

        {/* Open Graph */}
        <meta property="og:title" content="FAQ | InkbyteStudio" />
        <meta
          property="og:description"
          content="Find answers to all your questions regarding Wikipedia pages and full-stack web development services."
        />
        <meta property="og:url" content="https://InkbyteStudio.net/faq" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "InkbyteStudio Comprehensive FAQ",
            "description": "Frequently Asked Questions about professional Wikipedia services and web development solutions."
          }
        `}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find detailed answers about our Wikipedia publishing process and custom web engineering capabilities.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => { setActiveTab('all'); setOpenIndex(0); }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'all'
                  ? 'bg-black text-amber-400 border border-amber-500/30 shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-500/20 hover:text-amber-700 gold-shadow'
              }`}
            >
              <Layers className="w-4 h-4" />
              All Questions ({faqs.length})
            </button>
            <button
              onClick={() => { setActiveTab('wikipedia'); setOpenIndex(0); }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'wikipedia'
                  ? 'bg-black text-amber-400 border border-amber-500/30 shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-500/20 hover:text-amber-700 gold-shadow'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Wikipedia Services ({faqs.filter(f => f.category === 'wikipedia').length})
            </button>
            <button
              onClick={() => { setActiveTab('webdev'); setOpenIndex(0); }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'webdev'
                  ? 'bg-black text-amber-400 border border-amber-500/30 shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-500/20 hover:text-amber-700 gold-shadow'
              }`}
            >
              <Code2 className="w-4 h-4" />
              Web Development ({faqs.filter(f => f.category === 'webdev').length})
            </button>
          </div>
        </AnimatedSection>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto mb-16">
          {filteredFaqs.map((faq, index) => (
            <AnimatedSection key={faq.question} delay={index * 40}>
              <div className="mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full bg-white border border-amber-500/10 rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-300 group gold-shadow"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                        faq.category === 'wikipedia'
                          ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}>
                        {faq.category === 'wikipedia' ? 'Wikipedia' : 'Web Dev'}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors flex-1">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index
                        ? 'max-h-96 opacity-100 mt-4'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg pl-1">
                      {faq.answer}
                    </p>
                  </div>
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimatedSection delay={300}>
          <div className="bg-gradient-to-br from-zinc-950 to-black border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Still Have Unanswered Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team can provide tailored answers and strategic recommendations for your specific goals.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
