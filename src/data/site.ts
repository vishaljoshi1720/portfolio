export const site = {
  name: "Vishal Joshi",
  handle: "vj.mobile",
  role: "Senior Mobile Engineer",
  location: "Ahmedabad, India · Remote worldwide",
  email: "vishaljoshi2215889@gmail.com",
  phoneE164: "919925991478",
  phoneDisplay: "+91 99259 91478",
  status: "open_to_freelance",
  availability: "Available for select freelance engagements",
  /** High-intent freelance markets — IST overlaps well with UAE/GCC */
  markets: [
    "USA",
    "UK",
    "EU",
    "UAE",
    "Saudi",
    "Singapore",
    "Australia",
    "Canada",
    "India",
  ],
  marketLine:
    "Remote · USA · UK · EU · UAE · GCC · Singapore · Australia · Canada · India",
  /** Shorter line for hero badge */
  marketLineShort: "USA · UK · EU · UAE · GCC · APAC · India",
  links: {
    linkedin: "https://linkedin.com/in/joshi-vishal",
    github: "https://github.com/vishaljoshi1720",
    /** https://cal.com/vishal-joshi */
    booking: "https://cal.com/vishal-joshi",
    whatsapp:
      "https://wa.me/919925991478?text=Hi%20Vishal%2C%20I%27d%20like%20to%20discuss%20a%20mobile%20project.",
    onePager: "/one-pager",
  },
  /** Keep rates in code; set true to show pricing on site again */
  showRates: false,
  hero: {
    brand: "Vishal Joshi",
    headline:
      "I help startups and agencies ship mobile products users trust — and teams can maintain.",
    support:
      "Senior React Native & Flutter engineer. 5+ years, 15+ production apps across health, fintech, hospitality, and delivery.",
  },
  about: {
    lead: "I build cross-platform mobile products end-to-end — architecture, native bridges, payments, realtime, and App Store release.",
    body: "Currently Senior Developer at Publicis Sapient on The Maybourne Society. Previously shipped 10+ production apps at Nimblechapps and founded delivery patterns that cut crash rates and sped onboarding. I work with startups, agencies, and remote teams across the US, UK, EU, UAE/GCC, and APAC who need a senior mobile owner — not just a ticket-taker.",
  },
  stats: [
    { label: "yrs shipping", value: "5+" },
    { label: "prod apps", value: "15+" },
    { label: "crash-free", value: "99.5%" },
    { label: "domains", value: "4+" },
  ],
  services: [
    "React Native (New Architecture)",
    "Flutter apps",
    "Payments & subscriptions",
    "Performance & crash reduction",
    "Monorepo / modular architecture",
    "CI/CD & store release",
  ],
  /**
   * Dual currency: USD for international (incl. UAE/GCC), INR for India.
   * Prefer project quotes; hourly for short advisory / overflow.
   */
  rates: {
    note: "Project quotes preferred. USA / UK / EU / UAE / GCC / Singapore / Australia / Canada billed in USD. India & local agencies in INR. WhatsApp-friendly for UAE & India.",
    hourlyIntl: "$65–85 / hr",
    hourlyIndia: "₹2,500–3,500 / hr",
    packages: [
      {
        name: "15-min intro",
        priceIntl: "Free",
        priceIndia: "Free",
        detail: "Fit check — goals, timeline, whether I’m the right hire.",
      },
      {
        name: "Mobile audit",
        priceIntl: "from $1,500",
        priceIndia: "from ₹1.25L",
        detail: "3–5 days: crash/perf/release review + prioritized fix plan.",
      },
      {
        name: "Feature sprint",
        priceIntl: "from $4,000",
        priceIndia: "from ₹3.5L",
        detail: "2–4 weeks owned delivery — architecture, build, store-ready.",
      },
      {
        name: "Fractional lead",
        priceIntl: "from $3,000 / mo",
        priceIndia: "from ₹2.5L / mo",
        detail: "Part-time senior ownership — reviews, shipping, unblocking.",
      },
    ],
  },
} as const;

