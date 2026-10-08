// All site content lives here. Edit this file to update the portfolio;
// you shouldn't need to touch the components.

import type { IconName } from "@/components/Icon";

export const profile = {
  name: "Acie Agsalud",
  role: "Frontend-Focused Full-Stack Developer",
  intro:
    "Six years building accessible, reliable front ends for enterprise software with React, TypeScript, and Next.js, most recently on insurance systems at a Canadian insurer.",
  location: "Winnipeg, Manitoba",
  status: "Open to new roles", // set to "" to hide
  email: "aciejohn@gmail.com",
  linkedin: "https://www.linkedin.com/in/acieagsalud/",
  github: "https://github.com/acieagsalud", 
  // Put your PDF in /public with this exact name. Consider a copy without your phone number.
  resumeFile: "resume.pdf",
};

export const about = {
  lead: "I want to understand the why before I write the how. Getting the requirement right saves more time than writing the code fast.",
  paragraphs: [
    "I ask questions early, push back when a constraint changes what's possible, and turn fuzzy requirements into tasks a team can estimate.",
    "I build with accessibility and testing in from the start, and I use AI-assisted tools to move faster on implementation and debugging without lowering the bar.",
    "I've done on-call production support, so I care about what happens after a feature ships, not just before.",
  ],
};

export const skillGroups = [
  { title: "Core, day to day", core: true, items: ["React", "TypeScript", "Next.js", "HTML/CSS/SASS", "Jest", "Playwright", "Git", "Postman"] },
  {
    title: "Shipped to production",
    items: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation", "EC2", "S3", "CodePipeline", "Angular", "React Native", "Expo", "Node.js", "Azure AD B2C", "TeamCity"],
  },
  { title: "Earlier or lighter experience", items: ["C#", "ASP.NET Core", "SQL Server", "Docker", "JMeter"] },
];

export type WorkItem = {
  icon: IconName;
  title: string;
  context: string;
  body: string[];
  stat?: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

const insurer = "Canadian property and casualty insurer";

export const work: WorkItem[] = [
  {
    icon: "search",
    title: "Session analytics rollout",
    context: insurer,
    body: [
      "Drove discovery and requirements gathering during the vendor evaluation, then implemented the selected tool across core applications.",
      "It became part of how the team debugs user-reported defects and traces issues surfaced in application logs.",
    ],
    tags: ["Requirements", "Vendor evaluation", "React", "Debugging"],
  },
  {
    icon: "accessibility",
    title: "WCAG accessibility improvements",
    context: insurer,
    body: [
      "Delivered frontend accessibility fixes to bring core applications in line with WCAG compliance requirements.",
      "Built new React components with accessibility and scalability in mind from the start.",
    ],
    tags: ["React", "TypeScript", "WCAG", "Jest", "Playwright"],
  },
  {
    icon: "checklist",
    title: "From requirements to sprint plans",
    context: insurer,
    body: [
      "Translated complex business requirements into component architecture and task breakdowns, which improved sprint predictability and reduced spillover.",
    ],
    stat: "During the same period, our team cut the defect backlog from around 200 to under 20 in about three months.",
    tags: ["Planning", "Estimation", "Architecture", "Guidewire"],
  },
  {
    icon: "phone",
    title: "Client mobile apps and enterprise sign-in",
    context: "Online Business Systems",
    body: [
      "Built mobile apps with React Native and Expo, taking them from first build to production on client delivery deadlines.",
      "Integrated Azure AD B2C so users had one secure sign-in across multiple platforms.",
    ],
    tags: ["React Native", "Expo", "Azure AD B2C", "REST APIs"],
  },
];

export const projects: WorkItem[] = [
    {
    icon: "document",
    title: "Artist/DJ Setlist Planner [In Progress]",
    context: "Personal project",
    body: [
      "An app where a user can search for an artist and is able to view/download information from one of their performances/sets.",
    ],
    tags: ["Next.js", "TypeScript", "More TBD"],
    links: [
      // TODO: add links
      // { label: "Live demo", href: "#" },
      // { label: "Code", href: "#" },
    ],
  },
  {
    icon: "document",
    title: "Virtual Valentines Day Card",
    context: "Personal project",
    body: [
      "A small app where a user is shown a virtual valentines day card with prompts and will send an email response from that prompt.",
      "Shows a Next.js front end with email service integration through Resend",
    ],
    tags: ["Next.js", "TypeScript", "Resend"],
    links: [
      // TODO: add links
      // { label: "Live demo", href: "#" },
      // { label: "Code", href: "#" },
    ],
  },
];

export const experience = [
  {
    when: "2022 – 2026",
    title: "Application Developer II",
    org: insurer,
    points: [
      "Built and maintained React components for enterprise web applications.",
      "Led technical execution on features, from requirements to task breakdown.",
      "Mentored junior developers and worked daily with testers and business stakeholders.",
      "Earned two Guidewire certifications and applied them to business-critical insurance systems.",
    ],
  },
  {
    when: "2019 – 2022",
    title: "Software Developer",
    org: "Online Business Systems",
    points: [
      "Developed full-stack features for an AngularJS enterprise application.",
      "Built React Native mobile apps for clients, from first build to production.",
      "Led technical research and estimation in sprint planning, and helped resolve production issues.",
    ],
  },
  {
    when: "2016 – 2019",
    title: "Sales Representative",
    org: "Fido",
    points: [
      "Exceeded sales targets by roughly 200% through consultative, customer-focused selling.",
      "Served as Manager on Duty and trained new team members.",
    ],
  },
];

export const credentials = [
  { title: "InsuranceSuite Developer", org: "Guidewire · Certified Associate" },
  { title: "EnterpriseEngage Configuration", org: "Guidewire · Certified Specialist" },
  { title: "Business Information Technology", org: "Red River College" },
  { title: "Psychology and Neuropsychology", org: "University of Winnipeg" },
];

export const contact = {
  text: "I'm looking for frontend, full-stack, and analyst-leaning developer roles. Email is the fastest way to reach me.",
};
