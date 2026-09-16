/* oxlint-disable no-unused-vars -- legacy motion modules remain available for future campaign variants */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3, Building2, Check, ChevronDown, CircleGauge, Clock, Cpu, Eye, Factory, GraduationCap, Heart, Hotel, House, Layers, Lightbulb, Lock, Mail, MapPin, Menu, Monitor, Moon, Phone, Play, Search, Settings, ShieldCheck, Smartphone, Sparkles, Sun, Thermometer, Users, Wifi, Wrench, X, Zap } from 'lucide-react';
import logo from '../ottoclick-logo.svg';
import livingRoom from './assets/ottoclick-living-room.png';
import smartProducts from './assets/ottoclick-smart-products.png';

/* ─── Constants ─── */
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

/* ─── Utility Components ─── */
const Logo = ({ compact = false }) => <img className={`brand-logo ${compact ? 'brand-logo-compact' : ''}`} src={logo} alt="Ottoclick" />;
const Button = ({ children, className = '', ...props }) => <a className={`button ${className}`} {...props}>{children}</a>;
const SectionHeading = ({ eyebrow, title, text }) => <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;

/* ─── Animated Logo (SVG) ─── */
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

/* ─── Intro Screen ─── */
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
    <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7, duration: .45, ease }}>INTELLIGENCE, SIMPLIFIED</motion.span>
    <motion.div className="intro-scroll-hint" style={{ cursor: 'pointer' }} onClick={() => window.dispatchEvent(new CustomEvent('scroll-to-enter'))} animate={{ opacity: hasScrolled ? 0 : [0.35, 1, 0.35], y: hasScrolled ? 8 : [0, 5, 0] }} transition={{ duration: 2.4, repeat: hasScrolled ? 0 : Infinity, ease: 'easeInOut' }}><span>Scroll to enter</span><ChevronDown size={15} /></motion.div>
  </motion.div>;
}

/* ─── Navbar ─── */
function Navbar({ onSearchOpen }) {
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => scrollY.on('change', current => setScrolled(current > 20)), [scrollY]);
  const links = [['Home', '/'], ['About', '/about-us/'], ['Products', '/product/'], ['Insights', '/blog/']];
  const solutionLinks = [['Home Automation', '/home-automation/'], ['Hotel Automation', '/hotel-automation/'], ['Institutional Automation', '/institutional-automation/'], ['Industrial Automation', '/industrial-automation/']];
  return <motion.header className={`nav-shell ${scrolled ? 'nav-scrolled' : ''}`}>
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
        <a href="/blog/">Insights</a>
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

/* ─── Routing ─── */
const pageRoutes = ['/', '/about-us/', '/product/', '/blog/', '/contact-us/', '/home-automation/', '/hotel-automation/', '/industrial-automation/', '/institutional-automation/'];
const getRoute = () => {
  const path = window.location.pathname;
  if (path.includes('/about-us')) return 'about';
  if (path.match(/^\/product\/[a-z0-9-]+\/?$/)) return 'product-detail';
  if (path.includes('/product')) return 'products';
  if (path.match(/^\/blog\/[a-z0-9-]+\/?$/)) return 'blog-post';
  if (path.includes('/blog')) return 'blogs';
  if (path.includes('/contact-us') || path.includes('/any-problem')) return 'contact';
  if (path.includes('/home-automation')) return 'solution-home';
  if (path.includes('/hotel-automation')) return 'solution-hotel';
  if (path.includes('/institutional-automation')) return 'solution-institutional';
  if (path.includes('/industrial-automation')) return 'solution-industrial';
  return 'home';
};
const getProductSlug = () => {
  const match = window.location.pathname.match(/^\/product\/([a-z0-9-]+)\/?$/);
  return match ? match[1] : null;
};
const getBlogSlug = () => {
  const match = window.location.pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/);
  return match ? match[1] : null;
};
function usePageRoute() {
  const [route, setRoute] = useState(getRoute);
  const [productSlug, setProductSlug] = useState(getProductSlug);
  const [blogSlug, setBlogSlug] = useState(getBlogSlug);
  useEffect(() => { const update = () => { setRoute(getRoute()); setProductSlug(getProductSlug()); setBlogSlug(getBlogSlug()); }; window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update); }, []);
  return { route, productSlug, blogSlug };
}

/* ─── Data ─── */
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
  [Search, 'Consultation'],
  [Settings, 'System Design'],
  [Layers, 'Integration'],
  [Wrench, 'Installation'],
  [Cpu, 'Programming'],
  [Check, 'Commissioning'],
  [Phone, 'AMC & Support'],
];

