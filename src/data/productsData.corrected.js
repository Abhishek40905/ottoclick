// Master Product Catalog Data - Audited & Corrected against:
// 1. Master_Catalogue_compressed.pdf
// 2. Catalogue - Digital Door Locks & Gate Motors (1).pdf
// 3. Smart Motion Sensor-2.pdf

export const productCategories = [
  {
    id: 'smart-touch-panels',
    name: 'Smart Touch Panels',
    icon: 'Sliders',
    catalogueRef: 'Master Catalogue Page 10–19 & 40–41',
    description: 'Luxury tempered glass touch switches, customizable panels, retrofit modules and central control touchscreens.',
    subcategories: ['All', 'Luxe (with frame)', 'Aura (without frame)', 'Canvas (Custom)', 'Retrofit Modules', 'Control Panels']
  },
  {
    id: 'door-locks',
    name: 'DOOR Locks',
    icon: 'Lock',
    catalogueRef: 'Catalogue - Digital Door Locks & Gate Motors',
    description: 'Advanced biometric smart locks, slim UPVC & metal locks, frameless glass locks, cabinet locks, and heavy-duty automated gate & garage motors.',
    subcategories: ['All', 'Smart Door Locks', 'Specialty & Metal Locks', 'Cabinet Locks', 'Gate & Garage Motors']
  },
  {
    id: 'curtains-blinds',
    name: 'Smart Curtains & Blinds',
    icon: 'Sun',
    catalogueRef: 'Master Catalogue Page 24–27',
    description: 'Whisper-quiet motorized curtain motors, custom aluminum tracks, tubular blind motors, and multi-channel remotes.',
    subcategories: ['All', 'Curtain Motors', 'Tracks', 'Blinds', 'Remotes']
  },
  {
    id: 'smart-lighting',
    name: 'Smart Lighting',
    icon: 'Lightbulb',
    catalogueRef: 'Master Catalogue Page 28–35',
    description: 'Architectural concealed downlights, spotlights, magnetic track lights, LED strip lights, and smart drivers.',
    subcategories: ['All', 'Lightings', 'Drivers']
  },
  {
    id: 'motion-sensors',
    name: 'Motion Sensors',
    icon: 'Eye',
    catalogueRef: 'Smart Motion PDF Page 2–14',
    description: 'Microwave 360° ceiling sensors, high-bay warehouse detectors, IP65 waterproof sensors, and motion lights.',
    subcategories: ['All', 'Microwave & PIR Sensors', 'Motion Lights']
  },
  {
    id: 'wardrobe-sensors',
    name: 'Wardrobe Sensors',
    icon: 'Layers',
    catalogueRef: 'Smart Motion PDF Page 15–18',
    description: 'Hinge-mounted wardrobe lights, mechanical contact switches, and double-door infrared proximity sensors.',
    subcategories: ['All', 'Mechanical Sensors', 'Infrared IR Sensors']
  },
  {
    id: 'gas-sensors',
    name: 'Gas Sensors',
    icon: 'ShieldCheck',
    catalogueRef: 'Smart Motion PDF Page 25–28',
    description: 'Smart Wi-Fi & Zigbee photoelectric smoke alarms, LPG/PNG combustible gas leak detectors with valve linkage.',
    subcategories: ['All', 'Smoke Detectors', 'Gas Leak Detectors']
  },
  {
    id: 'door-window-sensors',
    name: 'Door & Window Sensors',
    icon: 'Box',
    catalogueRef: 'Smart Motion PDF Page 29–32',
    description: 'Discreet magnetic contact sensors, standalone Wi-Fi door detectors, and wearable Zigbee SOS panic buttons.',
    subcategories: ['All', 'Magnetic Sensors', 'Security & Panic']
  },
  {
    id: 'timer',
    name: 'Timer',
    icon: 'Clock',
    catalogueRef: 'Smart Motion PDF Page 38–45',
    description: 'Frontier digital timers, industrial DIN rail programmable switches, timer plugs, and astronomical street timers.',
    subcategories: ['All', 'Digital & Frontier Timers', 'DIN Rail Timers', 'Plug-in Timers', 'Mechanical Timers', 'Astronomical & Street Timers', 'Photocell Sensors']
  },
  {
    id: 'staircase-automation',
    name: 'Staircase Automation',
    icon: 'Activity',
    catalogueRef: 'Smart Motion PDF Page 46–49',
    description: 'Cascading step-by-step LED motion controllers, 32-step dynamic drivers, and complete illumination kits.',
    subcategories: ['All', 'Staircase Controllers', 'Complete Kits']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: 'Cpu',
    catalogueRef: 'Smart Motion PDF Page 33–37',
    description: 'Smart Wi-Fi plugs (10A & 16A), 63A smart DIN rail circuit breakers, and universal IR/RF smart remote blasters.',
    subcategories: ['All', 'Smart Plugs', 'Smart Breakers', 'Universal Blasters']
  }
];

