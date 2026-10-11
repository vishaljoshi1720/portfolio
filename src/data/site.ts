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
    { label: "conversion lift", value: "~25%" },
  ],
  /** Above-the-fold proof chips (Pushkar-style) */
  proof: [
    "5+ years shipping",
    "15+ store apps",
    "99.5% crash-free",
    "~25% sub conversion lift",
  ],
  companies: [
    "Publicis Sapient",
    "Nimblechapps",
    "Code Symphony",
    "The Fitness Chef",
    "Remedo",
    "SaferWalking",
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
    domain: "Health · Consumer",
    platforms: "iOS + Android",
    role: "Senior React Native Developer",
    summary:
      "Subscription nutrition & workout app with health-data sync and progress tracking.",
    challenge:
      "Convert free users into subscribers while keeping HealthKit/Fitbit sync reliable and store ratings intact.",
    approach:
      "Owned mobile delivery — plans, entitlements (Stripe + RevenueCat), fitness API sync, and Sentry monitoring.",
    metrics: [
      "50K+ active users",
      "~25% conversion lift",
      "Live on both stores",
    ],
    shots: [
      {
        src: "/images/projects/fitness-chef/1.jpg",
        label: "Calories & macros",
      },
      { src: "/images/projects/fitness-chef/2.jpg", label: "Weight progress" },
      { src: "/images/projects/fitness-chef/3.jpg", label: "AI food logging" },
      { src: "/images/projects/fitness-chef/4.jpg", label: "High-protein recipes" },
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
    domain: "Healthcare · B2B",
    platforms: "iOS + Android",
    role: "React Native Developer",
    summary:
      "Doctor platform for availability, appointments, and chat/video consults.",
    challenge:
      "Give doctors a stable mobile workflow for consults — with engagement analytics teams actually use.",
    approach:
      "Built appointments, patient profiles, Google Insights, video/clinic consult flows, and Mixpanel/WebEngage funnels.",
    metrics: ["Video consults live", "Google Insights", "Dual-store release"],
    shots: [
      { src: "/images/projects/remedo/1.jpg", label: "Practice dashboard" },
      { src: "/images/projects/remedo/2.jpg", label: "Google Insights" },
      { src: "/images/projects/remedo/3.jpg", label: "Appointments" },
      { src: "/images/projects/remedo/4.jpg", label: "Patient profiles" },
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
    stack: ["React Native", "Maps", "Location", "Push", "Device pairing"],
    domain: "Safety · Consumer IoT",
    platforms: "iOS + Android",
    role: "React Native Developer",
    summary:
      "Safety companion app — live location, SOS calling, multi-device management, and event alerts.",
    challenge:
      "Make live location and emergency-adjacent alerts feel instant — and still clear store review.",
    approach:
      "Shipped map UX, device pairing flows, SOS/call actions, and push-driven event logs under real network conditions.",
    metrics: ["Realtime location UX", "SOS & device flows", "App Store & Play"],
    shots: [
      { src: "/images/projects/safer-walking/1.jpg", label: "SOS & live map" },
      { src: "/images/projects/safer-walking/2.jpg", label: "Multi-device select" },
      { src: "/images/projects/safer-walking/3.jpg", label: "Events & alerts" },
      { src: "/images/projects/safer-walking/4.jpg", label: "Device connect" },
    ],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.saferwalkingmobile",
      ios: "https://apps.apple.com/no/app/safer-walking-2/id1637427844",
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
  platforms: [
    "React Native (JSI / TurboModules / Fabric / Hermes)",
    "Flutter",
    "Expo",
    "iOS & Android native bridges",
  ],
  craft: [
    "Reanimated & Gesture Handler",
    "Clean Architecture / MVVM",
    "Modular monorepo",
    "Component-driven UI",
  ],
  data: [
    "TypeScript",
    "Zustand / Redux Toolkit",
    "TanStack Query",
    "GraphQL / REST",
    "WebSockets",
  ],
  ship: [
    "Stripe / Razorpay / RevenueCat",
    "Firebase suite",
    "Sentry",
    "Fastlane / GitHub Actions",
    "Jest / Detox",
  ],
} as const;

export const testimonials = [
  {
    quote:
      "Vishal owned our React Native stack end-to-end. Payments, crash rates, and release cadence all moved in the right direction within one quarter.",
    name: "Raman Vats",
    title: "Founder, Skdoosh",
    region: "India",
    source: "Direct collaborator",
  },
  {
    quote:
      "Rare mix of architecture taste and shipping speed. Our monorepo stopped being a tax and became an advantage for the mobile team.",
    name: "Siddh Shah",
    title: "Tech Consultant",
    region: "India",
    source: "Engineering collaborator",
  },
  {
    quote:
      "He treats App Store quality as a first-class feature. Reviews climbed and support tickets dropped after his performance pass.",
    name: "Saugat Dutta",
    title: "Founder, Skdoosh",
    region: "India",
    source: "Direct collaborator",
  },
  {
    quote:
      "Clear communication across time zones, strong PR discipline, and zero drama on launch week. Exactly what a remote senior should look like.",
    name: "Kalrav Vaidya",
    title: "Project Manager",
    region: "Remote",
    source: "Delivery partner",
  },
] as const;

/** What clients buy — packages without public prices */
export const engagements = [
  {
    id: "01",
    name: "15-min intro",
    duration: "Free",
    detail:
      "Fit check — goals, timeline, stack, and whether I’m the right senior hire.",
  },
  {
    id: "02",
    name: "Mobile audit",
    duration: "3–5 days",
    detail:
      "Crash, performance, and release review with a prioritized fix plan your team can execute.",
  },
  {
    id: "03",
    name: "Feature sprint",
    duration: "2–4 weeks",
    detail:
      "Owned delivery of a scoped feature or module — architecture, build, QA, store-ready.",
  },
  {
    id: "04",
    name: "Fractional lead",
    duration: "Monthly",
    detail:
      "Part-time senior ownership — reviews, shipping cadence, unblocking, release discipline.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Discovery",
    body: "Scope, risks, store constraints, and a clear definition of done.",
  },
  {
    step: "02",
    title: "Build",
    body: "Weekly demos, tight PRs, Crashlytics/Sentry from day one.",
  },
  {
    step: "03",
    title: "Ship",
    body: "TestFlight / internal tracks, store assets, review fixes, dual-store release.",
  },
  {
    step: "04",
    title: "Handoff",
    body: "Docs, runbooks, and a team that can keep shipping without me.",
  },
] as const;

export const faq = [
  {
    q: "Are you available for freelance or contract React Native work?",
    a: "Yes. I take remote freelance and contract engagements — audits, feature sprints, performance work, payments/subscriptions, and end-to-end app launches. Book a free 15-minute intro or WhatsApp me with a short brief.",
  },
  {
    q: "Do you work with international clients across time zones?",
    a: "Yes — USA, UK, EU, UAE/GCC, Singapore, Australia, Canada, and India. I’m async-friendly with clear updates, and I overlap IST mornings with Europe/UAE and evenings with US East when needed.",
  },
  {
    q: "React Native, Flutter, or Expo?",
    a: "Most production work is React Native (including New Architecture paths) and Flutter. Expo (managed or bare + EAS) is a strong fit for MVPs and teams that want fast store pipelines. I’ll recommend the stack that matches your timeline and native needs — not the one that looks trendy.",
  },
  {
    q: "What kinds of engagements do you take?",
    a: "Four common ones: free intro call, mobile audit (3–5 days), feature sprint (2–4 weeks), and fractional mobile lead (monthly). Project quotes after we understand scope — no public price list.",
  },
  {
    q: "Have you shipped apps to the App Store and Google Play?",
    a: "Yes — 15+ production apps across health, fintech, hospitality, delivery, and safety. Recent live examples include The Fitness Chef, Remedo Doctor, and SaferWalking (links on this site).",
  },
  {
    q: "How fast can you start?",
    a: "Short audits and well-scoped sprints usually start within 1–2 weeks. Larger builds depend on current commitments — send a brief and I’ll reply with availability and a clear next step.",
  },
] as const;

/** Deep case-study copy (homepage stays short; /work/[slug] goes deep) */
export const caseStudies = {
  "fitness-chef": {
    headline:
      "Subscription fitness app that converts free users — without tanking store ratings.",
    problem:
      "The product needed reliable health-data sync and a subscription path that felt fair to users. Missed entitlements, flaky HealthKit/Fitbit sync, or a rough paywall would show up immediately in reviews and churn.",
    challenges: [
      {
        title: "Entitlements that stay honest across stores",
        problem:
          "Stripe + store billing edge cases create “I paid but I’m locked out” support tickets — and one-star reviews.",
        solution:
          "Owned RevenueCat/Stripe entitlement flows, restore-purchase paths, and monitoring so access matched payment state in production.",
      },
      {
        title: "Health data sync users can trust",
        problem:
          "Calories, workouts, and wearables only matter if numbers feel consistent day to day.",
        solution:
          "Stabilized HealthKit & Fitbit sync paths and progressive tracking UX so the app felt dependable under real device conditions.",
      },
      {
        title: "Ship quality at subscriber scale",
        problem:
          "Conversion work is worthless if crashes and release regressions burn trust.",
        solution:
          "Production monitoring with Sentry, careful release discipline, and mobile delivery ownership through store updates.",
      },
    ],
    timeline: [
      {
        phase: "Discovery",
        body: "Mapped subscription + sync risks, store constraints, and the metrics that mattered (activation → paywall → retained sub).",
      },
      {
        phase: "Build",
        body: "Delivered plans, entitlements, fitness API sync, and instrumentation iteratively with production-safe releases.",
      },
      {
        phase: "Launch / iterate",
        body: "Kept dual-store releases healthy while conversion and sync improvements landed against a live user base.",
      },
    ],
    outcomes: [
      "50K+ active users on a live dual-store product",
      "~25% subscription conversion lift tied to mobile delivery work",
      "HealthKit / Fitbit sync paths shipping in production",
      "Sentry-backed visibility for crash and release quality",
    ],
  },
  remedo: {
    headline:
      "Doctor-facing mobile workflows for consults, appointments, and practice growth.",
    problem:
      "Doctors needed a phone-first way to run the day — confirm visits, run video/clinic consults, see Google presence, and open patient context — without bouncing between clunky web tools.",
    challenges: [
      {
        title: "Appointment states doctors can trust",
        problem:
          "Tentative, unpaid, canceled, and video vs clinic visits get messy fast. Wrong status = missed consults and angry patients.",
        solution:
          "Built appointment lists with clear status, payment cues, countdowns, and actions (confirm, request payment, mark complete) for audio/video/clinic flows.",
      },
      {
        title: "Video + clinic parity in one mobile surface",
        problem:
          "Doctors switch between teleconsult and in-clinic visits. Separate apps or buried web flows kill adoption.",
        solution:
          "Unified upcoming/previous appointment UX so video and clinic consults live in the same trusted queue doctors already use.",
      },
      {
        title: "Practice growth signals, not vanity dashboards",
        problem:
          "Google profile insights only help if doctors can see search, views, leads, and actions without leaving the app.",
        solution:
          "Shipped Insights for Google presence (search, views, leads, chatbot replies, directions, calls) and wired Mixpanel/WebEngage so product could see where doctors dropped off.",
      },
    ],
    timeline: [
      {
        phase: "Discovery",
        body: "Mapped doctor day-one jobs: confirm appointments, start consults, open patient profiles, and understand Google-driven demand.",
      },
      {
        phase: "Build",
        body: "Delivered dashboard, appointments, patient profiles, Insights, and analytics instrumentation on a shared React Native codebase.",
      },
      {
        phase: "Launch / iterate",
        body: "Kept dual-store releases moving while consult and engagement funnels improved against real clinic usage.",
      },
    ],
    outcomes: [
      "Video + clinic appointment flows live on both stores",
      "Google Insights surface for practice visibility",
      "Patient profile + care-plan context on mobile",
      "Mixpanel / WebEngage funnels for engagement drop-off",
    ],
  },
  "safer-walking": {
    headline:
      "Safety companion app where location, SOS, and device alerts have to feel instant.",
    problem:
      "Families and caregivers need to see where someone is, respond to SOS, manage paired devices, and review alerts — under flaky networks and store-review scrutiny for location/emergency-adjacent UX.",
    challenges: [
      {
        title: "Live map + SOS that reads clearly under stress",
        problem:
          "Emergency-adjacent UI fails if the map is noisy or the call action is hard to hit.",
        solution:
          "Shipped a focused tracking map with SOS markers, battery/context cards, and a clear two-way call action for critical moments.",
      },
      {
        title: "Multi-device mental model",
        problem:
          "One account often watches multiple people/devices. A flat single-user map confuses caregivers.",
        solution:
          "Built device select/list flows so users can switch between tracked devices and jump into the right last-known location context.",
      },
      {
        title: "Events caregivers actually review",
        problem:
          "Push noise without a readable log makes people disable notifications — then miss the alert that mattered.",
        solution:
          "Delivered an events feed for calls and zone/location alerts, plus pairing/connect UX for the Safer Walking device path.",
      },
    ],
    timeline: [
      {
        phase: "Discovery",
        body: "Defined safety-critical flows: track, SOS/call, device pairing, and alert history — plus App Store constraints around location messaging.",
      },
      {
        phase: "Build",
        body: "Implemented maps, device management, SOS/call actions, events, and push-driven updates with reliability under real network conditions.",
      },
      {
        phase: "Launch",
        body: "Shipped to App Store and Play Store with production location UX and clear caregiver-facing alert surfaces.",
      },
    ],
    outcomes: [
      "Realtime location + SOS map UX in production",
      "Multi-device select and connect flows shipped",
      "Events log for calls, zones, and alerts",
      "Live dual-store release for a safety/IoT product",
    ],
  },
} as const;

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getCaseStudy(slug: string) {
  if (slug in caseStudies) {
    return caseStudies[slug as keyof typeof caseStudies];
  }
  return null;
}