const productCategories = [
  [Wifi, 'Smart Switches', 'Touch, voice & app-controlled switches for every room.'],
  [Eye, 'Sensors', 'Motion, occupancy, temperature & ambient light sensors.'],
  [Cpu, 'Smart Controllers', 'Central hubs that unify your entire automation system.'],
  [Lightbulb, 'Lighting Controllers', 'Dimming, scenes, scheduling & colour tuning.'],
  [Sun, 'Curtain Controllers', 'Motorised curtain & blind automation modules.'],
  [Thermometer, 'HVAC Controllers', 'Smart climate management for split & central AC.'],
  [Lock, 'Access Control', 'Biometric, RFID & keypad entry systems.'],
  [ShieldCheck, 'Security Systems', 'Cameras, alarms & intrusion detection.'],
  [Layers, 'Gate Automation', 'Sliding, swing & boom barrier automation.'],
  [Monitor, 'Control Panels', 'Wall-mounted touchscreen panels for centralised control.'],
  [Zap, 'Energy Management', 'Real-time monitoring, analytics & optimisation.'],
  [BarChart3, 'Shutter Automation', 'Rolling shutter & window automation modules.'],
];

const productCatalog = [
  { slug: 'smart-switches', Icon: Wifi, title: 'Smart Switches', category: 'Switches & Controls', description: 'Premium retrofit switches for lights, fans and scenes — without breaking walls.', detail: 'Upgrade existing switch plates with tactile control, app access and voice scenes in a single, clean installation.', highlights: ['Zero-damage retrofit installation', 'Manual, mobile and voice control', 'Scene-ready dimming and scheduling'], idealFor: 'Homes, villas and hotel rooms' },
  { slug: 'smart-controllers', Icon: Cpu, title: 'Smart Controllers', category: 'Switches & Controls', description: 'The quiet intelligence layer that brings every connected system together.', detail: 'A reliable control core for coordinating lighting, climate, curtains, access and sensors from one ecosystem.', highlights: ['Multi-protocol device orchestration', 'Local-first reliability', 'Scales from one room to a campus'], idealFor: 'Integrated residential and commercial systems' },
  { slug: 'control-panels', Icon: Monitor, title: 'Control Panels', category: 'Switches & Controls', description: 'Minimal wall-mounted touch interfaces for a calm, intuitive experience.', detail: 'Give every room a beautiful command surface with quick scenes, room status and one-touch control.', highlights: ['Custom room dashboards', 'Scene and schedule shortcuts', 'Elegant flush-mount finish'], idealFor: 'Luxury residences, hotels and conference rooms' },
  { slug: 'lighting-controllers', Icon: Lightbulb, title: 'Lighting Controllers', category: 'Lighting & Climate', description: 'Dimming, colour tuning and automated scenes that follow the rhythm of your day.', detail: 'Create warm arrival scenes, focused work modes and ambient evening lighting while reducing unnecessary energy use.', highlights: ['Dimming and RGB colour control', 'Sunrise, sunset and occupancy scenes', 'Room-by-room energy intelligence'], idealFor: 'Homes, hospitality and retail spaces' },
  { slug: 'curtain-controllers', Icon: Sun, title: 'Curtain Controllers', category: 'Lighting & Climate', description: 'Motorised curtains and blinds that respond to time, light and temperature.', detail: 'Automate privacy, daylight and heat control with silent movement and precise scheduling.', highlights: ['Sunrise and sunset routines', 'Quiet motorised movement', 'Manual override always available'], idealFor: 'Bedrooms, suites, boardrooms and living spaces' },
  { slug: 'hvac-controllers', Icon: Thermometer, title: 'HVAC Controllers', category: 'Lighting & Climate', description: 'Comfort that adapts automatically to occupancy and ambient conditions.', detail: 'Coordinate AC and climate systems with schedules, room presence and temperature targets for a more efficient space.', highlights: ['Occupancy-based temperature control', 'Smart scheduling and presets', 'Reduced runtime and energy waste'], idealFor: 'Homes, hotels, offices and institutions' },
  { slug: 'sensors', Icon: Eye, title: 'Sensors', category: 'Lighting & Climate', description: 'Small, discreet sensors that make every automation feel considered.', detail: 'Capture motion, occupancy, temperature and ambient light data so the right action happens at the right moment.', highlights: ['Motion and occupancy sensing', 'Temperature and ambient light data', 'Discreet, retrofit-friendly hardware'], idealFor: 'Every automated room and corridor' },
  { slug: 'access-control', Icon: Lock, title: 'Access Control', category: 'Security & Access', description: 'Biometric, RFID and keypad access designed for effortless security.', detail: 'Manage who enters, when they enter and how access is recorded across homes, offices and institutions.', highlights: ['Biometric, RFID and PIN entry', 'Guest and staff access schedules', 'Remote unlock and activity logs'], idealFor: 'Homes, offices, hotels and campuses' },
  { slug: 'security-systems', Icon: ShieldCheck, title: 'Security Systems', category: 'Security & Access', description: 'Connected cameras, alarms and intrusion detection for round-the-clock confidence.', detail: 'Bring video, motion alerts, doorbells and emergency notifications into one responsive security layer.', highlights: ['AI-assisted motion detection', 'Instant intrusion notifications', 'Video doorbell and camera integration'], idealFor: 'Residential, commercial and institutional sites' },
  { slug: 'gate-automation', Icon: Layers, title: 'Gate Automation', category: 'Entry & Outdoor', description: 'Smooth, secure automation for sliding gates, swing gates and barriers.', detail: 'Make arrivals safer and more convenient with controlled entry, remote operation and reliable access events.', highlights: ['Sliding, swing and boom barrier support', 'Remote open and close control', 'Safety sensors and obstruction detection'], idealFor: 'Homes, housing societies and facilities' },
  { slug: 'shutter-automation', Icon: BarChart3, title: 'Shutter Automation', category: 'Entry & Outdoor', description: 'Automated rolling shutters and windows for security, comfort and control.', detail: 'Schedule, group and remotely control shutters without disrupting the architecture of your space.', highlights: ['Timed open and close routines', 'Group control for multiple zones', 'Manual safety override'], idealFor: 'Retail, industrial and commercial spaces' },
  { slug: 'energy-management', Icon: Zap, title: 'Energy Management', category: 'Energy & Insights', description: 'Real-time visibility and intelligent optimisation for lower operating costs.', detail: 'Understand where energy goes, automate high-load systems and act on meaningful consumption insights.', highlights: ['Live usage monitoring', 'Peak-load and runtime optimisation', 'Actionable performance reports'], idealFor: 'Hotels, offices, campuses and large homes' },
];

