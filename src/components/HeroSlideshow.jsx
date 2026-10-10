import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Shield, Sliders, Moon } from 'lucide-react';

const homeSlides = [
  {
    image: '/assets/slideshow/slide-1-living.jpg',
    space: 'Smart Living Space',
    highlight: 'Scene Control & Tunable CCT',
    badge: 'Luxe & Aura Series',
    tag: 'Living & Dining',
    icon: Sliders
  },
  {
    image: '/assets/slideshow/slide-2-bedroom.jpg',
    space: 'Circadian Master Suite',
    highlight: 'Automated Drapes & Warm Ambiance',
    badge: 'Circadian Automation',
    tag: 'Master Bedroom',
    icon: Moon
  },
  {
    image: '/assets/slideshow/slide-3-entrance.jpg',
    space: 'Villa Keyless Arrival',
    highlight: 'Biometric Access & 3D Face Unlock',
    badge: 'Series 3 Pro Security',
    tag: 'Entrance & Perimeter',
    icon: Shield
  },
  {
    image: '/assets/slideshow/slide-4-dining.jpg',
    space: 'Designer Dining & Kitchen',
    highlight: 'Magnetic Track Spots & Mood Dials',
    badge: 'Architectural Lighting',
    tag: 'Dining & Kitchen',
    icon: Sparkles
  }
];

export const aboutSlides = [
  {
    image: '/products/all_extracted/mc_p4_img0_1713x911.png',
    space: 'Whole-Home Comfort',
    highlight: 'Lighting, media and climate working together',
    badge: 'Ottoclick Ecosystem',
    tag: 'Family Living',
    icon: Sliders
  },
  {
    image: '/products/all_extracted/mc_p40_img1_1766x724.png',
    space: 'Ambient Evening Scenes',
    highlight: 'Warm architectural lighting for relaxed evenings',
    badge: 'Smart Lighting',
    tag: 'Living & Dining',
    icon: Sparkles
  },
  {
    image: '/products/all_extracted/mc_p12_img7_1246x767.png',
    space: 'Designed Touch Control',
    highlight: 'Beautiful switches that blend into your interiors',
    badge: 'Luxe & Aura Series',
    tag: 'Interior Details',
    icon: Shield
  },
  {
    image: '/products/all_extracted/mc_p8_img0_1754x695.png',
    space: 'Control From Anywhere',
    highlight: 'Simple app control for every room and routine',
    badge: 'Connected Living',
    tag: 'Everyday Automation',
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
  }, [isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[current];
  const ActiveIcon = activeSlide.icon;

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
              loading="eager"
            />
            <div className="hero-slide-overlay-gradient" />
          </motion.div>
        </AnimatePresence>

        {/* Floating Context Pill */}
        <motion.div
          key={`pill-${current}`}
          className="hero-slide-info-pill"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <div className="hero-slide-pill-icon">
            <ActiveIcon size={14} />
          </div>
          <div className="hero-slide-pill-text">
            <div className="hero-slide-pill-top">
              <span className="hero-slide-pill-tag">{activeSlide.badge}</span>
              <span className="hero-slide-counter">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
            <strong className="hero-slide-pill-title">{activeSlide.space}</strong>
            <span className="hero-slide-pill-sub">{activeSlide.highlight}</span>
          </div>
        </motion.div>

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
