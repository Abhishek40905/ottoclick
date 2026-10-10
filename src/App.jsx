/* oxlint-disable no-unused-vars -- legacy motion modules remain available for future campaign variants */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { Activity, ArrowRight, BarChart3, Bell, Box, Building2, Check, CheckCircle2, ChevronDown, CircleGauge, Clock, Cpu, Eye, Factory, GraduationCap, Heart, Hotel, House, Layers, Lightbulb, Lock, Mail, MapPin, Menu, MessageCircle, Monitor, Moon, Phone, Play, Search, Settings, ShieldCheck, Sliders, Smartphone, Sparkles, Sun, Thermometer, Users, Wifi, Wrench, X, Zap } from 'lucide-react';
import logo from '../ottoclick-logo.svg';
import livingRoom from './assets/ottoclick-living-room.png';
import smartProducts from './assets/ottoclick-smart-products.png';
import { productCategories, productsData } from './data/productsData.js';
import {
  FloorplanShowcase,
  ZigbeeWifiComparison,
  AppAndVoiceShowcase,
  SceneCreationShowcase,
  CatalogueNinePillars,
  WarrantyBanner
} from './components/CatalogueSections.jsx';
import { HeroSlideshow, aboutSlides } from './components/HeroSlideshow.jsx';
import { blogCategories, blogsData } from './data/blogsData.js';

/* â”€â”€â”€ Constants â”€â”€â”€ */
const ease = [0.16, 1, 0.3, 1];
const STOCK = {
  hero: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80',
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  industrial: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  institutional: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  about: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
  products: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
  blogs: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
};

/* â”€â”€â”€ Utility Components â”€â”€â”€ */
const Logo = ({ compact = false }) => <img className={`brand-logo ${compact ? 'brand-logo-compact' : ''}`} src={logo} alt="Ottoclick" />;
const Button = ({ children, className = '', ...props }) => <a className={`button ${className}`} {...props}>{children}</a>;
const SectionHeading = ({ eyebrow, title, text }) => <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;

/* â”€â”€â”€ Animated Logo (SVG) â”€â”€â”€ */
function AnimatedLogo({ scrollYProgress }) {
  const idleProgress = useMotionValue(0);
  const progress = scrollYProgress || idleProgress;
  const ottoX = useTransform(progress, [0, .76], [0, -36]);
  const ottoY = useTransform(progress, [0, .76], [0, -18]);
  const ottoRotate = useTransform(progress, [0, .76], [0, -6]);
  const ottoOpacity = useTransform(progress, [0, .86], [1, 0]);
  const boltY = useTransform(progress, [0, .76], [0, 42]);
  const boltX = useTransform(progress, [0, .76], [0, 8]);
  const boltRotate = useTransform(progress, [0, .76], [0, 22]);
  const boltScale = useTransform(progress, [0, .76], [1, .62]);
  const boltOpacity = useTransform(progress, [0, .86], [1, 0]);
  const clickX = useTransform(progress, [0, .76], [0, 42]);
  const clickY = useTransform(progress, [0, .76], [0, 15]);
  const clickRotate = useTransform(progress, [0, .76], [0, 6]);
  const clickOpacity = useTransform(progress, [0, .86], [1, 0]);
  const scrollStyle = scrollYProgress ? { opacity: ottoOpacity, x: ottoX, y: ottoY, rotate: ottoRotate } : undefined;
  const boltScrollStyle = scrollYProgress ? { opacity: boltOpacity, x: boltX, y: boltY, rotate: boltRotate, scale: boltScale } : undefined;
  const clickScrollStyle = scrollYProgress ? { opacity: clickOpacity, x: clickX, y: clickY, rotate: clickRotate } : undefined;
  return <motion.svg className="animated-logo" viewBox="0 0 599 70" role="img" aria-label="Ottoclick" initial={scrollYProgress ? false : 'hidden'} animate={scrollYProgress ? undefined : 'visible'}>
    <motion.g className="animated-logo-otto" style={scrollStyle} variants={{ hidden: { opacity: 0, x: -62, y: 18, rotate: -7, scale: .82 }, visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, transition: { duration: .95, delay: .1, ease } } }}>
      <path d="M148.011 3.35065H217.793V15.8596H190.452V65.8956H175.352V15.7703H148.011V3.35065Z" fill="#3E3881"/><path d="M73.4069 3.35065H143.189V15.8596H115.848V65.8956H100.748V15.7703H73.4069V3.35065Z" fill="#3E3881"/><path d="M71.2119 34.624C71.2119 56.9615 52.0017 67.9515 35.6506 67.9515C19.2102 67.9515 0 56.9615 0 34.624C0 12.2865 19.2102 1.29645 35.6506 1.29645C52.0017 1.29645 71.2119 12.2865 71.2119 34.624ZM55.8437 34.624C55.8437 21.8469 44.943 15.5924 35.6506 15.5924C26.2689 15.5924 15.3682 21.8469 15.3682 34.624C15.3682 47.401 26.2689 53.5662 35.6506 53.5662C44.943 53.5662 55.8437 47.401 55.8437 34.624Z" fill="#3E3881"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M285.588 16.8146C278.788 6.43097 266.275 1.2962 255.099 1.2962C238.658 1.2962 219.448 12.2862 219.448 34.6237C219.448 56.9612 238.658 67.9512 255.099 67.9512C263.994 67.9512 273.735 64.6989 280.769 58.1366L285.723 41.5829L273.916 41.9246C270.699 49.7578 262.402 53.5659 255.099 53.5659C245.717 53.5659 234.816 47.4008 234.816 34.6237C234.816 21.8467 245.717 15.5922 255.099 15.5922C263.485 15.5922 273.18 20.686 274.992 31.0705L280.358 24.0019L285.588 16.8146Z" fill="#3E3881"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M294.772 52.4341C301.471 62.7041 313.688 67.9515 324.625 67.9515C337.045 67.9515 347.767 62.4118 354.647 53.9236L343.478 44.1844C339.636 49.0987 334.096 53.3875 325.34 53.3875C313.572 53.3875 306.97 46.0574 305.596 37.8764L300.004 45.244L294.772 52.4341ZM306.725 27.3132C309.324 20.8536 315.541 15.7711 325.34 15.7711C332.22 15.7711 339.457 19.7025 343.478 24.7955L354.647 15.0563C347.946 6.3894 337.224 1.29645 324.715 1.29645C316.03 1.29645 306.511 4.60532 299.592 11.1105L294.638 27.6629L306.725 27.3132Z" fill="#1E1A2D"/>
    </motion.g>
    <motion.path className="animated-logo-bolt" style={boltScrollStyle} variants={{ hidden: { opacity: 0, y: -64, rotate: -28, scale: .28 }, visible: { opacity: 1, y: 0, rotate: 0, scale: 1, transition: { type: 'spring', stiffness: 210, damping: 13, mass: .7, delay: .46 } } }} fillRule="evenodd" clipRule="evenodd" d="M300.585 0L291.612 29.9852L309.168 29.4774L298.211 43.9116L279.776 69.2462L288.75 39.2608L271.194 39.7686L282.151 25.3346L300.585 0Z" fill="#9E8CFC" />
    <motion.g className="animated-logo-click" style={clickScrollStyle} variants={{ hidden: { opacity: 0, x: 67, y: -15, rotate: 7, scale: .84 }, visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, transition: { duration: .9, delay: .28, ease } } }}>
      <path d="M380.216 53.2973H420.245V65.8956H365.116V3.35065H380.216V53.2973Z" fill="#1E1A2D"/><path d="M430.209 65.8956V3.35065H445.309V65.8956H430.209Z" fill="#1E1A2D"/><path d="M457.133 34.624C457.133 12.6439 476.076 1.29645 492.159 1.29645C504.668 1.29645 515.39 6.3894 522.091 15.0563L510.922 24.7955C506.901 19.7025 499.664 15.7711 492.784 15.7711C479.471 15.7711 472.77 25.1529 472.77 34.624C472.77 44.0057 479.471 53.3875 492.784 53.3875C501.54 53.3875 507.08 49.0987 510.922 44.1844L522.091 53.9236C515.211 62.4118 504.489 67.9515 492.069 67.9515C475.986 67.9515 457.133 56.6041 457.133 34.624Z" fill="#1E1A2D"/><path d="M532.56 65.8956V3.35065H547.66V29.1728L575.358 3.35065H594.479L565.172 31.3172L598.5 65.8956H578.843L555.165 40.7883L547.66 48.0256V65.8956H532.56Z" fill="#1E1A2D"/>
    </motion.g>
  </motion.svg>;
}

/* â”€â”€â”€ Intro Screen â”€â”€â”€ */
function Intro() {
  const [dismissed, setDismissed] = useState(false);
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const smoothScroll = useSpring(scrollY, { stiffness: 115, damping: 25, mass: .55 });
  const introOpacity = useTransform(smoothScroll, [0, 180], [1, 0]);
  const introScale = useTransform(smoothScroll, [0, 180], [1, .965]);
  const introY = useTransform(smoothScroll, [0, 180], [0, -34]);
  const introBlur = useTransform(smoothScroll, [0, 180], ['blur(0px)', 'blur(9px)']);
  const introProgress = useTransform(smoothScroll, [0, 180], [0, 1]);

  useEffect(() => {
    try { sessionStorage.removeItem('ottoclick_intro_seen'); } catch {}
    if ('scrollRestoration' in window.history) { window.history.scrollRestoration = 'manual'; }
    window.scrollTo(0, 0);
    const unsubscribe = scrollY.on('change', value => {
      if (value > 8) setHasScrolled(true);
      if (value > 160) setDismissed(true);
    });
    return () => unsubscribe();
  }, [scrollY]);

  if (dismissed) return null;
  return <motion.div className="intro" initial={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }} style={{ opacity: introOpacity, scale: introScale, y: introY, filter: introBlur, pointerEvents: hasScrolled ? 'none' : 'auto' }}>
    <motion.div className="intro-mark"><AnimatedLogo scrollYProgress={hasScrolled ? introProgress : undefined} /></motion.div>
    <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7, duration: .45, ease }}>YOUR COMFORT, OUR PRIORITY.</motion.span>
    <motion.div className="intro-scroll-hint" style={{ cursor: 'pointer' }} onClick={() => window.dispatchEvent(new CustomEvent('scroll-to-enter'))} animate={{ opacity: hasScrolled ? 0 : [0.35, 1, 0.35], y: hasScrolled ? 8 : [0, 5, 0] }} transition={{ duration: 2.4, repeat: hasScrolled ? 0 : Infinity, ease: 'easeInOut' }}><span>Scroll to enter</span><ChevronDown size={15} /></motion.div>
  </motion.div>;
}

