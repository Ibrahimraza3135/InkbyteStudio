import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, BookOpen, Code2, Briefcase } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicesActive = ['services', 'services-wikipedia', 'services-webdev'].includes(currentPage);

  const pageMeta: Record<string, { title: string; description: string }> = {
    home: {
      title: 'InkbyteStudio – Wikipedia & Web Development Agency',
      description: 'Dual-pillar digital studio: expert Wikipedia page creation and high-performance web development solutions.',
    },
    services: {
      title: 'Our Services – InkbyteStudio',
      description: 'Wikipedia services and web development solutions from a full-service digital agency.',
    },
    'services-wikipedia': {
      title: 'Wikipedia Services – InkbyteStudio',
      description: 'Notability assessment, Wikipedia page creation, upgrades, and ongoing maintenance.',
    },
    'services-webdev': {
      title: 'Web Development Services – InkbyteStudio',
      description: 'Custom web apps, MERN full-stack solutions, UI/UX design, and automation systems.',
    },
    portfolio: {
      title: 'Portfolio & Case Studies – InkbyteStudio',
      description: 'Browse our Wikipedia deployments and web development projects.',
    },
    why: {
      title: 'Why Hire Experts – InkbyteStudio',
      description: 'Expert guidance to maximize your Wikipedia page survival and credibility.',
    },
    faq: {
      title: 'FAQ – InkbyteStudio',
      description: 'Frequently asked questions about Wikipedia page creation, web development and our services.',
    },
    about: {
      title: 'About InkbyteStudio',
      description: 'Learn about our mission, team, and core values.',
    },
    contact: {
      title: 'Contact InkbyteStudio',
      description: 'Book a free consultation for Wikipedia or web development services.',
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageMeta[currentPage]?.title || 'InkbyteStudio'}</title>
        <meta name="description" content={pageMeta[currentPage]?.description || ''} />
        <link rel="canonical" href={`https://InkbyteStudio.net/${currentPage === 'home' ? '' : currentPage}`} />
        <meta property="og:title" content={pageMeta[currentPage]?.title} />
        <meta property="og:description" content={pageMeta[currentPage]?.description} />
        <meta property="og:url" content={`https://InkbyteStudio.net/${currentPage === 'home' ? '' : currentPage}`} />
      </Helmet>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 border-b border-amber-500/10 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="text-2xl font-extrabold text-black hover:text-amber-600 transition-colors tracking-tight flex items-center gap-2.5"
            >
              <img src="/logo.png" alt="InkbyteStudio logo" className="w-8 h-8 rounded-full shadow-sm" />
              <span>Inkbyte<span className="text-amber-600">Studio</span></span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 items-center">
              <button
                onClick={() => onNavigate('home')}
                className={`text-sm font-semibold transition-all duration-300 py-1 ${
                  currentPage === 'home'
                    ? 'text-amber-600 border-b-2 border-amber-500'
                    : isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-900 hover:text-amber-600'
                }`}
              >
                Home
              </button>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  className={`text-sm font-semibold transition-all duration-300 py-1 flex items-center gap-1 ${
                    isServicesActive
                      ? 'text-amber-600 border-b-2 border-amber-500'
                      : isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-900 hover:text-amber-600'
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-amber-500/10 rounded-2xl shadow-2xl gold-shadow py-2 z-50"
                  >
                    <div className="px-3 pt-2 pb-1">
                      <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest mb-1">Our Services</p>
                    </div>

                    <button
                      onClick={() => { onNavigate('services'); setIsServicesOpen(false); }}
                      className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-amber-500/5 transition-colors group"
                    >
                      <div className="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                        <Briefcase className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">All Services</p>
                        <p className="text-xs text-gray-500">Overview of everything we offer</p>
                      </div>
                    </button>

                    <div className="border-t border-gray-100 mx-3 my-1" />

                    <button
                      onClick={() => { onNavigate('services-wikipedia'); setIsServicesOpen(false); }}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-amber-500/5 transition-colors group ${currentPage === 'services-wikipedia' ? 'bg-amber-500/5' : ''}`}
                    >
                      <div className="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                        <BookOpen className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Wikipedia Services</p>
                        <p className="text-xs text-gray-500">Creation, upgrades & monitoring</p>
                      </div>
                    </button>

                    <button
                      onClick={() => { onNavigate('services-webdev'); setIsServicesOpen(false); }}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-amber-500/5 transition-colors group ${currentPage === 'services-webdev' ? 'bg-amber-500/5' : ''}`}
                    >
                      <div className="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                        <Code2 className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Web Development</p>
                        <p className="text-xs text-gray-500">MERN, React, UI/UX & automation</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {[
                { name: 'Portfolio', page: 'portfolio' },
                { name: 'Why Us', page: 'why' },
                { name: 'About', page: 'about' },
                { name: 'FAQ', page: 'faq' },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`text-sm font-semibold transition-all duration-300 py-1 ${
                    currentPage === item.page
                      ? 'text-amber-600 border-b-2 border-amber-500'
                      : isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-900 hover:text-amber-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => onNavigate('contact')}
                className="ml-2 px-5 py-2.5 bg-black text-amber-400 border border-amber-500/30 rounded-lg text-sm font-bold hover:bg-zinc-900 hover:text-amber-300 transition-all duration-300 hover:scale-105"
              >
                Book Consultation
              </button>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black hover:text-amber-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 py-4 bg-white border border-amber-500/10 rounded-lg shadow-lg">
              {[
                { name: 'Home', page: 'home' },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => { onNavigate(item.page); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${
                    currentPage === item.page
                      ? 'text-amber-600 bg-amber-500/5'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-500/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Services accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`w-full text-left px-4 py-2 text-sm font-semibold transition-colors flex justify-between items-center ${
                    isServicesActive ? 'text-amber-600 bg-amber-500/5' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-500/5'
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="bg-amber-500/3 border-l-2 border-amber-500/20 ml-4">
                    {[
                      { name: '· All Services', page: 'services' },
                      { name: '· Wikipedia Services', page: 'services-wikipedia' },
                      { name: '· Web Development', page: 'services-webdev' },
                    ].map((item) => (
                      <button
                        key={item.page}
                        onClick={() => { onNavigate(item.page); setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                        className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${
                          currentPage === item.page
                            ? 'text-amber-600 bg-amber-500/5'
                            : 'text-gray-600 hover:text-amber-600 hover:bg-amber-500/5'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {[
                { name: 'Portfolio', page: 'portfolio' },
                { name: 'Why Us', page: 'why' },
                { name: 'About', page: 'about' },
                { name: 'FAQ', page: 'faq' },
                { name: 'Contact', page: 'contact' },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => { onNavigate(item.page); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${
                    currentPage === item.page
                      ? 'text-amber-600 bg-amber-500/5'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-500/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