const insightCards = [
  ['Home Automation', 'How Home Automation Improves Everyday Living', 'A comprehensive look at how smart homes are transforming comfort, security and energy efficiency.', 'Sep 4, 2025', 'home'],
  ['Hospitality', 'How Hotel Automation Enhances Guest Experience', 'From keycard integration to smart climate — the technology behind premium hotel stays.', 'Aug 28, 2025', 'hotel'],
  ['Industrial', 'The Future of Industrial Automation in India', 'How Indian manufacturers are adopting intelligent control systems for safety and efficiency.', 'Aug 20, 2025', 'industrial'],
  ['Smart Buildings', 'Energy Management in Smart Buildings', 'Cutting energy costs by up to 30% with intelligent building automation strategies.', 'Aug 12, 2025', 'institutional'],
  ['Technology', 'Why Retrofitting is the Future of Smart Homes', 'No rewiring, no renovation — how retrofit automation is making smart homes accessible to everyone.', 'Jul 30, 2025', 'home'],
  ['Case Study', 'Ottoclick at The Grand Hotel, Kanpur', 'A complete hotel automation project — 120 rooms, centralised control, and 28% energy savings.', 'Jul 15, 2025', 'hotel'],
];

const blogCategories = ['All', 'Home Automation', 'Hotel Automation', 'Industrial', 'Smart Buildings', 'Energy Management', 'Security', 'Technology', 'Case Studies'];

/* ─── Shared UI Components ─── */
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

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════════ */
function ReferenceHome() {
  const homeRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: homeRef, offset: ['start start', 'end start'] });
  return <div ref={homeRef} className="reference-site">
    {/* 1. Hero */}
    <section className="reference-hero reference-home-hero">
      <div className="reference-hero-copy">
        <RefEyebrow>SMARTER SPACES. BRIGHTER TOMORROWS.</RefEyebrow>
        <h1>Automation<br />for a Smarter<br /><em>World</em></h1>
        <p>We design and deliver intelligent automation solutions for homes, hotels, institutions and industries — engineered for performance, built for life.</p>
        <div className="reference-actions">
          <RefButton href="/home-automation/">Explore Solutions</RefButton>
          <RefButton href="/contact-us/" className="ref-button-soft">Talk to an Expert</RefButton>
        </div>
      </div>
      <div className="reference-hero-media">
        <RefImage variant="home" className="reference-hero-image" alt="Modern automated luxury home" />
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
        <p>OTTOCLICK is not just a product company — we are an automation partner. We bring together consultation, system design, product integration and ongoing support to create spaces that are safer, more efficient, and deeply intuitive.</p>
        <RefButton href="/about-us/" className="ref-button-soft">About Ottoclick</RefButton>
      </div>
    </section>

    {/* 4. What We Automate */}
    <section className="reference-section">
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>WHAT WE AUTOMATE</RefEyebrow>
          <h2>Every system, <em>unified.</em></h2>
        </div>
        <p>From lighting and climate to security and access — we automate the systems that matter most, all working together seamlessly.</p>
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

    {/* 5. Why OTTOCLICK */}
    <section className="reference-section">
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>WHY OTTOCLICK</RefEyebrow>
          <h2>Built for the way <em>life moves.</em></h2>
        </div>
        <p>One partner from first idea to final support, with systems engineered around your space.</p>
      </div>
      <div className="reference-value-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {['End-to-end solutions', 'Custom engineering', 'Scalable systems', 'Energy efficiency', 'Centralised control', 'Installation & support'].map((item, i) => (
          <motion.div className="reference-value-card" key={item} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
            <span>0{i + 1}</span>
            <h3>{item}</h3>
            <p>Thoughtful planning, dependable technology, and a calm experience at every touchpoint.</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* 6. Industries We Serve */}
    <section className="reference-section">
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>INDUSTRIES WE SERVE</RefEyebrow>
          <h2>Automation for <em>every sector.</em></h2>
        </div>
        <p>From cozy apartments to sprawling campuses — our solutions scale to match any environment.</p>
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

    {/* 7. Featured Products */}
    <section className="reference-section">
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>OUR TECHNOLOGY</RefEyebrow>
          <h2>Products built for <em>intelligent spaces.</em></h2>
        </div>
        <p>Explore the hardware and systems that power every Ottoclick installation.</p>
      </div>
      <div className="product-category-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {productCategories.slice(0, 3).map(([Icon, title, desc], i) => (
          <motion.a href="/product/" className="product-category-card" key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}>
            <div className="product-card-img"><Icon size={36} strokeWidth={1.3} /></div>
            <div className="product-card-body">
              <h4>{title}</h4>
              <p>{desc}</p>
              <span className="product-card-link">Explore <ArrowRight size={13} /></span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>

    {/* 8. How We Work */}
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

    {/* 9. CTA */}
    <ReferenceCTA />
  </div>;
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════════════════════════ */
function PageHero({ eyebrow, title, body, variant = 'home', src, children }) {
  return <section className={`reference-page-hero ${variant}`}>
    <div>
      <RefEyebrow>{eyebrow}</RefEyebrow>
      <h1>{title}</h1>
      {body && <p>{body}</p>}
      {children}
    </div>
    <RefImage src={src} variant={variant} alt="Ottoclick premium smart space" />
  </section>;
}

