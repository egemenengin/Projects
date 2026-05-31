const projects = [
  {
    title: "Dead Zone Raider",
    category: "unreal",
    type: "Unreal Engine Project",
    image: "assets/img/project/DZR_Logo.png",
    summary: "Unreal Engine 5.3 third-person extraction shooter prototype.",
    details: [
      ["Engine / Type", "Unreal Engine 5.3 project"],
      ["Genre", "Third-person extraction shooter game"],
      ["Description", "Story is based on people trying to survive after a zombie apocalypse. The character goes on dangerous raids with zombies and bandits, improving skills and the base over time."],
      ["Current Work", "Inventory system, minimap, items, and containers."],
      ["Planned Work", "Attack, enemy, base system, base NPCs, mission system, maps, item updates, advanced movement, UI, skills, animations, and status updates."]
    ],
    description:
      "A new third-person extraction shooter prototype set after a zombie apocalypse.",
    tags: ["Unreal Engine", "Third Person", "Inventory", "Shooter"],
    links: [{ label: "Video Link", href: "https://youtu.be/oBVbfwWVqRU" }]
  },
  {
    title: "EE Model Catalog",
    category: "unreal",
    type: "Unreal Engine Project",
    image: "assets/img/project/EEModelCatalogLogo.png",
    summary: "Unreal Engine model catalog and presentation project.",
    details: [
      ["Engine / Type", "Unreal Engine 5.5 project"],
      ["Purpose", "Interactive catalog for different types of models"],
      ["Description", "Users can select different types of weapons and vehicles, rotate and zoom the selected model, open information panels through hotspots, and attach or detach model attachments."]
    ],
    description:
      "An interactive Unreal Engine catalog for inspecting model categories, parts, hotspots, and attachments.",
    tags: ["Unreal Engine", "3D Catalog", "UI"],
    links: [{ label: "Video Link", href: "https://youtu.be/Yd7l-oFH24E" }]
  },
  {
    title: "Freedom Arena",
    category: "unreal",
    type: "Unreal Engine Project",
    image: "assets/img/project/FreedomArena.png",
    summary: "Unreal Engine arena project.",
    details: [
      ["Engine / Type", "Unreal Engine 5.1 C++ project"],
      ["Genre", "Third-person shooter game"],
      ["Completed", "Shooter character and animations, multiple weapon types and rarities, ammo, inventory system, floor-based footsteps, item highlighting, item widgets, HUD, and several Grux enemy types with patrol, chase, and attack behavior."],
      ["Planned Work", "Level design, main menu, settings, death/win scenes, and additional enemies."]
    ],
    description:
      "A third-person shooter project with inventory, weapon rarity, HUD, and enemy behavior systems.",
    tags: ["Unreal Engine", "Game Development"],
    links: [{ label: "Project Link", href: "https://github.com/egemenengin/Freedom-Arena" }]
  },
  {
    title: "Escape From The Office",
    category: "unreal",
    type: "Unreal Engine Project",
    image: "assets/img/project/EFTO.png",
    summary: "Escape-focused Unreal Engine project.",
    details: [
      ["Engine / Type", "Unreal Engine 5.1 Blueprint project"],
      ["Genre", "First-person office-themed puzzle game"],
      ["Story", "The game is based on a developer's dream after falling asleep near the end of work. The player tries to escape the office by solving puzzles and avoiding traps across three floors."],
      ["Puzzles", "Key doors, password doors, pressure plate doors, lever doors, and a reality portal that teleports the character to a room required for one puzzle."],
      ["Traps", "Patrolling scissors, a printer shooting paper planes, pencil spike traps, and laser-eyed bosses."],
      ["Level Ends", "The player reaches the elevator to pass a floor, fails when caught by traps, or fails when time runs out."]
    ],
    description:
      "A first-person office-themed puzzle game about escaping a dream office through puzzles and traps.",
    tags: ["Unreal Engine", "Gameplay"],
    links: []
  },
  {
    title: "Code Name Echo Nine",
    category: "unreal",
    type: "Unreal Engine Project",
    image: "assets/img/project/CNEN.png",
    summary: "Unreal Engine project with GitHub repository.",
    details: [
      ["Engine / Type", "Unreal Engine 5.1 C++ project"],
      ["Genre", "Third-person shooter game"],
      ["Description", "Story is based on a character trying to clean a hidden research center. The character has to eliminate all enemies in the facility."]
    ],
    description:
      "A third-person shooter about clearing enemies from a hidden research facility.",
    tags: ["Unreal Engine", "Game Development"],
    links: [{ label: "Project Link", href: "https://github.com/egemenengin/CodeNameEchoNine" }]
  },
  {
    title: "Treasure Raider",
    category: "unreal",
    type: "Unreal Engine Project",
    image: "assets/img/project/TreasureRaider.png",
    summary: "Unreal Engine adventure project.",
    details: [
      ["Engine / Type", "Unreal Engine 5.1 C++ project"],
      ["Genre", "First-person dungeon puzzle game"],
      ["Description", "A treasure hunter must find a way to get a valuable item from the deepest room of the dungeon and escape before time runs out."]
    ],
    description:
      "A first-person dungeon puzzle game about reaching treasure and escaping under time pressure.",
    tags: ["Unreal Engine", "Adventure"],
    links: [{ label: "Project Link", href: "https://github.com/egemenengin/TreasureRaider" }]
  },
  {
    title: "The Last Tank",
    category: "unreal",
    type: "Unreal Engine Project",
    image: "assets/img/project/LastTank.png",
    summary: "Tank-focused Unreal Engine project.",
    details: [
      ["Engine / Type", "Unreal Engine 5.1 C++ project"],
      ["Genre", "Simple arcade tank game"],
      ["Description", "The tank is the last hope of its world. It must destroy all enemies to take its world back while avoiding enemies that can shoot when the tank enters their range."]
    ],
    description:
      "A simple arcade tank game where the final tank fights to reclaim its world.",
    tags: ["Unreal Engine", "Game Development"],
    links: [{ label: "Project Link", href: "https://github.com/egemenengin/TheLastTank" }]
  },
  {
    title: "EE Maze",
    category: "unreal",
    type: "Unreal Engine Project",
    image: "assets/img/project/EEMaze.png",
    summary: "Maze project with GitHub repository.",
    details: [
      ["Engine / Type", "Unreal Engine 5.0 Blueprint project"],
      ["Genre", "First-person parkour game"],
      ["Description", "The player has to collect all gems to enable the door and complete the level."]
    ],
    description:
      "A first-person parkour maze where collecting every gem unlocks the exit.",
    tags: ["Unreal Engine", "Maze", "Gameplay"],
    links: [{ label: "Project Link", href: "https://github.com/egemenengin/EEMaze" }]
  },
  {
    title: "Warsky",
    category: "unity",
    type: "Unity Project",
    image: "assets/img/project/Warsky.png",
    summary: "Unity project with video and GitLab links.",
    details: [
      ["Engine / Type", "Senior project based on Unity"],
      ["Genre", "Serious and simulation game"],
      ["Modes", "Single-player, multiplayer, and AR examination modes."],
      ["Single Player", "Includes battle missions and acrobatic missions. In battle missions, players control aircraft, destroy targets, evacuate people, and complete missions. NPCs can patrol, track, and shoot. In acrobatic missions, players control aircraft over the city and reach target checkpoints."],
      ["Multiplayer", "Players fight other players and gain points by shooting them. This mode currently uses the F16."],
      ["AR Examination", "Players place aircraft in real environments and inspect them with hotspots and information panels."]
    ],
    description:
      "A Unity senior project combining serious simulation gameplay, aircraft missions, multiplayer, and AR aircraft examination.",
    tags: ["Unity", "C#", "Game Development"],
    links: [{ label: "Project Video", href: "https://youtu.be/_GUjJN_wZeA?si=mznC3BRetOzuUr4l" }, { label: "Project Link", href: "https://gitlab.com/berkay.ozek/warsky" }]
  },
  {
    title: "EE Driving",
    category: "unity",
    type: "Unity Project",
    image: "assets/img/project/ProjectBackground.jpg",
    summary: "Unity driving project with GitHub repository.",
    details: [
      ["Engine / Type", "Mobile Unity game"],
      ["Genre", "Simple arcade driving game"]
    ],
    description:
      "A mobile Unity arcade driving game.",
    tags: ["Unity", "C#", "Driving"],
    links: [{ label: "Project Link", href: "https://github.com/egemenengin/EEDriving" }]
  },
  {
    title: "Other Unity Projects",
    category: "unity",
    type: "Unity Project",
    image: "assets/img/project/ProjectBackground.jpg",
    summary: "Collection of additional Unity work.",
    details: [
      ["Description", "Previous Unity projects developed early in the learning process."],
      ["Included Work", "Escape From The Office Unity version, 3D Labyrinth lecture assignment, GlitchGarden Plants vs Zombies copy, and EE Platformer."]
    ],
    description:
      "A collection of earlier Unity learning projects and lecture assignments.",
    tags: ["Unity", "C#", "Game Development"],
    links: [
      { label: "Escape From The Office", href: "https://github.com/egemenengin/Escape-from-The-Office" },
      { label: "3D Labyrinth", href: "https://github.com/egemenengin/CMPE316_Assignment01_3DLabyrinth_EgemenEngin" },
      { label: "GlitchGarden", href: "https://github.com/egemenengin/GlitchGarden" },
      { label: "EE Platformer", href: "https://github.com/egemenengin/EEPlatformer" }
    ]
  },
  {
    title: "EE Code Assistant",
    category: "ai",
    type: "AI Development Tool",
    image: "assets/img/project/EE_CodeAssistantLogo.png",
    summary: "Windows WPF desktop app for AI-assisted code review and generation workflows.",
    details: [
      ["Platform / Type", "Windows WPF desktop application"],
      ["Purpose", "AI development assistant for reviewing, explaining, and generating code-focused output."],
      ["AI Features", "Code Safety, Code Quality, Code Explainer, and Function Creator."],
      ["AI Providers", "OpenAI and Google Gemini configuration with model loading and connection testing."],
      ["Code Safety", "Reviews selected code for security risks, suspicious patterns, exposed secrets, and safer implementation guidance."],
      ["Code Quality", "Checks cleanliness, maintainability, readability, likely warnings, likely syntax issues, and possible errors."],
      ["Code Explainer", "Turns selected code into clear explanations so the user can understand structure, intent, and important behavior."],
      ["Function Creator", "Helps generate function-level code from user intent while keeping the workflow focused inside the desktop app."],
      ["Workflow", "The user selects or provides code, the app validates local input, redacts obvious secret-like values when needed, sends sanitized content to the selected AI provider, and displays formatted feedback."],
      ["Safety", "The app does not edit files, run builds, execute commands, or give AI agents tool access."]
    ],
    description:
      "A WPF AI development assistant with Code Safety, Code Quality, Code Explainer, and Function Creator workflows powered by OpenAI or Google Gemini.",
    tags: ["AI Tools", "WPF", "OpenAI", "Gemini", "Code Review"],
    links: [{ label: "Video Link", href: "https://www.youtube.com" }]
  }
];