export const productsData = [
  {
    "id": "luxe-2m-2s",
    "slug": "luxe-series-2-gang-switch",
    "title": "Luxe Series : 2 Gang Switch",
    "model": "LSW/Z-2M-DB",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Luxe (with frame)",
    "badge": "Luxe Frame",
    "image": "/products/catalog/luxe-2m-2s.png",
    "shortDesc": "Luxury 2 Gang smart touch switch with gold/silver metal frame and tempered glass.",
    "description": "The Luxe Series is crafted for premium interiors, featuring elegant frames and refined bezels that add a sophisticated touch. It combines luxury design with smooth and reliable smart touch control.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Connection": "N + L line",
      "Wireless Standards": "ZigBee & Wi-Fi",
      "Panel Material": "Tempered Glass",
      "Frame Material": "Metal frame (Gold / Silver)",
      "Protection": "Over Current / Over Voltage Relay 0V Switch",
      "Operating Temperature": "-20\u00b0C ~ 50\u00b0C",
      "Touch Mode": "Bistate / Monostate",
      "Backlight Color": "Red / Blue / White / OFF",
      "Backlight Brightness": "Manual / ALS Auto",
      "Product Color": "Black / White Glass",
      "Plate Size": "2 Module"
    },
    "highlights": [
      "Precision metal frame with beveled edges",
      "Bistate & monostate capacitive touch",
      "Ambient Light Sensor (ALS) auto-dimming backlight",
      "Over-current and over-voltage surge protection",
      "Works with Alexa, Google Home & Smart App"
    ],
    "idealFor": "Luxury master bedrooms, entryways, modern villas and suites",
    "catalogueSource": "Master Catalogue Page 12-13"
  },
  {
    "id": "luxe-4m-4s",
    "slug": "luxe-series-4-gang-switch",
    "title": "Luxe Series : 4 Gang Switch",
    "model": "LSW/Z-4M-4S",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Luxe (with frame)",
    "badge": "Luxe Frame",
    "image": "/products/catalog/luxe-4m-4s.png",
    "shortDesc": "4 Gang smart capacitive touch switch with refined metallic frame.",
    "description": "Engineered for medium living zones and bedrooms, controlling 4 independent light circuits or scenes with instant response.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Connection": "N + L line",
      "Wireless Standards": "ZigBee & Wi-Fi",
      "Panel Material": "High-purity Tempered Glass",
      "Frame Material": "Metal frame (Gold / Silver)",
      "Protection": "Surge & Over-voltage relay protection",
      "Operating Temperature": "-20\u00b0C ~ 50\u00b0C",
      "Plate Size": "4 Module"
    },
    "highlights": [
      "4 independent touch channels",
      "Scene creation & schedule synchronization",
      "Manual + smart multi-mode operation",
      "Scratch and moisture resistant glass faceplate"
    ],
    "idealFor": "Bedrooms, living rooms, and private offices",
    "catalogueSource": "Master Catalogue Page 12-13"
  },
  {
    "id": "luxe-4m-2s1u",
    "slug": "luxe-series-2-gang-1-socket",
    "title": "Luxe Series : 2 Gang + 1 Socket",
    "model": "LSW/Z-4M-2S1U",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Luxe (with frame)",
    "badge": "Luxe Frame",
    "image": "/products/catalog/luxe-4m-2s1u.png",
    "shortDesc": "Combo panel with 2 smart touch gangs and 1 universal international power socket.",
    "description": "Combines touch lighting control with a high-durability universal power socket for bedside tables, vanity stations and desk areas.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Socket Type": "Universal with child safety shutter",
      "Switch Channels": "2 Smart Touch Relays",
      "Wireless Standards": "ZigBee & Wi-Fi",
      "Plate Size": "4 Module",
      "Frame Material": "Metal frame (Gold / Silver)"
    },
    "highlights": [
      "Child-proof safety shutter socket",
      "2 independent smart touch gangs",
      "Elegant metallic perimeter frame",
      "Smartphone remote power cutoff"
    ],
    "idealFor": "Bedside tables, study desks, and hospitality suites",
    "catalogueSource": "Master Catalogue Page 12-13"
  },
  {
    "id": "luxe-6m-8s",
    "slug": "luxe-series-8-gang-switch",
    "title": "Luxe Series : 6 Gang Switch",
    "model": "LSW/Z-6M-8S",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Luxe (with frame)",
    "badge": "Luxe Frame",
    "image": "/products/catalog/luxe-6m-8s.png",
    "shortDesc": "High-density 8 gang touch panel in a compact 6 module metal framed plate.",
    "description": "Allows central control of 8 individual lighting loads and scenes from a single elegant wall plate.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Switch Channels": "8 Touch Nodes",
      "Wireless Standards": "ZigBee & Wi-Fi",
      "Plate Size": "6 Module",
      "Frame Material": "Metal frame (Gold / Silver)",
      "Panel Material": "Tempered Glass (Matt / Glossy)"
    },
    "highlights": [
      "Control 8 loads in a compact 6-module footprint",
      "Individual soft backlit indicators",
      "One-touch master 'All Off' capability",
      "Works with scene triggers"
    ],
    "idealFor": "Living halls, conference rooms, master suites",
    "catalogueSource": "Master Catalogue Page 12-13"
  },
  {
    "id": "luxe-8m-8s",
    "slug": "luxe-series-8-module-switch",
    "title": "Luxe Series : 8 Gang Switch",
    "model": "LSW/Z-8M-8S",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Luxe (with frame)",
    "badge": "Luxe Frame",
    "image": "/products/catalog/luxe-8m-8s.png",
    "shortDesc": "Wide-format 8 module smart touch switch panel with metallic frame.",
    "description": "Generous touch spacing with premium feedback for upscale residential dining and lounge areas.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Switch Channels": "8 Touch Gangs",
      "Wireless Standards": "ZigBee & Wi-Fi",
      "Plate Size": "8 Module",
      "Frame Material": "Metal frame (Gold / Silver)"
    },
    "highlights": [
      "Wide spacing for intuitive touch ergonomics",
      "Dual-state backlit ring indicators",
      "Zero-latency capacitive response"
    ],
    "idealFor": "Living dining areas and executive lounges",
    "catalogueSource": "Master Catalogue Page 12-13"
  },
  {
    "id": "luxe-6m-2s2u",
    "slug": "luxe-series-2-gang-2-socket",
    "title": "Luxe Series : 2 Gang + 2 Socket",
    "model": "LSW/Z-6M-2S2U",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Luxe (with frame)",
    "badge": "Luxe Frame",
    "image": "/products/catalog/luxe-6m-2s2u.png",
    "shortDesc": "Dual smart touch gangs paired with dual universal power outlets.",
    "description": "The ultimate bedside or workstation panel providing two smart automated circuits plus two high-current universal power points.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Socket Count": "2 Universal Sockets",
      "Switch Channels": "2 Touch Gangs",
      "Plate Size": "6 Module",
      "Frame Material": "Metal frame (Gold / Silver)"
    },
    "highlights": [
      "Twin universal sockets with safety shutters",
      "Two independent smart touch gangs",
      "Clean unified faceplate eliminates clutter"
    ],
    "idealFor": "Executive desks, master bedside walls, media consoles",
    "catalogueSource": "Master Catalogue Page 12-13"
  },
  {
    "id": "luxe-12m-12s2f",
    "slug": "luxe-series-12-gang-2-fan",
    "title": "Luxe Series : 12 Gang + 2 Fan",
    "model": "LSW/Z-12M-12S2F",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Luxe (with frame)",
    "badge": "Luxe Frame",
    "image": "/products/catalog/luxe-12m-12s2f.png",
    "shortDesc": "Master room station with 12 smart touch gangs and 2 digital fan speed regulators.",
    "description": "Comprehensive whole-room control plate. Replaces messy multi-gang switchboards with a single luxury tempered glass interface.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Switch Channels": "12 Touch Gangs",
      "Fan Control": "2 Digital Capacitive Regulators (Hum-free)",
      "Plate Size": "12 Module",
      "Frame Material": "Metal frame (Gold / Silver)"
    },
    "highlights": [
      "Hum-free electronic fan regulation",
      "Controls up to 14 total loads and fans",
      "Multi-way scene master control",
      "Replaces conventional 12-module modular boards"
    ],
    "idealFor": "Large living rooms, grand halls, and open duplex spaces",
    "catalogueSource": "Master Catalogue Page 12-13"
  },
  {
    "id": "luxe-12m-8s1f2u",
    "slug": "luxe-series-8-gang-1-fan-2-socket",
    "title": "Luxe Series : 8 Gang + 1 Fan + 2 Socket",
    "model": "LSW/Z-12M-8S1F2U",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Luxe (with frame)",
    "badge": "Luxe Frame",
    "image": "/products/catalog/luxe-12m-8s1f2u.png",
    "shortDesc": "Complete all-in-one console: 8 touch gangs, 1 digital fan regulator, 2 universal sockets.",
    "description": "All functionality in a single majestic panel. Perfect for hotel presidential suites and luxury bedrooms.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Switch Channels": "8 Touch Gangs",
      "Fan Control": "1 Digital Fan Regulator",
      "Sockets": "2 Universal Power Sockets",
      "Plate Size": "12 Module",
      "Frame Material": "Metal frame (Gold / Silver)"
    },
    "highlights": [
      "All-in-one comprehensive room control",
      "2 integrated heavy-duty universal sockets",
      "Stepless digital fan speed regulation",
      "Voice control via Alexa & Google Assistant"
    ],
    "idealFor": "Master bedrooms, hotel suites, and executive offices",
    "catalogueSource": "Master Catalogue Page 12-13"
  },
  {
    "id": "aura-6m-8s",
    "slug": "aura-series-8-gang-switch",
    "title": "Aura Series : 6 Gang Switch",
    "model": "ASW/Z-6M-8S",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Aura (without frame)",
    "badge": "Frameless Aura",
    "image": "/products/catalog/aura-6m-8s.png",
    "shortDesc": "Luxury frameless smart touch switch designed for a rich, modern living experience.",
    "description": "The Aura Series delivers a rich, modern look designed for luxurious living spaces. With a balance of style and smart functionality, it offers effortless control with a frameless edge-to-edge premium feel.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Connection": "N + L line",
      "Wireless Standards": "ZigBee & Wi-Fi",
      "Panel Material": "Edge-to-edge Tempered Glass (Frameless)",
      "Finish": "Matt / Glossy",
      "Touch Mode": "Bistate / Monostate",
      "Backlight Color": "Red / Blue / White / OFF",
      "Plate Size": "6 Module"
    },
    "highlights": [
      "Minimalist frameless floating glass aesthetic",
      "Bistate & monostate capacitive touch",
      "Red/Blue/White backlight with ALS auto dimming",
      "Zero bezel design for seamless wall integration"
    ],
    "idealFor": "Modern architectural homes, luxury apartments, contemporary villas",
    "catalogueSource": "Master Catalogue Page 14-15"
  },
  {
    "id": "aura-2m-2s",
    "slug": "aura-series-2-gang-switch",
    "title": "Aura Series : 2 Gang Switch",
    "model": "ASW/Z-2M-2S",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Aura (without frame)",
    "badge": "Frameless Aura",
    "image": "/products/catalog/aura-2m-2s.png",
    "shortDesc": "Frameless 2 gang capacitive touch switch with pure edge-to-edge glass.",
    "description": "Compact frameless dual touch switch for entrance passages, washrooms, and accent walls.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Switch Channels": "2 Touch Gangs",
      "Wireless Standards": "ZigBee & Wi-Fi",
      "Plate Size": "2 Module",
      "Panel Material": "Frameless Tempered Glass"
    },
    "highlights": [
      "Pure frameless glass finish",
      "Soft ambient indicator glow",
      "App and voice control ready"
    ],
    "idealFor": "Passageways, powder rooms, and entrance lobbies",
    "catalogueSource": "Master Catalogue Page 14-15"
  },
  {
    "id": "aura-4m-4s",
    "slug": "aura-series-4-gang-switch",
    "title": "Aura Series : 4 Gang Switch",
    "model": "ASW/Z-4M-4S",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Aura (without frame)",
    "badge": "Frameless Aura",
    "image": "/products/catalog/aura-4m-4s.png",
    "shortDesc": "Frameless 4 gang smart switch panel with 4 independent touch points.",
    "description": "Balanced 4-point touch glass panel for bedrooms and study rooms.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Switch Channels": "4 Touch Gangs",
      "Plate Size": "4 Module",
      "Panel Material": "Edge-to-Edge Tempered Glass"
    },
    "highlights": [
      "High-sensitivity capacitive sensors",
      "Anti-glare tempered glass surface",
      "Automated scheduling and timer rules"
    ],
    "idealFor": "Bedrooms, study rooms, home offices",
    "catalogueSource": "Master Catalogue Page 14-15"
  },
  {
    "id": "aura-4m-2s1u",
    "slug": "aura-series-2-gang-1-socket",
    "title": "Aura Series : 2 Gang + 1 Socket",
    "model": "ASW/Z-4M-2S1U",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Aura (without frame)",
    "badge": "Frameless Aura",
    "image": "/products/catalog/aura-4m-2s1u.png",
    "shortDesc": "Frameless 2 touch gang + 1 universal socket combo plate.",
    "description": "Integrated flush glass plate providing 2 smart touch gangs and 1 universal power outlet.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Socket": "1 Universal Outlet with Safety Shutter",
      "Switch Channels": "2 Touch Gangs",
      "Plate Size": "4 Module",
      "Panel Material": "Frameless Tempered Glass"
    },
    "highlights": [
      "Integrated universal socket without bulky frames",
      "Child safety protected",
      "Smart scheduled socket control"
    ],
    "idealFor": "Bedside tables and reading corners",
    "catalogueSource": "Master Catalogue Page 14-15"
  },
  {
    "id": "aura-8m-8s",
    "slug": "aura-series-8-module-switch",
    "title": "Aura Series : 8 Gang Switch",
    "model": "ASW/Z-8M-8S",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Aura (without frame)",
    "badge": "Frameless Aura",
    "image": "/products/catalog/aura-8m-8s.png",
    "shortDesc": "Horizontal 8 gang frameless glass switch panel.",
    "description": "Expansive frameless glass design with 8 touch keys for central living room lighting controls.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Switch Channels": "8 Touch Gangs",
      "Plate Size": "8 Module",
      "Panel Material": "Frameless Tempered Glass"
    },
    "highlights": [
      "Wide horizontal format",
      "One-touch whole-room moods",
      "Works with Zigbee & Wi-Fi mesh"
    ],
    "idealFor": "Living dining areas and lounges",
    "catalogueSource": "Master Catalogue Page 14-15"
  },
  {
    "id": "aura-6m-2s2u",
    "slug": "aura-series-2-gang-2-socket",
    "title": "Aura Series : 2 Gang + 2 Socket",
    "model": "ASW/Z-6M-2S2U",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Aura (without frame)",
    "badge": "Frameless Aura",
    "image": "/products/catalog/aura-6m-2s2u.png",
    "shortDesc": "Frameless 6-module panel with 2 smart touch gangs and 2 universal sockets.",
    "description": "Clean, borderless power and lighting panel for high-demand areas.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Sockets": "2 Universal Sockets",
      "Switch Channels": "2 Touch Gangs",
      "Plate Size": "6 Module",
      "Panel Material": "Frameless Tempered Glass"
    },
    "highlights": [
      "Dual high-current sockets",
      "Twin touch lighting gangs",
      "Seamless modern look"
    ],
    "idealFor": "Workspaces and master suites",
    "catalogueSource": "Master Catalogue Page 14-15"
  },
  {
    "id": "aura-12m-12s2f",
    "slug": "aura-series-12-gang-2-fan",
    "title": "Aura Series : 12 Gang + 2 Fan",
    "model": "ASW/Z-12M-12S2F",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Aura (without frame)",
    "badge": "Frameless Aura",
    "image": "/products/catalog/aura-12m-12s2f.png",
    "shortDesc": "Frameless 12-gang master control plate with dual digital fan regulators.",
    "description": "The peak of frameless switch engineering, packing 12 touch gangs and 2 hum-free fan dimmers in one seamless glass panel.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Switch Channels": "12 Touch Gangs",
      "Fan Regulators": "2 Digital Capacitive Dimmers",
      "Plate Size": "12 Module",
      "Panel Material": "Frameless Tempered Glass"
    },
    "highlights": [
      "Hum-free electronic fan regulators",
      "Replaces multi-board clutter with pure glass",
      "Full home automation scene linkage"
    ],
    "idealFor": "Grand living halls and luxury villas",
    "catalogueSource": "Master Catalogue Page 14-15"
  },
  {
    "id": "aura-12m-8s1f2u",
    "slug": "aura-series-8-gang-1-fan-2-socket",
    "title": "Aura Series : 8 Gang + 1 Fan + 2 Socket",
    "model": "ASW/Z-12M-8S1F2U",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Aura (without frame)",
    "badge": "Frameless Aura",
    "image": "/products/catalog/aura-12m-8s1f2u.png",
    "shortDesc": "Frameless 12-module master station with 8 gangs, 1 fan regulator and 2 universal sockets.",
    "description": "The complete room control center in a frameless minimalist layout.",
    "specs": {
      "Input Voltage": "100\u2013240VAC 50/60Hz",
      "Switch Channels": "8 Touch Gangs",
      "Fan Regulation": "1 Digital Regulator",
      "Sockets": "2 Universal Sockets",
      "Plate Size": "12 Module"
    },
    "highlights": [
      "Universal socket + fan + lighting integration",
      "Frameless edge-to-edge glass elegance",
      "Surge and overload protection"
    ],
    "idealFor": "Master suites, presidential hospitality rooms",
    "catalogueSource": "Master Catalogue Page 14-15"
  },
  {
    "id": "canvas-wooden",
    "slug": "canvas-series-wooden-finish",
    "title": "Canvas Series : Natural Wooden Finish",
    "model": "OC-CVS-WOOD",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Canvas (Custom)",
    "badge": "Custom Material",
    "image": "/products/catalog/canvas-wooden.png",
    "shortDesc": "Customizable touch panels with interchangeable natural wood finishes.",
    "description": "The Canvas Series is designed for customization, allowing interchangeable designs to match different interior themes. It blends flexibility with clean aesthetics and intuitive smart touch operation.",
    "specs": {
      "Material": "Natural Wood Grain Finish",
      "Connectivity": "ZigBee & Wi-Fi",
      "Operation": "Capacitive touch under textured finish",
      "Module Sizes": "Available 2 to 12 Modules",
      "Interchangeability": "Quick-snap magnetic faceplates"
    },
    "highlights": [
      "Authentic warm timber aesthetic",
      "Under-surface capacitive touch sensing",
      "Easily interchangeable when interior decor updates"
    ],
    "idealFor": "Warm contemporary interiors, wooden paneling, Nordic decor",
    "catalogueSource": "Master Catalogue Page 16"
  },
  {
    "id": "canvas-marble",
    "slug": "canvas-series-marble-finish",
    "title": "Canvas Series : Italian Marble Finish",
    "model": "OC-CVS-MARBLE",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Canvas (Custom)",
    "badge": "Custom Material",
    "image": "/products/catalog/canvas-marble.png",
    "shortDesc": "Custom smart touch panel in Carrara white marble texture.",
    "description": "Harmonizes seamlessly with marble clad walls, luxury washrooms, and stone claddings.",
    "specs": {
      "Material": "Polished Italian Stone / Marble Finish",
      "Connectivity": "ZigBee & Wi-Fi",
      "Module Sizes": "2 - 12 Modules"
    },
    "highlights": [
      "Realistic vein patterning",
      "Moisture and scratch resistant",
      "Blends into luxury stone walls"
    ],
    "idealFor": "Marble feature walls, luxury bathrooms, stone countertops",
    "catalogueSource": "Master Catalogue Page 16"
  },
  {
    "id": "canvas-veneer",
    "slug": "canvas-series-veneer-finish",
    "title": "Canvas Series : Architectural Veneer Finish",
    "model": "OC-CVS-VENEER",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Canvas (Custom)",
    "badge": "Custom Material",
    "image": "/products/catalog/canvas-veneer.png",
    "shortDesc": "Rich walnut and teak veneer finish for bespoke cabinetry and paneling.",
    "description": "Designed to integrate flush with custom millwork, credenzas, and wooden headboards.",
    "specs": {
      "Material": "Architectural Teak/Walnut Veneer",
      "Connectivity": "ZigBee & Wi-Fi",
      "Sizes": "2 to 12 Modules"
    },
    "highlights": [
      "Matches custom wood paneling and cabinetry",
      "Soft backlit icons visible only when activated",
      "Interchangeable faceplate system"
    ],
    "idealFor": "Custom wood paneling, executive boardrooms, boutique hotels",
    "catalogueSource": "Master Catalogue Page 16"
  },
  {
    "id": "canvas-matt",
    "slug": "canvas-series-matt-finish",
    "title": "Canvas Series : Velvet Matt Finish",
    "model": "OC-CVS-MATT",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Canvas (Custom)",
    "badge": "Custom Material",
    "image": "/products/catalog/canvas-matt.png",
    "shortDesc": "Anti-fingerprint velvet matte finish for clean contemporary spaces.",
    "description": "Deep non-reflective matte finish that resists smudges and fingerprints while delivering a warm soft-touch feel.",
    "specs": {
      "Material": "Ultra-matte Anti-fingerprint Polycarbonate/Glass",
      "Connectivity": "ZigBee & Wi-Fi"
    },
    "highlights": [
      "Zero glare, zero fingerprint smudges",
      "Silky tactile surface feel",
      "Clean minimalist aesthetics"
    ],
    "idealFor": "Modern minimalist interiors, galleries, dark theme bedrooms",
    "catalogueSource": "Master Catalogue Page 16"
  },
  {
    "id": "canvas-glossy",
    "slug": "canvas-series-glossy-finish",
    "title": "Canvas Series : High Gloss Finish",
    "model": "OC-CVS-GLOSS",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Canvas (Custom)",
    "badge": "Custom Material",
    "image": "/products/catalog/canvas-glossy.png",
    "shortDesc": "Mirror-like piano gloss surface with vivid edge brilliance.",
    "description": "High-gloss surface that reflects subtle room ambient lights with luxurious depth.",
    "specs": {
      "Material": "Piano High-Gloss Crystal Plate",
      "Connectivity": "ZigBee & Wi-Fi"
    },
    "highlights": [
      "High-gloss reflective elegance",
      "Scratch resistant hard-coat",
      "High durability"
    ],
    "idealFor": "Contemporary luxury dining rooms, retail boutiques, salons",
    "catalogueSource": "Master Catalogue Page 16"
  },
  {
    "id": "retrofit-oc-sls-4g",
    "slug": "wifi-10a-circuit-breaker-4-gang",
    "title": "Wifi- 10A Circuit Breaker 2 Way - 4G",
    "model": "OC-SLS-4G-W / OC-SLS-4G-Z",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Retrofit Modules",
    "badge": "Retrofit Module",
    "image": "/products/catalog/retrofit-oc-sls-4g.png",
    "shortDesc": "Compact 4-channel retrofit module fitting behind standard wall switches.",
    "description": "Designed for reliability, scalability, and everyday comfort, Ottoclick retrofit solutions deliver powerful automation that works silently in the background\u2014simple to install, easy to use, and built for modern living without rewiring.",
    "specs": {
      "Voltage": "100\u2013240V AC 50/60Hz",
      "Max Load": "4x 4.8A (Incandescent) / 1.8A (LED)",
      "Channels": "4 Channel Relay (2-Way supported)",
      "Communication": "Zigbee / Wi-Fi",
      "Installation": "Behind existing wall switch boxes"
    },
    "highlights": [
      "Converts existing mechanical switches to smart switches",
      "No rewiring or wall breaking needed",
      "2-way switching support retained",
      "Overload and surge protection"
    ],
    "idealFor": "Existing homes, retrofitted apartments, rental homes",
    "catalogueSource": "Master Catalogue Page 18-19"
  },
  {
    "id": "retrofit-oc-sls-2g",
    "slug": "wifi-16a-circuit-breaker-2-gang",
    "title": "Wifi- 16A Circuit Breaker 2 Way - 2G / Zigbee 2 Gang 16A",
    "model": "OC-SLS-2G-W / OC-SLS-2G-Z",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Retrofit Modules",
    "badge": "Retrofit Module",
    "image": "/products/catalog/retrofit-oc-sls-2g.png",
    "shortDesc": "High-power 16A dual-channel mini smart breaker module.",
    "description": "Heavy-duty dual-gang retrofit module capable of handling appliances like air conditioners, geysers, or multiple heavy lighting groups.",
    "specs": {
      "Voltage": "AC 100\u2013240V 50/60Hz",
      "Max Load": "2x 16A heavy-duty relays",
      "Channels": "2 Channel Relay",
      "Communication": "Zigbee / Wi-Fi"
    },
    "highlights": [
      "Handles up to 16A per channel",
      "Two independent loads",
      "Supports AC and geyser automated routines"
    ],
    "idealFor": "Air conditioners, water heaters, kitchen appliances",
    "catalogueSource": "Master Catalogue Page 18-19"
  },
  {
    "id": "retrofit-oc-sls-4gz",
    "slug": "zigbee-4-gang-5a-mini-breaker",
    "title": "Zigbee 4 Gang 5A Mini Smart Breaker",
    "model": "OC-SLS-4G-Z",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Retrofit Modules",
    "badge": "Retrofit Module",
    "image": "/products/catalog/retrofit-oc-sls-4gz.png",
    "shortDesc": "Ultra-slim 4-channel Zigbee relay module for lighting and fan loads.",
    "description": "Ultra-compact form factor designed to squeeze into crowded switch conduit boxes with 4 independent relay channels.",
    "specs": {
      "Voltage": "AC 100\u2013240V 50/60Hz",
      "Max Load": "LED 4x150W / 4x2.5A (5A total)",
      "Protocol": "Zigbee 3.0 Mesh"
    },
    "highlights": [
      "Ultra-slim compact dimensions",
      "Zigbee mesh repeater functionality",
      "Low heat emission and high efficiency"
    ],
    "idealFor": "Compact switch junction boxes with multiple lighting circuits",
    "catalogueSource": "Master Catalogue Page 18-19"
  },
  {
    "id": "retrofit-oc-sls-1g",
    "slug": "wifi-16a-circuit-breaker-1-gang",
    "title": "Wifi- 16A Circuit Breaker 2 Way - 1 Gang / Zigbee 16A",
    "model": "OC-SLS-1G-W / OC-SLS-1G-Z",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Retrofit Modules",
    "badge": "Retrofit Module",
    "image": "/products/catalog/retrofit-oc-sls-1g.png",
    "shortDesc": "Single-channel 16A smart breaker for individual heavy appliance lines.",
    "description": "Single-point smart power controller with 16A continuous capacity for heavy motors, geysers, or single high-power fixtures.",
    "specs": {
      "Voltage": "AC 100\u2013240V 50/60Hz",
      "Max Load": "16A continuous",
      "Channels": "1 Channel 2-Way supported",
      "Communication": "Zigbee / Wi-Fi"
    },
    "highlights": [
      "Full 16A rated power switching",
      "Energy usage monitoring capable",
      "Automated timer cutoff for water heaters"
    ],
    "idealFor": "Water geysers, EV charging points, air conditioners",
    "catalogueSource": "Master Catalogue Page 18-19"
  },
  {
    "id": "panel-oc-cp-6",
    "slug": "infinity-6-smart-touch-control-panel",
    "title": "(Infinity) 6\u201d Smart Wi-Fi Touch Control Panel",
    "model": "OC-CP-6\u201d",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Control Panels",
    "badge": "Central Display",
    "image": "/products/catalog/panel-oc-cp-6.png",
    "shortDesc": "6\u201d Smart Touch Screen with Rotary Knob, Zigbee Gateway & Video Intercom.",
    "description": "Ottoclick smart control panels bring lighting, climate, curtains, scenes and more into one seamless experience \u2014 designed to fit beautifully into modern spaces.",
    "specs": {
      "Screen": "6.0\u201d IPS Multi-touch HD Display",
      "Controls": "Integrated Rotary Knob + Full Touch Screen",
      "Gateway": "Built-in Zigbee 3.0 Gateway",
      "Intercom": "Video Calling & Intercom Support",
      "Relays": "Built-in 2 Relay Switches",
      "Connectivity": "Wi-Fi, Bluetooth, Zigbee"
    },
    "highlights": [
      "Rotary tactile knob for temperature, volume & dimming",
      "Acts as local Zigbee gateway hub",
      "Video intercom with smart door locks and doorbells",
      "Unified dashboard for whole-home automation"
    ],
    "idealFor": "Living room centerpieces, villa master lobbies, luxury penthouses",
    "catalogueSource": "Master Catalogue Page 40-41"
  },
  {
    "id": "panel-oc-cp-4",
    "slug": "homesync-pro-4-smart-touch-panel",
    "title": "(HomeSync Pro) 4\u201d Smart Wi-Fi Touch Panel",
    "model": "OC-CP-4\u201d",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Control Panels",
    "badge": "Central Display",
    "image": "/products/catalog/panel-oc-cp-4.png",
    "shortDesc": "4\u201d Smart Wi-Fi Touch Panel with built-in Alexa, Zigbee + BLE Mesh Gateway.",
    "description": "Wall-mounted smart command screen with integrated voice control and multiprotocol bridge.",
    "specs": {
      "Screen": "4.0\u201d HD IPS Touchscreen",
      "Voice": "Built-in Amazon Alexa Voice Assistant",
      "Gateway": "Zigbee + BLE Mesh Gateway built-in",
      "Communication": "Video Calling & Two-Way Intercom"
    },
    "highlights": [
      "Built-in Alexa microphone & speaker array",
      "BLE Mesh & Zigbee multi-gateway in one plate",
      "Room-to-room video intercom",
      "Replaces conventional 86-type switch boxes"
    ],
    "idealFor": "Master bedrooms, kitchen command center, home offices",
    "catalogueSource": "Master Catalogue Page 40-41"
  },
  {
    "id": "panel-oc-cp-35",
    "slug": "smart-3-5-zigbee-touch-screen",
    "title": "3.5\u201d Smart Zigbee Touch ControlScreen",
    "model": "OC-CP-3.5\u201d",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Control Panels",
    "badge": "Central Display",
    "image": "/products/catalog/panel-oc-cp-35.png",
    "shortDesc": "3.5\u201d Touch Screen + 4 Gang Relay supporting Curtains, Dimming and Scenes.",
    "description": "Combines a dynamic touchscreen dashboard with 4 physical relay outputs on the rear.",
    "specs": {
      "Screen": "3.5\u201d Capacitive Color Display",
      "Relays": "4 Gang Built-in Power Relays",
      "Functions": "Curtains, CCT Dimming, Scene Presets",
      "Protocol": "Zigbee 3.0"
    },
    "highlights": [
      "Controls 4 local relays plus unlimited wireless devices",
      "One-touch morning, movie and night scenes",
      "Compact square 86mm form factor"
    ],
    "idealFor": "Bedrooms, hotel rooms, home theater rooms",
    "catalogueSource": "Master Catalogue Page 40-41"
  },
  {
    "id": "panel-oc-ssm-cct",
    "slug": "zigbee-smart-cct-dimming-tunable-knob",
    "title": "Zigbee Smart CCT Dimming + Tunable Knob",
    "model": "OC-SSM-CCT",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Control Panels",
    "badge": "OLED Knob",
    "image": "/products/catalog/panel-oc-ssm-cct.png",
    "shortDesc": "Rotary Dimming + Tunable Knob with OLED Display + 2 Node Scene Switches.",
    "description": "Satisfying tactile knob with center OLED status screen for precise Kelvin color temperature and percentage dimming.",
    "specs": {
      "Control": "Rotary Dial Knob + Center OLED Screen",
      "Nodes": "2 Scene Shortcut Buttons",
      "Functions": "0-100% Dimming & 2700K-6500K CCT Tuning",
      "Protocol": "Zigbee"
    },
    "highlights": [
      "Tactile rotary feel with digital feedback",
      "OLED display shows exact dimming percentage & temperature",
      "2 programmable scene keys"
    ],
    "idealFor": "Dining tables, art galleries, architectural living spaces",
    "catalogueSource": "Master Catalogue Page 40-41"
  },
  {
    "id": "panel-oc-ssm-4g",
    "slug": "zigbee-4-gang-12-scene-creator",
    "title": "Zigbee 4 Gang 12 Scene Creator with Magnetic Wall Plate",
    "model": "OC-SSM-4G",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Control Panels",
    "badge": "Scene Creator",
    "image": "/products/catalog/panel-oc-ssm-4g.png",
    "shortDesc": "Wireless magnetic remote with 4 buttons supporting 12 unique scene clicks.",
    "description": "Magnetic dock mounts on wall while remote can be picked up and used from sofa or bed.",
    "specs": {
      "Buttons": "4 Mechanical/Capacitive Gangs",
      "Actions": "Single click, Double click, Long press (12 scenes total)",
      "Mount": "Magnetic Wall Dock Plate",
      "Battery": "CR2430 Lithium (up to 2 years)"
    },
    "highlights": [
      "Detachable magnetic wireless remote",
      "Triggers up to 12 custom automation scenes",
      "Portable sofa-side or bedside convenience"
    ],
    "idealFor": "Coffee tables, bedside nightstands, home cinemas",
    "catalogueSource": "Master Catalogue Page 40-41"
  },
  {
    "id": "panel-oc-ssm-dis",
    "slug": "zircon-4-gang-with-display",
    "title": "Zircon - 4 Gang with Display",
    "model": "OC-SSM-Dis",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Control Panels",
    "badge": "Status Screen",
    "image": "/products/catalog/panel-oc-ssm-dis.png",
    "shortDesc": "Smart 4 gang switch with integrated climate and time status screen.",
    "description": "Provides real-time room temperature, humidity and clock readout along with 4 tactile smart keys.",
    "specs": {
      "Display": "Monochrome OLED Status Screen",
      "Switches": "4 Independent Gangs",
      "Protocol": "Zigbee & Wi-Fi"
    },
    "highlights": [
      "Shows temperature, humidity, time and mode",
      "Backlit tactile switches",
      "Sleek dual-tone finish"
    ],
    "idealFor": "Bedrooms, hotel rooms, home office desks",
    "catalogueSource": "Master Catalogue Page 40-41"
  },
  {
    "id": "panel-oc-ssm-4g4s",
    "slug": "zircon-4-gang-4-scene",
    "title": "Zircon - 4 Gang + 4 Scene",
    "model": "OC-SSM-4G4S",
    "category": "Smart Touch Panels",
    "categorySlug": "smart-touch-panels",
    "subcategory": "Control Panels",
    "badge": "Hybrid Panel",
    "image": "/products/catalog/panel-oc-ssm-4g4s.png",
    "shortDesc": "Dedicated 8-button interface with 4 appliance relays and 4 mood scenes.",
    "description": "Distinct tactile zones for appliance control (top) and scene triggering (bottom).",
    "specs": {
      "Layout": "4 Relay Switches + 4 Scene Triggers",
      "Protocol": "Zigbee & Wi-Fi",
      "Icons": "Laser engraved backlit icons"
    },
    "highlights": [
      "Clear icon identification for lights, fan, curtains & scenes",
      "Instant mood changes at a single touch",
      "Matt architectural finish"
    ],
    "idealFor": "Living room entrances and master suites",
    "catalogueSource": "Master Catalogue Page 40-41"
  },
  {
    "id": "doorlock-series-1",
    "slug": "series-1-smart-door-lock",
    "title": "Series 1 Smart Door Lock",
    "model": "Series 1 (Basic / Wi-Fi / Zigbee)",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Smart Door Locks",
    "badge": "Wi-Fi / Zigbee / Basic",
    "image": "/products/catalog/lock-series-1.png",
    "shortDesc": "Dependable biometric smart door lock with 4 secure unlocking methods and privacy-focused design.",
    "description": "Ottoclick Series 1 Smart Door Lock is crafted to offer dependable security with refined aesthetics. Designed for modern homes and professional spaces, it combines premium build quality with effortless access. Available in Basic, Wi-Fi, and Zigbee variants, the series supports both standalone operation and seamless smart integration. With 4 secure unlocking methods\u2014Fingerprint, Password, RFID Card, and Mechanical Key\u2014and a privacy-focused, camera-free design, Series 1 delivers intelligent access control with timeless sophistication and everyday reliability.",
    "specs": {
      "Available Color": "Black, Metal Grey, Black ETC.",
      "Door Thickness": "38\u2013120 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "4 x AAA 1.5V batteries",
      "Emergency Power": "Support USB Power",
      "Unlock Modes": "Keys / APP / Fingerprint / Password / RFID / OTP",
      "Gateway Dimensions": "70 x 70 x 26 mm",
      "Network Connectivity": "Zigbee / Wi-Fi 2.4G (802.11 b/g/n)",
      "Power Interface": "Type-C USB (DC 6V/500mAh)",
      "VDP Integration": "Yes"
    },
    "highlights": [
      "4 secure unlocking methods: Fingerprint, Password, RFID Card, Mechanical Key",
      "Privacy-focused camera-free design for timeless sophistication",
      "Reversible mechanical handle fits left and right opening doors",
      "Available in Basic, Wi-Fi 2.4G, and Zigbee variants",
      "VDP (Video Door Phone) integration and OTP temporary passwords"
    ],
    "idealFor": "Modern homes, luxury apartments, and executive spaces",
    "catalogueSource": "Door Locks Catalogue Page 04"
  },
  {
    "id": "doorlock-series-1-pro",
    "slug": "series-1-pro-smart-door-lock",
    "title": "Series 1 Pro Smart Door Lock",
    "model": "Series 1 Pro-G",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Smart Door Locks",
    "badge": "Brushed Gold Finish",
    "image": "/products/catalog/lock-series-1-pro.png",
    "shortDesc": "Ultra-luxury biometric door lock in refined brushed gold with advanced access control.",
    "description": "The Series 1 Pro-G Smart Biometric Door Lock is crafted for ultra-luxury spaces where design and security are equally uncompromising. Featuring a refined brushed gold finish, it elevates entrances with a bold, premium presence while delivering advanced biometric protection. Available in Basic, Wi-Fi, and Zigbee variants, the Pro-G series adapts seamlessly to both independent and smart ecosystems. With app support (in connected variants) and 4 secure unlocking methods\u2014Fingerprint, Passcode, RFID Card, and Mechanical Key, it ensures effortless access with intelligent control. Built with superior materials and a privacy-focused, camera-free design, Series 1 Pro-G is a statement of prestige, precision, and absolute confidence at your doorstep.",
    "specs": {
      "Available Color": "Brushed Gold / Black, Metal Grey, Black ETC.",
      "Door Thickness": "38\u2013120 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "4 x AAA 1.5V batteries",
      "Emergency Power": "Support USB Power",
      "Unlock Modes": "Keys / APP / Fingerprint / Passcode / RFID Card",
      "Gateway Dimensions": "70 x 70 x 26 mm",
      "Network Connectivity": "Zigbee / Wi-Fi 2.4G (802.11 b/g/n)",
      "Power Interface": "Type-C USB (DC 6V/500mAh)",
      "VDP Integration": "Yes"
    },
    "highlights": [
      "Refined brushed gold finish for elevated architectural presence",
      "Advanced biometric protection with instant fingerprint scanning",
      "4 secure unlocking modes: Fingerprint, Passcode, RFID, Mechanical Key",
      "Seamless integration with smart ecosystems and VDP systems",
      "Reversible handle compatible with doors 38\u2013120mm thick"
    ],
    "idealFor": "Ultra-luxury residences, grand entrance doors, executive villas",
    "catalogueSource": "Door Locks Catalogue Page 05"
  },
  {
    "id": "doorlock-series-3-pro",
    "slug": "series-3-pro-smart-door-lock",
    "title": "Series 3 Pro Smart Door Lock",
    "model": "Series 3 Pro",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Smart Door Locks",
    "badge": "Face Recognition",
    "image": "/products/catalog/lock-series-3-pro.png",
    "shortDesc": "Flagship Face Recognition smart door lock with indoor color display and rechargeable battery.",
    "description": "The Series 3 Pro Smart Biometric Door Lock combines ultra-luxury styling with built-in Face Recognition, indoor color display, and dual biometric security. Featuring camera-integrated facial recognition, smart mobile app management, and video intercom capabilities, it brings advanced biometric surveillance and effortless entry right to your doorstep.",
    "specs": {
      "Face Recognition": "Integrated 3D Face Recognition",
      "Available Color": "Black, Metal Grey, Black ETC.",
      "Door Thickness": "38\u2013120 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "Rechargeable Batteries (DC 6V/4200mAh)",
      "Emergency Power": "Support USB Power (Type-C)",
      "Unlock Modes": "Face Recognition / Keys / APP / Fingerprint / Password / RFID / OTP",
      "Gateway Dimensions": "70 x 70 x 26 mm",
      "Network Connectivity": "Zigbee / Wi-Fi 2.4G (802.11 b/g/n)",
      "Active Smart Bind": "Yes"
    },
    "highlights": [
      "Contactless 3D Face Recognition unlocking",
      "Built-in indoor color screen for live visitor preview",
      "High-capacity 4200mAh rechargeable lithium battery",
      "Active Smart Bind with mobile application notifications",
      "6-in-1 unlocking: Face, Fingerprint, Password, RFID, App, Key, OTP"
    ],
    "idealFor": "High-security luxury residences, smart villas, modern families",
    "catalogueSource": "Door Locks Catalogue Page 06"
  },
  {
    "id": "doorlock-series-4",
    "slug": "series-4-smart-door-lock",
    "title": "Series 4 Smart Door Lock",
    "model": "Series 4",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Smart Door Locks",
    "badge": "Push-Pull Luxury",
    "image": "/products/catalog/lock-series-4.png",
    "shortDesc": "Sculpted ultra-sleek push-pull lock with 3D Face Recognition and bent metal construction.",
    "description": "The Series 4 Smart Lock is sculpted for spaces where design defines status. With an ultra-sleek silhouette and an elegantly bent metal construction, it flows seamlessly with the door, creating a striking yet understated presence. Crafted for ultra-luxury residences, Series 4 blends precision engineering with refined aesthetics to deliver effortless access and elevated security. Every curve, every finish reflects meticulous craftsmanship\u2014transforming the lock into a statement of modern sophistication, exclusivity, and timeless luxury.",
    "specs": {
      "Face Recognition": "Advanced 3D Facial Recognition",
      "Mechanism": "Fully Automatic Push-Pull Mortise",
      "Available Color": "Black, Metal Grey, Black ETC.",
      "Door Thickness": "38\u2013120 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "Rechargeable Batteries (DC 6V/4800mAh)",
      "Emergency Power": "Support USB Power (Type-C)",
      "Unlock Modes": "Face Recognition / Keys / APP / Fingerprint / Password / RFID / OTP",
      "Gateway Dimensions": "70 x 70 x 26 mm",
      "Network Connectivity": "Wi-Fi 2.4G (802.11 b/g/n)",
      "Active Smart Bind": "No"
    },
    "highlights": [
      "Sculpted bent metal construction with ultra-sleek silhouette",
      "Automatic push-pull mechanism: unlocks and opens smoothly without handle rotation",
      "Dual biometric authentication: 3D Face Recognition + Fingerprint",
      "Massive 4800mAh rechargeable battery pack for extended uptime",
      "Remote temporary OTP generation for guests and housekeeping"
    ],
    "idealFor": "Ultra-luxury residences, modern designer entrances, elite estates",
    "catalogueSource": "Door Locks Catalogue Page 07"
  },
  {
    "id": "doorlock-al-upvc",
    "slug": "al-upvc-smart-door-lock",
    "title": "AL-UPVC Smart Door Lock",
    "model": "AL-UPVC Series",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Specialty & Metal Locks",
    "badge": "Slim Profile UPVC",
    "image": "/products/catalog/lock-al-upvc.png",
    "shortDesc": "Sleek slim-profile smart lock specially engineered for aluminium and uPVC narrow-stile doors.",
    "description": "The Ottoclick Smart Door Lock is a next-generation security solution, specially engineered for aluminium and uPVC doors, where conventional smart locks often fail to fit seamlessly. Designed with a sleek, slim profile, it ensures perfect compatibility without heavy modifications, making it ideal for modern homes, offices, and premium interior projects. Equipped with 6 advanced unlocking methods \u2014 Fingerprint, PIN Password, RFID Card, Mobile App, Bluetooth, and Manual Key \u2014 this lock delivers the perfect blend of convenience, security, and luxury living. Built with robust materials and intelligent technology, it ensures reliable performance, enhanced safety, and long-term durability.",
    "specs": {
      "Special Application": "Aluminium and uPVC Narrow-Stile Doors",
      "Available Color": "Black, Metal Grey, Black ETC.",
      "Door Thickness": "35\u2013115 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "4 x AAA 1.5V batteries",
      "Emergency Power": "Support USB Power",
      "Unlock Modes": "Fingerprint / PIN / RFID / Mobile App / Bluetooth / Manual Key",
      "Gateway Dimensions": "22.5 x 10.5 x 35.5 cm",
      "Network Connectivity": "Wi-Fi 2.4G (802.11 b/g/n)",
      "Power Interface": "Type-C USB (DC 6V/500mAh)",
      "VDP Integration": "Yes"
    },
    "highlights": [
      "Engineered specifically for narrow-stile aluminium & uPVC frame profiles",
      "Non-destructive fitting without heavy structural modifications",
      "6 unlocking methods including Bluetooth and mobile smartphone app",
      "VDP integration and real-time remote unlocking",
      "Reversible mechanical handle for left or right swinging doors"
    ],
    "idealFor": "Aluminium doors, uPVC sliding & hinged doors, patio doors, office partitions",
    "catalogueSource": "Door Locks Catalogue Page 08"
  },
  {
    "id": "doorlock-metal",
    "slug": "metal-smart-door-lock",
    "title": "Metal Smart Door Lock",
    "model": "Metal Door Series",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Specialty & Metal Locks",
    "badge": "Heavy Duty Steel Gate",
    "image": "/products/catalog/lock-metal.png",
    "shortDesc": "Reinforced heavy-duty security lock crafted specifically for metal doors, steel gates, and iron entrances.",
    "description": "The Ottoclick Smart Door Lock \u2013 Metal Door Series is a powerful and intelligently designed security solution, crafted specifically for metal doors, steel gates, and iron entrances. Unlike standard smart locks that struggle with heavy-duty doors, this lock is built to deliver strong performance, precise fitting, and long-term reliability on robust metal surfaces. Engineered with a reinforced body and high-strength locking mechanism, it ensures superior protection while maintaining a sleek and modern look. With 6 advanced unlocking options \u2014 Fingerprint, PIN Password, RFID Card, Mobile App, Bluetooth, and Manual Key \u2014 it offers complete flexibility and a seamless access experience for both residential and commercial spaces.",
    "specs": {
      "Application": "Metal Doors, Steel Gates, and Iron Entrances",
      "Available Color": "Black, Metal Grey, Black ETC.",
      "Door Thickness": "25\u2013140 mm (Extra-Wide Range)",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "4 x AAA 1.5V batteries",
      "Emergency Power": "Support USB Power",
      "Unlock Modes": "Fingerprint / PIN / RFID / Mobile App / Bluetooth / Manual Key",
      "Gateway Dimensions": "37 x 15 x 12 cm",
      "Network Connectivity": "Wi-Fi (802.11 b/g/n)",
      "Power Interface": "Type-C USB (DC 6V/500mAh)",
      "VDP Integration": "Yes"
    },
    "highlights": [
      "Reinforced body and high-strength locking mechanism for steel and iron gates",
      "Extra-wide door thickness compatibility from 25mm to 140mm",
      "6 unlocking options with smartphone Bluetooth connectivity",
      "Weather-resistant robust surface protection",
      "VDP intercom integration and real-time access logs"
    ],
    "idealFor": "Compound steel gates, iron entrances, factory doors, security perimeter gates",
    "catalogueSource": "Door Locks Catalogue Page 09"
  },
  {
    "id": "doorlock-glass-g1",
    "slug": "glass-g1-smart-door-lock",
    "title": "Glass G1 Smart Door Lock",
    "model": "G1 Glass Series",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Specialty & Metal Locks",
    "badge": "Frameless Glass Clamp",
    "image": "/products/catalog/lock-glass-g1.png",
    "shortDesc": "Hook mortise smart lock for 10\u201312 mm frameless glass doors with remote unlocking and alloy build.",
    "description": "The G1 Glass Smart Door Lock is crafted for premium glass doors, combining sleek design with intelligent security. Designed for modern homes and offices, it integrates seamlessly into glass architecture without compromising aesthetics. Supporting Fingerprint, PIN, RFID Card, Mobile App, Remote Unlock, and Manual Key access, it ensures effortless and secure entry. Built with a hook mortise mechanism and durable PC flame-retardant alloy construction, and compatible with 10\u201312 mm glass doors, the G1 delivers refined performance, reliability, and understated luxury.",
    "specs": {
      "Lock Type": "Hook Mortise",
      "Unlocking Options": "Mobile App, Manual Key, Remote Unlock, Password/PIN, RFID Card, Fingerprint, OTP",
      "Ideal For": "Home and Office (Frameless Glass Architecture)",
      "Door Thickness": "10 mm ~ 12 mm",
      "Weight": "2 kg",
      "Material": "PC Flame Retardant + High-Strength Alloy",
      "Power Supply": "4 x AA batteries",
      "Gateway Dimensions": "40 x 480 x 26 mm",
      "Network Connectivity": "Wi-Fi 2.4G (802.11 b/g/n)",
      "Power Interface": "Type-C USB (DC 6V/2200mAh)"
    },
    "highlights": [
      "Clamp-on installation with zero hole drilling in glass",
      "Heavy-duty hook mortise mechanism secures single or double glass swing doors",
      "Dedicated RF remote control unlock included",
      "Complete unlocking: Fingerprint, PIN, RFID, App, Remote, Key, OTP",
      "Durable PC flame-retardant alloy construction"
    ],
    "idealFor": "Offices, conference rooms, commercial showrooms, glass entryways",
    "catalogueSource": "Door Locks Catalogue Page 10"
  },
  {
    "id": "doorlock-round",
    "slug": "round-smart-door-lock",
    "title": "Round Smart Door Lock",
    "model": "Round Series",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Specialty & Metal Locks",
    "badge": "Spherical Knob",
    "image": "/products/catalog/lock-round.png",
    "shortDesc": "Sleek spherical biometric knob lock with rechargeable power, Bluetooth/Wi-Fi and emergency key.",
    "description": "The Round Smart Door Lock is a modern security solution designed for style, convenience, and reliability. It features advanced fingerprint recognition for quick and secure access, along with app-based control that lets you manage users and monitor access remotely. For complete peace of mind, it also includes a hard key unlocking option, ensuring access even during power or connectivity issues. With a sleek round design and robust locking mechanism, this lock perfectly blends smart technology with everyday practicality\u2014ideal for both homes and offices.",
    "specs": {
      "Lock Type": "Mortise Knob",
      "Unlocking Options": "Manual Key, Fingerprint, Mobile Application, Bluetooth",
      "Ideal For": "Home and Office (Interior Privacy Doors)",
      "Door Thickness": "35\u201390 mm",
      "Weight": "0.11 kg",
      "Material": "PC Flame Retardant + Alloy",
      "Power Source": "Rechargeable Batteries",
      "Gateway Dimensions": "15.0 x 8.5 x 7.5 cm",
      "Network Connectivity": "Bluetooth / Wi-Fi (802.11 b/g/n)",
      "Power Interface": "Type-C USB (DC 3V/400mAh)"
    },
    "highlights": [
      "Ergonomic round knob with integrated thumbprint reader",
      "Direct retrofit for standard interior door knob cutouts",
      "App-based user management with remote access monitoring",
      "Emergency manual key override",
      "Rechargeable battery system with Type-C USB charging"
    ],
    "idealFor": "Bedrooms, executive cabins, private offices, closets",
    "catalogueSource": "Door Locks Catalogue Page 11"
  },
  {
    "id": "doorlock-handle",
    "slug": "handle-smart-door-lock",
    "title": "Handle Smart Door Lock",
    "model": "Handle Series",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Specialty & Metal Locks",
    "badge": "Touch Keypad Handle",
    "image": "/products/catalog/lock-handle.png",
    "shortDesc": "Precision engineered lever handle smart lock with 50-fingerprint memory, backlit touch keypad and mortise mechanism.",
    "description": "The Handle Smart Door Lock delivers reliable security with modern simplicity and precision engineering. Featuring advanced fingerprint recognition with storage for up to 50 fingerprints, it ensures fast, accurate, and secure access for multiple users. Designed with a robust mortise locking mechanism, it is compatible with 30\u201355 mm wooden and aluminium doors, making it ideal for homes, offices, cabins, and bedrooms. A manual key option and USB emergency unlock provide dependable access in all situations.",
    "specs": {
      "Lock Type": "Mortise Lever",
      "Unlocking Options": "Manual Key, Password, RFID Card, Fingerprint, Mobile App",
      "Fingerprint Capacity": "Up to 50 Fingerprints",
      "Ideal For": "Home and Office (30\u201355 mm Wooden & Aluminium Doors)",
      "Door Thickness": "35\u201390 mm",
      "Weight": "0.25 kg",
      "Material": "PC Flame Retardant + Alloy",
      "Power Source": "Rechargeable Batteries",
      "Network Connectivity": "Wi-Fi / Bluetooth (802.11 b/g/n)",
      "Power Interface": "Type-C USB (DC 3V/2800mAh)"
    },
    "highlights": [
      "Integrated touch numeric keypad embedded right into the sleek lever handle",
      "Rapid fingerprint recognition with capacity for up to 50 users",
      "Fits standard 30\u201355mm wooden and aluminium door profiles",
      "Rechargeable 2800mAh battery with Type-C emergency power port",
      "5 unlocking methods: Fingerprint, Password, RFID, App, Manual Key"
    ],
    "idealFor": "Bedrooms, office suites, cabins, consultation rooms",
    "catalogueSource": "Door Locks Catalogue Page 12"
  },
  {
    "id": "doorlock-cabinet-nfc",
    "slug": "cabinet-smart-nfc-lock",
    "title": "Cabinet Smart NFC Lock",
    "model": "Cabinet NFC Series",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Cabinet Locks",
    "badge": "NFC + Voice Control",
    "image": "/products/catalog/lock-cabinet-nfc.png",
    "shortDesc": "Concealed smart cabinet and drawer lock with NFC card tap, Bluetooth app and voice command support.",
    "description": "The Cabinet Smart NFC Lock is an intelligent hidden security solution designed for wardrobes, jewelry safes, desks, and filing cabinets. Features rapid contactless NFC and RFID card unlocking, smartphone app permissions, and hands-free voice command integration. Easily retrofits inside existing drawers and cabinet doors without altering exterior millwork.",
    "specs": {
      "Lock Type": "Cabinet Mortise Latch",
      "Unlocking Options": "Bluetooth (App Control) + NFC Card + RFID Card + Voice Commands",
      "Ideal For": "Cabinets, Drawers, Wardrobes, Lockers",
      "Door Thickness": "35\u201390 mm",
      "Weight": "0.20 kg",
      "Material": "Reinforced ABS Plastic",
      "Power Source": "Rechargeable Batteries (DC 3V/400mAh)",
      "Gateway Dimensions": "15 x 15 x 8 cm",
      "Network Connectivity": "Bluetooth (802.11 b/g/n)",
      "Power Interface": "Type-C USB"
    },
    "highlights": [
      "Invisible concealed installation maintains flawless exterior furniture aesthetics",
      "Fast contactless NFC phone tap and RFID card unlocking",
      "Smart mobile app access delegation with activity logs",
      "Hands-free voice command compatibility",
      "Rechargeable battery with USB emergency jump-start"
    ],
    "idealFor": "Wardrobes, jewelry lockers, executive desks, confidential filing drawers",
    "catalogueSource": "Door Locks Catalogue Page 13"
  },
  {
    "id": "doorlock-cabinet-fingerprint",
    "slug": "cabinet-fingerprint-smart-lock",
    "title": "Cabinet Fingerprint Smart Lock",
    "model": "Cabinet FP Series",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Cabinet Locks",
    "badge": "Biometric Drawer",
    "image": "/products/catalog/lock-cabinet-fingerprint.png",
    "shortDesc": "Compact biometric drawer and wardrobe lock with 3 AA battery power and Bluetooth smartphone control.",
    "description": "The Cabinet Fingerprint Lock is a compact and secure solution designed for drawers, wardrobes, and cabinets. It operates on 3 AA batteries, ensuring long-lasting and hassle-free performance. With fast fingerprint recognition and Bluetooth app connectivity, you can easily manage users and access settings directly from your smartphone. Sleek, hidden, and easy to install, this lock adds a smart layer of security while maintaining a clean and modern look.",
    "specs": {
      "Lock Type": "Hook Mechanism",
      "Unlocking Options": "Bluetooth (App Control) / Fingerprint",
      "Ideal For": "Cabinets, Drawers, Wardrobes",
      "Door Thickness": "12\u201316 mm",
      "Weight": "0.30 kg",
      "Material": "ABS Plastic",
      "Power Source": "3 x Double AA batteries",
      "Gateway Dimensions": "8 \u00d7 8 \u00d7 8 cm",
      "Network Connectivity": "Bluetooth (802.11 b/g/n)",
      "Power Interface": "Type-C USB (DC 3.7V)"
    },
    "highlights": [
      "Fast semiconductor fingerprint verification under 0.3s",
      "Runs on 3 standard AA batteries for extended trouble-free battery life",
      "Flush-mount biometric scanner with internal heavy-duty hook mechanism",
      "Bluetooth mobile app control for managing multiple users",
      "Clean, discreet design preserving furniture aesthetics"
    ],
    "idealFor": "Drawers, closets, wardrobes, vanity lockers, private cabinets",
    "catalogueSource": "Door Locks Catalogue Page 14"
  },
  {
    "id": "motor-garage-shutter",
    "slug": "garage-shutter-motor",
    "title": "Garage Shutter Motor",
    "model": "GSM-1200N",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Gate & Garage Motors",
    "badge": "1200N Heavy Duty",
    "image": "/products/catalog/motor-garage-shutter.png",
    "shortDesc": "Heavy-duty 1200N automated garage door drive system for sectional and roll-up doors up to 16 sqm.",
    "description": "Transform your garage into a smart, secure, and luxurious space with Ottoclick's Garage Door Automation Solutions. Open and close your garage door effortlessly using a remote, smartphone, or integrated smart home controls. Designed for convenience, safety, and elegance, our automated systems feature smooth operation, obstacle detection sensors, and advanced security mechanisms to protect your vehicle and property. Whether for villas, premium residences, or commercial facilities, Ottoclick delivers a seamless experience that combines modern technology with everyday comfort.",
    "specs": {
      "Power Supply": "220 V - 240 VAC",
      "Motor Power": "24 V AC / 120 W",
      "Pulling Force": "1200N",
      "Max Door Area": "16 Sqm",
      "Running Speed": "12\u201315 cm/s",
      "Remote Distance": "\u2265 30 m (Supports up to 25 Transmitters)",
      "Panel Specifications": "Pre-Painted Galvalume Finger Safe 40mm Thickness, PU Infill 0.4mm/0.4mm",
      "Drive System": "Tubular Shaft System & Std Lift Drums",
      "Track": "Galvanized Vertical & Horizontal Tracks",
      "Certifications": "T\u00dcV & CE Certified (Manufacturing accordance with EN 13241-1)",
      "Working Temperature": "-20\u00b0C ~ +50\u00b0C"
    },
    "highlights": [
      "Powerful 1200N motor handles sectional garage doors up to 16 sqm",
      "Multi-channel RF remotes (up to 25 transmitters), mobile app, RFID & key",
      "Automatic obstacle detection stops and reverses door motion safely",
      "Finger-safe 40mm polyurethane insulated panel construction",
      "Manufactured in accordance with European EN 13241-1 standards"
    ],
    "idealFor": "Residential garage doors, luxury villas, commercial parking shutters",
    "catalogueSource": "Door Locks Catalogue Page 15-16"
  },
  {
    "id": "motor-swing-arm",
    "slug": "automated-door-motor",
    "title": "Automated Door Motor",
    "model": "ADM-SWING-600",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Gate & Garage Motors",
    "badge": "300\u2013600 KG Capacity",
    "image": "/products/catalog/motor-swing-arm.png",
    "shortDesc": "Heavy-duty dual arm actuators for swing gates supporting 300 KG to 600 KG capacity with obstacle detection.",
    "description": "Powerful, reliable, and engineered for smooth performance, Ottoclick Door Arm Motors are designed to automate swing and garage doors with ease. Available in variants supporting 300 KG to 600 KG pulling capacity, these motors ensure effortless operation even for heavy-duty doors. Built with advanced safety features, durable construction, and intelligent control options, they deliver a perfect blend of strength, convenience, and long-term reliability for residential, commercial, and industrial applications.",
    "specs": {
      "Capacity Variants": "Available in 300 KG, 400 KG, 500 KG & 600 KG Capacity",
      "Motor Performance": "High-Torque Motor for Heavy-Duty Performance",
      "Operation": "Smooth & Silent Operation",
      "Control Compatibility": "Remote, Mobile App & Smart Control Compatible",
      "Safety System": "Auto Stop & Obstacle Detection Safety Features",
      "Accessories": "Flashing Light, Photocell, Wireless Keypad, Solar Panel System, Wi-Fi Remote",
      "Construction": "Weather-Resistant & Durable Construction",
      "Application": "Suitable for Residential, Commercial & Industrial Doors",
      "Maintenance": "Low Maintenance & Long Service Life"
    },
    "highlights": [
      "Linear arm actuators handle swing gates up to 600 KG per leaf",
      "Comprehensive accessory package: Infrared photocell sensors, flashing strobe & solar system",
      "Seamless smartphone app control and RF remote control",
      "Automatic safety stop prevents gate collisions",
      "Weather-resistant all-climate outdoor construction"
    ],
    "idealFor": "Villa entrance swing gates, farmhouse entrances, commercial access gates",
    "catalogueSource": "Door Locks Catalogue Page 17"
  },
  {
    "id": "motor-sliding-gate",
    "slug": "automated-slider-motor",
    "title": "Automated Slider Motor",
    "model": "ASM-SLIDE-1500",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Gate & Garage Motors",
    "badge": "800\u20131500 KG Capacity",
    "image": "/products/catalog/motor-sliding-gate.png",
    "shortDesc": "High-torque gear drive motor for heavy sliding gates up to 1500 KG with auto stop safety system.",
    "description": "Engineered for strength and precision, Ottoclick Door Slider Motors are designed to automate heavy sliding gates with ease. Available in 800 KG to 1500 KG pulling capacities, these high-performance motors deliver smooth, reliable, and secure operation for residential villas, commercial properties, factories, warehouses, and industrial entrances. Built with robust components and intelligent safety features, they ensure long-lasting performance even under demanding conditions.",
    "specs": {
      "Capacity Variants": "Available in 800 KG, 1000 KG, 1200 KG & 1500 KG Capacities",
      "Drive Mechanism": "Heavy-Duty Gear Drive Mechanism",
      "Operation": "Smooth & Silent Sliding Gate Operation",
      "Control Modes": "Remote, Mobile App & Smart Access Control Compatible",
      "Safety System": "Auto Stop & Obstacle Detection Safety System",
      "Weather Resistance": "Weatherproof & Durable Construction",
      "Motor Type": "High Torque Motor for Continuous Performance",
      "Application": "Suitable for Residential, Commercial & Industrial Gates",
      "Maintenance": "Low Maintenance & Long Service Life"
    },
    "highlights": [
      "Heavy-duty capacity options from 800 KG up to 1500 KG",
      "Durable steel gear drive mechanism for continuous duty",
      "Obstacle collision detection with instant auto-stop safety reverse",
      "Smartphone app and long-range remote access control",
      "Weatherproof all-weather enclosure designed for extreme conditions"
    ],
    "idealFor": "Residential villas, industrial complexes, commercial warehouses, gated communities",
    "catalogueSource": "Door Locks Catalogue Page 18"
  },
  {
    "id": "motor-swing-wheel",
    "slug": "swing-wheel-door-motors",
    "title": "Swing Wheel Door Motors",
    "model": "SWM-WHEEL-500",
    "category": "DOOR Locks",
    "categorySlug": "door-locks",
    "subcategory": "Gate & Garage Motors",
    "badge": "500 KG Wheel Traction",
    "image": "/products/catalog/motor-swing-wheel.png",
    "shortDesc": "Innovative motorized wheel mechanism for large swing gates up to 500 KG on uneven surfaces.",
    "description": "Experience powerful and innovative gate automation with Ottoclick's Wheel-Based Swing Gate Motors. Designed for large and heavy swing gates, these systems utilize a high-traction motorized wheel mechanism that eliminates the need for conventional arm motors. With a payload capacity of up to 500 KG per gate leaf, the system ensures smooth movement, superior grip, and reliable performance even on uneven surfaces. Equipped with premium high-grip tyres, intelligent controls, and advanced safety features, it is the perfect solution for luxury residences, commercial premises, industrial facilities, and farmhouse entrances.",
    "specs": {
      "Payload Capacity": "Supports Swing Gates up to 500 KG Payload Capacity per leaf",
      "Drive Wheels": "High-Grip Industrial Tyres for Maximum Traction",
      "Ideal Gate Types": "Ideal for Large & Heavy Gates (Uneven Ground Supported)",
      "Operation": "Smooth, Stable & Silent Operation",
      "Control Systems": "Remote, Mobile App & Smart Access Control Compatible",
      "Safety Function": "Obstacle Detection & Auto-Reverse Safety Function",
      "Locking Mechanism": "Auto Lock Function (Secure locking when gate is closed)",
      "Weather Rating": "Weatherproof Design for Outdoor Applications",
      "Manual Override": "Easy Manual Key Release in Case of Power Failure",
      "Voltage Stability": "Wide Voltage Range for Stable Performance in Fluctuating Voltage",
      "Maintenance": "Low Maintenance & Long Operational Life"
    },
    "highlights": [
      "Eliminates arm stress: motorized wheel drives the gate leaf directly along the ground",
      "High-grip tyres navigate uneven surfaces, stone pavements, and gentle gradients",
      "Auto-lock function firmly locks the gate when fully closed",
      "Manual key release provides instant operation during power outages",
      "Supports wide swing leaves up to 500 KG payload capacity"
    ],
    "idealFor": "Farmhouses, large villa swing gates, estates with uneven paving, heavy iron gates",
    "catalogueSource": "Door Locks Catalogue Page 19"
  },
  {
    "id": "curtain-motor-2-5nm",
    "slug": "curtain-motor-2-5nm",
    "title": "Zigbee/Wifi Curtain Motor 2.5 Nm (80 kg Load)",
    "model": "OC-CMW/Z-2.5Nm",
    "category": "Smart Curtains & Blinds",
    "categorySlug": "curtains-blinds",
    "subcategory": "Curtain Motors",
    "badge": "Heavy Duty 80kg",
    "image": "/products/catalog/curtain-motor-2-5nm.png",
    "shortDesc": "High torque 2.5Nm curtain motor with 80 kg load capacity for heavy fabrics.",
    "description": "Smart Curtains & Blinds bring effortless control to natural light and privacy. Designed for smooth, silent operation, they let you open, close, or schedule your curtains and blinds with a touch, voice command, or automation scene.",
    "specs": {
      "Torque": "2.5 Nm",
      "Load Capacity": "80 kg",
      "Noise Level": "<30 dB (Super Silent)",
      "Control Methods": "App control + Voice command + RF remote",
      "Connectivity": "Zigbee / Wi-Fi",
      "Features": "Light touch start, manual pull override, auto limit"
    },
    "highlights": [
      "Powerful 80 kg pull handles heavy blackout & velvet draperies",
      "Gentle touch start: pull gently by hand and motor takes over",
      "Smooth start and stop deceleration",
      "Voice enabled with Alexa & Google Home"
    ],
    "idealFor": "Double height villa windows, heavy velvet drapes, living rooms",
    "catalogueSource": "Master Catalogue Page 24-27"
  },
  {
    "id": "curtain-motor-1-5nm",
    "slug": "curtain-motor-1-5nm",
    "title": "Zigbee/Wifi Curtain Motor 1.5 Nm (50 kg Load)",
    "model": "OC-CMW/Z-1.5Nm",
    "category": "Smart Curtains & Blinds",
    "categorySlug": "curtains-blinds",
    "subcategory": "Curtain Motors",
    "badge": "Silent 50kg",
    "image": "/products/catalog/curtain-motor-1-5nm.png",
    "shortDesc": "Silent 1.5Nm motorized curtain drive for standard residential drapes up to 50 kg.",
    "description": "Quiet motor for bedrooms and apartment windows with precise position scheduling.",
    "specs": {
      "Torque": "1.5 Nm",
      "Load Capacity": "50 kg",
      "Noise Level": "<28 dB",
      "Connectivity": "Zigbee / Wi-Fi",
      "Voltage": "100-240V AC 50/60Hz"
    },
    "highlights": [
      "Super-silent brushless operation",
      "Sunrise & sunset automatic curtain positioning",
      "Manual emergency override if power cuts"
    ],
    "idealFor": "Bedrooms, guest rooms, standard residential windows",
    "catalogueSource": "Master Catalogue Page 27"
  },
  {
    "id": "curtain-track-oc-nct",
    "slug": "customised-super-silent-curtain-track",
    "title": "Customised Super Silent Curtain Track Set",
    "model": "OC-NCT",
    "category": "Smart Curtains & Blinds",
    "categorySlug": "curtains-blinds",
    "subcategory": "Tracks",
    "badge": "Custom Track",
    "image": "/products/catalog/curtain-track-oc-nct.png",
    "shortDesc": "Heavy-duty custom aluminum curtain track set with silent rubber belt drive.",
    "description": "Complete motorized curtain rail kit including drivers, master carrier, silent runners, ceiling brackets, and high-tensile rubber belt. Available for center opening or single side opening.",
    "specs": {
      "Material": "Extruded Aircraft-grade Aluminum",
      "Opening Type": "Center split or One-way lateral opening",
      "Drive Belt": "Steel-reinforced Silent Polyurethane Rubber Belt",
      "Pricing": "Per Feet Custom Fabricated Rate",
      "Includes": "Track, runners, brackets, master carrier, end caps"
    },
    "highlights": [
      "Noise dampening runners ensure whisper-quiet movement",
      "Curved 90\u00b0 / 135\u00b0 track bending options available",
      "Ceiling or wall mounting brackets included"
    ],
    "idealFor": "Bay windows, straight curtain spans, corner glazing",
    "catalogueSource": "Master Catalogue Page 25 & 27"
  },
  {
    "id": "blind-motor-35m",
    "slug": "tubular-motor-35mm-blinds",
    "title": "Zigbee/Wifi Tubular Motor 6N (35mm)",
    "model": "OC-BMW/Z-35M",
    "category": "Smart Curtains & Blinds",
    "categorySlug": "curtains-blinds",
    "subcategory": "Blinds",
    "badge": "Tubular 6N",
    "image": "/products/catalog/blind-motor-35m.png",
    "shortDesc": "6N tubular motor for motorized roller blinds, Roman shades and zebra blinds.",
    "description": "Smart blinds intelligently manage light and privacy through app, remote, or voice control. Their sleek design and silent operation make them a perfect fit for contemporary spaces.",
    "specs": {
      "Diameter": "35mm",
      "Torque": "6 Nm",
      "Connectivity": "Zigbee / Wi-Fi",
      "Control": "App Control + Voice Control + Remote Control",
      "Memory": "Electronic Memory Limit & Preferred Stop Position"
    },
    "highlights": [
      "Electronic memory limit settings",
      "Preferred percentage stop position",
      "Compatible with roller, Roman, and zebra blind tubes"
    ],
    "idealFor": "Offices, modern apartment roller blinds, media rooms",
    "catalogueSource": "Master Catalogue Page 26-27"
  },
  {
    "id": "remote-single-channel",
    "slug": "single-channel-curtain-remote",
    "title": "Single Channel Remote (OC-SCR-01)",
    "model": "OC-SCR-01",
    "category": "Smart Curtains & Blinds",
    "categorySlug": "curtains-blinds",
    "subcategory": "Remotes",
    "badge": "1-Channel",
    "image": "/products/catalog/remote-single-channel.png",
    "shortDesc": "RF remote control for single motorized curtain or blind set.",
    "description": "Ergonomic handheld RF remote with wall holder cradle for quick open, pause, and close control.",
    "specs": {
      "Channels": "1 Channel (Single curtain set)",
      "Frequency": "RF 433.92 MHz",
      "Range": "Up to 30 meters indoor"
    },
    "highlights": [
      "Tactile Open, Stop, Close buttons",
      "Magnetic wall dock cradle",
      "High battery endurance"
    ],
    "idealFor": "Bedside or desk-side single curtain control",
    "catalogueSource": "Master Catalogue Page 27"
  },
  {
    "id": "remote-double-channel",
    "slug": "double-channel-curtain-remote",
    "title": "Double Channel Remote (OC-DCR-02)",
    "model": "OC-DCR-02",
    "category": "Smart Curtains & Blinds",
    "categorySlug": "curtains-blinds",
    "subcategory": "Remotes",
    "badge": "2-Channel",
    "image": "/products/catalog/remote-double-channel.png",
    "shortDesc": "Dual channel remote for dual curtain sets (sheer + blackout).",
    "description": "Controls daytime sheer curtains and night blackout drapes individually or simultaneously with channel selector.",
    "specs": {
      "Channels": "2 Channels (Dual curtain track set)",
      "Frequency": "RF 433.92 MHz"
    },
    "highlights": [
      "Control sheer and blackout curtains separately",
      "Simultaneous both-curtain open/close command",
      "Clean white finish"
    ],
    "idealFor": "Hotel suites and luxury bedrooms with dual curtain tracks",
    "catalogueSource": "Master Catalogue Page 27"
  },
  {
    "id": "remote-display",
    "slug": "multi-channel-remote-with-display",
    "title": "Remote with Display (OC-15CRD-03)",
    "model": "OC-15CRD-03",
    "category": "Smart Curtains & Blinds",
    "categorySlug": "curtains-blinds",
    "subcategory": "Remotes",
    "badge": "LCD Screen",
    "image": "/products/catalog/remote-display.png",
    "shortDesc": "Multi-channel master remote with digital LCD channel screen.",
    "description": "Master wireless controller with digital LCD screen managing up to 15 motorized curtains, blinds, and skylights.",
    "specs": {
      "Channels": "15 Independent Channels",
      "Display": "Digital LCD Channel Display",
      "Range": "Up to 50m open space"
    },
    "highlights": [
      "Direct channel number LCD readout",
      "Group channel '00' for whole-house master close",
      "Control multiple rooms from one remote"
    ],
    "idealFor": "Multi-story villas, penthouses, executive conference suites",
    "catalogueSource": "Master Catalogue Page 27"
  },
  {
    "id": "light-scd01",
    "slug": "surface-concealed-downlight-square-12w",
    "title": "Deep Square Panel Surface Concealed Downlight 12W",
    "model": "OC-SCD01",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Deep Anti-Glare",
    "image": "/products/catalog/light-scd01.png",
    "shortDesc": "(SQUARE) Deep Square panel 12W (cutout 100mm, deep 50mm) (Black & White).",
    "description": "For subtle ambient lighting to focused task lighting, our downlights deliver perfect balance of design, efficiency and performance.",
    "specs": {
      "Wattage": "12W",
      "Cutout / Depth": "Cutout 100mm, Deep 50mm",
      "Color Temp": "3 IN 1 - CCT (2700K - 6500K)",
      "Body Finish": "Black & White options",
      "Design": "Deep anti-glare recessed square optic"
    },
    "highlights": [
      "Deep 50mm reflector cuts visual glare (UGR<19)",
      "3 IN 1 Tunable CCT color temperature",
      "Aluminum die-cast heat sink for 50,000hr lifespan"
    ],
    "idealFor": "Living rooms, art galleries, high-end residential ceilings",
    "catalogueSource": "Master Catalogue Page 29-30"
  },
  {
    "id": "light-scd03",
    "slug": "surface-concealed-downlight-round-12w",
    "title": "Deep Round Panel Concealed Downlight 12W",
    "model": "OC-SCD03",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Deep Anti-Glare",
    "image": "/products/catalog/light-scd03.png",
    "shortDesc": "(ROUND) Deep Round panel 12W (cutout 100mm, deep 50mm) (Black & White).",
    "description": "Classic circular deep-cone architectural downlight with minimal visual intrusion.",
    "specs": {
      "Wattage": "12W",
      "Cutout / Depth": "Cutout 100mm, Deep 50mm",
      "Color Temp": "3 IN 1 CCT (2700K-6500K)",
      "Body Colors": "Black & White"
    },
    "highlights": [
      "Circular anti-glare cone baffle",
      "Smooth dimming without flicker",
      "Tunable white ambiance"
    ],
    "idealFor": "Bedrooms, corridors, dining table spotlights",
    "catalogueSource": "Master Catalogue Page 30"
  },
  {
    "id": "light-scd08",
    "slug": "surface-round-downlight-panel-cct",
    "title": "Surface - Round Downlight Panel 3 IN 1- CCT",
    "model": "OC-SCD08/09/10",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Surface Round",
    "image": "/products/catalog/light-scd08.png",
    "shortDesc": "Surface mounted round downlight panel 12W / 18W / 24W with 3 IN 1 CCT.",
    "description": "Evenly diffused surface downlight for spaces without false ceiling drops.",
    "specs": {
      "Wattages": "12W (C-125mm) / 18W (C-150mm) / 24W (C-175mm)",
      "Color Temp": "3 IN 1 CCT (2700K - 6500K)",
      "Mounting": "Direct Surface Ceiling Mount"
    },
    "highlights": [
      "No false ceiling cutout required",
      "Wide diffuse beam angle for general room lighting",
      "Multi-wattage options"
    ],
    "idealFor": "Concrete slab ceilings, kitchens, utility corridors",
    "catalogueSource": "Master Catalogue Page 30"
  },
  {
    "id": "light-scd05",
    "slug": "surface-square-downlight-panel-cct",
    "title": "Surface - Square Downlight Panel 3 IN 1- CCT",
    "model": "OC-SCD05/06/07",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Surface Square",
    "image": "/products/catalog/light-scd05.png",
    "shortDesc": "Square surface downlight panel 12W (125mm) / 18W (150mm) / 24W (175mm).",
    "description": "Geometric square surface fixture delivering uniform, shadow-free room illumination.",
    "specs": {
      "Wattages": "12W (125*125mm) / 18W (150*150mm) / 24W (175*175mm)",
      "Color Temp": "3 IN 1 CCT (2700K - 6500K)"
    },
    "highlights": [
      "Geometric contemporary lines",
      "High lumen efficiency (>90 lm/W)",
      "Tunable circadian rhythm white"
    ],
    "idealFor": "Offices, modern apartments, study areas",
    "catalogueSource": "Master Catalogue Page 30"
  },
  {
    "id": "light-csl01",
    "slug": "concealed-spot-trimless-cct",
    "title": "Spot Trim-less - 3 IN 1- CCT (2700K-6500K)",
    "model": "OC-CSL01/02/03",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Trimless Spot",
    "image": "/products/catalog/light-csl01.png",
    "shortDesc": "Seamless plaster-in trimless spot light with gold & white reflector options.",
    "description": "Plastered seamlessly into the gypsum ceiling board for zero visible trim.",
    "specs": {
      "Wattages": "7W (C-35mm) / 12W (C-55mm) / 18W (C-75mm)",
      "Reflector": "Gold Reflector / White Reflector",
      "Body Colour": "White",
      "Color Temp": "3 IN 1 CCT (2700K - 6500K)"
    },
    "highlights": [
      "Completely invisible trimless bezel",
      "Warm gold reflector option creates luxurious ambiance",
      "High CRI 95 for authentic color reproduction"
    ],
    "idealFor": "Luxury villa ceilings, designer lobbies, boutique retail",
    "catalogueSource": "Master Catalogue Page 30"
  },
  {
    "id": "light-csl04",
    "slug": "concealed-spot-tiltable-cct",
    "title": "Spot Tiltable - 3 IN 1- CCT (2700K-6500K)",
    "model": "OC-CSL04/05/06",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Tiltable Spot",
    "image": "/products/catalog/light-csl04.png",
    "shortDesc": "Adjustable tilt angle concealed spot light with interchangeable accent rings.",
    "description": "Gimbal mechanism allows 30\u00b0 directional tilting to highlight wall art, textures and alcoves.",
    "specs": {
      "Wattages": "7W (C-55mm) / 12W (C-75mm) / 18W (C-75mm)",
      "Ring Colors": "Grey Ring / White / Black / Chrome",
      "Color Temp": "3 IN 1 CCT"
    },
    "highlights": [
      "Adjustable direction for art and wall wash",
      "Interchangeable decorative ring trims",
      "Precision optic lens"
    ],
    "idealFor": "Artwork illumination, texture walls, retail displays",
    "catalogueSource": "Master Catalogue Page 30"
  },
  {
    "id": "light-csl07",
    "slug": "concealed-spot-gunmetal-cct",
    "title": "Spot - 3 IN 1- CCT (10W Gun Metal)",
    "model": "OC-CSL07",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Gun Metal Reflector",
    "image": "/products/catalog/light-csl07.png",
    "shortDesc": "Architectural 10W spotlight with deep gun metal anti-glare reflector.",
    "description": "Features dark-light technology where the light source is virtually invisible from normal viewing angles.",
    "specs": {
      "Wattage": "10W (C-40mm)",
      "Body Colour": "White",
      "Reflector": "Gun Metal Deep Dark Reflector",
      "Color Temp": "3 IN 1 CCT (2700K-6500K)"
    },
    "highlights": [
      "Dark-light optics prevent glare",
      "Gun metal mirror finish reflector",
      "Compact 40mm ceiling cutout"
    ],
    "idealFor": "Lounge ceilings, bars, contemporary bedrooms",
    "catalogueSource": "Master Catalogue Page 30"
  },
  {
    "id": "light-csl08",
    "slug": "deep-architectural-spot-cct",
    "title": "Deep Architectural Spot - 3 IN 1- CCT",
    "model": "OC-CSL08/09/10",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Deep Architectural",
    "image": "/products/catalog/light-csl08.png",
    "shortDesc": "Deep recessed spotlight 7W / 12W / 18W with multi-color ring combinations.",
    "description": "Heavy-duty thermal housing with interchangeable magnetic front bezels.",
    "specs": {
      "Wattages": "7W (C-65mm) / 12W (C-75mm) / 18W (C-90mm)",
      "Body / Ring": "Black/White Body | White/Black/Grey Ring",
      "Color Temp": "3 IN 1 CCT (2700K-6500K)"
    },
    "highlights": [
      "Interchangeable ring color styling",
      "Deep recessed source eliminates direct sightline glare",
      "Smooth dimming response"
    ],
    "idealFor": "High ceilings, hotel corridors, commercial showrooms",
    "catalogueSource": "Master Catalogue Page 30"
  },
  {
    "id": "light-ssl01",
    "slug": "surface-cylinder-spot-cct",
    "title": "Surface Cylinder Spot - 3 IN 1- CCT",
    "model": "OC-SSL01/02/03",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Surface Cylinder",
    "image": "/products/catalog/light-ssl01.png",
    "shortDesc": "Surface mounted cylindrical spot light (7W / 12W / 18W) with designer metallic ring.",
    "description": "Minimalist surface canister light in matte black or white with metallic bezel accents.",
    "specs": {
      "Wattages": "7W, 12W, 18W",
      "Body Colour": "White / Black",
      "Ring Colors": "White / Black / Chrome / Gold / Silver",
      "Color Temp": "3 IN 1 CCT (2700K-6500K)"
    },
    "highlights": [
      "Architectural cylinder body",
      "5 accent ring finishes",
      "No ceiling cutouts needed"
    ],
    "idealFor": "Lofts, exposed ceilings, kitchen islands",
    "catalogueSource": "Master Catalogue Page 31"
  },
  {
    "id": "light-ssl04",
    "slug": "spot-surface-cylinder-360-adjustable",
    "title": "Spot Surface Cylinder 360\u00b0 Adjustable - 3 IN 1- CCT",
    "model": "OC-SSL04/05/06",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "360\u00b0 Articulated",
    "image": "/products/catalog/light-ssl04.png",
    "shortDesc": "Surface spotlight with 360\u00b0 horizontal rotation and 90\u00b0 vertical tilt.",
    "description": "Articulating spotlight head lets you redirect beam toward paintings, cabinets, or dining focal points.",
    "specs": {
      "Wattages": "10W, 12W, 15W",
      "Body Colour": "White / Black",
      "Adjustment": "360\u00b0 Rotation + 90\u00b0 Vertical Pivot",
      "Color Temp": "3 IN 1 CCT (2700K - 6500K)"
    },
    "highlights": [
      "Full 360\u00b0 articulation",
      "Versatile spot and accent illumination",
      "Sleek architectural cylinder"
    ],
    "idealFor": "Galleries, dining table focus, wardrobe task light",
    "catalogueSource": "Master Catalogue Page 31"
  },
  {
    "id": "light-ssl07",
    "slug": "surface-twisted-cylinder-cct",
    "title": "Surface Twisted Cylinder - 3 IN 1- CCT (12W)",
    "model": "OC-SSL07",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Twisted Angle",
    "image": "/products/catalog/light-ssl07.png",
    "shortDesc": "Angular angled surface cylinder downlight 12W with dynamic visual stance.",
    "description": "Sculptural asymmetric body creates a statement on modern ceilings while directing focused downlight.",
    "specs": {
      "Wattage": "12W",
      "Body Colour": "White / Black",
      "Color Temp": "3 IN 1 CCT (2700K-6500K)"
    },
    "highlights": [
      "Sculptural modern angular aesthetic",
      "Integrated driver design",
      "High efficiency LED engine"
    ],
    "idealFor": "Contemporary living rooms, cafes, reception lobbies",
    "catalogueSource": "Master Catalogue Page 31"
  },
  {
    "id": "light-lls01",
    "slug": "magnetic-track-linear-diffused-light",
    "title": "CCT Magnetic Track Linear Diffused Light",
    "model": "OC-LLS01/02",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Magnetic Track",
    "image": "/products/catalog/light-lls01.png",
    "shortDesc": "Magnetic track linear diffused strip light 12W / 20W with 3 IN 1 CCT.",
    "description": "Modular lighting designed for flexible, effortless illuminations. Snaps into 48V low-voltage magnetic track rails.",
    "specs": {
      "Wattages": "12W / 20W",
      "Color Temp": "3 IN 1 CCT (2700K - 6500K)",
      "Voltage": "48V DC Low Voltage Rail",
      "Mounting": "Magnetic click-and-lock"
    },
    "highlights": [
      "Hot-swappable magnetic track installation without tools",
      "Safe 48V touchable track voltage",
      "Uniform shadowless general lighting"
    ],
    "idealFor": "Living room magnetic tracks, open kitchens, offices",
    "catalogueSource": "Master Catalogue Page 31 & 33"
  },
  {
    "id": "light-lls03",
    "slug": "magnetic-track-linear-laser-light",
    "title": "Magnetic Track Linear Laser Light",
    "model": "OC-LLS03/04",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Louver Laser",
    "image": "/products/catalog/light-lls03.png",
    "shortDesc": "Multi-cell louver anti-glare linear laser light 6W / 12W for magnetic tracks.",
    "description": "Precision individual micro-reflectors throw concentrated task light downwards without causing glare.",
    "specs": {
      "Wattages": "6W / 12W",
      "Color Temp": "3 IN 1 CCT (2700K-6500K)",
      "System": "Magnetic 48V Track"
    },
    "highlights": [
      "Dark louver technology prevents direct glare",
      "High punch lux levels on work surfaces",
      "Tool-free magnetic relocation anytime"
    ],
    "idealFor": "Kitchen islands, dining tables, boardroom desks",
    "catalogueSource": "Master Catalogue Page 31 & 33"
  },
  {
    "id": "light-lls05",
    "slug": "magnetic-track-cob-adjustable-light",
    "title": "Magnetic Track COB Adjustable Light",
    "model": "OC-LLS05/06",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Track Spotlight",
    "image": "/products/catalog/light-lls05.png",
    "shortDesc": "Magnetic track spot cylinder 12W / 15W with multi-angle rotation.",
    "description": "Fully articulating spotlight module on magnetic adapter for focused accent lighting.",
    "specs": {
      "Wattages": "12W / 15W",
      "Color Temp": "3 IN 1 CCT (2700K - 6500K)",
      "Rotation": "360\u00b0 Swivel + 90\u00b0 Tilt"
    },
    "highlights": [
      "Pinpoint accent lighting on paintings and shelving",
      "Click into any section of magnetic track rail",
      "Adjust direction effortlessly"
    ],
    "idealFor": "Living room walls, art collections, fashion boutiques",
    "catalogueSource": "Master Catalogue Page 31 & 33"
  },
  {
    "id": "strip-rgbcct96",
    "slug": "rgbcct-24v-96led-strip-5m",
    "title": "RGBCCT 24V 5050 96LEDS/M LED Strip Light - 5M",
    "model": "OC-RGBCCT96",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "RGB + CCT",
    "image": "/products/catalog/strip-rgbcct96.png",
    "shortDesc": "24V 5-in-1 LED strip with 96 LEDs/m combining 16M RGB colors with tunable white.",
    "description": "Ambient lights that transform everyday moments into perfect scenes from quiet mornings to energetic evenings.",
    "specs": {
      "Voltage": "24V DC",
      "LED Type": "5050 SMD 96 LEDs/meter",
      "Length": "5 Meters Reel",
      "Spectrum": "Full RGB + CCT (2700K - 6500K)"
    },
    "highlights": [
      "True dedicated warm & cool white chips + full RGB spectrum",
      "High lumen output for false ceiling coves",
      "24V constant voltage reduces voltage drop along 5 meters"
    ],
    "idealFor": "False ceiling coves, bed headboard pelmets, home bars",
    "catalogueSource": "Master Catalogue Page 34"
  },
  {
    "id": "strip-rgbcct216",
    "slug": "rgb-cct-24v-216led-strip-10m",
    "title": "RGB+CCT 24V 12W/M 5050 216LEDS/M LED Strip 10mm - 10M",
    "model": "OC-RGBCCT216",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "High Density 216 LED",
    "image": "/products/catalog/strip-rgbcct216.png",
    "shortDesc": "Ultra-dense 216 LEDs/meter strip light across 10 meters for dot-free continuous glow.",
    "description": "Professional 10-meter roll for large architectural runs with zero visible LED hot spots.",
    "specs": {
      "Voltage": "24V DC (12W / Meter)",
      "LED Count": "216 LEDs / Meter",
      "Width / Length": "10mm Width, 10 Meter Reel"
    },
    "highlights": [
      "216 LEDs/m provides completely seamless dot-free linear light",
      "Long 10m single run without color shift",
      "Dual white CCT + vivid color transitions"
    ],
    "idealFor": "Large hall coves, commercial perimeter lighting, stair handrails",
    "catalogueSource": "Master Catalogue Page 34"
  },
  {
    "id": "strip-rgbw60",
    "slug": "rgbw-12v-60led-strip-5m",
    "title": "RGBW 12V 5050 60LEDS/M LED Strip Light - 5M",
    "model": "OC-RGBW60",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "RGBW 12V",
    "image": "/products/catalog/strip-rgbw60.png",
    "shortDesc": "12V 5050 60 LEDs/m strip with independent pure white channel.",
    "description": "Standard 12V strip with dedicated white diodes ensuring crisp reading light in addition to party colors.",
    "specs": {
      "Voltage": "12V DC",
      "LED Density": "60 LEDs / Meter",
      "Length": "5M Reel"
    },
    "highlights": [
      "Independent white channel prevents purple/blue tint in white mode",
      "Cuttable every 50mm",
      "Self-adhesive 3M backing"
    ],
    "idealFor": "Under-cabinet lighting, shelf displays, desk backlighting",
    "catalogueSource": "Master Catalogue Page 34"
  },
  {
    "id": "strip-cct240",
    "slug": "cct-12v-24w-240led-strip-5m",
    "title": "CCT 12V 24W/M 2835 240LEDS/M LED Strip 10mm - 5M",
    "model": "OC-CCT240",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Ultra Bright CCT",
    "image": "/products/catalog/strip-cct240.png",
    "shortDesc": "High lumen 24W/m tunable white 2835 strip with 240 LEDs/meter.",
    "description": "Maximum brightness architectural strip designed specifically for main cove illumination replacing fluorescent tubes.",
    "specs": {
      "Wattage": "24W / Meter",
      "Voltage": "12V DC",
      "LED Count": "240 LEDs / Meter (2835 SMD)",
      "Length": "5M Reel"
    },
    "highlights": [
      "Massive 2400 lumens/meter output",
      "Circadian rhythm daylight tuning (2700K to 6500K)",
      "Zero dot effect in shallow cove profiles"
    ],
    "idealFor": "Primary room cove illumination, office linear channels",
    "catalogueSource": "Master Catalogue Page 34"
  },
  {
    "id": "strip-rgbic60",
    "slug": "rgbic-5v-addressable-strip-5m",
    "title": "RGBIC 5V 5050 60LEDS/M LED Strip 5mm - 5M",
    "model": "OC-RGBIC60",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Addressable DreamColor",
    "image": "/products/catalog/strip-rgbic60.png",
    "shortDesc": "Individually addressable 5V RGBIC strip for dynamic moving rainbow chase effects.",
    "description": "Pixel-controlled strip capable of displaying multiple colors simultaneously along a single line.",
    "specs": {
      "Voltage": "5V DC",
      "LEDs": "5050 RGBIC 60 LEDs / Meter",
      "Width": "Slim 5mm PCB, 5M Reel"
    },
    "highlights": [
      "Segmented color control & chasing animation modes",
      "Music synchronization with sound wave pulses",
      "Slim 5mm PCB fits tight aluminum trims"
    ],
    "idealFor": "Gaming rooms, TV backlights, bar counters, party zones",
    "catalogueSource": "Master Catalogue Page 34"
  },
  {
    "id": "tv-camera-sync",
    "slug": "wifi-camera-sync-tv-backlight-5m",
    "title": "Wifi - Camera Sync LED Strip Light for TV/Game - 5M",
    "model": "OC-TVCA-5m",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "Camera Immersion",
    "image": "/products/catalog/tv-camera-sync.png",
    "shortDesc": "Intelligent camera-based immersion backlight syncing screen colors with room LEDs in real-time.",
    "description": "Mounted over TV, the wide-angle camera samples screen edge colors and projects synchronized ambient lighting onto the rear wall for total visual immersion.",
    "specs": {
      "Sensor": "Color Sensing High-Speed Wide-Angle Camera",
      "Coverage": "Fits 55\u201d to 75\u201d TVs (5M Strip)",
      "Connectivity": "Wi-Fi 2.4GHz + Smart App",
      "Compatibility": "All TV screens, consoles, streaming apps, cable"
    },
    "highlights": [
      "Works with ALL screen content including built-in Netflix, YouTube, PS5",
      "Real-time zero-lag color sampling",
      "Reduces eye strain during nighttime movie watching"
    ],
    "idealFor": "Home theaters, living room TV setups, gaming lounges",
    "catalogueSource": "Master Catalogue Page 34"
  },
  {
    "id": "tv-hdmi-sync",
    "slug": "wifi-hdmi-sync-tv-backlight-5m",
    "title": "Wifi - HDMI 2.0 Sync LED Strip Light for TV/Game - 5M",
    "model": "OC-TVHD-5m",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Lightings",
    "badge": "HDMI 2.0 Direct",
    "image": "/products/catalog/tv-hdmi-sync.png",
    "shortDesc": "Hardware HDMI 2.0 passthrough sync box for zero-latency 4K gaming immersion backlight.",
    "description": "Reads raw video signals directly from HDMI sources for pixel-accurate color rendering and zero camera calibration hassle.",
    "specs": {
      "Interface": "HDMI 2.0 Passthrough (4K 60Hz HDR / Dolby Vision)",
      "Latency": "<15ms Ultra-low latency",
      "Strip": "5M RGBIC Custom Segment Strip",
      "Audio Sync": "Built-in Music & Sound Reaction"
    },
    "highlights": [
      "Hardware-level direct signal decoding with zero distortion",
      "Clean setup without camera mounted on top of TV",
      "Supports PlayStation 5, Xbox Series X, Apple TV, Fire TV Stick"
    ],
    "idealFor": "Hardcore gamers, premium home cinema enthusiasts",
    "catalogueSource": "Master Catalogue Page 34"
  },
  {
    "id": "driver-oc-ld01",
    "slug": "zigbee-cob-driver-7w-13-5w",
    "title": "Zigbee - COB Driver Dimming/CCT Adjustable (7W-13.5W)",
    "model": "OC-LD01",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Drivers",
    "badge": "Zigbee COB",
    "image": "/products/catalog/driver-oc-ld01.png",
    "shortDesc": "DIP-switch adjustable constant current Zigbee driver for architectural downlights (7-13.5W).",
    "description": "Precision engineered lighting control driver providing deep 0.1% smooth dimming and dual-channel CCT color tuning for spotlights.",
    "specs": {
      "Power Rating": "7 / 9 / 12 / 13.5W (DIP Switch Selectable)",
      "Current Output": "150 / 200 / 250 / 300 mA",
      "Power Factor": "PF > 0.5",
      "Protocol": "Zigbee 3.0",
      "Dimming Range": "0.1% - 100% Flicker-free"
    },
    "highlights": [
      "DIP selectable mA rating matches any architectural spotlight",
      "Flicker-free IEEE 1789 standard compliance",
      "Deep smooth dimming curve"
    ],
    "idealFor": "Concealed spots, deep downlights, gallery spot fixtures",
    "catalogueSource": "Master Catalogue Page 31"
  },
  {
    "id": "driver-oc-ld02",
    "slug": "zigbee-cob-driver-15w-36w",
    "title": "Zigbee - COB Driver Dimming/CCT Adjustable (15W-36W)",
    "model": "OC-LD02",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Drivers",
    "badge": "High PF > 0.9",
    "image": "/products/catalog/driver-oc-ld02.png",
    "shortDesc": "Heavy-duty 15W-36W Zigbee CCT driver with high power factor (PF > 0.9).",
    "description": "Professional constant-current driver for commercial downlights and high-output ceiling fixtures.",
    "specs": {
      "Power Rating": "15W \u2013 36W",
      "Current Output": "350mA \u2013 870mA DIP adjustable",
      "Power Factor": "PF > 0.9",
      "Protocol": "Zigbee 3.0"
    },
    "highlights": [
      "Industrial grade power factor PF > 0.9 saves energy",
      "Multi-mA DIP settings cover diverse commercial fixtures",
      "Over-temperature and short-circuit auto protection"
    ],
    "idealFor": "Commercial projects, retail downlights, high-bay spotlights",
    "catalogueSource": "Master Catalogue Page 31"
  },
  {
    "id": "driver-wdr01",
    "slug": "wifi-pixel-control-led-module",
    "title": "Wifi - Pixel Control Led Control Module with Remote",
    "model": "OC-WDR-01",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Drivers",
    "badge": "Pixel IC Module",
    "image": "/products/catalog/driver-wdr01.png",
    "shortDesc": "Smart Wi-Fi pixel controller for addressable digital LED strips with RF remote.",
    "description": "Drives RGBIC addressable strip lights with dynamic effects, rhythm modes, and smartphone access.",
    "specs": {
      "Control": "Wi-Fi + 2.4G RF Touch Remote + App",
      "Voltage": "DC 5V \u2013 24V",
      "IC Support": "WS2812B, WS2811, UCS1903, SK6812"
    },
    "highlights": [
      "Supports 100+ dynamic animation chases",
      "Built-in mic sound reactivity",
      "Includes ergonomic RF remote"
    ],
    "idealFor": "Entertainment rooms, facade running lights, display vitrines",
    "catalogueSource": "Master Catalogue Page 35"
  },
  {
    "id": "driver-wdr-rgbcct",
    "slug": "wifi-rgbcct-led-strip-controller",
    "title": "Wifi- RGBCCT LED Strip Control Module With Remote",
    "model": "OC-WDR-RGBCCT",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Drivers",
    "badge": "WiFi 5-in-1",
    "image": "/products/catalog/driver-wdr-rgbcct.png",
    "shortDesc": "5-Channel Wi-Fi PWM controller for RGBCCT strips with rotary color wheel remote.",
    "description": "Full-color spectrum plus tunable white control with intuitive touch wheel remote.",
    "specs": {
      "Voltage": "DC 12V \u2013 24V",
      "Output": "5 Channels (R, G, B, CW, WW)",
      "Control": "Smart App, Alexa, Google Home, RF Touch Wheel Remote"
    },
    "highlights": [
      "Touch color-wheel remote included",
      "Standalone Wi-Fi connectivity without gateway",
      "Smooth transition between color and warm daylight"
    ],
    "idealFor": "Living room coves, false ceiling ambiance",
    "catalogueSource": "Master Catalogue Page 35"
  },
  {
    "id": "driver-wdr-rgbw",
    "slug": "wifi-rgbw-led-strip-control-module",
    "title": "Wifi- RGBW LED Strip Control Module with Remote",
    "model": "OC-WDR-RGBW",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Drivers",
    "badge": "WiFi RGBW",
    "image": "/products/catalog/driver-wdr-rgbw.png",
    "shortDesc": "4-Channel RGBW LED strip controller with wireless RF remote.",
    "description": "Standard 4-channel controller for ambient RGBW cove and furniture lighting.",
    "specs": {
      "Voltage": "DC 12V \u2013 24V",
      "Output": "4 Channels (RGBW)",
      "Control": "Wi-Fi + RF Remote"
    },
    "highlights": [
      "Simple plug-and-play terminals",
      "App scheduling and timer off",
      "Voice enabled control"
    ],
    "idealFor": "Under-bed lighting, gaming desks, bar cabinets",
    "catalogueSource": "Master Catalogue Page 35"
  },
  {
    "id": "driver-zdr-rgbcct",
    "slug": "zigbee-5-in-1-led-strip-controller",
    "title": "Zigbee - 5 in 1 (RGB/RGBW/RGBCCT) Led Strips Controller (15A)",
    "model": "OC-ZDR-RGBCCT",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Drivers",
    "badge": "Zigbee 15A Heavy",
    "image": "/products/catalog/driver-zdr-rgbcct.png",
    "shortDesc": "Professional 15A Zigbee 3.0 controller configurable for Mono/CCT/RGB/RGBW/RGBCCT.",
    "description": "High-current multi-purpose Zigbee lighting controller for whole-villa architectural linear light systems.",
    "specs": {
      "Voltage": "DC 5V \u2013 24V",
      "Max Current": "15 A Total Output",
      "Modes": "5 Modes: Single Color / CCT / RGB / RGBW / RGBCCT",
      "Protocol": "Zigbee 3.0 Mesh"
    },
    "highlights": [
      "Huge 15A capacity drives long continuous LED strip runs",
      "Zigbee mesh reliability with zero Wi-Fi network congestion",
      "Direct scene integration with Ottoclick smart touch switches"
    ],
    "idealFor": "Whole-house cove lighting, commercial architectural installations",
    "catalogueSource": "Master Catalogue Page 35"
  },
  {
    "id": "driver-zdr-rgbw",
    "slug": "zigbee-4ch-rgbw-led-strip-controller",
    "title": "Zigbee- 4 CH RGBW Led Strip control Module",
    "model": "OC-ZDR-RGBW",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Drivers",
    "badge": "Zigbee 4CH",
    "image": "/products/catalog/driver-zdr-rgbw.png",
    "shortDesc": "Zigbee mesh 4-channel controller for 5-24V RGBW strip lights.",
    "description": "Compact Zigbee module for discrete hidden placement in coves and pelmets.",
    "specs": {
      "Voltage": "DC 5V \u2013 24V",
      "Channels": "4 Channel Constant Voltage",
      "Protocol": "Zigbee 3.0"
    },
    "highlights": [
      "Low latency response via Zigbee network",
      "Smooth 16-bit PWM dimming",
      "Compact footprint"
    ],
    "idealFor": "Bedroom headboard pelmets and living accents",
    "catalogueSource": "Master Catalogue Page 35"
  },
  {
    "id": "driver-zdr-cct",
    "slug": "zigbee-cct-controller-120w-power-supply",
    "title": "Zigbee - CCT Led Strip Controller + Power Supply (120W)",
    "model": "OC-ZDR-CCT",
    "category": "Smart Lighting",
    "categorySlug": "smart-lighting",
    "subcategory": "Drivers",
    "badge": "All-in-One 120W",
    "image": "/products/catalog/driver-zdr-cct.png",
    "shortDesc": "All-in-one Integrated 24V 5A 120W Power Supply + Zigbee CCT Driver.",
    "description": "Eliminates separate bulky SMPS transformers! Combines AC-to-DC 120W power supply and smart Zigbee CCT dimmer in a single compact housing.",
    "specs": {
      "Input Voltage": "100\u2013240V AC 50/60Hz",
      "Output": "DC 24V / 5A (120W Max)",
      "Control": "Zigbee 3.0 Dual Channel CCT Tuning",
      "Form Factor": "Integrated Single Enclosure"
    },
    "highlights": [
      "No separate transformer box needed \u2014 clean, quick installation",
      "Direct 220V AC input to 24V smart CCT strip output",
      "High efficiency with built-in thermal protection"
    ],
    "idealFor": "False ceiling coves, kitchen under-cabinets, vanity mirrors",
    "catalogueSource": "Master Catalogue Page 35"
  },
  {
    "id": "motion-ceiling-360",
    "slug": "ceiling-360-degree-microwave-motion-sensor",
    "title": "Ceiling Motion Sensor (3 Knob)",
    "model": "OC-M3",
    "category": "Motion Sensors",
    "categorySlug": "motion-sensors",
    "subcategory": "Microwave & PIR Sensors",
    "badge": "360\u00b0 Microwave",
    "image": "/products/catalog/motion-ceiling-360.png",
    "shortDesc": "High frequency 360\u00b0 motion detector with 1-8m adjustable radius & lux dial.",
    "description": "Ottoclick Motion Sensors use high-frequency detection to sense even the slightest movement\u2014ensuring instant and accurate automation in corridors, basements, parking areas, washrooms, and commercial complexes.",
    "specs": {
      "Detection Angle": "360-Degree Ceiling Coverage",
      "Detection Distance": "1\u20138m (Radius) adjustable",
      "Installing Height": "1.5m \u2013 3.5m",
      "Ambient Light": "Adjustable from <3 lux to 2000 lux",
      "Time Delay": "Min: 10sec \u00b13sec | Max: 12min \u00b11min",
      "Rated Load": "1200W (Incandescent) | 300W (Energy-saving/LED)",
      "Power Supply": "220\u2013240V AC"
    },
    "highlights": [
      "High-frequency 5.8GHz sensing penetrates non-metallic obstacles",
      "3-knob manual calibration (Sensitivity, Time delay, Lux threshold)",
      "Instant light trigger saves up to 70% unnecessary energy"
    ],
    "idealFor": "Corridors, basements, parking areas, washrooms, stairwells",
    "catalogueSource": "Smart Motion PDF Page 4-5"
  },
  {
    "id": "motion-compact",
    "slug": "compact-microwave-motion-sensor",
    "title": "Compact Motion Sensor",
    "model": "OC-M5",
    "category": "Motion Sensors",
    "categorySlug": "motion-sensors",
    "subcategory": "Microwave & PIR Sensors",
    "badge": "Compact Hidden",
    "image": "/products/catalog/motion-compact.png",
    "shortDesc": "Mini in-line microwave sensor designed for concealed installation inside luminaires.",
    "description": "Ultra-compact form factor engineered to fit inside light fixtures, junction boxes, or behind false ceiling boards.",
    "specs": {
      "HF System": "5.8 GHz CW radar, ISM band",
      "Time Delay": "Adjustable 8 seconds to 12 minutes",
      "Mounting": "Concealed inside fixtures or conduit boxes",
      "Voltage": "220\u2013240V AC"
    },
    "highlights": [
      "Concealed hidden installation \u2014 no visible sensor bump",
      "Works through glass, thin walls, and plastic light diffusers",
      "Compact footprint"
    ],
    "idealFor": "Flush luminaires, ceiling batten lights, hidden automation",
    "catalogueSource": "Smart Motion PDF Page 6"
  },
  {
    "id": "motion-ceiling-clip",
    "slug": "ceiling-microwave-sensor-spring-clip",
    "title": "Ceiling Microwave Sensor",
    "model": "OC-M6",
    "category": "Motion Sensors",
    "categorySlug": "motion-sensors",
    "subcategory": "Microwave & PIR Sensors",
    "badge": "Spring Clip Flush",
    "image": "/products/catalog/motion-ceiling-clip.png",
    "shortDesc": "Spring-clip ceiling recessed microwave motion sensor.",
    "description": "Mounts flush into false ceiling cutouts just like a standard downlight using durable spring clips.",
    "specs": {
      "Mounting": "Ceiling Cutout with Spring Retention Clips",
      "Installing Height": "1.5m \u2013 3.5m",
      "Detection Distance": "1\u20138m radius adjustable",
      "Time Delay": "10s \u00b13s to 12min \u00b11min",
      "Voltage": "220\u2013240V AC"
    },
    "highlights": [
      "Clean flush downlight-style ceiling appearance",
      "Quick installation with spring clips",
      "Adjustable time and lux settings"
    ],
    "idealFor": "Office cabins, hotel corridors, home false ceilings",
    "catalogueSource": "Smart Motion PDF Page 7"
  },
  {
    "id": "motion-warehouse",
    "slug": "warehouse-sensor-oc-m8",
    "title": "Warehouse Sensor",
    "model": "OC-M8",
    "category": "Motion Sensors",
    "categorySlug": "motion-sensors",
    "subcategory": "Microwave & PIR Sensors",
    "badge": "High-Bay Industrial",
    "image": "/products/catalog/motion-warehouse.png",
    "shortDesc": "Industrial high-bay motion sensor for warehouse racking and factory floors.",
    "description": "Heavy-duty sensor engineered specifically for tall ceilings and wide aisle detection up to 15 meters height.",
    "specs": {
      "Ambient Light": "Adjustable <3 lux to 2000 lux",
      "Time Delay": "10s to 12min",
      "Application": "High-bay industrial warehouses, manufacturing plants",
      "Housing": "Heavy-duty IP65 protected casing"
    },
    "highlights": [
      "High-bay detection capability up to 15 meters",
      "Immune to drafts, dust, and temperature swings",
      "Drastically lowers industrial electricity bills"
    ],
    "idealFor": "Logistics warehouses, cold storages, manufacturing plants, parking lots",
    "catalogueSource": "Smart Motion PDF Page 8"
  },
  {
    "id": "motion-m10",
    "slug": "mini-microwave-sensor-oc-m10",
    "title": "Microwave Radar Sensor",
    "model": "OC-M10",
    "category": "Motion Sensors",
    "categorySlug": "motion-sensors",
    "subcategory": "Microwave & PIR Sensors",
    "badge": "AC 100-240V",
    "image": "/products/catalog/motion-m10.png",
    "shortDesc": "Ultra-slim wide voltage AC 100-240V microwave motion sensor.",
    "description": "Universal voltage motion detector suitable for global commercial specifications.",
    "specs": {
      "Power Supply": "AC 100\u2013240 V, 50/60 Hz",
      "Color": "White",
      "Installation": "Ceiling surface or flush"
    },
    "highlights": [
      "Universal AC 100-240V voltage input",
      "Slim compact profile",
      "High reliability"
    ],
    "idealFor": "Hotels, commercial washrooms, utility rooms",
    "catalogueSource": "Smart Motion PDF Page 9"
  },
  {
    "id": "motion-wall-mount-ip65",
    "slug": "wall-mounted-sensor-ip65-oc-m9",
    "title": "Wall Mounted Sensor (Waterproof IP 65)",
    "model": "OC-M9",
    "category": "Motion Sensors",
    "categorySlug": "motion-sensors",
    "subcategory": "Microwave & PIR Sensors",
    "badge": "IP65 Weatherproof",
    "image": "/products/catalog/motion-wall-mount-ip65.png",
    "shortDesc": "IP65 outdoor waterproof wall-mounted motion detector for perimeter security.",
    "description": "Weather-sealed motion detector built for outdoor gates, entry porches, gardens, and building perimeters.",
    "specs": {
      "Protection": "IP65 Waterproof & Dustproof",
      "Mounting": "Wall Mount with Swivel Bracket",
      "Ambient Light": "Adjustable <10 to 2000 lux",
      "Time Delay": "10 sec \u00b13 sec to 7 min \u00b12 min",
      "Detection Angle": "180\u00b0 Horizontal"
    },
    "highlights": [
      "Withstands heavy rain, dust, and outdoor heat",
      "Adjustable head angle for customized detection zone",
      "Instant trigger for perimeter floodlights"
    ],
    "idealFor": "Villa main gates, garden pathways, outdoor driveways, balconies",
    "catalogueSource": "Smart Motion PDF Page 11"
  },
  {
    "id": "motion-pir-wall",
    "slug": "wall-mounted-motion-sensor-pir-oc-p1",
    "title": "Wall Mounted Sensor (Waterproof IP 65)",
    "model": "OC-P1",
    "category": "Motion Sensors",
    "categorySlug": "motion-sensors",
    "subcategory": "Microwave & PIR Sensors",
    "badge": "PIR Outdoor",
    "image": "/products/catalog/motion-pir-wall.png",
    "shortDesc": "Passive infrared dual-element wall sensor with waterproof IP65 housing.",
    "description": "High accuracy infrared sensor that avoids false triggers from tree branches while detecting human presence reliably.",
    "specs": {
      "Sensor Type": "PIR (Passive Infrared)",
      "Protection": "IP65 Waterproof",
      "Time Delay": "10s to 7min",
      "Detection Range": "Up to 12 meters"
    },
    "highlights": [
      "PIR thermal detection eliminates wind/branch false alarms",
      "Swivel joint allows precise aiming",
      "Day/night lux selector"
    ],
    "idealFor": "Building exterior perimeters, staircases, residential parking",
    "catalogueSource": "Smart Motion PDF Page 12"
  },
  {
    "id": "motion-zigbee-pir",
    "slug": "zigbee-pir-motion-sensor",
    "title": "Zigbee PIR Motion Sensor (OC-Z-PIR02)",
    "model": "OC-Z-PIR02",
    "category": "Motion Sensors",
    "categorySlug": "motion-sensors",
    "subcategory": "Microwave & PIR Sensors",
    "badge": "Wireless Zigbee",
    "image": "/products/catalog/motion-zigbee-pir.png",
    "shortDesc": "Battery-operated wireless Zigbee motion sensor with magnetic ball mount.",
    "description": "Completely wire-free sensor that sticks anywhere and reports motion status to your automation hub in real-time.",
    "specs": {
      "Protocol": "Zigbee 3.0",
      "Battery": "CR2450 Cell (Up to 2 Years Life)",
      "Mounting": "360\u00b0 Magnetic Ball Mount with 3M adhesive",
      "Detection Range": "7 meters, 120\u00b0 field of view"
    },
    "highlights": [
      "100% wire-free \u2014 stick anywhere in seconds",
      "Triggers automated welcome lights, night dimming, or intruder alarms",
      "Smartphone low-battery warning"
    ],
    "idealFor": "Walk-in closets, bedrooms, hallways, security alarm zones",
    "catalogueSource": "Smart Motion PDF Page 13"
  },
  {
    "id": "motion-battery-light",
    "slug": "battery-operated-motion-sensor-light",
    "title": "Battery Operated Motion Sensor Light",
    "model": "OC-MSL1",
    "category": "Motion Sensors",
    "categorySlug": "motion-sensors",
    "subcategory": "Motion Lights",
    "badge": "AAA Battery",
    "image": "/products/catalog/motion-battery-light.png",
    "shortDesc": "Portable 4x AAA battery-powered motion sensor bar light.",
    "description": "Stick-on automatic lighting for cabinets, wardrobes, and dark corners without wiring.",
    "specs": {
      "Power Source": "Operates on 4 \u00d7 AAA batteries",
      "Mounting": "Magnetic strip with adhesive tape",
      "Sensor": "Integrated PIR + Photocell (activates only in dark)"
    },
    "highlights": [
      "No wiring needed",
      "PIR sensor activates light only in darkness",
      "Auto turns off after 20 seconds of no motion"
    ],
    "idealFor": "Dark wardrobes, kitchen pantries, under beds, stair treads",
    "catalogueSource": "Smart Motion PDF Page 20"
  },
  {
    "id": "motion-rechargeable-light",
    "slug": "rechargeable-motion-sensor-light-oc-rmsl01",
    "title": "Rechargeable Motion Sensor Light",
    "model": "OC-RMSL 01",
    "category": "Motion Sensors",
    "categorySlug": "motion-sensors",
    "subcategory": "Motion Lights",
    "badge": "Rechargeable",
    "image": "/products/catalog/motion-rechargeable-light.png",
    "shortDesc": "Sleek aluminum rechargeable bar light with magnetic snap-on mount.",
    "description": "Slim under-cabinet light with built-in rechargeable lithium battery and fast Type-C charging.",
    "specs": {
      "Battery": "Built-in Rechargeable Lithium Cell",
      "Charging": "Type-C Fast Charging",
      "Battery Life": "Up to 30 days in motion mode",
      "Body": "Ultra-thin Brushed Aluminum"
    },
    "highlights": [
      "Rechargeable via standard phone charger",
      "Magnetic attachment pops off effortlessly for recharging",
      "Constant ON and Motion Auto sensing modes"
    ],
    "idealFor": "Kitchen counter task lighting, wardrobe shelves, vanity tables",
    "catalogueSource": "Smart Motion PDF Page 21-24"
  },
  {
    "id": "wardrobe-oc-w1",
    "slug": "wardrobe-sensor-light-mechanical-oc-w1",
    "title": "Wardrobe Sensor Light (Mechanical)",
    "model": "OC-W1",
    "category": "Wardrobe Sensors",
    "categorySlug": "wardrobe-sensors",
    "subcategory": "Mechanical Sensors",
    "badge": "Hinge Light",
    "image": "/products/catalog/wardrobe-oc-w1.png",
    "shortDesc": "Mechanical hinge-mounted closet LED light that activates on door opening.",
    "description": "Attaches directly onto the cabinet door hinge. When the door opens, the spring-loaded plunger releases and turns on bright LEDs illuminating your wardrobe.",
    "specs": {
      "Lighting Color": "Warm White / Cool White (selectable)",
      "Battery": "12V 23A (easy replace)",
      "Mounting": "Direct screw-on standard cabinet hinge cup"
    },
    "highlights": [
      "Mounts directly on standard hydraulic cabinet hinges",
      "Light turns ON automatically when cupboard opens",
      "Zero electrical wiring required"
    ],
    "idealFor": "Wardrobe cabinets, kitchen cupboards, shoe racks",
    "catalogueSource": "Smart Motion PDF Page 15"
  },
  {
    "id": "wardrobe-oc-w2",
    "slug": "wardrobe-switch-mechanical-oc-w2",
    "title": "Wardrobe Switch (Mechanical)",
    "model": "OC-W2",
    "category": "Wardrobe Sensors",
    "categorySlug": "wardrobe-sensors",
    "subcategory": "Mechanical Sensors",
    "badge": "Contact Switch",
    "image": "/products/catalog/wardrobe-oc-w2.png",
    "shortDesc": "Mechanical push-to-break door contact microswitch for wardrobe profile lights.",
    "description": "Durable mechanical limit switch wired directly to wardrobe LED profile lights.",
    "specs": {
      "Model": "OC-W2",
      "Type": "Normally Closed (NC) Push-to-Break Switch",
      "Voltage": "AC 250V 2A / DC 12V-24V",
      "Color": "White / Black"
    },
    "highlights": [
      "Door closes = light OFF, Door opens = light ON",
      "Heavy-duty mechanical spring with 100,000+ operations",
      "Compact flush or surface cabinet mounting"
    ],
    "idealFor": "Wardrobe profile lights, closet lighting circuits, pantries",
    "catalogueSource": "Smart Motion PDF Page 16"
  },
  {
    "id": "wardrobe-oc-w3",
    "slug": "double-door-ir-sensor-oc-w3",
    "title": "Double Door IR Sensor",
    "model": "OC-W3",
    "category": "Wardrobe Sensors",
    "categorySlug": "wardrobe-sensors",
    "subcategory": "Infrared IR Sensors",
    "badge": "Dual Door IR",
    "image": "/products/catalog/wardrobe-oc-w3.png",
    "shortDesc": "12V DC dual-head infrared proximity sensor for two-door sliding wardrobes.",
    "description": "Equipped with two IR sensor probes. Opening either left or right wardrobe door triggers the connected LED profile light.",
    "specs": {
      "Operating Voltage": "12V DC",
      "Sensors": "Dual IR Proximity Heads with 1m cables",
      "Sensing Distance": "1 \u2013 5 cm optical beam",
      "Load": "Controls up to 60W 12V LED strips"
    },
    "highlights": [
      "Controls lighting across two adjacent sliding or hinged doors",
      "Contactless optical IR sensing prevents mechanical wear",
      "Hidden miniature sensor heads"
    ],
    "idealFor": "Double door sliding wardrobes, dual-leaf cabinet units",
    "catalogueSource": "Smart Motion PDF Page 17"
  },
  {
    "id": "wardrobe-oc-w4",
    "slug": "single-door-ir-sensor-oc-w4",
    "title": "Single Door IR Sensor",
    "model": "OC-W4",
    "category": "Wardrobe Sensors",
    "categorySlug": "wardrobe-sensors",
    "subcategory": "Infrared IR Sensors",
    "badge": "Single Door IR",
    "image": "/products/catalog/wardrobe-oc-w4.png",
    "shortDesc": "12V DC optical infrared proximity beam switch for single door cabinets.",
    "description": "Non-contact optical sensor for single cabinet doors, drawers, and showcase vitrines.",
    "specs": {
      "Operating Voltage": "12V DC",
      "Sensor Head": "Single Miniature IR Head",
      "Sensing Distance": "1 \u2013 5 cm"
    },
    "highlights": [
      "Silent electronic switching with zero clicking noise",
      "Small 8mm drill hole diameter for flush sensor head",
      "Direct 12V plug-and-play wiring"
    ],
    "idealFor": "Single door wardrobes, kitchen drawers, vanity cabinets",
    "catalogueSource": "Smart Motion PDF Page 18"
  },
  {
    "id": "gas-wifi-smoke",
    "slug": "wifi-smart-smoke-sensor",
    "title": "Wi-Fi Smoke Sensor",
    "model": "OC-W-SS",
    "category": "Gas Sensors",
    "categorySlug": "gas-sensors",
    "subcategory": "Smoke Detectors",
    "badge": "85dB Siren",
    "image": "/products/catalog/gas-wifi-smoke.png",
    "shortDesc": "Standalone Wi-Fi photoelectric smoke detector with built-in 85dB alarm.",
    "description": "Real-time smoke monitoring that sends immediate push notifications to your smartphone the instant smoke is detected.",
    "specs": {
      "Alarm Volume": "\u2265 85 dB at 3 meters",
      "Connectivity": "Wi-Fi 2.4GHz (Standalone, no hub required)",
      "Battery": "CR123A Lithium Cell (3 Year Standby)",
      "Certification": "Photoelectric EN14604 Standard"
    },
    "highlights": [
      "Loud 85dB acoustic siren alerts family members instantly",
      "Push notification alerts to phone even when away from home",
      "Self-test & mute button"
    ],
    "idealFor": "Kitchens, boiler rooms, corridors, residential bedrooms",
    "catalogueSource": "Smart Motion PDF Page 25-26"
  },
  {
    "id": "gas-zigbee-smoke",
    "slug": "zigbee-smart-smoke-sensor",
    "title": "Zigbee Smoke Sensor",
    "model": "OC-Z-SS",
    "category": "Gas Sensors",
    "categorySlug": "gas-sensors",
    "subcategory": "Smoke Detectors",
    "badge": "Zigbee Mesh",
    "image": "/products/catalog/gas-zigbee-smoke.png",
    "shortDesc": "Ultra-low power Zigbee smoke alarm with whole-home mesh interconnect.",
    "description": "Integrates into the Zigbee home automation mesh to trigger emergency exit lights and unlock digital door locks during emergencies.",
    "specs": {
      "Protocol": "Zigbee 3.0",
      "Interconnect": "Can trigger all room sirens simultaneously",
      "Battery Life": "Up to 5 Years Ultra-Low Power",
      "Alarm": "85 dB Siren + Flashing Red LED"
    },
    "highlights": [
      "Triggers automated safety workflow: turns ON all lights and sounds alarm",
      "Ultra-long 5-year battery performance",
      "Tamper and low-battery alerts"
    ],
    "idealFor": "Luxury villas, multi-story buildings, server rooms",
    "catalogueSource": "Smart Motion PDF Page 27"
  },
  {
    "id": "gas-zigbee-lpg",
    "slug": "zigbee-lpg-png-gas-detector",
    "title": "Zigbee LPG/PNG Detector",
    "model": "OC-Z-LPGS",
    "category": "Gas Sensors",
    "categorySlug": "gas-sensors",
    "subcategory": "Gas Leak Detectors",
    "badge": "LPG & PNG Safe",
    "image": "/products/catalog/gas-zigbee-lpg.png",
    "shortDesc": "Combustible gas leak detector with audible siren and smart valve linkage.",
    "description": "Monitors flammable gases (LPG, PNG, Methane) in real time. Can trigger a smart motorized gas valve to shut off the gas pipe instantly upon detecting a leak.",
    "specs": {
      "Gases Detected": "LPG (Liquefied Petroleum Gas), PNG (Piped Natural Gas), Methane",
      "Protocol": "Zigbee 3.0",
      "Alarm Threshold": "7% LEL \u00b13% LEL",
      "Valve Linkage": "12V output port to drive automatic gas shut-off solenoid"
    },
    "highlights": [
      "Detects dangerous gas leaks before explosion threshold",
      "Automatically closes connected motorized gas shutoff valve",
      "Loud continuous alarm siren + smartphone emergency alert"
    ],
    "idealFor": "Kitchens, gas cylinder storage, restaurant pantries",
    "catalogueSource": "Smart Motion PDF Page 28"
  },
  {
    "id": "door-sensor-oc-ds01",
    "slug": "smart-magnetic-sensor-oc-ds01",
    "title": "Smart Magnetic Sensor",
    "model": "OC-DS01",
    "category": "Door & Window Sensors",
    "categorySlug": "door-window-sensors",
    "subcategory": "Magnetic Sensors",
    "badge": "Brushed Silver",
    "image": "/products/catalog/door-sensor-oc-ds01.png",
    "shortDesc": "Brushed metallic silver luxury magnetic door & window contact sensor.",
    "description": "Premium metallic finish blends harmoniously with designer wooden entrance doors and aluminum window frames.",
    "specs": {
      "Model": "OC-DS01",
      "Colour": "Silver Metallic",
      "Detection": "Magnetic reed sensor for open / closed state",
      "Installation": "Strong 3M adhesive or screw mount"
    },
    "highlights": [
      "Brushed silver metallic housing matches luxury doors",
      "Instant notification when door or window is opened",
      "Triggers AC auto turn-off when balcony door stays open"
    ],
    "idealFor": "Main entrance doors, balcony sliders, French windows",
    "catalogueSource": "Smart Motion PDF Page 29-30"
  },
  {
    "id": "door-sensor-wifi",
    "slug": "wifi-smart-door-window-sensor",
    "title": "Wi-Fi Door Sensor",
    "model": "OC-DS02-W",
    "category": "Door & Window Sensors",
    "categorySlug": "door-window-sensors",
    "subcategory": "Magnetic Sensors",
    "badge": "Wi-Fi Standalone",
    "image": "/products/catalog/door-sensor-wifi.png",
    "shortDesc": "Standalone Wi-Fi door & window sensor with instant push notifications.",
    "description": "Wire-free contact sensor that connects directly to your home Wi-Fi to alert you whenever a door or window is opened.",
    "specs": {
      "Connectivity": "Wi-Fi 2.4 GHz",
      "Battery": "2x AAA Alkaline Batteries",
      "Working Gap": "\u2264 15 mm"
    },
    "highlights": [
      "Direct Wi-Fi connection \u2014 no hub or gateway required",
      "Door opened/closed history log in smartphone app",
      "Automates entrance welcome light scenes"
    ],
    "idealFor": "Entrance doors, windows, jewelry safes, medicine cabinets",
    "catalogueSource": "Smart Motion PDF Page 31"
  },
  {
    "id": "sensor-zigbee-sos",
    "slug": "zigbee-sos-panic-switch",
    "title": "Zigbee SOS Panic Switch",
    "model": "OC-Z-SOS",
    "category": "Door & Window Sensors",
    "categorySlug": "door-window-sensors",
    "subcategory": "Security & Panic",
    "badge": "Emergency SOS",
    "image": "/products/catalog/sensor-zigbee-sos.png",
    "shortDesc": "One-touch emergency panic button for elders and children.",
    "description": "A single press sends immediate priority siren and smartphone notifications to all family members or caregivers.",
    "specs": {
      "Protocol": "Zigbee 3.0",
      "Form Factor": "Pocket portable with lanyard or wall mount dock",
      "Battery": "CR2032 Lithium Coin Cell"
    },
    "highlights": [
      "Instant one-press emergency help alert",
      "Sends push notification & activates home siren",
      "Compact lanyard wearable for senior citizens"
    ],
    "idealFor": "Elderly bedside, bathroom emergencies, patient rooms",
    "catalogueSource": "Smart Motion PDF Page 32"
  },
  {
    "id": "timer-oc-t1",
    "slug": "frontier-timer-oc-t1",
    "title": "Frontier Timer",
    "model": "OC-T1",
    "category": "Timer",
    "categorySlug": "timer",
    "subcategory": "Digital & Frontier Timers",
    "badge": "Digital LCD",
    "image": "/products/catalog/timer-oc-t1.png",
    "shortDesc": "230V AC digital programmable timer switch with weekly scheduling & LCD screen.",
    "description": "Ottoclick Timer Sensors provide precise time-based control for lights and electrical loads, ensuring energy efficiency and automated daily operations.",
    "specs": {
      "Operating Voltage": "230V AC, 50 Hz",
      "Programs": "16 ON / 16 OFF daily & weekly programs",
      "Display": "Digital LCD Clock Display",
      "Battery Backup": "Built-in rechargeable battery preserves clock during power cuts",
      "Load Capacity": "16A Resistive Load"
    },
    "highlights": [
      "Set 16 independent ON/OFF time routines",
      "Internal battery retains memory during power outages",
      "Manual override button (Auto/On/Off)"
    ],
    "idealFor": "Water pumps, neon signboards, garden lighting, aquariums",
    "catalogueSource": "Smart Motion PDF Page 38-39 & MC Page 39"
  },
  {
    "id": "timer-oc-t2",
    "slug": "din-rail-mounted-timer-silver-oc-t2",
    "title": "DIN Rail Mounted (4 PIN)",
    "model": "OC-T2",
    "category": "Timer",
    "categorySlug": "timer",
    "subcategory": "DIN Rail Timers",
    "badge": "DIN Rail Silver",
    "image": "/products/catalog/timer-oc-t2.png",
    "shortDesc": "Silver finish industrial DIN rail mounted electronic programmable timer.",
    "description": "Fits neatly inside standard MCB distribution panels for central building circuit timing.",
    "specs": {
      "Operating Voltage": "230V AC, 50 Hz",
      "Terminals": "4 PIN Terminal Configuration",
      "Mounting": "Standard 35mm DIN Rail Mount",
      "Finish": "Silver Faceplate"
    },
    "highlights": [
      "Snaps onto standard electrical distribution DB boards",
      "Protects pump motors with scheduled runtime cycles",
      "Heavy-duty internal switching relay"
    ],
    "idealFor": "Electrical control panels, pump control, industrial lighting",
    "catalogueSource": "Smart Motion PDF Page 40"
  },
  {
    "id": "timer-oc-t3",
    "slug": "din-rail-mounted-timer-normal-oc-t3",
    "title": "DIN Rail Mounted (5 PIN)",
    "model": "OC-T3",
    "category": "Timer",
    "categorySlug": "timer",
    "subcategory": "DIN Rail Timers",
    "badge": "DIN Rail 5 PIN",
    "image": "/products/catalog/timer-oc-t3.png",
    "shortDesc": "Standard 5 PIN industrial DIN rail programmable electronic timer.",
    "description": "Versatile 5-terminal timer providing both normally open and normally closed relay contacts.",
    "specs": {
      "Operating Voltage": "230V AC, 50 Hz",
      "Terminals": "5 PIN Configuration (NO/NC changeover contacts)",
      "Mounting": "35mm DIN Rail Mount"
    },
    "highlights": [
      "Changeover NO/NC contact capability",
      "Weekly cycle timer scheduling",
      "Compact DIN rail module width"
    ],
    "idealFor": "HVAC circulation pumps, facade lighting panels, machinery timing",
    "catalogueSource": "Smart Motion PDF Page 41"
  },
  {
    "id": "timer-oc-t4",
    "slug": "timer-plug-oc-t4",
    "title": "Timer Plug",
    "model": "OC-T4",
    "category": "Timer",
    "categorySlug": "timer",
    "subcategory": "Plug-in Timers",
    "badge": "Socket Plug",
    "image": "/products/catalog/timer-oc-t4.png",
    "shortDesc": "Digital 3-pin socket plug-in timer with countdown and cyclical modes.",
    "description": "Plugs straight into any wall socket to automatically cut power after your chosen interval.",
    "specs": {
      "Operating Voltage": "230V AC",
      "Socket Type": "Indian 3-Pin Grounded Plug & Socket",
      "Display": "Digital 7-Segment LED Readout"
    },
    "highlights": [
      "Zero installation \u2014 simply plug in between wall and appliance",
      "Prevents battery overcharging for e-bikes, smartphones & laptops",
      "Automatic geyser cutoff saves power"
    ],
    "idealFor": "Water geysers, EV scooters, phone charging, mosquito vaporizers",
    "catalogueSource": "Smart Motion PDF Page 42"
  },
  {
    "id": "timer-oc-t5",
    "slug": "analogue-programmable-timer-oc-t5",
    "title": "Analogue Programmable Timer",
    "model": "OC-T5",
    "category": "Timer",
    "categorySlug": "timer",
    "subcategory": "Mechanical Timers",
    "badge": "24h Rotary Dial",
    "image": "/products/catalog/timer-oc-t5.png",
    "shortDesc": "24-Hour mechanical rotary dial timer with 15-minute pin resolution.",
    "description": "Ultra-reliable mechanical clockwork timer. Set timings effortlessly by clicking pins in or out.",
    "specs": {
      "Operating Voltage": "230V AC",
      "Type": "24-Hour Mechanical Rotating Dial",
      "Intervals": "15-minute minimum switching pin interval"
    },
    "highlights": [
      "Intuitive mechanical pin programming \u2014 no software needed",
      "Manual bypass switch",
      "Time-tested mechanical reliability"
    ],
    "idealFor": "Commercial refrigerators, outdoor signs, water aeration pumps",
    "catalogueSource": "Smart Motion PDF Page 43"
  },
  {
    "id": "timer-oc-t6",
    "slug": "astronomical-timer-oc-t6",
    "title": "Astronomical Timer",
    "model": "OC-T6",
    "category": "Timer",
    "categorySlug": "timer",
    "subcategory": "Astronomical & Street Timers",
    "badge": "Astronomical Auto",
    "image": "/products/catalog/timer-oc-t6.png",
    "shortDesc": "Smart astronomical timer computing daily sunrise and sunset for exterior lighting.",
    "description": "Calculates changing sunset and sunrise times 365 days a year based on geographic location, automatically turning street and building facade lights on at dusk and off at dawn without needing an external light sensor.",
    "specs": {
      "Operating Voltage": "230V AC",
      "Algorithm": "Astronomical solar calculation based on latitude/longitude",
      "Application": "Street lighting, facade lighting, township grounds"
    },
    "highlights": [
      "Automatically adjusts for summer and winter sunrise/sunset changes",
      "No exterior photocell sensor needed (never fooled by dirt or rain)",
      "Dual channel lighting output"
    ],
    "idealFor": "Street lights, building facade illumination, campus grounds",
    "catalogueSource": "Smart Motion PDF Page 44"
  },
  {
    "id": "sensor-oc-pc01",
    "slug": "day-night-sensor-oc-pc01",
    "title": "Day Night Sensor",
    "model": "OC-PC01",
    "category": "Timer",
    "categorySlug": "timer",
    "subcategory": "Photocell Sensors",
    "badge": "Dusk-to-Dawn",
    "image": "/products/catalog/sensor-oc-pc01.png",
    "shortDesc": "Automatic dusk-to-dawn ambient photocell sensor switch 230V AC.",
    "description": "Light-sensitive photocell switch that automatically turns lights ON at night and turns them OFF when sunlight returns.",
    "specs": {
      "Operating Voltage": "230V AC",
      "Load": "10A (Up to 2000W)",
      "Enclosure": "Weatherproof protective cap"
    },
    "highlights": [
      "Fully automatic dusk-to-dawn switching",
      "Built-in delay prevents flickering from car headlights",
      "Hands-free outdoor lighting"
    ],
    "idealFor": "Garden lights, porch lamps, perimeter wall lights, gates",
    "catalogueSource": "Smart Motion PDF Page 45 & MC Page 38"
  },
  {
    "id": "staircase-oc-sls01",
    "slug": "staircase-lighting-controller-sensors-oc-sls01",
    "title": "Stair Case Controller",
    "model": "OC/SLS01",
    "category": "Staircase Automation",
    "categorySlug": "staircase-automation",
    "subcategory": "Staircase Controllers",
    "badge": "Cascading Steps",
    "image": "/products/catalog/staircase-oc-sls01.png",
    "shortDesc": "Sequential cascading LED step controller with dual top/bottom motion sensors.",
    "description": "Transforms your staircase into a breathtaking architectural feature. As someone approaches, each step illuminates smoothly in sequence following their footsteps.",
    "specs": {
      "Model": "OC/SLS01",
      "Sensors": "Dual PIR Motion Sensors (Top & Bottom Landing)",
      "Lighting Effect": "Sequential step-by-step cascade illumination",
      "Adjustments": "Speed of sequence, brightness level, linger delay"
    },
    "highlights": [
      "Lights illuminate one-by-one in direction of walking",
      "Top and bottom motion sensors automatically detect walk direction",
      "Soft fade in and fade out creates stunning luxury effect"
    ],
    "idealFor": "Duplex villas, spiral staircases, hotel lobby stairs",
    "catalogueSource": "Smart Motion PDF Page 46-47"
  },
  {
    "id": "staircase-oc-sls02",
    "slug": "multi-step-staircase-controller-oc-sls02",
    "title": "Smart Staircase PIR Controller",
    "model": "OC-SLS02",
    "category": "Staircase Automation",
    "categorySlug": "staircase-automation",
    "subcategory": "Staircase Controllers",
    "badge": "Up to 32 Steps",
    "image": "/products/catalog/staircase-oc-sls02.png",
    "shortDesc": "Supports up to 32 steps with 12V / 24V DC input and digital speed adjustment.",
    "description": "High-capacity master staircase controller capable of driving up to 32 individual stair risers.",
    "specs": {
      "Model": "OC-SLS02",
      "Voltage": "12 V / 24 V DC",
      "Step Capacity": "Configurable from 8 to 32 steps",
      "Display": "Digital LED programming interface"
    },
    "highlights": [
      "Drives up to 32 individual steps with independent channels",
      "Works with 12V and 24V COB LED strip profiles",
      "Integrated daylight sensor prevents daytime activation"
    ],
    "idealFor": "Grand multi-flight staircases, commercial atriums, luxury villas",
    "catalogueSource": "Smart Motion PDF Page 48"
  },
  {
    "id": "staircase-oc-slk",
    "slug": "complete-staircase-lighting-kit-oc-slk",
    "title": "32-Channel Stair Motion Light Kit",
    "model": "OC-SLK",
    "category": "Staircase Automation",
    "categorySlug": "staircase-automation",
    "subcategory": "Complete Kits",
    "badge": "All-in-One Kit",
    "image": "/products/catalog/staircase-oc-slk.png",
    "shortDesc": "All-in-one smart staircase illumination kit with controller, sensors, wiring & power adapter.",
    "description": "Complete ready-to-install package including controller unit, two PIR sensors with extension cables, power supply, and step wiring harnesses.",
    "specs": {
      "Model": "OC-SLK",
      "Package Contents": "Controller, 2x PIR sensors, Power Supply, Quick-connect cables",
      "Compatibility": "Universal for standard residential staircases"
    },
    "highlights": [
      "Everything in one box for plug-and-play installation",
      "Pre-terminated cables eliminate soldering on site",
      "Complete installation guide included"
    ],
    "idealFor": "New home construction, renovation projects, interior designers",
    "catalogueSource": "Smart Motion PDF Page 49"
  },
  {
    "id": "accessory-oc-ss01",
    "slug": "smart-wifi-plug-10a-oc-ss01",
    "title": "Smart Wi-Fi Plug (10A)",
    "model": "OC-SS01",
    "category": "Accessories",
    "categorySlug": "accessories",
    "subcategory": "Smart Plugs",
    "badge": "10A Wi-Fi",
    "image": "/products/catalog/accessory-oc-ss01.png",
    "shortDesc": "Compact 10A smart plug with real-time power monitoring and voice control.",
    "description": "Turn table lamps, television consoles, water dispensers and appliances on or off from your phone from anywhere in the world.",
    "specs": {
      "Current Rating": "10 A",
      "Voltage": "230 V AC, 50 Hz",
      "Connectivity": "Wi-Fi 2.4 GHz (No hub required)",
      "Features": "Energy monitoring, timer schedules, voice control"
    },
    "highlights": [
      "Measures real-time wattage and cumulative monthly kWh consumption",
      "Voice control via Amazon Alexa & Google Assistant",
      "Schedule daily automated timers"
    ],
    "idealFor": "Lamps, televisions, audio systems, air purifiers, chargers",
    "catalogueSource": "Smart Motion PDF Page 33"
  },
  {
    "id": "accessory-oc-ss02",
    "slug": "smart-wifi-plug-16a-oc-ss02",
    "title": "Smart Wi-Fi Plug (16A)",
    "model": "OC-SS02",
    "category": "Accessories",
    "categorySlug": "accessories",
    "subcategory": "Smart Plugs",
    "badge": "16A Heavy Duty",
    "image": "/products/catalog/accessory-oc-ss02.png",
    "shortDesc": "Heavy-duty 16A smart plug for air conditioners, geysers, microwaves & heaters.",
    "description": "High-power smart socket rated for continuous 16A loads with flame-retardant casing and live energy consumption tracking on your smartphone.",
    "specs": {
      "Voltage": "230 V AC",
      "Current Rating": "16 A Heavy Duty",
      "Connectivity": "Wi-Fi 2.4 GHz",
      "Protection": "Flame-retardant PC body, overload cutoff"
    },
    "highlights": [
      "Handles up to 3500W heavy electrical appliances safely",
      "Live energy consumption metrics on phone app",
      "Schedule geyser to turn ON 15 mins before you wake up"
    ],
    "idealFor": "Air conditioners, water geysers, room heaters, microwave ovens",
    "catalogueSource": "Smart Motion PDF Page 34"
  },
  {
    "id": "accessory-wifi-breaker",
    "slug": "wifi-circuit-breaker-63a",
    "title": "Wi-Fi Circuit Breaker (63A)",
    "model": "OC-W-PCM",
    "category": "Accessories",
    "categorySlug": "accessories",
    "subcategory": "Smart Breakers",
    "badge": "63A DIN Rail",
    "image": "/products/catalog/accessory-wifi-breaker.png",
    "shortDesc": "63A DIN rail smart circuit breaker with smartphone power cutoff and metering.",
    "description": "Central smart breaker for whole-house or sub-panel electrical management, over-current trip, and remote power cutoff.",
    "specs": {
      "Current Rating": "63 A",
      "Mounting": "Standard 35mm DIN Rail Mount",
      "Connectivity": "Wi-Fi 2.4 GHz",
      "Protection": "Over-voltage, under-voltage, over-current, leakage protection"
    },
    "highlights": [
      "Remotely switch off mains power to entire floor or apartment",
      "Tracks whole-property kWh electricity usage in real time",
      "Programmable automatic voltage surge cutoff"
    ],
    "idealFor": "Main distribution boards, villas, rented properties, offices",
    "catalogueSource": "Smart Motion PDF Page 35"
  },
  {
    "id": "accessory-wifi-ir-rf",
    "slug": "wifi-ir-rf-blaster",
    "title": "Wi-Fi IR + RF Blaster",
    "model": "OC-IR-W",
    "category": "Accessories",
    "categorySlug": "accessories",
    "subcategory": "Universal Blasters",
    "badge": "IR + RF Universal",
    "image": "/products/catalog/accessory-wifi-ir-rf.png",
    "shortDesc": "360\u00b0 universal smart blaster controlling all Infrared and RF appliances.",
    "description": "Replaces all remotes in your room! Controls AC, TV, Set-top box, Projector, and RF curtains with your phone or voice commands.",
    "specs": {
      "Transmitters": "360\u00b0 Infrared + RF 433MHz / 315MHz",
      "Connectivity": "Wi-Fi 2.4 GHz",
      "Code Library": "Over 500,000 global appliance remote codes supported"
    },
    "highlights": [
      "Turn ANY regular AC into a smart AC with phone & voice control",
      "Controls TV, soundbars, projectors and RF motor blinds",
      "DIY learning feature for custom remotes"
    ],
    "idealFor": "Living rooms, home theaters, bedrooms, executive offices",
    "catalogueSource": "Smart Motion PDF Page 36"
  },
  {
    "id": "accessory-zigbee-ir",
    "slug": "zigbee-ir-blaster",
    "title": "Zigbee IR Blaster",
    "model": "OC-IR-Z",
    "category": "Accessories",
    "categorySlug": "accessories",
    "subcategory": "Universal Blasters",
    "badge": "Zigbee Mesh IR",
    "image": "/products/catalog/accessory-zigbee-ir.png",
    "shortDesc": "Ultra-fast Zigbee mesh universal infrared remote controller.",
    "description": "Seamlessly integrates traditional ACs and televisions into local Zigbee automation scenes without relying on internet cloud latency.",
    "specs": {
      "Protocol": "Zigbee 3.0",
      "Coverage": "360\u00b0 Full Room Infrared Coverage",
      "Power": "USB 5V 1A"
    },
    "highlights": [
      "Local offline Zigbee automation response",
      "Automate AC temperature adjustments based on room sensors",
      "Eliminates remote clutter"
    ],
    "idealFor": "Bedrooms, meeting rooms, luxury suites",
    "catalogueSource": "Smart Motion PDF Page 37"
  }
];

export default productsData;
