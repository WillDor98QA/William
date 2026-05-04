/* ── Image URLs (Unsplash CDN) ────────────────────────────── */
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&q=85",
  about: "/1711170404521.jpeg",
  gksb: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop&q=80",
  kedebah: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
  raffle: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&q=80",
  purpleApp: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=500&fit=crop&q=80",
  drawEngine: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop&q=80",
  sheetMusic: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=500&fit=crop&q=80",
  jubilare: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&q=80",
  tumiMusic: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop&q=80",
  birthRegistry: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80",
  cihrm: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=80",
  agm: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=500&fit=crop&q=80",
  wastecare: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop&q=80",
  nsa: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop&q=80",
  atmosphere: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop&q=80",
  cosyAura: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop&q=80",
} as const;

/* ── Social Links ─────────────────────────────────────────── */
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/william-dor-20463014a/",
  github: "https://github.com/WillDor98QA",
  email: "dwilliametornam@gmail.com",
  phone: "+233 200 720 509",
} as const;

/* ── Types ────────────────────────────────────────────────── */
export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  description: string;
  expandedDescription: string;
  techStack: string[];
  category: "qa" | "frontend" | "wordpress";
  metrics: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  metric: string;
  metricValue: number;
  metricSuffix: string;
  techStack: string[];
  category: "qa" | "frontend" | "wordpress";
  image: string;
  slug: string;
}

export type SkillCategory = {
  label: string;
  icon: string;
  color: "blue" | "green" | "amber" | "purple";
  skills: { name: string; level: number }[];
};

export interface CaseStudy {
  slug: string;
  title: string;
  category: "qa" | "frontend" | "wordpress";
  tagline: string;
  image: string;
  duration: string;
  team: string;
  overview: string;
  challenge: string;
  approach: { step: string; detail: string }[];
  solution: string;
  results: { label: string; value: string; suffix?: string }[];
  techStack: string[];
  keyLearnings: string[];
}

