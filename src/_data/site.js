const common = {
  brand: "Wang Zuoxu",
  publicationsUrl: "./data/publications.json",
  defaultLang: "zh",
};

const zh = {
  pageLang: "zh-CN",
  pageTitle: "王佐旭 | 学术主页",
  pageDescription: "王佐旭，北京航空航天大学机械工程及自动化学院学术主页。",
  ui: {
    primaryNavLabel: "主导航",
    switchHref: "/en/",
    switchText: "EN",
    switchAria: "Switch to English",
    homeHref: "/",
    backHome: "返回主页",
    projectDetailsTitle: "项目详情",
    demoTitle: "Demo 演示区",
    videoLabel: "视频位置",
    videoText: "这里预留用于放置项目演示视频、录屏或嵌入播放器。",
    publicationsMore: "展开更多论文",
  },
  hero: {
    eyebrow: "Academic Homepage",
    name: "王佐旭",
    affiliation: "北京航空航天大学 · 机械工程及自动化学院",
    summary:
      "目前主要从事复杂产品创新设计、制造知识工程、知识图谱与大模型融合，以及面向工程场景的智能设计辅助系统研究。",
    nav: [
      { label: "教育", href: "#education" },
      { label: "工作", href: "#work" },
      { label: "论文", href: "#publications" },
      { label: "项目", href: "#projects" },
      { label: "专利", href: "#patents" },
      { label: "教学", href: "#teaching" },
      { label: "联系", href: "#contact" },
    ],
    contacts: [
      { label: "邮箱", value: "zuoxu_wang@buaa.edu.cn", href: "mailto:zuoxu_wang@buaa.edu.cn" },
      { label: "备用邮箱", value: "zuoxu.wang@outlook.com", href: "mailto:zuoxu.wang@outlook.com" },
      { label: "ORCID", value: "0000-0003-2524-1217", href: "https://orcid.org/0000-0003-2524-1217" },
      { label: "Google Scholar", value: "Google Scholar", href: "https://scholar.google.com.sg/citations?user=kja7k5MAAAAJ&hl=en&oi=ao" },
      { label: "ResearchGate", value: "ResearchGate", href: "https://www.researchgate.net/profile/Zuoxu-Wang" },
      { label: "课题组", value: "https://wangzuoxu.github.io/iid/", href: "https://wangzuoxu.github.io/iid/" },
    ],
  },
  sections: {
    education: {
      id: "education",
      index: "02",
      title: "教育经历",
      items: [
        {
          meta: "2017.01 - 2021.09",
          title: "博士，新加坡南洋理工大学机械与航空航天工程学院",
          text: "研究方向：智能产品与服务设计、设计知识管理、复杂产品设计。",
        },
        {
          meta: "2012.09 - 2016.07",
          title: "学士，天津大学机械学院工业设计专业",
        },
      ],
    },
    work: {
      id: "work",
      index: "01",
      title: "工作经历",
      items: [
        {
          meta: "2026.01 - 至今",
          title: "副教授，北京航空航天大学机械工程及自动化学院",
        },
        {
          meta: "2022.01 - 2025.12",
          title: "助理教授，北京航空航天大学机械工程及自动化学院",
        },
        {
          meta: "2021.03 - 2022.01",
          title: "研究助理，香港理工大学 RAIDS 研究组",
        },
      ],
    },
    research: {
      id: "research",
      index: "03",
      title: "研究方向",
      panels: [
        {
          title: "核心方向",
          items: [
            "制造与服务知识管理",
            "复杂产品设计与创新设计方法",
            "多模态知识抽取、融合与推荐",
            "AI 驱动的设计辅助与认知智能系统",
          ],
        },
        {
          title: "研究目标",
          items: [
            "提升复杂产品设计知识的发现与复用效率",
            "支撑航空航天等高复杂度产品设计研究",
            "推动大模型、图谱与工程设计流程融合",
            "形成可落地的智能设计与知识服务工具",
          ],
        },
      ],
    },
    publications: {
      id: "publications",
      index: "04",
      title: "代表论文",
    },
    projects: {
      id: "projects",
      index: "05",
      title: "研究项目",
      items: [
        {
          meta: "2023 - 2025",
          title: "基于图网络的多模态设计知识融合与感知推荐方法",
          tag: "国家自然科学基金青年项目 · 主持",
          text: "面向多模态设计知识融合与推荐，研究设计知识的表示、对齐、关联和上下文感知推荐。",
          open: true,
        },
        {
          meta: "2023 - 2025",
          title: "基于认知智能的复杂产品设计方法",
          tag: "国家级青年人才项目 · 主持",
          text: "研究认知智能赋能复杂产品设计的方法、系统与应用，面向需求理解、概念生成和方案优化。",
        },
        {
          meta: "2025 - 2027",
          title: "支撑产品设计 / 制造 / 服务一体化的数智化底座构建方法与技术",
          tag: "国家重点研发项目子任务 · 主持",
          text: "面向设计、制造与服务一体化场景，研究数字智能基础设施与工程知识协同机制。",
        },
        {
          meta: "2025",
          title: "模型视图识别软件",
          tag: "企业项目 · 主持",
          text: "面向工程设计场景的模型与视图自动识别工具，支持快速检索、理解和可视化。",
        },
      ],
    },
    patents: {
      id: "patents",
      index: "06",
      title: "专利和著述",
      panels: [
        {
          title: "已公开专利",
          items: [
            "一种基于多模态输入与智能优化的 3D 设计辅助方法，王佐旭，梁欣欣，2025，已公开。",
            "一种使用多模态模型进行齿轮图像精准识别的方法及系统，王佐旭，梁欣欣，2024，已公开。",
            "一种多模态知识图谱自动化生成方法及系统，王佐旭，邵智杰，2024，已公开。",
            "一种融合 Doc2vec 和 GAT 的专利跨领域推荐方法及系统，王佐旭，李明睿，2023，已公开。",
          ],
        },
        {
          title: "著述",
          items: ["/", "/"],
        },
      ],
    },
    teaching: {
      id: "teaching",
      index: "07",
      title: "教学经历",
      panels: [
        {
          title: "研究生课程",
          items: [
            "制造业知识工程，32 学时，2023-2025 秋季学期，负责人 / 主讲人。",
            "负责知识工程内容、知识抽取 / 表示 / 推理 / 融合方法、知识图谱构建示范案例等。",
            "指导、批改、答疑学生大作业：基于开源数据的领域知识图谱构建与应用。",
          ],
        },
        {
          title: "本科生课程",
          items: [
            "Theory and Applications of Manufacturing Informatics，32 学时，2024-2025 秋季学期，负责人 / 主讲人。",
            "负责课程大纲、课件制作、课程内容与案例讲解。",
            "指导学生完成数据预处理、网络爬取、聚类、分类、关联规则挖掘等作业。",
          ],
        },
      ],
    },
    awards: {
      id: "awards",
      index: "08",
      title: "学术荣誉与服务",
      panels: [
        {
          title: "学术荣誉",
          items: [
            "2017 - 2020 南洋理工大学学术奖学金（S$ 2,500 per month）。",
            "2019 11th CIRP Conference on Industrial Product-Service Systems 最佳会议论文奖。",
          ],
        },
        {
          title: "学术服务",
          items: [
            "中国图学学会数字化设计与制造专业委员会委员。",
            "中国人类功效学管理工效学专业委员会委员。",
            "Journal of Engineering Design 期刊编委。",
            "Advanced Engineering Informatics 2022、2023、2024 优秀审稿人。",
            "多本 SCI 期刊活跃审稿人，包括 Advanced Engineering Informatics、Journal of Manufacturing Systems、Journal of Cleaner Production、Computer in Industry、Journal of Computing and Information Science in Engineering。",
          ],
        },
      ],
    },
    contact: {
      id: "contact",
      index: "09",
      title: "联系方式",
      items: [
        { label: "邮箱", value: "zuoxu_wang@buaa.edu.cn", href: "mailto:zuoxu_wang@buaa.edu.cn" },
        { label: "备用邮箱", value: "zuoxu.wang@outlook.com", href: "mailto:zuoxu.wang@outlook.com" },
        { label: "ORCID", value: "0000-0003-2524-1217", href: "https://orcid.org/0000-0003-2524-1217" },
        { label: "课题组", value: "课题组", href: "https://wangzuoxu.github.io/iid/" },
        { label: "地址", value: "北京市海淀区学院路 37 号，北京航空航天大学新主楼" },
      ],
    },
  },
};

