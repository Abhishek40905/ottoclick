export const productCategories = [
  {
    id: "smart-touch-panels",
    name: "Smart Touch Panels",
    icon: "Sliders",
    catalogueRef: "Master Catalogue Pages 10–19 & 40–41",
    description:
      "Smart touch switches, customizable Canvas panels, retrofit modules and smart control panels.",
    subcategories: [
      "All",
      "Luxe",
      "Aura",
      "Canvas",
      "Retrofit Modules",
      "Control Panels",
    ],
  },
  {
    id: "door-locks",
    name: "DOOR Locks",
    icon: "Lock",
    catalogueRef: "Digital Door Locks & Gate Motors Catalogue Pages 4–19",
    description:
      "Smart door locks, cabinet locks, glass locks and automated gate/garage motors.",
    subcategories: [
      "All",
      "Smart Door Locks",
      "Specialty & Metal Locks",
      "Cabinet Locks",
      "Gate & Garage Motors",
    ],
  },
  {
    id: "curtains-blinds",
    name: "Smart Curtains & Blinds",
    icon: "Sun",
    catalogueRef: "Master Catalogue Pages 24–27",
    description:
      "Motorized curtain and blind products, tracks and remotes.",
    subcategories: [
      "All",
      "Curtain Motors",
      "Tracks",
      "Blinds",
      "Remotes",
    ],
  },
  {
    id: "smart-lighting",
    name: "Smart Lighting",
    icon: "Lightbulb",
    catalogueRef: "Master Catalogue Pages 28–35",
    description:
      "Downlights, spotlights, magnetic track lights, LED strips, TV backlights and lighting drivers.",
    subcategories: ["All", "Lightings", "Drivers"],
  },
  {
    id: "motion-sensors",
    name: "Motion Sensors",
    icon: "Eye",
    catalogueRef:
      "Master Catalogue Page 38 & Smart Motion Sensor Catalogue Pages 4–13",
    description: "Microwave, PIR and motion sensing products.",
    subcategories: ["All", "Microwave & PIR Sensors", "Motion Lights"],
  },
  {
    id: "wardrobe-sensors",
    name: "Wardrobe Sensors",
    icon: "Layers",
    catalogueRef:
      "Master Catalogue Page 39 & Smart Motion Sensor Catalogue Pages 15–18",
    description: "Mechanical and infrared wardrobe/door sensing products.",
    subcategories: [
      "All",
      "Mechanical Sensors",
      "Infrared IR Sensors",
    ],
  },
  {
    id: "gas-sensors",
    name: "Gas Sensors",
    icon: "ShieldCheck",
    catalogueRef: "Smart Motion Sensor Catalogue Pages 25–28",
    description: "Smoke and combustible-gas sensing products.",
    subcategories: ["All", "Smoke Detectors", "Gas Leak Detectors"],
  },
  {
    id: "door-window-sensors",
    name: "Door & Window Sensors",
    icon: "Box",
    catalogueRef: "Smart Motion Sensor Catalogue Pages 29–32",
    description: "Door/window contact and emergency panic sensors.",
    subcategories: ["All", "Magnetic Sensors", "Security & Panic"],
  },
  {
    id: "timer",
    name: "Timer",
    icon: "Clock",
    catalogueRef:
      "Master Catalogue Page 39 & Smart Motion Sensor Catalogue Pages 38–45",
    description:
      "Frontier, DIN-rail, plug-in, analogue, astronomical and day/night timer products.",
    subcategories: [
      "All",
      "Digital & Frontier Timers",
      "DIN Rail Timers",
      "Plug-in Timers",
      "Mechanical Timers",
      "Astronomical & Street Timers",
      "Photocell Sensors",
    ],
  },
  {
    id: "staircase-automation",
    name: "Staircase Automation",
    icon: "Activity",
    catalogueRef: "Smart Motion Sensor Catalogue Pages 46–49",
    description:
      "Staircase controllers, PIR controllers and complete stair motion-light kits.",
    subcategories: ["All", "Staircase Controllers", "Complete Kits"],
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: "Cpu",
    catalogueRef: "Smart Motion Sensor Catalogue Pages 33–37",
    description: "Smart plugs, smart breakers and IR blasters.",
    subcategories: [
      "All",
      "Smart Plugs",
      "Smart Breakers",
      "Universal Blasters",
    ],
  },
];