export const projects = [
  {
    id: "01",
    slug: "fitness-chef",
    title: "The Fitness Chef",
    stack: ["React Native", "Stripe", "RevenueCat", "HealthKit", "Fitbit"],
    domain: "Health",
    role: "Senior React Native Developer",
    challenge:
      "Ship a subscription fitness product that syncs health data reliably and converts free users into paying subscribers without tanking store ratings.",
    approach:
      "Owned mobile delivery for nutrition/workout plans, HealthKit & Fitbit sync, Stripe + RevenueCat entitlements, and production monitoring with Sentry.",
    summary:
      "Subscription nutrition & workout plans with fitness API sync and progress tracking for a large active user base.",
    outcome: "50K+ active users · ~25% subscription conversion lift · live on App Store & Play",
    screenshots: [
      "/images/projects/fitness-chef/1.jpg",
      "/images/projects/fitness-chef/2.jpg",
      "/images/projects/fitness-chef/3.jpg",
      "/images/projects/fitness-chef/4.jpg",
    ],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.thefitnesschef.app&hl=en_IN&pli=1",
      ios: "https://apps.apple.com/gb/app/the-fitness-chef/id1667473187",
    },
  },
  {
    id: "02",
    slug: "remedo",
    title: "Remedo Doctor",
    stack: ["React Native", "Video", "Mixpanel", "WebEngage"],
    domain: "Healthcare",
    role: "React Native Developer",
    challenge:
      "Give doctors a stable mobile workflow for availability, appointments, and chat/video consults — with engagement analytics that actually get used.",
    approach:
      "Built consult and scheduling flows, video sessions, and Mixpanel/WebEngage funnels so product could see where doctors dropped off.",
    summary:
      "Doctor platform for availability, appointments, and chat/video consults with analytics-driven engagement.",
    outcome: "Video consults in production · analytics-driven engagement · live on both stores",
    screenshots: [
      "/images/projects/remedo/1.jpg",
      "/images/projects/remedo/2.jpg",
      "/images/projects/remedo/3.jpg",
      "/images/projects/remedo/4.jpg",
    ],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.remedoapp.doctor&hl=en_IN&gl=US",
      ios: "https://apps.apple.com/in/app/remedo-for-doctors/id1189017268",
    },
  },
  {
    id: "03",
    slug: "safer-walking",
    title: "SaferWalking",
    stack: ["React Native", "Maps", "Location", "Push Notifications"],
    domain: "Safety",
    role: "React Native Developer",
    challenge:
      "Deliver a cross-platform safety app where live location and alerts have to feel instant — and still pass store review.",
    approach:
      "Implemented location-aware walks, map UX, and push-driven alerts with a focus on reliability and clear emergency-adjacent flows.",
    summary:
      "Cross-platform walking safety app with live location awareness and practical on-the-go protection flows for everyday users.",
    outcome: "Shipped to App Store & Play Store · realtime location UX in production",
    screenshots: [
      "/images/projects/safer-walking/1.jpg",
      "/images/projects/safer-walking/2.jpg",
      "/images/projects/safer-walking/3.jpg",
      "/images/projects/safer-walking/4.jpg",
    ],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.saferwalkingmobile",
      ios: "https://apps.apple.com/no/app/safer-walking-2/id1637427844",
    },
  },
  {
    id: "04",
    slug: "deardoc",
    title: "DearDoc",
    stack: ["React Native", "Video", "Appointments", "Analytics"],
    domain: "Healthcare",
    role: "React Native Developer",
    challenge:
      "Help doctors run day-to-day practice from mobile — appointments and consults — without a clunky clinic-only web tool.",
    approach:
      "Delivered doctor-facing appointment and consultation flows on a shared React Native codebase for iOS and Android.",
    summary:
      "Doctor-facing app for managing practice workflows, appointments, and patient consultations on iOS and Android.",
    outcome: "Live practice workflows on App Store & Play Store",
    screenshots: [
      "/images/projects/deardoc/1.jpg",
      "/images/projects/deardoc/2.jpg",
      "/images/projects/deardoc/3.jpg",
      "/images/projects/deardoc/4.jpg",
    ],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.deardoc.doctor&hl=en_IN&gl=US",
      ios: "https://apps.apple.com/in/app/deardoc/id1517629173",
    },
  },
] as const;

export const experience = [
  {
    company: "Publicis Sapient",
    role: "Senior Developer — Mobile Solutions L1",
    period: "Aug 2025 – Present",
    place: "Pune / Remote",
    points: [
      "Lead mobile features for The Maybourne Society on React Native.",
      "Monorepo architecture; Wallet + Dynamics membership flows.",
      "Firebase Crashlytics/Analytics/FCM; 99.5%+ crash-free sessions.",
    ],
  },
  {
    company: "Nimblechapps",
    role: "Senior React Native Developer",
    period: "Oct 2022 – Aug 2025",
    place: "Ahmedabad",
    points: [
      "Shipped 10+ apps across health, fitness, e‑com, gaming, food, IoT.",
      "Stripe, Razorpay, MangoPay + RevenueCat; ~25% conversion lift.",
      "Employee of the Year 2023.",
    ],
  },
  {
    company: "Code Symphony LLP",
    role: "React Native Developer",
    period: "Apr 2021 – Sep 2022",
    place: "Jamnagar",
    points: [
      "Built 3 apps from scratch; 4.0+ store ratings within 3 months.",
      "Cut P95 screen load times by ~40% via perf workflows.",
    ],
  },
] as const;

export const skills = {
  platforms: ["React Native (JSI / TurboModules / Fabric / Hermes)", "Flutter", "Expo", "iOS & Android native bridges"],
  craft: ["Reanimated & Gesture Handler", "Clean Architecture / MVVM", "Modular monorepo", "Component-driven UI"],
  data: ["TypeScript", "Zustand / Redux Toolkit", "TanStack Query", "GraphQL / REST", "WebSockets"],
  ship: ["Stripe / Razorpay / RevenueCat", "Firebase suite", "Sentry", "Fastlane / GitHub Actions", "Jest / Detox"],
} as const;

export const testimonials = [
  {
    quote:
      "Vishal owned our React Native stack end-to-end. Payments, crash rates, and release cadence all moved in the right direction within one quarter.",
    name: "Raman Vats",
    title: "Skdoosh Owner",
  },
  {
    quote:
      "Rare mix of architecture taste and shipping speed. Our monorepo stopped being a tax and became an advantage for the mobile team.",
    name: "Siddh Saha",
    title: "Tech Consultant",
  },
  {
    quote:
      "He treats App Store quality as a first-class feature. Reviews climbed and support tickets dropped after his performance pass.",
    name: "Saugat Dutta",
    title: "Skdoosh Owner",
  },
  {
    quote:
      "Clear communication across time zones, strong PR discipline, and zero drama on launch week. Exactly what a remote senior should look like.",
    name: "Kalrav Vaidya",
    title: "Project Manager",
  },
] as const;