function AboutPage() {
  return <div className="reference-site inner-page">
    <PageHero eyebrow="OUR STORY" title={<>Engineering<br />Smarter<br /><em>Spaces.</em></>} body="OTTOCLICK was founded with a simple belief — that technology should make spaces smarter, safer and more efficient for everyone." variant="about">
      <RefButton href="/contact-us/">Our Journey</RefButton>
    </PageHero>

    {/* Stats */}
    <div className="reference-stat-row">
      <div><strong>100+</strong><span>Projects Delivered</span></div>
      <div><strong>4+</strong><span>Industries Served</span></div>
      <div><strong>99%</strong><span>Client Satisfaction</span></div>
      <div><strong>End-to-End</strong><span>Support</span></div>
    </div>

    {/* Our Story */}
    <section className="reference-copy-section">
      <RefEyebrow>WHY WE STARTED</RefEyebrow>
      <h2>The problem we're <em>solving.</em></h2>
      <div className="reference-copy-columns">
        <p>Most automation in India is fragmented — one vendor for lighting, another for security, a third for HVAC. The result is complexity, incompatibility, and frustration. OTTOCLICK was born to change that.</p>
        <p>We saw a world where every space — from a single bedroom to an entire campus — deserves intelligent, unified automation. Not expensive gadgets, but thoughtfully engineered systems that actually make life better.</p>
      </div>
    </section>

    {/* What We Believe */}
    <section className="reference-section">
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>WHAT WE BELIEVE</RefEyebrow>
          <h2>Innovation should feel <em>human.</em></h2>
        </div>
        <p>These five principles guide every system we design and every relationship we build.</p>
      </div>
      <div className="belief-grid">
        {beliefs.map(([Icon, title, desc], i) => (
          <motion.div className="belief-card" key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}>
            <Icon size={22} strokeWidth={1.6} />
            <h4>{title}</h4>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Our Approach */}
    <section className="reference-split">
      <div>
        <RefEyebrow>OUR APPROACH</RefEyebrow>
        <h2>We don't sell devices. We design <em>ecosystems.</em></h2>
      </div>
      <div>
        <p>OTTOCLICK isn't simply selling smart switches or sensors. We design and integrate complete automation ecosystems — where every device, every protocol, and every interaction is engineered to work as one cohesive, dependable system.</p>
        <p>From the first consultation to ongoing support, our team stays close to the details that make a space feel truly yours.</p>
      </div>
    </section>

    {/* Capabilities */}
    <section className="reference-section">
      <div className="reference-section-heading">
        <div>
          <RefEyebrow>OUR CAPABILITIES</RefEyebrow>
          <h2>Full-spectrum automation <em>expertise.</em></h2>
        </div>
        <p>We handle everything in-house — no outsourcing, no gaps, no surprises.</p>
      </div>
      <div className="capability-grid">
        {capabilities.map(([Icon, label], i) => (
          <motion.div className="capability-item" key={label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .05 }}>
            <Icon size={22} strokeWidth={1.6} />
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="vision-block">
      <RefEyebrow>VISION & MISSION</RefEyebrow>
      <h2>To make intelligent automation accessible to every space in India — and beyond.</h2>
      <p>We envision a future where every building, every home, and every workspace operates at its fullest potential — safer, more efficient, and deeply responsive to the people who use it.</p>
    </section>

    <ReferenceCTA />
  </div>;
}

/* ═══════════════════════════════════════════════════════════════
   SOLUTIONS PAGE
   ═══════════════════════════════════════════════════════════════ */
const solutionDetails = {
  home: {
    hero: 'Your Home. Your Rules. Automated.',
    desc: 'From lighting scenes to security systems — we make your home respond to your life, not the other way around.',
    features: [
      [Lightbulb, 'Lighting', 'Scenes, dimming, colour tuning & scheduling.'],
      [Sun, 'Curtains', 'Motorised curtains that respond to daylight.'],
      [Thermometer, 'HVAC', 'Smart climate control for every room.'],
      [ShieldCheck, 'Security', 'Cameras, alarms & intrusion detection.'],
      [Lock, 'Door Locks', 'Biometric & smart lock integration.'],
      [Monitor, 'Entertainment', 'Multi-room audio & video control.'],
    ],
    useCases: ['Smart Villa', 'Luxury Apartment', 'Second Home', 'Penthouse'],
  },
  hotel: {
    hero: 'Smarter Hotels. Better Guest Experiences.',
    desc: 'Automate guest rooms, manage energy, and deliver a premium brand experience — all from one dashboard.',
    features: [
      [Monitor, 'Guest Room Automation', 'Personalised room settings for every guest.'],
      [Lightbulb, 'Lighting Control', 'Mood scenes & occupancy-based automation.'],
      [Thermometer, 'HVAC Control', 'Energy-saving climate management.'],
      [Lock, 'Key Card Integration', 'Access control linked to room systems.'],
      [Zap, 'Energy Management', 'Track & reduce consumption property-wide.'],
      [Eye, 'Centralised Monitoring', 'Real-time status of every room.'],
    ],
    useCases: ['Boutique Hotels', 'Luxury Resorts', 'Business Hotels', 'Heritage Properties'],
  },
  institutional: {
    hero: 'Intelligent Spaces for Brighter Futures.',
    desc: 'Schools, hospitals, offices and campuses — managed from one centralised, intelligent platform.',
    features: [
      [Lightbulb, 'Lighting', 'Automated lighting for classrooms & corridors.'],
      [Thermometer, 'HVAC', 'Centralised climate for large facilities.'],
      [Lock, 'Access Control', 'Secure entry for students, staff & visitors.'],
      [ShieldCheck, 'Security', 'Campus-wide surveillance & alerts.'],
      [Zap, 'Energy Monitoring', 'Track consumption across every zone.'],
      [Monitor, 'Conference Rooms', 'One-touch AV & automation control.'],
    ],
    useCases: ['Schools & Colleges', 'Hospitals', 'Corporate Campuses', 'Government Buildings'],
  },
  industrial: {
    hero: 'Intelligent Control for Industrial Environments.',
    desc: 'Monitoring, safety, energy optimisation and process control — engineered for the toughest environments.',
    features: [
      [Eye, 'Monitoring & Control', 'Real-time system visibility & alerts.'],
      [Zap, 'Energy Management', 'Optimise consumption across all operations.'],
      [Lightbulb, 'Lighting Automation', 'Occupancy & schedule-based control.'],
      [Lock, 'Access & Security', 'Restricted area control & surveillance.'],
      [Settings, 'Equipment Monitoring', 'Track performance & maintenance needs.'],
      [BarChart3, 'Process Integration', 'Connect to existing industrial systems.'],
    ],
    useCases: ['Manufacturing Plants', 'Warehouses', 'Data Centres', 'Processing Facilities'],
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
        <p>Automation isn't a luxury — it's an investment in comfort, safety, efficiency, and the future value of your property.</p>
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

/* ═══════════════════════════════════════════════════════════════
   PRODUCTS PAGE
   ═══════════════════════════════════════════════════════════════ */
function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productResultsRef = useRef(null);
  const productFilters = ['All', ...Array.from(new Set(productCatalog.map(product => product.category)))];
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredProducts = productCatalog.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const searchText = `${product.title} ${product.category} ${product.description} ${product.detail} ${product.idealFor} ${product.highlights.join(' ')}`.toLowerCase();
    return matchesCategory && (!normalizedSearch || searchText.includes(normalizedSearch));
  });
  const SelectedIcon = selectedProduct?.Icon;
  const submitSearch = event => {
    event.preventDefault();
    if (filteredProducts[0]) setSelectedProduct(filteredProducts[0]);
    productResultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return <div className="reference-site inner-page">
    <PageHero eyebrow="OUR PRODUCTS" title={<>Technology<br />That Powers<br /><em>Intelligent Spaces</em></>} body="A wide range of automation products designed for performance, reliability and seamless integration." variant="products" src={smartProducts}>
      <form className="reference-search product-search-shell" role="search" onSubmit={submitSearch}>
        <button type="submit" className="product-search-submit" aria-label="Show matching products"><Search size={15} /></button>
        <input aria-label="Search products" aria-controls="product-results" autoComplete="off" value={searchTerm} onChange={event => { setSearchTerm(event.target.value); setSelectedProduct(null); }} placeholder="Search products..." />
        {searchTerm && <button type="button" className="product-search-clear" aria-label="Clear product search" onClick={() => setSearchTerm('')}><X size={14} /></button>}
      </form>
    </PageHero>

    {/* Product Stage */}
    <section className="reference-product-stage">
      <div className="product-device product-device-dark"><span /><span /><span /></div>
      <div className="product-device product-device-light"><span /><span /><span /></div>
    </section>

    {/* Full Product Catalogue */}
    <section className="product-catalog-section" ref={productResultsRef} id="product-results">
      <div className="product-catalog-heading">
        <div>
          <RefEyebrow>PRODUCT CATEGORIES</RefEyebrow>
          <h2>Everything you need, <em>engineered.</em></h2>
        </div>
        <p>{filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available. Select a category to see how it fits into your space.</p>
      </div>

      <div className="product-filter-row" aria-label="Filter products by category">
        {productFilters.map(category => <button type="button" key={category} className={activeCategory === category ? 'active' : ''} onClick={() => { setActiveCategory(category); setSelectedProduct(null); }}>{category}</button>)}
      </div>

      {filteredProducts.length > 0 ? <div className="product-category-grid">
        {filteredProducts.map((product, i) => {
          const Icon = product.Icon;
          return <motion.a href={`/product/${product.slug}/`} className="product-category-card" key={product.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }}>
            <div className="product-card-img"><Icon size={36} strokeWidth={1.3} /></div>
            <div className="product-card-body">
              <span className="product-card-category">{product.category}</span>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <span className="product-card-link">View product <ArrowRight size={13} /></span>
            </div>
          </motion.a>;
        })}
      </div> : <div className="product-empty-state"><Search size={25} /><h3>No products found</h3><p>Try a broader search or choose another category.</p><button type="button" onClick={() => { setSearchTerm(''); setActiveCategory('All'); setSelectedProduct(null); }}>Clear filters</button></div>}

      <AnimatePresence mode="wait" initial={false}>
        {selectedProduct && <motion.section className="product-detail-panel" key={selectedProduct.slug} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .35, ease }} aria-live="polite">
          <div className="product-detail-icon"><SelectedIcon size={32} strokeWidth={1.5} /></div>
          <div className="product-detail-copy">
            <div className="product-detail-topline"><RefEyebrow>{selectedProduct.category}</RefEyebrow><button type="button" className="product-detail-close" aria-label="Close product details" onClick={() => setSelectedProduct(null)}><X size={16} /></button></div>
            <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.detail}</p>
            <div className="product-highlight-list">{selectedProduct.highlights.map(highlight => <span key={highlight}><Check size={14} />{highlight}</span>)}</div>
            <div className="product-detail-footer"><span><strong>Ideal for</strong>{selectedProduct.idealFor}</span><RefButton href="/contact-us/">Request this solution</RefButton></div>
          </div>
        </motion.section>}
      </AnimatePresence>
    </section>

    <ReferenceCTA />
  </div>;
}

