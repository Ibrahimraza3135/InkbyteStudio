import { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle, Code2, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    serviceInterest: 'wikipedia-creation',
    budget: '$1,000 - $3,000',
    coverage: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        serviceInterest: 'wikipedia-creation',
        budget: '$1,000 - $3,000',
        coverage: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#FAF9F6] to-amber-50/20 pt-24 pb-12">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Contact & Consultation | InkbyteStudio</title>
        <meta
          name="description"
          content="Get in touch with InkbyteStudio for Wikipedia page creation, notability assessments, and custom web development solutions."
        />
        <link rel="canonical" href="https://InkbyteStudio.net/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact & Consultation | InkbyteStudio" />
        <meta
          property="og:description"
          content="Book a consultation for Wikipedia services or request a custom web development quote."
        />
        <meta property="og:url" content="https://InkbyteStudio.net/contact" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact InkbyteStudio",
            "description": "Consultation booking and quote request page for Wikipedia and Web Development services."
          }
        `}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-semibold text-amber-700 uppercase tracking-widest mb-6">
              <Mail className="w-4 h-4" />
              Book a Consultation · Request a Quote
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight animate-fade-in">
              Let's Build Your{' '}
              <span className="text-gold-gradient font-extrabold">Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you need Wikipedia notability evaluation, encyclopedic drafting, or a full-stack custom web application, we're here to help you succeed.
            </p>
          </div>
        </AnimatedSection>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={100}>
            <div className="bg-white border border-transparent rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-amber-500/10 transition-all duration-300 transform hover:-translate-y-2 group gold-shadow">
              <Mail className="w-12 h-12 text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Email</h3>
              <a
                href="mailto:info@inkbytestudio.net"
                className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
              >
                info@inkbytestudio.net
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Fast responses within 24 hours guaranteed
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-white border border-transparent rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-amber-500/10 transition-all duration-300 transform hover:-translate-y-2 group gold-shadow">
              <MapPin className="w-12 h-12 text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Operations</h3>
              <p className="text-gray-700 font-semibold mb-1">Worldwide Remote Studio</p>
              <p className="text-sm text-gray-500">
                Serving individuals, founders & agencies globally
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-white border border-transparent rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-amber-500/10 transition-all duration-300 transform hover:-translate-y-2 group gold-shadow">
              <Clock className="w-12 h-12 text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Business Hours
              </h3>
              <p className="text-gray-700 font-semibold mb-1">Monday – Friday</p>
              <p className="text-sm text-gray-500">10:00 AM – 6:00 PM GMT</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Lead Capture Form & Consultation Section */}
        <AnimatedSection delay={400}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-amber-500/10 shadow-2xl gold-shadow mb-16">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                Project Consultation & Quote Request
              </h2>
              <p className="text-gray-600 text-lg">
                Fill in the details below and we will get back to you with a preliminary assessment.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 text-center animate-fade-in">
                <CheckCircle className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Submitted Successfully!</h3>
                <p className="text-gray-700 max-w-md mx-auto mb-4">
                  Thank you for reaching out. An InkbyteStudio specialist will review your details and contact you within 24 hours.
                </p>
                <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider">
                  Check your inbox for our confirmation email
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alexander Vance"
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-gray-900 text-sm transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Work / Personal Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alexander@domain.com"
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-gray-900 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service Interest */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Primary Service Interest *
                    </label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-gray-900 text-sm transition-all"
                    >
                      <optgroup label="Wikipedia Services">
                        <option value="wikipedia-notability">Wikipedia Notability Assessment (6–12 hrs)</option>
                        <option value="wikipedia-creation">Wikipedia Page Creation (Full Service)</option>
                        <option value="wikipedia-rewrite">Wikipedia Page Upgrade & Rewrite</option>
                        <option value="wikipedia-monitoring">Wikipedia Monitoring & Maintenance</option>
                      </optgroup>
                      <optgroup label="Web Development Services">
                        <option value="webdev-custom-app">Custom Web Application Development</option>
                        <option value="webdev-mern">Full-Stack MERN Solution</option>
                        <option value="webdev-uiux">UI/UX Design & Responsive Layouts</option>
                        <option value="webdev-automation">Workflow & Email Automation Systems</option>
                        <option value="webdev-api">API Integration Suite</option>
                      </optgroup>
                      <optgroup label="Comprehensive / Other">
                        <option value="both-services">Both Wikipedia & Web Development</option>
                        <option value="general-inquiry">General Consultation</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Estimated Project Budget *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-gray-900 text-sm transition-all"
                    >
                      <option value="under-$1000">&lt; $1,000 (Assessment or Minor Tasks)</option>
                      <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 – $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 – $10,000</option>
                      <option value="$10,000+">$10,000+ (Enterprise / Full Product Build)</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Subject / Project Name *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Wikipedia Page for Biotech CEO or MERN Customer Portal"
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-gray-900 text-sm transition-all"
                  />
                </div>

                {/* Coverage / Links or Scope */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Relevant Links / Press Coverage or Technical Scope (Optional)
                  </label>
                  <input
                    type="text"
                    name="coverage"
                    value={formData.coverage}
                    onChange={handleChange}
                    placeholder="Links to news features, existing draft, Figma design, or reference web app"
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-gray-900 text-sm transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Project Details / Specific Goals *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements, timeline, target audience, or any specific constraints..."
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-gray-900 text-sm transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-black text-amber-400 hover:text-amber-300 border border-amber-500/30 rounded-xl font-bold text-lg hover:bg-zinc-900 transition-all duration-300 transform hover:scale-102 shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                      <span>Processing Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>

        {/* Dual Pillar What Happens Next Callout */}
        <AnimatedSection delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Wikipedia next steps */}
            <div className="bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-amber-700" />
                <h3 className="font-bold text-lg text-gray-900">
                  Wikipedia Inquiry Pathway
                </h3>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>We analyze third-party secondary coverage within 24 hours</li>
                <li>Conduct a preliminary Wikipedia notability assessment</li>
                <li>Discuss notability score, citation density, and compliance</li>
                <li>Draft encyclopedic content complying with neutral POV</li>
              </ol>
            </div>

            {/* Web Dev next steps */}
            <div className="bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-5 h-5 text-amber-700" />
                <h3 className="font-bold text-lg text-gray-900">
                  Web Dev Inquiry Pathway
                </h3>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>Review feature requirements and technology stack needs</li>
                <li>Deliver architectural estimate, milestones, and timeline</li>
                <li>Prepare sprint roadmap (Design → Dev → QA → Launch)</li>
                <li>Kick off development with weekly milestone demos</li>
              </ol>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
