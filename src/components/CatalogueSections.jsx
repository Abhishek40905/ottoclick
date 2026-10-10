import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity, ArrowRight, CheckCircle2, Clock,
  Cpu, Eye, Flame, Layers, Lightbulb, Lock, Mic,
  Radio, Shield, ShieldCheck, Sliders, Smartphone,
  Sun, Thermometer, Tv, Volume2, Wifi, Zap, X, Info
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

/* ═══════════════════════════════════════════════════════════════
   1. COMPLETE HOME AUTOMATION FLOORPLAN TOUR (Catalogue pp. 6–7)
   ═══════════════════════════════════════════════════════════════ */
export function FloorplanShowcase() {
  const [activeZone, setActiveZone] = useState('bedroom');

  const zones = {
    bedroom: {
      name: 'Master Bedroom',
      eyebrow: 'ZONE 01 • PRIVATE SANCTUARY',
      title: 'Comfort, Climate & Effortless Lighting',
      desc: 'Wake up to natural morning light and fall asleep in optimal comfort. All bedroom systems coordinate automatically without cluttering the walls.',
      image: '/assets/catalogue/floorplan-bedroom.png',
      features: [
        { title: 'Retrofit Mini Smart Breakers', text: 'Installs behind your existing switchboard with zero wall re-wiring.', icon: Zap },
        { title: 'Super-Silent Curtain Motors', text: '2.5Nm / 1.5Nm motors open smoothly with sunrise schedules.', icon: Sun },
        { title: 'Smart AC Climate Management', text: 'Automated cooling curve prevents midnight chills and saves energy.', icon: Thermometer },
        { title: 'Aura Frameless Glass Switches', text: 'Capacitive touch switches with hum-free electronic fan dimmers.', icon: Sliders }
      ]
    },
    living: {
      name: 'Living & Dining',
      eyebrow: 'ZONE 02 • SOCIAL & AMBIENCE',
      title: 'Architectural Lighting & Entertainment',
      desc: 'Set the perfect scene for dinners, movie nights, or family gatherings with tunable downlights, linear magnetic tracks, and reactive TV backlights.',
      image: '/assets/catalogue/floorplan-living.png',
      features: [
        { title: 'Concealed Downlights & Spots', text: '3-in-1 CCT tunable white (2700K to 6500K) for focused or warm glows.', icon: Lightbulb },
        { title: 'Magnetic Track Lighting', text: 'Tool-free click-in linear diffused and adjustable spotlight modules.', icon: Layers },
        { title: 'TV HDMI & Camera Sync Lights', text: 'Real-time color synchronization creates an immersive theatre aura.', icon: Tv },
        { title: 'Tactile OLED Rotary Knob', text: 'Satisfying rotary dial for precise Kelvin temperature and dimming.', icon: Sliders }
      ]
    },
    entrance: {
      name: 'Main Entrance & Gates',
      eyebrow: 'ZONE 03 • SECURITY & PERIMETER',
      title: 'Keyless Security & Heavy-Duty Gate Automation',
      desc: 'Experience luxury keyless arrival. Advanced biometrics and face recognition ensure only family and authorized guests enter.',
      image: '/products/catalog/lock-series-3-pro.png',
      features: [
        { title: 'Series 3 Pro Face Recognition Lock', text: '3D facial recognition unlocks hands-free as you approach the door.', icon: Lock },
        { title: 'Automated Gate & Slider Motors', text: 'Dual-arm swing actuators (up to 600kg) and sliding drives (up to 1500kg).', icon: Cpu },
        { title: 'Magnetic Door / Window Contacts', text: 'Discreet reed sensors report instant open/close notifications.', icon: ShieldCheck },
        { title: 'Video Door Phone (VDP) Linkage', text: 'See and speak to visitors with two-way audio directly from phone.', icon: Smartphone }
      ]
    },
    kitchen: {
      name: 'Kitchen & Safety',
      eyebrow: 'ZONE 04 • HAZARD PREVENTION',
      title: 'Combustible Gas & Smoke Safeguards',
      desc: 'Continuous monitoring of invisible hazards. If an LPG leak is detected, Ottoclick alerts you and automatically cuts off the gas supply.',
      image: '/products/catalog/gas-zigbee-lpg.png',
      features: [
        { title: 'Combustible Gas Leak Detector', text: 'Sniffs LPG, PNG, and methane leaks with a piercing local siren.', icon: Flame },
        { title: 'Emergency Solenoid Shutoff Valve', text: 'Mechanically shuts off the main gas valve instantly upon leak alert.', icon: Shield },
        { title: 'Photoelectric Smoke Alarms', text: 'Dual-chamber smoke sensing prevents false alarms while ensuring safety.', icon: Activity },
        { title: 'Multi-User Mobile Broadcast', text: 'Emergency alert broadcasts simultaneously to all family members.', icon: Smartphone }
      ]
    },
    wardrobe: {
      name: 'Wardrobes & Corridors',
      eyebrow: 'ZONE 05 • MOTION & INTERIORS',
      title: 'Hands-Free Sensing & Flowing Stairs',
      desc: 'Lights illuminate only when you need them. From wardrobe doors to cascading stairs, illumination follows your path seamlessly.',
      image: '/products/catalog/sensor-oc-lr1.png',
      features: [
        { title: 'Double-Door IR Wardrobe Sensors', text: 'Triggers concealed LED profile strips the moment a closet opens.', icon: Layers },
        { title: '360° Ceiling Microwave Sensors', text: 'High-frequency radar detects occupancy with zero blind spots.', icon: Eye },
        { title: 'Cascading Staircase Automation', text: '32-step LED flow lighting illuminates step-by-step as you walk.', icon: Activity },
        { title: 'Dusk-to-Dawn Photocell Switches', text: 'Automatically powers exterior perimeter lights at twilight.', icon: Sun }
      ]
    },
    central: {
      name: 'Central Command',
      eyebrow: 'ZONE 06 • UNIFIED DASHBOARD',
      title: 'Wall Command Screens & Voice Integration',
      desc: 'Replace multi-gang switch clutter with architectural touchscreens featuring built-in Zigbee gateways and Alexa voice control.',
      image: '/products/catalog/panel-oc-cp-6.png',
      features: [
        { title: 'Infinity 6” Smart Touch Panel', text: 'HD IPS touchscreen with rotary tactile dial, 2 relays & video intercom.', icon: Sliders },
        { title: 'HomeSync Pro 4” Touch Panel', text: 'Built-in Amazon Alexa voice assistant + Zigbee/BLE Mesh gateway hub.', icon: Mic },
        { title: 'Magnetic 12-Scene Creators', text: 'Detachable 4-button wireless dock supporting 12 unique scene clicks.', icon: Radio },
        { title: 'Unified Whole-Home Control', text: 'Lighting, climate, curtains, locks and security unified on one display.', icon: Cpu }
      ]
    }
  };

  const current = zones[activeZone];

  return (
    <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto 60px' }}>
      <div className="reference-section-heading">
        <div>
          <span className="ref-eyebrow">CATALOGUE PAGES 06–07 • COMPLETE ARCHITECTURE</span>
          <h2>Complete Home <em>Automation.</em></h2>
        </div>
        <p>Smarter living starts at your door. Explore how Ottoclick transforms every room into an intelligent, interconnected environment.</p>
      </div>

      {/* Room Selector Pills */}
      <div className="catalogue-room-tabs">
        {Object.entries(zones).map(([key, zone]) => (
          <button
            key={key}
            type="button"
            className={`catalogue-room-tab ${activeZone === key ? 'is-active' : ''}`}
            onClick={() => setActiveZone(key)}
          >
            {zone.name}
          </button>
        ))}
      </div>

      {/* Interactive Zone Detail Shell */}
      <motion.div
        key={activeZone}
        className="catalogue-floorplan-shell"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease }}
      >
        <div className="catalogue-floorplan-visual">
          <img
            src={current.image}
            alt={current.name}
            className="catalogue-floorplan-img"
            style={{ maxHeight: 380, objectFit: 'contain', padding: 20 }}
          />
        </div>

        <div className="catalogue-floorplan-content">
          <span className="ref-eyebrow" style={{ color: '#5534d5' }}>{current.eyebrow}</span>
          <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, margin: '8px 0 12px', letterSpacing: '-0.04em' }}>
            {current.title}
          </h3>
          <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6, marginBottom: 24 }}>
            {current.desc}
          </p>

          <div className="catalogue-room-features">
            {current.features.map((feat) => {
              const FeatIcon = feat.icon;
              return (
                <div key={feat.title} className="catalogue-room-feat">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <FeatIcon size={14} color="#5534d5" />
                    <strong>{feat.title}</strong>
                  </div>
                  <span>{feat.text}</span>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 24 }}>
            <a href="/product/" className="product-btn-details" style={{ display: 'inline-flex' }}>
              Explore Products in this Zone <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. ZIGBEE VS WI-FI COMPARISON (Catalogue Page 8)
   ═══════════════════════════════════════════════════════════════ */
export function ZigbeeWifiComparison() {
  const comparisonData = [
    { param: 'Ideal For', wifi: '1–2 rooms, small homes, basic automation setup', zigbee: 'Complete home automation, villas, larger spaces' },
    { param: 'Connection Type', wifi: 'Connects directly to home Wi-Fi router', zigbee: 'Dedicated smart mesh automation network' },
    { param: 'Hub Requirement', wifi: 'No hub required (Standalone direct connect)', zigbee: 'Requires a central Zigbee 3.0 gateway hub' },
    { param: 'Installation Experience', wifi: 'Quick and simple DIY / direct setup', zigbee: 'Planned and professionally configured' },
    { param: 'Control Options', wifi: 'Mobile App & Voice Assistant control', zigbee: 'App, Voice, Touch & Local mesh fallback' },
    { param: 'System Response', wifi: 'Simple, direct cloud/router control', zigbee: 'Instant, smooth, coordinated local mesh scenes' },
    { param: 'Number of Devices', wifi: 'Works best with limited devices (15–25)', zigbee: 'Handles 100+ devices seamlessly without lag' },
    { param: 'Effect on Home Wi-Fi', wifi: 'Shares home Wi-Fi bandwidth with phones & TVs', zigbee: 'Zero impact on home Wi-Fi (independent channel)' },
    { param: 'Reliability', wifi: 'Depends on Wi-Fi router signal strength', zigbee: 'Self-healing mesh (every wired device repeats signal)' },
    { param: 'Future Expansion', wifi: 'Limited by router device limits', zigbee: 'Effortlessly expandable anytime with mesh' },
    { param: 'Best Choice When', wifi: 'You want quick single-room automation with no hub', zigbee: 'You want reliable, scalable, lifelong whole-home luxury' },
  ];

  return (
    <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto 60px' }}>
      <div className="reference-section-heading">
        <div>
          <span className="ref-eyebrow">CATALOGUE PAGE 08 • CONNECTIVITY ARCHITECTURE</span>
          <h2>Choose Your Connection, <em>Enjoy Total Control.</em></h2>
        </div>
        <p>Designed for flexibility, Ottoclick products offer both Wi-Fi and Zigbee connectivity options, ensuring reliable performance and secure communication tailored to your needs.</p>
      </div>

      <div className="zigbee-wifi-shell">
        <table className="zigbee-wifi-table">
          <thead>
            <tr>
              <th>Comparison Parameter</th>
              <th className="col-wifi">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Wifi size={18} /> Wi-Fi Automation
                </div>
              </th>
              <th className="col-zigbee">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Radio size={18} /> Zigbee 3.0 Mesh Automation
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row) => (
              <tr key={row.param}>
                <td>{row.param}</td>
                <td className="col-wifi">{row.wifi}</td>
                <td className="col-zigbee">{row.zigbee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. MOBILE APP & VOICE LIVING (Catalogue Page 9)
   ═══════════════════════════════════════════════════════════════ */
export function AppAndVoiceShowcase() {
  const appFeatures = [
    { title: 'Remote Access Control', text: 'Manage lights, climate & doors from anywhere in the world.', icon: Smartphone },
    { title: 'Real-Time Alerts', text: 'Instant push notifications for door openings, leaks, or motion.', icon: Activity },
    { title: 'Geo-Fencing Automation', text: 'Welcomes you home by turning on AC and lights as you approach.', icon: Radio },
    { title: 'Scheduled Device Control', text: 'Automated sunrise/sunset timers and daily routines.', icon: Clock },
    { title: 'Smart Scene Programming', text: 'One-tap custom moods with multi-device synchronized control.', icon: Sliders },
    { title: '24/7 Energy Monitoring', text: 'Live kWh tracking helps cut electricity costs by up to 30%.', icon: Zap },
    { title: 'Family & Home Management', text: 'Role-based access permissions for family, guests, and staff.', icon: ShieldCheck },
    { title: 'Seamless Interworking', text: 'Sensors, switches, and locks coordinate seamlessly.', icon: Cpu },
  ];

  return (
    <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto 60px' }}>
      <div className="catalogue-app-shell">
        <div className="catalogue-app-media">
          <img src="/assets/catalogue/app-phones.png" alt="Ottoclick Mobile Application" />
        </div>

        <div className="catalogue-app-content">
          <span className="ref-eyebrow">CATALOGUE PAGE 09 • SMARTPHONE & VOICE ECOSYSTEM</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.05em', margin: '10px 0 14px' }}>
            Multiple Ways to <em>Stay in Control.</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>
            Ottoclick delivers seamless control over all appliances through an intuitive mobile app and intelligent automation designed to enhance everyday comfort and convenience.
          </p>

          <div className="catalogue-app-features-grid">
            {appFeatures.map((feat) => {
              const FeatIcon = feat.icon;
              return (
                <div key={feat.title} className="catalogue-app-feat-item">
                  <FeatIcon size={16} />
                  <div>
                    <strong>{feat.title}</strong>
                    <span>{feat.text}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="voice-badges-row">
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)' }}>Voice-Enabled Smart Living:</span>
            <span className="voice-badge-pill">
              <Mic size={14} /> Works with Amazon Alexa
            </span>
            <span className="voice-badge-pill">
              <Volume2 size={14} /> Works with Google Home
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. SCENE CREATION: ONE SPACE, MANY MOODS (Catalogue Page 42)
   ═══════════════════════════════════════════════════════════════ */
export function SceneCreationShowcase() {
  const [activeMood, setActiveMood] = useState('evening');

  const moods = {
    morning: {
      name: 'Morning Scene',
      tagline: 'Energize your day.',
      desc: 'Motorized curtains glide open smoothly to invite morning sunlight. Ambient lights transition to crisp 5000K daylight white, and water heaters activate on schedule.',
      controls: ['Gently opening curtains', '5000K daylight energizing LEDs', 'Morning news / audio brief', 'AC shifts to natural ventilation']
    },
    evening: {
      name: 'Evening Scene',
      tagline: 'Relax and unwind.',
      desc: 'Concealed downlights warm down to 2700K amber tones. Magnetic track spotlights highlight artwork, curtains draw for privacy, and living room climate cools to cozy perfection.',
      controls: ['2700K warm ambient downlights', 'Motorized privacy curtains close', 'TV sync backlights activate', 'Air conditioning sets to 24°C']
    },
    night: {
      name: 'Night Scene',
      tagline: 'Comfort at its best.',
      desc: 'One tap beside your bed arms perimeter door security, turns off all living area lights, and sets subtle hallway floor sensors for safe midnight steps.',
      controls: ['Whole-home all-off master trigger', 'Door locks auto-deadbolt armed', 'Low-glare pathway night lights', 'Silent quiet fan and AC sleep mode']
    }
  };

  const current = moods[activeMood];

  return (
    <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto 60px' }}>
      <div className="reference-section-heading">
        <div>
          <span className="ref-eyebrow">CATALOGUE PAGE 42 • SCENE CREATION</span>
          <h2>One Space, <em>Many Moods.</em></h2>
        </div>
        <p>Transform everyday moments into perfect scenes. From morning energy to relaxing evening or a restful night — create the right ambience with a single touch.</p>
      </div>

      <div className="catalogue-scene-shell">
        <div className="catalogue-scene-media">
          <img src="/assets/catalogue/scene-moods.png" alt="Morning, Evening and Night Scene Moods" />
        </div>

        <div className="catalogue-scene-content">
          {/* Mood Tabs */}
          <div className="catalogue-room-tabs" style={{ margin: '0 0 20px' }}>
            {Object.entries(moods).map(([key, m]) => (
              <button
                key={key}
                type="button"
                className={`catalogue-room-tab ${activeMood === key ? 'is-active' : ''}`}
                onClick={() => setActiveMood(key)}
              >
                {m.name}
              </button>
            ))}
          </div>

          <h3 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 8px', color: 'var(--ink)' }}>
            {current.name} &mdash; <em style={{ fontStyle: 'normal', color: '#5534d5' }}>{current.tagline}</em>
          </h3>
          <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
            {current.desc}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
            {current.controls.map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 550, color: 'var(--ink)' }}>
                <CheckCircle2 size={14} color="#5534d5" /> {item}
              </div>
            ))}
          </div>

          {/* 4 Control Methods */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: 18 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Control the Scene Using:
            </span>
            <div className="scene-triggers-list">
              <div className="scene-trigger-card">
                <Sliders size={18} />
                <strong>Touch</strong>
                <span>Scene switch</span>
              </div>
              <div className="scene-trigger-card">
                <Smartphone size={18} />
                <strong>App</strong>
                <span>From anywhere</span>
              </div>
              <div className="scene-trigger-card">
                <Mic size={18} />
                <strong>Voice</strong>
                <span>“Just say it”</span>
              </div>
              <div className="scene-trigger-card">
                <Radio size={18} />
                <strong>Remote</strong>
                <span>Simple &amp; familiar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. WHY CHOOSE OTTOCLICK: 9 PILLARS (Catalogue Page 5)
   ═══════════════════════════════════════════════════════════════ */
export function CatalogueNinePillars() {
  const pillars = [
    { title: 'Premium & Innovative', desc: 'High-quality hardware crafted with modern aesthetics and advanced intelligence.', icon: Cpu },
    { title: 'Unified Control', desc: 'Control all smart switches, curtains, lighting, and locks from a single mobile dashboard.', icon: Sliders },
    { title: 'Personalized Automation Flows', desc: 'Custom automated workflows designed around your daily routines and schedules.', icon: Activity },
    { title: 'Secure & Encrypted', desc: 'Enterprise-grade encryption ensures your home network and access data remain safe.', icon: ShieldCheck },
    { title: 'Adaptive Smart Lighting', desc: 'Architectural lighting that automatically adjusts to time of day, occupancy, and moods.', icon: Lightbulb },
    { title: 'Zigbee & Wi-Fi Compatible', desc: 'Dual-protocol flexibility ensures high stability, self-healing mesh, and zero router strain.', icon: Wifi },
    { title: 'Experience-Focused Service', desc: 'We design automation that feels simple, smooth, and deeply natural to use every day.', icon: CheckCircle2 },
    { title: 'Energy-Efficient Automation', desc: 'Intelligent sensor and scheduling cut power consumption by up to 30%.', icon: Zap },
    { title: 'One-Stop Automation', desc: 'Complete planning, consultation, installation, and after-sales support under one roof.', icon: Layers },
  ];

  return (
    <section className="reference-section" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto 60px' }}>
      <div className="reference-section-heading">
        <div>
          <span className="ref-eyebrow">CATALOGUE PAGE 05 • OUR FOUNDATIONAL COMMITMENT</span>
          <h2>Why Choose <em>Ottoclick Automation?</em></h2>
        </div>
        <p>At OTTOCLICK, we are committed to delivering an outstanding smart living experience. Engineered for performance, built for life.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
        {pillars.map((item, i) => {
          const ItemIcon = item.icon;
          return (
            <motion.div
              key={item.title}
              className="reference-value-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <ItemIcon size={24} color="#5534d5" />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)' }}>0{i + 1}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 6px', color: 'var(--ink)' }}>{item.title}</h3>
              <p style={{ fontSize: 12, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. TRUST OF OTTOCLICK: 5 Years Warranty (Catalogue Page 43)
   ═══════════════════════════════════════════════════════════════ */
export function WarrantyBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="warranty" style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto 60px' }}>
      <div className="warranty-banner-card">
        <div className="warranty-number-badge">5<span>Years of Warranty</span>
        </div>

        <div className="warranty-content">
          <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9E8CFC', fontWeight: 700 }}>
            TRUST OF OTTOCLICK • CATALOGUE PAGE 43
          </span>
          <h3>Trusted Performance for a Better Tomorrow</h3>
          <p>
            Every Ottoclick product is engineered to uncompromising standards. Enjoy peace of mind with our comprehensive 5-Year Warranty covering defects in materials and manufacturing faults.
          </p>

          <div className="warranty-points-grid">
            <div className="warranty-point-item">
              <strong>Free Labor &amp; Parts</strong>
              <span>Includes free replacement parts and repair services for manufacturing defects.</span>
            </div>
            <div className="warranty-point-item">
              <strong>On-Site &amp; Service Center</strong>
              <span>Dedicated technical support on-site or at our authorized service centers.</span>
            </div>
            <div className="warranty-point-item">
              <strong>Pan-India Coverage</strong>
              <span>Engineered in Kanpur, deployed with nationwide technical warranty support.</span>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: 99,
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Info size={13} /> View Full Warranty Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Warranty Terms Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="product-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="product-modal-container"
              style={{ maxWidth: 680 }}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--line)' }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Ottoclick 5-Year Warranty Terms &amp; Conditions</h3>
                <button type="button" onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
                  <X size={18} />
                </button>
              </div>

              <div style={{ padding: '24px', maxHeight: '70vh', overflowY: 'auto', fontSize: 13, lineHeight: 1.6, color: 'var(--ink)' }}>
                <p><strong>1) Commencement &amp; Scope:</strong> The warranty starts from the date of purchase or 6 months after manufacturing, whichever is later. It includes free labor, transport, and/or replacement parts for defects in materials or manufacturing faults under normal household or commercial use.</p>
                <p><strong>2) Minor Imperfections:</strong> The warranty does not cover minor imperfections that meet design specifications or do not affect functionality. Express or implied warranties are provided to the full extent allowable by law.</p>
                <p><strong>3) Proof of Purchase:</strong> To claim warranty, the original invoice or valid proof of purchase must be presented. Defects must be reported within 7 days of occurrence.</p>
                <p><strong>4) Service Delivery:</strong> Warranty service is provided during business operation hours on-site or at the customer service center, depending on the equipment type.</p>
                <p><strong>5) Exclusion &amp; Limitations:</strong> Warranty does not cover damage resulting from external causes, surges, liquid immersion, misuse, or unauthorized repairs. The warranty is valid for the original owner in India.</p>
                <div style={{ marginTop: 24, textAlign: 'right' }}>
                  <button type="button" className="ref-button" onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

