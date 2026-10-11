export const site = {
  name: "Vishal Joshi",
  handle: "vj.mobile",
  role: "Senior Mobile Engineer",
  location: "Ahmedabad, India · Remote US/EU",
  email: "vishaljoshi2215889@gmail.com",
  status: "open_to_freelance",
  availability: "Available for select freelance engagements",
  links: {
    linkedin: "https://linkedin.com/in/joshi-vishal",
    github: "https://github.com/vishaljoshi1720",
  },
  hero: {
    brand: "Vishal Joshi",
    headline:
      "I help startups and agencies ship mobile products users trust — and teams can maintain.",
    support:
      "Senior React Native & Flutter engineer. 5+ years, 15+ production apps across health, fintech, hospitality, and delivery.",
  },
  about: {
    lead: "I build cross-platform mobile products end-to-end — architecture, native bridges, payments, realtime, and App Store release.",
    body: "Currently Senior Developer at Publicis Sapient on The Maybourne Society. Previously shipped 10+ production apps at Nimblechapps and founded delivery patterns that cut crash rates and sped onboarding. I work with startups, agencies, and remote US/EU teams who need a senior mobile owner — not just a ticket-taker.",
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
} as const;

export const projects = [
  {
    id: "01",
    title: "The Fitness Chef",
    stack: ["React Native", "Stripe", "RevenueCat", "HealthKit", "Fitbit"],
    domain: "Health",
    summary:
      "Subscription nutrition & workout plans with fitness API sync and progress tracking for a large active user base.",
    outcome: "50K+ active users · ~25% subscription conversion lift",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.thefitnesschef.app&hl=en_IN&pli=1",
      ios: "https://apps.apple.com/gb/app/the-fitness-chef/id1667473187",
    },
  },
  {
    id: "02",
    title: "Remedo Doctor",
    stack: ["React Native", "Video", "Mixpanel", "WebEngage"],
    domain: "Healthcare",
    summary:
      "Doctor platform for availability, appointments, and chat/video consults with analytics-driven engagement.",
    outcome: "Video consults · analytics funnels · Google Business API",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.remedoapp.doctor&hl=en_IN&gl=US",
      ios: "https://apps.apple.com/in/app/remedo-for-doctors/id1189017268",
    },
  },
  {
    id: "03",
    title: "SaferWalking",
    stack: ["React Native", "Maps", "Location", "Push Notifications"],
    domain: "Safety",
    summary:
      "Cross-platform walking safety app with live location awareness and practical on-the-go protection flows for everyday users.",
    outcome: "Live on App Store & Play Store",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.saferwalkingmobile",
      ios: "https://apps.apple.com/no/app/safer-walking-2/id1637427844",
    },
  },
  {
    id: "04",
    title: "DearDoc",
    stack: ["React Native", "Video", "Appointments", "Analytics"],
    domain: "Healthcare",
    summary:
      "Doctor-facing app for managing practice workflows, appointments, and patient consultations on iOS and Android.",
    outcome: "Live on App Store & Play Store",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.deardoc.doctor&hl=en_IN&gl=US",
      ios: "https://apps.apple.com/in/app/deardoc-for-doctor/id1566119148",
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