const en = {
  pageLang: "en",
  pageTitle: "Zuoxu Wang | Academic Homepage",
  pageDescription: "Zuoxu Wang's academic homepage, School of Mechanical Engineering and Automation, Beihang University.",
  ui: {
    primaryNavLabel: "Primary navigation",
    switchHref: "/",
    switchText: "中文",
    switchAria: "Switch to Chinese",
    homeHref: "/en/",
    backHome: "Back to home",
    projectDetailsTitle: "Project Details",
    demoTitle: "Demo",
    videoLabel: "Video placeholder",
    videoText: "This space is reserved for a project demo video, screen recording, or embedded player.",
    publicationsMore: "Show more publications",
  },
  hero: {
    eyebrow: "Academic Homepage",
    name: "Zuoxu Wang",
    affiliation: "School of Mechanical Engineering and Automation, Beihang University",
    summary:
      "My research focuses on intelligent design support systems for complex products, manufacturing knowledge engineering, knowledge graphs, and large-language-model integration for engineering scenarios.",
    nav: [
      { label: "Education", href: "#education" },
      { label: "Experience", href: "#work" },
      { label: "Publications", href: "#publications" },
      { label: "Projects", href: "#projects" },
      { label: "Patents", href: "#patents" },
      { label: "Teaching", href: "#teaching" },
      { label: "Contact", href: "#contact" },
    ],
    contacts: [
      { label: "Email", value: "zuoxu_wang@buaa.edu.cn", href: "mailto:zuoxu_wang@buaa.edu.cn" },
      { label: "Alt. email", value: "zuoxu.wang@outlook.com", href: "mailto:zuoxu.wang@outlook.com" },
      { label: "ORCID", value: "0000-0003-2524-1217", href: "https://orcid.org/0000-0003-2524-1217" },
      { label: "Google Scholar", value: "Google Scholar", href: "https://scholar.google.com.sg/citations?user=kja7k5MAAAAJ&hl=en&oi=ao" },
      { label: "ResearchGate", value: "ResearchGate", href: "https://www.researchgate.net/profile/Zuoxu-Wang" },
      { label: "Research Group", value: "Research Group", href: "https://wangzuoxu.github.io/iid/" },
    ],
  },
  sections: {
    education: {
      id: "education",
      index: "02",
      title: "Education",
      items: [
        {
          meta: "2017.01 - 2021.09",
          title: "Ph.D., School of Mechanical and Aerospace Engineering, Nanyang Technological University",
          text: "Research focus: intelligent product-service systems, design knowledge management, and complex product design.",
        },
        {
          meta: "2012.09 - 2016.07",
          title: "B.Eng., Industrial Design, School of Mechanical Engineering, Tianjin University",
        },
      ],
    },
    work: {
      id: "work",
      index: "01",
      title: "Experience",
      items: [
        {
          meta: "2026.01 - Present",
          title: "Associate Professor, School of Mechanical Engineering and Automation, Beihang University",
        },
        {
          meta: "2022.01 - 2025.12",
          title: "Assistant Professor, School of Mechanical Engineering and Automation, Beihang University",
        },
        {
          meta: "2021.03 - 2022.01",
          title: "Research Assistant, RAIDS Group, The Hong Kong Polytechnic University",
        },
      ],
    },
    research: {
      id: "research",
      index: "03",
      title: "Research Interests",
      panels: [
        {
          title: "Core Topics",
          items: [
            "Manufacturing and service knowledge management",
            "Complex product design and innovation methods",
            "Multimodal knowledge extraction, fusion, and recommendation",
            "AI-enabled design assistance and cognitive intelligence systems",
          ],
        },
        {
          title: "Goals",
          items: [
            "Improve knowledge discovery and reuse in complex product design",
            "Support research on highly complex products such as aerospace systems",
            "Integrate large language models, knowledge graphs, and engineering workflows",
            "Build practical intelligent design and knowledge service tools",
          ],
        },
      ],
    },
    publications: {
      id: "publications",
      index: "04",
      title: "Selected Publications",
    },
    projects: {
      id: "projects",
      index: "05",
      title: "Research Projects",
      items: [
        {
          meta: "2023 - 2025",
          title: "Graph-based multimodal design knowledge fusion and perception-aware recommendation",
          tag: "NSFC Youth Program · PI",
          text: "This project studies design knowledge representation, alignment, association, and context-aware recommendation for multimodal design knowledge fusion.",
          open: true,
        },
        {
          meta: "2023 - 2025",
          title: "Complex product design methods based on cognitive intelligence",
          tag: "National-level youth talent program · PI",
          text: "We develop methods, systems, and applications of cognitive intelligence for complex product design, targeting requirement understanding, concept generation, and scheme optimization.",
        },
        {
          meta: "2025 - 2027",
          title: "Methods and technologies for a digital-intelligent foundation supporting integrated product design, manufacturing, and service",
          tag: "Subtask of a national key R&D program · PI",
          text: "For integrated design, manufacturing, and service scenarios, the project studies digital-intelligent infrastructure and collaborative engineering knowledge mechanisms.",
        },
        {
          meta: "2025",
          title: "Model-view recognition software",
          tag: "Industry project · PI",
          text: "An automatic model and view recognition tool for engineering design scenarios, enabling fast retrieval, understanding, and visualization.",
        },
      ],
    },
    patents: {
      id: "patents",
      index: "06",
      title: "Patents and Writing",
      panels: [
        {
          title: "Published Patents",
          items: [
            "A 3D design assistance method based on multimodal inputs and intelligent optimization, Zuoxu Wang, Xinxin Liang, 2025, published.",
            "A method and system for precise gear image recognition using multimodal models, Zuoxu Wang, Xinxin Liang, 2024, published.",
            "A method and system for automated multimodal knowledge graph generation, Zuoxu Wang, Zhijie Shao, 2024, published.",
            "A cross-domain patent recommendation method and system integrating Doc2Vec and GAT, Zuoxu Wang, Mingrui Li, 2023, published.",
          ],
        },
        {
          title: "Writing",
          items: ["/", "/"],
        },
      ],
    },
    teaching: {
      id: "teaching",
      index: "07",
      title: "Teaching",
      panels: [
        {
          title: "Graduate Course",
          items: [
            "Manufacturing Knowledge Engineering, 32 class hours, Fall 2023-2025, course lead / lecturer.",
            "Covered knowledge engineering, knowledge extraction / representation / reasoning / fusion methods, and knowledge graph construction examples.",
            "Supervised term projects on constructing and applying domain knowledge graphs with open data.",
          ],
        },
        {
          title: "Undergraduate Course",
          items: [
            "Theory and Applications of Manufacturing Informatics, 32 class hours, Fall 2024-2025, course lead / lecturer.",
            "Responsible for syllabus design, teaching materials, lectures, and case studies.",
            "Guided students through data preprocessing, web crawling, clustering, classification, and association-rule mining assignments.",
          ],
        },
      ],
    },
    awards: {
      id: "awards",
      index: "08",
      title: "Awards and Service",
      panels: [
        {
          title: "Awards",
          items: [
            "2017 - 2020 NTU Scholarship (S$2,500 per month).",
            "Best conference paper award at the 11th CIRP Conference on Industrial Product-Service Systems, 2019.",
          ],
        },
        {
          title: "Service",
          items: [
            "Committee member, Digital Design and Manufacturing Professional Committee, Chinese Graphics Society.",
            "Committee member, Management Ergonomics Professional Committee, Chinese Human Factors Engineering Society.",
            "Editorial board member, Journal of Engineering Design.",
            "Outstanding reviewer for Advanced Engineering Informatics in 2022, 2023, and 2024.",
            "Active reviewer for several SCI journals, including Advanced Engineering Informatics, Journal of Manufacturing Systems, Journal of Cleaner Production, Computer in Industry, and Journal of Computing and Information Science in Engineering.",
          ],
        },
      ],
    },
    contact: {
      id: "contact",
      index: "09",
      title: "Contact",
      items: [
        { label: "Email", value: "zuoxu_wang@buaa.edu.cn", href: "mailto:zuoxu_wang@buaa.edu.cn" },
        { label: "Alt. email", value: "zuoxu.wang@outlook.com", href: "mailto:zuoxu.wang@outlook.com" },
        { label: "ORCID", value: "0000-0003-2524-1217", href: "https://orcid.org/0000-0003-2524-1217" },
        { label: "Research Group", value: "Research Group", href: "https://wangzuoxu.github.io/iid/" },
        { label: "Address", value: "New Main Building, Beihang University, 37 Xueyuan Road, Haidian District, Beijing, China" },
      ],
    },
  },
};

module.exports = {
  ...common,
  locales: { zh, en },
};
