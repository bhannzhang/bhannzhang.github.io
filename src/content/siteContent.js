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
    name: "Your Name",
    // 英文昵称 (English nickname)
    nickname: "Nickname",
    // 您的职位/身份 (Your position/title)
    title: "PhD Candidate / Researcher / Designer",
    // 您所在的学校/机构 (Your school/organization)
    institution: "University Name / Organization",
    // 位置 (Your location)
    location: "City, Country",
    
    // 您的头像图片路径 (Your avatar image path)
    // -----------------------------------------------------------
    // [方式 1]: 使用本地文件 (推荐) - 请将图片命名为 avatar.jpg 并放在 public/images/ 目录下
    // [Method 1]: Use local file (Recommended) - Name image avatar.jpg in public/images/
    // avatar: import.meta.env.BASE_URL + 'images/avatar.jpg',
    
    // [方式 2]: 使用在线图片占位符 (默认，用于预览)
    // [Method 2]: Use online placeholder (Default for preview)
    avatar: "https://placehold.co/400x400?text=Avatar",
    // -----------------------------------------------------------
    
    // 您的邮箱地址 (Your email address)
    email: "your.email@example.com",
  },

  // ==========================================
  // 📌 社交媒体链接 (Social Media Links)
  // ==========================================
  // 如果某个平台没有，可以将 url 留空 ""
  // If you don't have a platform, leave the url empty ""
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      platform: "twitter",
      url: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      platform: "googleScholar",
      url: "https://scholar.google.com/citations?user=yourid",
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
    description: "I am a [Your Position], focusing on [Research Area 1], [Research Area 2], and [Research Area 3].",
    // 注释（可选） (Note (optional))
    note: "(Optional: Open for collaborations)",
    // 背景信息 (Background information)
    background: "Background in [Major/Field] | Research interest in [Topic]",
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
        link: "mailto:your.email@example.com",
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
        "Research Topic 1 (e.g., Human-Computer Interaction)",
        "Research Topic 2 (e.g., Artificial Intelligence)",
        "Research Topic 3 (e.g., Sustainable Design)",
        "Research Topic 4",
      ],
    },
    currentStatus: {
      title: "My Current Status",
      items: [
        "Current Degree / Position",
        "Looking for Internship / Job",
        "Writing Thesis",
        "Open to collaborations",
      ],
    },
    keywords: ["Keyword 1", "Keyword 2", "Keyword 3", "Keyword 4"],
  },

  // ==========================================
  // 📌 核心研究兴趣 (Core Research Interests)
  // ==========================================
  coreResearchInterests: {
    sectionTitle: "My core research interests",
    interests: [
      {
        title: "Interest Area 1",
        descriptions: [
          "Description point 1 about this interest.",
          "Description point 2 about this interest.",
        ],
      },
      {
        title: "Interest Area 2",
        descriptions: [
          "Description point 1 about this interest.",
          "Description point 2 about this interest.",
        ],
      },
      {
        title: "Interest Area 3",
        descriptions: [
          "Description point 1 about this interest.",
          "Description point 2 about this interest.",
        ],
      },
    ],
    // 研究问题（斜体显示）
    // Research questions (italicized)
    researchQuestions: [
      "Research Question 1: How can we...?",
      "Research Question 2: What is the impact of...?",
      "Research Question 3: Why do we...?",
    ],
  },

  // ==========================================
  // 📌 教育经历（Education Section）
  // ==========================================
  education: {
    sectionTitle: "Education",
    items: [
      {
        degree: "Master of Science in [Major]",
        school: "[University Name]",
        location: "[City, Country]",
        period: "20XX - 20XX",
        gpa: "X.X/4.0",
        status: "Completed",
        thesis: "Thesis: [Title of your thesis]. Specialized in [Area].",
        achievements: [
          "Award / Scholarship 1",
          "Award / Scholarship 2",
          "Achievement 3",
        ],
      },
      {
        degree: "Bachelor of Science in [Major]",
        school: "[University Name]",
        location: "[City, Country]",
        period: "20XX - 20XX",
        gpa: "X.X/4.0",
        status: "Completed",
        thesis: "Major in [Major]. Senior capstone project on [Topic].",
        achievements: [],
      },
    ],
    intro: "A comprehensive overview of my academic background and research training."
  },

  // ==========================================
  // 📌 研究项目（Projects Section）
  // ==========================================
  projects: {
    sectionTitle: "My Projects",
    viewMoreText: "View more",
    items: [
      {
        category: "Category 1",
        status: "completed",
        title: "Project Title A",
        description: "Brief description of the project, its goals, and your contribution.",
        tags: ["Tag1", "Tag2"],
        
        // [Method 1] Local file:
        // image: import.meta.env.BASE_URL + 'images/projects/project1.jpg',
        // [Method 2] Placeholder:
        image: "https://placehold.co/600x400?text=Project+A",
        
        link: "https://github.com/yourusername/project",
      },
      {
        category: "Category 2",
        status: "in progress",
        title: "Project Title B",
        description: "Brief description of the project, its goals, and your contribution.",
        tags: ["Tag1", "Tag2"],
        
        // image: import.meta.env.BASE_URL + 'images/projects/project2.jpg',
        image: "https://placehold.co/600x400?text=Project+B",
        
        link: "https://github.com/yourusername/project",
      },
      {
        category: "Category 3",
        status: "completed",
        title: "Project Title C",
        description: "Brief description of the project, its goals, and your contribution.",
        tags: ["Tag1", "Tag2"],
        
        // image: import.meta.env.BASE_URL + 'images/projects/project3.jpg',
        image: "https://placehold.co/600x400?text=Project+C",
        
        link: "https://github.com/yourusername/project",
      },
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
            title: "Title of Your Journal Paper",
            authors: "Your Name, Co-author A, Co-author B",
            venue: "Journal Name",
            year: "20XX",
            tags: ["SCI", "Q1"],
            link: "https://doi.org/...",
          },
        ],
      },
      {
        name: "Conference Papers",
        items: [
          {
            title: "Title of Your Conference Paper",
            authors: "Your Name, Co-author A",
            venue: "Conference Name (e.g., CHI 20XX)",
            year: "20XX",
            tags: ["Best Paper Award"],
            link: "https://doi.org/...",
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
          "User Interview",
          "Survey Design",
          "Experimental Design",
          "Data Analysis",
        ],
      },
      {
        name: "Design Tools",
        skills: [
          "Figma",
          "Sketch",
          "Adobe Suite",
          "Prototyping",
        ],
      },
      {
        name: "Programming",
        skills: [
          "Python",
          "JavaScript / Vue",
          "MATLAB",
          "R",
        ],
      },
    ],
    additionalExperience: [
      {
        title: "Internship / Work",
        description: "Brief description of your industry experience.",
      },
      {
        title: "Collaboration",
        description: "Experience working with international teams or labs.",
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
        title: "Design Award Name",
        description: "Description of the award and what it was for.",
        
        // [Method 1] Local file:
        // image: import.meta.env.BASE_URL + 'images/awards/award1.jpg',
        // [Method 2] Placeholder:
        image: "https://placehold.co/400x300?text=Award",
        
        link: 'https://example.com',
      },
      {
        title: "Research Award Name",
        description: "Description of the award and what it was for.",
        
        // image: import.meta.env.BASE_URL + 'images/awards/award2.jpg',
        image: "https://placehold.co/400x300?text=Award",
        
        link: 'https://example.com',
      },
    ],
    // 其他奖项（展示在列表中）
    // Other awards (displayed in a list)
    other: [
      {
        title: "Scholarship Name (Top X%)",
        year: "20XX",
      },
      {
        title: "Competition Name - First Prize",
        year: "20XX",
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
        name: "[Company Name 1]",
        // 工作类型 (Work type): FULL TIME / INTERNSHIP / PART TIME
        type: "FULL TIME",
        // 地点 (Location)
        location: "[City, Country]",
        // 公司 logo 图片路径（可选，留空则显示文字缩写，放在 public/images/ 目录下）
        // Company logo image path (optional, leave empty to show text abbreviation)
        // logo: import.meta.env.BASE_URL + 'images/logos/company1.png',
        logo: "",
        // logo 文字缩写（当 logo 图片不存在时显示，建议 2-3 个字母）
        // Logo text abbreviation (shown if logo image is missing, 2-3 letters recommended)
        logoText: "CO1",
        // 在该公司的职位列表 (List of roles at this company)
        roles: [
          {
            // 职位名称 (Role title)
            title: "Senior Interaction Designer, [Department Name]",
            // 时间段 (Period)
            period: "20XX – Now",
            // 职责描述列表 (List of responsibilities)
            responsibilities: [
              "Led the core interaction framework design for [Project name], a large-scale user interface system developed to address localized needs.",
              "Directed HMI framework for [Specific Brand/Product], defining core interaction architecture across multiple functional domains.",
              "Spearheaded UX/HMI design for [Specific Feature], achieving cross-functional approval and resulting in multiple technical patents.",
              "Conducted strategic research under [Field Name], producing trend analysis reports that identified key innovation directions.",
            ],
          },
          {
            title: "Product Engineer, [Department Name]",
            period: "20XX – 20XX",
            responsibilities: [
              "Managed end-to-end HMI design and system definition for [Technical Project], from initial framework to final validation.",
              "Served as the sole design lead for [High-impact Concept], overseeing software interaction design and live demonstrations.",
            ],
          },
        ],
      },
      {
        name: "[Company Name 2 / Group]",
        type: "INTERNSHIP",
        location: "[City, Country]",
        logo: "",
        logoText: "CO2",
        roles: [
          {
            title: "Interaction Design Intern, [Lab/Unit Name]",
            period: "20XX – 20XX",
            responsibilities: [
              "Contributed to the design of [Mobile App/System] and the [AI/Avatar] project; conducted usability studies comparing different system versions.",
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
    sectionTitle: "Individual Work",
    // 作品列表（每项包含标题、描述、年份）
    // Project list (each item has title, description, year)
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
        title: "Phantom Limb Pain Suppression via EMG Monitoring",
        description: "Built a multimodal feedback system using EMG sensing and Processing visualization to support pain suppression and affective rehabilitation.",
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
        title: "[Template Work Title]",
        description: "Briefly describe your project, its technical implementation (e.g., Python/Arduino/Figma), and its core impact or goal.",
        year: "2024",
      },
    ],
  },

  // ==========================================
  // 📌 导航菜单 (Navigation Menu)
  // ==========================================
  navigation: {
    brand: "My Portfolio", // Menu brand text
    items: [
      { label: "Home", href: "#home" },
      { label: "Education", href: "#education" },
      { label: "Research & Projects", href: "#research-projects" },
      { label: "Publications", href: "#publications" },
      { label: "Awards & Experience", href: "#awards" },
      { label: "Work Experience", href: "#work-experience" },
      { label: "Individual Work", href: "#individual-work" },
      { label: "Method & Skills", href: "#skills" },
    ],
    menuButtonLabel: "Menu",
  },

  // ==========================================
  // 📌 页脚信息 (Footer Information)
  // ==========================================
  footer: {
    copyright: "© 20XX Your Name. All rights reserved.",
    links: [
      { label: "GitHub", url: "https://github.com/yourusername" },
      { label: "Email", url: "mailto:your.email@example.com" },
      { label: "Twitter", url: "https://twitter.com/yourusername" },
    ],
  },

  // ==========================================
  // 📌 SEO 和元数据 (SEO and Metadata)
  // ==========================================
  meta: {
    title: "My Academic Portfolio - Your Name",
    description: "PhD Student / Researcher in [Field]. Portfolio website.",
    keywords: "Academic, Research, Portfolio, [Your Field]",
    
    // [Method 1] Local file:
    // ogImage: import.meta.env.BASE_URL + 'images/og-image.jpg',
    // [Method 2] Placeholder:
    ogImage: "https://placehold.co/1200x630?text=Social+Preview",
  },
};

export default siteContent;
