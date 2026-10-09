import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import WikipediaServices from './pages/WikipediaServices';
import WebDevServices from './pages/WebDevServices';
import Portfolio from './pages/Portfolio';
import Why from './pages/Why';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titleMap: Record<string, string> = {
      home: 'InkbyteStudio – Wikipedia & Web Development Agency',
      services: 'Our Services – InkbyteStudio',
      'services-wikipedia': 'Wikipedia Services – InkbyteStudio',
      'services-webdev': 'Web Development Services – InkbyteStudio',
      portfolio: 'Portfolio & Case Studies – InkbyteStudio',
      why: 'Why Hire Experts – InkbyteStudio',
      faq: 'FAQ – InkbyteStudio',
      about: 'About Us – InkbyteStudio',
      contact: 'Contact – InkbyteStudio',
    };
    document.title = titleMap[currentPage] || 'InkbyteStudio';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'services-wikipedia':
        return <WikipediaServices onNavigate={handleNavigate} />;
      case 'services-webdev':
        return <WebDevServices onNavigate={handleNavigate} />;
      case 'portfolio':
        return <Portfolio onNavigate={handleNavigate} />;
      case 'why':
        return <Why onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQ onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
