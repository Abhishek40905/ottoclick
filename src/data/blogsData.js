export const blogCategories = [
  'All',
  'Smart Living',
  'Security & Locks',
  'Lighting & Ambiance',
  'Energy & Sensors',
  'Protocols & Tech',
  'Hospitality',
  'Case Studies'
];

export const blogsData = [
  {
    id: 'guide-to-smart-touch-panels',
    slug: 'complete-guide-to-smart-touch-panels-aura-vs-luxe',
    title: 'The Architect\'s Guide to Smart Touch Panels: Aura vs. Luxe Series',
    category: 'Smart Living',
    date: 'Oct 4, 2025',
    readTime: '6 min read',
    author: 'Ottoclick IoT Design Team',
    authorRole: 'Hardware & Ergonomics Lead',
    image: '/assets/slideshow/slide-1-living.jpg',
    featured: true,
    summary: 'Discover how capacitive toughened glass, hum-free digital fan regulators, and modular gang layouts eliminate switchboard clutter while enhancing luxury interiors.',
    content: [
      {
        heading: 'The Death of Cluttered Wall Switches',
        text: 'Traditional residential electrical layouts have long suffered from "switch wall sprawl" — walls cluttered with rows of mechanical rocker switches, bulky stepped fan knobs, and mismatched socket plates. Modern luxury architecture demands clean, unified interfaces. Ottoclick’s Aura and Luxe Touch Panels consolidate multiple lighting circuits, curtain toggles, and motor controls into ultra-slim toughened glass surfaces.'
      },
      {
        heading: 'Aura Series: Frameless Minimalist Glass',
        text: 'The Aura Series features a full-surface borderless toughened glass panel that sits almost flush against finished plaster or Italian marble. Backlit with soft, non-intrusive LED micro-indicators (which dim automatically at night), each touch target responds to featherlight capacitive contact. The Aura range supports configurations from 2 Gang up to 12 Gang + 2 Fan on standard modular metal backboxes.'
      },
      {
        heading: 'Luxe Series: Architectural Metal Chamfer Borders',
        text: 'For spaces defined by warm brass, champagne gold, or matte graphite finishes, the Luxe Series introduces a precision-milled metallic chamfer bezel encasing the scratch-resistant glass surface. Each switch provides subtle acoustic feedback and optional multi-press scene triggers (single tap for circuit toggle, double tap for whole-room master mood).'
      },
      {
        heading: 'Hum-Free Electronic Fan Speed Regulation',
        text: 'A common frustration with legacy electronic fan regulators is the resonant inductive hum heard at low speeds. Both Aura and Luxe panels incorporate advanced digital phase-angle triac dimming circuitry that delivers silent, hum-free 5-speed fan modulation, controllable seamlessly via wall touch, the Ottoclick app, or voice commands.'
      },
      {
        heading: 'Direct Retrofit Compatibility',
        text: 'Crucially, every Aura and Luxe panel is engineered for standard Indian modular backboxes (2M, 4M, 6M, 8M, and 12M). No rewiring or wall demolition is required; existing phase and neutral wires connect directly into heavy-duty terminal blocks on the back.'
      }
    ]
  },
  {
    id: 'keyless-villa-security',
    slug: 'keyless-living-digital-door-locks-villa-security',
    title: 'Keyless Living: How Biometric Digital Locks Elevate Villa Security',
    category: 'Security & Locks',
    date: 'Sep 28, 2025',
    readTime: '5 min read',
    author: 'Ottoclick Security Solutions',
    authorRole: 'Access Control Specialist',
    image: '/assets/slideshow/slide-3-entrance.jpg',
    featured: false,
    summary: 'From 3D structured-light facial recognition to tamper-resistant auto-deadbolts and OTP guest keys: how Ottoclick smart locks protect premium homes.',
    content: [
      {
        heading: 'Beyond Traditional Mechanical Keys',
        text: 'Mechanical locks pose three chronic risks: physical key duplication, accidental lockouts, and lack of any audit trail. Modern residences require keyless access systems that combine bank-grade digital encryption with rapid, effortless entry for family members.'
      },
      {
        heading: '3D Face Recognition: Hands-Free Arrival',
        text: 'The flagship Series 3 Pro Smart Door Lock features infrared structured-light 3D facial recognition. As you approach the entrance carrying groceries or luggage, dual IR cameras scan biometric depth maps in 0.4 seconds — preventing 2D photo or video spoofing even in pitch darkness.'
      },
      {
        heading: 'Five Unified Unlocking Modes',
        text: 'Family members and guests can unlock via semiconductor fingerprint scanners, encrypted RFID fobs, backlit scramble PIN codes, one-time temporary OTPs generated via the Ottoclick app, or an emergency mechanical backup key.'
      },
      {
        heading: 'Real-Time Access Logs and Tamper Alarms',
        text: 'Every unlock event is logged with timestamps in the Ottoclick app. Built-in break-in sensors trigger an instant 90dB local siren and push immediate smartphone alerts if forced entry or repetitive wrong password attempts are detected.'
      }
    ]
  },
  {
    id: 'zigbee-vs-wifi-automation',
    slug: 'zigbee-vs-wifi-home-automation-protocol-guide',
    title: 'Zigbee 3.0 vs. Wi-Fi: Choosing the Right Protocol for Villa Automation',
    category: 'Protocols & Tech',
    date: 'Sep 19, 2025',
    readTime: '7 min read',
    author: 'Ottoclick IoT Systems',
    authorRole: 'Protocol Architect',
    image: '/assets/slideshow/slide-4-dining.jpg',
    featured: false,
    summary: 'Why Wi-Fi routers choke past 30 IoT devices, and how Zigbee 3.0 self-healing mesh architecture guarantees rock-solid reliability across multi-story residences.',
    content: [
      {
        heading: 'The Wi-Fi Bandwidth Bottleneck',
        text: 'A modern 4BHK apartment or luxury villa routinely operates over 60 to 120 automated endpoints: light switches, curtain motors, PIR sensors, smart plugs, downlights, and locks. Standard consumer Wi-Fi routers struggle when overloaded with dozens of persistent IoT connections, leading to latency spikes and disconnected devices.'
      },
      {
        heading: 'The Mesh Power of Zigbee 3.0',
        text: 'Zigbee operates on an ultra-low-power IEEE 802.15.4 mesh standard. Instead of every switch communicating directly with a central Wi-Fi router, every mains-powered Zigbee switch acts as a mesh repeater. This extends coverage effortlessly across concrete slabs, thick brick walls, and multiple floors.'
      },
      {
        heading: 'Local Offline Execution',
        text: 'With Ottoclick Zigbee Gateway Hubs, automated scenes and sensor bindings execute locally inside the home. Even if your internet connection goes down, motion sensors still turn on lights, and bedside master buttons still execute sleep scenes without a millisecond of lag.'
      },
      {
        heading: 'Battery Life Measured in Years',
        text: 'Zigbee sensors (such as door magnetic contacts and ambient temperature sensors) draw micro-amperes of standby current. A single standard CR2450 coin cell routinely powers an Ottoclick sensor for 2 to 3 years.'
      }
    ]
  },
  {
    id: 'circadian-architectural-lighting',
    slug: 'circadian-and-architectural-lighting-cct-tunable-white',
    title: 'Circadian & Architectural Lighting: Tunable White CCT in Modern Interiors',
    category: 'Lighting & Ambiance',
    date: 'Sep 11, 2025',
    readTime: '6 min read',
    author: 'Ottoclick Lighting Lab',
    authorRole: 'Architectural Lighting Designer',
    image: '/assets/slideshow/slide-2-bedroom.jpg',
    featured: false,
    summary: 'How correlated color temperature (CCT) tuning from 2700K warm amber to 6500K crisp daylight syncs with human biological rhythms to boost focus and restorative sleep.',
    content: [
      {
        heading: 'Light That Follows the Sun',
        text: 'Humans evolved under natural sunlight that transitions from warm golden hues at dawn to energetic crisp blue-white at midday, and back to soothing amber at dusk. Static 4000K indoor lighting disrupts melatonin production and contributes to eye fatigue.'
      },
      {
        heading: 'Ottoclick 3-in-1 Tunable Downlights',
        text: 'Ottoclick’s concealed downlights and magnetic track spotlights utilize high-CRI (Ra > 90) dual-chip COB LEDs. Through the Ottoclick app or wall rotary scene dials, homeowners can tune light color continuously between 2700K (candle warmth) and 6500K (crisp focus white).'
      },
      {
        heading: 'Magnetic Track Lighting Flexibility',
        text: 'Suspended and recessed magnetic tracks allow tool-free click-and-slide adjustment of spotlights, floodlights, and wall-washers. Reconfiguring living room art or dining layouts no longer requires rewiring or electrician visits.'
      },
      {
        heading: 'Automated Circadian Schedules',
        text: 'Set your home to automatically transition color temperatures: crisp 5000K daylight during morning work hours to promote focus, transitioning to 2700K 20% intensity after 8 PM to signal the brain for deep sleep.'
      }
    ]
  },
  {
    id: 'hotel-automation-case-study',
    slug: 'hotel-automation-guest-experience-energy-savings',
    title: 'Case Study: 120-Room Luxury Hotel Automation at The Grand Hotel',
    category: 'Hospitality',
    date: 'Aug 28, 2025',
    readTime: '8 min read',
    author: 'Ottoclick Enterprise Solutions',
    authorRole: 'Commercial Project Director',
    image: '/assets/slideshow/slide-1-living.jpg',
    featured: false,
    summary: 'How centralized Room Control Units (RCUs), automated Welcome Scenes, and smart HVAC integration achieved 28% electricity reduction across 120 guest rooms.',
    content: [
      {
        heading: 'The Hospitality Challenge',
        text: 'Hotel operators face two competing priorities: delivering a luxurious, frictionless guest experience while curtailing massive energy waste caused by guests leaving air conditioning and lighting running in vacant rooms.'
      },
      {
        heading: 'Smart Check-In & Welcome Scene',
        text: 'At The Grand Hotel, Kanpur, Ottoclick deployed intelligent RFID keycard switches linked with motorized curtain tracks and VRV air conditioning. When a guest taps their room card, the "Welcome Scene" activates: sheer curtains part silently, ambient cove lights glow warmly at 50%, and AC sets to a pleasant 23°C.'
      },
      {
        heading: 'Unoccupied Energy Cutback Mode',
        text: 'When the guest leaves the room and removes the card, PIR sensors verify the room is vacant. Lights turn off immediately, and the AC thermostat shifts to an eco-setpoint (26°C), preventing needless compressor cycling.'
      },
      {
        heading: 'Measurable Financial ROI',
        text: 'Within 6 months of commissioning, the hotel recorded a verified 28.4% reduction in room energy consumption, alongside higher guest satisfaction ratings for in-room bedside master switches and touch panels.'
      }
    ]
  },
  {
    id: 'staircase-motion-flow-automation',
    slug: 'staircase-motion-flow-cascading-step-lighting',
    title: 'Staircase Motion Flow: Crafting Cascading 32-Channel Step Illumination',
    category: 'Energy & Sensors',
    date: 'Aug 16, 2025',
    readTime: '5 min read',
    author: 'Ottoclick Engineering',
    authorRole: 'Hardware Specialist',
    image: '/assets/slideshow/slide-4-dining.jpg',
    featured: false,
    summary: 'Transform duplex staircases into architectural centerpieces with intelligent dual-PIR controllers that illuminate step-by-step as you ascend or descend.',
    content: [
      {
        heading: 'The Visual Poetry of Cascading Light',
        text: 'Instead of turning on an entire staircase with a harsh single switch, cascading stair automation illuminates individual LED profile treads in sequential flowing waves following your natural footsteps.'
      },
      {
        heading: 'Ottoclick OC-SLS02 Intelligent Controller',
        text: 'Engineered specifically for stair automation, the OC-SLS02 features 32 individual channels supporting up to 32 steps. Equipped with dual precision PIR motion detectors at the top and bottom landings, it senses the exact direction of travel.'
      },
      {
        heading: 'Integrated Daylight Sensing',
        text: 'Built-in lux sensors ensure the staircase lights do not activate needlessly during bright daytime hours. At twilight, the system automatically arms, providing subtle safe pathways through the night.'
      },
      {
        heading: 'Customizable Flow Speed and Fade Dwell',
        text: 'Homeowners can configure the step illumination speed, brightness intensity, and hold time before steps gently fade out in sequence behind you.'
      }
    ]
  },
  {
    id: 'retrofit-automation-zero-rewiring',
    slug: 'retrofit-automation-transforming-existing-switchboards',
    title: 'Retrofit Automation: Transforming Existing Switchboards With Zero Demolition',
    category: 'Smart Living',
    date: 'Aug 04, 2025',
    readTime: '5 min read',
    author: 'Ottoclick Installation Team',
    authorRole: 'Field Engineering Specialist',
    image: '/assets/slideshow/slide-2-bedroom.jpg',
    featured: false,
    summary: 'How micro breaker modules fit snugly inside existing electrical backboxes, converting traditional mechanical switches into smart automation nodes without damaging wall paint.',
    content: [
      {
        heading: 'Smart Automation for Completed Homes',
        text: 'The biggest barrier for homeowners who have already completed interior decor or false ceilings is the fear of rewiring, dust, and wall damage. Retrofit automation solves this completely.'
      },
      {
        heading: 'Ottoclick Micro Breaker Modules',
        text: 'Measuring just 40 x 40 x 20 mm, Ottoclick Mini Breakers slip directly behind your existing switchboard plates into the concealed junction box. Your existing switches continue to function normally, while adding instant smartphone control and automation schedules.'
      },
      {
        heading: 'Dual Switch State Sync',
        text: 'Whether you flip the physical wall toggle switch or trigger the light via smartphone or voice command, the system synchronizes status instantaneously with zero lag.'
      },
      {
        heading: 'Ideal for Rented Homes and Heritage Properties',
        text: 'Because the retrofit modules can be uninstalled in minutes without leaving a trace, they are the preferred choice for tenants and heritage residences where altering electrical infrastructure is restricted.'
      }
    ]
  },
  {
    id: 'combustible-gas-smoke-safeguards',
    slug: 'intelligent-hazard-prevention-lpg-gas-smoke-shutoff',
    title: 'Intelligent Hazard Prevention: LPG Gas & Smoke Detectors With Auto-Shutoff',
    category: 'Energy & Sensors',
    date: 'Jul 22, 2025',
    readTime: '6 min read',
    author: 'Ottoclick Safety Division',
    authorRole: 'Safety Systems Engineer',
    image: '/assets/slideshow/slide-3-entrance.jpg',
    featured: false,
    summary: 'Continuous 24/7 sniffers for LPG, PNG, and smoke leaks paired with emergency motorized solenoid valves that cut the gas supply at the source in under 1 second.',
    content: [
      {
        heading: 'Invisible Hazards in the Modern Kitchen',
        text: 'LPG gas leaks and smoldering electrical fires are among the most catastrophic domestic hazards. Traditional battery-operated detectors only sound a local beeper, which is useless if the family is asleep, away from home, or elderly.'
      },
      {
        heading: 'Dual-Stage Active Detection',
        text: 'Ottoclick’s catalytic gas sensor monitors LPG, PNG, and methane concentrations continuously. When dangerous parts-per-million levels are detected, the system triggers a 3-way response: an 85dB siren sounds, instant notifications push to all registered smartphones, and an emergency signal is transmitted to the gas pipe solenoid.'
      },
      {
        heading: 'Mechanical Solenoid Gas Cutoff',
        text: 'The mechanical solenoid valve clamped on the main gas regulator snaps shut in less than 1000 milliseconds, choking the gas flow at the cylinder or main pipeline immediately.'
      },
      {
        heading: 'Integration with Exhaust Fans',
        text: 'Through automated scene rules, detecting gas can simultaneously trigger the kitchen exhaust fan to vent volatile fumes, preventing dangerous vapor accumulation.'
      }
    ]
  }
];
