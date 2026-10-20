import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Shield, Sliders, Moon } from 'lucide-react';

const homeSlides = [
  {
    image: '/assets/slideshow/slide-1-living.jpg',
    space: 'Smart Living Space',
    highlight: 'Scene Control & Tunable CCT',
    badge: 'OLED Knob',
    tag: 'Living & Dining',
    imageStyle: { objectPosition: '72% center', transform: 'scale(1.05)' },
    focus: { x: 88, y: 51, position: 'left' },
    product: {
      image: '/products/catalog/panel-oc-ssm-cct.png',
      name: 'Zigbee Smart CCT Controller',
      detail: 'Tunable knob, display + 2 scene switches',
      source: 'Master Catalogue · Page 41',
      href: '/product/zigbee-smart-cct-dimming-tunable-knob-with-display/'
    },
    icon: Sliders
  },
  {
    image: '/assets/slideshow/slide-2-bedroom.jpg',
    space: 'Master Bedroom Scenes',
    highlight: 'Automated Curtains & Warm Lighting',
    badge: 'Zircon Series',
    tag: 'Master Bedroom',
    imageStyle: { objectPosition: '18% center', transform: 'scale(1.05)' },
    focus: { x: 8, y: 53, position: 'right' },
    product: {
      image: '/products/catalog/panel-oc-ssm-dis.png',
      name: 'Zircon 4 Gang Display Panel',
      detail: 'Room scenes + climate control',
      source: 'Master Catalogue · Page 41',
      href: '/product/zircon-4-gang-with-display/'
    },
    icon: Moon
  },
  {
    image: '/assets/slideshow/slide-3-entrance-balanced.png',
    space: 'Villa Keyless Arrival',
    highlight: 'Biometric Access & 3D Face Unlock',
    badge: 'Series 3 Pro Security',
    tag: 'Entrance & Perimeter',
    imageStyle: { objectPosition: '56% center', transform: 'scale(1.06)' },
    focus: { x: 55, y: 52, position: 'left' },
    product: {
      image: '/products/catalog/lock-series-3-pro.png',
      name: 'Series 3 Pro Smart Door Lock',
      detail: 'Face, fingerprint & app access',
      source: 'Door Locks Catalogue · Page 6',
      href: '/product/series-3-smart-door-lock/'
    },
    icon: Shield
  },
  {
    image: '/assets/slideshow/slide-4-dining.jpg',
    space: 'Designer Dining & Kitchen',
    highlight: 'Magnetic Track Spots & Mood Dials',
    badge: 'Luxe Series',
    tag: 'Dining & Kitchen',
    imageStyle: { objectPosition: '64% center', transform: 'scale(1.05)' },
    focus: { x: 65, y: 53, position: 'left' },
    product: {
      image: '/products/catalog/luxe-4m-4s.png',
      name: 'Luxe Series 4 Gang Switch',
      detail: 'Four-touch scene control',
      source: 'Master Catalogue · Page 13',
      href: '/product/luxe-series-4-gang-switch/'
    },
    icon: Sparkles
  }
];

// Shared slide data is kept beside the component so Home and About use the same showcase format.
// oxlint-disable-next-line react/only-export-components
export const aboutSlides = [
  {
    image: '/products/all_extracted/mc_p4_img0_1713x911.png',
    space: 'Whole-Home Comfort',
    highlight: 'Lighting, media and climate working together',
    badge: 'Ottoclick Ecosystem',
    tag: 'Family Living',
    focus: { x: 40, y: 66, position: 'right' },
    product: {
      image: '/products/catalog/panel-oc-cp-6.png',
      name: 'Infinity 6 Smart Control Panel',
      detail: 'Scenes, climate & whole-home control',
      source: 'Master Catalogue · Page 41',
      href: '/product/infinity-6-smart-wifi-touch-control-panel/'
    },
    icon: Sliders
  },
  {
    image: '/products/all_extracted/mc_p40_img1_1766x724.png',
    space: 'Ambient Evening Scenes',
    highlight: 'Warm architectural lighting for relaxed evenings',
    badge: 'Smart Lighting',
    tag: 'Living & Dining',
    focus: { x: 53, y: 36, position: 'left' },
    product: {
      image: '/products/catalog/luxe-4m-4s.png',
      name: 'Luxe Series 4 Gang Switch',
      detail: 'Four-touch ambient scene control',
      source: 'Master Catalogue · Page 13',
      href: '/product/luxe-series-4-gang-switch/'
    },
    icon: Sparkles
  },
  {
    image: '/products/all_extracted/mc_p12_img7_1246x767.png',
    space: 'Designed Touch Control',
    highlight: 'Beautiful switches that blend into your interiors',
    badge: 'Luxe & Aura Series',
    tag: 'Interior Details',
    focus: { x: 38, y: 35, position: 'right' },
    product: {
      image: '/products/catalog/luxe-6m-8s.png',
      name: 'Luxe Series 6 Gang Switch',
      detail: 'Multi-scene lighting control',
      source: 'Master Catalogue · Page 13',
      href: '/product/luxe-series-6-gang-1-socket/'
    },
    icon: Shield
  },
  {
    image: '/products/all_extracted/mc_p8_img0_1754x695.png',
    space: 'Control From Anywhere',
    highlight: 'Simple app control for every room and routine',
    badge: 'Connected Living',
    tag: 'Everyday Automation',
    focus: { x: 48, y: 45, position: 'right' },
    product: {
      image: '/assets/catalogue/app-phones.png',
      name: 'Ottoclick Smart Home App',
      detail: 'Scenes, energy & remote control',
      source: 'Master Catalogue · Page 9',
      href: '/product/'
    },
    icon: Moon
  }
];

export function HeroSlideshow({ slides = homeSlides, ariaLabel = 'Smart spaces showcase slideshow' }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[current];

  return (
    <div
      className="hero-slideshow-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="hero-slideshow-viewport">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="hero-slide-item"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.space}
              className="hero-slide-image"
              style={activeSlide.imageStyle}
              loading="eager"
            />
            <div className="hero-slide-overlay-gradient" />
            {activeSlide.product && activeSlide.focus && (
              <div
                className={`hero-slide-product-focus is-${activeSlide.focus.position}`}
                style={{ '--focus-x': `${activeSlide.focus.x}%`, '--focus-y': `${activeSlide.focus.y}%` }}
              >
                <span className="hero-slide-focus-ring" aria-hidden="true" />
                <span className="hero-slide-focus-line" aria-hidden="true" />
                <a className="hero-slide-product-card" href={activeSlide.product.href} aria-label={`View ${activeSlide.product.name}`}>
                  <span className="hero-slide-product-image">
                    <img src={activeSlide.product.image} alt="" />
                  </span>
                  <span className="hero-slide-product-copy">
                    <small>OTTOCLICK PRODUCT</small>
                    <strong>{activeSlide.product.name}</strong>
                    <span>{activeSlide.product.detail}</span>
                    <em>{activeSlide.product.source}</em>
                  </span>
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          type="button"
          className="hero-slideshow-nav-btn prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          className="hero-slideshow-nav-btn next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>

        {/* Bottom Progress Bar / Dots */}
        <div className="hero-slideshow-indicators">
          {slides.map((s, idx) => (
            <button
              key={s.space}
              type="button"
              className={`hero-slideshow-dot ${idx === current ? 'is-active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}: ${s.space}`}
            >
              <span className="hero-slideshow-dot-bar" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSlideshow;