/* ═══════════════════════════════════════════════════════════════
   INSIGHTS / BLOGS PAGE
   ═══════════════════════════════════════════════════════════════ */
function BlogsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? insightCards : insightCards.filter(([cat]) => cat === activeFilter);

  return <div className="reference-site inner-page">
    <PageHero eyebrow="OTTOCLICK INSIGHTS" title={<>Ideas, Insights<br />and <em>Innovations</em></>} body="Explore expert insights, industry trends and practical guides on automation, smart buildings and more." variant="blogs">
      <div className="reference-search"><span>Search articles...</span><Search size={15} /></div>
    </PageHero>

    {/* Filters */}
    <div className="reference-filter-row">
      {blogCategories.map(cat => (
        <span key={cat} className={activeFilter === cat ? 'active' : ''} onClick={() => setActiveFilter(cat)} style={{ cursor: 'pointer' }}>{cat}</span>
      ))}
    </div>

    {/* Blog Grid */}
    <section className="reference-blog-grid">
      {filtered.map(([category, title, desc, date, variant]) => (
        <a href="/contact-us/" className="reference-blog-card" key={title}>
          <RefImage variant={variant} />
          <div>
            <RefEyebrow>{category}</RefEyebrow>
            <h3>{title}</h3>
            <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.55, margin: '6px 0 12px' }}>{desc}</p>
            <small>{date}</small>
          </div>
        </a>
      ))}
    </section>

    {/* Bottom CTA */}
    <section className="insights-bottom-cta">
      <h3>Want to automate your space?</h3>
      <p>Talk to OTTOCLICK — we'll help you find the right solution.</p>
      <RefButton href="/contact-us/">Get in Touch</RefButton>
    </section>
  </div>;
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT PAGE
   ═══════════════════════════════════════════════════════════════ */
