import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Search, X, MapPin, HelpCircle,
  Sparkles, ArrowRight, MessageCircle, CheckCircle2
} from 'lucide-react';
import { faqsData, faqCategories, getFaqsByPage, getFaqSchemaJsonLd } from '../data/faqsData.js';

const ease = [0.16, 1, 0.3, 1];

export function FaqSection({
  variant = 'home-brand',
  title,
  subtitle,
  eyebrow = 'GEO FAQ PACK • KANPUR, UP & PAN-INDIA',
  showExploreAll = true,
  className = ''
}) {
  const [openId, setOpenId] = useState(null);

  const normalizedVariant = useMemo(() => {
    if (variant === 'solution-home' || variant === 'home-automation') return 'solution-home';
    if (variant === 'solution-hotel' || variant === 'hotel-automation' || variant === 'hotel') return 'solution-hotel';
    if (variant === 'solution-institutional' || variant === 'institutional-automation' || variant === 'institutional') return 'solution-institutional';
    if (variant === 'solution-industrial' || variant === 'industrial-automation' || variant === 'industrial') return 'solution-industrial';
    if (variant === 'home' || variant === 'home-brand' || variant === 'brand') return 'home-brand';
    return variant;
  }, [variant]);

  const faqs = useMemo(() => {
    switch (normalizedVariant) {
      case 'home-brand':
        return getFaqsByPage('home');
      case 'solution-home':
        return getFaqsByPage('solution-home');
      case 'solution-hotel':
        return getFaqsByPage('solution-hotel');
      case 'solution-institutional':
        return getFaqsByPage('solution-institutional');
      case 'solution-industrial':
        return getFaqsByPage('solution-industrial');
      case 'all':
        return faqsData;
      default:
        return getFaqsByPage(normalizedVariant);
    }
  }, [normalizedVariant]);

  const defaultTitles = {
    'home-brand': {
      title: <>Frequently Asked <em>Questions.</em></>,
      subtitle: 'Clear, verifiable answers about OttoClick services, locations served, warranties, and starting your automation journey from Kanpur to pan-India.'
    },
    'solution-home': {
      title: <>Home Automation <em>FAQs.</em></>,
      subtitle: 'Common questions on smart home retrofitting, costs, voice control, power backup, electricity savings, and security in Kanpur & Uttar Pradesh.'
    },
    'solution-hotel': {
      title: <>Hotel Room Automation <em>FAQs.</em></>,
      subtitle: 'Answers on guest room management (GRMS), energy savings, PMS integration, pilot upgrades, and turnkey support across UP & India.'
    },
    'solution-institutional': {
      title: <>Institutional Automation <em>FAQs.</em></>,
      subtitle: 'Guidance on campus-wide energy management, smart classroom lighting, access control, BMS integration, and phased procurement.'
    },
    'solution-industrial': {
      title: <>Industrial Automation <em>FAQs.</em></>,
      subtitle: 'Technical clarity on PLC/SCADA systems, machinery retrofits, IoT energy monitoring, plant safety, and Kanpur industrial corridor support.'
    }
  };

  const currentMeta = defaultTitles[normalizedVariant] || defaultTitles['home-brand'];
  const headingTitle = title || currentMeta.title;
  const headingSubtitle = subtitle || currentMeta.subtitle;

  const toggleFaq = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const schemaJson = useMemo(() => getFaqSchemaJsonLd(faqs), [faqs]);

  return (
    <section className={`reference-section faq-section-container ${className}`} id="faqs" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
      {/* Schema.org FAQPage JSON-LD for Search Engines & AI Overviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="reference-section-heading faq-heading-shell">
        <div>
          <span className="ref-eyebrow" style={{ color: '#5534d5' }}>{eyebrow}</span>
          <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 48px)', fontWeight: 650, letterSpacing: '-0.05em', margin: '12px 0 16px' }}>
            {headingTitle}
          </h2>
        </div>
        <div>
          <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6, margin: '0 0 16px' }}>
            {headingSubtitle}
          </p>
          <div className="faq-geo-presence-pill">
            <MapPin size={13} color="#5534d5" />
            <span>Serving Kanpur (CSJMIF Complex), Uttar Pradesh &amp; Pan-India</span>
          </div>
        </div>
      </div>

      <div className="faq-accordion-list">
        {faqs.map((faq, index) => {
          const isOpen = openId === faq.id || (index === 0 && openId === null);
          return (
            <motion.div
              key={faq.id}
              className={`faq-card-item ${isOpen ? 'is-open' : ''}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.35, ease }}
            >
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-ans-${faq.id}`}
              >
                <div className="faq-question-content">
                  {faq.geoBadge && (
                    <span className="faq-geo-scope-tag">
                      {faq.geoBadge}
                    </span>
                  )}
                  <h3 className="faq-question-text">{faq.question}</h3>
                </div>
                <div className={`faq-toggle-circle ${isOpen ? 'is-rotated' : ''}`} aria-hidden="true">
                  <ChevronDown size={16} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-ans-${faq.id}`}
                    className="faq-answer-container"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease }}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {showExploreAll && (
        <div className="faq-bottom-banner">
          <div className="faq-bottom-copy">
            <strong>Have more questions or specific architectural requirements?</strong>
            <span>Explore our complete 47-question knowledge base or speak directly with our engineering team in Kanpur.</span>
          </div>
          <div className="faq-bottom-actions">
            <a href="/faqs/" className="ref-button" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
              Explore All 47 FAQs <ArrowRight size={14} />
            </a>
            <a href="/contact-us/" className="ref-button ref-button-soft" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
              <MessageCircle size={14} /> Talk to Kanpur Team
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

/**
 * Dedicated Full-Page FAQ Explorer Component
 */
export function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const filteredFaqs = useMemo(() => {
    let list = activeCategory === 'all' ? faqsData : faqsData.filter(f => f.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(f =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        (f.geoBadge && f.geoBadge.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const toggleFaq = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const schemaJson = useMemo(() => getFaqSchemaJsonLd(faqsData), []);

  return (
    <div className="reference-site inner-page faqs-page-shell">
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <section className="reference-page-hero">
        <div style={{ padding: '78px 66px' }}>
          <span className="ref-eyebrow" style={{ color: '#5534d5' }}>GEO FAQ KNOWLEDGE PACK</span>
          <h1 style={{ fontSize: 'clamp(42px, 5.2vw, 65px)', lineHeight: 0.96, letterSpacing: '-0.07em', fontWeight: 650, margin: '15px 0 18px' }}>
            Frequently Asked<br /><em>Questions.</em>
          </h1>
          <p style={{ maxWidth: 440, color: '#52515d', fontSize: 13, lineHeight: 1.65 }}>
            Verifiable, transparent answers on home automation, industrial IoT, institutional energy control, and hotel management across Kanpur, Uttar Pradesh, and pan-India.
          </p>

          <div className="faq-hero-meta-strip" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
            <span className="faq-geo-badge-tag"><MapPin size={12} /> CSJMIF Shopping Complex, Kalyanpur, Kanpur</span>
            <span className="faq-geo-badge-tag"><CheckCircle2 size={12} /> 5-Year Official Warranty</span>
            <span className="faq-geo-badge-tag"><Sparkles size={12} /> Zigbee 3.0 &amp; Wi-Fi</span>
          </div>

          <div className="faq-page-search-bar" style={{ marginTop: 28, maxWidth: 480 }}>
            <div className="faq-search-input-shell">
              <Search size={16} color="#5534d5" />
              <input
                type="text"
                placeholder="Search questions (e.g. Kanpur, price, wiring, Alexa, PLC)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search FAQs"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery('')} aria-label="Clear search" className="faq-search-clear-btn">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="ref-image" style={{ background: '#dfd9f8', minHeight: 460 }}>
          <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80"
            alt="Ottoclick Smart Home Automation in Kanpur"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Category Filter Pills Ribbon */}
      <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto', paddingTop: 40, paddingBottom: 20 }}>
        <div className="faq-category-pills-bar">
          {faqCategories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`faq-cat-pill ${activeCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
            >
              <span>{cat.label}</span>
              <span className="faq-cat-count">({cat.count})</span>
            </button>
          ))}
        </div>

        <div className="faq-results-status" style={{ margin: '18px 0 24px', fontSize: 12, color: 'var(--muted)' }}>
          Showing <strong>{filteredFaqs.length}</strong> {filteredFaqs.length === 1 ? 'question' : 'questions'}
          {activeCategory !== 'all' && <> in <strong>{faqCategories.find(c => c.id === activeCategory)?.label}</strong></>}
          {searchQuery && <> matching &ldquo;<strong>{searchQuery}</strong>&rdquo;</>}
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="faq-empty-state" style={{ padding: '48px 24px', textAlign: 'center', background: '#fff', borderRadius: 12, border: '1px solid var(--line)' }}>
            <HelpCircle size={32} color="#9E8CFC" style={{ marginBottom: 12 }} />
            <h4 style={{ margin: '0 0 8px', fontSize: 16, color: 'var(--ink)' }}>No matching questions found</h4>
            <p style={{ margin: '0 0 16px', fontSize: 13, color: 'var(--muted)' }}>Try searching for a different keyword or contact our Kanpur support desk directly.</p>
            <button type="button" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="ref-button ref-button-soft">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="faq-accordion-list">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id || (index === 0 && openId === null && !searchQuery);
              return (
                <motion.div
                  key={faq.id}
                  className={`faq-card-item ${isOpen ? 'is-open' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease }}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-page-ans-${faq.id}`}
                  >
                    <div className="faq-question-content">
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                        <span className="faq-geo-scope-tag">{faq.geoBadge}</span>
                        <span className="faq-section-micro-tag">{faq.section}</span>
                      </div>
                      <h3 className="faq-question-text">{faq.question}</h3>
                    </div>
                    <div className={`faq-toggle-circle ${isOpen ? 'is-rotated' : ''}`} aria-hidden="true">
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-page-ans-${faq.id}`}
                        className="faq-answer-container"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease }}
                      >
                        <div className="faq-answer-inner">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* Contact & Consultation Box */}
      <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '40px auto 0' }}>
        <div className="faq-contact-card" style={{ background: '#1E1A2D', color: '#fff', borderRadius: 16, padding: '42px 46px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span style={{ color: '#9E8CFC', fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>DIRECT ASSISTANCE</span>
            <h3 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 650, margin: '8px 0 10px', color: '#fff' }}>
              Still have questions about your project?
            </h3>
            <p style={{ color: '#c4c1cd', fontSize: 13, margin: 0, maxWidth: 520, lineHeight: 1.6 }}>
              Our Kanpur engineering team provides complimentary site visits, CAD wiring feasibility audits, and itemised quotation blueprints.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://wa.me/918423466267" target="_blank" rel="noopener noreferrer" className="button" style={{ background: '#25D366', borderColor: '#25D366', color: '#fff' }}>
              <MessageCircle size={14} /> WhatsApp Us
            </a>
            <a href="/contact-us/" className="button button-secondary">
              Book a Consultation <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