/* â”€â”€â”€ Navbar â”€â”€â”€ */
function Navbar({ onSearchOpen }) {
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 20);

      if (open) {
        setHidden(false);
        return;
      }

      const prev = lastScrollY.current;
      lastScrollY.current = latest;

      if (latest <= 20) {
        setHidden(false);
      } else if (latest > prev + 4) {
        setHidden(true);
      } else if (latest < prev - 4) {
        setHidden(false);
      }
    });
  }, [scrollY, open]);

  const links = [['Home', '/'], ['About', '/about-us/'], ['Products', '/product/'], ['Blogs', '/blog/']];
  const solutionLinks = [['Home Automation', '/home-automation/'], ['Hotel Automation', '/hotel-automation/'], ['Institutional Automation', '/institutional-automation/'], ['Industrial Automation', '/industrial-automation/']];
  return <motion.header className={`nav-shell ${scrolled ? 'nav-scrolled' : ''} ${hidden ? 'nav-hidden' : ''}`}>
    <motion.div className="nav-progress" style={{ scaleX: scrollYProgress }} />
    <nav className="nav wrap" aria-label="Main navigation">
      <a href="/" className="logo-link" aria-label="Ottoclick home"><Logo compact /></a>
      <div className="nav-links">
        <a href="/">Home</a>
        <div className="nav-dropdown">
          <a href="/home-automation/" className="nav-dropdown-trigger">Solutions <ChevronDown size={13} /></a>
          <div className="nav-dropdown-menu">
            {solutionLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
        </div>
        <a href="/about-us/">About</a>
        <a href="/product/">Products</a>
        <a href="/blog/">Blogs</a>
      </div>
      <div className="nav-right">
        <button type="button" className="nav-search-trigger" aria-label="Open search" onClick={onSearchOpen}><Search size={16} /></button>
        <Button href="/contact-us/" className="nav-cta">Get a Consultation <ArrowRight size={14} /></Button>
      </div>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </nav>
    <motion.div className="mobile-menu" initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <div className="mobile-solutions-group">
        <span className="mobile-solutions-label">Solutions</span>
        {solutionLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="mobile-solution-link">{label}</a>)}
      </div>
      <Button href="/contact-us/" onClick={() => setOpen(false)}>Get a Consultation <ArrowRight size={14} /></Button>
    </motion.div>
  </motion.header>;
}

