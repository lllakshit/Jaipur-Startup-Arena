export type JaipurJob = {
  id: string;
  role: string;
  tags: string[];
  remote: boolean;
  source: string;
  job_url: string;
  location: string;
  job_title: string;
  department: string;
  date_posted: string;
  description: string;
  compensation: string;
  employment_type: string;
  experience_level: string;
};

export type JaipurCompany = {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  latitude: number;
  longitude: number;
  image_url: string | null;
  description: string;
  website: string;
  careersUrl: string;
  sector: string;
  hiringFocus: string[];
  jobs: JaipurJob[];
};

export type JaipurApiPayload = {
  city: "jaipur";
  lastUpdated: string;
  lastUpdatedLabel: string;
  domains: string[];
  companies: JaipurCompany[];
};

const lastUpdated = "2026-03-29T08:30:00+05:30";

export const jaipurCompanies: JaipurCompany[] = [
  {
    id: "cardekho",
    name: "CarDekho",
    address:
      "B-130, Mahindra World City Road, Jagatpura, Jaipur, Rajasthan 302017",
    neighborhood: "Jagatpura",
    latitude: 26.8387,
    longitude: 75.8655,
    image_url: null,
    description:
      "Auto commerce platform with product, marketplace, and consumer finance teams operating from Jaipur.",
    website: "https://www.cardekho.com/",
    careersUrl: "https://careers.girnarsoft.com/jobs/Careers",
    sector: "Mobility",
    hiringFocus: ["Product", "Engineering", "Business operations"],
    jobs: [
      {
        id: "cardekho-platform-engineer",
        role: "Engineering",
        tags: ["Backend", "Platform", "Marketplace", "Scalability"],
        remote: false,
        source: "CarDekho careers",
        job_url: "https://careers.girnarsoft.com/jobs/Careers",
        location:
          "B-130, Mahindra World City Road, Jagatpura, Jaipur, Rajasthan 302017",
        job_title: "Platform Backend Engineer",
        department: "Engineering",
        date_posted: "2026-03-28",
        description:
          "Build marketplace services, pricing flows, and partner integrations for a high-volume mobility platform.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
      {
        id: "cardekho-product-analyst",
        role: "Product",
        tags: ["Analytics", "Funnels", "Growth", "Product"],
        remote: false,
        source: "CarDekho careers",
        job_url: "https://careers.girnarsoft.com/jobs/Careers",
        location:
          "B-130, Mahindra World City Road, Jagatpura, Jaipur, Rajasthan 302017",
        job_title: "Product Analyst",
        department: "Product",
        date_posted: "2026-03-27",
        description:
          "Support product teams with conversion analysis, search behavior insights, and pricing diagnostics.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
    ],
  },
  {
    id: "girnarsoft",
    name: "GirnarSoft",
    address:
      "301, Mahima Trinity, Swej Farm Road, New Sanganer Road, Jaipur, Rajasthan 302019",
    neighborhood: "Sodala",
    latitude: 26.8906,
    longitude: 75.7681,
    image_url: null,
    description:
      "Internet product company behind multiple consumer and B2B platforms with deep engineering strength in Jaipur.",
    website: "https://www.girnarsoft.com/",
    careersUrl: "https://careers.girnarsoft.com/jobs/Careers",
    sector: "Internet Platforms",
    hiringFocus: ["Engineering", "Growth", "Data"],
    jobs: [
      {
        id: "girnarsoft-growth-analyst",
        role: "Growth",
        tags: ["SQL", "Growth", "Experimentation", "Acquisition"],
        remote: false,
        source: "GirnarSoft careers",
        job_url: "https://careers.girnarsoft.com/jobs/Careers",
        location:
          "301, Mahima Trinity, Swej Farm Road, New Sanganer Road, Jaipur, Rajasthan 302019",
        job_title: "Growth Analyst",
        department: "Growth",
        date_posted: "2026-03-28",
        description:
          "Own experiment pipelines, campaign readouts, and funnel analysis across internet products.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
      {
        id: "girnarsoft-frontend-engineer",
        role: "Engineering",
        tags: ["React", "Frontend", "Performance", "UI"],
        remote: false,
        source: "GirnarSoft careers",
        job_url: "https://careers.girnarsoft.com/jobs/Careers",
        location:
          "301, Mahima Trinity, Swej Farm Road, New Sanganer Road, Jaipur, Rajasthan 302019",
        job_title: "Frontend Engineer",
        department: "Engineering",
        date_posted: "2026-03-28",
        description:
          "Ship performant user experiences for marketplaces and transaction-heavy interfaces.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
    ],
  },
  {
    id: "thrillophilia",
    name: "Thrillophilia",
    address:
      "GT Central, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017",
    neighborhood: "Malviya Nagar",
    latitude: 26.8548,
    longitude: 75.8126,
    image_url: null,
    description:
      "Travel-tech company operating marketplace, content, and performance growth functions from Jaipur.",
    website: "https://www.thrillophilia.com/",
    careersUrl: "https://www.thrillophilia.com/careers",
    sector: "Travel",
    hiringFocus: ["Content", "Growth", "Operations"],
    jobs: [
      {
        id: "thrillophilia-content-lead",
        role: "Content",
        tags: ["SEO", "Editorial", "Travel", "Brand"],
        remote: false,
        source: "Thrillophilia careers",
        job_url: "https://www.thrillophilia.com/careers",
        location: "GT Central, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017",
        job_title: "Destination Content Strategist",
        department: "Content",
        date_posted: "2026-03-26",
        description:
          "Drive destination coverage, high-intent landing pages, and editorial commerce performance.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
      {
        id: "thrillophilia-performance-marketer",
        role: "Growth",
        tags: ["Performance", "Ads", "Acquisition", "Travel"],
        remote: false,
        source: "Thrillophilia careers",
        job_url: "https://www.thrillophilia.com/careers",
        location: "GT Central, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017",
        job_title: "Performance Marketing Manager",
        department: "Growth",
        date_posted: "2026-03-27",
        description:
          "Own paid acquisition loops, campaign optimization, and marketplace demand generation.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Senior",
      },
    ],
  },
  {
    id: "woodenstreet",
    name: "WoodenStreet",
    address: "SP-17, RIICO Industrial Area, Sitapura, Jaipur, Rajasthan 302022",
    neighborhood: "Sitapura",
    latitude: 26.7798,
    longitude: 75.8416,
    image_url: null,
    description:
      "Furniture and home commerce brand with Jaipur operations across category, CX, and supply chain.",
    website: "https://www.woodenstreet.com/",
    careersUrl: "https://www.woodenstreet.com/careers",
    sector: "Ecommerce",
    hiringFocus: ["Supply chain", "Marketplace", "Customer experience"],
    jobs: [
      {
        id: "woodenstreet-category-manager",
        role: "Category",
        tags: ["Merchandising", "Pricing", "Furniture", "Planning"],
        remote: false,
        source: "WoodenStreet careers",
        job_url: "https://www.woodenstreet.com/careers",
        location: "SP-17, RIICO Industrial Area, Sitapura, Jaipur, Rajasthan 302022",
        job_title: "Category Manager",
        department: "Category",
        date_posted: "2026-03-25",
        description:
          "Manage assortment, pricing cadence, and furniture demand planning for high-volume ecommerce categories.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
      {
        id: "woodenstreet-cx-ops",
        role: "Operations",
        tags: ["Support", "CRM", "Escalations", "Operations"],
        remote: false,
        source: "WoodenStreet careers",
        job_url: "https://www.woodenstreet.com/careers",
        location: "SP-17, RIICO Industrial Area, Sitapura, Jaipur, Rajasthan 302022",
        job_title: "Customer Experience Operations Lead",
        department: "Customer Experience",
        date_posted: "2026-03-27",
        description:
          "Improve post-order experience, returns workflow, and service quality for Jaipur-led operations.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Senior",
      },
    ],
  },
  {
    id: "tax2win",
    name: "Tax2Win",
    address: "Shipra Path, Mansarovar, Jaipur, Rajasthan 302020",
    neighborhood: "Mansarovar",
    latitude: 26.8492,
    longitude: 75.7674,
    image_url: null,
    description:
      "Tax-tech platform with Jaipur teams spanning product engineering, compliance operations, and advisory flows.",
    website: "https://tax2win.in/",
    careersUrl: "https://tax2win.in/careers",
    sector: "Fintech",
    hiringFocus: ["Tax operations", "Frontend", "Compliance tech"],
    jobs: [
      {
        id: "tax2win-frontend-engineer",
        role: "Engineering",
        tags: ["React", "Payments", "Forms", "Frontend"],
        remote: false,
        source: "Tax2Win careers",
        job_url: "https://tax2win.in/careers",
        location: "Shipra Path, Mansarovar, Jaipur, Rajasthan 302020",
        job_title: "Frontend Engineer",
        department: "Engineering",
        date_posted: "2026-03-28",
        description:
          "Improve tax filing flows, account dashboards, and conversion-sensitive frontend experiences.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
      {
        id: "tax2win-tax-ops",
        role: "Operations",
        tags: ["Tax", "Compliance", "Filing", "Support"],
        remote: false,
        source: "Tax2Win careers",
        job_url: "https://tax2win.in/careers",
        location: "Shipra Path, Mansarovar, Jaipur, Rajasthan 302020",
        job_title: "Tax Operations Associate",
        department: "Operations",
        date_posted: "2026-03-27",
        description:
          "Handle filing workflow reviews, exception management, and customer issue resolution for tax products.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Entry",
      },
    ],
  },
  {
    id: "celebal-tech",
    name: "Celebal Technologies",
    address:
      "JLN Marg, near Jawahar Circle, Malviya Nagar, Jaipur, Rajasthan 302017",
    neighborhood: "Jawahar Circle",
    latitude: 26.8399,
    longitude: 75.8058,
    image_url: null,
    description:
      "Data, AI, and cloud-focused company with Jaipur teams shipping modern enterprise and analytics products.",
    website: "https://celebaltech.com/",
    careersUrl: "https://celebaltech.com/careers/",
    sector: "AI and Data",
    hiringFocus: ["Data engineering", "AI consulting", "Cloud"],
    jobs: [
      {
        id: "celebal-data-engineer",
        role: "Engineering",
        tags: ["Data", "Azure", "Pipelines", "Analytics"],
        remote: false,
        source: "Celebal careers",
        job_url: "https://celebaltech.com/careers/",
        location:
          "JLN Marg, near Jawahar Circle, Malviya Nagar, Jaipur, Rajasthan 302017",
        job_title: "Data Engineer",
        department: "Data",
        date_posted: "2026-03-29",
        description:
          "Build modern data pipelines, warehousing layers, and analytics delivery systems for enterprise clients.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
      {
        id: "celebal-ai-consultant",
        role: "AI",
        tags: ["AI", "Solutions", "Client", "LLMs"],
        remote: true,
        source: "Celebal careers",
        job_url: "https://celebaltech.com/careers/",
        location:
          "JLN Marg, near Jawahar Circle, Malviya Nagar, Jaipur, Rajasthan 302017",
        job_title: "AI Solutions Consultant",
        department: "AI",
        date_posted: "2026-03-29",
        description:
          "Work with clients on AI use cases, delivery architecture, and production adoption of data-led systems.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Senior",
      },
    ],
  },
  {
    id: "gram-power",
    name: "Gram Power",
    address:
      "EPIP Sitapura Industrial Area, Tonk Road, Jaipur, Rajasthan 302022",
    neighborhood: "Sitapura",
    latitude: 26.7838,
    longitude: 75.8433,
    image_url: null,
    description:
      "Climate-tech company focused on grid intelligence, energy access, and hardware-enabled utility operations.",
    website: "https://www.grampower.com/",
    careersUrl: "https://www.grampower.com/careers",
    sector: "Climate and Energy",
    hiringFocus: ["IoT", "Field operations", "Energy analytics"],
    jobs: [
      {
        id: "grampower-firmware",
        role: "Engineering",
        tags: ["IoT", "Firmware", "Embedded", "Energy"],
        remote: false,
        source: "Gram Power careers",
        job_url: "https://www.grampower.com/careers",
        location:
          "EPIP Sitapura Industrial Area, Tonk Road, Jaipur, Rajasthan 302022",
        job_title: "IoT Firmware Engineer",
        department: "Engineering",
        date_posted: "2026-03-26",
        description:
          "Develop firmware for smart metering, energy telemetry, and hardware-led field systems.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
      {
        id: "grampower-field-ops",
        role: "Operations",
        tags: ["Field", "Deployment", "Energy", "Operations"],
        remote: false,
        source: "Gram Power careers",
        job_url: "https://www.grampower.com/careers",
        location:
          "EPIP Sitapura Industrial Area, Tonk Road, Jaipur, Rajasthan 302022",
        job_title: "Field Operations Manager",
        department: "Operations",
        date_posted: "2026-03-25",
        description:
          "Coordinate utility rollouts, field teams, and deployment readiness for distributed energy products.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Senior",
      },
    ],
  },
  {
    id: "froiden",
    name: "Froiden",
    address: "Vaishali Nagar, Jaipur, Rajasthan 302021",
    neighborhood: "Vaishali Nagar",
    latitude: 26.9142,
    longitude: 75.7428,
    image_url: null,
    description:
      "Product engineering and SaaS-focused startup studio shipping internal tools, B2B workflows, and digital products.",
    website: "https://www.froiden.com/",
    careersUrl: "https://www.froiden.com/careers",
    sector: "SaaS",
    hiringFocus: ["Full-stack", "Quality", "Product delivery"],
    jobs: [
      {
        id: "froiden-fullstack",
        role: "Engineering",
        tags: ["Full-stack", "Node.js", "React", "SaaS"],
        remote: true,
        source: "Froiden careers",
        job_url: "https://www.froiden.com/careers",
        location: "Vaishali Nagar, Jaipur, Rajasthan 302021",
        job_title: "Full-stack Engineer",
        department: "Engineering",
        date_posted: "2026-03-28",
        description:
          "Build SaaS modules, client-facing dashboards, and internal tooling with strong delivery ownership.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
      {
        id: "froiden-qa",
        role: "Quality",
        tags: ["QA", "Automation", "Release", "Testing"],
        remote: true,
        source: "Froiden careers",
        job_url: "https://www.froiden.com/careers",
        location: "Vaishali Nagar, Jaipur, Rajasthan 302021",
        job_title: "QA Automation Engineer",
        department: "Quality",
        date_posted: "2026-03-27",
        description:
          "Own release readiness, automation coverage, and end-to-end reliability for product squads.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
    ],
  },
  {
    id: "mr-milkman",
    name: "Mr. Milkman",
    address: "C-Scheme, Jaipur, Rajasthan 302001",
    neighborhood: "C-Scheme",
    latitude: 26.9088,
    longitude: 75.7935,
    image_url: null,
    description:
      "B2B SaaS platform for dairy distribution and subscriptions, with Jaipur product and customer success operations.",
    website: "https://mrmilkman.com/",
    careersUrl: "https://mrmilkman.com/contact-us/",
    sector: "SaaS",
    hiringFocus: ["Customer success", "Design", "Ops tooling"],
    jobs: [
      {
        id: "mrmilkman-csm",
        role: "Customer Success",
        tags: ["SaaS", "Retention", "Onboarding", "Accounts"],
        remote: false,
        source: "Mr. Milkman hiring",
        job_url: "https://mrmilkman.com/contact-us/",
        location: "C-Scheme, Jaipur, Rajasthan 302001",
        job_title: "Customer Success Lead",
        department: "Customer Success",
        date_posted: "2026-03-28",
        description:
          "Manage dairy and retail accounts, drive adoption, and improve renewal quality across subscription operators.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Senior",
      },
      {
        id: "mrmilkman-product-designer",
        role: "Design",
        tags: ["Product design", "B2B", "UX", "Workflows"],
        remote: true,
        source: "Mr. Milkman hiring",
        job_url: "https://mrmilkman.com/contact-us/",
        location: "C-Scheme, Jaipur, Rajasthan 302001",
        job_title: "Product Designer",
        department: "Design",
        date_posted: "2026-03-27",
        description:
          "Design operator-friendly logistics and subscription experiences across web and mobile surfaces.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Mid",
      },
    ],
  },
  {
    id: "minimalist",
    name: "Minimalist",
    address: "Civil Lines, Jaipur, Rajasthan 302006",
    neighborhood: "Civil Lines",
    latitude: 26.9062,
    longitude: 75.7803,
    image_url: null,
    description:
      "Consumer skincare brand with brand, ecommerce, and retention functions that map well to Jaipur startup talent.",
    website: "https://beminimalist.co/",
    careersUrl: "https://beminimalist.co/pages/careers",
    sector: "D2C",
    hiringFocus: ["Brand", "Retention", "Growth"],
    jobs: [
      {
        id: "minimalist-retention",
        role: "Growth",
        tags: ["CRM", "Retention", "Lifecycle", "D2C"],
        remote: false,
        source: "Minimalist careers",
        job_url: "https://beminimalist.co/pages/careers",
        location: "Civil Lines, Jaipur, Rajasthan 302006",
        job_title: "Retention Marketing Manager",
        department: "Growth",
        date_posted: "2026-03-29",
        description:
          "Own lifecycle journeys, repeat purchase loops, and retention communication across the D2C funnel.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Senior",
      },
      {
        id: "minimalist-brand-ops",
        role: "Operations",
        tags: ["Brand", "Campaigns", "Launches", "Operations"],
        remote: false,
        source: "Minimalist careers",
        job_url: "https://beminimalist.co/pages/careers",
        location: "Civil Lines, Jaipur, Rajasthan 302006",
        job_title: "Brand Operations Associate",
        department: "Brand",
        date_posted: "2026-03-28",
        description:
          "Coordinate launch calendars, agency deliverables, and execution across fast-moving consumer campaigns.",
        compensation: "Competitive",
        employment_type: "Full-time",
        experience_level: "Entry",
      },
    ],
  },
];

export const jaipurDomains = Array.from(
  new Set(jaipurCompanies.map((company) => company.sector)),
).sort((left, right) => left.localeCompare(right));

export function getJaipurPayload(): JaipurApiPayload {
  return {
    city: "jaipur",
    lastUpdated,
    lastUpdatedLabel: "Mar 29",
    domains: jaipurDomains,
    companies: jaipurCompanies,
  };
}

export function getJaipurSummary() {
  return {
    companyCount: jaipurCompanies.length,
    jobCount: jaipurCompanies.reduce(
      (sum, company) => sum + company.jobs.length,
      0,
    ),
    domainCount: jaipurDomains.length,
  };
}