function ContactPage() {
  const [sent, setSent] = useState(false);
  return <div className="reference-site inner-page">
    <section className="reference-contact">
      <div className="reference-contact-copy">
        <RefEyebrow>GET IN TOUCH</RefEyebrow>
        <h1>Let's Build<br />Smarter Spaces<br /><em>Together</em></h1>
        <p>Have a project in mind? Our team is here to help you find the right automation solution.</p>
        <div className="reference-contact-list">
          <span><Phone size={16} /> +91 78804 66267</span>
          <span><Mail size={16} /> info@ottoclick.in</span>
          <span><MapPin size={16} /> Kanpur, Uttar Pradesh, India</span>
          <span><Clock size={16} /> Mon – Sat &nbsp;|&nbsp; 10:00 AM – 6:00 PM</span>
        </div>
        <div className="reference-socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">◎</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">▶</a>
        </div>
      </div>
      <form className="reference-contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
        <h3>Send Us a Message</h3>
        <input required placeholder="Your Name*" />
        <input placeholder="Company (optional)" />
        <input required type="email" placeholder="Email Address*" />
        <input required placeholder="Phone Number*" />
        <input placeholder="City" />
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
          <option>Under ₹1 Lakh</option>
          <option>₹1–3 Lakhs</option>
          <option>₹3–10 Lakhs</option>
          <option>₹10+ Lakhs</option>
        </select>
        <textarea placeholder="Tell us about your project..." rows="4" />
        <button type="submit">{sent ? 'Enquiry Sent ✓' : <>Submit Enquiry <ArrowRight size={15} /></>}</button>
      </form>
    </section>

    {/* Map placeholder */}
    <section style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto 60px', height: 280, background: 'var(--soft)', borderRadius: 12, border: '1px solid var(--line)', display: 'grid', placeItems: 'center', color: 'var(--muted)', fontSize: 13 }}>
      <div style={{ textAlign: 'center' }}>
        <MapPin size={28} strokeWidth={1.5} style={{ marginBottom: 8, color: 'var(--purple)' }} />
        <p style={{ margin: 0 }}>Kanpur, Uttar Pradesh, India</p>
        <small>Office location map</small>
      </div>
    </section>
  </div>;
}