/* ── Project Data (ordered: most impressive first for FeaturedWork) ── */
export const PROJECTS_DATA: Project[] = [
  {
    id: "gksb",
    slug: "gksb",
    title: "Ghana Knowledge & Skills Bank",
    description:
      "National digital learning and research platform — QA across 700+ hours of educational content in technology, science, literature, arts, and languages, serving 575k+ active users nationwide.",
    challenge:
      "Ensuring content integrity, performance, and reliability across a national-scale platform serving hundreds of thousands of users with diverse multimedia content.",
    metric: "Active Users",
    metricValue: 575000,
    metricSuffix: "+",
    techStack: ["End-to-End QA", "Performance Testing", "Content Validation", "SQL", "UAT"],
    category: "qa",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "kedebah",
    slug: "kedebah",
    title: "Kedebah ERP Payroll Platform",
    description:
      "Enterprise payroll system QA with Ghana-specific PAYE/SSNIT compliance testing, covering 7-step setup wizard, employee management, and mobile money validation across 8+ ERP modules.",
    challenge:
      "Ensuring zero compliance errors in Ghana's PAYE/SSNIT tax calculations before going live with real enterprise payroll data.",
    metric: "Test Cases Written",
    metricValue: 500,
    metricSuffix: "+",
    techStack: ["QA Testing", "Excel/openpyxl", "MySQL", "Eganow", "Mobile Money"],
    category: "qa",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "raffle",
    slug: "ghana-raffle",
    title: "Ghana 2026 World Cup Raffle",
    description:
      "National raffle platform load tested at 10,000 concurrent USSD users with Eganow payment API debugging, SMS notifications, USSD flow design, and 99.2% data reconciliation accuracy.",
    challenge:
      "Resolving K6 auth token expiry under burst load and building automated reconciliation between 3 data sources.",
    metric: "Concurrent Users",
    metricValue: 10000,
    metricSuffix: "",
    techStack: ["K6 Load Testing", "Eganow API", "USSD Design", "Python", "MySQL"],
    category: "qa",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "purple-app",
    slug: "purple-app",
    title: "Hollard Purple Insurance App",
    description:
      "Flutter-based insurance platform QA covering policy workflows, mandate save features, reinstatement flows, PRD drafting, and resolving Google Play Console Android 15 16KB memory alignment.",
    challenge:
      "Diagnosing a 16KB page alignment build error that was blocking Flutter v55/56 Play Store submissions, with no prior documentation for the fix.",
    metric: "Play Store",
    metricValue: 100,
    metricSuffix: "% Unblocked",
    techStack: ["Flutter QA", "REST APIs", "Google Play Console", "PRD Writing", "Python/SQL"],
    category: "qa",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "sheet-music",
    slug: "sheet-music-marketplace",
    title: "Tumi Music Score Marketplace",
    description:
      "Multi-vendor WordPress marketplace with Dokan vendor management, Paystack payment processing (GHS + USD), and automated PDF delivery for Ghanaian composers and arrangers.",
    challenge:
      "Architecting a scalable multi-vendor system with automated digital product delivery and vendor payment reconciliation.",
    metric: "Delivery",
    metricValue: 100,
    metricSuffix: "% Automated",
    techStack: ["WordPress", "WooCommerce", "Dokan", "Paystack", "PDF Delivery"],
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "draw-engine",
    slug: "draw-engine",
    title: "Raffle Draw Engine v2.0",
    description:
      "Comprehensive QA for draw algorithms testing fairness, ticket non-expiry rules, souvenir selection, and audit trail compliance at 1M+ ticket scale with statistical validation.",
    challenge:
      "Statistically validating random draw algorithms for regulatory fairness compliance across 1M+ ticket entries.",
    metric: "Tickets Validated",
    metricValue: 1,
    metricSuffix: "M+",
    techStack: ["K6", "Statistical Analysis", "MySQL", "Python"],
    category: "qa",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "jubilare",
    slug: "jubilare-mental-health",
    title: "Jubilare 2026 Mental Health Campaign",
    description:
      "Campaign landing page for the Jubilare Group's 2026 mental health awareness initiative — event registration, donor/sponsor tiers, and culturally sensitive Ghana-focused copywriting.",
    challenge:
      "Crafting a sensitive, credible campaign site that drives event sign-ups and sponsor interest while addressing mental health in a culturally appropriate way.",
    metric: "Campaign Year",
    metricValue: 2026,
    metricSuffix: "",
    techStack: ["WordPress", "Elementor", "HTML/CSS", "Email Integration"],
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "tumi-music",
    slug: "tumi-music",
    title: "Tumi Music Promotional Website",
    description:
      "Professional music promotional site with catalog showcase, artist profiles, embedded music player, event listings, and SEO schema markup — optimized for mobile performance.",
    challenge:
      "Building a media-rich music site that loads fast on Ghana's mobile networks without hurting Core Web Vitals.",
    metric: "Lighthouse Score",
    metricValue: 90,
    metricSuffix: "+",
    techStack: ["WordPress", "Custom Theme", "Music Player", "SEO"],
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop&q=80",
  },
];

