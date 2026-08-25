/**
 * ========================================
 * 🌟 网站内容配置文件 🌟
 * 🌟 Website Content Configuration File 🌟
 * ========================================
 * 
 * 📝 使用说明（非常重要，请仔细阅读）：
 * 📝 Usage Instructions (Very Important, Please Read Carefully):
 * 
 * 1. 这个文件包含网站上显示的所有文字内容
 * 1. This file contains all text content displayed on the website
 * 2. 您只需要修改引号 "" 或 '' 里面的文字
 * 2. You only need to modify the text inside the quotes "" or ''
 * 3. 不要删除引号、逗号、冒号等标点符号
 * 3. Do not delete quotes, commas, colons, or other punctuation marks
 * 4. 不要修改英文单词（如 name、title 等）
 * 4. Do not modify English words (such as name, title, etc.)
 * 5. 修改后保存文件，网站会自动更新
 * 5. After modification, save the file and the website will update automatically
 * 
 * ⚠️ 注意事项：
 * ⚠️ Important Notes:
 * - 修改前建议备份此文件
 * - Back up this file before making changes
 * - 如果网站显示异常，请检查是否误删了标点符号
 * - If the website displays abnormally, check if punctuation marks were accidentally deleted
 * ========================================
 */

export const siteContent = {
  
  // ==========================================
  // 📌 基本信息 - 您的个人信息 (Basic Information - Your Personal Information)
  // ==========================================
  personal: {
    // 您的姓名 (Your name)
    name: "Zhang Bihan",
    // 英文昵称 (English nickname)
    nickname: "Bhann",
    // 您的职位/身份 (Your position/title)
    title: "Human Factors & HCI Researcher · Fall 2027 PhD Applicant",
    // 您所在的学校/机构 (Your school/organization)
    institution: "SAIC Volkswagen",
    // 位置 (Your location)
    location: "Shanghai, China",
    
    // 您的头像图片路径 (Your avatar image path)
    // -----------------------------------------------------------
    // [方式 1]: 使用本地文件 (推荐) - 请将图片命名为 avatar.jpg 并放在 public/images/ 目录下
    // [Method 1]: Use local file (Recommended) - Name image avatar.jpg in public/images/
    avatar: import.meta.env.BASE_URL + 'images/avatar.jpg',
    
    // [方式 2]: 使用在线图片占位符 (默认，用于预览)
    // [Method 2]: Use online placeholder (Default for preview)
    // avatar: "https://placehold.co/400x400?text=Avatar",
    // -----------------------------------------------------------
    
    // 您的邮箱地址 (Your email address)
    email: "Zhangbihan621@outlook.com",
  },

  // ==========================================
  // 📌 社交媒体链接 (Social Media Links)
  // ==========================================
  // 如果某个平台没有，可以将 url 留空 ""
  // If you don't have a platform, leave the url empty ""
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/bhannzhang",
      label: "GitHub",
    },
    {
      platform: "twitter",
      url: "https://x.com/haideezhang?s=11",
      label: "Twitter",
    },
    {
      platform: "linkedin",
      url: "",
      label: "LinkedIn",
    },
    {
      platform: "googleScholar",
      url: "",
      label: "Google Scholar",
    },
  ],

  // ==========================================
  // 📌 首页横幅区域（Overview Section）
  // ==========================================
  overview: {
    // 欢迎语 (Welcome message)
    welcome: "I study how people understand, trust, and coordinate with autonomous and robotic systems in everyday social settings.",
    // 主要描述 (Main description)
    description: "",
    // 注释（可选） (Note (optional))
    note: "",
    // 背景信息 (Background information)
    background: "My research spans human–autonomy interaction, eHMI, cross-cultural HRI, and embodied prototyping, informed by five years of automotive HMI practice.",
    backgroundNote: "",
    researchNarrative: "Beginning with autonomous delivery vehicles in public spaces, I have examined how communication strategies, multimodal cues, and embodiment shape people's understanding and acceptance of autonomy. My current interests extend this work toward socially legible robots and human–AI collaboration in real-world contexts.",
    // 按钮 (Buttons)
    buttons: [
      {
        text: "Download CV",
        link: import.meta.env.BASE_URL + "files/Zhang_Bihan_CV.pdf",
        style: "primary",
        icon: "download",
      },
      {
        text: "Get in Touch",
        link: "mailto:Zhangbihan621@outlook.com",
        style: "secondary",
        icon: "mail",
      },
    ],
  },

  // ==========================================
  // 📌 研究快照（Research Snapshot）
  // ==========================================
  researchSnapshot: {
    sectionTitle: "Research Snapshot",
    coreResearch: {
      title: "Core Research Areas",
      items: [
        "Social interaction with robots and autonomous systems",
        "Trust, legibility, coordination, and human–AI collaboration",
        "Multimodal communication for autonomous mobility and HRI",
        "Embodied prototyping for research in real-world contexts",
      ],
    },
    currentStatus: {
      title: "My Current Status",
      items: [
        "Industry experience in intelligent cockpit HMI since 2021",
        "Experience bridging research, system design, and production programs",
        "Preparing PhD applications for Fall 2027",
      ],
    },
    keywords: ["Human Factors", "HCI", "Human–Robot Interaction", "Human–Autonomy Interaction", "Social Robotics", "Embodied Interaction"],
  },

  // ==========================================
  // 📌 核心研究兴趣 (Core Research Interests)
  // ==========================================
  coreResearchInterests: {
    sectionTitle: "Core Research Interests",
    interests: [
      {
        title: "Human–Robot & Human–Autonomy Interaction",
        descriptions: [
          "Trust, coordination, and social interaction with robots and autonomous systems",
          "Autonomous mobility and public-space robots as empirical contexts",
        ],
      },
      {
        title: "Socially Legible & Multimodal Systems",
        descriptions: [
          "Visual, auditory, behavioral, and spatial cues that make system intentions understandable",
          "Communication across cultures, road users, and group settings",
        ],
      },
      {
        title: "Embodied & Physical Interaction",
        descriptions: [
          "Robotic, tangible, wearable, and responsive physical interfaces",
          "Research through functional prototyping and empirical evaluation",
        ],
      },
    ],
    // 研究问题（斜体显示）
    // Research questions (italicized)
    researchQuestions: [
      "How do people interpret and coordinate with autonomous systems in shared social spaces?",
      "How can multimodal behavior make robots and autonomous vehicles legible without overloading attention?",
      "How do culture, embodiment, and group context shape trust and interaction with intelligent systems?",
    ],
  },

  // ==========================================
  // 📌 教育经历（Education Section）
  // ==========================================
  education: {
    sectionTitle: "Education",
    items: [
      {
        degree: "Master of Interaction Design in HMI & HCI ",
        school: "Tongji University",
        location: "Shanghai, China",
        period: "2018 - 2021",
        gpa: "4.73/5.0 (1st in program)",
        status: "Completed",
        thesis: "Interaction Design, Concentrations in Human computer interaction and cognition",
        achievements: [
          "Outstanding Graduate of Tongji University, 2021 (Top 2%)",
          "Outstanding Master's Thesis, Tongji University (2021)",
          "Hongda Scholarship (2018, 2019) & Excellent Master’s Scholarship (2020), Tongji University (Top 2–3%)",
        ],
      },
      {
        degree: "Bachelor of Electrical Engineer",
        school: "Hohai University",
        location: "Nanjing, China",
        period: "2012 - 2016",
        gpa: "4.08/5.0",
        status: "Completed",
        thesis: "Major in Electrical Engineering and Automation.",
        //achievements: [
         // "Dean's List (6 semesters)",
          //"Undergraduate Research Award",
          //"Academic Excellence Scholarship",
        //],
      },
    ],
    intro: "My training connects electrical engineering, interaction design, and human-centered research."
  },


  // ==========================================
  // 📌 研究项目（Projects Section）
  // ==========================================
  projects: {
    sectionTitle: "Academic Research Experience",
    viewMoreText: "View more",
    items: [
      {
        category: "Human–Autonomy Interaction",
        status: "2018–2021",
        title: "Social Acceptance and External Communication for Autonomous Delivery Vehicles",
        description: "Led a multi-stage research program that developed from a Mitsubishi Electric campus-delivery collaboration into cross-cultural research with Ulm University and an independently redesigned master's thesis prototype. Using Wizard-of-Oz studies, interviews, multimodal eHMI prototyping, and comparative evaluation, I examined how communication strategies influence pedestrians' trust, understanding, and acceptance.",
        tags: ["Project Lead", "Cross-cultural HRI", "Multimodal eHMI", "56 + 25 participants"],
        image: import.meta.env.BASE_URL + 'images/projects/project1.jpg',
        link: import.meta.env.BASE_URL + 'research/autonomous-delivery/',
      },
      {
        category: "Intelligent-Cockpit UX Research",
        status: "2019",
        title: "Cross-Brand Benchmarking for Intelligent-Cockpit Interface Guidelines",
        description: "Led a structured benchmark of 26 automotive brands and translated heterogeneous interface evidence into a 12,000-word internal white paper and actionable UI/UX guidelines. Presented the research at Baidu headquarters; the work was recognized by Apollo Lab for methodological rigor.",
        tags: ["Student Project Lead", "26 brands", "Design synthesis", "NDA-safe case"],
        image: import.meta.env.BASE_URL + 'images/projects/project2-benchmark.svg',
        link: import.meta.env.BASE_URL + 'research/automotive-benchmarking/',
      },
      {
        category: "",
        status: "completed",
        title: "Research on Autonomous Driving Behavior and Strategy",
        description: "Investigated driver behavior under ACC/LKA; designed 10 driving scenarios and collected/analyzed behavioral data from 30 participants.",
        tags: ["Student Project Lead"],
        image: import.meta.env.BASE_URL + 'images/projects/project3.jpg',
        link: "",
      },
      {
        category: "",
        status: "completed",
        title: "FAW Group Hongqi Collaboration Project",
        description: "Led a team to survey and model ~500,000 m² of real-world geography, developing a digital-twin simulation environment adopted as the core evaluation platform for virtual driving tests.",
        tags: ["Team lead"],
        image: import.meta.env.BASE_URL + 'images/projects/project4.jpg',
        link: "",
      },
      {
        category: "",
        status: "completed",
        title: "Intelligent In-Vehicle Interaction System Simulation",
        description: "Spearheaded a six-member team to build the lab's first functional driving simulation platform in Unity, supporting more than 30 subsequent HMI behavior tests.",
        tags: ["Team lead"],
        image: import.meta.env.BASE_URL + 'images/projects/project5.jpg',
        link: "",
      },
      {
        category: "",
        status: "completed",
        title: "AI Voice Assistant Trust Study in Intelligent Cockpit",
        description: "Developed scenario-based prototypes for time-critical driving contexts; examined how multimodal feedback and explanation strategies affect user trust and cognitive load in controlled studies.",
        tags: ["Student Project Lead"],
        image: import.meta.env.BASE_URL + 'images/projects/project6.jpg',
        link: "",
      },
    ],
  },

  // ==========================================
  // 📌 发表论文（Publications Section）
  // ==========================================
  publications: {
    sectionTitle: "Publications & Books",
    categories: [
      {
        name: "Journal Articles",
        items: [
          {
            title: "Research on Vehicle Exterior Interaction Design Based on Automation Acceptance Model",
            authors: "Zhang, B., & You, F.",
            venue: "Journal of Graphics",
            year: "2020",
            tags: ["CCF-C", "Core Journal"],
            link: "",
          },
          {
            title: "Human-Machine Interface Design of External Displays for Unmanned Logistics Vehicles",
            authors: "Wang, W., Zhang, B., Fu, M., Lin, Z., Pei, J., & Wang, J.",
            venue: "Journal of Graphics",
            year: "2019",
            tags: ["CCF-C", "Core Journal"],
            link: "",
          },
        ],
      },
      {
        name: "Conference Papers",
        items: [
          {
            title: "Designing Communication Strategies of Autonomous Vehicles with Pedestrians: An Intercultural Study",
            authors: "Lanzer, M., Babel, F., Yan, F., Zhang, B., You, F., Wang, J., & Baumann, M.",
            venue: "AutomotiveUI 2020",
            year: "2020",
            tags: ["AutomotiveUI 2020 SIGCHI"],
            link: "",
          },
          {
            title: "Study on Pedestrian Interaction with Unmanned Logistics Vehicles Based on Cognitive Acceptance",
            authors: "Zhang, B., You, F., Yan, F., & Wang, J.",
            venue: "HHME 2019",
            year: "2019",
            tags: ["HHME"],
            link: "",
          },
        ],
      },
      {
        name: "Books & Chapters",
        items: [
          {
            title: "Research on Intelligent Vehicle Interaction Design Methodology",
            authors: "Zhang, B. (Contributing Author)",
            venue: "Science Press · ISBN 978-7-03-074373-2",
            year: "",
            tags: [],
            link: "",
          },
          {
            title: "Human-Machine Interface for Intelligent Vehicles — Design Methodology and Cognitive Evaluation",
            authors: "Zhang, B. (Chapter author)",
            venue: "Authored Chapter 2",
            year: "",
            tags: [],
            link: "",
          },
        ],
      },
    ],
  },

  // ==========================================
  // 📌 外观设计专利（Design Patents）
  // ==========================================
  patents: {
    sectionTitle: "Design Patents",
    intro: "Named designer on five recently granted production HMI design patents at SAIC Volkswagen, alongside six earlier design patents arising from autonomous-delivery vehicle research.",
    categories: [
      {
        name: "Production Automotive HMI · Granted 2026",
        items: [
          {
            title: "GUI for 360° Surround-View Imaging on Electronic Devices",
            number: "ZL 2024 3 0740457.0 · CN 309810392 S",
            year: "2026",
            role: "Named Designer (first listed) · Patent holder: SAIC Volkswagen Automotive Co.",
            tags: ["Design Patent", "Surround View", "HMI"],
          },
          {
            title: "GUI for Intelligent Parking Exit on Electronic Devices",
            number: "ZL 2024 3 0740454.7 · CN 309810389 S",
            year: "2026",
            role: "Named Designer (first listed) · Patent holder: SAIC Volkswagen Automotive Co.",
            tags: ["Design Patent", "Automated Parking", "HMI"],
          },
          {
            title: "GUI for Reverse Parking Assistance on Electronic Devices",
            number: "ZL 2024 3 0740455.1 · CN 309810390 S",
            year: "2026",
            role: "Named Designer (first listed) · Patent holder: SAIC Volkswagen Automotive Co.",
            tags: ["Design Patent", "Parking Assistance", "HMI"],
          },
          {
            title: "GUI for Memory Parking on Electronic Devices",
            number: "ZL 2024 3 0740456.6 · CN 309810391 S",
            year: "2026",
            role: "Named Designer (first listed) · Patent holder: SAIC Volkswagen Automotive Co.",
            tags: ["Design Patent", "Memorized Parking", "HMI"],
          },
          {
            title: "GUI for Automated Parking on Electronic Devices",
            number: "ZL 2024 3 0741186.0 · CN 309810396 S",
            year: "2026",
            role: "Named Designer (first listed) · Patent holder: SAIC Volkswagen Automotive Co.",
            tags: ["Design Patent", "Automated Parking", "HMI"],
          },
        ],
      },
      {
        name: "Autonomous Delivery Vehicles · Filed 2020",
        items: [
          {
            title: "GUI for Grocery Shopping on an Unmanned Delivery Vehicle",
            number: "ZL 2020 3 0593402.3",
            year: "2020",
            role: "Design patent · Filed Sep. 30, 2020",
            tags: ["Design Patent", "GUI", "Autonomous Delivery"],
          },
          {
            title: "GUI for Grocery Shopping on an Unmanned Delivery Cart",
            number: "ZL 2020 3 0590998.1",
            year: "2020",
            role: "Design patent · Filed Sep. 30, 2020",
            tags: ["Design Patent", "GUI", "Autonomous Delivery"],
          },
          {
            title: "Unmanned Logistics Delivery Vehicle",
            number: "ZL 2020 3 0593403.8",
            year: "2020",
            role: "Design patent · Filed Sep. 30, 2020",
            tags: ["Design Patent", "Vehicle Design", "Autonomous Delivery"],
          },
          {
            title: "Unmanned Logistics Delivery Cart",
            number: "ZL 2020 3 0590985.4",
            year: "2020",
            role: "Design patent · Filed Sep. 30, 2020",
            tags: ["Design Patent", "Vehicle Design", "Autonomous Delivery"],
          },
          {
            title: "Unmanned Logistics Delivery Van",
            number: "ZL 2020 3 0591011.8",
            year: "2020",
            role: "Design patent · Filed Sep. 30, 2020",
            tags: ["Design Patent", "Vehicle Design", "Autonomous Delivery"],
          },
          {
            title: "Unmanned Vehicle",
            number: "ZL 2020 3 0204943.2",
            year: "2020",
            role: "Applicant / patent holder: Bihan Zhang · Filed May 8, 2020",
            tags: ["Design Patent", "Vehicle Design", "Autonomous Driving"],
          },
        ],
      },
    ],
  },

  

  // ==========================================
  // 📌 获奖与荣誉（Awards Section）
  // ==========================================
  awards: {
    sectionTitle: "Awards & Honors",
    // 特色奖项（展示在卡片中，包含图片占位区域）
    // Featured awards (displayed in cards with image placeholders)
    featured: [
      {
        title: "Muse Design\nSilver Award",
        description: "",
        image: import.meta.env.BASE_URL + 'images/awards/muse.jpg',
        link: 'https://design.museaward.com/winner-info.php?id=25358',
      },
      {
        title: "American Good Design\nGold Award",
        description: "",
        image: import.meta.env.BASE_URL + 'images/awards/agd.jpg',
        link: 'https://www.american-good-design.com/winnerDetails?id=1422',
      },
    ],
    // 其他奖项（展示在列表中）
    // Other awards (displayed in a list)
    other: [
      {
        title: "Hongda Scholarship & Excellent Master's Scholarship (Top 2-3%)",
        year: "2018-2020",
      },
      {
        title: "National Third Prize, UXPA China | UXDA International User Experience Innovation Competition",
        year: "2019",
      },
      {
        title: "National Second Prize, National College New Energy Vehicle Big Data Innovation Competition",
        year: "2018",
      },
    ],
  },