export const productsData = [

  /* =========================================================
     LUXE SERIES
     ========================================================= */

  {
    id: "luxe-2m-db",
    slug: "luxe-series-2-gang-switch-db",
    title: "Luxe Series : 2 Gang Switch",
    model: "LSW/Z-2M-DB",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Luxe",
    badge: "Luxe Frame",
    image: "/products/catalog/luxe-2m-2s.png",
    shortDesc: "Luxe Series 2 Gang Switch.",
    description:
      "Luxe Series smart touch switch with tempered glass panel and metal frame.",
    specs: {
      "Input Voltage": "100–240VAC 50/60Hz",
      Connection: "N + L line",
      "Wireless Standards": "ZigBee",
      "Panel Material": "Tempered Glass",
      "Frame Material": "Metal frame",
      Protection: "Over Current / Over Voltage Relay OV Switch",
      "Operating Temperature": "-20°C ~ 50°C",
      "Countdown/Schedule": "Supported",
      "Touch Mode": "Bistate / Monostate",
      "Backlight Color": "Red / Blue / White / OFF",
      "Backlight Brightness": "Manual / ALS Auto",
      "Product Color": "Black / White Glass",
      "Frame Color": "Gold / Silver",
    },
    highlights: [
      "Bistate / Monostate touch mode",
      "Schedule support",
      "Gold / Silver frame options",
    ],
    idealFor: "Smart residential and commercial interiors",
    catalogueSource: "Master Catalogue Page 13",
  },

  {
    id: "luxe-2m-2s",
    slug: "luxe-series-2-gang-switch",
title: "Luxe Series : 2 Gang Switch",
    model: "LSW/Z-2M-2S",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Luxe",
    badge: "Luxe Frame",
    image: "/products/catalog/luxe-2m-2s.png",
shortDesc: "Luxe Series 2 Gang Switch.",
description: "Luxe Series 2 Gang Switch.",
specs: {
  "Plate Size": "2 Module",
  "Touch Gangs": "2",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "2 touch controls",
    ],
    idealFor: "General room lighting control",
    catalogueSource: "Master Catalogue Page 13",

quickSpecs: [
  "2 Module",
  "2 Touch Gangs",
  "Tempered Glass"
]},

  {
    id: "luxe-4m-4s",
    slug: "luxe-series-4-gang-switch",
title: "Luxe Series : 4 Gang Switch",
    model: "LSW/Z-4M-4S",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Luxe",
    badge: "Luxe Frame",
    image: "/products/catalog/luxe-4m-4s.png",
shortDesc: "Luxe Series 4 Gang Switch.",
description: "Luxe Series 4 Gang Switch.",
specs: {
  "Plate Size": "4 Module",
  "Touch Gangs": "4",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "4 touch controls",
    ],
    idealFor: "Bedrooms, living rooms and workspaces",
    catalogueSource: "Master Catalogue Page 13",

quickSpecs: [
  "4 Module",
  "4 Touch Gangs",
  "Tempered Glass"
]},

  {
    id: "luxe-4m-2s1u",
    slug: "luxe-series-2-gang-1-socket",
title: "Luxe Series : 2 Gang + 1 Socket",
    model: "LSW/Z-4M-2S1U",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Luxe",
    badge: "Luxe Frame",
    image: "/products/catalog/luxe-4m-2s1u.png",
shortDesc: "Luxe Series 2 Gang + 1 Socket.",
description: "Luxe Series 2 Gang + 1 Socket.",
specs: {
  "Plate Size": "4 Module",
  "Touch Gangs": "2",
  "Sockets": "1 Universal Socket",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "2 touch controls",
      "1 universal socket",
    ],
    idealFor: "Bedside tables and study areas",
    catalogueSource: "Master Catalogue Page 13",

quickSpecs: [
  "4 Module",
  "2 Touch Gangs",
  "1 Universal Socket"
]},

  {
    id: "luxe-6m-8s",
    slug: "luxe-series-6-gang-1-socket",
title: "Luxe Series : 6 Gang + 1 Socket",
    model: "LSW/Z-6M-8S",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Luxe",
    badge: "Luxe Frame",
    image: "/products/catalog/luxe-6m-8s.png",
shortDesc: "Luxe Series 6 Gang + 1 Socket.",
description: "Luxe Series 6 Gang + 1 Socket.",
specs: {
  "Plate Size": "6 Module",
  "Touch Gangs": "6",
  "Sockets": "1 Universal Socket",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "6 touch controls",
      "1 universal socket",
      "Tempered glass panel",
      "Metal frame",
    ],
    idealFor: "Living rooms, master suites and larger spaces",
    catalogueSource: "Master Catalogue Page 13",

quickSpecs: [
  "6 Module",
  "6 Touch Gangs",
  "1 Universal Socket",
  "Tempered Glass"
]},

  {
    id: "luxe-8m-8s",
    slug: "luxe-series-8-gang-switch",
title: "Luxe Series : 8 Gang Switch",
    model: "LSW/Z-8M-8S",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Luxe",
    badge: "Luxe Frame",
    image: "/products/catalog/luxe-8m-8s.png",
shortDesc: "Luxe Series 8 Gang Switch.",
description: "Luxe Series 8 Gang Switch.",
specs: {
  "Plate Size": "8 Module",
  "Touch Gangs": "8",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "8 touch controls",
      "Wide-format panel",
    ],
    idealFor: "Living and dining areas",
    catalogueSource: "Master Catalogue Page 13",

quickSpecs: [
  "8 Module",
  "8 Touch Gangs",
  "Tempered Glass"
]},

  {
    id: "luxe-6m-2s2u",
    slug: "luxe-series-2-gang-2-socket",
title: "Luxe Series : 2 Gang + 2 Socket",
    model: "LSW/Z-6M-2S2U",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Luxe",
    badge: "Luxe Frame",
    image: "/products/catalog/luxe-6m-2s2u.png",
shortDesc: "Luxe Series 2 Gang + 2 Socket.",
description: "Luxe Series 2 Gang + 2 Socket.",
specs: {
  "Plate Size": "6 Module",
  "Touch Gangs": "2",
  "Sockets": "2 Universal Sockets",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "2 touch controls",
      "2 universal sockets",
    ],
    idealFor: "Bedside areas and workstations",
    catalogueSource: "Master Catalogue Page 13",

quickSpecs: [
  "6 Module",
  "2 Touch Gangs",
  "2 Universal Sockets"
]},

  {
    id: "luxe-12m-12s2f",
    slug: "luxe-series-12-gang-switch",
title: "Luxe Series : 12 Gang Switch",
    model: "LSW/Z-12M-12S2F",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Luxe",
    badge: "Luxe Frame",
    image: "/products/catalog/luxe-12m-12s2f.png",
shortDesc: "Luxe Series 12 Gang Switch.",
description: "Luxe Series 12 Gang Switch.",
specs: {
  "Plate Size": "12 Module",
  "Touch Gangs": "12",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "12 touch controls",
    ],
    idealFor: "Large living spaces and master suites",
    catalogueSource: "Master Catalogue Page 13",

quickSpecs: [
  "12 Module",
  "12 Touch Gangs",
  "Tempered Glass"
]},

  {
    id: "luxe-12m-8s1f2u",
    slug: "luxe-series-8-gang-1-fan-2-socket",
title: "Luxe Series : 8 Gang + 1 Fan + 2 Socket",
    model: "LSW/Z-12M-8S1F2U",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Luxe",
    badge: "Luxe Frame",
    image: "/products/catalog/luxe-12m-8s1f2u.png",
shortDesc: "Luxe Series 8 Gang + 1 Fan + 2 Socket.",
description: "Luxe Series 8 Gang + 1 Fan + 2 Socket.",
specs: {
  "Plate Size": "12 Module",
  "Touch Gangs": "8",
  "Fan Controls": "1",
  "Sockets": "2 Universal Sockets",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "8 touch controls",
      "1 fan control",
      "2 universal sockets",
    ],
    idealFor: "Master bedrooms and hospitality rooms",
    catalogueSource: "Master Catalogue Page 13",

quickSpecs: [
  "12 Module",
  "8 Touch Gangs",
  "1 Fan + 2 Universal Sockets"
]},

  /* =========================================================
     AURA SERIES
     ========================================================= */

  {
    id: "aura-2m-2s",
    slug: "aura-series-4-gang-2-socket",
title: "Aura Series : 4 Gang + 2 Socket",
    model: "ASW/Z-2M-2S",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Aura",
    badge: "Aura",
    image: "/products/catalog/aura-2m-2s.png",
shortDesc: "Aura Series 4 Gang + 2 Socket.",
description: "Aura Series 4 Gang + 2 Socket.",
specs: {
  "Plate Size": "2 Module",
  "Touch Gangs": "4",
  "Sockets": "2 Universal Sockets",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "4 touch controls",
      "2 universal sockets",
      "Frameless glass design",
    ],
    idealFor: "Passages, bedrooms and entrance areas",
    catalogueSource: "Master Catalogue Page 15",

quickSpecs: [
  "2 Module",
  "4 Touch Gangs",
  "2 Universal Sockets",
  "Tempered Glass"
]},

  {
    id: "aura-4m-4s",
    slug: "aura-series-12-gang-2-fan",
title: "Aura Series : 12 Gang + 2 Fan",
    model: "ASW/Z-4M-4S",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Aura",
    badge: "Aura",
    image: "/products/catalog/aura-4m-4s.png",
shortDesc: "Aura Series 12 Gang + 2 Fan.",
description: "Aura Series 12 Gang + 2 Fan.",
specs: {
  "Plate Size": "4 Module",
  "Touch Gangs": "12",
  "Fan Controls": "2",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "12 touch controls",
      "2 fan controls",
      "Frameless glass",
    ],
    idealFor: "Bedrooms and study rooms",
    catalogueSource: "Master Catalogue Page 15",

quickSpecs: [
  "4 Module",
  "12 Touch Gangs",
  "2 Fan Controls",
  "Tempered Glass"
]},

  {
    id: "aura-4m-2s1u",
    slug: "aura-series-16-gang-switch",
title: "Aura Series : 16 Gang Switch",
    model: "ASW/Z-4M-2S1U",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Aura",
    badge: "Aura",
    image: "/products/catalog/aura-4m-2s1u.png",
shortDesc: "Aura Series 16 Gang Switch.",
description: "Aura Series 16 Gang Switch.",
specs: {
  "Plate Size": "4 Module",
  "Touch Gangs": "16",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "16 touch controls",
      "Frameless design",
    ],
    idealFor: "Bedside and study areas",
    catalogueSource: "Master Catalogue Page 15",

quickSpecs: [
  "4 Module",
  "16 Touch Gangs",
  "Tempered Glass"
]},

  {
    id: "aura-6m-8s",
    slug: "aura-series-2-gang-switch",
title: "Aura Series : 2 Gang Switch",
    model: "ASW/Z-6M-8S",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Aura",
    badge: "Aura",
    image: "/products/catalog/aura-6m-8s.png",
shortDesc: "Aura Series 2 Gang Switch.",
description: "Aura Series 2 Gang Switch.",
specs: {
  "Plate Size": "6 Module",
  "Touch Gangs": "2",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "2 touch controls",
      "Frameless tempered glass",
    ],
    idealFor: "Living spaces and master bedrooms",
    catalogueSource: "Master Catalogue Page 15",

quickSpecs: [
  "6 Module",
  "2 Touch Gangs",
  "Tempered Glass"
]},

  {
    id: "aura-8m-8s",
    slug: "aura-series-6-gang-switch",
title: "Aura Series : 6 Gang Switch",
    model: "ASW/Z-8M-8S",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Aura",
    badge: "Aura",
    image: "/products/catalog/aura-8m-8s.png",
shortDesc: "Aura Series 6 Gang Switch.",
description: "Aura Series 6 Gang Switch.",
specs: {
  "Plate Size": "8 Module",
  "Touch Gangs": "6",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "6 touch controls",
      "Wide horizontal layout",
    ],
    idealFor: "Living and dining areas",
    catalogueSource: "Master Catalogue Page 15",

quickSpecs: [
  "8 Module",
  "6 Touch Gangs",
  "Tempered Glass"
]},

  {
    id: "aura-6m-2s2u",
    slug: "aura-series-1-gang-ac-switch",
title: "Aura Series : 1 Gang AC Switch",
    model: "ASW/Z-6M-2S2U",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Aura",
    badge: "Aura",
    image: "/products/catalog/aura-6m-2s2u.png",
shortDesc: "Aura Series 1 Gang AC Switch.",
description: "Aura Series 1 Gang AC Switch.",
specs: {
  "Plate Size": "6 Module",
  "Touch Gangs": "1",
  "Special Feature": "High-Load AC Switch",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "1 gang AC control",
      "Frameless design",
    ],
    idealFor: "Air conditioning units and heavy loads",
    catalogueSource: "Master Catalogue Page 15",

quickSpecs: [
  "6 Module",
  "1 Gang AC Switch",
  "High Load Capacity"
]},

  {
    id: "aura-12m-12s2f",
    slug: "aura-series-6-gang-1-fan",
title: "Aura Series : 6 Gang + 1 Fan",
    model: "ASW/Z-12M-12S2F",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Aura",
    badge: "Aura",
    image: "/products/catalog/aura-12m-12s2f.png",
shortDesc: "Aura Series 6 Gang + 1 Fan.",
description: "Aura Series 6 Gang + 1 Fan.",
specs: {
  "Plate Size": "12 Module",
  "Touch Gangs": "6",
  "Fan Controls": "1",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "6 touch controls",
      "1 fan control",
    ],
    idealFor: "Large living spaces and master suites",
    catalogueSource: "Master Catalogue Page 15",

quickSpecs: [
  "12 Module",
  "6 Touch Gangs",
  "1 Fan Control"
]},

  {
    id: "aura-12m-8s1f2u",
    slug: "aura-series-10-gang-switch",
title: "Aura Series : 10 Gang Switch",
    model: "ASW/Z-12M-8S1F2U",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Aura",
    badge: "Aura",
    image: "/products/catalog/aura-12m-8s1f2u.png",
shortDesc: "Aura Series 10 Gang Switch.",
description: "Aura Series 10 Gang Switch.",
specs: {
  "Plate Size": "12 Module",
  "Touch Gangs": "10",
  "Panel Material": "Tempered Glass"
},
    highlights: [
      "10 touch controls",
    ],
    idealFor: "Master suites and hospitality spaces",
    catalogueSource: "Master Catalogue Page 15",

quickSpecs: [
  "12 Module",
  "10 Touch Gangs",
  "Tempered Glass"
]},

  /* =========================================================
     CANVAS SERIES
     ========================================================= */

  {
    id: "canvas-wooden",
    slug: "canvas-series-wooden",
    title: "Canvas Series : Wooden",
    model: "OC-CVS-WOOD",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Canvas",
    badge: "Canvas",
    image: "/products/catalog/canvas-wooden.png",
    shortDesc: "Canvas Series wooden finish.",
    description:
      "Canvas Series customizable touch panel with wooden finish.",
    specs: {
      Material: "Wooden",
      Connectivity: "ZigBee / Wi-Fi",
    },
    highlights: [
      "Wooden finish",
      "Customizable design",
    ],
    idealFor: "Wooden interiors",
    catalogueSource: "Master Catalogue Page 16",
  },

  {
    id: "canvas-marble",
    slug: "canvas-series-marble",
    title: "Canvas Series : Marble",
    model: "OC-CVS-MARBLE",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Canvas",
    badge: "Canvas",
    image: "/products/catalog/canvas-veneer.png",
    shortDesc: "Canvas Series marble finish.",
    description:
      "Canvas Series customizable touch panel with marble finish.",
    specs: {
      Material: "Marble",
      Connectivity: "ZigBee / Wi-Fi",
    },
    highlights: [
      "Marble finish",
      "Customizable design",
    ],
    idealFor: "Marble interiors",
    catalogueSource: "Master Catalogue Page 16",
  },

  {
    id: "canvas-veneer",
    slug: "canvas-series-veneer",
    title: "Canvas Series : Veneer",
    model: "OC-CVS-VENEER",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Canvas",
    badge: "Canvas",
    image: "/products/catalog/canvas-glossy.png",
    shortDesc: "Canvas Series veneer finish.",
    description:
      "Canvas Series customizable touch panel with veneer finish.",
    specs: {
      Material: "Veneer",
      Connectivity: "ZigBee / Wi-Fi",
    },
    highlights: [
      "Veneer finish",
      "Customizable design",
    ],
    idealFor: "Wood-panelled interiors",
    catalogueSource: "Master Catalogue Page 16",
  },

  {
    id: "canvas-matt",
    slug: "canvas-series-matt",
    title: "Canvas Series : Matt",
    model: "OC-CVS-MATT",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Canvas",
    badge: "Canvas",
    image: "/products/catalog/canvas-marble.png",
    shortDesc: "Canvas Series matt finish.",
    description:
      "Canvas Series customizable touch panel with matt finish.",
    specs: {
      Material: "Matt",
      Connectivity: "ZigBee / Wi-Fi",
    },
    highlights: [
      "Matt finish",
      "Customizable design",
    ],
    idealFor: "Contemporary interiors",
    catalogueSource: "Master Catalogue Page 16",
  },

  {
    id: "canvas-glossy",
    slug: "canvas-series-glossy",
    title: "Canvas Series : Glossy",
    model: "OC-CVS-GLOSS",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Canvas",
    badge: "Canvas",
    image: "/products/catalog/canvas-matt.png",
    shortDesc: "Canvas Series glossy finish.",
    description:
      "Canvas Series customizable touch panel with glossy finish.",
    specs: {
      Material: "Glossy",
      Connectivity: "ZigBee / Wi-Fi",
    },
    highlights: [
      "Glossy finish",
      "Customizable design",
    ],
    idealFor: "Luxury contemporary interiors",
    catalogueSource: "Master Catalogue Page 16",
  },

  /* =========================================================
     RETROFIT
     ========================================================= */

  {
    id: "retrofit-oc-sls-4g",
    slug: "wifi-10a-circuit-breaker-2-way-4g",
    title: "Wifi- 10A Circuit Breaker 2 Way - 4G",
    model: "OC-SLS-4G-W / OC-SLS-4G-Z",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Retrofit Modules",
    badge: "Retrofit Module",
    image: "/products/catalog/retrofit-oc-sls-4g.png",
    shortDesc: "Wi-Fi 10A Circuit Breaker 2 Way - 4G.",
    description:
      "Retrofit relay module for controlling electrical loads.",
    specs: {
      "Supported Load Type": "Lights, AC, Fan, TV, Anything",
      "Channel Configuration": "4 Channel Relay",
      "Communication Protocol": "Zigbee / Wi-Fi",
    },
    highlights: [
      "4-channel relay module",
      "2-way switching support",
    ],
    idealFor: "Retrofit smart switching",
    catalogueSource: "Master Catalogue Page 19",
  },

  {
    id: "retrofit-oc-sls-4gz",
    slug: "zigbee-4-gang-5a-mini-smart-breaker",
    title: "Zigbee 4 Gang 5A mini smart breaker",
    model: "OC-SLS-4G-Z",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Retrofit Modules",
    badge: "Retrofit Module",
    image: "/products/catalog/retrofit-oc-sls-4gz.png",
    shortDesc: "Zigbee 4 Gang 5A Mini Smart Breaker.",
    description:
      "Zigbee 4 Gang 5A mini smart breaker.",
    specs: {
      "Current Rating": "5A",
      Channels: "4",
      Protocol: "Zigbee",
    },
    highlights: [
      "4-channel smart breaker",
      "Zigbee communication",
    ],
    idealFor: "Lighting and appliance control",
    catalogueSource: "Master Catalogue Page 19",
  },

  {
    id: "retrofit-oc-sls-1g",
    slug: "wifi-16a-circuit-breaker-2-way-1-gang",
    title: "Wifi- 16 A Circuit Breaker - 2 Way - 1 gang/ Zigbee 1 Gang 16A mini smart breaker",
    model: "OC-SLS-1G-W / OC-SLS-1G-Z",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Retrofit Modules",
    badge: "Retrofit Module",
    image: "/products/catalog/retrofit-oc-sls-1g.png",
    shortDesc: "Wi-Fi 16A Circuit Breaker 2 Way - 1 Gang.",
    description:
      "Single-gang 16A retrofit smart breaker.",
    specs: {
      "Current Rating": "16A",
      Channels: "1",
      "Communication Protocol": "Zigbee / Wi-Fi",
    },
    highlights: [
      "16A switching",
      "1-channel design",
      "2-way switching",
    ],
    idealFor: "Individual appliance control",
    catalogueSource: "Master Catalogue Page 19",
  },

  {
    id: "retrofit-oc-sls-2g",
    slug: "wifi-16a-circuit-breaker-2-way-2g",
    title: "Wifi- 16A Circuit Breaker 2 Way - 2G/Zigbee 2 Gang 16A mini smart breker",
    model: "OC-SLS-2G-W / OC-SLS-2G-Z",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Retrofit Modules",
    badge: "Retrofit Module",
    image: "/products/catalog/retrofit-oc-sls-2g.png",
    shortDesc: "Wi-Fi 16A Circuit Breaker 2 Way - 2G.",
    description:
      "Two-gang 16A retrofit smart breaker.",
    specs: {
      "Current Rating": "16A",
      Channels: "2",
      "Communication Protocol": "Zigbee / Wi-Fi",
    },
    highlights: [
      "16A switching",
      "2-channel design",
      "2-way switching",
    ],
    idealFor: "Two independent appliance circuits",
    catalogueSource: "Master Catalogue Page 19",
  },
  /* =========================================================
   SMART CONTROL PANELS
   ========================================================= */

  {
    id: "panel-oc-cp-6",
    slug: "infinity-6-smart-wifi-touch-control-panel",
    title: "(Infinity) - 6\" Smart Wi-Fi Touch Control Panel With Knob Control + Zigbee Gateway + Video Calling + Built in 2 Relay Switch",
    model: "OC-CP-6”",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Control Panels",
    badge: "Infinity",
    image: "/products/catalog/panel-oc-cp-6.png",
    shortDesc:
      "6” Smart Wi-Fi Touch Control Panel with Knob Control, Zigbee Gateway, Video Calling and built-in 2 Relay Switch.",
    description:
      "Smart Wi-Fi touch control panel with knob control, built-in Zigbee gateway, video calling and two relay switches.",
    specs: {
      Screen: "6”",
      "Control Type": "Touch + Knob Control",
      Gateway: "Zigbee Gateway",
      "Video Calling": "Supported",
      Relays: "Built-in 2 Relay Switch",
      Connectivity: "Wi-Fi / Zigbee",
    },
    highlights: [
      "6” smart touch display",
      "Knob control",
      "Built-in Zigbee gateway",
      "Video calling",
      "2 built-in relay switches",
    ],
    idealFor: "Smart home control applications",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "panel-oc-cp-4",
    slug: "homesync-pro-4-smart-wifi-touch-panel",
    title: "(HomeSync Pro) - 4\" Smart Wi-Fi Touch Control Panel With Built In Alexa + Zigbee + BLE Mesh Gateway + Video Calling",
    model: "OC-CP-4”",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Control Panels",
    badge: "HomeSync Pro",
    image: "/products/catalog/panel-oc-cp-4.png",
    shortDesc:
      "4” Smart Wi-Fi Touch Control Panel with built-in Alexa, Zigbee + BLE Mesh Gateway and Video Calling.",
    description:
      "4” smart Wi-Fi touch control panel with built-in Alexa, Zigbee and BLE Mesh gateway and video calling.",
    specs: {
      Screen: "4”",
      Voice: "Built-in Alexa",
      Gateway: "Zigbee + BLE Mesh Gateway",
      "Video Calling": "Supported",
      Connectivity: "Wi-Fi / Zigbee / BLE Mesh",
    },
    highlights: [
      "4” smart touch display",
      "Built-in Alexa",
      "Zigbee gateway",
      "BLE Mesh gateway",
      "Video calling",
    ],
    idealFor: "Smart room and home control",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "panel-oc-cp-35",
    slug: "35-smart-zigbee-touch-control-screen",
    title: "3.5\" Smart Zigbee Touch Control Screen + 4 Gang Relay Support Curtain, Dimming and Scene",
    model: "OC-CP-3.5”",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Control Panels",
    badge: "Smart ControlScreen",
    image: "/products/catalog/panel-oc-cp-35.png",
    shortDesc:
      "3.5” Smart Zigbee Touch ControlScreen + 4 Gang Relay supporting Curtain, Dimming and Scene.",
    description:
      "3.5” Smart Zigbee touch control screen with four gang relay control supporting curtains, dimming and scenes.",
    specs: {
      Screen: "3.5”",
      Protocol: "Zigbee",
      Relays: "4 Gang Relay",
      Functions: "Curtain / Dimming / Scene",
    },
    highlights: [
      "3.5” touch control screen",
      "4 gang relay",
      "Curtain control",
      "Dimming support",
      "Scene support",
    ],
    idealFor: "Room and hospitality control",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "panel-oc-ssm-cct",
    slug: "zigbee-smart-cct-dimming-tunable-knob-with-display",
    title: "Zigbee - Smart CCT Dimming + Tunable Knob With Display + 2 Node Scene Switches",
    model: "OC-SSM-CCT",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Control Panels",
    badge: "OLED Knob",
    image: "/products/catalog/panel-oc-ssm-cct.png",
    shortDesc:
      "Zigbee smart CCT dimming and tunable knob with display and 2 node scene switches.",
    description:
      "Zigbee smart CCT dimming controller with tunable knob, display and two node scene switches.",
    specs: {
      Protocol: "Zigbee",
      Control: "Smart CCT Dimming + Tunable Knob",
      Display: "Display",
      "Scene Switches": "2 Node",
    },
    highlights: [
      "CCT dimming control",
      "Tunable knob",
      "Integrated display",
      "2 scene switches",
    ],
    idealFor: "Smart lighting control",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "panel-oc-ssm-4g",
    slug: "zigbee-4-gang-12-scene-creator",
    title: "Zigbee - 4 Gang 12 Scene Creator with Magnetic Wall Plate",
    model: "OC-SSM-4G",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Control Panels",
    badge: "Scene Creator",
    image: "/products/catalog/panel-oc-ssm-4g.png",
    shortDesc:
      "Zigbee 4 Gang 12 Scene Creator with magnetic wall plate.",
    description:
      "Zigbee four-gang scene controller with magnetic wall plate for scene creation.",
    specs: {
      Protocol: "Zigbee",
      Gangs: "4 Gang",
      Scenes: "12 Scene Creator",
      Mounting: "Magnetic Wall Plate",
    },
    highlights: [
      "4 gang control",
      "12 scene actions",
      "Magnetic wall plate",
    ],
    idealFor: "Scene control around the home",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "panel-oc-ssm-dis",
    slug: "zircon-4-gang-with-display",
    title: "Zircon - 4 Gang with Display",
    model: "OC-SSM-Dis.",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Control Panels",
    badge: "Zircon",
    image: "/products/catalog/panel-oc-ssm-dis.png",
    shortDesc:
      "Zircon 4 gang smart panel with display.",
    description:
      "Zircon 4 gang smart control panel with display.",
    specs: {
      Protocol: "Zigbee / Wi-Fi",
      Gangs: "4 Gang",
      Display: "Integrated Display",
    },
    highlights: [
      "4 gang controls",
      "Integrated display",
    ],
    idealFor: "Room control applications",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "panel-oc-ssm-4g4s",
    slug: "zircon-4-gang-4-scene",
    title: "Zircon - 4 Gang + 4 Scene",
    model: "OC-SSM-4G4S",
    category: "Smart Touch Panels",
    categorySlug: "smart-touch-panels",
    subcategory: "Control Panels",
    badge: "Zircon",
    image: "/products/catalog/panel-oc-ssm-4g4s.png",
    shortDesc:
      "Zircon 4 Gang + 4 Scene smart control panel.",
    description:
      "Zircon smart control panel combining four gang controls and four scene controls.",
    specs: {
      Protocol: "Zigbee / Wi-Fi",
      "Gang Controls": "4",
      "Scene Controls": "4",
    },
    highlights: [
      "4 gang controls",
      "4 scene controls",
    ],
    idealFor: "Living rooms and smart scene control",
    catalogueSource: "Master Catalogue Page 41",
  },

/* =========================================================
   DOOR LOCKS — SMART DOOR LOCKS
   ========================================================= */

  {
    id: "doorlock-series-1",
    slug: "series-1-smart-door-lock",
    title: "Series 1 Smart Door Lock",
    model: "OC-DL01-W",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Smart Door Locks",
    badge: "Series 1",
    image: "/products/catalog/lock-series-1.png",
    shortDesc:
      "Series 1 WiFi Smart Biometric Door Lock with app support, fingerprint, RFID, passcode and mechanical key.",
    description:
      "Series 1 Smart Door Lock with biometric access and app-supported smart entry.",
    specs: {
      "Available Colour": "Black / Metal Grey / Black ETC.",
      "Door Thickness": "38–120 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "4 x AAA 1.5V batteries",
      Charging: "Support USB Power",
      "Unlock Modes":
        "Keys / APP / Fingerprint / Password / RFID / OTP",
      Dimensions: "70 x 70 x 26 mm",
      Network: "Zigbee / Wi-Fi 2.4G",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 6V/500mAh",
      "VDP Integration": "Yes",
    },
    highlights: [
      "Fingerprint unlocking",
      "Password unlocking",
      "RFID card unlocking",
      "Mobile application",
      "Mechanical key",
      "OTP unlocking",
    ],
    idealFor: "Homes and modern workspaces",
    catalogueSource: "Digital Door Locks Catalogue Page 4",
  },

  {
    id: "doorlock-series-1-pro",
    slug: "series-1-pro-smart-door-lock",
    title: "Series 1 Pro Smart Door Lock",
    model: "OC-DL01-W",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Smart Door Locks",
    badge: "Series 1 Pro",
    image: "/products/catalog/lock-series-1-pro.png",
    shortDesc:
      "Series 1 Pro Smart Door Lock with fingerprint, RFID, passcode and mechanical key.",
    description:
      "Series 1 Pro Smart Door Lock with biometric and smart access features.",
    specs: {
      "Available Colour": "Black / Metal Grey / Black ETC.",
      "Door Thickness": "38–120 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "4 x AAA 1.5V batteries",
      Charging: "Support USB Power",
      "Unlock Modes":
        "Keys / APP / Fingerprint / Passcode / RFID",
      Dimensions: "70 x 70 x 26 mm",
      Network: "Zigbee / Wi-Fi 2.4G",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 6V/500mAh",
      "VDP Integration": "Yes",
    },
    highlights: [
      "Fingerprint unlocking",
      "Passcode unlocking",
      "RFID card unlocking",
      "Mobile application",
      "Mechanical key",
    ],
    idealFor: "Premium residential and executive entrances",
    catalogueSource: "Digital Door Locks Catalogue Page 5",
  },

  {
    id: "doorlock-series-3-pro",
    slug: "series-3-smart-door-lock",
    title: "Series 3 Pro Smart Door Lock",
    model: "OC-DL01-W",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Smart Door Locks",
    badge: "Series 3",
    image: "/products/catalog/lock-series-3-pro.png",
    shortDesc:
      "Series 3 Smart Door Lock with face recognition, fingerprint, app and other access methods.",
    description:
      "Series 3 Smart Door Lock with face recognition and smart access functions.",
    specs: {
      "Face Recognition": "Yes",
      "Available Colour": "Black / Metal Grey / Black ETC.",
      "Door Thickness": "38–120 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "Rechargeable Batteries",
      Charging: "Support USB Power",
      "Unlock Modes":
        "Face Recognition / Keys / APP / Fingerprint / Password / RFID / OTP",
      Dimensions: "70 x 70 x 26 mm",
      Network: "Zigbee / Wi-Fi 2.4G",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 6V/4200mAh",
      "Active Smart Bind": "Yes",
    },
    highlights: [
      "3D face recognition",
      "Fingerprint unlocking",
      "Password unlocking",
      "RFID card unlocking",
      "Mobile application",
      "OTP unlocking",
    ],
    idealFor: "Smart homes and high-security residential entrances",
    catalogueSource: "Digital Door Locks Catalogue Page 6",
  },

  {
    id: "doorlock-series-4",
    slug: "series-4-smart-door-lock",
    title: "Series 4 Smart Door Lock",
    model: "OC-DL01-W",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Smart Door Locks",
    badge: "Series 4",
    image: "/products/catalog/lock-series-4.png",
    shortDesc:
      "Series 4 Smart Door Lock with automatic push-pull mechanism and face recognition.",
    description:
      "Series 4 Smart Door Lock with automatic push-pull operation and biometric access.",
    specs: {
      "Face Recognition": "Advanced 3D Facial Recognition",
      Mechanism: "Fully Automatic Push-Pull Mortise",
      "Available Colour": "Black / Metal Grey / Black ETC.",
      "Door Thickness": "38–120 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "Rechargeable Batteries",
      Charging: "Support USB Power",
      "Unlock Modes":
        "Face Recognition / Keys / APP / Fingerprint / Password / RFID / OTP",
      Dimensions: "70 x 70 x 26 mm",
      Network: "Wi-Fi 2.4G",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 6V/4800mAh",
      "Active Smart Bind": "No",
    },
    highlights: [
      "3D face recognition",
      "Fingerprint unlocking",
      "Automatic push-pull mechanism",
      "Rechargeable battery",
      "OTP access",
    ],
    idealFor: "Premium residential entrances",
    catalogueSource: "Digital Door Locks Catalogue Page 7",
  },

  /* =========================================================
     SPECIALTY & METAL LOCKS
     ========================================================= */

  {
    id: "doorlock-al-upvc",
    slug: "al-upvc-smart-door-lock",
    title: "AL-UPVC Smart Door Lock",
    model: "AL-UPVC Series",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Specialty & Metal Locks",
    badge: "AL-UPVC",
    image: "/products/catalog/lock-al-upvc.png",
    shortDesc:
      "Smart lock specially designed for aluminium and uPVC narrow-stile doors.",
    description:
      "Smart door lock specially designed for aluminium and uPVC doors.",
    specs: {
      "Special Application": "Aluminium and uPVC Narrow-Stile Doors",
      "Available Colour": "Black / Metal Grey / Black ETC.",
      "Door Thickness": "35–115 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "4 x AAA 1.5V batteries",
      Charging: "Support USB Power",
      "Unlock Modes":
        "Fingerprint / PIN / RFID / Mobile App / Bluetooth / Manual Key",
      Dimensions: "22.5 x 10.5 x 35.5 cm",
      Network: "Wi-Fi 2.4G",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 6V/500mAh",
      "VDP Integration": "Yes",
    },
    highlights: [
      "Designed for aluminium doors",
      "Designed for uPVC doors",
      "Fingerprint access",
      "PIN access",
      "RFID access",
      "Mobile app access",
      "Bluetooth access",
      "Manual key",
    ],
    idealFor: "Aluminium and uPVC doors",
    catalogueSource: "Digital Door Locks Catalogue Page 8",
  },

  {
    id: "doorlock-metal",
    slug: "metal-smart-door-lock",
    title: "Metal Smart Door Lock",
    model: "Metal Door Series",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Specialty & Metal Locks",
    badge: "Metal Door",
    image: "/products/catalog/lock-metal.png",
    shortDesc:
      "Smart door lock designed for metal doors, steel gates and iron entrances.",
    description:
      "Smart door lock designed for metal doors, steel gates and iron entrances.",
    specs: {
      Application: "Metal Doors, Steel Gates, Iron Entrances",
      "Available Colour": "Black / Metal Grey / Black ETC.",
      "Door Thickness": "25–140 mm",
      "Handle Direction": "Reversible (Mechanically)",
      "Power Supply": "4 x AAA 1.5V batteries",
      Charging: "Support USB Power",
      "Unlock Modes":
        "Fingerprint / PIN / RFID / Mobile App / Bluetooth / Manual Key",
      Dimensions: "37 x 15 x 12 cm",
      Network: "Wi-Fi",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 6V/500mAh",
      "VDP Integration": "Yes",
    },
    highlights: [
      "Designed for metal doors",
      "Designed for steel gates",
      "Fingerprint access",
      "PIN access",
      "RFID access",
      "Mobile app",
      "Bluetooth",
      "Manual key",
    ],
    idealFor: "Metal doors, steel gates and iron entrances",
    catalogueSource: "Digital Door Locks Catalogue Page 9",
  },

  {
    id: "doorlock-glass-g1",
    slug: "glass-g1-smart-door-lock",
    title: "GLASS G1 SMART DOOR LOCK",
    model: "OC-DL01-W",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Specialty & Metal Locks",
    badge: "Glass G1",
    image: "/products/catalog/lock-glass-g1.png",
    shortDesc:
      "Smart door lock for 10–12 mm glass doors with fingerprint, PIN, RFID, app, remote and key access.",
    description:
      "Smart door lock designed for glass doors.",
    specs: {
      "Lock Type": "Hook Mortise",
      "Unlocking Options":
        "Mobile App / Manual Key / Remote Unlock / Password/PIN / RFID Card / Fingerprint / OTP",
      "Ideal For": "Home and Office",
      "Door Thickness": "10–12 mm",
      Weight: "2 kg",
      Material: "PC Flame Retardant + High-Strength Alloy",
      "Power Supply": "4 x AA batteries",
      Dimensions: "40 x 480 x 26 mm",
      Network: "Wi-Fi 2.4G",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 6V/2200mAh",
      "Active Smart Bind": "No",
    },
    highlights: [
      "Glass door application",
      "Fingerprint access",
      "PIN access",
      "RFID access",
      "Mobile application",
      "Remote unlocking",
      "Manual key",
      "OTP unlocking",
    ],
    idealFor: "Glass doors in homes and offices",
    catalogueSource: "Digital Door Locks Catalogue Page 10",
  },

  {
    id: "doorlock-round",
    slug: "round-smart-door-lock",
    title: "Round Smart Door Lock",
    model: "Round Series",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Specialty & Metal Locks",
    badge: "Round",
    image: "/products/catalog/lock-round.png",
    shortDesc:
      "Round smart door lock with fingerprint and application-based access.",
    description:
      "Round Smart Door Lock with fingerprint access and application control.",
    specs: {
      "Lock Type": "Mortise",
      "Unlocking Options":
        "Manual Key / Fingerprint / Application",
      "Ideal For": "Home and Office",
      "Door Thickness": "35–90 mm",
      Weight: "0.11 kg",
      Material: "PC Flame Retardant + Alloy",
      "Power Source": "Rechargeable Batteries",
      Dimensions: "15.0 x 8.5 x 7.5 cm",
      Network: "Bluetooth / Wi-Fi",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 3V/400mAh",
      "Active Smart Bind": "No",
    },
    highlights: [
      "Fingerprint protected",
      "Manual key",
      "Wi-Fi / Bluetooth connectivity",
      "Mobile application",
    ],
    idealFor: "Home and office doors",
    catalogueSource: "Digital Door Locks Catalogue Page 12",
  },

  {
    id: "doorlock-handle",
    slug: "handle-smart-door-lock",
    title: "Handle Smart Door Lock",
    model: "Handle Series",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Specialty & Metal Locks",
    badge: "Handle",
    image: "/products/catalog/lock-handle.png",
    shortDesc:
      "Handle Smart Door Lock with fingerprint, password, RFID and manual-key access.",
    description:
      "Handle Smart Door Lock with integrated access controls.",
    specs: {
      "Lock Type": "Mortise",
      "Unlocking Options":
        "Manual Key / Password / RFID Card / Fingerprint",
      "Ideal For": "Home and Office",
      "Door Thickness": "35–90 mm",
      Weight: "0.25 kg",
      Material: "PC Flame Retardant + Alloy",
      "Power Source": "Rechargeable Batteries",
      Dimensions: "8 x 5 x 6 mm",
      Network: "NA",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 3V/2800mAh",
      "Active Smart Bind": "No",
    },
    highlights: [
      "Fingerprint protected",
      "Password protected",
      "RFID card access",
      "Manual key",
      "Wi-Fi / Bluetooth connectivity",
    ],
    idealFor: "Home and office doors",
    catalogueSource: "Digital Door Locks Catalogue Page 11",
  },

  /* =========================================================
     CABINET LOCKS
     ========================================================= */

  {
    id: "doorlock-cabinet-nfc",
    slug: "cabinet-smart-nfc-lock",
    title: "Cabinet Smart NFC Lock",
    model: "Cabinet NFC Series",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Cabinet Locks",
    badge: "NFC",
    image: "/products/catalog/lock-cabinet-nfc.png",
    shortDesc:
      "Cabinet Smart NFC Lock with NFC/RFID card unlocking, Bluetooth application and voice commands.",
    description:
      "Smart cabinet lock with NFC/RFID card unlocking and Bluetooth application control.",
    specs: {
      "Lock Type": "Mortise",
      "Unlocking Options":
        "Bluetooth (App Control) + NFC + RFID",
      "Ideal For": "Cabinets",
      "Door Thickness": "35–90 mm",
      Weight: "0.20 kg",
      Material: "ABS Plastic",
      "Power Source": "Rechargeable Batteries",
      Dimensions: "15 x 15 x 8 cm",
      Network: "Bluetooth",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 3V/400mAh",
      "Active Smart Bind": "No",
    },
    highlights: [
      "NFC + RFID card unlocking",
      "Bluetooth connectivity",
      "Mobile application",
      "Voice commands",
    ],
    idealFor: "Cabinets",
    catalogueSource: "Digital Door Locks Catalogue Page 13",
  },

  {
    id: "doorlock-cabinet-fingerprint",
    slug: "cabinet-fingerprint-smart-lock",
    title: "Cabinet Fingerprint Smart Lock",
    model: "Cabinet FP Series",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Cabinet Locks",
    badge: "Fingerprint",
    image: "/products/catalog/lock-cabinet-fingerprint.png",
    shortDesc:
      "Cabinet Fingerprint Smart Lock with fingerprint and Bluetooth application access.",
    description:
      "Compact cabinet smart lock with fingerprint and Bluetooth application control.",
    specs: {
      "Lock Type": "Hook Mechanism",
      "Unlocking Options":
        "Bluetooth (App Control) / Fingerprint",
      "Ideal For": "Cabinets",
      "Door Thickness": "12–16 mm",
      Weight: "0.30 kg",
      Material: "ABS Plastic",
      "Power Source": "3 x Double AA batteries",
      Dimensions: "8 × 8 × 8 cm",
      Network: "Bluetooth",
      "IEEE Standard": "802.11 b/g/n",
      "Power Interface": "Type-C USB",
      "Power Input": "DC 3.7V",
      "Active Smart Bind": "No",
    },
    highlights: [
      "Fingerprint protected",
      "Bluetooth connectivity",
      "Mobile application",
    ],
    idealFor: "Cabinets",
    catalogueSource: "Digital Door Locks Catalogue Page 14",
  },

  /* =========================================================
     GATE & GARAGE MOTORS
     ========================================================= */

  {
    id: "motor-garage-shutter",
    slug: "garage-shutter-motor",
    title: "Garage Shutter Motor",
    model: "GSM-1200N",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Gate & Garage Motors",
    badge: "1200N",
    image: "/products/catalog/motor-garage-shutter.png",
    shortDesc:
      "Garage Shutter Motor with 1200N force and automation control.",
    description:
      "Garage shutter automation motor for automated garage doors.",
    specs: {
      "Power Supply": "220–240 VAC",
      "Motor Power": "24 V AC / 120 W",
      Force: "1200N",
      "Max Door Area": "16 Sqm",
      "Running Speed": "12–15 cm/s",
      "Remote Distance": "≥ 30 m",
      "Maximum Transmitters": "25",
      "Working Temperature": "-20°C ~ +50°C",
      "Door Panel": "Pre-Painted Galvalume Finger Safe 40mm",
      "PU Infill": "Polyurethane",
      Shaft: "Tubular Shaft System",
      Drums: "Standard Lift Drums",
      Track: "Galvanized Vertical & Horizontal Tracks",
      Certification: "TÜV & CE",
      Standard: "EN 13241-1",
    },
    highlights: [
      "1200N force",
      "Up to 16 sqm door area",
      "Remote control",
      "Mobile application",
      "RFID cards",
      "Manual keys",
    ],
    idealFor: "Garage door automation",
    catalogueSource: "Digital Door Locks Catalogue Page 15",
  },

  {
    id: "motor-swing-arm",
    slug: "automated-door-motor",
    title: "Automated Door Motor",
    model: "ADM-SWING-600",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Gate & Garage Motors",
    badge: "300–600 KG",
    image: "/products/catalog/motor-swing-arm.png",
    shortDesc:
      "Automated Door Motor available in 300 KG, 400 KG, 500 KG and 600 KG capacities.",
    description:
      "Automated door motor designed for swing and heavy-duty doors.",
    specs: {
      Capacity:
        "300 KG / 400 KG / 500 KG / 600 KG",
      "Motor Performance": "High-Torque Motor",
      Operation: "Smooth & Silent",
      "Control Compatibility":
        "Remote / Mobile App / Smart Control",
      "Safety System": "Auto Stop & Obstacle Detection",
      Accessories:
        "Flashing Light / Photocell / Wireless Keypad / Solar Panel System / Wi-Fi Remote",
      Construction: "Weather-Resistant & Durable",
      Application:
        "Residential / Commercial / Industrial Doors",
      Maintenance: "Low Maintenance & Long Service Life",
    },
    highlights: [
      "300–600 KG capacity options",
      "High-torque motor",
      "Auto stop",
      "Obstacle detection",
      "Remote control",
      "Mobile app control",
    ],
    idealFor: "Swing gates and heavy doors",
    catalogueSource: "Digital Door Locks Catalogue Page 17",
  },

  {
    id: "motor-sliding-gate",
    slug: "automated-slider-motor",
    title: "Automated Slider Motor",
    model: "ASM-SLIDE-1500",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Gate & Garage Motors",
    badge: "800–1500 KG",
    image: "/products/catalog/motor-sliding-gate.png",
    shortDesc:
      "Automated Slider Motor available in 800 KG, 1000 KG, 1200 KG and 1500 KG capacities.",
    description:
      "Automated sliding gate motor for heavy sliding gates.",
    specs: {
      Capacity:
        "800 KG / 1000 KG / 1200 KG / 1500 KG",
      "Drive Mechanism": "Heavy-Duty Gear Drive Mechanism",
      Operation: "Smooth & Silent Sliding Gate Operation",
      "Control Modes":
        "Remote / Mobile App / Smart Access Control",
      "Safety System": "Auto Stop & Obstacle Detection",
      Construction: "Weatherproof & Durable",
      "Motor Type": "High Torque Motor",
      Application:
        "Residential / Commercial / Industrial Gates",
      Maintenance: "Low Maintenance & Long Service Life",
    },
    highlights: [
      "800–1500 KG capacity",
      "Heavy-duty gear drive",
      "Auto stop",
      "Obstacle detection",
      "Remote control",
      "Mobile application",
    ],
    idealFor: "Heavy sliding gates",
    catalogueSource: "Digital Door Locks Catalogue Page 18",
  },

  {
    id: "motor-swing-wheel",
    slug: "swing-wheel-door-motors",
    title: "Swing Wheel Door Motors",
    model: "SWM-WHEEL-500",
    category: "DOOR Locks",
    categorySlug: "door-locks",
    subcategory: "Gate & Garage Motors",
    badge: "500 KG",
    image: "/products/catalog/motor-swing-wheel.png",
    shortDesc:
      "Swing Wheel Door Motors with up to 500 KG payload capacity per leaf.",
    description:
      "Wheel-based gate automation motor for large and heavy swing gates.",
    specs: {
      "Payload Capacity":
        "Up to 500 KG per leaf",
      "Drive Wheels":
        "High-Grip Industrial Tyres",
      "Ideal Gate Types":
        "Large & Heavy Gates",
      Operation: "Smooth, Stable & Silent",
      "Control Systems":
        "Remote / Mobile App / Smart Access Control",
      "Safety Function":
        "Obstacle Detection & Auto-Reverse",
      "Locking Mechanism": "Auto Lock",
      "Weather Rating": "Weatherproof",
      "Manual Override": "Manual Key Release",
      "Voltage Stability": "Wide Voltage Range",
      Maintenance: "Low Maintenance & Long Operational Life",
    },
    highlights: [
      "Up to 500 KG capacity per leaf",
      "High-grip wheels",
      "Auto lock",
      "Obstacle detection",
      "Auto reverse",
      "Manual release",
    ],
    idealFor: "Large swing gates",
    catalogueSource: "Digital Door Locks Catalogue Page 19",
  },/* =========================================================
   SMART CURTAINS & BLINDS
   ========================================================= */

  {
    id: "curtain-motor-2-5nm",
    slug: "zigbee-wifi-curtain-motor-2-5nm",
    title: "Zigbee/Wifi Curtain Motor 2.5 Nm (App Control + Voice Command + Remote Control) - Load Capacity 80 kg",
    model: "OC-CMW/Z-2.5Nm",
    category: "Smart Curtains & Blinds",
    categorySlug: "curtains-blinds",
    subcategory: "Curtain Motors",
    badge: "2.5 Nm",
    image: "/products/catalog/curtain-motor-2-5nm.png",
    shortDesc:
      "Zigbee/Wifi curtain motor with 2.5 Nm torque and 80 kg load capacity.",
    description:
      "High-performance Zigbee/Wi-Fi curtain motor for automated curtain operation.",
    specs: {
      Torque: "2.5 Nm",
      "Load Capacity": "80 kg",
      Control:
        "App Control + Voice Command + Remote Control",
      Connectivity: "Zigbee / Wi-Fi",
    },
    highlights: [
      "2.5 Nm motor",
      "80 kg load capacity",
      "App control",
      "Voice command",
      "Remote control",
    ],
    idealFor: "Motorized curtains",
    catalogueSource: "Master Catalogue Page 27",
  },

  {
    id: "curtain-motor-1-5nm",
    slug: "zigbee-wifi-curtain-motor-1-5nm",
    title: "Zigbee/Wifi Curtain Motor 1.5 Nm (App Control + Voice Command + Remote Control) - Load Capacity 50 kg",
    model: "OC-CMW/Z-1.5Nm",
    category: "Smart Curtains & Blinds",
    categorySlug: "curtains-blinds",
    subcategory: "Curtain Motors",
    badge: "1.5 Nm",
    image: "/products/catalog/curtain-motor-1-5nm.png",
    shortDesc:
      "Zigbee/Wifi curtain motor with 1.5 Nm torque and 50 kg load capacity.",
    description:
      "Zigbee/Wi-Fi curtain motor for automated curtain operation.",
    specs: {
      Torque: "1.5 Nm",
      "Load Capacity": "50 kg",
      Control:
        "App Control + Voice Command + Remote Control",
      Connectivity: "Zigbee / Wi-Fi",
    },
    highlights: [
      "1.5 Nm motor",
      "50 kg load capacity",
      "App control",
      "Voice command",
      "Remote control",
    ],
    idealFor: "Motorized curtains",
    catalogueSource: "Master Catalogue Page 27",
  },

  {
    id: "curtain-track-oc-nct",
    slug: "customised-super-silent-track-curtain-track-set",
    title: "Customised Super Silent Track Curtain Track Set with Drivers & Other Accessories for Slider Opening and Single Side Opening (Per Feet Rate)",
    model: "OC-NCT",
    category: "Smart Curtains & Blinds",
    categorySlug: "curtains-blinds",
    subcategory: "Tracks",
    badge: "Custom Track",
    image: "/products/catalog/curtain-track-oc-nct.png",
    shortDesc:
      "Customised super silent curtain track set with drivers and accessories.",
    description:
      "Customised curtain track set with drivers and other accessories for slider opening and single-side opening.",
    specs: {
      Opening:
        "Slider opening and single side opening",
      Pricing: "Per Feet Rate",
      Includes: "Drivers and other accessories",
    },
    highlights: [
      "Customised curtain track",
      "Super silent operation",
      "Slider opening",
      "Single-side opening",
    ],
    idealFor: "Motorized curtain installations",
    catalogueSource: "Master Catalogue Page 27",
  },

  {
    id: "blind-motor-35m",
    slug: "zigbee-wifi-tubular-motor-6n-35mm",
    title: "Zigbee/Wifi Tubular Motor 6N, App Control + Voice Control + Remote Control , 35mm",
    model: "OC-BMW/Z-35M",
    category: "Smart Curtains & Blinds",
    categorySlug: "curtains-blinds",
    subcategory: "Blinds",
    badge: "Tubular Motor",
    image: "/products/catalog/blind-motor-35m.png",
    shortDesc:
      "Zigbee/Wifi tubular motor 6N for motorized blinds.",
    description:
      "Tubular motor for smart blind automation with app, voice and remote control.",
    specs: {
      Torque: "6N",
      Diameter: "35mm",
      Control:
        "App Control + Voice Control + Remote Control",
      Connectivity: "Zigbee / Wi-Fi",
    },
    highlights: [
      "6N tubular motor",
      "35mm diameter",
      "App control",
      "Voice control",
      "Remote control",
    ],
    idealFor: "Motorized blinds",
    catalogueSource: "Master Catalogue Page 27",
  },

  {
    id: "remote-single-channel",
    slug: "single-channel-remote-oc-scr-01",
    title: "Single Channel Remote (for Single Curtain Set)",
    model: "OC-SCR-01",
    category: "Smart Curtains & Blinds",
    categorySlug: "curtains-blinds",
    subcategory: "Remotes",
    badge: "1 Channel",
    image: "/products/catalog/remote-single-channel.png",
    shortDesc:
      "Single channel remote for a single curtain set.",
    description:
      "Single channel remote control for motorized curtains.",
    specs: {
      Channels: "1 Channel",
      Application: "Single curtain set",
    },
    highlights: [
      "Single-channel curtain control",
    ],
    idealFor: "Single curtain sets",
    catalogueSource: "Master Catalogue Page 27",
  },

  {
    id: "remote-double-channel",
    slug: "double-channel-remote-oc-dcr-02",
    title: "Double Channel Remote (for Dual Curtain Set)",
    model: "OC-DCR-02",
    category: "Smart Curtains & Blinds",
    categorySlug: "curtains-blinds",
    subcategory: "Remotes",
    badge: "2 Channel",
    image: "/products/catalog/remote-double-channel.png",
    shortDesc:
      "Double channel remote for dual curtain sets.",
    description:
      "Double channel remote control for dual curtain sets.",
    specs: {
      Channels: "2 Channels",
      Application: "Dual curtain set",
    },
    highlights: [
      "Two-channel curtain control",
    ],
    idealFor: "Dual curtain sets",
    catalogueSource: "Master Catalogue Page 27",
  },

  {
    id: "remote-display",
    slug: "remote-with-display-oc-15crd-03",
    title: "Remote with Display",
    model: "OC-15CRD-03",
    category: "Smart Curtains & Blinds",
    categorySlug: "curtains-blinds",
    subcategory: "Remotes",
    badge: "Display",
    image: "/products/catalog/remote-display.png",
    shortDesc:
      "Remote with display for motorized curtain and blind control.",
    description:
      "Remote control with display for motorized curtain and blind systems.",
    specs: {
      Display: "Display",
    },
    highlights: [
      "Display-based remote control",
    ],
    idealFor: "Motorized curtain and blind systems",
    catalogueSource: "Master Catalogue Page 27",
  },

  /* =========================================================
     SMART LIGHTING — DOWNLIGHTS
     ========================================================= */

  {
    id: "light-scd01",
    slug: "deep-square-panel-12w",
    title: "(SQUARE) Deep Square Panel 12W",
    model: "OC-SCD01",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Deep Square",
    image: "/products/catalog/light-csl08.png",
    shortDesc:
      "Deep square panel 12W with 100mm cutout and 50mm depth.",
    description:
      "Deep square panel light with black and white colour options.",
    specs: {
      Wattage: "12W",
      Cutout: "100mm",
      Depth: "50mm",
      Colour: "Black / White",
    },
    highlights: [
      "Deep square design",
      "12W",
      "Black / White",
    ],
    idealFor: "Downlight applications",
    catalogueSource: "Master Catalogue Page 30",
  },

  {
    id: "light-scd03",
    slug: "deep-round-panel-12w",
    title: "(ROUND) Deep Round Panel 12W",
    model: "OC-SCD03",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Deep Round",
    image: "/products/catalog/light-csl01.png",
    shortDesc:
      "Deep round panel 12W with 100mm cutout and 50mm depth.",
    description:
      "Deep round panel light with black and white colour options.",
    specs: {
      Wattage: "12W",
      Cutout: "100mm",
      Depth: "50mm",
      Colour: "Black / White",
    },
    highlights: [
      "Deep round design",
      "12W",
      "Black / White",
    ],
    idealFor: "Downlight applications",
    catalogueSource: "Master Catalogue Page 30",
  },

  {
    id: "light-scd08",
    slug: "surface-round-downlight-panel-3-in-1-cct",
    title: "Surface - Round Downlight Panel 3 IN 1- CCT (2700K-6500K)",
    model: "OC-SCD08/09/10",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Surface Round",
    image: "/products/catalog/light-csl07.png",
    shortDesc:
      "Surface round downlight panel in 12W, 18W and 24W variants.",
    description:
      "Surface round downlight panel with 3 IN 1 CCT.",
    specs: {
      "Wattage Variants":
        "12W / 18W / 24W",
      "Cutout / Size":
        "125mm / 150mm / 175mm",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
      Mounting: "Surface",
    },
    highlights: [
      "12W / 18W / 24W",
      "3 IN 1 CCT",
    ],
    idealFor: "Surface-mounted lighting",
    catalogueSource: "Master Catalogue Page 30",
  },

  {
    id: "light-scd05",
    slug: "surface-square-downlight-panel-3-in-1-cct",
    title: "Surface - Square Downlight Panel 3 IN 1- CCT (2700K-6500K)",
    model: "OC-SCD05/06/07",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Surface Square",
    image: "/products/catalog/light-csl04.png",
    shortDesc:
      "Surface square downlight panel in 12W, 18W and 24W variants.",
    description:
      "Surface square downlight panel with 3 IN 1 CCT.",
    specs: {
      "Wattage Variants":
        "12W / 18W / 24W",
      Sizes:
        "125 × 125mm / 150 × 150mm / 175 × 175mm",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
    },
    highlights: [
      "12W / 18W / 24W",
      "3 IN 1 CCT",
      "Square surface design",
    ],
    idealFor: "Surface-mounted lighting",
    catalogueSource: "Master Catalogue Page 30",
  },

  /* =========================================================
     SMART LIGHTING — CONCEALED SPOTS
     ========================================================= */

  {
    id: "light-csl01",
    slug: "spot-trim-less-3-in-1-cct",
    title: "Spot Trim-less - 3 IN 1- CCT (2700K-6500K)",
    model: "OC-CSL01/02/03",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Trim-less Spot",
    image: "/products/catalog/light-scd03.png",
    shortDesc:
      "Trim-less spot in 7W, 12W and 18W variants with 3 IN 1 CCT.",
    description:
      "Trim-less spot light with 3 IN 1 CCT.",
    specs: {
      "Wattage Variants": "7W / 12W / 18W",
      "Cutout Variants": "35mm / 55mm / 75mm",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
      "Body Colour": "White",
      "Reflector": "Gold / White",
    },
    highlights: [
      "Trim-less design",
      "7W / 12W / 18W",
      "3 IN 1 CCT",
    ],
    idealFor: "Concealed spot lighting",
    catalogueSource: "Master Catalogue Page 30",
  },

  {
    id: "light-csl04",
    slug: "spot-tiltable-3-in-1-cct",
    title: "Spot Tiltable - 3 IN 1- CCT (2700K-6500K)",
    model: "OC-CSL04/05/06",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Tiltable Spot",
    image: "/products/catalog/light-scd08.png",
    shortDesc:
      "Tiltable spot in 7W, 12W and 18W variants with 3 IN 1 CCT.",
    description:
      "Tiltable spot light with 3 IN 1 CCT.",
    specs: {
      "Wattage Variants": "7W / 12W / 18W",
      "Cutout Variants": "55mm / 75mm / 75mm",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
      "Body Colour": "White",
      "Ring Colours":
        "White / Black / Chrome / Grey",
    },
    highlights: [
      "Tiltable spotlight",
      "3 IN 1 CCT",
      "Multiple ring colour options",
    ],
    idealFor: "Directional spot lighting",
    catalogueSource: "Master Catalogue Page 30",
  },

  {
    id: "light-csl07",
    slug: "spot-10w-gun-metal-3-in-1-cct",
    title: "Spot - 3 IN 1- CCT (2700K-6500K) (10W, C-40mm)",
    model: "OC-CSL07",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Gun Metal",
    image: "/products/catalog/light-scd01.png",
    shortDesc:
      "10W spot with 40mm cutout and gun metal reflector.",
    description:
      "10W spot with white body and gun metal reflector.",
    specs: {
      Wattage: "10W",
      Cutout: "40mm",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
      "Body Colour": "White",
      "Reflector Colour": "Gun Metal",
    },
    highlights: [
      "10W spotlight",
      "Gun metal reflector",
      "40mm cutout",
      "3 IN 1 CCT",
    ],
    idealFor: "Spot lighting",
    catalogueSource: "Master Catalogue Page 30",
  },

  {
    id: "light-csl08",
    slug: "spot-deep-3-in-1-cct",
    title: "Spot - 3 IN 1- CCT (2700K-6500K)",
    model: "OC-CSL08/09/10",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Deep Spot",
    image: "/products/catalog/light-scd05.png",
    shortDesc:
      "Deep spot in 7W, 12W and 18W variants with 3 IN 1 CCT.",
    description:
      "Deep spot light with 3 IN 1 CCT.",
    specs: {
      "Wattage Variants": "7W / 12W / 18W",
      "Cutout Variants": "65mm / 75mm / 90mm",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
      "Body Colour": "Black / White",
      "Ring Colour": "White / Black / Grey",
    },
    highlights: [
      "7W / 12W / 18W",
      "3 IN 1 CCT",
      "Multiple body and ring colours",
    ],
    idealFor: "Deep recessed spot lighting",
    catalogueSource: "Master Catalogue Page 30",
  },

  /* =========================================================
     SMART LIGHTING — SURFACE CYLINDER
     ========================================================= */

  {
    id: "light-ssl01",
    slug: "surface-cylinder-spot-3-in-1-cct",
    title: "Surface Cylinder Spot - 3 IN 1- CCT (2700K-6500K)",
    model: "OC-SSL01/02/03",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Cylinder Spot",
    image: "/products/catalog/light-ssl07.png",
    shortDesc:
      "Surface cylinder spot in 7W, 12W and 18W variants.",
    description:
      "Surface cylinder spot light with 3 IN 1 CCT.",
    specs: {
      "Wattage Variants": "7W / 12W / 18W",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
      "Body Colour": "White / Black",
      "Ring Colour":
        "White / Black / Chrome / Gold / Silver",
    },
    highlights: [
      "7W / 12W / 18W",
      "3 IN 1 CCT",
      "Five ring colour options",
    ],
    idealFor: "Surface spotlight applications",
    catalogueSource: "Master Catalogue Page 31",
  },

  {
    id: "light-ssl04",
    slug: "spot-surface-cylinder-360-adjustable",
    title: "Spot Surface Cylinder 360 Adjustable - 3 IN 1- CCT (2700K-6500K)",
    model: "OC-SSL04/05/06",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "360 Adjustable",
    image: "/products/catalog/light-lls05.png",
    shortDesc:
      "Adjustable surface cylinder spotlight in 10W, 12W and 15W variants.",
    description:
      "Surface cylinder spotlight with adjustable direction and 3 IN 1 CCT.",
    specs: {
      "Wattage Variants": "10W / 12W / 15W",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
      "Body Colour": "White / Black",
      Adjustment: "360°",
    },
    highlights: [
      "10W / 12W / 15W",
      "360° adjustment",
      "3 IN 1 CCT",
    ],
    idealFor: "Directional surface lighting",
    catalogueSource: "Master Catalogue Page 31",
  },

  {
    id: "light-ssl07",
    slug: "surface-twisted-cylinder-12w",
    title: "Surface Twisted Cylinder - 3 IN 1 CCT (2700K-6500K)",
    model: "OC-SSL07",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Twisted Cylinder",
    image: "/products/catalog/driver-oc-ld01.png",
    shortDesc:
      "12W surface twisted cylinder light with 3 IN 1 CCT.",
    description:
      "Surface twisted cylinder spotlight with 3 IN 1 CCT.",
    specs: {
      Wattage: "12W",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
      "Body Colour": "White / Black",
    },
    highlights: [
      "12W",
      "Twisted cylinder design",
      "3 IN 1 CCT",
    ],
    idealFor: "Surface lighting",
    catalogueSource: "Master Catalogue Page 31",
  },

  /* =========================================================
     SMART LIGHTING — MAGNETIC TRACK
     ========================================================= */

  {
    id: "light-lls01",
    slug: "cct-magnetic-track-linear-diffused-light",
    title: "CCT Magnetic Track Linear Diffused Light - 3 IN 1- CCT (2700K-6500K)",
    model: "OC-LLS01/02",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Magnetic Track",
    image: "/products/catalog/light-ssl01.png",
    shortDesc:
      "Magnetic track linear diffused light in 12W and 20W variants.",
    description:
      "CCT magnetic track linear diffused light.",
    specs: {
      "Wattage Variants": "12W / 20W",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
    },
    highlights: [
      "12W / 20W",
      "Magnetic track",
      "3 IN 1 CCT",
    ],
    idealFor: "Magnetic track lighting systems",
    catalogueSource: "Master Catalogue Page 31",
  },

  {
    id: "light-lls03",
    slug: "magnetic-track-linear-laser-light",
    title: "Magnetic Track Linear Laser Light - 3 IN 1- CCT (2700K-6500K)",
    model: "OC-LLS03/04",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "Linear Laser",
    image: "/products/catalog/light-lls01.png",
    shortDesc:
      "Magnetic track linear laser light in 6W and 12W variants.",
    description:
      "Magnetic track linear laser light with 3 IN 1 CCT.",
    specs: {
      "Wattage Variants": "6W / 12W",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
    },
    highlights: [
      "6W / 12W",
      "Magnetic track",
      "Linear laser light",
      "3 IN 1 CCT",
    ],
    idealFor: "Magnetic track lighting systems",
    catalogueSource: "Master Catalogue Page 31",
  },

  {
    id: "light-lls05",
    slug: "magnetic-track-cob-adjustable-light",
    title: "Magnetic Track COB Adjustable Light - 3 IN 1- CCT (2700K-6500K)",
    model: "OC-LLS05/06",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "COB Adjustable",
    image: "/products/catalog/driver-oc-ld02.png",
    shortDesc:
      "Magnetic track COB adjustable light in 12W and 15W variants.",
    description:
      "COB adjustable light for magnetic track systems.",
    specs: {
      "Wattage Variants": "12W / 15W",
      "Color Temperature":
        "3 IN 1 CCT (2700K–6500K)",
    },
    highlights: [
      "12W / 15W",
      "COB light",
      "Adjustable",
      "Magnetic track",
      "3 IN 1 CCT",
    ],
    idealFor: "Magnetic track lighting systems",
    catalogueSource: "Master Catalogue Page 31",
  },

  /* =========================================================
     SMART LIGHTING — LED STRIPS / AMBIENT LIGHTS
     ========================================================= */

  {
    id: "strip-rgbcct96",
    slug: "rgbcct-24v-5050-96leds-m-5m",
    title: "RGBCCT 24V 5050 96LEDS/M LED Strip Light - 5M",
    model: "OC-RGBCCT96",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "RGBCCT",
    image: "/products/catalog/strip-rgbcct96.png",
    shortDesc:
      "24V RGBCCT LED strip with 96 LEDs/m and 5M length.",
    description:
      "RGBCCT LED strip light for ambient lighting applications.",
    specs: {
      Voltage: "24V DC",
      LED: "5050",
      Density: "96 LEDs/M",
      Length: "5M",
    },
    highlights: [
      "24V",
      "5050 LEDs",
      "96 LEDs/M",
      "5M",
    ],
    idealFor: "Ambient lighting",
    catalogueSource: "Master Catalogue Page 34",
  },

  {
    id: "strip-rgbcct216",
    slug: "rgb-cct-24v-12w-m-5050-216leds-m-10m",
    title: "RGB+CCT 24V 12W/M 5050 216LEDS/M LED Strip 10mm - 10M",
    model: "OC-RGBCCT216",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "High Density",
    image: "/products/catalog/strip-rgbcct216.png",
    shortDesc:
      "24V RGB+CCT strip with 216 LEDs/m and 10M length.",
    description:
      "High-density RGB+CCT LED strip light.",
    specs: {
      Voltage: "24V DC",
      Wattage: "12W/M",
      LED: "5050",
      Density: "216 LEDs/M",
      Width: "10mm",
      Length: "10M",
    },
    highlights: [
      "24V",
      "12W/M",
      "216 LEDs/M",
      "10M",
    ],
    idealFor: "Ambient and linear lighting",
    catalogueSource: "Master Catalogue Page 34",
  },

  {
    id: "strip-rgbic60",
    slug: "rgbic-5v-5050-60leds-m-5m",
    title: "RGBIC 5V 5050 60LEDS/M LED Strip 5mm - 5M",
    model: "OC-RGBIC60",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "RGBIC",
    image: "/products/catalog/strip-rgbic60.png",
    shortDesc:
      "5V RGBIC LED strip with 60 LEDs/m and 5M length.",
    description:
      "RGBIC LED strip light for dynamic ambient lighting.",
    specs: {
      Voltage: "5V DC",
      LED: "5050 RGBIC",
      Density: "60 LEDs/M",
      Width: "5mm",
      Length: "5M",
    },
    highlights: [
      "RGBIC",
      "5V",
      "60 LEDs/M",
      "5M",
    ],
    idealFor: "Dynamic ambient lighting",
    catalogueSource: "Master Catalogue Page 34",
  },

  {
    id: "strip-rgbw60",
    slug: "rgbw-12v-5050-60leds-m-5m",
    title: "RGBW 12V 5050 60LEDS/M LED Strip Light - 5M",
    model: "OC-RGBW60",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "RGBW",
    image: "/products/catalog/strip-rgbw60.png",
    shortDesc:
      "12V RGBW LED strip with 60 LEDs/m and 5M length.",
    description:
      "RGBW LED strip light.",
    specs: {
      Voltage: "12V DC",
      LED: "5050 RGBW",
      Density: "60 LEDs/M",
      Length: "5M",
    },
    highlights: [
      "RGBW",
      "12V",
      "60 LEDs/M",
      "5M",
    ],
    idealFor: "Ambient lighting",
    catalogueSource: "Master Catalogue Page 34",
  },

  {
    id: "strip-cct240",
    slug: "cct-12v-24w-m-2835-240leds-m-10mm-5m",
    title: "CCT 12V 24W/M 2835 240LEDS/M LED Strip 10mm - 5M",
    model: "OC-CCT240",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "CCT",
    image: "/products/catalog/strip-cct240.png",
    shortDesc:
      "12V CCT LED strip with 24W/m and 240 LEDs/m.",
    description:
      "High-density CCT LED strip light.",
    specs: {
      Voltage: "12V DC",
      Wattage: "24W/M",
      LED: "2835",
      Density: "240 LEDs/M",
      Width: "10mm",
      Length: "5M",
    },
    highlights: [
      "24W/M",
      "240 LEDs/M",
      "12V",
      "5M",
    ],
    idealFor: "CCT ambient lighting",
    catalogueSource: "Master Catalogue Page 34",
  },

  /* =========================================================
     SMART LIGHTING — TV BACKLIGHTS
     ========================================================= */

  {
    id: "tv-camera-sync",
    slug: "wifi-camera-sync-led-strip-light-tv-game-5m",
    title: "Wifi - Camera Sync LED Strip Light for TV/Game - 5M",
    model: "OC-TVCA-5m",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "TV Backlight",
    image: "/products/catalog/tv-camera-sync.png",
    shortDesc:
      "Wi-Fi camera sync LED strip light for TV/Game.",
    description:
      "Camera-based TV and gaming sync LED strip light.",
    specs: {
      Connectivity: "Wi-Fi",
      Application: "TV / Game",
      Length: "5M",
    },
    highlights: [
      "Camera sync",
      "Wi-Fi",
      "5M strip",
    ],
    idealFor: "TV and gaming setups",
    catalogueSource: "Master Catalogue Page 34",
  },

  {
    id: "tv-hdmi-sync",
    slug: "wifi-hdmi-2-0-sync-led-strip-light-tv-game-5m",
    title: "Wifi - HDMI 2.0 Sync LED Strip Light for TV/Game - 5M",
    model: "OC-TVHD-5m",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Lightings",
    badge: "HDMI Sync",
    image: "/products/catalog/tv-hdmi-sync.png",
    shortDesc:
      "Wi-Fi HDMI 2.0 sync LED strip light for TV/Game.",
    description:
      "HDMI 2.0 synchronized TV and gaming LED strip light.",
    specs: {
      Connectivity: "Wi-Fi",
      Interface: "HDMI 2.0",
      Application: "TV / Game",
      Length: "5M",
    },
    highlights: [
      "HDMI 2.0",
      "Wi-Fi",
      "5M strip",
      "TV/Game synchronization",
    ],
    idealFor: "TV and gaming setups",
    catalogueSource: "Master Catalogue Page 34",
  },

  /* =========================================================
     SMART LIGHTING — COB DRIVERS
     ========================================================= */

  {
    id: "driver-oc-ld01",
    slug: "zigbee-cob-driver-dimming-cct-adjustable-7-13-5w",
    title: "Zigbee - COB Driver Dimming/CCT Adjustable - 7/9/12/13.5W",
    model: "OC-LD01",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Drivers",
    badge: "Zigbee COB Driver",
    image: "/products/catalog/light-ssl04.png",
    shortDesc:
      "Zigbee COB driver with dimming/CCT adjustment and DIP-adjustable current.",
    description:
      "Zigbee COB light driver with adjustable current and dimming/CCT control.",
    specs: {
      "Power Variants": "7W / 9W / 12W / 13.5W",
      "Current":
        "150 / 200 / 250 / 300mA DIP adjustable",
      "Power Factor": "PF > 0.5",
      Protocol: "Zigbee",
    },
    highlights: [
      "7W / 9W / 12W / 13.5W",
      "DIP adjustable",
      "Zigbee",
      "CCT adjustment",
    ],
    idealFor: "COB lighting",
    catalogueSource: "Master Catalogue Page 31",
  },

  {
    id: "driver-oc-ld02",
    slug: "zigbee-cob-driver-dimming-cct-adjustable-15-36w",
    title: "Zigbee - COB Driver Dimming/CCT Adjustable - 15W-36W",
    model: "OC-LD02",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Drivers",
    badge: "Zigbee COB Driver",
    image: "/products/catalog/light-lls03.png",
    shortDesc:
      "Zigbee COB driver with 15W–36W power range and DIP-adjustable current.",
    description:
      "Zigbee COB driver for dimming and CCT adjustment.",
    specs: {
      "Power Range": "15W–36W",
      "Current":
        "350–870mA DIP adjustable",
      "Power Factor": "PF > 0.9",
      Protocol: "Zigbee",
    },
    highlights: [
      "15W–36W",
      "DIP adjustable current",
      "PF > 0.9",
      "Zigbee",
    ],
    idealFor: "COB lighting",
    catalogueSource: "Master Catalogue Page 31",
  },

  /* =========================================================
     SMART LIGHTING — WIFI DRIVERS
     ========================================================= */

  {
    id: "driver-wdr01",
    slug: "wifi-pixel-control-led-control-module-with-remote",
    title: "Wifi - Pixel Control LED Control Module with Remote",
    model: "OC-WDR-01",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Drivers",
    badge: "Pixel Control",
    image: "/products/catalog/driver-wdr01.png",
    shortDesc:
      "Wi-Fi pixel control LED module with remote.",
    description:
      "Wi-Fi pixel control LED control module with remote.",
    specs: {
      Connectivity: "Wi-Fi",
      Control: "LED Pixel Control",
      Remote: "Included",
    },
    highlights: [
      "Wi-Fi control",
      "Pixel control",
      "Remote",
    ],
    idealFor: "Pixel LED systems",
    catalogueSource: "Master Catalogue Page 35",
  },

  {
    id: "driver-wdr-rgbcct",
    slug: "wifi-rgbcct-led-strip-control-module-with-remote",
    title: "Wifi - RGBCCT LED Strip Control Module With Remote",
    model: "OC-WDR-RGBCCT",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Drivers",
    badge: "RGBCCT Controller",
    image: "/products/catalog/driver-wdr-rgbcct.png",
    shortDesc:
      "Wi-Fi RGBCCT LED strip control module with remote.",
    description:
      "Wi-Fi controller for RGBCCT LED strips with remote.",
    specs: {
      Connectivity: "Wi-Fi",
      Application: "RGBCCT LED Strip",
      Remote: "Included",
    },
    highlights: [
      "Wi-Fi",
      "RGBCCT control",
      "Remote",
    ],
    idealFor: "RGBCCT LED strips",
    catalogueSource: "Master Catalogue Page 35",
  },

  {
    id: "driver-wdr-rgbw",
    slug: "wifi-rgbw-led-strip-control-module-with-remote",
    title: "Wifi - RGBW LED Strip Control Module with Remote",
    model: "OC-WDR-RGBW",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Drivers",
    badge: "RGBW Controller",
    image: "/products/catalog/driver-wdr-rgbw.png",
    shortDesc:
      "Wi-Fi RGBW LED strip control module with remote.",
    description:
      "Wi-Fi controller for RGBW LED strips with remote.",
    specs: {
      Connectivity: "Wi-Fi",
      Application: "RGBW LED Strip",
      Remote: "Included",
    },
    highlights: [
      "Wi-Fi",
      "RGBW control",
      "Remote",
    ],
    idealFor: "RGBW LED strips",
    catalogueSource: "Master Catalogue Page 35",
  },

  /* =========================================================
     SMART LIGHTING — ZIGBEE DRIVERS
     ========================================================= */

  {
    id: "driver-zdr-rgbw",
    slug: "zigbee-4-ch-rgbw-led-strip-control-module",
    title: "Zigbee - 4 CH RGBW LED Strip Control Module",
    model: "OC-ZDR-RGBW",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Drivers",
    badge: "Zigbee RGBW",
    image: "/products/catalog/driver-zdr-rgbw.png",
    shortDesc:
      "Zigbee 4-channel RGBW LED strip control module.",
    description:
      "Zigbee 4-channel controller for RGBW LED strips.",
    specs: {
      Channels: "4 CH",
      Application: "RGBW LED Strip",
      Voltage: "DC 5–24V",
      Protocol: "Zigbee",
    },
    highlights: [
      "4-channel RGBW control",
      "DC 5–24V",
      "Zigbee",
    ],
    idealFor: "RGBW LED strip systems",
    catalogueSource: "Master Catalogue Page 35",
  },

  {
    id: "driver-zdr-cct",
    slug: "zigbee-cct-led-strip-controller-power-supply-120w",
    title: "Zigbee - CCT LED Strip Controller + Power Supply - D24V/5A - 120W",
    model: "OC-ZDR-CCT",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Drivers",
    badge: "120W CCT",
    image: "/products/catalog/driver-zdr-cct.png",
    shortDesc:
      "Zigbee CCT LED strip controller with integrated 24V/5A 120W power supply.",
    description:
      "Zigbee CCT LED strip controller with power supply.",
    specs: {
      Output: "24V / 5A",
      Power: "120W",
      Application: "CCT LED Strip",
      Protocol: "Zigbee",
    },
    highlights: [
      "120W",
      "24V/5A",
      "CCT control",
      "Zigbee",
    ],
    idealFor: "CCT LED strip systems",
    catalogueSource: "Master Catalogue Page 35",
  },

  {
    id: "driver-zdr-rgbcct",
    slug: "zigbee-5-in-1-led-strips-controller-15a",
    title: "Zigbee - 5 in 1 (RGB/RGBW/RGBCCT) LED Strips Controller (DC5-24V) - 15A",
    model: "OC-ZDR-RGBCCT",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",
    subcategory: "Drivers",
    badge: "Zigbee 5-in-1",
    image: "/products/catalog/driver-zdr-rgbcct.png",
    shortDesc:
      "Zigbee 5-in-1 LED strip controller supporting RGB, RGBW and RGBCCT.",
    description:
      "Zigbee controller for multiple LED strip types.",
    specs: {
      Modes: "RGB / RGBW / RGBCCT",
      Voltage: "DC 5–24V",
      Current: "15A",
      Protocol: "Zigbee",
    },
    highlights: [
      "5-in-1 LED strip controller",
      "RGB support",
      "RGBW support",
      "RGBCCT support",
      "15A",
      "Zigbee",
    ],
    idealFor: "RGB/RGBW/RGBCCT LED strips",
    catalogueSource: "Master Catalogue Page 35",
  },  /* =========================================================
     MOTION SENSORS — MICROWAVE
     ========================================================= */

  {
    id: "motion-ceiling-360",
    slug: "ceiling-360-degree-sensor-oc-m3",
    title: "Ceiling 360-Degree Sensor",
    model: "OC-M3",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Microwave & PIR Sensors",
    badge: "Microwave Motion Sensor",
    image: "/products/catalog/motion-ceiling-360.png",
    shortDesc:
      "Ceiling 360-Degree microwave motion sensor with adjustable detection range.",
    description:
      "Ceiling-mounted 360-degree microwave motion sensor.",
    specs: {
      "Ambient Light":
        "Adjustable from less than 3 lux to 2000 lux",
      "Time Delay":
        "Min: 10 sec ± 3 sec | Max: 12 min ± 1 min",
      "Rated Load":
        "1200W Incandescent / 300W Energy-saving Lamp",
      "Detection Distance": "1–8m radius adjustable",
      "Power Supply": "220–240V AC",
      "Detection Range": "360 Degree",
      "Installing Height": "1.5–3.5m",
    },
    highlights: [
      "360-degree detection",
      "1–8m adjustable radius",
      "Adjustable ambient-light setting",
      "Adjustable time delay",
    ],
    idealFor: "Microwave motion sensing applications",
    catalogueSource: "Smart Motion Sensor Catalogue Page 5",
  },

  {
    id: "motion-compact",
    slug: "mini-microwave-sensor-oc-m5",
    title: "Mini Microwave Sensor",
    model: "OC-M5",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Microwave & PIR Sensors",
    badge: "Microwave Sensor",
    image: "/products/catalog/motion-compact.png",
    shortDesc:
      "Mini microwave sensor with 360-degree detection and adjustable sensitivity.",
    description:
      "Mini microwave motion sensor for automatic motion detection.",
    specs: {
      "HF System": "5.8 GHz",
      "Time Delay": "8 seconds to 12 minutes",
      Sensitivity:
        "Adjustable detection distance from 1m to 8m radius",
      "Light Setting": "2 lux to 2000 lux",
      "Load Capacity": "1200W",
      "Detection Angle": "360 Degree",
      "Installing Height": "2–4m",
    },
    highlights: [
      "5.8 GHz microwave system",
      "360-degree detection",
      "Adjustable sensitivity",
      "Adjustable light setting",
    ],
    idealFor: "Microwave motion sensing applications",
    catalogueSource: "Smart Motion Sensor Catalogue Page 6",
  },

  {
    id: "motion-ceiling-clip",
    slug: "ceiling-microwave-sensor-oc-m6",
    title: "Ceiling Microwave Sensor",
    model: "OC-M6",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Microwave & PIR Sensors",
    badge: "Ceiling Microwave",
    image: "/products/catalog/motion-ceiling-clip.png",
    shortDesc:
      "Ceiling microwave sensor with adjustable detection radius and time delay.",
    description:
      "Ceiling-mounted microwave motion sensor.",
    specs: {
      "Installing Height": "1.5–3.5m",
      "Detection Distance": "1–8m radius adjustable",
      "Detection Range": "360 Degree",
      "Ambient Light": "<3–2000 lux Adjustable",
      "Rated Load":
        "1200W Incandescent / 300W Energy-saving Lamp",
      "Power Supply": "220–240V AC",
      "Time Delay":
        "Min: 10 sec ± 3 sec | Max: 12 min ± 1 min",
    },
    highlights: [
      "360-degree detection",
      "1–8m adjustable detection radius",
      "Adjustable ambient light",
      "Adjustable time delay",
    ],
    idealFor: "Ceiling-mounted motion sensing",
    catalogueSource: "Smart Motion Sensor Catalogue Page 7",
  },

  {
    id: "motion-warehouse",
    slug: "warehouse-sensor-oc-m8",
    title: "Warehouse Sensor",
    model: "OC-M8",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Microwave & PIR Sensors",
    badge: "Warehouse Sensor",
    image: "/products/catalog/motion-warehouse.png",
    shortDesc:
      "Warehouse motion sensor with detection distance up to 15 metres.",
    description:
      "Motion sensor designed for warehouse and high-height applications.",
    specs: {
      "Ambient Light":
        "Adjustable from <3 lux to 2000 lux",
      "Time Delay":
        "Min: 10 sec ± 3 sec | Max: 12 min ± 1 min",
      "Rated Load":
        "1200W Incandescent / 1000W Energy-saving Lamp",
      "Detection Distance": "5–15m",
      "Power Supply": "110–277V AC",
      "Detection Range": "360 Degree",
      "Installing Height": "4–15m",
      "Time Setting":
        "5 sec / 30 sec / 90 sec / 3 min / 5 min / 10 min / 20 min / 30 min",
    },
    highlights: [
      "5–15m detection distance",
      "360-degree detection",
      "4–15m installation height",
      "Adjustable time setting",
    ],
    idealFor: "Warehouses and high-ceiling applications",
    catalogueSource: "Smart Motion Sensor Catalogue Page 8",
  },

  {
    id: "motion-m10",
    slug: "microwave-radar-sensor-oc-m10",
    title: "Microwave Radar Sensor",
    model: "OC-M10",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Microwave & PIR Sensors",
    badge: "Radar Sensor",
    image: "/products/catalog/motion-m10.png",
    shortDesc:
      "Microwave radar sensor with 360-degree ceiling coverage.",
    description:
      "Microwave radar sensor for recessed ceiling installation.",
    specs: {
      Colour: "White",
      "Power Supply": "AC 100–240V, 50/60Hz",
      "Maximum Load": "100W",
      "Detection Range": "Up to 5 metres",
      "Detection Angle": "360° ceiling coverage",
      "Mounting Type": "Recessed ceiling installation",
      "Delay / Reset Time": "Approx. 40 seconds",
      Dimensions: "60 × 40 × 60 mm",
      Weight: "80 g",
    },
    highlights: [
      "Microwave radar sensing",
      "360-degree ceiling coverage",
      "Recessed ceiling installation",
      "AC 100–240V supply",
    ],
    idealFor: "Recessed ceiling motion sensing",
    catalogueSource: "Smart Motion Sensor Catalogue Page 9",
  },

  /* =========================================================
     MOTION SENSORS — PIR
     ========================================================= */

  {
    id: "motion-m9",
    slug: "wall-mounted-motion-sensor-oc-m9",
    title: "Wall-Mounted Motion Sensor",
    model: "OC-M9",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Microwave & PIR Sensors",
    badge: "Wall Mounted",
    image: "/products/catalog/motion-wall-mount-ip65.png",
    shortDesc:
      "Wall-mounted motion sensor with 180-degree detection and adjustable range.",
    description:
      "Wall-mounted motion sensor with adjustable ambient-light and time-delay settings.",
    specs: {
      "Ambient Light":
        "Adjustable from <10 to 2000 lux",
      "Time Delay":
        "Min: 10 sec ± 3 sec | Max: 7 min ± 2 min",
      "Rated Load":
        "1200W Incandescent / 300W Energy-saving Lamp",
      "Detection Distance": "2–12m adjustable",
      "Power Supply": "220–240V AC",
      "Detection Range": "180 Degree",
      "Installing Height": "1.8–2.5m",
    },
    highlights: [
      "180-degree detection",
      "2–12m adjustable detection distance",
      "Adjustable ambient light",
      "Adjustable time delay",
    ],
    idealFor: "Wall-mounted PIR motion detection",
    catalogueSource: "Smart Motion Sensor Catalogue Page 11",
  },

  {
    id: "motion-pir01",
    slug: "wall-mounted-motion-sensor-pir-oc-pir01",
    title: "Wall-Mounted Motion Sensor PIR",
    model: "OC-P1",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Microwave & PIR Sensors",
    badge: "PIR Sensor",
    image: "/products/catalog/motion-pir-wall.png",
    shortDesc:
      "Wall-mounted PIR motion sensor with 180-degree detection.",
    description:
      "Wall-mounted PIR motion sensor with adjustable ambient-light and time-delay settings.",
    specs: {
      "Ambient Light":
        "Adjustable from <10 to 2000 lux",
      "Time Delay":
        "Min: 10 sec ± 3 sec | Max: 7 min ± 2 min",
      "Rated Load":
        "1200W Incandescent / 300W Energy-saving Lamp",
      "Detection Distance": "2–10m adjustable",
      "Power Supply": "220–270V AC",
      "Detection Range": "180 Degree",
      "Installing Height": "1.8–2.5m",
    },
    highlights: [
      "PIR motion detection",
      "180-degree detection",
      "2–10m adjustable detection distance",
      "Adjustable ambient light",
    ],
    idealFor: "PIR motion detection",
    catalogueSource: "Smart Motion Sensor Catalogue Page 12",
  },

  {
    id: "motion-zigbee-pir",
    slug: "zigbee-pir-motion-sensor-oc-z-pir02",
    title: "Zigbee PIR Motion Sensor",
    model: "OC-Z-PIR02",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Microwave & PIR Sensors",
    badge: "Zigbee",
    image: "/products/catalog/motion-zigbee-pir.png",
    shortDesc:
      "Battery-powered Zigbee PIR motion sensor.",
    description:
      "Zigbee PIR motion sensor with battery-powered operation.",
    specs: {
      "Mounting Type": "Wall Mount",
      "Battery Description": "Lithium-Ion Polymer",
      "Compatible Devices": "Smartphone / Tablet",
      Dimensions: "40D × 40W × 40H mm",
      "Maximum Range": "33 Feet",
      "Power Source": "Battery Powered",
      Protocol: "Zigbee",
    },
    highlights: [
      "Zigbee communication",
      "Battery-powered operation",
      "Wall mounting",
    ],
    idealFor: "Wireless PIR motion sensing",
    catalogueSource: "Smart Motion Sensor Catalogue Page 13",
  },

  /* =========================================================
     MOTION SENSING LIGHTS
     ========================================================= */

  {
    id: "motion-battery-light",
    slug: "battery-operated-motion-sensor-light",
    title: "Battery operated motion sensor light",
    model: "OC-LB2",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Motion Lights",
    badge: "Battery Operated",
    image: "/products/catalog/motion-battery-light.png",
    shortDesc:
      "Battery-operated motion sensor light using 4 × AAA batteries.",
    description:
      "Battery-operated motion sensor light that turns ON with movement and OFF when idle.",
    specs: {
      "Power Source": "4 × AAA batteries",
      "Motion Detection":
        "Automatically turns ON with movement and OFF when idle",
      "Lighting": "Energy-efficient LEDs",
    },
    highlights: [
      "Battery operated",
      "Automatic motion activation",
      "Automatic switch-off when idle",
    ],
    idealFor: "Wardrobes, cabinets, stairs, corridors and passage areas",
    catalogueSource: "Smart Motion Sensor Catalogue Page 20",
  },

  {
    id: "motion-rechargeable-light-01",
    slug: "rechargeable-motion-sensor-light-oc-rmsl01",
    title: "Rechargeable Motion Sensor Light",
    model: "OC-LR1",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Motion Lights",
    badge: "Rechargeable",
    image: "/products/catalog/motion-rechargeable-light.png",
    shortDesc:
      "Rechargeable motion sensor light with magnetic or adhesive mounting.",
    description:
      "Rechargeable motion sensor light with automatic motion activation.",
    specs: {
      "Rechargeable Battery":
        "Built-in battery",
      "Motion Detection":
        "Automatically turns ON with movement and OFF when idle",
      "Installation":
        "Magnetic base or adhesive mounting",
    },
    highlights: [
      "Rechargeable battery",
      "Motion detection",
      "Magnetic mounting",
      "Adhesive mounting",
    ],
    idealFor: "Wardrobes, cabinets, stairs, corridors and passage areas",
    catalogueSource: "Smart Motion Sensor Catalogue Page 21",
  },

  {
    id: "motion-rechargeable-light-02",
    slug: "rechargeable-motion-sensor-light-oc-rmsl02",
    title: "Rechargeable Motion Sensor Light",
    model: "OC-RMSL 02",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Motion Lights",
    badge: "Rechargeable",
    image: "/products/catalog/motion-rechargeable-light-02.png",
    shortDesc:
      "Rechargeable motion sensor light with 160 LEDs and 800 lumens.",
    description:
      "Rechargeable motion sensor light with adjustable colour temperature.",
    specs: {
      "LED Count": "160 LEDs",
      "Luminous Flux": "800 lumens",
      "Battery Capacity": "3600 mAh rechargeable",
      Power: "5 Watts",
      Voltage: "3.7 Volts",
      "Colour Temperatures":
        "Cold White / Natural White / Warm White",
      Dimming: "Stepless",
      Mounting: "Magnetic strip (stick-on, tool-free)",
      Material: "ABS Plastic (matte finish)",
      Weight: "0.20 kg",
    },
    highlights: [
      "160 LEDs",
      "800 lumens",
      "3600 mAh rechargeable battery",
      "Stepless dimming",
      "Three colour temperature options",
    ],
    idealFor: "Rechargeable motion-sensing illumination",
    catalogueSource: "Smart Motion Sensor Catalogue Page 22",
  },

  {
    id: "motion-rechargeable-light-03",
    slug: "rechargeable-hanging-sensor-light-oc-rmsl03",
    title: "Rechargeable Hanging Sensor Light",
    model: "OC-RMSL03",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Motion Lights",
    badge: "Hanging Sensor Light",
    image: "/products/catalog/motion-rechargeable-light-03.png",
    shortDesc:
      "Rechargeable hanging sensor light with built-in lithium battery.",
    description:
      "Rechargeable hanging sensor light with motion sensing and automatic switch-off.",
    specs: {
      "Battery Capacity":
        "Up to 30 days in motion mode",
      Finish: "Matte walnut",
      Dimensions: "10 × 9 × 17 cm",
      Weight: "0.30 kg",
      Battery: "Built-in rechargeable lithium battery",
      Charging: "USB",
      "Light Colour Temperature":
        "Warm white 2700–3000K",
      "Motion Sensor Range": "Up to 3 metres",
      "Auto-off Time":
        "15 seconds of no motion",
    },
    highlights: [
      "Rechargeable lithium battery",
      "Motion sensing",
      "USB charging",
      "Warm white light",
      "Automatic 15-second switch-off",
    ],
    idealFor: "Motion-sensing hanging illumination",
    catalogueSource: "Smart Motion Sensor Catalogue Page 23",
  },

  {
    id: "motion-rechargeable-light-04",
    slug: "rechargeable-motion-sensor-light-type-c-oc-rmsl04",
    title: "Rechargeable Motion Sensor Light Type C",
    model: "OC-RMSL04",
    category: "Motion Sensors",
    categorySlug: "motion-sensors",
    subcategory: "Motion Lights",
    badge: "Type-C Rechargeable",
    image: "/products/catalog/motion-rechargeable-light-04.png",
    shortDesc:
      "Type-C rechargeable motion sensor light with adjustable colour temperature.",
    description:
      "Rechargeable motion sensor light with Type-C charging and adjustable brightness.",
    specs: {
      "Battery Capacity": "2000 mAh rechargeable",
      "Number Of LEDs": "72 LEDs",
      Material: "Aluminium housing",
      "Colour Temperature":
        "Cool / Neutral / Warm",
      Dimming: "Multiple brightness levels",
      Charging: "USB-C charging cable",
      Mounting:
        "Stick-on adhesive + magnetic mount",
    },
    highlights: [
      "2000 mAh rechargeable battery",
      "72 LEDs",
      "USB-C charging",
      "Adjustable colour temperature",
      "Dimmable",
    ],
    idealFor: "Rechargeable motion-sensing illumination",
    catalogueSource: "Smart Motion Sensor Catalogue Page 24",
  },

  /* =========================================================
     WARDROBE SENSORS
     ========================================================= */

  {
    id: "wardrobe-oc-w1",
    slug: "wardrobe-sensor-oc-w1",
    title: "Wardrobe Sensor",
    model: "OC-W1",
    category: "Wardrobe Sensors",
    categorySlug: "wardrobe-sensors",
    subcategory: "Mechanical Sensors",
    badge: "Wardrobe Sensor",
    image: "/products/catalog/wardrobe-oc-w1.png",
    shortDesc:
      "Wardrobe sensor with selectable warm white and cool white lighting.",
    description:
      "Wardrobe sensor designed to provide automatic lighting when the wardrobe is opened.",
    specs: {
      "Lighting Color":
        "Warm White / Cool White (selectable)",
      Battery: "12V 23A (not included)",
      Type: "Smart Sensor",
      "Bead Quantity per Light": "3 pcs",
      Material: "ABS",
      Colour: "Grey",
    },
    highlights: [
      "Warm white / cool white",
      "Smart wardrobe sensing",
      "ABS construction",
    ],
    idealFor: "Wardrobes and cabinets",
    catalogueSource: "Smart Motion Sensor Catalogue Page 15",
  },

  {
    id: "wardrobe-oc-w2",
    slug: "wardrobe-switch-mechanical-oc-w2",
    title: "Wardrobe Switch (Mechanical)",
    model: "OC-W2",
    category: "Wardrobe Sensors",
    categorySlug: "wardrobe-sensors",
    subcategory: "Mechanical Sensors",
    badge: "Mechanical",
    image: "/products/catalog/wardrobe-oc-w2.png",
    shortDesc:
      "Mechanical wardrobe switch activated by opening and closing the door.",
    description:
      "Mechanical door-activated wardrobe switch.",
    specs: {
      Type: "Mechanical door-activated switch",
      Operation:
        "ON when door opens, OFF when door closes",
      "Voltage Compatibility":
        "12V / 24V / 230V",
      Mounting:
        "Surface or recessed installation",
      Application:
        "Wardrobes, cabinets, drawers, storage units",
    },
    highlights: [
      "Mechanical switching",
      "Door-activated operation",
      "12V / 24V / 230V compatibility",
    ],
    idealFor: "Wardrobes, cabinets and drawers",
    catalogueSource: "Smart Motion Sensor Catalogue Page 16",
  },

  {
    id: "wardrobe-oc-w3",
    slug: "double-door-ir-sensor-oc-w3",
    title: "Double Door IR Sensor",
    model: "OC-W3",
    category: "Wardrobe Sensors",
    categorySlug: "wardrobe-sensors",
    subcategory: "Infrared IR Sensors",
    badge: "Double Door IR",
    image: "/products/catalog/wardrobe-oc-w3.png",
    shortDesc:
      "Double Door IR Sensor for wardrobe and cabinet lighting.",
    description:
      "IR sensor for detecting opening of either door and controlling connected lighting.",
    specs: {
      "Operating Voltage": "12V DC",
      Function:
        "Lights ON when any door opens, OFF when both doors close",
      Application:
        "Wardrobes, cabinets, drawers, storage units",
      Response: "Instant and accurate IR detection",
      Compatibility:
        "Works with 12V LED strip lights and drivers",
    },
    highlights: [
      "Double-door sensing",
      "IR detection",
      "Instant response",
      "12V DC",
    ],
    idealFor: "Double-door wardrobes and cabinets",
    catalogueSource: "Smart Motion Sensor Catalogue Page 17",
  },

  {
    id: "wardrobe-oc-w4",
    slug: "single-door-ir-sensor-oc-w4",
    title: "Single door IR Sensor",
    model: "OC-W4",
    category: "Wardrobe Sensors",
    categorySlug: "wardrobe-sensors",
    subcategory: "Infrared IR Sensors",
    badge: "Single Door IR",
    image: "/products/catalog/wardrobe-oc-w4.png",
    shortDesc:
      "Single door IR Sensor for wardrobe and cabinet lighting.",
    description:
      "IR sensor for single-door wardrobe and cabinet lighting.",
    specs: {
      "Operating Voltage": "12V DC",
      Function:
        "Lights ON when door opens and OFF when door closes",
      Application:
        "Wardrobes, cabinets, drawers, storage units",
      Response: "Instant and accurate IR detection",
      Compatibility:
        "Works with 12V LED strip lights and drivers",
    },
    highlights: [
      "Single-door sensing",
      "IR detection",
      "Instant response",
      "12V DC",
    ],
    idealFor: "Single-door wardrobes and cabinets",
    catalogueSource: "Smart Motion Sensor Catalogue Page 18",
  },

  /* =========================================================
     GAS SENSORS — SMOKE
     ========================================================= */

  {
    id: "gas-wifi-smoke",
    slug: "wifi-smoke-sensor",
    title: "Wi-Fi Smoke Sensor",
    model: "OC-W-SS",
    category: "Gas Sensors",
    categorySlug: "gas-sensors",
    subcategory: "Smoke Detectors",
    badge: "Wi-Fi Smoke",
    image: "/products/catalog/gas-wifi-smoke.png",
    shortDesc:
      "Wi-Fi photoelectric smoke sensor with battery operation.",
    description:
      "Wi-Fi smoke sensor with photoelectric sensing.",
    specs: {
      Alarm: "Audible",
      Weight: "100 g",
      Dimensions: "9 × 9 × 4 cm",
      "Sensor Type": "Photoelectric",
      "Power Source": "Battery Powered",
      "Detection Range": "10 metres",
      Colour: "White",
      Connectivity: "Wi-Fi",
    },
    highlights: [
      "Photoelectric smoke sensing",
      "Wi-Fi connectivity",
      "Battery powered",
      "Audible alarm",
    ],
    idealFor: "Smoke detection applications",
    catalogueSource: "Smart Motion Sensor Catalogue Page 26",
  },

  {
    id: "gas-zigbee-smoke",
    slug: "zigbee-smoke-sensor",
    title: "Zigbee Smoke Sensor",
    model: "OC-Z-SS",
    category: "Gas Sensors",
    categorySlug: "gas-sensors",
    subcategory: "Smoke Detectors",
    badge: "Zigbee Smoke",
    image: "/products/catalog/gas-zigbee-smoke.png",
    shortDesc:
      "Zigbee smoke sensor with wall or ceiling mounting.",
    description:
      "Zigbee smoke sensor for smart safety applications.",
    specs: {
      "Mounting Type": "Wall Mount / Ceiling Mount",
      "Working Humidity":
        "<95%RH (No Condensation)",
      "Working Temperature": "0°C~+55°C",
      Voltage: "3 Volts",
      "Visual Alarm Signal": "Red LED Indicator",
      "Sound Level": ">85dB at 3m",
      Colour: "White",
      Protocol: "Zigbee",
    },
    highlights: [
      "Zigbee connectivity",
      "Wall or ceiling mounting",
      "Red LED alarm indication",
      "85dB+ alarm",
    ],
    idealFor: "Smart smoke detection",
    catalogueSource: "Smart Motion Sensor Catalogue Page 27",
  },

  /* =========================================================
     GAS SENSORS — LPG / PNG
     ========================================================= */

  {
    id: "gas-zigbee-lpg",
    slug: "zigbee-lpg-png-detector",
    title: "Zigbee LPG/PNG Detector",
    model: "OC-Z-LPGS",
    category: "Gas Sensors",
    categorySlug: "gas-sensors",
    subcategory: "Gas Leak Detectors",
    badge: "LPG/PNG",
    image: "/products/catalog/gas-zigbee-lpg.png",
    shortDesc:
      "Zigbee LPG/PNG gas detector with audible and visual alarm.",
    description:
      "Zigbee detector for LPG/PNG gas leakage with audible and visual alarm.",
    specs: {
      "Alarm Method":
        "Audible and visual alarm, and wireless connection alarm",
      "Operating Environment":
        "-10°C to +55°C / ≤95%RH",
      "Transmission Frequency": "2.4GHz",
      Voltage: "AC220V",
      "Alarm LEL": "8% LEL (natural gas)",
      "Sound Level":
        "70dB (1m in front of gas detector)",
      Dimensions: "Φ85mm × 29.6mm",
      Protocol: "Zigbee",
    },
    highlights: [
      "LPG/PNG detection",
      "Audible alarm",
      "Visual alarm",
      "Wireless alarm connection",
      "Zigbee",
    ],
    idealFor: "LPG and PNG gas leak detection",
    catalogueSource: "Smart Motion Sensor Catalogue Page 28",
  },

  /* =========================================================
     DOOR & WINDOW SENSORS
     ========================================================= */

  {
    id: "door-sensor-oc-ds01",
    slug: "door-window-alarm-sensor-oc-ds01",
    title: "Door & Window Alarm Sensor",
    model: "OC-DS01",
    category: "Door & Window Sensors",
    categorySlug: "door-window-sensors",
    subcategory: "Magnetic Sensors",
    badge: "Magnetic",
    image: "/products/catalog/door-sensor-oc-ds01.png",
    shortDesc:
      "Silver door and window alarm sensor using contact magnet sensing.",
    description:
      "Door and window alarm sensor with magnetic contact sensing.",
    specs: {
      Colour: "Silver",
      "Power Source":
        "LR44 batteries (pre-installed)",
      "Sensor Technology": "Contact magnet sensor",
      Dimensions: "3.8 × 1.0 × 7.4 cm",
      Weight: "200 g",
      "Mounting Type":
        "Adhesive tape door/window/cabinet mount",
      "Package Contents":
        "1 alarm unit, adhesive tape, 2 earplugs, user manual",
    },
    highlights: [
      "Contact magnet sensor",
      "Silver finish",
      "Adhesive mounting",
      "Low-battery indicator",
    ],
    idealFor: "Doors, windows and cabinets",
    catalogueSource: "Smart Motion Sensor Catalogue Page 30",
  },

  {
    id: "door-sensor-wifi",
    slug: "wifi-door-sensor-oc-ds02-w",
    title: "Wi-Fi Door Sensor",
    model: "OC-DS02-W",
    category: "Door & Window Sensors",
    categorySlug: "door-window-sensors",
    subcategory: "Magnetic Sensors",
    badge: "Wi-Fi",
    image: "/products/catalog/door-sensor-wifi.png",
    shortDesc:
      "Wi-Fi door sensor for door and window mounting.",
    description:
      "Battery-powered Wi-Fi door sensor.",
    specs: {
      "Mounting Type": "Door Mount / Window Mount",
      Weight: "200 g",
      Dimensions: "8.5 × 5.5 × 3.5 cm",
      Voltage: "3 Volts",
      "Power Source": "Battery Powered",
      "Detection Range": "10 metres",
      Colour: "White",
      Connectivity: "Wi-Fi",
    },
    highlights: [
      "Wi-Fi connectivity",
      "Battery powered",
      "Door and window mounting",
    ],
    idealFor: "Doors and windows",
    catalogueSource: "Smart Motion Sensor Catalogue Page 31",
  },

  {
    id: "sensor-zigbee-sos",
    slug: "zigbee-sos-panic-switch-oc-z-sos",
    title: "Zigbee SOS Panic Switch",
    model: "OC-Z-SOS",
    category: "Door & Window Sensors",
    categorySlug: "door-window-sensors",
    subcategory: "Security & Panic",
    badge: "SOS",
    image: "/products/catalog/sensor-zigbee-sos.png",
    shortDesc:
      "Battery-powered Zigbee SOS panic switch.",
    description:
      "Zigbee SOS panic switch for emergency applications.",
    specs: {
      "Mounting Type": "Wall Mount",
      "Power Source": "Battery Powered",
      Dimensions: "5 × 5 × 1 cm",
      Voltage: "3 Volts",
      "Number of Batteries":
        "1 × CR2032",
      Weight: "75 g",
      "Compatible Devices":
        "PC / Smartphone / Tablet / Zigbee Hub / Tuya SmartLife App / Smart Home Security Systems",
      Protocol: "Zigbee",
    },
    highlights: [
      "SOS panic switch",
      "Zigbee connectivity",
      "Battery powered",
      "Wall mounting",
    ],
    idealFor: "Emergency and panic-alert applications",
    catalogueSource: "Smart Motion Sensor Catalogue Page 32",
  },  /* =========================================================
     TIMER SWITCHES
     ========================================================= */

  {
    id: "timer-frontier",
    slug: "frontier-timer-oc-t1",
    title: "Frontier timer",
    model: "OC-T1",
    category: "Timer Switches",
    categorySlug: "timer-switches",
    subcategory: "Timer Switches",
    badge: "Timer",
    image: "/products/catalog/timer-frontier.png",
    shortDesc:
      "Automatic daily time switch with mechanical dial for lighting loads.",
    description:
      "Automatic time switch designed for daily and 24-hour operation.",
    specs: {
      "Operating Voltage": "230V AC, 50 Hz",
      Type: "Automatic Time Switch (Daily / 24-hour operation)",
      "Load Capacity":
        "Suitable for heavy lighting loads",
      "Time Setting":
        "Mechanical dial with multiple ON/OFF segments",
      Mounting: "Panel",
      Accuracy:
        "High precision time control with stable performance",
      Application:
        "Street lighting, parking lights, signage, common area automation",
    },
    highlights: [
      "Daily / 24-hour operation",
      "Mechanical time setting",
      "Panel mounting",
      "Suitable for heavy lighting loads",
    ],
    idealFor:
      "Street lighting, parking lights, signage and common areas",
    catalogueSource: "Smart Motion Sensor Catalogue Page 39",
  },

  {
    id: "timer-din-rail-4pin",
    slug: "din-rail-mounted-4-pin-oc-t2",
    title: "Din Rail Mounted (4 PIN)",
    model: "OC-T2",
    category: "Timer Switches",
    categorySlug: "timer-switches",
    subcategory: "Timer Switches",
    badge: "4 PIN",
    image: "/products/catalog/timer-din-rail-4pin.png",
    shortDesc:
      "DIN rail-mounted automatic time switch with 15A switching capacity.",
    description:
      "Automatic digital time switch for scheduled ON/OFF control.",
    specs: {
      "Operating Voltage": "230V AC, 50 Hz",
      Type: "Automatic Time Switch / Timer",
      Mounting:
        "DIN Rail Mounted for secure, easy installation",
      "Load Capacity": "15 Amp heavy-duty switching",
      "Time Setting":
        "Digital display with adjustable ON/OFF segments",
      "Switching Capability":
        "Up to 16 ON/OFF operations per day",
      Accuracy:
        "High precision time control with stable performance",
      Applications:
        "Street lights, parking lights, signage, common area lighting automation",
    },
    highlights: [
      "DIN rail mounting",
      "15A switching capacity",
      "Digital display",
      "Up to 16 ON/OFF operations per day",
    ],
    idealFor:
      "Street lights, parking lights, signage and common area lighting",
    catalogueSource: "Smart Motion Sensor Catalogue Page 40",
  },

  {
    id: "timer-din-rail-5pin",
    slug: "din-rail-mounted-5-pin-oc-t3",
    title: "Din Rail Mounted (5 PIN)",
    model: "OC-T3",
    category: "Timer Switches",
    categorySlug: "timer-switches",
    subcategory: "Timer Switches",
    badge: "5 PIN",
    image: "/products/catalog/timer-din-rail-5pin.png",
    shortDesc:
      "DIN rail-mounted automatic time switch with 30A switching capacity.",
    description:
      "Automatic digital time switch for scheduled ON/OFF control.",
    specs: {
      "Operating Voltage": "230V AC, 50 Hz",
      Type: "Automatic Time Switch / Timer",
      Mounting:
        "DIN Rail Mounted for secure, easy installation",
      "Load Capacity": "30 Amp heavy-duty switching",
      "Time Setting":
        "Digital display with adjustable ON/OFF segments",
      "Switching Capability":
        "Up to 16 ON/OFF operations per day",
      Accuracy:
        "High precision time control with stable performance",
      Applications:
        "Street lights, parking lights, signage, common area lighting automation",
    },
    highlights: [
      "DIN rail mounting",
      "30A switching capacity",
      "Digital display",
      "Up to 16 ON/OFF operations per day",
    ],
    idealFor:
      "Street lights, parking lights, signage and common area lighting",
    catalogueSource: "Smart Motion Sensor Catalogue Page 41",
  },

  {
    id: "timer-plug",
    slug: "timer-plug-oc-t4",
    title: "Timer Plug",
    model: "OC-T4",
    category: "Timer Switches",
    categorySlug: "timer-switches",
    subcategory: "Timer Switches",
    badge: "Plug-In Timer",
    image: "/products/catalog/timer-plug.png",
    shortDesc:
      "Plug-in timer for automatic ON/OFF control without wiring.",
    description:
      "Plug-in time switch for lamps, appliances and other devices.",
    specs: {
      "Operating Voltage": "230V AC",
      Type: "Plug-in Time Switch",
      Control:
        "Automatic ON/OFF based on preset schedule",
      Switching:
        "Multiple timer settings for daily use",
      Compatibility:
        "Lamps, appliances and devices up to 10A rated load",
      Installation:
        "Easy plug-in operation – no wiring required",
      Application:
        "Home lights, fans, decorative lights, appliances",
    },
    highlights: [
      "Plug-in installation",
      "No wiring required",
      "Multiple timer settings",
      "Up to 10A rated load",
    ],
    idealFor:
      "Home lights, fans, decorative lights and appliances",
    catalogueSource: "Smart Motion Sensor Catalogue Page 42",
  },

  {
    id: "timer-analogue",
    slug: "analogue-programmable-timer-oc-t5",
    title: "Analogue Programmable Timer",
    model: "OC-T5",
    category: "Timer Switches",
    categorySlug: "timer-switches",
    subcategory: "Timer Switches",
    badge: "Programmable Timer",
    image: "/products/catalog/timer-analogue.png",
    shortDesc:
      "Analogue programmable time switch with mechanical ON/OFF setting.",
    description:
      "Analogue programmable time switch for scheduled control.",
    specs: {
      "Operating Voltage": "230V AC",
      Type: "Analogue programmable time switch",
      Control:
        "Mechanical dial with settable ON/OFF segments",
      "Switching Capacity":
        "Rated load support for 10A household & light commercial devices",
      Installation:
        "Easy plug-in or wall mounting (as per model)",
      Application:
        "Lights, fans, pumps, appliances, outdoor lighting automation",
    },
    highlights: [
      "Analogue time control",
      "Mechanical dial",
      "Programmable ON/OFF segments",
      "10A load support",
    ],
    idealFor:
      "Lights, fans, pumps and appliances",
    catalogueSource: "Smart Motion Sensor Catalogue Page 43",
  },

  {
    id: "timer-astronomical",
    slug: "astronomical-timer-oc-t6",
    title: "Astronomical Timer",
    model: "OC-T6",
    category: "Timer Switches",
    categorySlug: "timer-switches",
    subcategory: "Timer Switches",
    badge: "Astronomical",
    image: "/products/catalog/timer-astronomical.png",
    shortDesc:
      "Astronomical timer with sunrise and sunset based scheduling.",
    description:
      "Timer switch with built-in astronomical clock for automatic daily schedules.",
    specs: {
      "Operating Voltage": "230V AC",
      Control:
        "Built-in astronomical clock with sunrise/sunset adjustment",
      Programming:
        "Automatic daily schedule based on geographic time",
      "Switching Capacity":
        "Supports heavy loads up to 5KW",
      Installation:
        "Panel or DIN rail mounting (model dependent)",
      Application:
        "Street lights, landscape lighting, façade illumination automation",
    },
    highlights: [
      "Astronomical clock",
      "Sunrise/sunset adjustment",
      "Automatic daily scheduling",
      "Up to 5KW load support",
    ],
    idealFor:
      "Street lights, landscape lighting and façade illumination",
    catalogueSource: "Smart Motion Sensor Catalogue Page 44",
  },

  {
    id: "day-night-sensor",
    slug: "day-night-sensor-oc-pc01",
    title: "Day Night Sensor",
    model: "OC-PC1",
    category: "Timer Switches",
    categorySlug: "timer-switches",
    subcategory: "Photocell Sensors",
    badge: "Day / Night",
    image: "/products/catalog/day-night-sensor.png",
    shortDesc:
      "Photocell sensor for automatic day/night lighting control.",
    description:
      "Light-sensitive photocell sensor for automatic day/night switching.",
    specs: {
      "Operating Voltage": "230V AC",
      "Sensor Type": "Photocell (light-sensitive)",
      Detection:
        "Ambient light level sensing for day/night switching",
      "Load Compatibility":
        "Suitable for lighting circuits and outdoor fixtures",
      Installation:
        "Surface or panel mount (model dependent)",
      Applications:
        "Street lights, parking lights, landscape lighting, exterior automation",
    },
    highlights: [
      "Photocell sensing",
      "Automatic day/night switching",
      "Outdoor lighting applications",
    ],
    idealFor:
      "Street lights, parking lights and outdoor lighting",
    catalogueSource: "Smart Motion Sensor Catalogue Page 45",
    catalogueNote:
      "The Master Catalogue summary lists this model as OC-PC1; the detailed Smart Motion Sensor catalogue lists OC-PC01.",
  },

  /* =========================================================
     SMART PLUGS
     ========================================================= */

  {
    id: "smart-wifi-plug-10a",
    slug: "smart-wifi-plug-10a-oc-ss01",
    title: "Smart Wi-Fi Plug (10A)",
    model: "OC-SS01",
    category: "Home Automation Accessories",
    categorySlug: "home-automation-accessories",
    subcategory: "Smart Plugs",
    badge: "10A",
    image: "/products/catalog/smart-wifi-plug-10a.png",
    shortDesc:
      "10A smart Wi-Fi plug with app control and overload protection.",
    description:
      "Smart Wi-Fi plug for connected appliance control.",
    specs: {
      Colour: "White",
      Material: "Durable ABS Plastic",
      "Maximum Current": "10 A",
      "Maximum Power": "2400 W",
      Voltage: "220–240 V AC",
      Connectivity: "Wi-Fi 2.4 GHz (b/g/n)",
      "App Compatibility":
        "iOS 11.0+ and Android 6.0+ (Dedicated Ottoclick App)",
      "Safety & Certification":
        "ASTA/CE compliant; built-in overload protection",
    },
    highlights: [
      "10A maximum current",
      "2400W maximum power",
      "Wi-Fi 2.4 GHz",
      "Built-in overload protection",
    ],
    idealFor: "Smart control of connected appliances",
    catalogueSource: "Smart Motion Sensor Catalogue Page 33",
  },

  {
    id: "smart-wifi-plug-16a",
    slug: "smart-wifi-plug-16a-oc-ss02",
    title: "Smart Wi-Fi Plug (16A)",
    model: "OC-SS02",
    category: "Home Automation Accessories",
    categorySlug: "home-automation-accessories",
    subcategory: "Smart Plugs",
    badge: "16A",
    image: "/products/catalog/smart-wifi-plug-16a.png",
    shortDesc:
      "16A smart Wi-Fi plug for high-power appliances with scheduling and energy monitoring.",
    description:
      "Smart Wi-Fi plug designed for high-power appliance control.",
    specs: {
      Voltage: "230 V AC",
      "Current Rating": "16 A",
      "Maximum Power": "3680 W",
      Connectivity: "Wi-Fi 2.4 GHz and Bluetooth",
      "App Control":
        "Scheduling, timers and energy monitoring",
      "Voice Assistant": "Alexa compatible",
      "Ingress Protection": "IP21 (indoor use)",
      "Operating Temperature": "30 °C to 85 °C",
      Dimensions: "5 × 5 × 6.5 cm",
      Weight: "150 g",
      Material: "Durable plastic housing with copper contacts",
      "Connector Type": "Clamp connector; PCB mount design",
      "Recommended Use":
        "AC, geyser, water pump, heaters",
    },
    highlights: [
      "16A current rating",
      "3680W maximum power",
      "Wi-Fi + Bluetooth",
      "Energy monitoring",
      "Alexa compatible",
    ],
    idealFor:
      "High-power appliances such as AC, geysers, water pumps and heaters",
    catalogueSource: "Smart Motion Sensor Catalogue Page 34",
  },

  /* =========================================================
     SMART CIRCUIT BREAKER
     ========================================================= */

  {
    id: "wifi-circuit-breaker-63a",
    slug: "wifi-circuit-breaker-63a-oc-w-pcm",
    title: "Wi-Fi Circuit Breaker (63A)",
    model: "OC-W-PCM",
    category: "Home Automation Accessories",
    categorySlug: "home-automation-accessories",
    subcategory: "Smart MCB",
    badge: "63A",
    image: "/products/catalog/wifi-circuit-breaker-63a.png",
    shortDesc:
      "Wi-Fi circuit breaker with remote and manual control.",
    description:
      "Wi-Fi circuit breaker for smart remote and manual electrical control.",
    specs: {
      Connect: "1P+N",
      "Wireless Type": "2.4GHz Wi-Fi",
      Size: "82 × 68 × 18 mm",
      "DIN Rail": "35mm",
      "Rated Current": "63A (Optional)",
      "Working Voltage": "AC 90–300V, 50/60Hz",
      "Control Options": "Remote & Manual",
    },
    highlights: [
      "1P+N connection",
      "2.4GHz Wi-Fi",
      "DIN rail mounting",
      "Remote and manual control",
    ],
    idealFor: "Smart circuit protection and remote electrical control",
    catalogueSource: "Smart Motion Sensor Catalogue Page 35",
  },

  /* =========================================================
     IR / RF BLASTERS
     ========================================================= */

  {
    id: "wifi-ir-rf-blaster",
    slug: "wifi-ir-rf-blaster-oc-ir-w",
    title: "Wi-Fi IR + RF Blaster",
    model: "OC-IR-W",
    category: "Home Automation Accessories",
    categorySlug: "home-automation-accessories",
    subcategory: "IR & RF Controllers",
    badge: "IR + RF",
    image: "/products/catalog/wifi-ir-rf-blaster.png",
    shortDesc:
      "Wi-Fi IR and RF blaster for smart device control.",
    description:
      "Wi-Fi IR + RF blaster for remote control of compatible devices.",
    specs: {
      "IR Distance": "10m (no wall)",
      "Working Humidity": "≤85% RH",
      Size: "67 × 6 × 19.5 mm",
      "Standby Power Dissipation": "≤0.5W",
      Power: "DC 5V-1A",
      "IR Frequency": "38K",
      Connectivity: "Wi-Fi",
    },
    highlights: [
      "IR + RF control",
      "10m IR distance",
      "Wi-Fi connectivity",
      "38K IR frequency",
    ],
    idealFor:
      "Smart control of compatible IR/RF appliances",
    catalogueSource: "Smart Motion Sensor Catalogue Page 36",
  },

  {
    id: "zigbee-ir-blaster",
    slug: "zigbee-ir-blaster-oc-ir-z",
    title: "Zigbee IR Blaster",
    model: "OC-IR-Z",
    category: "Home Automation Accessories",
    categorySlug: "home-automation-accessories",
    subcategory: "IR Controllers",
    badge: "Zigbee",
    image: "/products/catalog/zigbee-ir-blaster.png",
    shortDesc:
      "Zigbee IR blaster for controlling compatible home appliances.",
    description:
      "Smart IR controller for compatible devices such as set-top boxes, televisions and air conditioners.",
    specs: {
      Dimensions: "5 × 5 × 2 cm",
      Weight: "95 g",
      "Model Name": "Smart IR Controller",
      "Special Features": "Voice Search",
      "Compatible Devices":
        "Set Top Box, Television, Air Conditioner, etc.",
    },
    highlights: [
      "IR appliance control",
      "Voice search",
      "Compatible with TV, AC and set-top box",
    ],
    idealFor: "IR-enabled home appliances",
    catalogueSource: "Smart Motion Sensor Catalogue Page 37",
    catalogueNote:
      "The source page labels the product 'Zigbee IR Blaster' but also lists 'Connector Type: Wi-Fi'; this has been left without assigning an additional connectivity specification.",
  },

  /* =========================================================
     STAIRCASE AUTOMATION
     ========================================================= */

  {
    id: "staircase-controller",
    slug: "stair-case-controller-oc-sls01",
    title: "Stair Case Controller",
    model: "OC/SLS01",
    category: "Staircase Lighting",
    categorySlug: "staircase-lighting",
    subcategory: "Staircase Controllers",
    badge: "32 Channel",
    image: "/products/catalog/stair-case-controller.png",
    shortDesc:
      "32-channel staircase controller for constant-voltage LED strips.",
    description:
      "Staircase controller with independent constant-voltage channels for sequential staircase lighting.",
    specs: {
      Colour: "White",
      "Mounting Type": "Wall mount",
      Channels:
        "32 independent constant-voltage channels",
      "Max Current Per Channel":
        "1 A (1000 mA) per channel",
      "Output Type":
        "Constant-voltage output for low-voltage LED strips; supports SPI(TTL) signal output",
      "Housing & Installation":
        "Compact plastic housing, wall- or surface-mountable; push switch can act as induction input",
    },
    highlights: [
      "32 independent channels",
      "1A per channel",
      "Constant-voltage LED output",
      "SPI(TTL) signal output support",
    ],
    idealFor: "Sequential staircase LED lighting",
    catalogueSource: "Smart Motion Sensor Catalogue Page 47",
  },

  {
    id: "smart-staircase-pir-controller",
    slug: "smart-staircase-pir-controller-oc-sls02",
    title: "Smart Staircase PIR Controller",
    model: "OC-SLS02",
    category: "Staircase Lighting",
    categorySlug: "staircase-lighting",
    subcategory: "Staircase Controllers",
    badge: "PIR",
    image: "/products/catalog/smart-staircase-pir-controller.png",
    shortDesc:
      "Smart staircase PIR controller supporting up to 30 steps.",
    description:
      "Smart staircase PIR controller with top and bottom motion sensors.",
    specs: {
      Voltage: "12V / 24V DC",
      "Maximum Output Power": "300 W",
      "Supported Steps": "Up to 30 steps",
      "Sensor Type": "PIR motion sensor (dual sensors, top & bottom)",
      "Sensing Distance": "1–3 m",
      "Sensing Angle": "Approx. 120°",
      Connectivity:
        "Bluetooth app control for brightness, effects and timing",
    },
    highlights: [
      "Supports up to 30 steps",
      "Dual PIR sensors",
      "300W maximum output",
      "Bluetooth app control",
    ],
    idealFor: "Automatic staircase lighting",
    catalogueSource: "Smart Motion Sensor Catalogue Page 48",
  },

  {
    id: "stair-motion-light-kit",
    slug: "32-channel-stair-motion-light-kit-oc-slk",
    title: "32-Channel Stair Motion Light Kit",
    model: "OC-SLK",
    category: "Staircase Lighting",
    categorySlug: "staircase-lighting",
    subcategory: "Staircase Kits",
    badge: "Complete Kit",
    image: "/products/catalog/stair-motion-light-kit.png",
    shortDesc:
      "Complete 32-channel stair motion lighting kit with LED strip, controller and PIR sensors.",
    description:
      "32-channel staircase motion light kit with warm white LED strip and dual PIR sensors.",
    specs: {
      "ASIN": "B0F7XCWTYV",
      "Channels / Steps Supported":
        "Up to 32 independent channels (steps)",
      "LED Strip Length": "5 metres (warm white)",
      "Input Voltage":
        "12V DC (adapter included); supports 12V/24V input",
      "Included Power Adapter": "12V, 2A",
      "Maximum Recommended Load": "300 W",
      "Sensor Type & Range":
        "2 PIR motion sensors, detection 1–3m, 120° angle",
      Mounting:
        "Wall mountable controller; flexible strip mounting",
      Weight: "0.36 kg",
      "Included Components":
        "32-channel controller, 5m LED strip, 12V 2A adapter, 2 PIR sensors, input/output cables",
    },
    highlights: [
      "32 independent channels",
      "5m warm-white LED strip",
      "Dual PIR sensors",
      "300W maximum recommended load",
      "Complete staircase lighting kit",
    ],
    idealFor: "Automatic staircase lighting installations",
    catalogueSource: "Smart Motion Sensor Catalogue Page 49",
  },

  /* =========================================================
     SCENE CONTROL / SMART CONTROL PANELS
     ========================================================= */

  {
    id: "zircon-4gang-4scene",
    slug: "zircon-4-gang-4-scene-oc-ssm-4g4s",
    title: "Zircon - 4 Gang + 4 Scene",
    model: "OC-SSM-4G4S",
    category: "Smart Control Panels",
    categorySlug: "smart-control-panels",
    subcategory: "Scene Switches",
    badge: "Zircon",
    image: "/products/catalog/zircon-4gang-4scene.png",
    shortDesc:
      "Zircon 4 Gang + 4 Scene smart control panel.",
    description:
      "Smart scene control panel with four gang controls and four scene controls.",
    specs: {
      Series: "Zircon",
      Controls: "4 Gang + 4 Scene",
    },
    highlights: [
      "4 Gang",
      "4 Scene",
      "Zircon design",
    ],
    idealFor: "Smart lighting and scene control",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "zigbee-4gang-12scene",
    slug: "zigbee-4-gang-12-scene-creator-oc-ssm-4g",
    title: "Zigbee - 4 Gang 12 Scene Creator with Magnetic Wall Plate",
    model: "OC-SSM-4G",
    category: "Smart Control Panels",
    categorySlug: "smart-control-panels",
    subcategory: "Scene Switches",
    badge: "12 Scene",
    image: "/products/catalog/zigbee-4gang-12scene.png",
    shortDesc:
      "Zigbee 4 Gang 12 Scene Creator with magnetic wall plate.",
    description:
      "Zigbee scene creator with four gang controls and twelve scene functions.",
    specs: {
      Technology: "Zigbee",
      Controls: "4 Gang + 12 Scene",
      "Wall Plate": "Magnetic wall plate",
    },
    highlights: [
      "Zigbee",
      "4 Gang",
      "12 Scene",
      "Magnetic wall plate",
    ],
    idealFor: "Scene creation and smart control",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "zigbee-smart-cct-knob",
    slug: "zigbee-smart-cct-dimming-tunable-knob-oc-ssm-cct",
    title: "Zigbee - Smart CCT Dimming + Tunable Knob With Display + 2 Node Scene Switches",
    model: "OC-SSM-CCT",
    category: "Smart Control Panels",
    categorySlug: "smart-control-panels",
    subcategory: "Scene Switches",
    badge: "CCT Control",
    image: "/products/catalog/zigbee-smart-cct-knob.png",
    shortDesc:
      "Zigbee smart CCT dimming and tunable knob with display and 2 node scene switches.",
    description:
      "Zigbee smart CCT dimming controller with tunable knob, display and scene-switch nodes.",
    specs: {
      Technology: "Zigbee",
      Features:
        "Smart CCT Dimming + Tunable Knob With Display",
      "Scene Switches": "2 Node",
    },
    highlights: [
      "Zigbee",
      "CCT dimming",
      "Tunable knob",
      "Display",
      "2 node scene switches",
    ],
    idealFor: "Smart CCT lighting and scene control",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "zircon-4gang-display",
    slug: "zircon-4-gang-with-display-oc-ssm-dis",
    title: "Zircon - 4 Gang with Display",
    model: "OC-SSM-Dis.",
    category: "Smart Control Panels",
    categorySlug: "smart-control-panels",
    subcategory: "Touch Control Panels",
    badge: "Zircon",
    image: "/products/catalog/zircon-4gang-display.png",
    shortDesc:
      "Zircon 4 Gang smart control panel with display.",
    description:
      "Zircon smart control panel with four gang controls and display.",
    specs: {
      Series: "Zircon",
      Controls: "4 Gang",
      Display: "Built-in display",
    },
    highlights: [
      "4 Gang",
      "Display",
      "Zircon",
    ],
    idealFor: "Smart lighting and appliance control",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "smart-zigbee-touch-3-5",
    slug: "35-smart-zigbee-touch-controlscreen-oc-cp-35",
    title: '3.5" Smart Zigbee Touch Control Screen + 4 Gang Relay Support Curtain, Dimming and Scene',
    model: 'OC-CP-3.5"',
    category: "Smart Control Panels",
    categorySlug: "smart-control-panels",
    subcategory: "Touch Control Panels",
    badge: "3.5 Inch",
    image: "/products/catalog/smart-zigbee-touch-3-5.png",
    shortDesc:
      "3.5-inch smart Zigbee touch control screen with 4 gang relay support.",
    description:
      "3.5-inch smart Zigbee touch control screen supporting curtain, dimming and scene control.",
    specs: {
      Display: '3.5"',
      Technology: "Zigbee",
      "Relay Support": "4 Gang",
      Support: "Curtain, Dimming and Scene",
    },
    highlights: [
      '3.5" touch control screen',
      "Zigbee",
      "4 Gang relay support",
      "Curtain control",
      "Dimming",
      "Scene control",
    ],
    idealFor: "Centralized smart home control",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "infinity-6-smart-panel",
    slug: "infinity-6-smart-wifi-touch-control-panel-oc-cp-6",
    title: '(Infinity) - 6" Smart Wi-Fi Touch Control Panel With Knob Control + Zigbee Gateway + Video Calling + Built in 2 Relay Switch',
    model: 'OC-CP-6"',
    category: "Smart Control Panels",
    categorySlug: "smart-control-panels",
    subcategory: "Touch Control Panels",
    badge: "Infinity",
    image: "/products/catalog/infinity-6-smart-panel.png",
    shortDesc:
      "6-inch Smart Wi-Fi touch control panel with knob, Zigbee gateway and video calling.",
    description:
      "Infinity 6-inch smart Wi-Fi touch control panel with built-in relay switching and Zigbee gateway.",
    specs: {
      Series: "Infinity",
      Display: '6"',
      Connectivity: "Wi-Fi",
      "Knob Control": "Supported",
      "Zigbee Gateway": "Built-in",
      "Video Calling": "Supported",
      "Relay Switch": "Built-in 2 Relay Switch",
    },
    highlights: [
      '6" touch control panel',
      "Wi-Fi",
      "Knob control",
      "Zigbee gateway",
      "Video calling",
      "2 built-in relay switches",
    ],
    idealFor: "Centralized smart home control",
    catalogueSource: "Master Catalogue Page 41",
  },

  {
    id: "homesync-pro-4-smart-panel",
    slug: "homesync-pro-4-smart-wifi-touch-control-panel-oc-cp-4",
    title: '(HomeSync Pro) - 4" Smart Wi-Fi Touch Control Panel With Built In Alexa + Zigbee + BLE Mesh Gateway + Video Calling',
    model: 'OC-CP-4"',
    category: "Smart Control Panels",
    categorySlug: "smart-control-panels",
    subcategory: "Touch Control Panels",
    badge: "HomeSync Pro",
    image: "/products/catalog/homesync-pro-4-smart-panel.png",
    shortDesc:
      "4-inch Smart Wi-Fi touch control panel with Alexa, Zigbee, BLE Mesh gateway and video calling.",
    description:
      "HomeSync Pro 4-inch smart Wi-Fi touch control panel with built-in smart home connectivity.",
    specs: {
      Series: "HomeSync Pro",
      Display: '4"',
      Connectivity: "Wi-Fi",
      "Voice Assistant": "Built-in Alexa",
      "Zigbee Gateway": "Built-in",
      "BLE Mesh Gateway": "Built-in",
      "Video Calling": "Supported",
    },
    highlights: [
      '4" touch control panel',
      "Wi-Fi",
      "Built-in Alexa",
      "Zigbee gateway",
      "BLE Mesh gateway",
      "Video calling",
    ],
    idealFor: "Centralized smart home control",
    catalogueSource: "Master Catalogue Page 41",
  },

  /* =========================================================
     END OF PRODUCT DATA
     ========================================================= */

];

export default productsData;