/* ─── Shared CTA ─── */
function ReferenceCTA() {
  return <section className="reference-cta">
    <div>
      <RefEyebrow>READY TO AUTOMATE?</RefEyebrow>
      <h2>Let's build smarter spaces <em>together.</em></h2>
    </div>
    <RefButton href="/contact-us/">Talk to an Expert</RefButton>
  </section>;
}

/* ─── Footer ─── */
function ReferenceFooter() {
  return <footer className="reference-footer">
    <div className="reference-footer-top">
      <div>
        <Logo />
        <p>Automation for a smarter world. Engineered in Kanpur, deployed everywhere.</p>
      </div>
      <div className="reference-footer-links">
        <div>
          <strong>Company</strong>
          <a href="/about-us/">About Us</a>
          <a href="/home-automation/">Solutions</a>
          <a href="/product/">Products</a>
          <a href="/blog/">Insights</a>
        </div>
        <div>
          <strong>Solutions</strong>
          <a href="/home-automation/">Home Automation</a>
          <a href="/home-automation/">Hotel Automation</a>
          <a href="/home-automation/">Institutional</a>
          <a href="/home-automation/">Industrial</a>
        </div>
        <div>
          <strong>Connect</strong>
          <a href="/contact-us/">Contact Us</a>
          <a href="mailto:info@ottoclick.in">info@ottoclick.in</a>
          <a href="tel:+917880466267">+91 78804 66267</a>
          <span style={{ fontSize: 9, color: '#98949e', marginTop: 4 }}>Kanpur, UP, India</span>
        </div>
      </div>
    </div>
    <div className="reference-footer-bottom">
      <span>© {new Date().getFullYear()} Ottoclick. All rights reserved.</span>
      <span style={{ display: 'flex', gap: 16 }}>
        <a href="#" style={{ color: '#98949e' }}>Privacy Policy</a>
        <a href="#" style={{ color: '#98949e' }}>Terms of Service</a>
      </span>
      <span>Kanpur, Uttar Pradesh, India</span>
    </div>
  </footer>;
}

/* ═══════════════════════════════════════════════════════════════
   SEARCH OVERLAY
   ═══════════════════════════════════════════════════════════════ */