/* ── Case Study Data ──────────────────────────────────────── */
export const CASE_STUDIES: Record<string, CaseStudy> = {
  gksb: {
    slug: "gksb",
    title: "Ghana Knowledge & Skills Bank",
    category: "qa",
    tagline: "QA for a national learning platform serving 575k+ active users",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=900&fit=crop&q=85",
    duration: "2024 – Present",
    team: "QA Engineer + Product & Engineering Teams",
    overview:
      "The Ghana Knowledge & Skills Bank (GKSB) is a national digital learning and research platform housing 700+ hours of educational content across technology, science, literature, arts, and languages — with 575k+ active users. I led end-to-end QA across all major content types, user flows, and system integrations to ensure platform stability at national scale.",
    challenge:
      "Testing a national-scale education platform serving 575k+ concurrent users required a disciplined approach to content integrity, cross-browser compatibility, and performance validation. The sheer volume of multimedia content (video, audio, documents, quizzes) across diverse user devices and Ghana's varied network conditions created complex edge cases.",
    approach: [
      { step: "Content QA Strategy", detail: "Designed test coverage matrix for 700+ hours of content across 5 subject categories and multiple media types." },
      { step: "User Journey Testing", detail: "Mapped and executed end-to-end user flows for students, educators, and administrators across all platform roles." },
      { step: "Cross-Device Validation", detail: "Tested across desktop, tablet, and mobile on diverse browsers to ensure consistent experience across Ghana's device landscape." },
      { step: "Performance Assessment", detail: "Validated content streaming and search performance under representative load conditions for the user base scale." },
      { step: "UAT Documentation", detail: "Produced UAT reports, bug trackers, and user manuals supporting stakeholder sign-off and platform handover." },
    ],
    solution:
      "Delivered comprehensive QA coverage across all content categories and user roles. Systematic testing identified critical content delivery and search accuracy bugs before national launch. UAT documentation enabled smooth stakeholder sign-off and platform team handover.",
    results: [
      { label: "Active Users", value: "575,000", suffix: "+" },
      { label: "Content Hours Tested", value: "700", suffix: "+" },
      { label: "Subject Categories", value: "5", suffix: "" },
      { label: "UAT Sign-Off", value: "100", suffix: "%" },
    ],
    techStack: ["End-to-End QA", "UAT", "Content Validation", "Performance Testing", "SQL", "Cross-Browser Testing"],
    keyLearnings: [
      "National-scale platforms require content QA strategies that scale — individual manual testing must be supplemented with structured bulk validation approaches",
      "Cross-device testing in Ghana requires accounting for a wide range of Android versions and network speeds that differ significantly from Western assumptions",
      "UAT documentation quality directly determines stakeholder confidence and sign-off speed — well-structured reports reduce revision cycles significantly",
    ],
  },
  kedebah: {
    slug: "kedebah",
    title: "Kedebah ERP Payroll Platform",
    category: "qa",
    tagline: "Ensuring payroll compliance for Ghana's enterprise workforce",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&q=85",
    duration: "2024 – Present",
    team: "QA Engineer + Dev Team",
    overview:
      "Kedebah is Ghana's enterprise ERP and payroll platform serving corporate clients. As the lead QA engineer, I designed and executed a comprehensive test strategy covering all major modules including Ghana-specific tax compliance (PAYE, SSNIT), mobile money payments, and complex multi-company structures.",
    challenge:
      "The platform needed to comply with Ghana's PAYE and SSNIT regulations — complex tax structures with tiered rates, employer/employee contribution splits, and strict validation rules. A single miscalculation could result in legal penalties for clients. Additionally, the mobile money integration required exact operator-specific format validation.",
    approach: [
      { step: "Test Planning", detail: "Mapped all 7 setup wizard steps and identified 12 critical compliance modules." },
      { step: "Test Sheet Design", detail: "Built colour-coded Excel sheets with priority levels, module ownership, and pass/fail tracking across 8+ ERP modules." },
      { step: "Compliance Validation", detail: "Manually verified PAYE brackets and SSNIT tiers against Ghana Revenue Authority documentation." },
      { step: "Mobile Money Testing", detail: "Tested MTN MoMo (037x), AirtelTigo (036x), Telecel (034x) operator code validation formats." },
      { step: "Bug Reporting", detail: "Documented 500+ test cases with severity, steps to reproduce, and expected vs actual results." },
    ],
    solution:
      "Delivered a comprehensive test coverage framework with 95%+ module completion rate. Created reusable test templates for new features. The systematic approach caught critical compliance gaps before any production payroll was processed.",
    results: [
      { label: "Test Coverage", value: "95", suffix: "%+" },
      { label: "Test Cases Written", value: "500", suffix: "+" },
      { label: "Critical Bugs Pre-Production", value: "12", suffix: "" },
      { label: "Compliance Issues Resolved", value: "100", suffix: "%" },
    ],
    techStack: ["Excel/openpyxl", "MySQL", "REST APIs", "Eganow", "Postman", "Python"],
    keyLearnings: [
      "Ghana-specific payroll compliance requires deep regulatory knowledge beyond generic QA skills — PAYE and SSNIT have nuanced tier structures",
      "Colour-coded test sheets dramatically improve defect tracking and communication with developers",
      "Mobile money validation needs operator-specific test cases, not generic phone number checks",
    ],
  },
  "ghana-raffle": {
    slug: "ghana-raffle",
    title: "Ghana 2026 World Cup Raffle",
    category: "qa",
    tagline: "Load testing a national platform for 10,000 concurrent users",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop&q=85",
    duration: "2024 – Present",
    team: "QA Engineer + Backend Team",
    overview:
      "The Ghana 2026 World Cup Raffle Platform (blackstars.npontu.com) is a national-scale system handling ticket purchases, USSD payments, SMS notifications, and sponsor management for Ghana's World Cup fundraising effort. I led QA engineering across all integration points including K6 load testing, API debugging, and data reconciliation.",
    challenge:
      "The platform needed to handle 10,000+ concurrent USSD users during peak raffle periods while maintaining Eganow payment API reliability. K6 load tests kept failing due to authentication token expiry under high concurrency — a critical bug that would have caused payment failures at launch.",
    approach: [
      { step: "Load Test Design", detail: "Designed K6 burst test scripts simulating realistic USSD user journeys with payment flows and Basic Auth headers." },
      { step: "Auth Bug Diagnosis", detail: "Traced token expiry to a 60-second JWT TTL being exhausted in 3-second burst scenarios; fixed x-Auth header encoding." },
      { step: "Retry Logic Implementation", detail: "Collaborated with backend team to implement request queuing and exponential backoff under load." },
      { step: "Data Reconciliation", detail: "Built Python scripts to match USSD records, SMS logs, and database entries automatically — 99.2% match rate." },
      { step: "Exchange Rate Validation", detail: "Flagged USD/GHS conversion discrepancies in donation data affecting 3% of transactions." },
    ],
    solution:
      "Resolved the critical authentication bug, enabling stable 10,000 concurrent user load tests. The data reconciliation system achieved 99.2% match rate. The platform launched successfully with 46 pre-production bugs identified and resolved.",
    results: [
      { label: "Concurrent Users Tested", value: "10,000", suffix: "" },
      { label: "Reconciliation Accuracy", value: "99.2", suffix: "%" },
      { label: "Bugs Identified", value: "46", suffix: "" },
      { label: "Critical Issues Resolved", value: "100", suffix: "%" },
    ],
    techStack: ["K6 (JavaScript)", "Eganow API", "USSD Gateway", "MySQL", "Python", "Excel"],
    keyLearnings: [
      "JWT token TTL must be calibrated against burst load test durations — not just normal request rates",
      "Three-way data reconciliation (USSD + SMS + DB) is essential for payment platforms to catch discrepancies",
      "USSD flow design requires understanding all operator routing variations across MTN, AirtelTigo, Telecel",
    ],
  },
  "purple-app": {
    slug: "purple-app",
    title: "Hollard Purple Insurance App",
    category: "qa",
    tagline: "Unblocking Play Store deployment and designing insurance QA frameworks",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1600&h=900&fit=crop&q=85",
    duration: "2024 – Present",
    team: "QA Engineer + Flutter Dev Team",
    overview:
      "Hollard Purple is a Flutter-based mobile insurance app serving Ghanaian policyholders. I acted as QA Engineer and technical analyst, covering feature testing, PRD drafting, and resolving a critical Google Play Console Android 15 16KB memory page alignment error blocking app updates.",
    challenge:
      "Flutter builds v55 and v56 were failing Google Play's 16KB page alignment requirement for Android 15 — blocking app updates for weeks. Additionally, complex insurance policy workflows (reinstatement, mandate save) required rigorous edge-case testing before customer-facing deployment.",
    approach: [
      { step: "Build Error Diagnosis", detail: "Identified the 16KB page alignment error in the ELF binary and coordinated with Flutter team on NDK flags for Android 15 compatibility." },
      { step: "PRD Drafting", detail: "Wrote full PRDs for Mandate Save Button and Policy Reinstatement with user stories and acceptance criteria." },
      { step: "Policy Workflow Testing", detail: "Tested 15+ reinstatement scenarios including partial payment, lapsed policies, and concurrent updates." },
      { step: "Dataset Analysis", detail: "Processed CSV policy exports with Python/SQL to build management dashboards." },
      { step: "Dashboard Design", detail: "Created visualizations for Approved/Completed/Rejected policies by branch, agent, and team lead." },
    ],
    solution:
      "Unblocked the Play Store submission by coordinating the Android 15 NDK fix. Delivered comprehensive PRDs and test suites for two major features. The policy dataset dashboard provided management with visibility across all 4 hierarchy levels.",
    results: [
      { label: "Play Store Blocker Resolved", value: "100", suffix: "%" },
      { label: "Policy Test Scenarios", value: "15", suffix: "+" },
      { label: "PRDs Delivered", value: "2", suffix: "" },
      { label: "Management Levels Covered", value: "4", suffix: "" },
    ],
    techStack: ["Flutter", "Google Play Console", "REST APIs", "Python", "SQL", "MySQL"],
    keyLearnings: [
      "Flutter NDK page alignment for Android 15 requires coordinating between QA, mobile dev, and Google Play requirements",
      "Insurance policy PRDs need to cover reinstatement edge cases: partial payments, lapsed timelines, concurrent updates",
      "CSV analysis with openpyxl can surface management insights that raw database reports miss",
    ],
  },
  "sheet-music-marketplace": {
    slug: "sheet-music-marketplace",
    title: "Tumi Music Score Marketplace",
    category: "wordpress",
    tagline: "Multi-vendor digital marketplace with automated PDF delivery",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1600&h=900&fit=crop&q=85",
    duration: "2024",
    team: "WordPress Developer",
    overview:
      "A multi-vendor WordPress marketplace for sheet music enabling Ghanaian composers and publishers to sell digital PDFs. The platform handles vendor onboarding, automated PDF delivery on purchase, and payment processing via Paystack (GHS + USD).",
    challenge:
      "Building a multi-vendor marketplace where each composer manages their own products, pricing, and earnings — with automated PDF delivery upon purchase and reliable Paystack integration for Ghana's payment landscape.",
    approach: [
      { step: "Architecture Design", detail: "Selected Dokan for multi-vendor management based on WooCommerce compatibility and vendor dashboard quality." },
      { step: "Paystack Integration", detail: "Configured Paystack gateway with GHS and USD support, testing payment flows end-to-end." },
      { step: "PDF Delivery Automation", detail: "Set up WooCommerce digital delivery with download limits and expiry management to prevent link abuse." },
      { step: "Vendor Onboarding", detail: "Designed vendor registration flow, product upload templates, and commission structure." },
      { step: "PRD & Backlog", detail: "Documented full feature backlog in a structured spreadsheet with priorities and acceptance criteria." },
    ],
    solution:
      "Delivered a fully functional multi-vendor marketplace with automated digital delivery, Paystack processing, and self-service vendor management. Vendors independently manage their catalog while buyers receive instant PDF access on purchase.",
    results: [
      { label: "Vendor Types Supported", value: "3", suffix: "" },
      { label: "Payment Currencies", value: "2", suffix: "" },
      { label: "Automated PDF Delivery", value: "100", suffix: "%" },
      { label: "Commission System", value: "✓", suffix: "" },
    ],
    techStack: ["WordPress", "WooCommerce", "Dokan", "Paystack", "PHP", "MySQL"],
    keyLearnings: [
      "Dokan's vendor dashboard significantly reduces admin overhead vs building custom multi-vendor logic",
      "Paystack requires specific webhook configuration for reliable digital product delivery triggers",
      "Digital goods need download limit and expiry policies to prevent link sharing abuse",
    ],
  },
  "draw-engine": {
    slug: "draw-engine",
    title: "Raffle Draw Engine v2.0",
    category: "qa",
    tagline: "Statistically validating 1M+ ticket draws for regulatory compliance",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1600&h=900&fit=crop&q=85",
    duration: "2024 – Present",
    team: "QA Engineer + Backend Team",
    overview:
      "Raffle Draw Engine v2.0 powers the Ghana 2026 World Cup raffle draws, handling 1M+ ticket entries with complex eligibility rules, souvenir winner selection, and full regulatory audit trails. I designed the QA strategy for draw fairness validation.",
    challenge:
      "Validating that random draw algorithms are genuinely fair — not just passing basic tests but meeting statistical distribution requirements for regulatory compliance across 1M+ ticket entries.",
    approach: [
      { step: "Algorithm Analysis", detail: "Reviewed draw algorithm source code to understand PRNG seeding and ticket selection logic." },
      { step: "Edge Case Coverage", detail: "Mapped 30+ edge cases: expired tickets, duplicate entries, draw period boundaries, souvenir eligibility." },
      { step: "Statistical Testing", detail: "Built Python scripts to run 10,000 simulated draws and analyze winner distribution for bias." },
      { step: "Audit Trail Validation", detail: "Verified every draw operation logged to immutable audit trail for regulatory review." },
      { step: "Performance Testing", detail: "K6 tested draw operations at 1M+ ticket scale to validate sub-second draw times." },
    ],
    solution:
      "Delivered statistical proof of algorithm fairness through 10,000+ simulated draws with <0.5% distribution variance. Audit trail logging achieved 100% coverage. Performance confirmed sub-second draw operations at 1M+ scale.",
    results: [
      { label: "Tickets Tested", value: "1M", suffix: "+" },
      { label: "Simulated Draws", value: "10,000", suffix: "+" },
      { label: "Audit Coverage", value: "100", suffix: "%" },
      { label: "Distribution Variance", value: "<0.5", suffix: "%" },
    ],
    techStack: ["K6 (JavaScript)", "Python", "MySQL", "Statistical Analysis", "Excel"],
    keyLearnings: [
      "Statistical fairness validation requires thousands of simulated runs — single test runs are insufficient",
      "PRNG seeding strategy is critical — time-based seeds can create predictable patterns under certain conditions",
      "Regulatory audit trails must be immutable — standard database updates can be modified, need append-only logging",
    ],
  },
  "jubilare-mental-health": {
    slug: "jubilare-mental-health",
    title: "Jubilare 2026 Mental Health Campaign",
    category: "wordpress",
    tagline: "Campaign landing page raising mental health awareness in Ghana",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop&q=85",
    duration: "2024",
    team: "WordPress Developer / Copywriter",
    overview:
      "The Jubilare Group's 2026 Mental Health Campaign needed a compelling online presence to drive awareness, event attendance, and sponsor engagement. I designed and built the full WordPress site with culturally sensitive copywriting tailored to Ghanaian audiences.",
    challenge:
      "Mental health remains a sensitive topic in Ghana, requiring carefully crafted messaging that reduces stigma while driving action — balancing emotional resonance, event registration CTAs, and corporate sponsor appeal.",
    approach: [
      { step: "Content Strategy", detail: "Defined messaging framework balancing awareness, destigmatisation, and event promotion for Ghanaian audiences." },
      { step: "WordPress Setup", detail: "Configured WordPress with Elementor, selecting layouts appropriate for a healthcare awareness campaign." },
      { step: "Page Architecture", detail: "Structured with awareness landing, event registration, speaker profiles, and tiered donor/sponsor sections." },
      { step: "Copywriting", detail: "Wrote all campaign copy with a culturally aware, empathetic tone drawing from Ghana's mental health context." },
      { step: "Email Integration", detail: "Set up email list capture and automated confirmation flows for event registrants." },
    ],
    solution:
      "Delivered a live campaign website with event registration, sponsor tiers, and awareness content. The site successfully combined emotional storytelling with professional structure for both community members and corporate sponsors.",
    results: [
      { label: "Campaign Site", value: "Live", suffix: "" },
      { label: "Page Sections", value: "4", suffix: "" },
      { label: "Email Integration", value: "100", suffix: "%" },
      { label: "Mobile Responsive", value: "100", suffix: "%" },
    ],
    techStack: ["WordPress", "Elementor", "HTML/CSS", "Email Integration", "Campaign Tracking"],
    keyLearnings: [
      "Mental health campaigns in Ghana require culturally calibrated messaging — direct translation of Western frameworks doesn't resonate",
      "Elementor's flexbox containers enable rapid layout iteration without custom CSS for most campaign page patterns",
      "Event registration flows benefit from SMS confirmation as a backup to email for higher open rates in Ghana",
    ],
  },
  "tumi-music": {
    slug: "tumi-music",
    title: "Tumi Music Promotional Website",
    category: "wordpress",
    tagline: "Professional music platform with catalog, artist profiles, and SEO",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&h=900&fit=crop&q=85",
    duration: "2024",
    team: "WordPress Developer",
    overview:
      "Tumi Music needed a professional online presence to showcase their catalog, promote artists, and drive event attendance. I built a WordPress site with music player integration, custom catalog management, and SEO schema markup for music discovery.",
    challenge:
      "Music sites are media-heavy, risking poor load times and Core Web Vitals scores. The challenge was building an engaging, visually rich site that loaded fast enough for mobile users on Ghana's networks while integrating a music player without hurting performance.",
    approach: [
      { step: "Theme Selection", detail: "Evaluated and customised a WordPress theme optimised for media-heavy music content with good mobile performance." },
      { step: "Catalog Architecture", detail: "Structured the catalog with custom post types for tracks, albums, and artist profiles with filtering." },
      { step: "Music Player Integration", detail: "Integrated an HTML5 music player plugin with lazy-loading to minimise initial page weight." },
      { step: "SEO Optimisation", detail: "Implemented schema markup for musicians, optimised meta tags, and configured XML sitemap." },
      { step: "Event Promotions", detail: "Built event listing pages with dates, venue details, and ticket/RSVP links." },
    ],
    solution:
      "Delivered a fully functional music promotional site with integrated player, searchable catalog, artist profiles, and event listings. SEO implementation with structured data achieved strong local search visibility.",
    results: [
      { label: "Lighthouse Score", value: "90", suffix: "+" },
      { label: "SEO Structured Data", value: "✓", suffix: "" },
      { label: "Mobile Performance", value: "90", suffix: "+" },
      { label: "Artist Profiles", value: "100", suffix: "%" },
    ],
    techStack: ["WordPress", "Custom Theme", "Music Player Plugin", "SEO", "HTML/CSS"],
    keyLearnings: [
      "Music player plugins need careful lazy-loading configuration to avoid blocking page render on media-heavy sites",
      "Schema markup for musicians significantly improves rich snippet eligibility and click-through rates in Google Search",
      "Custom post types for music catalogs are far more maintainable long-term than using pages or generic posts",
    ],
  },
};