// ==========================================
  // 📌 方法与技能（Method & Skills）
  // ==========================================
  methodSkills: {
    sectionTitle: "Methods & Skills",
    groups: [
      {
        name: "Research Methods",
        skills: [
          "Controlled Experiments",
          "Mixed-Methods Research",
          "Usability Testing",
          "Eye Tracking",
          "Survey & Interview Design",
          "Quantitative Analysis",
        ],
      },
      {
        name: "Design Skills",
        skills: [
          "Figma",
          "Sketch",
          "Unity",
          "Prototyping",
          "UI/UX Design",
          "Interaction Design",
        ],
      },
      {
        name: "Technical Skills",
        skills: [
          "Arduino",
          "Processing",
          "Hardware Prototyping",
          "Sensors & Actuation",
          "SPSS",
          "C Programming",
        ],
      },
    ],
    additionalExperience: [
      {
        title: "International Collaboration",
        description: "Cross-cultural research projects with European and American collaborators",
      },
      {
        title: "Industry Experience",
        description: "HMI and interaction framework design at SAIC Volkswagen since 2021",
      },
    ],
  },
  
  // ==========================================
  // 📌 工作经历（Work Experience Section）
  // ==========================================
  workExperience: {
    // 栏目标题 (Section title)
    sectionTitle: "Work Experience",
    // 公司列表 (List of companies)
    companies: [
      {
        // 公司名称 (Company name)
        name: "SAIC Volkswagen Automotive Co.",
        // 工作类型 (Work type): FULL TIME / INTERNSHIP / PART TIME
        type: "FULL TIME",
        // 地点 (Location)
        location: "Shanghai, China",
        // 公司 logo 图片路径（可选，留空则显示文字缩写，放在 public/images/ 目录下）
        // Company logo image path (optional, leave empty to show text abbreviation)
        // logo: import.meta.env.BASE_URL + 'images/logos/company1.png',
        logo: "",
        // logo 文字缩写（当 logo 图片不存在时显示，建议 2-3 个字母）
        // Logo text abbreviation (shown if logo image is missing, 2-3 letters recommended)
        logoText: "SVW",
        // 在该公司的职位列表 (List of roles at this company)
        roles: [
          {
            // 职位名称 (Role title)
            title: "HMI Designer in Intelligent Connectivity R&D Department",
            // 时间段 (Period)
            period: "Apr. 2023 – Present",
            // 职责描述列表 (List of responsibilities)
            responsibilities: [
              "1. Led the core interaction framework design for the next-generation NEX HMI, Volkswagen’s first fully China-designed human–machine interface system, developed from the ground up to address localized user needs and driving habits.",
              "2. Directed HMI framework for the new AUDI intelligent cockpit (first localized EV brand with SAIC), defining core interaction architecture across multiple domains; design successfully mass-produced.",
              "3. Led UX/HMI design for RHP 2.0 Parking (Volkswagen's first localized autonomous parking project in China), achieving cross-functional approval and resulting in 10 patent-related interaction innovations, including five recently granted design patents.",
              "4. Directed strategic research under the Digital Cockpit Strategy Field, producing a trend analysis report that identified key innovation directions and achieved the highest annual performance rating."
            ],
          },
          {
            title: "Product Definition Engineer in Autonomous Driving R&D Department",
            period: "Jul. 2022 – Mar. 2023",
            responsibilities: [
              "1. Led end-to-end HMI design and system definition for the ADAP proof-of-concept project, from interaction framework to simulator validation.",
              "2. Served as the sole design lead for the RHP 3.0 autonomous driving concept, overseeing software interaction design, in-vehicle simulator development, and live vehicle demonstrations. The project was selected as a core innovation at the Volkswagen IVET Conference and later transferred to the production division for mass-production adaptation.",
            ],
          },
          {
            title: "HMI Designer in Autonomous Driving R&D Department (ERR)",
            period: "Jul. 2021 – Jun. 2022",
            responsibilities: [
              "1. Led HMI concept design for the SVW concept car, conducting prototype evaluations and usability studies; contributed to Volkswagen's advanced innovation program.",
              "2. Directed the next-generation ADAS system framework, overseeing user research, qualitative analysis, and evaluation synthesis for large-scale testing in Shenzhen.",
              "3. Contributed to the L4 Autonomous Shuttle X project, coordinating cross-scenario validation and behavioral analysis to enhance system robustness and driver-passenger interaction.",
              "4. Designed interaction strategies for a DMS-based behavioral alert system, developing logic for driver state detection and proactive intervention within adaptive cockpit contexts.",
            ],
          },
        ],
      },
      {
        name: "BMW Group",
        type: "INTERNSHIP",
        location: "Shanghai, China",
        logo: "",
        logoText: "BMW",
        roles: [
          {
            title: "Interaction Design Intern, ABK China Skylab",
            period: "Oct. 2019 – May 2020",
            responsibilities: [
              "1. Contributed to the design of a digital credit system app and the BMW Avatar project; independently led usability studies comparing BMW ID 7 and ID 8 systems.",
            ],
          },
        ],
      },
    ],
  },

  // ==========================================
  // 📌 个人作品（Individual Work Section）
  // ==========================================
  individualWork: {
    // 栏目标题 (Section title)
    sectionTitle: "Embodied & Interactive Prototypes",
    intro: "Exploratory prototypes developed to investigate interaction with sensing, responsive, and physically embodied systems. These projects demonstrate hands-on inquiry and are not presented as published research outcomes.",
    groups: [
      {
        name: "Embodied & Physical Prototypes",
        items: [
      {
        // 作品标题 (Work title)
        title: "Scoliosis Sleep Posture Monitoring Wearable",
        // 作品描述 (Description of the work)
        description: "Developed an Arduino-based wearable device for posture detection and haptic feedback, supporting continuous sleep posture monitoring.",
        // 完成年份 (Year of completion)
        year: "2025",
      },
      {
        title: "EMG-Responsive Prototype for Phantom Limb Pain Exploration",
        description: "Built an exploratory multimodal feedback prototype using EMG sensing and Processing visualization to investigate feedback concepts for rehabilitation contexts.",
        year: "2025",
      },
      {
        title: "Soft Robotic Prototype",
        description: "Designed and fabricated a pneumatically controlled soft robot using 3D-printed molds, exploring bio-inspired actuation and embodied interaction.",
        year: "2025",
      },
      {
        title: "L4 Autonomous Logistics Vehicle",
        description: "Developed an embedded Arduino system for obstacle avoidance and path planning; implemented a VUI for human-vehicle interaction.",
        year: "2025",
      },
      {
        title: "Maternity Support Belt",
        description: "Created a physiological sensing wearable for maternal health monitoring and HRV analysis to enhance ergonomic comfort. ",
        year: "2024",
      },
      {
        title: "Menstrual Cycle Sensing Concept",
        description: "Designed an exploratory wearable concept integrating HRV and temperature sensing for menstrual-cycle tracking and women’s health informatics.",
        year: "2024",
      },
       {
        title: "Gesture-Controlled Robotic Arm Gimbal",
        description: "Developed a servo-actuated robotic arm enabling gesture recognition and intuitive physical control through Arduino programming.  ",
        year: "2024",
      },
      {
        title: "Interactive System for Skin Manifestations of Immune Disorders",
        description: "Built a multimodal sensing platform for real-time skin condition detection and digital health visualization. ",
        year: "2024",
      },
        ],
      },
      {
        name: "Interactive Systems & Service Concepts",
        items: [
      {
        title: "EV Charging Service & App Design",
        description: "Designed and prototyped a mobile interface for EV charging optimization, focusing on user flow, service design, and sustainability. ",
        year: "2024",
      },
      {
        title: "EV Autonomous Driving Energy Testing & Gamified Visualization ",
        description: "Developed a data visualization system for real-car energy testing with gamified feedback to promote eco-driving behavior.",
        year: "2023",
      },
      {
        title: "Continental Tire Performance Testing & Visualization",
        description: "Created an interactive visualization tool for tire performance benchmarking using Touch Designer and auditory data sonification. ",
        year: "2022",
      },
        ],
      },
    ],
  },

  // ==========================================
  // 📌 导航菜单 (Navigation Menu)
  // ==========================================
  navigation: {
    brand: "Bihan Zhang",
    items: [
      { label: "Home", href: "#home" },
      { label: "Research & Projects", href: "#research-projects" },
      { label: "Publications", href: "#publications" },
      { label: "Patents", href: "#patents" },
      { label: "Prototypes", href: "#prototypes" },
      { label: "Education", href: "#education" },
      { label: "Work Experience", href: "#work-experience" },
      { label: "Awards", href: "#awards" },
      { label: "Methods & Skills", href: "#skills" },
    ],
    menuButtonLabel: "Menu",
  },

  // ==========================================
  // 📌 页脚信息 (Footer Information)
  // ==========================================
  footer: {
    copyright: "© 2026 Zhang Bihan. All rights reserved.",
    links: [
      { label: "GitHub", url: "https://github.com/bhannzhang" },
      { label: "Email", url: "mailto:Zhangbihan621@outlook.com" },
      { label: "Twitter", url: "https://x.com/haideezhang?s=11" },
    ],
  },

  // ==========================================
  // 📌 SEO 和元数据 (SEO and Metadata)
  // ==========================================
  meta: {
    title: "Bihan Zhang | Human Factors, HCI & Embodied Interaction",
    description: "Fall 2027 PhD applicant studying how people understand, trust, collaborate with, and physically interact with intelligent and autonomous systems.",
    keywords: "Human Factors, HCI, Human-AI Interaction, Human-Autonomy Interaction, Embodied Interaction, Physical Prototyping, Automotive HMI",
    
    // [Method 1] Local file:
    // ogImage: import.meta.env.BASE_URL + 'images/og-image.jpg',
    // [Method 2] Placeholder:
    ogImage: "https://placehold.co/1200x630?text=Social+Preview",
  },
};

export default siteContent;