function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => { if (open && inputRef.current) inputRef.current.focus(); }, [open]);
  useEffect(() => { if (!open) setQuery(''); }, [open]);
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const normalizedQuery = query.trim().toLowerCase();
  const allSearchableItems = [
    ...productCatalog.map(p => ({ type: 'Product', title: p.title, description: p.description, href: `/product/${p.slug}/`, icon: p.Icon, meta: p.category })),
    ...solutionCategories.map(([Icon, title, text, variant]) => ({ type: 'Solution', title, description: text, href: '/home-automation/', icon: Icon, meta: 'Solutions' })),
    ...insightCards.map(([cat, title, desc, date]) => ({ type: 'Article', title, description: desc, href: '/blog/', icon: Play, meta: cat })),
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

/* ═══════════════════════════════════════════════════════════════
   PRODUCT DETAIL PAGE
   ═══════════════════════════════════════════════════════════════ */
function ProductDetailPage({ slug }) {
  const product = productCatalog.find(p => p.slug === slug);

  if (!product) return <div className="reference-site inner-page" style={{ padding: '120px 24px', textAlign: 'center' }}>
    <h2>Product not found</h2>
    <p style={{ color: 'var(--muted)', margin: '12px 0 24px' }}>The product you're looking for doesn't exist.</p>
    <RefButton href="/product/">Browse All Products</RefButton>
  </div>;

  const Icon = product.Icon;
  const relatedProducts = productCatalog.filter(p => p.category === product.category && p.slug !== product.slug);
  const otherProducts = relatedProducts.length > 0 ? relatedProducts : productCatalog.filter(p => p.slug !== product.slug).slice(0, 3);

  return <div className="reference-site inner-page">
    {/* Breadcrumb */}
    <nav className="product-breadcrumb">
      <a href="/">Home</a> <span>/</span> <a href="/product/">Products</a> <span>/</span> <span className="current">{product.title}</span>
    </nav>

    {/* Hero Section */}
    <section className="pdp-hero">
      <div className="pdp-hero-visual">
        <div className="pdp-icon-stage">
          <motion.div initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5, ease }}>
            <Icon size={80} strokeWidth={1} />
          </motion.div>
        </div>
        <span className="pdp-category-badge">{product.category}</span>
      </div>
      <motion.div className="pdp-hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .15, ease }}>
        <RefEyebrow>{product.category.toUpperCase()}</RefEyebrow>
        <h1>{product.title}</h1>
        <p className="pdp-description">{product.detail}</p>
        <div className="pdp-actions">
          <RefButton href="/contact-us/">Request a Quote</RefButton>
          <RefButton href="/contact-us/" className="ref-button-soft">Talk to an Expert</RefButton>
        </div>
      </motion.div>
    </section>

    {/* Highlights */}
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

    {/* Ideal For */}
    <section className="pdp-ideal">
      <div className="pdp-ideal-inner">
        <div>
          <RefEyebrow>IDEAL FOR</RefEyebrow>
          <h2>{product.idealFor}</h2>
        </div>
        <p>{product.description}</p>
      </div>
    </section>

    {/* Related Products */}
    <section className="pdp-related">
      <div className="pdp-related-heading">
        <div>
          <RefEyebrow>RELATED PRODUCTS</RefEyebrow>
          <h2>You might also need</h2>
        </div>
        <RefButton href="/product/" className="ref-button-soft">View All Products</RefButton>
      </div>
      <div className="product-category-grid" style={{ gridTemplateColumns: `repeat(${Math.min(otherProducts.length, 3)}, 1fr)` }}>
        {otherProducts.slice(0, 3).map((rp, i) => {
          const RPIcon = rp.Icon;
          return <motion.a href={`/product/${rp.slug}/`} className="product-category-card" key={rp.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}>
            <div className="product-card-img"><RPIcon size={36} strokeWidth={1.3} /></div>
            <div className="product-card-body">
              <span className="product-card-category">{rp.category}</span>
              <h4>{rp.title}</h4>
              <p>{rp.description}</p>
              <span className="product-card-link">View product <ArrowRight size={13} /></span>
            </div>
          </motion.a>;
        })}
      </div>
    </section>

    <ReferenceCTA />
  </div>;
}

/* ═══════════════════════════════════════════════════════════════
   APP ROOT
   ═══════════════════════════════════════════════════════════════ */
export default function App() {
  const { route, productSlug } = usePageRoute();

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
        const target = e.currentTarget.getAttribute('href');
        if (target) {
          if (target.startsWith('/') || target === '/') {
            e.preventDefault();
            window.history.pushState({}, '', target);
            window.dispatchEvent(new PopStateEvent('popstate'));
            lenisInstance.scrollTo(0, { immediate: true });
          } else if (target.startsWith('#')) {
            e.preventDefault();
            lenisInstance.scrollTo(target, { offset: -76 });
          }
        }
      };

      const handleScrollToEnter = () => {
        lenisInstance.scrollTo(220, { duration: 1.5 });
      };

      const anchors = document.querySelectorAll('a[href^="#"], a[href^="/"]');
      anchors.forEach(a => a.addEventListener('click', handleAnchorClick));
      window.addEventListener('scroll-to-enter', handleScrollToEnter);

      return () => {
        lenisInstance.destroy();
        anchors.forEach(a => a.removeEventListener('click', handleAnchorClick));
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
    : route === 'solutions' ? <SolutionsPage />
    : route === 'products' ? <ProductsPage />
    : route === 'product-detail' ? <ProductDetailPage slug={productSlug} />
    : route === 'blogs' ? <BlogsPage />
    : route === 'contact' ? <ContactPage />
    : <ReferenceHome />;

  const [searchOpen, setSearchOpen] = useState(false);

  return <>
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


