import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Code, 
  Train, 
  Bus,
  Landmark,
  Clock,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Award,
  Target,
  Sparkles,
  Map,
  Upload,
  Download,
  Share2,
  Camera,
  RefreshCw
} from 'lucide-react';

// Heritage Tram SVG Component
const HeritageTram = () => (
  <svg 
    viewBox="0 0 800 400" 
    className="absolute inset-0 w-full h-full opacity-[0.08]"
    preserveAspectRatio="xMidYMid slice"
    style={{
      transform: 'scale(1.2)',
    }}
  >
    {/* Tram Body */}
    <g stroke="#6B4423" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Main body rectangle */}
      <rect x="200" y="150" width="400" height="180" rx="8" />
      
      {/* Roof */}
      <path d="M 190 150 L 200 140 L 600 140 L 610 150" />
      <line x1="200" y1="140" x2="600" y2="140" />
      
      {/* Roof details - trolley pole */}
      <line x1="400" y1="140" x2="400" y2="100" />
      <circle cx="400" cy="95" r="8" />
      <line x1="395" y1="95" x2="350" y2="60" strokeWidth="2" />
      
      {/* Windows - Upper row */}
      <rect x="220" y="165" width="60" height="50" rx="3" />
      <rect x="290" y="165" width="60" height="50" rx="3" />
      <rect x="360" y="165" width="60" height="50" rx="3" />
      <rect x="430" y="165" width="60" height="50" rx="3" />
      <rect x="500" y="165" width="60" height="50" rx="3" />
      
      {/* Window dividers */}
      <line x1="250" y1="165" x2="250" y2="215" strokeWidth="2" />
      <line x1="320" y1="165" x2="320" y2="215" strokeWidth="2" />
      <line x1="390" y1="165" x2="390" y2="215" strokeWidth="2" />
      <line x1="460" y1="165" x2="460" y2="215" strokeWidth="2" />
      <line x1="530" y1="165" x2="530" y2="215" strokeWidth="2" />
      
      {/* Lower section - doors and panels */}
      <rect x="220" y="235" width="80" height="90" rx="3" />
      <rect x="320" y="235" width="160" height="90" rx="3" />
      <rect x="500" y="235" width="80" height="90" rx="3" />
      
      {/* Door details */}
      <line x1="260" y1="235" x2="260" y2="325" strokeWidth="2" />
      <line x1="400" y1="235" x2="400" y2="325" strokeWidth="2" />
      <line x1="540" y1="235" x2="540" y2="325" strokeWidth="2" />
      
      {/* Tram number plate */}
      <rect x="360" y="300" width="80" height="20" rx="2" fill="#6B4423" fillOpacity="0.3" />
      <text x="400" y="314" fontSize="12" fill="#6B4423" textAnchor="middle" fontFamily="serif" fontWeight="bold">393</text>
      
      {/* Front window */}
      <path d="M 585 165 Q 595 165 600 175 L 600 210 Q 595 220 585 220 Z" />
      
      {/* Headlight */}
      <circle cx="590" cy="250" r="8" fill="#6B4423" fillOpacity="0.2" />
      
      {/* Decorative lines */}
      <line x1="200" y1="230" x2="600" y2="230" strokeWidth="2" />
      <line x1="205" y1="328" x2="595" y2="328" strokeWidth="2" />
      
      {/* Wheels */}
      <circle cx="270" cy="345" r="25" strokeWidth="4" />
      <circle cx="270" cy="345" r="12" strokeWidth="2" />
      <circle cx="530" cy="345" r="25" strokeWidth="4" />
      <circle cx="530" cy="345" r="12" strokeWidth="2" />
      
      {/* Wheel spokes */}
      <line x1="270" y1="320" x2="270" y2="370" strokeWidth="2" />
      <line x1="245" y1="345" x2="295" y2="345" strokeWidth="2" />
      <line x1="530" y1="320" x2="530" y2="370" strokeWidth="2" />
      <line x1="505" y1="345" x2="555" y2="345" strokeWidth="2" />
      
      {/* Undercarriage */}
      <line x1="220" y1="330" x2="580" y2="330" strokeWidth="3" />
      <line x1="240" y1="330" x2="240" y2="343" strokeWidth="2" />
      <line x1="300" y1="330" x2="300" y2="343" strokeWidth="2" />
      <line x1="500" y1="330" x2="500" y2="343" strokeWidth="2" />
      <line x1="560" y1="330" x2="560" y2="343" strokeWidth="2" />
      
      {/* Rails beneath */}
      <line x1="100" y1="370" x2="700" y2="370" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="375" x2="700" y2="375" strokeWidth="2" opacity="0.6" />
      
      {/* Rail ties */}
      <line x1="150" y1="368" x2="150" y2="377" strokeWidth="2" opacity="0.4" />
      <line x1="200" y1="368" x2="200" y2="377" strokeWidth="2" opacity="0.4" />
      <line x1="250" y1="368" x2="250" y2="377" strokeWidth="2" opacity="0.4" />
      <line x1="300" y1="368" x2="300" y2="377" strokeWidth="2" opacity="0.4" />
      <line x1="350" y1="368" x2="350" y2="377" strokeWidth="2" opacity="0.4" />
      <line x1="400" y1="368" x2="400" y2="377" strokeWidth="2" opacity="0.4" />
      <line x1="450" y1="368" x2="450" y2="377" strokeWidth="2" opacity="0.4" />
      <line x1="500" y1="368" x2="500" y2="377" strokeWidth="2" opacity="0.4" />
      <line x1="550" y1="368" x2="550" y2="377" strokeWidth="2" opacity="0.4" />
      <line x1="600" y1="368" x2="600" y2="377" strokeWidth="2" opacity="0.4" />
      <line x1="650" y1="368" x2="650" y2="377" strokeWidth="2" opacity="0.4" />
    </g>
  </svg>
);

// Monochrome Kolkata Icon Set (outline, currentColor)
const TaxiIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 41h44" />
    <path d="M54 41l-2-8a6 6 0 00-5.8-4.5H17.8A6 6 0 0012 33l-2 8" />
    <path d="M24 28l2-5h12l2 5" />
    <rect x="18" y="33" width="10" height="6" rx="1.5" />
    <rect x="36" y="33" width="10" height="6" rx="1.5" />
    <circle cx="20" cy="44" r="4" />
    <circle cx="48" cy="44" r="4" />
    <path d="M24 20h16" />
    <rect x="28" y="18" width="8" height="3" rx="1" />
  </svg>
);

const TramIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10h24" />
    <path d="M32 10v-4" />
    <rect x="10" y="18" width="44" height="18" rx="3" />
    <path d="M14 26h8M26 26h12M42 26h8" />
    <path d="M12 36l-2 6h44l-2-6" />
    <circle cx="20" cy="44" r="4" />
    <circle cx="44" cy="44" r="4" />
  </svg>
);

const BusIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="8" y="16" width="48" height="22" rx="4" />
    <path d="M12 38v6M52 38v6" />
    <circle cx="20" cy="46" r="4" />
    <circle cx="44" cy="46" r="4" />
    <path d="M12 22h16M32 22h20M12 28h12M28 28h24" />
  </svg>
);

const HowrahBridgeIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 46h52" />
    <path d="M8 46L20 22l24 0 12 24" />
    <path d="M14 34l12 12M26 28l10 18M38 28l10 18" />
    <path d="M6 46V40M58 46V40" />
  </svg>
);

