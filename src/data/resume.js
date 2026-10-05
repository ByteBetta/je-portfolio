export const resume = {
  name: 'Jerrald Enriquez',
  title: 'Software QA Tester',
  tagline: 'Manual & automation testing for web, API, cloud, and WordPress platforms',

  hero: {
    eyebrow: 'SOFTWARE QA TESTER • MANUAL & AUTOMATION',
    headline: ['QUALITY', 'STARTS BEFORE'],
    highlight: 'YOU SHIP.',
    siteUrl: 'jerraldenriquez.dev',
    footerMeta: 'REMOTE • PH',
  },

  contact: {
    email: 'enriquezjerrald9@gmail.com',
    phone: '+639158454068',
    links: [],
  },

  about:
    'Software QA Tester with hands-on experience testing web platforms, APIs, cloud-storage workflows, and WordPress websites. Skilled in manual testing, Selenium Java automation, JUnit, Postman, Jira, Qase, and structured bug reporting. Experienced in creating test coverage, reproducing issues, validating releases, and working with developers to prevent defects from reaching users.',

  skills: [
    {
      category: 'QA & Testing',
      items: [
        'Manual Testing',
        'Regression Testing',
        'Functional Testing',
        'UI Testing',
        'API Testing',
        'Test Case Design',
        'Test Planning',
        'Bug Reporting',
        'Cross-Browser Testing',
      ],
    },
    {
      category: 'Automation',
      items: ['Selenium', 'Java', 'JUnit', 'Log4j'],
    },
    {
      category: 'Tools',
      items: [
        'Postman',
        'Jira',
        'Qase',
        'ClickUp',
        'Git',
        'Bitbucket',
        'Docker',
        'VS Code',
      ],
    },
    {
      category: 'Platforms & Other',
      items: [
        'AWS S3',
        'Azure Blob Storage',
        'WordPress',
        'Elementor',
        'Lambda Test',
        'SQL/MySQL',
        'ChatGPT',
        'Cursor',
      ],
    },
    {
      category: 'Device Testing',
      items: ['Windows 11 desktop', 'iPhone 16 Pro Max', 'Google Pixel 7'],
    },
  ],

  education: {
    school: 'STI College',
    degree: 'Bachelor of Science in Information Technology',
    period: '2019 – 2022',
    awards: ['Best in Capstone', 'Programmer of the Year'],
  },

  highlights: [
    { icon: 'calendar', value: '2+ years', label: 'Hands-on QA across web, API & cloud' },
    { icon: 'browser', value: '20+ sites', label: "WordPress sites QA'd before launch" },
    { icon: 'cloud', value: 'S3 API', label: 'Automated tests in CI/CD (Java · JUnit)' },
  ],

  qaProcess: [
    {
      step: 1,
      title: 'Understand Requirements',
      description:
        'Review user stories, acceptance criteria, Figma designs, and API specs before writing a single test case.',
    },
    {
      step: 2,
      title: 'Design Test Coverage',
      description:
        'Create test cases, regression checklists, and release validation plans mapped to risk and feature scope.',
    },
    {
      step: 3,
      title: 'Execute & Explore',
      description:
        'Run manual exploratory, functional, UI, API, and cross-browser/device tests. Trigger automation where it adds value.',
    },
    {
      step: 4,
      title: 'Report Defects',
      description:
        'Log bugs with reproducible steps, expected vs actual results, severity, environment details, and supporting evidence.',
    },
    {
      step: 5,
      title: 'Regression & Re-test',
      description:
        'Verify fixes, run regression suites, and re-execute automated tests integrated into CI/CD pipelines.',
    },
    {
      step: 6,
      title: 'Release Sign-off',
      description:
        'Validate release readiness against checklists, confirm critical paths pass, and document sign-off for stakeholders.',
    },
  ],

  deliverables: [
    {
      title: 'Test Cases & Scenarios',
      description: 'Structured coverage for new features, edge cases, and S3-compatible workflows.',
      icon: 'clipboard',
    },
    {
      title: 'Regression Checklists',
      description: 'Repeatable pre-release checklists for WordPress launches and cloud-storage releases.',
      icon: 'checklist',
    },
    {
      title: 'Bug Reports with Evidence',
      description: 'Jira/ClickUp tickets with screenshots, logs, API responses, and clear replication steps.',
      icon: 'bug',
    },
    {
      title: 'Automation Scripts',
      description: 'Selenium (Java) scripts for regression and data-validation tasks like price cross-verification.',
      icon: 'code',
    },
    {
      title: 'Release Validation Plans',
      description: 'Scope-based plans defining what must pass before a build ships to production.',
      icon: 'shield',
    },
    {
      title: 'QA Documentation',
      description: 'Process guides and automation framework notes in Confluence/Atlassian.',
      icon: 'book',
    },
  ],

  testingDomains: [
    {
      title: 'Web & UI Testing',
      items: [
        'Functional and regression testing',
        'Responsive layout and Figma alignment',
        'Form validation and link integrity',
        'Visual consistency and copy review',
      ],
    },
    {
      title: 'API & Cloud Storage',
      items: [
        'S3-compatible API endpoint testing',
        'Uploads, downloads, versioning, multipart',
        'Permissions, checksums, and error handling',
        'Postman collections and response validation',
      ],
    },
    {
      title: 'WordPress & CMS',
      items: [
        'Pre-launch QA for 20+ client sites',
        'Elementor layout and content checks',
        'Safe-zone and imagery review',
        'ClickUp defect tracking with screenshots',
      ],
    },
    {
      title: 'Cross-Browser & Devices',
      items: [
        'Windows 11 desktop browsers',
        'iPhone 16 Pro Max and Google Pixel 7',
        'Lambda Test for broader coverage',
        'Customer-reported issue reproduction',
      ],
    },
  ],

  testPlanSample: {
    title: 'WordPress Client Site — Pre-Launch Test Plan',
    meta: {
      project: 'Client Website Launch (Contact & Forms)',
      build: 'Staging v2.4.0',
      author: 'Jerrald Enriquez',
      tool: 'Qase / ClickUp',
      type: 'Manual + Exploratory',
    },
    objective:
      'Validate that the contact page, form submission, responsive layout, and pre-launch content meet requirements before go-live — with zero critical defects open.',
    scope: {
      inScope: [
        'Contact page layout, copy, and imagery',
        'Form validation, submission, and confirmation message',
        'Responsive behaviour (desktop, tablet, mobile)',
        'Cross-browser smoke on Chrome, Safari, Firefox',
        'Link integrity and navigation to/from contact page',
      ],
      outOfScope: [
        'Backend email delivery infrastructure',
        'Performance/load testing',
        'Third-party CRM integration setup',
      ],
    },
    strategy: [
      'Requirements review against Figma designs and client brief',
      'Risk-based prioritization — forms and mobile first',
      'Exploratory testing for edge cases and copy/layout issues',
      'Regression checklist for shared components (header, footer, nav)',
      'Defect logging in ClickUp with screenshots before sign-off',
    ],
    environments: [
      'Staging URL — latest build',
      'Windows 11 · Chrome (primary)',
      'iPhone 16 Pro Max · Safari',
      'Google Pixel 7 · Chrome',
    ],
    entryCriteria: [
      'Staging build deployed and accessible',
      'Acceptance criteria documented',
      'Test cases reviewed and approved',
      'No blocking environment issues',
    ],
    exitCriteria: [
      'All critical and high-priority test cases executed',
      'No open P0/P1 defects',
      'Regression checklist completed',
      'QA sign-off documented in ClickUp',
    ],
    testCases: [
      {
        id: 'TC-01',
        area: 'Layout',
        summary: 'Contact page matches Figma — desktop',
        priority: 'High',
        type: 'Manual',
      },
      {
        id: 'TC-02',
        area: 'Layout',
        summary: 'Hero section responsive on mobile viewport',
        priority: 'High',
        type: 'Manual',
      },
      {
        id: 'TC-03',
        area: 'Forms',
        summary: 'Required field validation shows inline errors',
        priority: 'High',
        type: 'Manual',
      },
      {
        id: 'TC-04',
        area: 'Forms',
        summary: 'Valid submission shows confirmation message',
        priority: 'Critical',
        type: 'Manual',
      },
      {
        id: 'TC-05',
        area: 'Forms',
        summary: 'Submit button works on mobile (touch)',
        priority: 'Critical',
        type: 'Manual',
      },
      {
        id: 'TC-06',
        area: 'Links',
        summary: 'Header/footer links resolve correctly',
        priority: 'Medium',
        type: 'Manual',
      },
      {
        id: 'TC-07',
        area: 'Content',
        summary: 'Copy, phone, and email match client brief',
        priority: 'Medium',
        type: 'Manual',
      },
      {
        id: 'TC-08',
        area: 'Cross-browser',
        summary: 'Form submission on Safari iOS',
        priority: 'High',
        type: 'Manual',
      },
    ],
    risks: [
      {
        risk: 'Mobile form handler may differ from desktop',
        mitigation: 'Test touch events on real devices early',
      },
      {
        risk: 'Staging content may not match production assets',
        mitigation: 'Confirm final images/copy with client before sign-off',
      },
    ],
  },

  bugBoardColumns: [
    { id: 'Open', label: 'OPEN' },
    { id: 'In Progress', label: 'IN PROGRESS' },
    { id: 'Resolved', label: 'RESOLVED' },
  ],

  bugReportSamples: [
    {
      id: 'wordpress',
      label: 'UI / WordPress',
      tool: 'ClickUp',
      boardTitle: '[Contact Page] Mobile > Submit button unresponsive',
      thumbnailVariant: 'wordpress',
      title: 'Contact form submit button unresponsive on mobile viewport',
      severity: 'High',
      priority: 'P1',
      environment: 'Chrome 124 · iPhone 16 Pro Max · Staging',
      status: 'Open',
      assignee: 'JE',
      steps: [
        'Navigate to /contact on the staging site',
        'Fill in all required fields with valid data',
        'Tap the "Send Message" button',
        'Observe button state and network activity',
      ],
      expected: 'Form submits successfully and a confirmation message is displayed.',
      actual:
        'Button shows a loading spinner indefinitely. No network request is sent. Console shows a JavaScript TypeError on form submit handler.',
      evidence: ['Screenshot of stuck spinner', 'Browser console log', 'Screen recording (15s)'],
      notes:
        'Reproducible on mobile only. Desktop viewport works correctly. Likely a touch-event handler issue.',
    },
    {
      id: 'api',
      label: 'API / Cloud',
      tool: 'Jira',
      boardTitle: '[S3 API] Dev > Multipart upload returns HTTP 500',
      thumbnailVariant: 'api',
      title: 'Multipart upload returns HTTP 500 when part size exceeds 5 MB limit',
      severity: 'Critical',
      priority: 'P0',
      environment: 'Postman · AWS S3 API · Dev environment',
      status: 'In Progress',
      assignee: 'JE',
      steps: [
        'Initiate a multipart upload via PUT /{bucket}/{key}?uploads',
        'Upload a part with Content-Length of 6,291,456 bytes (6 MB)',
        'Complete the multipart upload with valid part ETags',
        'Observe the API response',
      ],
      expected:
        'API returns HTTP 400 with a clear error message indicating the part size exceeds the 5 MB limit.',
      actual:
        'API returns HTTP 500 Internal Server Error with no error body. Server logs show NullPointerException in MultipartHandler.java:142.',
      evidence: ['Postman request/response export', 'Server log excerpt (Log4j)', 'cURL reproduction command'],
      notes:
        'Affects all S3-compatible clients. Regression introduced in build #847. Automated JUnit test added to prevent recurrence.',
    },
    {
      id: 'ecommerce',
      label: 'E-commerce',
      tool: 'Jira',
      boardTitle: '[Checkout] Desktop > Listing price mismatch on cart',
      thumbnailVariant: 'ecommerce',
      title: 'Product listing price does not match checkout total for discounted items',
      severity: 'Medium',
      priority: 'P2',
      environment: 'Chrome 124 · Windows 11 · Production',
      status: 'Resolved',
      assignee: 'JE',
      steps: [
        'Open the product listing page for "Wireless Headphones Pro"',
        'Note the displayed price (₱2,499 with 10% discount badge)',
        'Add item to cart and proceed to checkout',
        'Compare checkout line-item price with listing price',
      ],
      expected: 'Checkout price matches the discounted listing price of ₱2,249.',
      actual:
        'Checkout shows full price ₱2,499. Discount is applied only after page refresh on the cart page.',
      evidence: [
        'Screenshot — listing price',
        'Screenshot — checkout mismatch',
        'Selenium price-extraction script output (Excel)',
      ],
      notes:
        'Customer-reported issue. Root cause: stale cache on cart API. Fixed in v2.3.1. Selenium script now runs nightly for price cross-verification.',
    },
  ],

  automation: {
    title: 'Test Automation',
    subtitle: 'How I use automation in QA work',
    experience:
      'I have hands-on experience with Selenium (Java) for UI regression and data-validation tasks — including scripts that extract product prices from listing pages and cross-check them against checkout data. I’ve also worked with JUnit for API and cloud-storage regression coverage, such as S3 upload, download, versioning, and permission scenarios. Log4j is part of my workflow for structured test logging, and I use automation where it supports release confidence without replacing manual exploratory testing.',
    stack: ['Selenium', 'Java', 'JUnit', 'Log4j'],
    useCases: [
      {
        title: 'UI regression & data validation',
        tool: 'Selenium + Java',
        points: [
          'Extract product prices from listing pages',
          'Cross-check prices against checkout data',
          'Repeatable UI regression after fixes land',
        ],
      },
      {
        title: 'API & cloud storage',
        tool: 'JUnit',
        points: [
          'S3 upload, download, and versioning scenarios',
          'Permission and access-control checks',
          'Error handling and response validation',
        ],
      },
      {
        title: 'Structured test logging',
        tool: 'Log4j',
        points: [
          'Clear logs for automation runs and failures',
          'Faster triage when a script breaks',
          'Consistent output across test suites',
        ],
      },
    ],
    note:
      'Automation repos and sample scripts are currently in progress and will be linked in Projects once uploaded to GitHub.',
  },

  projectsMeta: {
    inProgress: true,
    inProgressMessage:
      'Projects are currently in progress. I’ll upload repos to GitHub as soon as possible and add links here.',
    comingSoonNote:
      'Automation suites, test collections, and QA tools will be linked once they’re on GitHub. Check back soon — or reach out if you’d like a preview.',
  },

  hobbies: {
    title: 'Simple Website Development',
    inProgressMessage:
      'Website list is currently in progress. I’ll add live links and GitHub repos here once they’re uploaded.',
  },

  navLinks: [
    { id: 'about', label: 'About' },
    { id: 'qa-approach', label: 'Process' },
    { id: 'test-plan', label: 'Test Plan' },
    { id: 'bug-reporting', label: 'Bugs' },
    { id: 'automation', label: 'Automation' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
  ],
}
