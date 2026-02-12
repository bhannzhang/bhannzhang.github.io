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
    title: "PhD Applicant in HCI & Cognitive Psychology",
    // 您所在的学校/机构 (Your school/organization)
    institution: "Tongji University",
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
    welcome: "Welcome to my academic portfolio.",
    // 主要描述 (Main description)
    description: "I am a PhD Applicant in HCI & Cognitive Psychology, Focusing on Intelligent Cockpit Interaction, Multimodal Feedback, and Driver Cognition",
    // 注释（可选） (Note (optional))
    note: "",
    // 背景信息 (Background information)
    background: "Background in Interaction Design & Electrical Engineering | Research interest in Human-AI Interaction",
    backgroundNote: "",
    // 按钮 (Buttons)
    buttons: [
      {
        text: "Download CV",
        link: import.meta.env.BASE_URL + "files/cv.pdf", // 请将简历命名为 cv.pdf 放入 public/files/
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
      title: "Core Research Area",
      items: [
        "Intelligent Cockpit HMI & Human-AI Interaction",
        "Driver cognition & trust in L2-L3 automated driving",
        "Multimodal interaction feedback (visual, auditory, haptic...)",
        "Explainable & emotional AI in safety-critical interfaces",
      ],
    },
    currentStatus: {
      title: "My Current Status",
      items: [
        "Industry researcher in intelligent cockpit HMI for 5 years",
        "Research-led HMI framework development in automotive context",
        "Preparing PhD applications for Fall 2026",
      ],
    },
    keywords: ["HCI", "HMI", "Cognitive Psychology", "Human-AI Trust","Safety-Critical Systems","Hardware Development"],
  },

  // ==========================================
  // 📌 核心研究兴趣 (Core Research Interests)
  // ==========================================
  coreResearchInterests: {
    sectionTitle: "My core research interests",
    interests: [
      {
        title: "Human Cognition in Automated Driving",
        descriptions: [
          "Driver mental models during L2-L3 transitions",
          "Attention, trust, and over-reliance in intelligent cockpits",
        ],
      },
      {
        title: "Multimodal Interaction & Feedback",
        descriptions: [
          "Design patterns for visual / auditory / haptic feedback",
          "Reducing cognitive load in safety-critical contexts",
        ],
      },
      {
        title: "Emotional & Explainable AI Interfaces",
        descriptions: [
          "Avatar-based voice assistants",
          "Making AI intentions legible to users",
        ],
      },
    ],
    // 研究问题（斜体显示）
    // Research questions (italicized)
    researchQuestions: [
      "How do drivers interpret AI intentions in partially automated driving?",
      "How can multimodal feedback reduce anxiety and improve trust?",
      "What makes an AI interface \"understandable\" in time-critical scenarios?",
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
        school: "TongJi University",
        location: "Shanghai, China",
        period: "2018 - 2021",
        gpa: "4.73/5.0(1st Rank)",
        status: "Completed",
        thesis: "Interaction Design, Concentrations in Human computer interaction and cognition",
        achievements: [
          "Outstanding Graduate of Tongji University,2021(Top 2%)",
          "Outstanding Master's Thesis Award, Tongji University (sole recipient,2021)",
          "Hongda Scholarship(2018 ,2019) & Excellent Master’s Scholarship (2020), Tongji University (Top 2-3%)",
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
    intro: "A comprehensive overview of my academic, teaching, industry, and individual projects that have shaped my professional development and research expertise."
  },


  // ==========================================
  // 📌 研究项目（Projects Section）
  // ==========================================
  projects: {
    sectionTitle: "Academic Research Experience",
    viewMoreText: "View more",
    items: [
      {
        category: "",
        status: "completed",
        title: "Research on social acceptance and HMI for L4+ AV car",
        description: "Led joint research on social acceptance and HMI for L4+ autonomous campus vehicles, from concept design to UX evaluation.Published findings in a core journal (CCF-C) and presented at HHME academic conference.",
        tags: ["Principal Investigator (Student PI)"],
        image: import.meta.env.BASE_URL + 'images/projects/project1.jpg',
        link: "",
      },
      {
        category: "",
        status: "completed",
        title: "Baidu Automotive White Paper Research Collaboration Project",
        description: "Conducted large-scale benchmarking of 26 automotive brands; formalized findings into guidelines. Presented results at Baidu Headquarters; recognized by Apollo Lab.",
        tags: ["Principal Investigator (Student PI)"],
        image: import.meta.env.BASE_URL + 'images/projects/project2.jpg',
        link: "",
      },
      {
        category: "",
        status: "completed",
        title: "Research on Autonomous Driving Behavior and Strategy",
        description: "Investigated driver behavior under ACC/LKA; designed 10 driving scenarios and collected/analyzed behavioral data from 30 participants.",
        tags: ["Principal Investigator (Student PI)"],
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
        description: "Spearheaded a 6-member team to build the lab's first functional driving simulation platform in Unity, supporting over 30 subsequent HMI behavior tests",
        tags: ["Team lead"],
        image: import.meta.env.BASE_URL + 'images/projects/project5.jpg',
        link: "",
      },
      {
        category: "",
        status: "completed",
        title: "AI Voice Assistant Trust Study in Intelligent Cockpit",
        description: "Developed scenario-based prototypes for time-critical driving contexts; examined how multimodal feedback and explanation strategies affect user trust and cognitive load in controlled studies.",
        tags: ["Principal Investigator (Student PI)"],
        image: import.meta.env.BASE_URL + 'images/projects/project6.jpg',
        link: "",
      },
      /*{
        category: "Cybersecurity",
        status: "completed",
        title: "Distributed Systems Security Framework",
        description: "Novel approaches to securing microservices architectures and cloud-native applications against emerging threats.",
        tags: ["Security", "Distributed Systems", "Cloud"],
        image: import.meta.env.BASE_URL + 'images/projects/project7.jpg',
        link: "https://github.com/bhannzhang",
      },
      */
    ],
  },

  // ==========================================
  // 📌 发表论文（Publications Section）
  // ==========================================
  publications: {
    sectionTitle: "My Publications",
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
            link: "https://github.com/bhannzhang",
          },
          {
            title: "Human-Machine Interface Design of External Displays for Unmanned Logistics Vehicles",
            authors: "Wang, W., Zhang, B., Fu, M., Lin, Z., Pei, J., & Wang, J.",
            venue: "Journal of Graphics",
            year: "2019",
            tags: ["CCF-C", "Core Journal"],
            link: "https://github.com/bhannzhang",
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
            venue: "Published monograph",
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
  // 📌 方法与技能（Method & Skills）
  // ==========================================
  methodSkills: {
    sectionTitle: "Method & My Skills",
    groups: [
      {
        name: "Research Methods",
        skills: [
          "User Research",
          "A/B Testing",
          "Usability Testing",
          "Eye Tracking",
          "Survey Design",
          "Interview Analysis",
        ],
      },
      {
        name: "Design Skills",
        skills: [
          "Figma",
          "Sketch",
          "Adobe XD",
          "Prototyping",
          "UI/UX Design",
          "Interaction Design",
        ],
      },
      {
        name: "Technical Skills",
        skills: [
          "C programming language",
          "Arduino",
          "Hardware Prototyping",
          "Data Analysis",
          "SPSS",
          "Technical Writing",
        ],
      },
    ],
    additionalExperience: [
      {
        title: "International Collaboration",
        description: "Cross-cultural research projects with European and American partners",
      },
      {
        title: "Industry Experience",
        description: "SAIC Volkswagen HMI Framework designer for 5 years",
      },
    ],
  },

  // ==========================================
  // 📌 获奖与荣誉（Awards Section）
  // ==========================================
  awards: {
    sectionTitle: "My Awards",
    // 特色奖项（展示在卡片中，包含图片占位区域）
    // Featured awards (displayed in cards with image placeholders)
    featured: [
      {
        title: "Muse Design\nSilver Award",
        description: "Novel approaches to securing microservices architectures and cloud-native applications against emerging threats.",
        image: import.meta.env.BASE_URL + 'images/awards/muse.jpg',
        link: 'https://design.museaward.com/winner-info.php?id=25358',
      },
      {
        title: "American Good Design\nGold Award",
        description: "Novel approaches to securing microservices architectures and cloud-native applications against emerging threats.",
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
  // 📌 导航菜单 (Navigation Menu)
  // ==========================================
  navigation: {
    brand: "Bhann's website",
    items: [
      { label: "Home", href: "#home" },
      { label: "Education", href: "#education" },
      { label: "Research & Projects", href: "#research-projects" },
      { label: "Publications", href: "#publications" },
      { label: "Method & Skills", href: "#skills" },
      { label: "Awards & Experience", href: "#awards" },
    ],
    menuButtonLabel: "Menu",
  },

  // ==========================================
  // 📌 页脚信息 (Footer Information)
  // ==========================================
  footer: {
    copyright: "© 2026 Zhang Bihan. All rights reserved.",
    links: [
      { label: "GitHub", url: "https://github.com/yourusername" },
      { label: "Email", url: "mailto:Zhangbihan621@outlook.com" },
      { label: "Twitter", url: "https://twitter.com/yourusername" },
    ],
  },

  // ==========================================
  // 📌 SEO 和元数据 (SEO and Metadata)
  // ==========================================
  meta: {
    title: "Bhann's Website - Zhang Bihan",
    description: "PhD Applicant in HCI & Cognitive Psychology, Focusing on Intelligent Cockpit Interaction, Multimodal Feedback, and Driver Cognition",
    keywords: "HCI, Human-Computer Interaction, Cognitive Psychology, Autonomous Driving, UX Research",
    
    // [Method 1] Local file:
    // ogImage: import.meta.env.BASE_URL + 'images/og-image.jpg',
    // [Method 2] Placeholder:
    ogImage: "https://placehold.co/1200x630?text=Social+Preview",
  },
};

export default siteContent;
