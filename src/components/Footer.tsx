import { Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "InkbyteStudio",
            "url": "https://InkbyteStudio.net",
            "sameAs": [
              "https://www.facebook.com/InkbyteStudio",
              "https://twitter.com/InkbyteStudio",
              "https://www.linkedin.com/company/InkbyteStudio"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@inkbytestudio.net",
              "contactType": "customer support",
              "availableLanguage": "English"
            }
          })}
        </script>
      </Helmet>

      <footer className="bg-black text-gray-400 border-t border-amber-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight flex items-center gap-2.5">
                <img src="/logo.png" alt="InkbyteStudio logo" className="w-6 h-6 rounded-full" />
                <span>Inkbyte<span className="text-amber-600">Studio</span></span>
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                A dual-pillar digital agency — expert Wikipedia services and high-performance web development, all under one roof.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="mailto:info@inkbytestudio.net"
                  className="p-2 bg-zinc-900 border border-amber-500/20 text-amber-500 rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300 transform hover:scale-110"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Wikipedia Services */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Wikipedia Services</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Notability Assessment', page: 'services-wikipedia' },
                  { label: 'Page Creation', page: 'services-wikipedia' },
                  { label: 'Page Upgrades', page: 'services-wikipedia' },
                  { label: 'Monitoring & Maintenance', page: 'services-wikipedia' },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => onNavigate(item.page)}
                      className="text-sm hover:text-amber-400 transition-colors duration-300 text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Web Development */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Web Development</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Custom Web Apps', page: 'services-webdev' },
                  { label: 'Full-Stack MERN', page: 'services-webdev' },
                  { label: 'UI/UX Design', page: 'services-webdev' },
                  { label: 'Workflow Automation', page: 'services-webdev' },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => onNavigate(item.page)}
                      className="text-sm hover:text-amber-400 transition-colors duration-300 text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links + Contact */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Company</h4>
              <ul className="space-y-2 mb-6">
                {[
                  { label: 'Portfolio', page: 'portfolio' },
                  { label: 'Why Us', page: 'why' },
                  { label: 'About', page: 'about' },
                  { label: 'FAQ', page: 'faq' },
                  { label: 'Contact', page: 'contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => onNavigate(item.page)}
                      className="text-sm hover:text-amber-400 transition-colors duration-300 text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500">
                <span className="text-gray-400 font-medium">Email:</span>{' '}
                <a href="mailto:info@inkbytestudio.net" className="hover:text-amber-400 transition-colors">
                  info@inkbytestudio.net
                </a>
              </p>
              <p className="text-xs text-gray-500 mt-1">Mon–Fri: 10 AM – 6 PM GMT</p>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500">&copy; {currentYear} InkbyteStudio. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">Built with</span>
              {['React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="text-xs px-2 py-0.5 bg-zinc-900 border border-amber-500/10 text-amber-600/70 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