const certificates = [
  {
    title: "Clean Code",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Clean Code course by Maximilian Schwarzmuller.",
    details: [["Course", "Clean Code"], ["Instructor", "Maximilian Schwarzmuller"]],
    description:
      "Clean Code certificate focused on writing maintainable, readable, and scalable code.",
    tags: ["Clean Code", "Software Engineering"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-aacdbd0e-08c9-443b-8db7-97a070b18e3b/" }, { label: "Course Link", href: "https://www.udemy.com/course/writing-clean-code/" }]
  },
  {
    title: "Git & Github Bootcamp",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Git and GitHub workflow fundamentals.",
    details: [["Course", "The Git & Github Bootcamp"], ["Instructor", "Colt Steele"]],
    description:
      "Certificate covering Git, GitHub, branching, repository workflows, and collaboration basics.",
    tags: ["Git", "GitHub", "Version Control"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-8c2d34f9-657b-419a-9139-1bed6fae8105/" }, { label: "Course Link", href: "https://www.udemy.com/course/git-and-github-bootcamp/" }]
  },
  {
    title: "UI UX Design Patterns",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "UI/UX design pattern training.",
    details: [["Course", "UI UX Design Patterns"], ["Instructor", "Aaron Lawrence"]],
    description:
      "Certificate focused on UI/UX design patterns for usable digital experiences.",
    tags: ["UI", "UX", "Design"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-0d09fe40-cdf4-4eb1-bc08-e5806e2d0e77/" }, { label: "Course Link", href: "https://www.udemy.com/course/uidesignpatterns/" }]
  },
  {
    title: "Unreal Engine 5 UI",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Unreal Engine 5 menu and widget UI.",
    details: [["Course", "Unreal Engine 5 UI"], ["Instructor", "Gavin Eisenbeisz"]],
    description:
      "Certificate covering Unreal Engine 5 UI and widget blueprint workflows.",
    tags: ["Unreal Engine", "UI", "Blueprints"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-4d3c5ad5-3587-49fa-8906-fc98113f5b62/" }, { label: "Course Link", href: "https://www.udemy.com/course/unreal-engine-5-main-menu-widget-blueprint/" }]
  },
  {
    title: "Unreal Engine 5 Character UI",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Character UI workflows in Unreal Engine 5.",
    details: [["Course", "Unreal Engine 5 Character UI"], ["Instructor", "Greg Wondra"]],
    description: "Certificate focused on character UI development in Unreal Engine 5.",
    tags: ["Unreal Engine", "UI"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-561c2397-bf07-49b5-b0b5-6ac66cac6a57/" }, { label: "Course Link", href: "https://www.udemy.com/course/unreal-engine-character-ui/" }]
  },
  {
    title: "Design Patterns For Game Programming",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Game programming design patterns.",
    details: [["Course", "Design Patterns for Game Programming"], ["Instructor", "Penny de Byl"]],
    description: "Certificate covering design patterns used in game programming.",
    tags: ["Design Patterns", "Game Development"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-3643cfda-7a09-4f69-a401-dc5b3b511f5c/" }, { label: "Course Link", href: "https://www.udemy.com/course/design-patterns-for-game-programming/" }]
  },
  {
    title: "Unreal Engine Automation",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Automation workflows for Unreal Engine.",
    details: [["Course", "Unreal Engine Automation"], ["Instructor", "Tim Grossmann, Andreas Hauber, Jonas Roth"]],
    description: "Certificate focused on becoming an Unreal automation expert.",
    tags: ["Unreal Engine", "Automation"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-61987184-1192-43e0-89d9-2f642863bd9a/" }, { label: "Course Link", href: "https://www.udemy.com/course/becoming-an-unreal-automation-expert/" }]
  },
  {
    title: "UE5.4 Motion Design",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Motion design workflows in Unreal Engine 5.4.",
    details: [["Course", "Motion Design"], ["Instructor", "Raffi Bedross"]],
    description: "Certificate covering UE5.4 motion design workflows.",
    tags: ["Unreal Engine", "Motion Design"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-2c019195-4c3e-4e03-976d-e8e814686597/" }, { label: "Course Link", href: "https://www.udemy.com/course/unreal-engine-motion-design/" }]
  },
  {
    title: "Unreal Engine 5 C++ Video Game Development",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "C++ video game development with Unreal Engine 5.",
    details: [["Course", "Unreal Engine 5 C++ Game Development"], ["Instructor", "Ben Tristem, Stephen Ulibarri, GameDev.tv Team"]],
    description: "Certificate covering Unreal Engine 5 C++ video game development.",
    tags: ["Unreal Engine", "C++"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-fdb79d23-fe53-4949-a606-4732e840c0d1/" }, { label: "Course Link", href: "https://www.udemy.com/course/unrealcourse/?kw=unreal+engine+5+c%2B%2B+developer&src=sac" }]
  },
  {
    title: "UE5 Interactive Art",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Interactive art and physics in Unreal Engine.",
    details: [["Course", "UE5 Interactive Art"], ["Instructor", "Yu Fujishiro"]],
    description: "Certificate covering Unreal Engine physics and interactive art workflows.",
    tags: ["Unreal Engine", "Interactive Art"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-9414e81d-df6e-455b-9e3c-bbf40250afbe/" }, { label: "Course Link", href: "https://www.udemy.com/course/unreal-engine-physics-interactive-art-with-osc/" }]
  },
  {
    title: "Unity C# Mobile Game Development",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Mobile game development in Unity with C#.",
    details: [["Course", "Unity C# Mobile Game Development"], ["Instructor", "Rick Davidson, Nathan Farrer, GameDev.tv Team"]],
    description: "Certificate covering Unity C# mobile game development.",
    tags: ["Unity", "C#", "Mobile"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-50844868-676a-4bf6-9e84-1504ccfca7a5/" }, { label: "Course Link", href: "https://www.udemy.com/course/unity-mobile/" }]
  },
  {
    title: "Unreal Engine Blueprint Video Game Development",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Blueprint video game development in Unreal Engine.",
    details: [["Course", "Unreal Engine 5 Blueprints"], ["Instructor", "Titanforged Entertainment"], ["Additional Course", "Unreal Engine 5 Beginner Blueprints by Gavin Eisenbeisz"]],
    description: "Certificate covering Unreal Engine Blueprint video game development.",
    tags: ["Unreal Engine", "Blueprints"],
    links: [
      { label: "Blueprints Certificate", href: "https://www.udemy.com/certificate/UC-64f37212-af56-42cd-a1f8-c4bf08d40157/" },
      { label: "Blueprints Course", href: "https://www.udemy.com/course/unreal-engine-5-blueprints/" },
      { label: "Beginner Blueprints Certificate", href: "https://www.udemy.com/certificate/UC-f4dc0573-e930-4c0f-b14e-f188af5d0860/" },
      { label: "Beginner Blueprints Course", href: "https://www.udemy.com/course/unrealengine5-make-your-first-game/" }
    ]
  },
  {
    title: "Unreal Engine Video Game Development & Design",
    type: "Certificate",
    image: "assets/img/certificate.png",
    summary: "Video game development and design in Unreal Engine.",
    details: [["Course", "Unreal Engine 5 Video Game Development & Design"], ["Instructor", "David Nixon"]],
    description: "Certificate covering Unreal Engine video game development and design.",
    tags: ["Unreal Engine", "Game Design"],
    links: [{ label: "Certificate Link", href: "https://www.udemy.com/certificate/UC-28903783-6c77-4baf-beeb-4186b292c0f4/" }, { label: "Course Link", href: "https://www.udemy.com/course/unreal-engine-5-the-complete-beginners-course/?couponCode=KEEPLEARNING" }]
  }
];

const navButtons = document.querySelectorAll(".nav-button");
const pages = document.querySelectorAll("[data-page-panel]");
const projectGrid = document.querySelector("#projectGrid");
const certificateGrid = document.querySelector("#certificateGrid");
const filterBar = document.querySelector(".filter-bar");
const modal = document.querySelector("#detailModal");
const modalMedia = document.querySelector("#modalMedia");
const modalType = document.querySelector("#modalType");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalTags = document.querySelector("#modalTags");
const modalLinks = document.querySelector("#modalLinks");
const themeToggle = document.querySelector(".theme-toggle");

function getPreferredTheme() {
  const urlTheme = new URLSearchParams(window.location.search).get("theme");
  if (urlTheme === "dark" || urlTheme === "light") {
    return urlTheme;
  }

  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);

  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

function setActivePage(pageName) {
  navButtons.forEach((button) => {
    const isActive = button.dataset.page === pageName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });

  pages.forEach((page) => {
    page.classList.toggle("is-active", page.dataset.pagePanel === pageName);
  });

  const target = document.querySelector(`#${pageName}`);
  if (target) {
    history.replaceState(null, "", `#${pageName}`);
  }
}

function cardTemplate(item, imageClass) {
  return `
    <button class="item-button" type="button" data-title="${item.title}">
      <div class="thumb ${imageClass}" aria-hidden="true">
        ${item.image ? `<img src="${item.image}" alt="">` : `<span>${item.icon || item.title.slice(0, 2)}</span>`}
      </div>
      <div class="item-content">
        <h2>${item.title}</h2>
        <p>${item.summary}</p>
      </div>
    </button>
  `;
}

function labelForCategory(category) {
  const labels = {
    ai: "AI Tools",
    unity: "Unity",
    unreal: "Unreal Engine"
  };

  return labels[category] || category.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function renderProjectFilters() {
  const preferredOrder = ["unreal", "unity", "ai"];
  const categories = [...new Set(projects.map((project) => project.category))];
  const orderedCategories = [
    ...preferredOrder.filter((category) => categories.includes(category)),
    ...categories.filter((category) => !preferredOrder.includes(category)).sort()
  ];

  filterBar.innerHTML = [
    `<button class="filter-button is-active" type="button" data-filter="all">All</button>`,
    ...orderedCategories.map((category) => `<button class="filter-button" type="button" data-filter="${category}">${labelForCategory(category)}</button>`)
  ].join("");

  filterBar.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      filterBar.querySelectorAll(".filter-button").forEach((filterButton) => filterButton.classList.remove("is-active"));
      button.classList.add("is-active");
      renderProjects(button.dataset.filter);
    });
  });
}

function renderProjects(filter = "all") {
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  projectGrid.innerHTML = visibleProjects
    .map((project) => cardTemplate(project, project.category))
    .join("");

  projectGrid.querySelectorAll(".item-button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = projects.find((project) => project.title === button.dataset.title);
      openModal(item, item.category);
    });
  });
}

function renderCertificates() {
  certificateGrid.innerHTML = certificates
    .map((certificate) => cardTemplate(certificate, "cert"))
    .join("");

  certificateGrid.querySelectorAll(".item-button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = certificates.find((certificate) => certificate.title === button.dataset.title);
      openModal(item, "cert");
    });
  });
}

function detailTemplate(item) {
  if (!item.details || item.details.length === 0) {
    return `<p>${item.description}</p>`;
  }

  return `
    <dl class="detail-list">
      ${item.details
        .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
        .join("")}
    </dl>
  `;
}

function openModal(item, mediaClass) {
  modalMedia.className = `modal-media info-media ${mediaClass}`;
  modalMedia.innerHTML = detailTemplate(item);
  modalType.textContent = item.type;
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;
  modalTags.innerHTML = item.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalLinks.innerHTML = item.links.length === 0
    ? ""
    : item.links
      .map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
      .join("");
  modal.showModal();
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => setActivePage(button.dataset.page));
});

document.querySelector("[data-close-modal]").addEventListener("click", () => modal.close());

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

renderProjectFilters();
renderProjects();
renderCertificates();
applyTheme(getPreferredTheme());

const initialPage = location.hash.replace("#", "");
if (initialPage && document.querySelector(`[data-page-panel="${initialPage}"]`)) {
  setActivePage(initialPage);
} else {
  setActivePage("about");
}