// Ornate Border Component
const OrnateBorder = ({ children, className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-vintage-dark">
      <div className="absolute top-0 left-0 w-4 h-4 bg-vintage-gold rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-vintage-dark">
      <div className="absolute top-0 right-0 w-4 h-4 bg-vintage-gold rounded-full translate-x-1/2 -translate-y-1/2"></div>
    </div>
    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-vintage-dark">
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-vintage-gold rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </div>
    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-vintage-dark">
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-vintage-gold rounded-full translate-x-1/2 translate-y-1/2"></div>
    </div>
    {children}
  </div>
);

// Vintage Card Component
const VintageCard = ({ children, className = '' }) => (
  <div className={`aged-paper border-4 border-vintage-dark p-8 relative ${className}`}>
    <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-vintage-brown opacity-30 pointer-events-none"></div>
    {children}
  </div>
);

// Navigation
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-vintage-sepia/95 shadow-lg border-b-4 border-vintage-dark' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 border-4 border-vintage-dark bg-vintage-gold flex items-center justify-center">
              <Code className="text-vintage-dark" size={24} />
            </div>
            <div className="font-display text-2xl font-bold text-vintage-dark">
              Calcutta <span className="text-vintage-brown">&lt;Hack/&gt;</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-5 font-serif text-sm">
            {[
              { label: 'About', link: '#about' },
              { label: 'Calcutta', link: '#about-calcutta' },
              { label: 'Timeline', link: '#timeline' },
              { label: 'Tracks', link: '#tracks' },
              { label: 'Prizes', link: '#prizes' },
              { label: 'Mentors', link: '#mentors' },
              { label: 'Judges', link: '#judges' },
              { label: 'Team', link: '#team' },
              { label: 'Partners', link: '#partners' },
              { label: 'Avatar', link: '#avatar-generator' }
            ].map((item) => (
              <a 
                key={item.label}
                href={item.link}
                className="text-vintage-dark hover:text-vintage-brown transition-colors border-b-2 border-transparent hover:border-vintage-brown"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#register"
              className="bg-vintage-gold text-vintage-dark px-6 py-2 rounded-full font-bold border-2 border-vintage-gold hover:bg-vintage-sepia hover:border-vintage-gold transition-all duration-300 transform hover:scale-105"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => (
  <section className="min-h-[85vh] pt-20 md:pt-24 flex items-center justify-center relative overflow-hidden">
    {/* Biswa Bangla with Tram Background */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/assests/biswabangla with tram.png" 
            alt="Biswa Bangla with Tram" 
            className="w-full h-auto max-h-[90vh] object-contain opacity-30"
            style={{
              maxWidth: '100%',
              objectPosition: 'center center',
              marginTop: '4rem',  /* Add space for the navigation */
              marginBottom: '2rem',
              '@media (min-width: 768px)': {
                maxHeight: '80vh',
                marginTop: '5rem',
                marginBottom: '4rem'
              },
              '@media (min-width: 1024px)': {
                maxHeight: '75vh',
                marginTop: '6rem',
                marginBottom: '6rem'
              }
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-vintage-sepia/30 via-transparent to-vintage-sepia/30"></div>
      </div>
    </div>

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <OrnateBorder className="p-8 md:p-12 lg:p-16">
        <div className="aged-paper p-8 md:p-10 lg:p-12">
          <div className="flex justify-center items-start mb-6">
            <div className="inline-block border-4 border-vintage-dark px-6 py-2 bg-vintage-gold">
              <span className="font-display text-sm tracking-widest">HERITAGE • INNOVATION • EXCELLENCE</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-vintage-dark leading-tight">
              CALCUTTA
            </h1>
            <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-vintage-brown">
              &lt;HACKS/&gt;
            </div>
          </div>
          
          <div className="w-full flex justify-center mb-6">
            <div className="stamp-effect bg-vintage-sepia max-w-4xl text-center">
              <p className="font-serif text-lg md:text-xl lg:text-2xl text-vintage-dark italic px-3 py-1">
                "Where the Heritage of Calcutta Meets the Innovation of Tomorrow"
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            <div className="flex items-center gap-2 font-serif text-base md:text-lg">
              <Calendar className="text-vintage-brown flex-shrink-0" size={20} />
              <span>13-14 Dec 2025</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-vintage-dark"></div>
            <div className="flex items-center gap-2 font-serif text-base md:text-lg">
              <MapPin className="text-vintage-brown flex-shrink-0" size={20} />
              <span>Kolkata, WB</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-vintage-dark"></div>
            <div className="flex items-center gap-2 font-serif text-base md:text-lg">
              <Users className="text-vintage-brown flex-shrink-0" size={20} />
              <span>200+ Hackers</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <button className="group relative bg-vintage-dark text-vintage-sepia px-12 py-4 text-xl font-display font-bold border-4 border-vintage-dark hover:bg-vintage-brown hover:border-vintage-brown transition-all duration-300 transform hover:scale-105">
              REGISTER NOW
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" size={24} />
            </button>
            
            <a 
              href="https://devfolio.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center h-14 px-8 py-2 rounded-md overflow-hidden transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #2E2E2E 0%, #2E2E2E 100%)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                minWidth: '200px'
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#2E2E2E] via-[#5A5A5A] to-[#2E2E2E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <img 
                  src="/assests/Devfolio.png" 
                  alt="Apply with Devfolio" 
                  className="h-full w-auto max-h-10 object-contain"
                  style={{
                    maxWidth: '100%',
                    objectPosition: 'center',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
            </a>

            {/* Discord Button */}
            <a 
              href="https://discord.gg/your-discord-link" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center px-8 py-4 text-white font-display font-bold rounded-md overflow-hidden transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #5865F2 0%, #4752C4 100%)',
                boxShadow: '0 4px 20px rgba(88, 101, 242, 0.3)'
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#5865F2] via-[#6C7AFF] to-[#4752C4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="relative z-10 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.319 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.077.01c.12.098.246.198.373.292a.077.077 0 01-.008.128 12.3 12.3 0 01-1.873.892.077.077 0 00-.041.105c.36.698.772 1.362 1.225 1.993a.076.076 0 00.085.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.945-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.965 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span>Join Discord</span>
              </div>
            </a>
          </div>
        </div>
      </OrnateBorder>
    </div>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">
          ABOUT THE HACKATHON
        </h2>
        <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <VintageCard>
          <Sparkles className="text-vintage-gold mb-4" size={40} />
          <h3 className="font-display text-3xl font-bold text-vintage-dark mb-4">
            A Premium Experience
          </h3>
          <p className="font-serif text-lg text-vintage-brown leading-relaxed">
            Calcutta &lt;Hack/&gt; is India's largest heritage-meets-innovation hackathon, 
            bringing together the finest minds from across the country and beyond. Set in 
            the cultural capital of India, this event celebrates Kolkata's rich legacy while 
            pushing the boundaries of technology.
          </p>
        </VintageCard>
        
        <VintageCard>
          <Landmark className="text-vintage-brown mb-4" size={40} />
          <h3 className="font-display text-3xl font-bold text-vintage-dark mb-4">
            Calcutta's Spirit
          </h3>
          <p className="font-serif text-lg text-vintage-brown leading-relaxed">
            From the iconic yellow taxis to the historic trams, from the majestic Howrah 
            Bridge to the elegant Victoria Memorial, every element of this hackathon embodies 
            the soul of Calcutta - a perfect blend of tradition and progress.
          </p>
        </VintageCard>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { icon: TramIcon, label: 'Historic Trams', subtitle: 'First in Asia' },
          { icon: BusIcon, label: 'Blue Buses', subtitle: 'City Symbol' },
          { icon: TaxiIcon, label: 'Yellow Taxis', subtitle: 'Iconic Rides' },
          { icon: HowrahBridgeIcon, label: 'Howrah Bridge', subtitle: 'Engineering Marvel' }
        ].map((item, idx) => (
          <div key={idx} className="text-center aged-paper p-6 border-2 border-vintage-dark">
            <item.icon className="mx-auto mb-3 text-vintage-dark" size={48} />
            <div className="font-display font-bold text-vintage-dark">{item.label}</div>
            <div className="font-serif text-sm text-vintage-brown italic">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// About Calcutta - Historical Section
const AboutCalcutta = () => (
  <section id="about-calcutta" className="py-20 bg-vintage-sepia/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">
          THE CITY OF JOY: CALCUTTA
        </h2>
        <div className="w-32 h-1 bg-vintage-gold mx-auto mb-6"></div>
        <p className="font-serif text-xl text-vintage-brown italic max-w-3xl mx-auto">
          "What Bengal thinks today, India thinks tomorrow" — A testament to the intellectual and cultural influence of this magnificent city
        </p>
      </div>

      {/* Birth of a City */}
      <VintageCard className="mb-12">
        <h3 className="font-display text-3xl font-bold text-vintage-dark mb-6 border-b-2 border-vintage-dark pb-3">
          The Birth & Rise of Calcutta
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-display text-xl font-bold text-vintage-brown mb-3">Ancient Roots (14th-16th Century)</h4>
            <p className="font-serif text-vintage-brown leading-relaxed mb-4">
              Before the British arrived, Calcutta existed as three modest villages—<strong>Sutanuti, Gobindapur, and Kalikata</strong>—under the Bengal Sultanate and later the Mughal Empire after 1576. The name "Kalikata" appears in the rent-roll of Mughal Emperor Akbar (1556–1605), rooted in the goddess Kali and the rich cultural tapestry of Bengal.
            </p>
            <h4 className="font-display text-xl font-bold text-vintage-brown mb-3">British Foundation (1690)</h4>
            <p className="font-serif text-vintage-brown leading-relaxed">
              On <strong>August 24, 1690</strong>, Job Charnock of the British East India Company hoisted the Company standard on the banks of the Hooghly River, establishing a trading post. The site was strategically chosen—protected by the Hooghly to the west, a creek to the north, and salt lakes to the east. By 1701, <strong>Fort William</strong> was constructed, named after King William III, marking the beginning of British dominance in Bengal.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl font-bold text-vintage-brown mb-3">Colonial Capital (18th-19th Century)</h4>
            <p className="font-serif text-vintage-brown leading-relaxed mb-4">
              Calcutta rapidly grew into the <strong>"Second City of the British Empire"</strong> after London. By 1750, its population reached 120,000. The city became the capital of British India until 1911, earning the title <strong>"City of Palaces"</strong> for its grand architecture. Despite a devastating cyclone in 1864 that killed 60,000, Calcutta continued its relentless expansion, becoming a hub of commerce, culture, and intellectual ferment.
            </p>
            <div className="aged-paper p-4 border-2 border-vintage-dark">
              <p className="font-serif text-sm text-vintage-brown italic">
                "In Calcutta, the past and present walk hand in hand through narrow lanes and grand boulevards, where every corner whispers stories of revolution, renaissance, and resilience."
              </p>
            </div>
          </div>
        </div>
      </VintageCard>

      {/* Luminaries */}
      <div className="mb-12">
        <h3 className="font-display text-4xl font-bold text-vintage-dark mb-8 text-center">
          Luminaries of Calcutta: Architects of Modern India
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Swami Vivekananda */}
          <VintageCard className="hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-vintage-gold/20 border-2 border-vintage-dark flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🕉️</span>
              </div>
              <div>
                <h4 className="font-display text-2xl font-bold text-vintage-dark">Swami Vivekananda</h4>
                <p className="font-serif text-sm text-vintage-brown italic">(1863–1902)</p>
              </div>
            </div>
            <p className="font-serif text-vintage-brown leading-relaxed mb-3">
              Born as <strong>Narendranath Datta</strong> on January 12, 1863, at <strong>3 Gourmohan Mukherjee Street, Calcutta</strong>, Vivekananda was the spiritual heir of Sri Ramakrishna. His ancestral home remains a sacred site, now the Ramakrishna Mission Cultural Centre.
            </p>
            <p className="font-serif text-vintage-brown leading-relaxed mb-3">
              On <strong>May 1, 1897</strong>, he founded the <strong>Ramakrishna Mission</strong> in Calcutta, dedicated to social service based on Karma Yoga. He established the headquarters at <strong>Belur Math</strong> on the banks of the Hooghly, a spiritual complex that harmonizes Hindu, Islamic, Buddhist, and Christian architectural elements—symbolizing the unity of all religions.
            </p>
            <p className="font-serif text-vintage-brown leading-relaxed">
              <strong>Legacy:</strong> His electrifying speech at the 1893 World Parliament of Religions in Chicago introduced Vedanta philosophy to the West. He remains an icon of Hindu nationalism and spiritual awakening, inspiring millions with "Arise, awake, and stop not till the goal is reached."
            </p>
            <div className="mt-4 p-3 bg-vintage-dark/5 rounded">
              <p className="font-serif text-sm text-vintage-brown">
                <strong>Current Legacy:</strong> Belur Math continues as the headquarters of Ramakrishna Math and Mission, spreading Vivekananda's vision globally.
              </p>
            </div>
          </VintageCard>

          {/* Rabindranath Tagore */}
          <VintageCard className="hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-vintage-gold/20 border-2 border-vintage-dark flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✍️</span>
              </div>
              <div>
                <h4 className="font-display text-2xl font-bold text-vintage-dark">Rabindranath Tagore</h4>
                <p className="font-serif text-sm text-vintage-brown italic">(1861–1941)</p>
              </div>
            </div>
            <p className="font-serif text-vintage-brown leading-relaxed mb-3">
              Born on <strong>May 7, 1861</strong>, at <strong>Jorasanko Thakur Bari, Kolkata</strong>, Rabindranath was the youngest of thirteen children in the illustrious Tagore family. Jorasanko was the cultural crucible of the <strong>Bengal Renaissance</strong>, where literature, music, theatre, and art flourished under the patronage of his grandfather, Dwarakanath Tagore.
            </p>
            <p className="font-serif text-vintage-brown leading-relaxed mb-3">
              A polymath—poet, novelist, playwright, composer, painter, and educationist—Tagore became the <strong>first non-European to win the Nobel Prize in Literature (1913)</strong> for his collection <em>Gitanjali</em>. He composed the national anthems of <strong>India ("Jana Gana Mana")</strong> and <strong>Bangladesh ("Amar Sonar Bangla")</strong>.
            </p>
            <p className="font-serif text-vintage-brown leading-relaxed mb-3">
              In 1901, he founded <strong>Santiniketan</strong> in rural Bengal, an experimental school promoting creative learning, blending Indian and Western educational philosophies. It later became <strong>Visva-Bharati University</strong>, a UNESCO World Heritage Site.
            </p>
            <p className="font-serif text-vintage-brown leading-relaxed">
              <strong>Family Legacy:</strong> The Tagore family, originally Pirali Brahmins from Burdwan, rose to prominence during the Bengal Renaissance. His father, <strong>Debendranath Tagore</strong>, was a philosopher and reformer. Rabindranath's son, <strong>Rathindranath</strong>, became Visva-Bharati's first Vice-Chancellor.
            </p>
            <div className="mt-4 p-3 bg-vintage-dark/5 rounded">
              <p className="font-serif text-sm text-vintage-brown">
                <strong>Current Family:</strong> Descendants continue his cultural work. <strong>Jorasanko Thakur Bari</strong> is now the Rabindra Bharati Museum. Santiniketan thrives as a global center of arts and learning.
              </p>
            </div>
          </VintageCard>
        </div>
      </div>

      {/* Partition */}
      <VintageCard className="mb-12">
        <h3 className="font-display text-3xl font-bold text-vintage-dark mb-6 border-b-2 border-vintage-dark pb-3">
          The Partition of Bengal: A Nation Divided, A Spirit United
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-display text-xl font-bold text-vintage-brown mb-3">First Partition (1905)</h4>
            <p className="font-serif text-vintage-brown leading-relaxed mb-3">
              On <strong>October 16, 1905</strong>, Lord Curzon partitioned Bengal, citing administrative efficiency. The real motive was "divide and rule"—splitting Hindu-majority West Bengal from Muslim-majority East Bengal. With 78.5 million people, Bengal was deemed too large, but the partition sparked unprecedented resistance.
            </p>
            <p className="font-serif text-vintage-brown leading-relaxed mb-3">
              <strong>Resistance:</strong> In Calcutta, a <em>hartal</em> was declared—a day of mourning where people fasted and sang "Bande Mataram." <strong>Rabindranath Tagore</strong> made tying <em>rakhi</em> (sacred threads) compulsory, especially to Muslims, emphasizing inter-religious unity. He composed <strong>"Amar Sonar Bangla"</strong> (My Golden Bengal), now Bangladesh's national anthem, to protest the division.
            </p>
            <p className="font-serif text-vintage-brown leading-relaxed">
              The <strong>Swadeshi Movement</strong> was born—boycotting British goods, promoting indigenous industries. Nationalist leaders like <strong>Surendranath Banerjee, Bipin Chandra Pal, and Aurobindo Ghose</strong> led massive protests. The partition was annulled in 1911, but the seeds of communal division were sown.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-xl font-bold text-vintage-brown mb-3">Second Partition (1947)</h4>
            <p className="font-serif text-vintage-brown leading-relaxed">
              During India's independence in 1947, Bengal was partitioned again along religious lines—<strong>West Bengal</strong> joined India, while <strong>East Bengal</strong> became East Pakistan (later Bangladesh in 1971). Calcutta witnessed horrific communal riots, leaving scars that persist. The partition displaced millions and reshaped the subcontinent's destiny.
            </p>
          </div>

          <div className="aged-paper p-4 border-2 border-vintage-dark">
            <p className="font-serif text-vintage-brown italic">
              <strong>Vital Role:</strong> The Partition galvanized India's independence movement. It exposed British manipulation and united Indians across religions. Calcutta became the epicenter of revolutionary nationalism—home to the <strong>Jugantar</strong> and <strong>Anushilan Samiti</strong>, secret societies using armed resistance against colonial rule.
            </p>
          </div>
        </div>
      </VintageCard>

      {/* British Rule */}
      <VintageCard className="mb-12">
        <h3 className="font-display text-3xl font-bold text-vintage-dark mb-6 border-b-2 border-vintage-dark pb-3">
          British Rulers: Architects & Autocrats
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-display text-2xl font-bold text-vintage-brown mb-3">Warren Hastings (Governor-General, 1772–1785)</h4>
            <p className="font-serif text-vintage-brown leading-relaxed mb-2">
              <strong>Best Contributions:</strong>
            </p>
            <ul className="font-serif text-vintage-brown leading-relaxed ml-6 mb-3 space-y-1">
              <li>• <strong>Judicial Plan of 1772:</strong> Established a centralized court system with district courts (<em>Diwani Adalat</em> for civil, <em>Faujdari Adalat</em> for criminal cases), bringing order to chaotic legal affairs.</li>
              <li>• Founded the <strong>Asiatic Society of Bengal (1784)</strong>, promoting the study of Indian culture, languages, and history—a beacon of the Bengal Renaissance.</li>
              <li>• Codified Hindu and Muslim laws, respecting indigenous legal traditions while modernizing administration.</li>
            </ul>
            <p className="font-serif text-vintage-brown leading-relaxed mb-2">
              <strong>Worst Contributions:</strong>
            </p>
            <ul className="font-serif text-vintage-brown leading-relaxed ml-6 space-y-1">
              <li>• Exploited Bengal's economy through aggressive taxation, draining wealth to Britain.</li>
              <li>• Infamous for corruption charges; impeached in Britain (though later acquitted) for misgovernance and financial irregularities.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl font-bold text-vintage-brown mb-3">Lord Cornwallis (Governor-General, 1786–1793)</h4>
            <p className="font-serif text-vintage-brown leading-relaxed mb-2">
              <strong>Best Contributions:</strong>
            </p>
            <ul className="font-serif text-vintage-brown leading-relaxed ml-6 mb-3 space-y-1">
              <li>• <strong>Cornwallis Code:</strong> Separated revenue collection from judicial duties, establishing circuit courts in Calcutta, Dacca, Murshidabad, and Patna. Created the <em>Sadar Diwani Adalat</em> (Supreme Civil Court) in Calcutta.</li>
              <li>• <strong>Civil Service Reforms:</strong> Regarded as the "Father of Indian Civil Service." Banned private trade and gifts for officials, raised salaries to curb bribery, and enforced seniority-based promotions—professionalizing British administration.</li>
              <li>• <strong>Police Reforms:</strong> Organized a structured police force with district superintendents, improving law and order.</li>
            </ul>
            <p className="font-serif text-vintage-brown leading-relaxed mb-2">
              <strong>Worst Contributions:</strong>
            </p>
            <ul className="font-serif text-vintage-brown leading-relaxed ml-6 space-y-1">
              <li>• <strong>Permanent Settlement (1793):</strong> Fixed land revenue, making <em>Zamindars</em> (landlords) permanent owners while farmers became tenants. Zamindars paid 89% revenue to the British, leading to ruthless exploitation of peasants and economic ruin for many.</li>
              <li>• Reserved top administrative and judicial positions for Europeans, institutionalizing racial discrimination. Indians were relegated to clerks and peons, sowing seeds of resentment.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl font-bold text-vintage-brown mb-3">Lord Curzon (Viceroy, 1899–1905)</h4>
            <p className="font-serif text-vintage-brown leading-relaxed mb-2">
              <strong>Best Contributions:</strong>
            </p>
            <ul className="font-serif text-vintage-brown leading-relaxed ml-6 mb-3 space-y-1">
              <li>• <strong>Victoria Memorial (1901–1921):</strong> After Queen Victoria's death in 1901, Curzon envisioned a grand memorial in Calcutta. Designed by architect William Emerson, the <strong>Victoria Memorial</strong> blends British and Mughal architecture—a white marble masterpiece housing 25 galleries with paintings, sculptures, manuscripts, and artifacts documenting Indian history. It opened to the public in 1921 and remains an iconic heritage monument.</li>
              <li>• Promoted archaeological conservation, preserving India's ancient monuments, including the Taj Mahal.</li>
            </ul>
            <p className="font-serif text-vintage-brown leading-relaxed mb-2">
              <strong>Worst Contributions:</strong>
            </p>
            <ul className="font-serif text-vintage-brown leading-relaxed ml-6 space-y-1">
              <li>• <strong>Partition of Bengal (1905):</strong> His decision to divide Bengal ignited mass protests, the Swadeshi Movement, and radicalized Indian nationalism. Though administratively justified, it was perceived as a divisive, authoritarian act—ultimately backfiring and strengthening the freedom struggle.</li>
              <li>• Arrogant and autocratic governance style alienated Indian leaders, undermining trust in British reforms.</li>
            </ul>
          </div>
        </div>
      </VintageCard>

      {/* Queen Victoria */}
      <VintageCard>
        <h3 className="font-display text-3xl font-bold text-vintage-dark mb-6 border-b-2 border-vintage-dark pb-3">
          Queen Victoria & Her Legacy in Calcutta
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-serif text-vintage-brown leading-relaxed mb-4">
              <strong>Queen Victoria</strong> (1819–1901) never visited Calcutta but was proclaimed <strong>Empress of India in 1876</strong>, symbolizing British supremacy. Her 63-year reign saw the British Raj consolidate power, and Calcutta thrived as the empire's eastern jewel.
            </p>
            <p className="font-serif text-vintage-brown leading-relaxed mb-4">
              After her death in 1901, <strong>Lord Curzon</strong> proposed the Victoria Memorial—a museum and monument celebrating her reign and documenting India's colonial history. Public donations funded the ₹1.05 crore construction. The <strong>Prince of Wales laid the foundation stone in 1906</strong>, and after 15 years of meticulous work, the memorial opened in 1921.
            </p>
          </div>
          <div>
            <p className="font-serif text-vintage-brown leading-relaxed mb-4">
              <strong>Architectural Marvel:</strong> The memorial fuses Neoclassical and Indo-Saracenic styles—domes, arches, and gardens reminiscent of the Taj Mahal. The <strong>"Angel of Victory"</strong> statue atop the central dome symbolizes imperial triumph.
            </p>
            <p className="font-serif text-vintage-brown leading-relaxed">
              <strong>Post-Independence:</strong> The memorial was transformed into a museum celebrating India's struggle for freedom. In 2023, Prime Minister Narendra Modi inaugurated the <strong>Biplobi Gallery</strong> on Shaheed Diwas, honoring revolutionaries Bhagat Singh, Rajguru, and Sukhdev. The Victoria Memorial stands today as a complex symbol—of colonial grandeur and India's resilient spirit.
            </p>
          </div>
        </div>
      </VintageCard>
    </div>
  </section>
);

// Timeline Section
const Timeline = () => {
  const events = [
    { time: 'Day 1 - 9:00 AM', title: 'Opening Ceremony', desc: 'Grand inauguration with keynote speakers' },
    { time: 'Day 1 - 11:00 AM', title: 'Hacking Begins', desc: 'Teams start building their projects' },
    { time: 'Day 2 - 10:00 AM', title: 'Mentorship Sessions', desc: 'Expert guidance and workshops' },
    { time: 'Day 2 - 8:00 PM', title: 'Culture Night', desc: 'Celebrate Calcutta with music & food' },
    { time: 'Day 3 - 2:00 PM', title: 'Project Submissions', desc: 'Final submissions and demos' },
    { time: 'Day 3 - 6:00 PM', title: 'Prize Distribution', desc: 'Winners announced and celebrated' }
  ];
  
  return (
    <section id="timeline" className="py-20 bg-vintage-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">
            EVENT TIMELINE
          </h2>
          <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-vintage-brown hidden md:block"></div>
          
          {events.map((event, idx) => (
            <div key={idx} className={`mb-12 flex flex-col md:flex-row items-center ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                <VintageCard>
                  <Clock className={`mb-2 text-vintage-gold ${idx % 2 === 0 ? 'md:ml-auto' : ''}`} size={32} />
                  <div className="font-display text-sm text-vintage-brown mb-2">{event.time}</div>
                  <h3 className="font-display text-2xl font-bold text-vintage-dark mb-2">{event.title}</h3>
                  <p className="font-serif text-vintage-brown">{event.desc}</p>
                </VintageCard>
              </div>
              
              <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                <div className="w-8 h-8 bg-vintage-gold border-4 border-vintage-dark rounded-full"></div>
              </div>
              
              <div className="w-full md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tracks Section
const Tracks = () => {
  const tracks = [
    { icon: Code, title: 'Web & Mobile', desc: 'Build innovative web and mobile applications' },
    { icon: Landmark, title: 'Heritage Tech', desc: 'Preserve and promote cultural heritage' },
    { icon: Target, title: 'Smart City', desc: 'Solutions for urban challenges' },
    { icon: Sparkles, title: 'AI & ML', desc: 'Artificial intelligence and machine learning' },
    { icon: Bus, title: 'Transportation', desc: 'Reimagine urban mobility' },
    { icon: Award, title: 'Open Innovation', desc: 'Build anything innovative' }
  ];
  
  return (
    <section id="tracks" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">
            HACKATHON TRACKS
          </h2>
          <div className="w-32 h-1 bg-vintage-gold mx-auto mb-6"></div>
          <p className="font-serif text-xl text-vintage-brown max-w-3xl mx-auto">
            Choose your track and build solutions that matter
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, idx) => (
            <VintageCard key={idx} className="hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <track.icon className="mx-auto mb-4 text-vintage-brown" size={56} />
                <h3 className="font-display text-2xl font-bold text-vintage-dark mb-3">
                  {track.title}
                </h3>
                <p className="font-serif text-vintage-brown">{track.desc}</p>
              </div>
            </VintageCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Prizes Section
const Prizes = () => {
  const prizes = [
    { place: '1st', amount: '₹2,00,000', perks: 'Trophy + Medals + Mentorship' },
    { place: '2nd', amount: '₹1,00,000', perks: 'Trophy + Medals + Goodies' },
    { place: '3rd', amount: '₹50,000', perks: 'Trophy + Medals + Goodies' }
  ];
  
  return (
    <section id="prizes" className="py-20 bg-vintage-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">
            PRIZES & PERKS
          </h2>
          <div className="w-32 h-1 bg-vintage-gold mx-auto mb-6"></div>
          <p className="font-serif text-xl text-vintage-brown">
            Total Prize Pool: ₹5,00,000+
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, idx) => (
            <VintageCard 
              key={idx} 
              className={`text-center ${idx === 0 ? 'md:scale-110' : ''} transition-transform duration-300`}
            >
              <Trophy className="mx-auto mb-4 text-vintage-gold" size={64} />
              <div className="font-display text-4xl font-bold text-vintage-dark mb-2">
                {prize.place}
              </div>
              <div className="font-display text-3xl font-bold text-vintage-brown mb-4">
                {prize.amount}
              </div>
              <div className="font-serif text-vintage-brown">{prize.perks}</div>
            </VintageCard>
          ))}
        </div>
        
        <VintageCard className="text-center">
          <h3 className="font-display text-3xl font-bold text-vintage-dark mb-4">
            Additional Prizes
          </h3>
          <div className="grid md:grid-cols-3 gap-6 font-serif text-lg text-vintage-brown">
            <div>🏆 Best Heritage Tech Solution</div>
            <div>🏆 Best Women's Team</div>
            <div>🏆 Best First-Time Hackers</div>
            <div>🏆 Most Innovative Idea</div>
            <div>🏆 Best UI/UX Design</div>
            <div>🏆 People's Choice Award</div>
          </div>
        </VintageCard>
      </div>
    </section>
  );
};

// Avatar ID Card Generator
const AvatarCardGenerator = () => {
  const [selectedStyle, setSelectedStyle] = useState('vivekananda');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [participantName, setParticipantName] = useState('');
  const [participantRole, setParticipantRole] = useState('Participant');
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const avatarStyles = [
    { 
      id: 'vivekananda', 
      name: 'Swami Vivekananda',
      shortName: 'Vivekananda',
      color: '#F4E4C1',
      accent: '#8B4513',
      secondaryAccent: '#CD853F',
      quote: 'Arise, Awake, Stop Not',
      icon: '🕉️',
      symbolIcon: '☸',
      bgPattern: 'spiritual',
      category: 'Philosopher',
      years: '1863-1902',
      specialty: 'Spiritual Leader'
    },
    { 
      id: 'tagore', 
      name: 'Rabindranath Tagore',
      shortName: 'Tagore',
      color: '#F5DEB3',
      accent: '#6B4423',
      secondaryAccent: '#A0522D',
      quote: 'Where Mind is Without Fear',
      icon: '✍️',
      symbolIcon: '📜',
      bgPattern: 'artistic',
      category: 'Poet',
      years: '1861-1941',
      specialty: 'Nobel Laureate'
    },
    { 
      id: 'ramakrishna', 
      name: 'Sri Ramakrishna',
      shortName: 'Ramakrishna',
      color: '#FFE4B5',
      accent: '#8B6914',
      secondaryAccent: '#DAA520',
      quote: 'God is in All',
      icon: '🙏',
      symbolIcon: '✨',
      bgPattern: 'divine',
      category: 'Saint',
      years: '1836-1886',
      specialty: 'Mystic'
    },
    { 
      id: 'netaji', 
      name: 'Netaji Subhas Bose',
      shortName: 'Netaji',
      color: '#E6D7B8',
      accent: '#654321',
      secondaryAccent: '#8B4513',
      quote: 'Give Me Blood, I Give Freedom',
      icon: '⚔️',
      symbolIcon: '🦁',
      bgPattern: 'patriotic',
      category: 'Freedom Fighter',
      years: '1897-1945',
      specialty: 'Revolutionary Leader'
    },
    { 
      id: 'vidyasagar', 
      name: 'Ishwar Chandra Vidyasagar',
      shortName: 'Vidyasagar',
      color: '#F0E8D8',
      accent: '#5C4033',
      secondaryAccent: '#8B6F47',
      quote: 'Education for All',
      icon: '📚',
      symbolIcon: '🎓',
      bgPattern: 'scholarly',
      category: 'Educator',
      years: '1820-1891',
      specialty: 'Social Reformer'
    },
    { 
      id: 'sarojini', 
      name: 'Sarojini Naidu',
      shortName: 'Sarojini',
      color: '#FAF0E6',
      accent: '#8B7355',
      secondaryAccent: '#A0826D',
      quote: 'Nightingale of India',
      icon: '🌺',
      symbolIcon: '🦜',
      bgPattern: 'poetic',
      category: 'Poet & Activist',
      years: '1879-1949',
      specialty: 'Freedom Fighter'
    }
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadCard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const style = avatarStyles.find(s => s.id === selectedStyle);
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = 1000;

    // Background with gradient effect
    const bgGradient = ctx.createLinearGradient(0, 0, 0, 1000);
    bgGradient.addColorStop(0, style.color);
    bgGradient.addColorStop(1, style.color + 'DD');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 800, 1000);

    // Main border
    ctx.strokeStyle = style.accent;
    ctx.lineWidth = 16;
    ctx.strokeRect(8, 8, 784, 984);

    // Decorative corner patterns
    ctx.strokeStyle = style.accent;
    ctx.lineWidth = 6;
    ctx.globalAlpha = 0.3;
    // Top-left
    ctx.beginPath();
    ctx.moveTo(40, 40);
    ctx.lineTo(40, 80);
    ctx.moveTo(40, 40);
    ctx.lineTo(80, 40);
    ctx.stroke();
    // Top-right
    ctx.beginPath();
    ctx.moveTo(760, 40);
    ctx.lineTo(760, 80);
    ctx.moveTo(760, 40);
    ctx.lineTo(720, 40);
    ctx.stroke();
    // Bottom-left
    ctx.beginPath();
    ctx.moveTo(40, 960);
    ctx.lineTo(40, 920);
    ctx.moveTo(40, 960);
    ctx.lineTo(80, 960);
    ctx.stroke();
    // Bottom-right
    ctx.beginPath();
    ctx.moveTo(760, 960);
    ctx.lineTo(760, 920);
    ctx.moveTo(760, 960);
    ctx.lineTo(720, 960);
    ctx.stroke();
    ctx.globalAlpha = 1.0;

    // Header with gradient
    const headerGradient = ctx.createLinearGradient(0, 40, 0, 180);
    headerGradient.addColorStop(0, style.accent);
    headerGradient.addColorStop(1, style.secondaryAccent);
    ctx.fillStyle = headerGradient;
    ctx.fillRect(40, 40, 720, 140);
    
    // Secondary accent line at bottom of header
    ctx.fillStyle = style.secondaryAccent;
    ctx.fillRect(40, 176, 720, 4);
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 52px serif';
    ctx.textAlign = 'center';
    ctx.fillText('CALCUTTA <HACKS/>', 400, 110);
    ctx.font = '26px serif';
    ctx.fillText('13-14 December 2025', 400, 155);

    // Outer decorative ring for avatar
    ctx.beginPath();
    ctx.arc(400, 380, 156, 0, Math.PI * 2);
    ctx.fillStyle = style.secondaryAccent + '40';
    ctx.fill();

    // Avatar circle
    ctx.beginPath();
    ctx.arc(400, 380, 140, 0, Math.PI * 2);
    ctx.fillStyle = '#FFF';
    ctx.fill();
    ctx.strokeStyle = style.accent;
    ctx.lineWidth = 12;
    ctx.stroke();

    // Draw uploaded image if available
    if (uploadedImage) {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(400, 380, 128, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, 272, 252, 256, 256);
        ctx.restore();
        continueDrawing();
      };
      img.src = uploadedImage;
    } else {
      continueDrawing();
    }

    function continueDrawing() {
      // Symbol badge below avatar
      ctx.beginPath();
      ctx.arc(400, 510, 35, 0, Math.PI * 2);
      ctx.fillStyle = style.secondaryAccent;
      ctx.fill();
      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.font = '40px serif';
      ctx.fillText(style.symbolIcon, 400, 525);

      // Name
      ctx.fillStyle = style.accent;
      ctx.font = 'bold 48px serif';
      ctx.textAlign = 'center';
      ctx.fillText(participantName || 'Your Name', 400, 600);

      // Role badge
      ctx.fillStyle = style.secondaryAccent + '50';
      const roleWidth = ctx.measureText(participantRole).width + 60;
      ctx.fillRect(400 - roleWidth / 2, 620, roleWidth, 45);
      ctx.strokeStyle = style.accent + '60';
      ctx.lineWidth = 3;
      ctx.strokeRect(400 - roleWidth / 2, 620, roleWidth, 45);
      ctx.fillStyle = style.accent;
      ctx.font = 'bold 24px serif';
      ctx.fillText(participantRole, 400, 650);

      // Inspiration box with gradient
      const boxGradient = ctx.createLinearGradient(0, 720, 0, 900);
      boxGradient.addColorStop(0, style.accent);
      boxGradient.addColorStop(1, style.secondaryAccent);
      ctx.fillStyle = boxGradient;
      ctx.fillRect(60, 720, 680, 180);
      
      // Border for inspiration box
      ctx.strokeStyle = style.secondaryAccent;
      ctx.lineWidth = 4;
      ctx.strokeRect(60, 720, 680, 180);
      
      // Icons and name
      ctx.font = '40px serif';
      ctx.fillStyle = '#FFF';
      ctx.fillText(style.icon, 280, 770);
      ctx.font = 'italic bold 28px serif';
      ctx.fillText(style.shortName, 400, 770);
      ctx.font = '40px serif';
      ctx.fillText(style.symbolIcon, 520, 770);
      
      // Quote
      ctx.font = 'bold 26px serif';
      const words = style.quote.split(' ');
      const lines = [];
      let currentLine = '';
      words.forEach(word => {
        const testLine = currentLine + word + ' ';
        if (ctx.measureText(testLine).width < 600) {
          currentLine = testLine;
        } else {
          lines.push(currentLine);
          currentLine = word + ' ';
        }
      });
      lines.push(currentLine);
      
      lines.forEach((line, i) => {
        ctx.fillText(`"${line.trim()}"`, 400, 820 + i * 34);
      });

      // Specialty and years
      ctx.font = '20px serif';
      ctx.fillStyle = '#FFF';
      ctx.globalAlpha = 0.9;
      ctx.fillText(`${style.specialty} • ${style.years}`, 400, 880);
      ctx.globalAlpha = 1.0;

      // Download
      const link = document.createElement('a');
      link.download = `calcutta-hack-${style.shortName}-${participantName || 'card'}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const shareCard = async () => {
    if (navigator.share && uploadedImage) {
      try {
        const canvas = canvasRef.current;
        canvas.toBlob(async (blob) => {
          const file = new File([blob], 'calcutta-hack-card.png', { type: 'image/png' });
          await navigator.share({
            title: 'Calcutta <Hack/> ID Card',
            text: `Check out my Calcutta <Hack/> participant ID card inspired by ${avatarStyles.find(s => s.id === selectedStyle).name}!`,
            files: [file]
          });
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    }
  };

  const currentStyle = avatarStyles.find(s => s.id === selectedStyle);

  return (
    <section id="avatar-generator" className="py-20 bg-vintage-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">
            CREATE YOUR AVATAR ID CARD
          </h2>
          <div className="w-32 h-1 bg-vintage-gold mx-auto mb-6"></div>
          <p className="font-serif text-xl text-vintage-brown max-w-3xl mx-auto">
            Design your personalized hackathon ID card inspired by Bengal's legendary icons. Upload your photo, choose your inspiration, and share your unique identity!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Controls */}
          <div className="space-y-8">
            {/* Style Selection */}
            <VintageCard>
              <h3 className="font-display text-2xl font-bold text-vintage-dark mb-6 flex items-center gap-3">
                <Sparkles size={28} className="text-vintage-gold" />
                Choose Your Inspiration
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {avatarStyles.map(style => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-4 border-4 transition-all duration-300 rounded-lg relative overflow-hidden ${
                      selectedStyle === style.id
                        ? 'border-vintage-dark bg-vintage-sepia/40 shadow-lg transform scale-105'
                        : 'border-vintage-brown/40 hover:border-vintage-brown hover:bg-vintage-sepia/20 hover:shadow-md'
                    }`}
                    style={{
                      backgroundColor: selectedStyle === style.id ? `${style.color}40` : 'transparent'
                    }}
                  >
                    {selectedStyle === style.id && (
                      <div className="absolute top-2 right-2">
                        <div className="w-8 h-8 bg-vintage-gold rounded-full flex items-center justify-center shadow-md border-2 border-vintage-dark">
                          <span className="text-vintage-dark font-bold">✓</span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl transition-transform duration-300 hover:scale-110">{style.icon}</span>
                      <span className="text-3xl opacity-70">{style.symbolIcon}</span>
                    </div>
                    <div className="font-display text-sm font-bold text-vintage-dark mb-1">{style.name}</div>
                    <div className="text-xs text-vintage-brown/80 mb-1">{style.category}</div>
                    <div className="font-serif text-xs text-vintage-brown italic">"{style.quote}"</div>
                  </button>
                ))}
              </div>
            </VintageCard>

            {/* Image Upload */}
            <VintageCard>
              <h3 className="font-display text-2xl font-bold text-vintage-dark mb-6 flex items-center gap-3">
                <Camera size={28} className="text-vintage-gold" />
                Upload Your Photo
              </h3>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-vintage-dark text-vintage-sepia px-8 py-4 font-display font-bold border-4 border-vintage-dark hover:bg-vintage-brown hover:border-vintage-brown transition-all duration-300 flex items-center justify-center gap-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <Upload size={24} />
                {uploadedImage ? 'Change Photo' : 'Upload Photo'}
              </button>
              {uploadedImage && (
                <div className="mt-6 text-center">
                  <div className="relative inline-block">
                    <img src={uploadedImage} alt="Preview" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-vintage-dark shadow-lg" />
                    <div className="absolute -top-2 -right-2 bg-vintage-gold rounded-full p-2 shadow-md">
                      <span className="text-vintage-dark text-xs">✓</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setUploadedImage(null)}
                    className="mt-4 text-vintage-brown hover:text-vintage-dark font-serif flex items-center gap-2 mx-auto transition-colors duration-300 hover:underline"
                  >
                    <RefreshCw size={16} /> Remove Photo
                  </button>
                </div>
              )}
            </VintageCard>

            {/* Details */}
            <VintageCard>
              <h3 className="font-display text-2xl font-bold text-vintage-dark mb-6">Your Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="font-serif text-vintage-brown block mb-2">Name</label>
                  <input
                    type="text"
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-vintage-dark font-serif text-vintage-dark focus:outline-none focus:border-vintage-brown rounded-md transition-all duration-300 focus:shadow-md"
                  />
                </div>
                <div>
                  <label className="font-serif text-vintage-brown block mb-2">Role</label>
                  <select
                    value={participantRole}
                    onChange={(e) => setParticipantRole(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-vintage-dark font-serif text-vintage-dark focus:outline-none focus:border-vintage-brown rounded-md transition-all duration-300 focus:shadow-md"
                  >
                    <option>Participant</option>
                    <option>Team Lead</option>
                    <option>Mentor</option>
                    <option>Volunteer</option>
                    <option>Judge</option>
                    <option>Organizer</option>
                  </select>
                </div>
              </div>
            </VintageCard>
          </div>

          {/* Right: Preview */}
          <div>
            <VintageCard>
              <h3 className="font-display text-2xl font-bold text-vintage-dark mb-6 text-center">Preview Your Card</h3>
              <div 
                className="relative mx-auto border-4 overflow-hidden rounded-xl shadow-2xl transition-all duration-500"
                style={{ 
                  width: '100%',
                  maxWidth: '400px',
                  aspectRatio: '4/5',
                  backgroundColor: currentStyle.color,
                  borderColor: currentStyle.accent,
                  boxShadow: `0 20px 50px ${currentStyle.accent}40, inset 0 0 100px ${currentStyle.secondaryAccent}20`
                }}
              >
                {/* Decorative corner patterns */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 opacity-30" style={{ borderColor: currentStyle.accent }}></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 opacity-30" style={{ borderColor: currentStyle.accent }}></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 opacity-30" style={{ borderColor: currentStyle.accent }}></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 opacity-30" style={{ borderColor: currentStyle.accent }}></div>
                {/* Header */}
                <div 
                  className="absolute top-0 left-0 right-0 p-5 text-center shadow-lg"
                  style={{ 
                    backgroundColor: currentStyle.accent,
                    backgroundImage: `linear-gradient(135deg, ${currentStyle.accent} 0%, ${currentStyle.secondaryAccent} 100%)`
                  }}
                >
                  <div className="font-display text-lg md:text-xl font-bold text-white tracking-widest mb-1">CALCUTTA &lt;HACKS/&gt;</div>
                  <div className="font-serif text-xs text-white/90">13-14 December 2025</div>
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: currentStyle.secondaryAccent }}></div>
                </div>

                {/* Avatar Circle */}
                <div className="absolute top-28 left-1/2 -translate-x-1/2">
                  {/* Outer decorative ring */}
                  <div 
                    className="w-36 h-36 rounded-full absolute -top-2 -left-2 opacity-20"
                    style={{ backgroundColor: currentStyle.secondaryAccent }}
                  ></div>
                  <div 
                    className="w-32 h-32 rounded-full border-4 bg-white flex items-center justify-center overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 relative z-10"
                    style={{ 
                      borderColor: currentStyle.accent,
                      boxShadow: `0 8px 32px ${currentStyle.accent}60, inset 0 0 20px ${currentStyle.secondaryAccent}20`
                    }}
                  >
                    {uploadedImage ? (
                      <img src={uploadedImage} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-5xl filter drop-shadow-lg">{currentStyle.icon}</span>
                    )}
                  </div>
                  {/* Small icon badge */}
                  <div 
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center border-2 border-white shadow-lg z-20"
                    style={{ backgroundColor: currentStyle.secondaryAccent }}
                  >
                    <span className="text-xl">{currentStyle.symbolIcon}</span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="absolute top-72 left-0 right-0 text-center px-4">
                  <div 
                    className="font-display text-xl font-bold mb-2 tracking-wide"
                    style={{ color: currentStyle.accent }}
                  >
                    {participantName || 'Your Name'}
                  </div>
                  <div 
                    className="inline-block px-4 py-1 rounded-full text-xs font-serif font-semibold"
                    style={{ 
                      backgroundColor: `${currentStyle.secondaryAccent}30`,
                      color: currentStyle.accent,
                      border: `2px solid ${currentStyle.accent}40`
                    }}
                  >
                    {participantRole}
                  </div>
                </div>

                {/* Inspiration Box */}
                <div 
                  className="absolute bottom-12 left-4 right-4 p-4 text-center rounded-lg shadow-lg"
                  style={{ 
                    backgroundColor: currentStyle.accent,
                    backgroundImage: `linear-gradient(135deg, ${currentStyle.accent} 0%, ${currentStyle.secondaryAccent} 100%)`,
                    border: `2px solid ${currentStyle.secondaryAccent}`
                  }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">{currentStyle.icon}</span>
                    <span className="font-serif italic text-sm text-white font-bold">
                      {currentStyle.shortName}
                    </span>
                    <span className="text-2xl">{currentStyle.symbolIcon}</span>
                  </div>
                  <div className="font-display text-xs font-bold text-white/95 leading-relaxed">
                    "{currentStyle.quote}"
                  </div>
                  <div className="mt-2 text-xs text-white/80 font-serif">
                    {currentStyle.specialty} • {currentStyle.years}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={downloadCard}
                  disabled={!participantName || !uploadedImage}
                  className="w-full bg-vintage-dark text-vintage-sepia px-6 py-4 font-display font-bold border-4 border-vintage-dark hover:bg-vintage-brown hover:border-vintage-brown transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Download size={24} />
                  Download ID Card
                </button>
                <button
                  onClick={shareCard}
                  disabled={!participantName || !uploadedImage}
                  className="w-full bg-vintage-sepia text-vintage-dark px-6 py-4 font-display font-bold border-4 border-vintage-dark hover:bg-vintage-gold transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Share2 size={24} />
                  Share on Social Media
                </button>
              </div>

              {(!participantName || !uploadedImage) && (
                <p className="text-center font-serif text-sm text-vintage-brown italic mt-4">
                  Upload a photo and enter your name to enable download & share
                </p>
              )}
            </VintageCard>
          </div>
        </div>

        {/* Hidden Canvas for Download */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </section>
  );
};

// Register Section
const Register = () => (
  <section id="register" className="py-20 relative">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <OrnateBorder className="p-12">
        <VintageCard className="text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-6">
            JOIN THE LEGACY
          </h2>
          <div className="w-32 h-1 bg-vintage-gold mx-auto mb-8"></div>
          
          <p className="font-serif text-xl text-vintage-brown mb-8 max-w-2xl mx-auto">
            Be part of India's most prestigious heritage hackathon. Limited spots available 
            for teams of 2-4 members. Registration closes soon!
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="inline-block stamp-effect bg-vintage-sepia">
              <div className="font-serif text-lg">
                <strong>Early Bird:</strong> ₹500/team (Ends Nov 30)
              </div>
            </div>
            <div className="inline-block stamp-effect bg-vintage-sepia ml-4">
              <div className="font-serif text-lg">
                <strong>Regular:</strong> ₹800/team
              </div>
            </div>
          </div>
          
          <button className="bg-vintage-dark text-vintage-sepia px-16 py-5 text-2xl font-display font-bold border-4 border-vintage-dark hover:bg-vintage-brown hover:border-vintage-brown transition-all duration-300 transform hover:scale-105 mb-8">
            REGISTER YOUR TEAM
          </button>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 font-serif text-lg text-vintage-brown">
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>contact@calcuttahack.in</span>
            </div>
            <div className="flex items-center gap-4">
              <Github size={24} className="cursor-pointer hover:text-vintage-dark" />
              <Linkedin size={24} className="cursor-pointer hover:text-vintage-dark" />
            </div>
          </div>
        </VintageCard>
      </OrnateBorder>
    </div>
  </section>
);

// Host Section
const Host = () => (
  <section id="host" className="py-20 relative bg-vintage-dark/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">
          ABOUT THE HOST
        </h2>
        <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
      </div>

      <OrnateBorder className="p-8">
        <VintageCard>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-display text-3xl font-bold text-vintage-dark mb-4">
                Apex Circle
              </h3>
              <p className="font-serif text-lg text-vintage-brown leading-relaxed mb-4">
                A community for innovators, problem-solvers, and technology enthusiasts. We provide a platform where ideas transform into solutions through collaboration, learning, and skill development.
              </p>
              <p className="font-serif text-lg text-vintage-brown leading-relaxed mb-4">
                From hackathons to workshops and hands-on projects, Apex Circle brings together individuals passionate about coding, AI, cybersecurity, Deep Tech and emerging technologies. Whether you're a beginner or an expert, this is a space to learn, grow, and create alongside like-minded individuals.
              </p>
              <p className="font-serif text-lg text-vintage-brown leading-relaxed mb-6">
                Join us in pushing boundaries, shaping the future, and making an impact through technology! ⚡🚀
              </p>

              <div className="space-y-3 font-serif text-vintage-dark">
                <div>
                  <strong>Our Social Handles:</strong> <a href="https://bento.me/apex-circle-official" target="_blank" rel="noopener noreferrer" className="text-vintage-brown hover:text-vintage-dark underline">https://bento.me/apex-circle-official</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <a href="mailto:apexcircleofficial2025@gmail.com" className="hover:text-vintage-dark">apexcircleofficial2025@gmail.com</a>
                </div>
                <div className="text-vintage-brown/90 italic">
                  Please do follow to stay updated about the upcoming events in the future.
                </div>
              </div>
            </div>

            <div className="aged-paper p-6 border-2 border-vintage-dark">
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Users className="text-vintage-brown" size={24} />
                  <div className="font-serif">Collaborative learning and building</div>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="text-vintage-gold" size={24} />
                  <div className="font-serif">Focus on AI, cybersecurity, and Deep Tech</div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="text-vintage-brown" size={24} />
                  <div className="font-serif">Workshops, hackathons, and hands-on projects</div>
                </div>
              </div>
            </div>
          </div>
        </VintageCard>
      </OrnateBorder>
    </div>
  </section>
);

// Mentors Section
const Mentors = () => {
  const mentors = [
    { name: 'Aarav Mehta', role: 'Full‑Stack Engineer', badge: 'Web & Cloud', emoji: '🧑‍💻' },
    { name: 'Riya Sen', role: 'AI/ML Researcher', badge: 'GenAI & Vision', emoji: '🤖' },
    { name: 'Kabir Das', role: 'Security Architect', badge: 'Cybersecurity', emoji: '🛡️' },
    { name: 'Meera Iyer', role: 'Product Designer', badge: 'UX & Systems', emoji: '🎨' },
  ];
  return (
    <section id="mentors" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">MENTORS</h2>
          <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
          <p className="font-serif text-xl text-vintage-brown mt-6">Guiding your builds with real‑world expertise</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((m, i) => (
            <div key={i} className="group [perspective:1000px]">
              <div className="relative transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl [transform-style:preserve-3d]">
                <VintageCard className="bg-white/90">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-vintage-sepia/40 border-2 border-vintage-dark flex items-center justify-center text-3xl mb-4">
                      <span aria-hidden>{m.emoji}</span>
                    </div>
                    <div className="font-display text-2xl font-bold text-vintage-dark">{m.name}</div>
                    <div className="font-serif text-vintage-brown">{m.role}</div>
                    <span className="mt-3 inline-block px-3 py-1 text-sm bg-vintage-dark/10 text-vintage-dark rounded-full">{m.badge}</span>
                  </div>
                </VintageCard>
                <div className="absolute inset-0 rounded-lg ring-1 ring-vintage-brown/30 translate-y-2 blur-sm opacity-0 group-hover:opacity-100 transition" aria-hidden></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Judges Section
const Judges = () => {
  const judges = [
    { name: 'Ananya Roy', role: 'VC & Operator', badge: 'Impact & Scale', emoji: '🏆' },
    { name: 'Dev Patel', role: 'CTO', badge: 'Architecture', emoji: '🧠' },
    { name: 'Priya Nair', role: 'Professor', badge: 'Research', emoji: '📚' },
    { name: 'Arjun Kapoor', role: 'Founder', badge: 'Product', emoji: '🚀' },
  ];
  return (
    <section id="judges" className="py-20 bg-vintage-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">JUDGES</h2>
          <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
          <p className="font-serif text-xl text-vintage-brown mt-6">Evaluating creativity, execution, and impact</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((j, i) => (
            <div key={i} className="group [perspective:1000px]">
              <div className="relative transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl [transform-style:preserve-3d]">
                <VintageCard className="bg-white/90">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-vintage-sepia/40 border-2 border-vintage-dark flex items-center justify-center text-3xl mb-4">
                      <span aria-hidden>{j.emoji}</span>
                    </div>
                    <div className="font-display text-2xl font-bold text-vintage-dark">{j.name}</div>
                    <div className="font-serif text-vintage-brown">{j.role}</div>
                    <span className="mt-3 inline-block px-3 py-1 text-sm bg-vintage-dark/10 text-vintage-dark rounded-full">{j.badge}</span>
                  </div>
                </VintageCard>
                <div className="absolute inset-0 rounded-lg ring-1 ring-vintage-brown/30 translate-y-2 blur-sm opacity-0 group-hover:opacity-100 transition" aria-hidden></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Our Team Section
const Team = () => {
  const team = [
    { name: 'Apex Lead', role: 'Organiser', emoji: '🧭' },
    { name: 'Ops Lead', role: 'Operations', emoji: '🛠️' },
    { name: 'Tech Lead', role: 'Engineering', emoji: '💡' },
    { name: 'Design Lead', role: 'Design', emoji: '🎯' },
    { name: 'Comms Lead', role: 'Community', emoji: '📣' },
    { name: 'Sponsorships', role: 'Partnerships', emoji: '🤝' },
  ];
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">OUR TEAM</h2>
          <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
          <p className="font-serif text-xl text-vintage-brown mt-6">The crew behind Calcutta &lt;Hack/&gt;</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((t, i) => (
            <div key={i} className="group [perspective:1000px]">
              <div className="relative transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl [transform-style:preserve-3d]">
                <VintageCard className="bg-white/90">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-vintage-sepia/40 border-2 border-vintage-dark flex items-center justify-center text-2xl mb-3">
                      <span aria-hidden>{t.emoji}</span>
                    </div>
                    <div className="font-display text-xl font-bold text-vintage-dark">{t.name}</div>
                    <div className="font-serif text-vintage-brown">{t.role}</div>
                  </div>
                </VintageCard>
                <div className="absolute inset-0 rounded-lg ring-1 ring-vintage-brown/30 translate-y-2 blur-sm opacity-0 group-hover:opacity-100 transition" aria-hidden></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Community Partners Section
const CommunityPartners = () => {
  const partners = [
    { name: 'Apex Circle', note: 'Community Host' },
    { name: 'Local Devs', note: 'Meetups & Support' },
    { name: 'University Clubs', note: 'Student Partners' },
  ];
  return (
    <section id="community" className="py-20 bg-vintage-sepia/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">COMMUNITY PARTNERS</h2>
          <div className="w-32 h-1 bg-vintage-gold mx-auto"></div>
          <p className="font-serif text-xl text-vintage-brown mt-6">Ecosystem collaborators supporting innovation</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <VintageCard key={i} className="text-center hover:scale-105 transition-transform duration-300">
              <div className="font-display text-2xl font-bold text-vintage-dark mb-1">{p.name}</div>
              <div className="font-serif text-vintage-brown">{p.note}</div>
            </VintageCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-vintage-dark text-vintage-sepia py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="font-display text-2xl font-bold mb-4">
            Calcutta &lt;Hack/&gt;
          </div>
          <p className="font-serif text-vintage-sepia/80">
            Where heritage meets innovation in the heart of Kolkata.
          </p>
        </div>
        
        <div>
          <h3 className="font-display text-xl font-bold mb-4">Quick Links</h3>
          <div className="space-y-2 font-serif">
            <div><a href="#about" className="hover:text-vintage-gold transition-colors">About</a></div>
            <div><a href="#timeline" className="hover:text-vintage-gold transition-colors">Timeline</a></div>
            <div><a href="#tracks" className="hover:text-vintage-gold transition-colors">Tracks</a></div>
            <div><a href="#prizes" className="hover:text-vintage-gold transition-colors">Prizes</a></div>
          </div>
        </div>
        
        <div>
          <h3 className="font-display text-xl font-bold mb-4">Calcutta Icons</h3>
          <div className="flex gap-4">
            <Train size={32} className="text-vintage-yellow" />
            <Bus size={32} className="text-vintage-blue" />
            <Landmark size={32} className="text-vintage-gold" />
          </div>
        </div>
      </div>
      
      <div className="border-t-2 border-vintage-sepia/30 pt-8 text-center font-serif">
        <p>&copy; 2024 Calcutta &lt;Hack/&gt;. Celebrating the heritage of Kolkata.</p>
      </div>
    </div>
  </footer>
);

// Main App
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <AboutCalcutta />
      <Timeline />
      <Tracks />
      <Prizes />
      <Mentors />
      <Judges />
      <Team />
      <Host />
      <section id="partners" className="py-20 bg-vintage-sepia/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-vintage-dark mb-4">
              OUR PARTNERS
            </h2>
            <div className="w-32 h-1 bg-vintage-gold mx-auto mb-6"></div>
            <p className="font-serif text-xl text-vintage-brown max-w-3xl mx-auto">
              Proudly hosted at our venue partner
            </p>
          </div>

          <VintageCard className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-vintage-dark rounded-full flex items-center justify-center">
                    <Map className="text-vintage-gold" size={32} />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-vintage-dark">
                    Venue Partner
                  </h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-display text-2xl font-bold text-vintage-brown mb-2">
                    Techno India University
                  </h4>
                  <p className="font-serif text-vintage-brown/90 mb-4">
                    EM-4, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/qX2sEeT1irqAn4836" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-vintage-brown hover:text-vintage-dark font-medium transition-colors"
                  >
                    <MapPin className="mr-2" size={18} />
                    View on Google Maps
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <span className="inline-block px-4 py-2 bg-vintage-dark/10 text-vintage-dark font-medium rounded-full">
                    🚇 10 min from Sector V Metro
                  </span>
                  <span className="inline-block px-4 py-2 bg-vintage-dark/10 text-vintage-dark font-medium rounded-full">
                    🅿️ Ample Parking
                  </span>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden border-4 border-vintage-dark h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0827672337136!2d88.42593737499146!3d22.576007532846074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f970ae9a2e19b5%3A0x16c43b9069f4b159!2sTechno%20India%20University!5e0!3m2!1sen!2sin!4v1760859347451!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Techno India University Location"
                  className="w-full h-full min-h-[300px]"
                ></iframe>
              </div>
            </div>
          </VintageCard>

          {/* Silver Sponsors */}
          <div className="space-y-16">
            {/* Devfolio Sponsor */}
            <VintageCard className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-vintage-dark rounded-full flex items-center justify-center">
                      <Award className="text-vintage-gold" size={32} />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-vintage-dark">
                      Silver Sponsor
                    </h3>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-display text-2xl font-bold text-vintage-brown mb-4">
                      Devfolio
                    </h4>
                    <p className="font-serif text-vintage-brown/90 mb-4">
                      Empowering the future of hackathons
                    </p>
                    <a 
                      href="https://devfolio.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-vintage-brown hover:text-vintage-dark font-medium transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg border-4 border-vintage-dark flex items-center justify-center">
                  <img 
                    src="/assests/Devfolio.png" 
                    alt="Devfolio Logo" 
                    className="max-h-40 max-w-full object-contain"
                  />
                </div>
              </div>
            </VintageCard>

            {/* Axicov Sponsor */}
            <VintageCard className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-vintage-dark rounded-full flex items-center justify-center">
                      <Award className="text-vintage-gold" size={32} />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-vintage-dark">
                      Silver Sponsor
                    </h3>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-display text-2xl font-bold text-vintage-brown mb-4">
                      Axicov
                    </h4>
                    <p className="font-serif text-vintage-brown/90 mb-4">
                      Innovation in healthcare technology
                    </p>
                    <a 
                      href="https://axicov.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-vintage-brown hover:text-vintage-dark font-medium transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg border-4 border-vintage-dark flex items-center justify-center">
                  <img 
                    src="/assests/Axicov.jpg" 
                    alt="Axicov Logo" 
                    className="max-h-40 max-w-full object-contain"
                  />
                </div>
              </div>
            </VintageCard>
          </div>
          
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-vintage-dark mb-8">
              Want to partner with us?
            </h3>
            <a 
              href="mailto:partners@calcuttahack.in" 
              className="inline-block bg-vintage-dark text-vintage-sepia px-8 py-3 text-lg font-display font-bold border-4 border-vintage-dark hover:bg-vintage-brown hover:border-vintage-brown transition-all duration-300"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>
      <CommunityPartners />
      <AvatarCardGenerator />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