/* â”€â”€â”€ Routing â”€â”€â”€ */
const pageRoutes = ['/', '/about-us/', '/product/', '/blog/', '/contact-us/', '/home-automation/', '/hotel-automation/', '/industrial-automation/', '/institutional-automation/'];
const getRoute = () => {
  const path = (window.location.pathname || '/').toLowerCase().replace(/\/+$/, '') || '/';
  if (path === '/about-us' || path.startsWith('/about-us/')) return 'about';
  if (path.startsWith('/product/') && path !== '/product') return 'product-detail';
  if (path === '/product') return 'products';
  if (path.startsWith('/blog/') && path !== '/blog') return 'blog-post';
  if (path === '/blog') return 'blogs';
  if (path === '/contact-us' || path.startsWith('/contact-us/') || path.includes('/any-problem')) return 'contact';
  if (path.includes('/home-automation')) return 'solution-home';
  if (path.includes('/hotel-automation')) return 'solution-hotel';
  if (path.includes('/institutional-automation')) return 'solution-institutional';
  if (path.includes('/industrial-automation')) return 'solution-industrial';
  return 'home';
};
const getProductSlug = () => {
  const path = (window.location.pathname || '').replace(/\/+$/, '');
  const match = path.match(/^\/product\/([^/?#]+)/i);
  return match ? decodeURIComponent(match[1]) : null;
};
const getBlogSlug = () => {
  const path = (window.location.pathname || '').replace(/\/+$/, '');
  const match = path.match(/^\/blog\/([^/?#]+)/i);
  return match ? decodeURIComponent(match[1]) : null;
};
function usePageRoute() {
  const [route, setRoute] = useState(getRoute);
  const [productSlug, setProductSlug] = useState(getProductSlug);
  const [blogSlug, setBlogSlug] = useState(getBlogSlug);
  useEffect(() => { const update = () => { setRoute(getRoute()); setProductSlug(getProductSlug()); setBlogSlug(getBlogSlug()); }; window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update); }, []);
  return { route, productSlug, blogSlug };
}

/* â”€â”€â”€ Data â”€â”€â”€ */
const solutionCategories = [
  [House, 'Home Automation', 'Comfort. Security. Control.', 'home'],
  [Hotel, 'Hotel Automation', 'Better experiences. Smarter operations.', 'hotel'],
  [Building2, 'Institutional Automation', 'Intelligent spaces for brighter futures.', 'institutional'],
  [Factory, 'Industrial Automation', 'Efficiency. Safety. Higher performance.', 'industrial'],
];

const automationItems = [
  [Lightbulb, 'Lighting', 'Scenes, dimming & scheduling'],
  [Thermometer, 'HVAC', 'Climate control & ambient sensing'],
  [ShieldCheck, 'Security', 'Surveillance, alerts & monitoring'],
  [Lock, 'Access Control', 'Biometric, keycard & smart locks'],
  [Sun, 'Curtains & Blinds', 'Automated with daylight sensing'],
  [Zap, 'Energy Management', 'Monitor, optimise & save'],
  [Monitor, 'Smart Rooms', 'Centralised room intelligence'],
  [Eye, 'Sensors', 'Motion, temperature & occupancy'],
  [Layers, 'Gates & Shutters', 'Motorised entry automation'],
];

const industries = [
  [House, 'Residential', 'Homes & villas'],
  [Hotel, 'Hospitality', 'Hotels & resorts'],
  [GraduationCap, 'Education', 'Schools & campuses'],
  [Heart, 'Healthcare', 'Hospitals & clinics'],
  [Building2, 'Corporate', 'Offices & workspaces'],
  [BarChart3, 'Retail', 'Showrooms & stores'],
  [Factory, 'Manufacturing', 'Factories & plants'],
  [CircleGauge, 'Commercial', 'Large-scale facilities'],
];

const processSteps = [
  ['Understand', 'We listen, assess your space, and define your automation goals.'],
  ['Design', 'Our engineers create a bespoke system blueprint.'],
  ['Integrate', 'Products and protocols are unified into one ecosystem.'],
  ['Install', 'Clean, professional installation with zero disruption.'],
  ['Support', 'Ongoing maintenance, updates, and dedicated support.'],
];

const beliefs = [
  [Sparkles, 'Innovation', 'Pushing boundaries with thoughtful technology.'],
  [ShieldCheck, 'Reliability', 'Systems that work flawlessly, every single day.'],
  [Smartphone, 'Simplicity', 'Complex technology that feels effortless to use.'],
  [Settings, 'Engineering', 'Precision-designed solutions, never off-the-shelf.'],
  [Users, 'Customer First', 'Your needs shape every decision we make.'],
];

const capabilities = [
  [Search, 'Consultation & Planning', 'We assess your space and design an automation strategy perfectly aligned with your lifestyle and requirements.'],
  [Settings, 'System Design & Engineering', 'Creating tailored blueprints that unify lighting, climate, security, and AV into a cohesive ecosystem.'],
  [Wrench, 'Professional Installation', 'Flawless execution by certified engineers, ensuring clean wiring and zero disruption to your interiors.'],
  [Cpu, 'Custom Programming', 'Setting up intuitive scenes, automated schedules, and intelligent sensor logic that just works.'],
  [Check, 'Commissioning', 'Rigorous testing of every node, switch, and gateway before handover to ensure rock-solid stability.'],
  [Phone, 'Lifelong AMC & Support', 'Dedicated after-sales support, remote troubleshooting, and comprehensive annual maintenance contracts.']
];


const categoryIconMap = {
  'Smart Touch Panels': Sliders,
  'DOOR Locks': Lock,
  'Digital Door Locks': Lock,
  'Door Locks': Lock,
  'Smart Curtains & Blinds': Sun,
  'Smart Lighting': Lightbulb,
  'Motion Sensors': Eye,
  'Wardrobe Sensors': Layers,
  'Gas Sensors': ShieldCheck,
  'Door & Window Sensors': Box,
  'Timer': Clock,
  'Staircase Automation': Activity,
  'Accessories': Cpu,
};

// Legacy slug aliases so any older bookmarks or links gracefully map to catalogue items
const legacySlugMap = {
  'smart-switches': 'luxe-series-2-gang-switch',
  'smart-touch-switches': 'luxe-series-2-gang-switch',
  'smart-controllers': 'infinity-6-smart-touch-control-panel',
  'control-panels': 'homesync-pro-4-smart-touch-panel',
  'lighting-controllers': 'zigbee-cob-driver-7w-13-5w',
  'curtain-controllers': 'curtain-motor-2-5nm',
  'hvac-controllers': 'wifi-ir-rf-blaster',
  'climate-controller': 'wifi-ir-rf-blaster',
  'sensors': 'ceiling-360-degree-microwave-motion-sensor',
  'multi-sensor-pro': 'ceiling-360-degree-microwave-motion-sensor',
  'access-control': 'series-1-smart-door-lock',
  'biometric-smart-lock': 'series-1-smart-door-lock',
  'security-systems': 'series-3-pro-smart-door-lock',
  'series-3-smart-door-lock': 'series-3-pro-smart-door-lock',
  'gate-automation': 'automated-door-motor',
  'shutter-automation': 'garage-shutter-motor',
  'energy-management': 'wifi-circuit-breaker-63a'
};

const productCatalog = productsData.map(p => ({
  ...p,
  Icon: categoryIconMap[p.category] || Wifi,
  detail: p.description
}));

const featuredHomeSlugs = [
  'luxe-series-2-gang-switch',
  'series-3-pro-smart-door-lock',
  'curtain-motor-2-5nm',
  'magnetic-track-linear-diffused-light',
  'ceiling-360-degree-microwave-motion-sensor',
  'infinity-6-smart-touch-control-panel'
];

const featuredCatalogueProducts = featuredHomeSlugs
  .map(slug => productCatalog.find(p => p.slug === slug))
  .filter(Boolean);


/* â”€â”€â”€ Shared UI Components â”€â”€â”€ */
function RefEyebrow({ children }) { return <span className="ref-eyebrow">{children}</span>; }
function RefButton({ children, className = '', ...props }) { return <Button className={`ref-button ${className}`} {...props}>{children} <ArrowRight size={15} /></Button>; }

function RefImage({ src, variant = 'home', className = '', alt = '' }) {
  const imgSrc = src || (variant === 'home' ? livingRoom : STOCK[variant] || livingRoom);
  return <div className={`ref-image ${variant} ${className}`}><img src={imgSrc} alt={alt} /></div>;
}

function CategoryStrip() {
  return <div className="reference-category-strip">
    {solutionCategories.map(([Icon, title, text]) => <a className="reference-category" key={title} href="/home-automation/">
      <Icon size={22} strokeWidth={1.7} />
      <div><strong>{title}</strong><span>{text}</span></div>
      <ArrowRight size={15} />
    </a>)}
  </div>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   HOME PAGE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function ReferenceHome() {
  const homeRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: homeRef, offset: ['start start', 'end start'] });
  return <div ref={homeRef} className="reference-site">
    {/* 1. Hero */}
    <section className="reference-hero reference-home-hero">
      <div className="reference-hero-copy">
        <RefEyebrow>YOUR COMFORT, OUR PRIORITY.</RefEyebrow>
        <h1>Automation<br />for a Smarter<br /><em>World</em></h1>
        <p>We design and deliver intelligent automation solutions for homes, hotels, institutions and industries â€” engineered for performance, built for life.</p>
        <div className="reference-actions">
          <RefButton href="/home-automation/">Explore Solutions</RefButton>
          <RefButton href="/contact-us/" className="ref-button-soft">Talk to an Expert</RefButton>
        </div>
      </div>
      <div className="reference-hero-media">
        <HeroSlideshow />
      </div>
    </section>

    {/* 2. Solution Categories */}
    <CategoryStrip />

    {/* 3. What is OTTOCLICK? */}
    <section className="reference-split reference-home-intro">
      <div>
        <RefEyebrow>WHAT IS OTTOCLICK?</RefEyebrow>
        <h2>Technology that makes spaces feel <em>effortless.</em></h2>
      </div>
      <div>
        <p>OTTOCLICK is not just a product company â€” we are an automation partner. We bring together consultation, system design, product integration and ongoing support to create spaces that are safer, more efficient, and deeply intuitive.</p>
        <RefButton href="/about-us/" className="ref-button-soft">About Ottoclick</RefButton>
      </div>
    </section>

    {/* 4. Complete Home Automation Floorplan (Master Catalogue pp. 6â€“7) */}
    <FloorplanShowcase />

    {/* 5. What We Automate */}
    <section className="reference-section">
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>WHAT WE AUTOMATE</RefEyebrow>
          <h2>Every system, <em>unified.</em></h2>
        </div>
        <p>From lighting and climate to security and access â€” we automate the systems that matter most, all working together seamlessly.</p>
      </div>
      <div className="automate-grid">
        {automationItems.map(([Icon, title, desc], i) => (
          <motion.div className="automate-item" key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04, duration: .45 }}>
            <Icon size={24} strokeWidth={1.6} />
            <h4>{title}</h4>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* 6. Why OTTOCLICK - The 9 Pillars (Master Catalogue p. 5) */}
    <CatalogueNinePillars />

    {/* 7. Zigbee vs. Wi-Fi Comparison Table (Master Catalogue p. 8) */}
    <ZigbeeWifiComparison />

    {/* 8. Mobile App & Voice-Enabled Smart Living (Master Catalogue p. 9) */}
    <AppAndVoiceShowcase />

    {/* 9. Scene Creation: One Space, Many Moods (Master Catalogue p. 42) */}
    <SceneCreationShowcase />

    {/* 10. Industries We Serve */}
    <section className="reference-section">
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>INDUSTRIES WE SERVE</RefEyebrow>
          <h2>Automation for <em>every sector.</em></h2>
        </div>
        <p>From cozy apartments to sprawling campuses â€” our solutions scale to match any environment.</p>
      </div>
      <div className="industry-grid">
        {industries.map(([Icon, title, desc], i) => (
          <motion.a href="/home-automation/" className="industry-card" key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }}>
            <Icon size={22} strokeWidth={1.6} />
            <h4>{title}</h4>
            <p>{desc}</p>
          </motion.a>
        ))}
      </div>
    </section>

    {/* 11. Featured Products from Master Catalogue */}
    <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto 80px' }}>
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>FLAGSHIP HARDWARE</RefEyebrow>
          <h2>Master Catalogue <em>Highlights.</em></h2>
        </div>
        <p>Direct from our 2025 Architectural &amp; Hardware Catalogues: precision switches, biometric locks, silent motors, and sensors.</p>
      </div>

      <div className="product-category-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
        {featuredCatalogueProducts.map((p, i) => (
          <motion.div
            className="product-catalog-card"
            key={p.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * .06, duration: .4 }}
          >
            <div className="product-card-visual" style={{ height: 210 }}>
              {p.badge && <span className="product-floating-badge">{p.badge}</span>}
              <img src={p.image} alt={p.title} className="product-card-img-element" loading="lazy" />
              {p.model && <span className="product-card-model-tag">{p.model}</span>}
            </div>

            <div className="product-card-content">
              <div className="product-card-topmeta">
                <span className="product-card-subcategory">{p.subcategory}</span>
                {p.catalogueSource && (
                  <span className="product-card-pagesource">
                    {p.catalogueSource.replace('Master Catalogue ', 'MC ').replace('Smart Motion PDF ', 'SM ')}
                  </span>
                )}
              </div>

              <h3 className="product-card-title">{p.title}</h3>
              <p className="product-card-desc">{p.shortDesc}</p>

              {p.specs && (
                <div className="product-specs-chips">
                  {Object.entries(p.specs).slice(0, 3).map(([k, v]) => (
                    <span key={k} className="product-spec-pill" title={`${k}: ${v}`}>
                      {v.length > 28 ? v.slice(0, 26) + 'â€¦' : v}
                    </span>
                  ))}
                </div>
              )}

              <div className="product-card-footer" style={{ marginTop: 'auto', paddingTop: 14 }}>
                <a href={`/product/${p.slug}/`} className="product-btn-details" style={{ width: '100%', justifyContent: 'center' }}>
                  Explore Product <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 36 }}>
        <RefButton href="/product/">Browse Complete 118-Product Catalogue</RefButton>
      </div>
    </section>

    {/* 12. How We Work */}
    <section className="reference-process">
      <RefEyebrow>HOW WE WORK</RefEyebrow>
      <h2>From concept to <em>reality.</em></h2>
      <div className="process-stepper">
        {processSteps.map(([title, desc], i) => (
          <motion.div className="process-step" key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
            <div className="step-number">0{i + 1}</div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* 13. Featured Projects */}
    <section className="reference-section">
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>CASE STUDIES</RefEyebrow>
          <h2>Featured <em>projects.</em></h2>
        </div>
        <p>Discover how we've transformed spaces through intelligent automation.</p>
      </div>
      <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
        {[
          { title: "Luxury Smart Villa", category: "Residential", img: livingRoom },
          { title: "Corporate HQ Automation", category: "Commercial", img: STOCK.hotel }
        ].map((proj, i) => (
          <motion.a href="/contact-us/" key={proj.title} style={{ display: 'block', overflow: 'hidden', borderRadius: '12px', background: '#fff', border: '1px solid var(--line)', textDecoration: 'none' }} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}>
            <div style={{ height: '240px' }} className="ref-image about"><img src={proj.img} alt={proj.title} /></div>
            <div style={{ padding: '24px' }}>
              <span style={{ display: 'block', fontSize: '9px', fontWeight: 600, color: 'var(--purple)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>{proj.category}</span>
              <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--ink)' }}>{proj.title}</h4>
              <span className="product-card-link" style={{ marginTop: '14px' }}>View Case Study <ArrowRight size={13} /></span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>

    {/* 14. Trust of Ottoclick - 5 Years Warranty (Master Catalogue p. 43) */}
    <WarrantyBanner />

    {/* 15. CTA */}
    <ReferenceCTA />
  </div>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   ABOUT PAGE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function PageHero({ eyebrow, title, body, variant = 'home', src, slideshow = false, children }) {
  return <section className={`reference-page-hero ${variant}`}>
    <div>
      <RefEyebrow>{eyebrow}</RefEyebrow>
      <h1>{title}</h1>
      {body && <p>{body}</p>}
      {children}
    </div>
    {slideshow ? (
      <div className="reference-page-hero-slideshow">
        <HeroSlideshow slides={aboutSlides} ariaLabel="About Ottoclick showcase slideshow" />
      </div>
    ) : (
      <RefImage src={src} variant={variant} alt="Ottoclick premium smart space" />
    )}
  </section>;
}

function AboutPage() {
  return <div className="reference-site inner-page">
    <PageHero
      eyebrow="YOUR HOME AUTOMATION PARTNER"
      title={<>Redefining<br />Smart Home<br /><em>Automation.</em></>}
      body="Welcome to OTTOCLICK, a forward-thinking automation brand delivering intelligent, energy-efficient solutions for modern homes and spaces. We specialize in designing and deploying smart automation systems that transform everyday environments into seamless, connected, and future-ready living experiences."
      variant="about"
      slideshow
    >
      <RefButton href="/contact-us/">Talk to an Expert</RefButton>
    </PageHero>

    {/* Stats */}
    <div className="reference-stat-row">
      <div><strong>118+</strong><span>Catalogue Products</span></div>
      <div><strong>11</strong><span>Product Categories</span></div>
      <div><strong>5 Years</strong><span>Official Warranty</span></div>
      <div><strong>Zigbee &amp; Wi-Fi</strong><span>Dual Architecture</span></div>
    </div>

    {/* Catalogue Story from Page 4 */}
    <section className="reference-copy-section" style={{ paddingBottom: '40px' }}>
      <RefEyebrow>OUR VISION &amp; PERSPECTIVE â€¢ CATALOGUE PAGE 04</RefEyebrow>
      <h2>From luxury to <em>functional necessity.</em></h2>
      <div className="reference-copy-columns">
        <p>In today's rapidly evolving lifestyle landscape, home automation in India is transitioning from an exclusive luxury offering to a functional necessity. Growing expectations around comfort, convenience, safety, security, and energy efficiency are driving the adoption of smart automation solutions across residential and commercial spaces.</p>
        <p>From residences and villas to institutions and commercial spaces, our focus is on creating the right ambience, comfort, and functionality, ensuring that every automated space feels effortless to use and enjoyable to experience.</p>
      </div>
    </section>

    {/* Catalogue Portfolio Summary */}
    <section className="reference-split" style={{ paddingTop: '20px' }}>
      <div>
        <RefEyebrow>COMPREHENSIVE PORTFOLIO</RefEyebrow>
        <h2>Everything unified under <em>one ecosystem.</em></h2>
      </div>
      <div>
        <p>Our product portfolio includes smart touch switches (Luxe, Aura &amp; Canvas), smart lighting &amp; architectural drivers, motorized curtains/blinds, digital door locks, safety &amp; surveillance systems, and centralized control systems â€” fully app-based and voice-enabled with Amazon Alexa and Google Home.</p>
        <p>With scene-based control and automation workflows, Ottoclick makes smart living intuitive, efficient, and accessible. Experience convenience, control, and innovation â€” designed to fit your lifestyle.</p>
      </div>
    </section>

    {/* Why Choose Ottoclick - 9 Pillars */}
    <CatalogueNinePillars />

    {/* Capabilities */}
    <section className="reference-split" style={{ paddingTop: '10px', marginTop: '-60px', alignItems: 'center' }}>
      <div>
        <RefEyebrow>OUR CAPABILITIES</RefEyebrow>
        <h2>Full-spectrum automation <em>expertise.</em></h2>
        <p style={{ maxWidth: '420px', color: 'var(--muted)', fontSize: '14px', lineHeight: 1.75, margin: '20px 0 35px' }}>
          We handle everything in-house â€” consultation, hardware selection, configuration, and lifelong support.
        </p>
        <div style={{ display: 'grid', gap: '22px' }}>
          {capabilities.map(([Icon, label, desc], i) => (
            <motion.div key={label} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{ display: 'grid', placeItems: 'center', width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(158,140,252,0.1)', color: 'var(--purple)', flexShrink: 0 }}>
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 650, color: 'var(--ink)' }}>{label}</h4>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <RefImage src="/assets/catalogue/scene-creation-p42.png" variant="about" alt="Ottoclick Engineering and Support" />
      </div>
    </section>

    {/* 5 Years Warranty Banner */}
    <WarrantyBanner />

    <ReferenceCTA />
  </div>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SOLUTIONS PAGE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const solutionDetails = {
  home: {
    hero: 'Your Home. Your Rules. Automated.',
    desc: 'From lighting scenes to security systems â€” we make your home respond to your life, not the other way around.',
    features: [
      [Lightbulb, 'Lighting', 'Scenes, dimming, colour tuning & scheduling.'],
      [Sun, 'Curtains', 'Motorised curtains that respond to daylight.'],
      [Thermometer, 'HVAC', 'Smart climate control for every room.'],
      [ShieldCheck, 'Security', 'Cameras, alarms & intrusion detection.'],
      [Lock, 'Door Locks', 'Biometric & smart lock integration.'],
      [Box, 'Gates', 'Automated gate and garage door control.'],
      [Monitor, 'Entertainment', 'Multi-room audio & video control.'],
      [Activity, 'Sensors', 'Motion, occupancy & environmental sensors.'],
      [Zap, 'Energy Management', 'Track & reduce consumption property-wide.'],
    ],
    useCases: ['Smart Villa', 'Luxury Apartment', 'Second Home', 'Penthouse'],
    capabilities: ['Centralised Control', 'App Control', 'Voice Control', 'Scenes & Scheduling', 'Remote Monitoring'],
  },
  hotel: {
    hero: 'Smarter Hotels. Better Guest Experiences.',
    desc: 'Automate guest rooms, manage energy, and deliver a premium brand experience â€” all from one dashboard.',
    features: [
      [Monitor, 'Guest Room Automation', 'Personalised room settings for every guest.'],
      [Lightbulb, 'Lighting Control', 'Mood scenes & occupancy-based automation.'],
      [Thermometer, 'HVAC Control', 'Energy-saving climate management.'],
      [Lock, 'Key Card Integration', 'Access control linked to room systems.'],
      [Zap, 'Energy Management', 'Track & reduce consumption property-wide.'],
      [Bell, 'DND / MUR', 'Do Not Disturb & Make Up Room indicators.'],
      [Sun, 'Smart Curtains', 'Automated curtains tied to guest presence.'],
      [Eye, 'Centralised Monitoring', 'Real-time status of every room.'],
    ],
    useCases: ['Boutique Hotels', 'Luxury Resorts', 'Business Hotels', 'Heritage Properties'],
    capabilities: ['Better Guest Experience', 'Energy Savings', 'Operational Efficiency', 'Reduced Manual Intervention', 'Premium Brand'],
  },
  institutional: {
    hero: 'Intelligent Spaces for Brighter Futures.',
    desc: 'Schools, hospitals, offices and campuses â€” managed from one centralised, intelligent platform.',
    features: [
      [Lightbulb, 'Lighting', 'Automated lighting for classrooms & corridors.'],
      [Thermometer, 'HVAC', 'Centralised climate for large facilities.'],
      [Lock, 'Access Control', 'Secure entry for students, staff & visitors.'],
      [ShieldCheck, 'Security', 'Campus-wide surveillance & alerts.'],
      [Zap, 'Energy Monitoring', 'Track consumption across every zone.'],
      [Monitor, 'Conference Rooms', 'One-touch AV & automation control.'],
    ],
    useCases: ['Schools & Colleges', 'Hospitals', 'Corporate Campuses', 'Government Buildings'],
    capabilities: ['Energy Efficiency', 'Centralised Management', 'Security', 'Operational Control', 'Scalability'],
  },
  industrial: {
    hero: 'Intelligent Control for Industrial Environments.',
    desc: 'Monitoring, safety, energy optimisation and process control â€” engineered for the toughest environments.',
    features: [
      [Eye, 'Monitoring & Control', 'Real-time system visibility & alerts.'],
      [Zap, 'Energy Management', 'Optimise consumption across all operations.'],
      [Lightbulb, 'Lighting Automation', 'Occupancy & schedule-based control.'],
      [Lock, 'Access & Security', 'Restricted area control & surveillance.'],
      [Settings, 'Equipment Monitoring', 'Track performance & maintenance needs.'],
      [BarChart3, 'Process Integration', 'Connect to existing industrial systems.'],
    ],
    useCases: ['Manufacturing Plants', 'Warehouses', 'Data Centres', 'Processing Facilities'],
    capabilities: ['Efficiency', 'Safety', 'Reduced Downtime', 'Energy Optimisation', 'Centralised Visibility'],
  },
};

function SolutionsPage() {
  return <div className="reference-site inner-page">
    <PageHero eyebrow="SOLUTIONS" title={<>Automation<br />Solutions for<br /><em>Every Space</em></>} body="From modern homes to large industrial facilities, we deliver customised automation solutions that simplify operations and enhance life." variant="solutions" />

    {/* Solution Cards Grid */}
    <section className="reference-section reference-solutions-grid">
      {solutionCategories.map(([Icon, title, text, variant], i) => (
        <motion.div className="reference-solution-card" key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
          <RefImage variant={variant} />
          <div className="reference-solution-copy">
            <Icon size={21} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </motion.div>
      ))}
    </section>

    {/* Detailed Solution Sections */}
    {solutionCategories.map(([Icon, title, , variant]) => {
      const detail = solutionDetails[variant];
      return <section className="solution-detail-section" key={variant} style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
        <RefEyebrow>{title.toUpperCase()}</RefEyebrow>
        <h3>{detail.hero}</h3>
        <p style={{ maxWidth: 540, color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>{detail.desc}</p>
        <div className="solution-feature-grid">
          {detail.features.map(([FIcon, fname, fdesc]) => (
            <div className="solution-feature" key={fname}>
              <FIcon size={18} strokeWidth={1.6} />
              <div><h4>{fname}</h4><p>{fdesc}</p></div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
          {detail.useCases.map(uc => <span key={uc} style={{ padding: '6px 14px', fontSize: 10, fontWeight: 600, color: 'var(--purple)', background: 'rgba(158,140,252,0.1)', borderRadius: 99 }}>{uc}</span>)}
        </div>
      </section>;
    })}

    {/* Why Automation */}
    <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>WHY AUTOMATION?</RefEyebrow>
          <h2>The case for <em>intelligent spaces.</em></h2>
        </div>
        <p>Automation isn't a luxury â€” it's an investment in comfort, safety, efficiency, and the future value of your property.</p>
      </div>
      <div className="reference-value-grid">
        {['Up to 30% energy savings', 'Enhanced security & safety', '24/7 remote monitoring', 'Increased property value'].map((item, i) => (
          <motion.div className="reference-value-card" key={item} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}>
            <span>0{i + 1}</span>
            <h3>{item}</h3>
            <p>Intelligent automation delivers measurable improvements across every metric that matters.</p>
          </motion.div>
        ))}
      </div>
    </section>

    <ReferenceCTA />
  </div>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PRODUCTS PAGE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const productResultsRef = useRef(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setQuickViewProduct(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const currentCategoryData = productCategories.find(c => c.id === activeCategory);

  const filteredProducts = productCatalog.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.categorySlug === activeCategory;
    const matchesSubcategory = activeSubcategory === 'All' || product.subcategory === activeSubcategory;
    const searchHaystack = `${product.title} ${product.model || ''} ${product.category} ${product.subcategory || ''} ${product.description || ''} ${product.badge || ''} ${product.idealFor || ''} ${product.highlights?.join(' ') || ''} ${JSON.stringify(product.specs || {})}`.toLowerCase();
    const matchesSearch = !normalizedSearch || searchHaystack.includes(normalizedSearch);
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    setActiveSubcategory('All');
    setQuickViewProduct(null);
    if (productResultsRef.current) {
      productResultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubcategorySelect = (subcat) => {
    setActiveSubcategory(subcat);
    setQuickViewProduct(null);
  };

  return (
    <div className="reference-site inner-page">
      <PageHero
        eyebrow="OTTOCLICK MASTER CATALOGUE"
        title={<>Smart Automation<br />Engineered for <em>Every Space</em></>}
        body="Explore our complete hardware range: Smart Touch Panels, Digital Door Locks, Motorized Curtains & Blinds, Architectural Lighting, and Advanced Sensors."
        variant="products"
        src={smartProducts}
      >
        <form className="reference-search product-search-shell" role="search" onSubmit={e => e.preventDefault()}>
          <button type="submit" className="product-search-submit" aria-label="Search catalogue"><Search size={16} /></button>
          <input
            aria-label="Search products by model or keyword"
            autoComplete="off"
            value={searchTerm}
            onChange={e => { setSearchTerm(e.target.value); setQuickViewProduct(null); }}
            placeholder="Search by model (e.g. LSW/Z, OC-DL01, OC-T1) or keyword..."
          />
          {searchTerm && (
            <button type="button" className="product-search-clear" aria-label="Clear search" onClick={() => setSearchTerm('')}>
              <X size={15} />
            </button>
          )}
        </form>
      </PageHero>

      <section className="product-catalog-section" ref={productResultsRef} id="product-catalog">
        <div className="product-catalog-heading">
          <div>
            <RefEyebrow>OUR PRODUCT RANGE</RefEyebrow>
            <h2>Select a category to <em>explore.</em></h2>
          </div>
          <p className="product-catalog-subtitle">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available in the master catalogue.
          </p>
        </div>

        {/* â”€â”€â”€ 11 Primary Buttons as Specified by Layout â”€â”€â”€ */}
        <div className="category-buttons-wrapper">
          <div className="category-buttons-scroll" role="tablist" aria-label="Catalogue Categories">
            <button
              type="button"
              className={`category-btn ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => handleCategorySelect('all')}
            >
              <span className="category-btn-num">â˜…</span>
              <span>All Products</span>
              <span className="category-btn-count">({productCatalog.length})</span>
            </button>

            {productCategories.map((cat, index) => {
              const count = productCatalog.filter(p => p.categorySlug === cat.id).length;
              const numStr = (index + 1) <= 9 ? `0${index + 1}` : `${index + 1}`;
              return (
                <button
                  type="button"
                  key={cat.id}
                  className={`category-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                  onClick={() => handleCategorySelect(cat.id)}
                >
                  <span className="category-btn-num">{numStr}</span>
                  <span>{cat.name}</span>
                  <span className="category-btn-count">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* â”€â”€â”€ Subcategory Filters Ribbon â”€â”€â”€ */}
        {currentCategoryData && currentCategoryData.subcategories && currentCategoryData.subcategories.length > 1 && (
          <div className="subcategory-filters-bar">
            <span className="subcategory-label">
              <Sliders size={13} /> {currentCategoryData.name}:
            </span>
            {currentCategoryData.subcategories.map(subcat => {
              const subCount = subcat === 'All'
                ? productCatalog.filter(p => p.categorySlug === activeCategory).length
                : productCatalog.filter(p => p.categorySlug === activeCategory && p.subcategory === subcat).length;
              return (
                <button
                  type="button"
                  key={subcat}
                  className={`subcat-pill ${activeSubcategory === subcat ? 'is-active' : ''}`}
                  onClick={() => handleSubcategorySelect(subcat)}
                >
                  {subcat} {subCount > 0 && `(${subCount})`}
                </button>
              );
            })}
          </div>
        )}

        {/* â”€â”€â”€ Status & Active Filters Bar â”€â”€â”€ */}
        <div className="catalog-status-bar">
          <span className="catalog-status-text">
            {activeCategory === 'all' ? (
              <>Showing <strong>all {filteredProducts.length}</strong> products across all categories</>
            ) : (
              <>
                Showing <strong>{filteredProducts.length}</strong> product{filteredProducts.length !== 1 ? 's' : ''} in <strong>{currentCategoryData?.name}</strong>
                {activeSubcategory !== 'All' && <> &rsaquo; <em>{activeSubcategory}</em></>}
                {currentCategoryData?.catalogueRef && <span style={{ marginLeft: 8, opacity: .7 }}>({currentCategoryData.catalogueRef})</span>}
              </>
            )}
            {searchTerm && <> matching &ldquo;<strong>{searchTerm}</strong>&rdquo;</>}
          </span>

          {(activeCategory !== 'all' || activeSubcategory !== 'All' || searchTerm) && (
            <button
              type="button"
              className="catalog-reset-btn"
              onClick={() => { setActiveCategory('all'); setActiveSubcategory('All'); setSearchTerm(''); }}
            >
              <X size={13} /> Reset Filters
            </button>
          )}
        </div>

        {/* â”€â”€â”€ Product Cards Grid â”€â”€â”€ */}
        {filteredProducts.length > 0 ? (
          <div className="product-category-grid">
            {filteredProducts.map((p, i) => (
              <motion.div
                className="product-catalog-card"
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .3, delay: Math.min(i * .03, .3) }}
              >
                <div className="product-card-visual">
                  {p.badge && <span className="product-floating-badge">{p.badge}</span>}
                  {p.model && <span className="product-model-chip">{p.model}</span>}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="product-card-img-element"
                    loading="lazy"
                  />
                </div>

                <div className="product-card-content">
                  <div className="product-card-topmeta">
                    <span className="product-card-subcategory">{p.subcategory}</span>
                    {p.catalogueSource && <span className="product-card-pagesource">{p.catalogueSource.replace('Master Catalogue ', 'MC ').replace('Smart Motion PDF ', 'SM ')}</span>}
                  </div>

                  <h3 className="product-card-title">{p.title}</h3>
                  <p className="product-card-desc">{p.shortDesc}</p>

                  {p.specs && (
                    <div className="product-specs-chips">
                      {Object.entries(p.specs).slice(0, 3).map(([k, v]) => (
                        <span key={k} className="product-spec-pill" title={`${k}: ${v}`}>
                          {v.length > 28 ? v.slice(0, 26) + 'â€¦' : v}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="product-card-footer">
                    <button
                      type="button"
                      className="product-btn-quickview"
                      onClick={() => setQuickViewProduct(p)}
                    >
                      <Eye size={13} /> Quick Specs
                    </button>
                    <a href={`/product/${p.slug}/`} className="product-btn-details">
                      Details <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="product-empty-state">
            <Search size={28} />
            <h3>No products found</h3>
            <p>Try adjusting your search terms or select another category from the list above.</p>
            <button
              type="button"
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); setActiveSubcategory('All'); }}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* â”€â”€â”€ Interactive Quick Specs Modal â”€â”€â”€ */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            className="product-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2 }}
            onClick={() => setQuickViewProduct(null)}
          >
            <motion.div
              className="product-modal-container"
              initial={{ opacity: 0, scale: .94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: .94, y: 16 }}
              transition={{ duration: .25, ease }}
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                className="product-modal-close"
                onClick={() => setQuickViewProduct(null)}
                aria-label="Close product modal"
              >
                <X size={18} />
              </button>

              <div className="product-modal-scroll">
                <div className="product-modal-visual">
                  {quickViewProduct.badge && (
                    <span className="product-floating-badge" style={{ position: 'absolute', top: 18, left: 18 }}>
                      {quickViewProduct.badge}
                    </span>
                  )}
                  <img
                    src={quickViewProduct.image}
                    alt={quickViewProduct.title}
                    className="product-modal-img"
                  />
                  {quickViewProduct.catalogueSource && (
                    <span className="product-modal-source-tag">
                      {quickViewProduct.catalogueSource}
                    </span>
                  )}
                </div>

                <div className="product-modal-body">
                  <span className="product-modal-category-crumb">
                    {quickViewProduct.category} &rsaquo; {quickViewProduct.subcategory}
                  </span>
                  <h3 className="product-modal-title">{quickViewProduct.title}</h3>
                  {quickViewProduct.model && (
                    <span className="product-modal-model-badge">
                      Model: {quickViewProduct.model}
                    </span>
                  )}
                  <p className="product-modal-desc">{quickViewProduct.description}</p>

                  {/* Specifications Table */}
                  {quickViewProduct.specs && (
                    <>
                      <div className="product-specs-table-title">
                        <Sliders size={14} /> Technical Specifications
                      </div>
                      <table className="product-specs-table">
                        <tbody>
                          {Object.entries(quickViewProduct.specs).map(([key, val]) => (
                            <tr key={key}>
                              <td className="product-specs-key">{key}</td>
                              <td className="product-specs-val">{val}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}

                  {/* Key Highlights */}
                  {quickViewProduct.highlights && quickViewProduct.highlights.length > 0 && (
                    <div className="product-modal-highlights">
                      <div className="product-specs-table-title">
                        <CheckCircle2 size={14} /> Key Highlights
                      </div>
                      <ul>
                        {quickViewProduct.highlights.map(h => (
                          <li key={h}>
                            <Check size={14} /> <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="product-modal-actions">
                    <Button
                      href={`/contact-us/?product=${encodeURIComponent(quickViewProduct.title)}`}
                      className="ref-button"
                    >
                      Request a Quote <ArrowRight size={14} />
                    </Button>
                    <a
                      href={`/product/${quickViewProduct.slug}/`}
                      className="button ref-button-soft"
                    >
                      View Full Page
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ReferenceCTA />
    </div>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   BLOGS PAGE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function BlogsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogsData.filter(blog => {
    const matchesFilter = activeFilter === 'All' || blog.category === activeFilter;
    const matchesSearch = searchQuery.trim() === '' ||
      `${blog.title} ${blog.summary} ${blog.category}`.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesFilter && matchesSearch;
  });

  const featured = blogsData.find(b => b.featured) || blogsData[0];

  return <div className="reference-site inner-page">
    <PageHero
      eyebrow="OTTOCLICK BLOGS"
      title={<>Engineering Insights &amp;<br />Modern <em>Smart Living</em></>}
      body="Explore in-depth architectural guides, protocol comparisons, technical breakdowns, and real-world automation case studies."
      variant="blogs"
    >
      <div className="reference-search">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles, guides, protocols..."
          style={{ border: 'none', outline: 'none', background: 'transparent', width: '100%', fontSize: 13, color: 'inherit' }}
        />
        <Search size={15} />
      </div>
    </PageHero>

    {/* Filters */}
    <div className="reference-filter-row">
      {blogCategories.map(cat => (
        <span
          key={cat}
          className={activeFilter === cat ? 'active' : ''}
          onClick={() => setActiveFilter(cat)}
          style={{ cursor: 'pointer' }}
        >
          {cat}
        </span>
      ))}
    </div>

    {/* Featured Article Spotlight */}
    {activeFilter === 'All' && searchQuery.trim() === '' && (
      <section className="blogs-featured-hero">
        <a href={`/blog/${featured.slug}/`} className="blogs-featured-card">
          <div className="blogs-featured-visual">
            <img src={featured.image} alt={featured.title} />
            <span className="blogs-featured-badge">Featured Article</span>
          </div>
          <div className="blogs-featured-content">
            <div className="blogs-meta-row">
              <span className="blogs-meta-pill">{featured.category}</span>
              <span>â€¢</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={12} /> {featured.readTime}</span>
              <span>â€¢</span>
              <span>{featured.date}</span>
            </div>
            <h2 className="blogs-featured-title">{featured.title}</h2>
            <p className="blogs-featured-summary">{featured.summary}</p>
            <div className="blogs-author-strip">
              <div className="blogs-author-avatar">OC</div>
              <div className="blogs-author-info">
                <strong>{featured.author}</strong>
                <span>{featured.authorRole}</span>
              </div>
            </div>
          </div>
        </a>
      </section>
    )}

    {/* Blog Cards Grid */}
    <section className="blogs-grid-section">
      <div className="blogs-grid">
        {filteredBlogs.map((blog) => (
          <a href={`/blog/${blog.slug}/`} className="blog-card-item" key={blog.id}>
            <div className="blog-card-media">
              <img src={blog.image} alt={blog.title} />
              <span className="blog-card-badge">{blog.category}</span>
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>{blog.date}</span>
                <span>â€¢</span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-summary">{blog.summary}</p>
              <div className="blog-card-footer">
                <span>Read Article</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="insights-bottom-cta">
      <h3>Want to automate your space?</h3>
      <p>Talk to OTTOCLICK â€” our engineering specialists design solutions tailored to your floorplan.</p>
      <RefButton href="/contact-us/">Get in Touch</RefButton>
    </section>
  </div>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   CONTACT PAGE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function ContactPage() {
  const [sent, setSent] = useState(false);
  return <div className="reference-site inner-page">
    <section className="reference-contact">
      <div className="reference-contact-copy">
        <RefEyebrow>GET IN TOUCH</RefEyebrow>
        <h1>Let's Build<br />Smarter Spaces<br /><em>Together</em></h1>
        <p>Have a project in mind? Our team is here to help you find the right automation solution.</p>
        <div className="reference-contact-list">
          <span><Phone size={16} /> <a href="tel:+918423466267" style={{ color: 'inherit', textDecoration: 'none' }}>+91 842 346 6267</a></span>
          <span><Phone size={16} /> <a href="tel:+919569548542" style={{ color: 'inherit', textDecoration: 'none' }}>+91 956 954 8542</a></span>
          <span><MessageCircle size={16} /> <a href="https://wa.me/918423466267" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+91 842 346 6267 (WhatsApp)</a></span>
          <span><Mail size={16} /> <a href="mailto:support@ottoclick.in" style={{ color: 'inherit', textDecoration: 'none' }}>support@ottoclick.in</a></span>
          <span><MapPin size={16} /> CSJMIF Shopping Complex, Kalyanpur, Kanpur, Uttar Pradesh 208024</span>
          <span><Clock size={16} /> Mon â€“ Sat &nbsp;|&nbsp; 10:00 AM â€“ 6:00 PM</span>
        </div>
        <div className="reference-socials">
          <a href="https://www.linkedin.com/company/ottoclick-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://www.instagram.com/ottoclick.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          
        </div>
      </div>
      <form className="reference-contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
        <h3>Send Us a Message</h3>
        <input required placeholder="Your Name*" />
        <input placeholder="Company (optional)" />
        <input required type="email" placeholder="Email Address*" />
        <input required placeholder="Phone Number*" />
        <input placeholder="City" />
        <input placeholder="Project Type (e.g., Villa, Hotel, Corporate)" />
        <select>
          <option>Solution Required</option>
          <option>Home Automation</option>
          <option>Hotel Automation</option>
          <option>Institutional Automation</option>
          <option>Industrial Automation</option>
          <option>Product Enquiry</option>
          <option>Partnership</option>
          <option>Other</option>
        </select>
        <select>
          <option>Estimated Budget</option>
          <option>Under â‚¹1 Lakh</option>
          <option>â‚¹1â€“3 Lakhs</option>
          <option>â‚¹3â€“10 Lakhs</option>
          <option>â‚¹10+ Lakhs</option>
        </select>
        <textarea placeholder="Tell us about your project..." rows="4" />
        <button type="submit">{sent ? 'Enquiry Sent âœ“' : <>Submit Enquiry <ArrowRight size={15} /></>}</button>
      </form>
    </section>

    {/* Map placeholder */}
    <section style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto 60px', height: 280, background: 'var(--soft)', borderRadius: 12, border: '1px solid var(--line)', display: 'grid', placeItems: 'center', color: 'var(--muted)', fontSize: 13 }}>
      <div style={{ textAlign: 'center' }}>
        <MapPin size={28} strokeWidth={1.5} style={{ marginBottom: 8, color: 'var(--purple)' }} />
        <p style={{ margin: 0, fontWeight: 600, color: 'var(--ink)' }}>CSJMIF Shopping Complex, Kalyanpur, Kanpur, Uttar Pradesh 208024</p>
        <small>Ottoclick Head Office &amp; Experience Studio (Master Catalogue Page 44)</small>
      </div>
    </section>
  </div>;
}

/* â”€â”€â”€ Shared CTA â”€â”€â”€ */
function ReferenceCTA() {
  return <section className="reference-cta">
    <div>
      <RefEyebrow>YOUR COMFORT, OUR PRIORITY.</RefEyebrow>
      <h2>Ready to automate <em>your space?</em></h2>
    </div>
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <RefButton href="/contact-us/">Talk to an Expert</RefButton>
      <RefButton href="/contact-us/" className="ref-button-soft">Request a Consultation</RefButton>
    </div>
  </section>;
}

/* â”€â”€â”€ Footer â”€â”€â”€ */
function ReferenceFooter() {
  return <footer className="reference-footer">
    <div className="reference-footer-top">
      <div>
        <Logo />
        <p>Your comfort, our priority. Engineered in Kanpur, deployed everywhere.</p>
        <div className="reference-socials" style={{ marginTop: 24, fontSize: 13, gap: 16 }}>
          <a href="https://www.linkedin.com/company/ottoclick-pvt-ltd/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple)', textDecoration: 'none', fontWeight: 600 }}>LinkedIn</a>
          <a href="https://www.instagram.com/ottoclick.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple)', textDecoration: 'none', fontWeight: 600 }}>Instagram</a>
          
        </div>
      </div>
      <div className="reference-footer-links">
        <div>
          <strong>Quick Links</strong>
          <a href="/about-us/">About Us</a>
          <a href="/home-automation/">Solutions</a>
          <a href="/product/">Products</a>
          <a href="/blog/">Blogs</a>
          <a href="/about-us/#warranty">5-Year Warranty</a>
        </div>
        <div>
          <strong>Solutions</strong>
          <a href="/home-automation/">Home Automation</a>
          <a href="/hotel-automation/">Hotel Automation</a>
          <a href="/institutional-automation/">Institutional</a>
          <a href="/industrial-automation/">Industrial</a>
        </div>
        <div>
          <strong>Products</strong>
          <a href="/product/smart-touch-switches/">Smart Switches</a>
          <a href="/product/multi-sensor-pro/">Sensors</a>
          <a href="/product/climate-controller/">HVAC Control</a>
          <a href="/product/biometric-smart-lock/">Security</a>
        </div>
        <div>
          <strong>Connect</strong>
          <a href="/contact-us/">Contact Us</a>
          <a href="mailto:support@ottoclick.in">support@ottoclick.in</a>
          <a href="tel:+918423466267">+91 842 346 6267</a>
          <a href="tel:+919569548542">+91 956 954 8542</a>
          <span style={{ fontSize: 9, color: '#98949e', marginTop: 4 }}>CSJMIF Shopping Complex, Kalyanpur, Kanpur 208024</span>
        </div>
      </div>
    </div>
    <div className="reference-footer-bottom">
      <span>Â© {new Date().getFullYear()} Ottoclick. All rights reserved.</span>
      <span style={{ display: 'flex', gap: 16 }}>
        <a href="#" style={{ color: '#98949e' }}>Privacy Policy</a>
        <a href="/about-us/#warranty" style={{ color: '#98949e' }}>5-Year Warranty Terms</a>
      </span>
      <span>Kanpur, Uttar Pradesh, India</span>
    </div>
  </footer>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SEARCH OVERLAY
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [prevOpen, setPrevOpen] = useState(open);
  const inputRef = useRef(null);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setQuery('');
    }
  }

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const normalizedQuery = query.trim().toLowerCase();
  const allSearchableItems = [
    ...productCatalog.map(p => ({
      type: 'Product',
      title: p.model ? `${p.title} (${p.model})` : p.title,
      description: p.shortDesc || p.description,
      href: `/product/${p.slug}/`,
      icon: p.Icon,
      meta: `${p.category}${p.model ? ` â€¢ ${p.model}` : ''}`
    })),
    ...solutionCategories.map(([Icon, title, text, variant]) => ({ type: 'Solution', title, description: text, href: '/home-automation/', icon: Icon, meta: 'Solutions' })),
    ...blogsData.map(b => ({ type: 'Blog', title: b.title, description: b.summary, href: `/blog/${b.slug}/`, icon: Play, meta: b.category })),
    { type: 'Page', title: 'About Us', description: 'Learn about our story, values and vision.', href: '/about-us/', icon: Users, meta: 'Company' },
    { type: 'Page', title: 'Contact Us', description: 'Get in touch for consultations and enquiries.', href: '/contact-us/', icon: Mail, meta: 'Company' },
    { type: 'Page', title: 'Products', description: 'Explore our full range of automation hardware.', href: '/product/', icon: Cpu, meta: 'Company' },
  ];

  const results = normalizedQuery.length > 0
    ? allSearchableItems.filter(item => `${item.title} ${item.description} ${item.meta} ${item.type}`.toLowerCase().includes(normalizedQuery))
    : [];

  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {});

  return <AnimatePresence>
    {open && <motion.div className="search-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .2 }} onClick={onClose}>
      <motion.div className="search-overlay-panel" initial={{ opacity: 0, y: -20, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: .98 }} transition={{ duration: .25, ease }} onClick={e => e.stopPropagation()}>
        <div className="search-overlay-input-row">
          <Search size={18} className="search-overlay-icon" />
          <input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products, solutions, articles..." autoComplete="off" />
          <button type="button" className="search-overlay-close" onClick={onClose}><span>ESC</span></button>
        </div>
        {normalizedQuery.length > 0 && <div className="search-overlay-results">
          {results.length === 0 ? <div className="search-empty"><Search size={22} /><p>No results for "{query}"</p><span>Try searching for products, solutions or pages</span></div>
          : Object.entries(groupedResults).map(([type, items]) => (
            <div className="search-result-group" key={type}>
              <span className="search-result-type">{type}s</span>
              {items.slice(0, 5).map(item => {
                const ItemIcon = item.icon;
                return <a key={item.title} href={item.href} className="search-result-row" onClick={onClose}>
                  <div className="search-result-icon"><ItemIcon size={18} strokeWidth={1.5} /></div>
                  <div className="search-result-text">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                  <span className="search-result-meta">{item.meta}</span>
                  <ArrowRight size={14} className="search-result-arrow" />
                </a>;
              })}
            </div>
          ))}
          {results.length > 0 && <div className="search-result-count">{results.length} result{results.length !== 1 ? 's' : ''} found</div>}
        </div>}
        {normalizedQuery.length === 0 && <div className="search-overlay-hints">
          <span className="search-hint-label">Popular searches</span>
          <div className="search-hint-tags">
            {['Smart Switches', 'HVAC', 'Security', 'Lighting', 'Home Automation', 'Sensors'].map(tag => (
              <button key={tag} type="button" onClick={() => setQuery(tag)}>{tag}</button>
            ))}
          </div>
        </div>}
      </motion.div>
    </motion.div>}
  </AnimatePresence>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PRODUCT DETAIL PAGE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function ProductDetailPage({ slug }) {
  const cleanSlug = (slug || '').toLowerCase().trim();
  const resolvedSlug = (legacySlugMap[cleanSlug] || cleanSlug).toLowerCase();
  const product = productCatalog.find(p => {
    const pSlug = (p.slug || '').toLowerCase();
    const pId = (p.id || '').toLowerCase();
    const pModel = (p.model || '').toLowerCase();
    const pTitleSlug = (p.title || '').toLowerCase().replace(/[/\s_:+-]+/g, '-');
    return (
      pSlug === resolvedSlug ||
      pId === resolvedSlug ||
      pSlug === cleanSlug ||
      pId === cleanSlug ||
      pModel === cleanSlug ||
      pModel.replace(/[/\s_-]+/g, '-') === cleanSlug.replace(/[/\s_-]+/g, '-') ||
      pTitleSlug === cleanSlug ||
      pTitleSlug === resolvedSlug
    );
  });

  if (!product) return <div className="reference-site inner-page" style={{ padding: '120px 24px', textAlign: 'center' }}>
    <h2>Product not found</h2>
    <p style={{ color: 'var(--muted)', margin: '12px 0 24px' }}>The product you're looking for doesn't exist.</p>
    <RefButton href="/product/">Browse All Products</RefButton>
  </div>;

  const relatedProducts = productCatalog.filter(p => p.category === product.category && p.slug !== product.slug);
  const otherProducts = relatedProducts.length > 0 ? relatedProducts : productCatalog.filter(p => p.slug !== product.slug).slice(0, 3);

  return <div className="reference-site inner-page">
    {/* Breadcrumb */}
    <nav className="product-breadcrumb">
      <a href="/">Home</a> <span>/</span> <a href="/product/">Products</a> <span>/</span> <span className="current">{product.title}</span>
    </nav>

    {/* Hero Section */}
    <section className="pdp-hero">
      <div className="pdp-image-stage">
        {product.badge && <span className="product-floating-badge" style={{ position: 'absolute', top: 20, left: 20 }}>{product.badge}</span>}
        <motion.img
          src={product.image}
          alt={product.title}
          className="pdp-main-image"
          initial={{ opacity: 0, scale: .92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5, ease }}
        />
        {product.model && <span className="product-model-chip" style={{ position: 'absolute', top: 20, right: 20 }}>{product.model}</span>}
      </div>

      <motion.div className="pdp-hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .15, ease }}>
        <RefEyebrow>{product.category.toUpperCase()}{product.subcategory ? ` â€¢ ${product.subcategory.toUpperCase()}` : ''}</RefEyebrow>
        <h1>{product.title}</h1>
        {product.model && <span className="pdp-model-pill">Model: {product.model}</span>}
        <p className="pdp-description">{product.description || product.detail}</p>
        {product.catalogueSource && (
          <small style={{ display: 'block', color: 'var(--muted)', marginBottom: 20, fontFamily: 'DM Mono', fontSize: 11 }}>
            Reference: {product.catalogueSource}
          </small>
        )}

        {product.specs && (
          <div className="pdp-specs-grid">
            {Object.entries(product.specs).slice(0, 6).map(([k, v]) => (
              <div key={k} className="pdp-spec-box">
                <span className="pdp-spec-label">{k}</span>
                <span className="pdp-spec-value">{v}</span>
              </div>
            ))}
          </div>
        )}

        <div className="pdp-actions">
          <RefButton href={`/contact-us/?product=${encodeURIComponent(product.title)}`}>Request a Quote</RefButton>
          <RefButton href="/contact-us/" className="ref-button-soft">Talk to an Expert</RefButton>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 22, padding: '12px 16px', background: 'rgba(158,140,252,0.08)', borderRadius: 10, border: '1px solid rgba(158,140,252,0.22)' }}>
          <ShieldCheck size={22} color="#9E8CFC" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: 12, lineHeight: 1.45, color: 'var(--ink)' }}>
            <strong>5-Year Warranty Included:</strong> Genuine Ottoclick hardware includes free parts, labor &amp; pan-India service support (Catalogue Page 43).
          </div>
        </div>
      </motion.div>
    </section>

    {/* Full Specifications Table Section */}
    {product.specs && Object.keys(product.specs).length > 0 && (
      <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto 60px' }}>
        <div className="reference-section-heading">
          <div>
            <RefEyebrow>TECHNICAL SPECIFICATIONS</RefEyebrow>
            <h2>Performance &amp; <em>Parameters.</em></h2>
          </div>
          {product.catalogueSource && (
            <p style={{ fontFamily: 'DM Mono', fontSize: 12 }}>{product.catalogueSource}</p>
          )}
        </div>
        <table className="product-specs-table" style={{ background: '#fff', fontSize: 13, border: '1px solid rgba(62,56,129,0.1)' }}>
          <tbody>
            {Object.entries(product.specs).map(([key, val]) => (
              <tr key={key}>
                <td className="product-specs-key" style={{ padding: '12px 18px', width: '30%' }}>{key}</td>
                <td className="product-specs-val" style={{ padding: '12px 18px' }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    )}

    {/* Highlights */}
    {product.highlights && product.highlights.length > 0 && (
      <section className="pdp-highlights">
        <RefEyebrow>KEY FEATURES</RefEyebrow>
        <h2>What makes it <em>different.</em></h2>
        <div className="pdp-highlight-grid">
          {product.highlights.map((highlight, i) => (
            <motion.div className="pdp-highlight-card" key={highlight} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
              <div className="pdp-highlight-number">0{i + 1}</div>
              <p>{highlight}</p>
            </motion.div>
          ))}
        </div>
      </section>
    )}

    {/* Ideal For */}
    {product.idealFor && (
      <section className="pdp-ideal">
        <div className="pdp-ideal-inner">
          <div>
            <RefEyebrow>IDEAL FOR</RefEyebrow>
            <h2>{product.idealFor}</h2>
          </div>
          <p>{product.description}</p>
        </div>
      </section>
    )}

    {/* 5-Year Warranty Showcase */}
    <div style={{ marginTop: 40 }}>
      <WarrantyBanner />
    </div>

    {/* Related Products */}
    <section className="pdp-related">
      <div className="pdp-related-heading">
        <div>
          <RefEyebrow>RELATED PRODUCTS</RefEyebrow>
          <h2>You might also need in {product.category}</h2>
        </div>
        <RefButton href="/product/" className="ref-button-soft">View All Products</RefButton>
      </div>
      <div className="product-category-grid" style={{ gridTemplateColumns: `repeat(${Math.min(otherProducts.length, 3)}, 1fr)` }}>
        {otherProducts.slice(0, 3).map((rp, i) => (
          <motion.a href={`/product/${rp.slug}/`} className="product-catalog-card" key={rp.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}>
            <div className="product-card-visual" style={{ height: 160 }}>
              {rp.badge && <span className="product-floating-badge">{rp.badge}</span>}
              <img src={rp.image} alt={rp.title} className="product-card-img-element" loading="lazy" />
            </div>
            <div className="product-card-content">
              <span className="product-card-subcategory">{rp.subcategory}</span>
              <h4 style={{ margin: '4px 0 6px', fontSize: 15, fontWeight: 700 }}>{rp.title}</h4>
              <p className="product-card-desc">{rp.shortDesc}</p>
              <span className="product-card-link" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, color: '#5534d5', fontSize: 11, fontWeight: 600 }}>
                View product <ArrowRight size={13} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>

    <ReferenceCTA />
  </div>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   INDIVIDUAL SOLUTION PAGE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function SolutionDetailPage({ variant }) {
  const detail = solutionDetails[variant];
  const categoryData = solutionCategories.find(c => c[3] === variant);
  if (!detail || !categoryData) return null;

  const [Icon, title] = categoryData;

  return <div className="reference-site inner-page">
    <PageHero eyebrow={title.toUpperCase()} title={<>{detail.hero}</>} body={detail.desc} variant={variant} />

    <section className="solution-detail-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto', paddingTop: 80, borderBottom: 0 }}>
      <RefEyebrow>FEATURES</RefEyebrow>
      <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 650, letterSpacing: '-0.05em', margin: '14px 0 35px' }}>What we automate.</h2>
      <div className="solution-feature-grid">
        {detail.features.map(([FIcon, fname, fdesc]) => (
          <div className="solution-feature" key={fname}>
            <FIcon size={18} strokeWidth={1.6} />
            <div><h4>{fname}</h4><p>{fdesc}</p></div>
          </div>
        ))}
      </div>
    </section>

    <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>IDEAL FOR</RefEyebrow>
          <h2>Use cases & applications.</h2>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {detail.useCases.map(uc => <span key={uc} style={{ padding: '12px 20px', fontSize: 13, fontWeight: 600, color: 'var(--purple)', background: 'rgba(158,140,252,0.1)', borderRadius: 8 }}>{uc}</span>)}
      </div>
    </section>

    {detail.capabilities && (
      <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto', borderTop: '1px solid var(--line)' }}>
        <RefEyebrow>CAPABILITIES</RefEyebrow>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 650, letterSpacing: '-0.05em', margin: '14px 0 35px' }}>Why choose this solution.</h2>
        <div className="capability-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {detail.capabilities.map((cap, i) => (
            <motion.div className="capability-item" key={cap} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .05 }}>
              <CheckCircle2 size={22} strokeWidth={1.6} />
              <span style={{ fontSize: '11px' }}>{cap}</span>
            </motion.div>
          ))}
        </div>
      </section>
    )}

    <ReferenceCTA />
  </div>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   BLOG POST PAGE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function BlogPostPage({ slug }) {
  const article = blogsData.find(b => b.slug === slug) || blogsData[0];
  const relatedArticles = blogsData.filter(b => b.id !== article.id).slice(0, 3);

  return <div className="reference-site inner-page">
    <nav className="product-breadcrumb">
      <a href="/">Home</a> <span>/</span> <a href="/blog/">Blogs</a> <span>/</span> <span className="current">{article.category}</span>
    </nav>
    <article style={{ width: 'min(860px, calc(100% - 48px))', margin: '40px auto 80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <span className="blogs-meta-pill">{article.category}</span>
        <span style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 5 }}>
          <Clock size={13} /> {article.readTime}
        </span>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>â€¢</span>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>{article.date}</span>
      </div>

      <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 54px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.04em', margin: '0 0 20px', color: 'var(--ink)' }}>
        {article.title}
      </h1>

      <div className="blogs-author-strip" style={{ marginBottom: 35, paddingBottom: 20 }}>
        <div className="blogs-author-avatar">OC</div>
        <div className="blogs-author-info">
          <strong>{article.author}</strong>
          <span>{article.authorRole || 'Ottoclick Automation Engineering'}</span>
        </div>
      </div>

      {/* Hero Cover Image */}
      <div style={{ position: 'relative', height: 420, borderRadius: 20, overflow: 'hidden', marginBottom: 40, boxShadow: '0 20px 45px rgba(30, 26, 45, 0.12)' }}>
        <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Lead Summary Callout */}
      <div style={{ padding: '24px 28px', background: '#f5f3ff', borderLeft: '4px solid #7c5cfc', borderRadius: '0 14px 14px 0', marginBottom: 40 }}>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#312e81', fontWeight: 550 }}>
          {article.summary}
        </p>
      </div>

      {/* Article Body Sections */}
      <div style={{ fontSize: 16, lineHeight: 1.85, color: '#374151' }}>
        {article.content.map((sec, i) => (
          <div key={i} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', margin: '30px 0 14px' }}>
              {sec.heading}
            </h2>
            <p style={{ margin: 0 }}>
              {sec.text}
            </p>
          </div>
        ))}
      </div>

      {/* Author / Share Box */}
      <div style={{ marginTop: 50, padding: 30, background: '#faf9fc', border: '1px solid var(--line)', borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <strong style={{ display: 'block', fontSize: 14, color: 'var(--ink)', marginBottom: 4 }}>Have questions about implementing this in your project?</strong>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>Our team provides tailored electrical schematic reviews and site consultations.</span>
        </div>
        <RefButton href="/contact-us/">Speak with an Engineer</RefButton>
      </div>
    </article>

    {/* Related Blogs */}
    <section className="pdp-related" style={{ borderTop: '1px solid var(--line)', paddingBottom: 80 }}>
      <div className="pdp-related-heading">
        <div>
          <RefEyebrow>CONTINUE READING</RefEyebrow>
          <h2>Related Articles</h2>
        </div>
        <RefButton href="/blog/" className="ref-button-soft">View All Blogs</RefButton>
      </div>
      <div className="blogs-grid">
        {relatedArticles.map((b) => (
          <a href={`/blog/${b.slug}/`} className="blog-card-item" key={b.id}>
            <div className="blog-card-media">
              <img src={b.image} alt={b.title} />
              <span className="blog-card-badge">{b.category}</span>
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>{b.date}</span>
                <span>â€¢</span>
                <span>{b.readTime}</span>
              </div>
              <h3 className="blog-card-title">{b.title}</h3>
              <p className="blog-card-summary">{b.summary}</p>
              <div className="blog-card-footer">
                <span>Read Article</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>

    <ReferenceCTA />
  </div>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SEO HANDLER
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function SEO({ title, description, url = 'https://ottoclick.in' }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (name.startsWith('og:')) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:url', url + window.location.pathname);
  }, [title, description, url]);
  return null;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   APP ROOT
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
export default function App() {
  const { route, productSlug, blogSlug, solutionVariant } = usePageRoute();

  let seo = { title: 'Ottoclick | Your Comfort, Our Priority', description: 'Premium smart home, hotel, and industrial automation solutions in Kanpur. Engineered for performance, built for life.' };
  if (route === 'about') seo = { title: 'About Us | Ottoclick', description: 'Learn about Ottoclick\'s mission to make spaces smarter, safer, and more efficient with cutting-edge automation.' };
  else if (route === 'contact') seo = { title: 'Contact Us | Ottoclick', description: 'Get in touch with Ottoclick to discuss your automation project, request a consultation, or talk to an expert.' };
  else if (route === 'products') seo = { title: 'Smart Products | Ottoclick', description: 'Explore our range of premium smart touch switches, sensors, climate controllers, and security systems.' };
  else if (route === 'product-detail') {
    const prod = productCatalog.find(p => p.slug === productSlug);
    if (prod) seo = { title: `${prod.title} | Ottoclick`, description: prod.description };
  }
  else if (route === 'solution-home') seo = { title: 'Home Automation Solutions | Ottoclick', description: 'Transform your home with intelligent lighting, climate control, and security automation.' };
  else if (route === 'solution-hotel') seo = { title: 'Hotel Automation Solutions | Ottoclick', description: 'Enhance guest experiences and streamline operations with our premium hotel automation systems.' };
  else if (route === 'solution-institutional') seo = { title: 'Institutional Automation | Ottoclick', description: 'Intelligent building management for campuses, hospitals, and corporate offices.' };
  else if (route === 'solution-industrial') seo = { title: 'Industrial Automation | Ottoclick', description: 'Improve efficiency and safety in factories and plants with robust industrial automation.' };
  else if (route === 'blogs') seo = { title: 'Insights & Articles | Ottoclick', description: 'Read the latest insights on smart home technology, energy management, and automation trends.' };
  else if (route === 'blog-post') {
    const article = insightCards.find(c => c[1].toLowerCase().replace(/\s+/g, '-') === blogSlug) || insightCards[0];
    if (article) seo = { title: `${article[1]} | Ottoclick`, description: article[2] };
  }

  useEffect(() => {
    let lenisInstance;
    let frameId;

    import('lenis').then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenisInstance.raf(time);
        frameId = requestAnimationFrame(raf);
      }
      frameId = requestAnimationFrame(raf);

      const handleAnchorClick = (e) => {
        const anchor = e.target.closest('a');
        if (!anchor) return;
        const target = anchor.getAttribute('href');
        if (!target) return;
        if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;

        if (target.startsWith('/') || target === '/') {
          if (target.startsWith('//')) return;
          e.preventDefault();
          if (window.location.pathname !== target) {
            window.history.pushState({}, '', target);
            window.dispatchEvent(new PopStateEvent('popstate'));
          }
          if (lenisInstance) {
            lenisInstance.scrollTo(0, { immediate: true });
          } else {
            window.scrollTo(0, 0);
          }
        } else if (target.startsWith('#')) {
          e.preventDefault();
          if (lenisInstance) {
            lenisInstance.scrollTo(target, { offset: -76 });
          }
        }
      };

      const handleScrollToEnter = () => {
        lenisInstance.scrollTo(220, { duration: 1.5 });
      };

      document.addEventListener('click', handleAnchorClick);
      window.addEventListener('scroll-to-enter', handleScrollToEnter);

      return () => {
        lenisInstance.destroy();
        document.removeEventListener('click', handleAnchorClick);
        window.removeEventListener('scroll-to-enter', handleScrollToEnter);
        cancelAnimationFrame(frameId);
      };
    });

    return () => {
      if (lenisInstance) lenisInstance.destroy();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  const page = route === 'about' ? <AboutPage />
    : route === 'solution-home' ? <SolutionDetailPage variant="home" />
    : route === 'solution-hotel' ? <SolutionDetailPage variant="hotel" />
    : route === 'solution-institutional' ? <SolutionDetailPage variant="institutional" />
    : route === 'solution-industrial' ? <SolutionDetailPage variant="industrial" />
    : route === 'products' ? <ProductsPage />
    : route === 'product-detail' ? <ProductDetailPage slug={productSlug} />
    : route === 'blog-post' ? <BlogPostPage slug={blogSlug} />
    : route === 'blogs' ? <BlogsPage />
    : route === 'contact' ? <ContactPage />
    : <ReferenceHome />;

  const [searchOpen, setSearchOpen] = useState(false);

  return <>
    <SEO {...seo} />
    {route === 'home' && <Intro />}
    <Navbar onSearchOpen={() => setSearchOpen(true)} />
    <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    <main className="reference-app-main">
      <AnimatePresence mode="wait">
        <motion.div key={route + (productSlug || '')} className="page-transition"
          initial={{ opacity: 0, y: 12, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: .55, ease }}>
          {page}
        </motion.div>
      </AnimatePresence>
    </main>
    <ReferenceFooter />
  </>;
}





