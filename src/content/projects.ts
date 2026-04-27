import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "loldraftengine",
    slug: "loldraftengine",
    title: "LoLDraftEngine",
    headline:
      "An interactive League of Legends draft intelligence platform focused on composition analysis, contextual recommendations, and AI-assisted strategic explanation.",
    summary:
      "A public product-style repository that combines a React and TypeScript frontend, an Express companion server, Riot ecosystem integration, and draft recommendation workflows for champion select decision-making.",
    recruiterSummary:
      "A strong product-thinking project that shows frontend architecture, API integration, recommendation-oriented UX, and system design beyond a basic game fan tool.",
    category: "AI-assisted gaming product",
    status: "In Progress",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "League of Legends drafting, recommendation workflows, and strategy tooling",
    role: "Product builder and full-stack implementation owner",
    period: "2026",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Express",
      "Riot API",
      "Data Dragon",
      "Vitest",
    ],
    tags: [
      "Gaming product",
      "Recommendation UX",
      "API integration",
      "AI-assisted workflow",
    ],
    outcomes: [
      "Interactive draft workflow",
      "Client and server split",
      "Patch-aware roster handling",
      "Public product scaffold with test support",
    ],
    problem: [
      "Champion draft decisions are time-sensitive and context-heavy, which makes it hard to reason about composition strength, synergy, and counterplay quickly.",
      "Players often need different recommendation modes, such as best overall draft value versus recommendations constrained by a personal champion pool.",
      "A useful draft tool also needs current roster data and patch awareness, not a static or outdated champion list.",
    ],
    solution: [
      "Build an interactive draft platform that models the pick and ban flow while exposing recommendation-oriented analysis instead of only displaying team state.",
      "Combine browser-side Data Dragon access with a companion server architecture so the product can support richer live and local workflows over time.",
      "Structure the project as a real product codebase with frontend, backend, tests, and development handoff docs rather than a one-file prototype.",
    ],
    technicalDecisions: [
      "Used React, TypeScript, and Vite for a fast iterative frontend while keeping the draft state and UI architecture type-safe.",
      "Added an Express-based companion backend and desktop-oriented scripts so the product can evolve beyond a browser-only experiment.",
      "Handled champion roster loading through Riot ecosystem sources, including support for latest patch resolution and explicit patch pinning documented in the repo.",
      "Included test tooling and internal project workflow files, signaling a product engineering mindset instead of a throwaway demo.",
    ],
    uiuxDecisions: [
      "The project centers the draft interaction itself, which keeps the product aligned with the real user task instead of burying it under generic dashboard chrome.",
      "Recommendation modes are framed around actual player decisions, making the interface more strategic and more understandable to the target audience.",
      "The public repo documentation emphasizes practical startup paths for frontend-only and frontend-plus-backend flows, reducing onboarding friction.",
    ],
    results: [
      "The public repository shows a functioning product foundation for draft intelligence with frontend, backend, and live companion directions already established.",
      "The project demonstrates clear scope expansion from a simple idea into a system prepared for real data, recommendation logic, and future AI-assisted explanation.",
      "The public repo does not yet document production usage metrics, so impact should currently be evaluated through architecture and implementation quality rather than adoption numbers.",
    ],
    futureImprovements: [
      "Deepen recommendation quality and explanation clarity as the decision engine evolves.",
      "Expand live companion and local client integration beyond the current scaffolded workflow.",
      "Add richer testing coverage around draft rules, state transitions, and recommendation output.",
    ],
    media: [],
    links: [
      {
        label: "View repository",
        href: "https://github.com/ChantoCr/LoLDraftEngine",
        external: true,
        enabled: true,
      },
    ],
  },
  {
    id: "buscar-un-regalo",
    slug: "buscar-un-regalo",
    title: "Busca un regalo",
    headline:
      "A gift coordination web application with user accounts, group participation, reservation flows, and responsive UI patterns for collaborative planning.",
    summary:
      "Based on the public repository, this project includes authentication flows, personal and shared gift lists, community/group features, gift reservation actions, and multi-layout responsive pages built with React and Material UI.",
    recruiterSummary:
      "A practical consumer-style web app that demonstrates authenticated flows, CRUD-heavy UI, API integration, and thoughtful responsiveness across device sizes.",
    category: "Web application",
    status: "Built",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "Gift planning, shared wishlists, and group coordination",
    role: "Frontend application builder and public repository author",
    period: "2024",
    featured: true,
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Redux Toolkit",
      "RTK Query",
      "Material UI",
      "React Router",
    ],
    tags: [
      "Consumer app",
      "Authentication",
      "Responsive UI",
      "CRUD workflows",
    ],
    outcomes: [
      "Gift reservation flow",
      "Protected and public routes",
      "Community and member features",
      "Repository-backed API contract",
    ],
    problem: [
      "Coordinating gift ideas across families, groups, or communities can easily lead to duplicate purchases and fragmented communication.",
      "Users need a way to publish gift ideas, browse others' lists, and reserve items without exposing every action publicly or creating confusion inside a group.",
      "The app also needs account flows, profile handling, password recovery, and group membership features to feel like a usable product instead of a static list.",
    ],
    solution: [
      "Build a React application with authenticated and unauthenticated route paths so users can browse public information while protected actions remain behind login.",
      "Add gift creation, editing, deletion, reserve and unreserve flows, plus user-specific and community-specific views.",
      "Model group participation through community endpoints and join flows so the experience supports both personal lists and shared planning.",
    ],
    technicalDecisions: [
      "Used Redux Toolkit and RTK Query to centralize API interactions for auth, gifts, users, password recovery, and community features.",
      "Structured the app with route-level separation between authenticated and unauthenticated experiences using React Router.",
      "Stored and reused token headers for protected API calls, which supports session-aware interactions across the app.",
      "The public repo also includes a database backup, making the domain model easier to inspect from the outside.",
    ],
    uiuxDecisions: [
      "Material UI was used to accelerate a consistent interface across forms, dialogs, navigation, and responsive content blocks.",
      "The gift detail page includes distinct desktop, portrait mobile, and landscape mobile layouts, showing attention to device-specific presentation rather than only fluid scaling.",
      "Reserve, unreserve, delete, and edit actions are wrapped in confirmation dialogs, which helps reduce accidental destructive actions.",
    ],
    results: [
      "The public repository shows a substantial frontend implementation with authenticated flows, shared-group behaviors, and gift reservation interactions.",
      "This project demonstrates comfort with state management, API-driven UI, and feature-rich app routing beyond a basic landing page.",
      "Public business usage metrics are not documented in the repo, so the strongest current evidence is the breadth of implemented product flows.",
    ],
    futureImprovements: [
      "Document or publish the corresponding backend architecture more explicitly for easier technical review.",
      "Add automated tests around auth, reservation flows, and route protection.",
      "Refine deployment and onboarding documentation so reviewers can evaluate the product more quickly.",
    ],
    media: [],
    links: [
      {
        label: "View repository",
        href: "https://gitlab.com/ChantoS/buscar-un-regalo",
        external: true,
        enabled: true,
      },
    ],
  },
  {
    id: "himnarioidc-flutter",
    slug: "himnarioidc-flutter",
    title: "HimnarioIDC Flutter",
    headline:
      "A cross-platform Flutter hymnbook app with local persistence, search flows, numeric browsing, and prepared audio support.",
    summary:
      "The public repository shows a Flutter application that loads hymn data into a local SQLite database, supports search and number-based browsing, and renders dedicated song and settings screens across mobile and desktop targets.",
    recruiterSummary:
      "A useful mobile-first project that demonstrates Flutter fundamentals, local data modeling, offline-friendly content handling, and product thinking around reading and search UX.",
    category: "Mobile application",
    status: "Built",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "Digital hymnbook and searchable worship content",
    role: "Flutter application builder and mobile UI implementer",
    period: "2024",
    featured: true,
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "sqflite",
      "shared_preferences",
      "audioplayers",
    ],
    tags: [
      "Mobile app",
      "Local data",
      "Search UX",
      "Cross-platform Flutter",
    ],
    outcomes: [
      "SQLite-backed hymn catalog",
      "Search and numeric browsing",
      "Cross-platform Flutter structure",
      "Prepared audio service layer",
    ],
    problem: [
      "Printed or poorly searchable hymn collections make it harder to find songs quickly during real usage.",
      "A digital hymnbook needs to support multiple access patterns, such as search by name, search by number, and direct reading views.",
      "The experience also benefits from local persistence so core content can be initialized and read without relying on a live backend for every interaction.",
    ],
    solution: [
      "Build a Flutter app that loads hymn content from bundled JSON into a local SQLite database and exposes that data through a dedicated model layer.",
      "Add search logic, number-range filtering, dedicated song screens, and app settings so the experience supports multiple reading flows.",
      "Prepare audio playback support and shared preference utilities so the app can grow beyond static lyric viewing.",
    ],
    technicalDecisions: [
      "Used sqflite and a singleton-style database helper to manage hymn persistence locally inside the app.",
      "Loaded seed hymn data from bundled JSON and populated the database on first run, which is a practical approach for structured local content.",
      "Used Provider for UI state such as font-size-oriented reading behavior on song screens.",
      "Kept the project generated for Android, iOS, web, Linux, macOS, and Windows, signaling a cross-platform build direction.",
    ],
    uiuxDecisions: [
      "The app uses a dark base palette with bright accent colors and large typographic treatment suited to reading-focused screens.",
      "Home flows include grouped numeric shortcuts, which reduce friction when users know a hymn number but not the exact title.",
      "Screen separation between home, search, song, and settings creates a clear mental model for navigation.",
    ],
    results: [
      "The public repository documents a working Flutter app structure with local storage, search, reading screens, and prepared audio support.",
      "This project shows practical mobile product thinking around content portability and accessibility of information.",
      "The public repo does not document distribution metrics or store release data, so review should focus on implementation depth and app structure.",
    ],
    futureImprovements: [
      "Replace sample or starter data flows with a richer production content pipeline where needed.",
      "Expand audio, favorites, and reading customization features.",
      "Improve public documentation and screenshots so the product can be evaluated faster by recruiters and collaborators.",
    ],
    media: [],
    links: [
      {
        label: "View repository",
        href: "https://gitlab.com/ChantoS/himnarioidc-flutter",
        external: true,
        enabled: true,
      },
    ],
  },
  {
    id: "chess-3d",
    slug: "chess-3d",
    title: "Chess 3D",
    headline:
      "A Unity-based 3D chess prototype with generated board logic, drag-and-drop interaction, movement rules by piece, and victory handling.",
    summary:
      "The public repository includes a 3D chess scene, board generation logic, per-piece movement classes, highlighting states, turn handling, capture presentation, and reset flow inside Unity.",
    recruiterSummary:
      "A good example of spatial interaction programming and gameplay systems work, showing object-oriented design, rule modeling, and real-time input handling in Unity.",
    category: "3D game prototype",
    status: "Built",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "Board-game gameplay systems in a 3D environment",
    role: "Unity developer and gameplay systems implementer",
    period: "2023",
    featured: true,
    technologies: ["Unity", "C#", "ShaderLab", "HLSL", "TextMeshPro"],
    tags: ["Unity", "Gameplay logic", "3D interaction", "Board game"],
    outcomes: [
      "Generated board and tile system",
      "Per-piece movement rules",
      "Turn-based interaction loop",
      "Capture and victory presentation",
    ],
    problem: [
      "Chess rules are straightforward conceptually but require careful board-state handling and movement logic when translated into an interactive 3D scene.",
      "The project also needs readable interaction feedback so players understand hover state, legal moves, and turn ownership.",
      "A 3D version of a board game only feels usable when the interaction model remains simple despite the visual depth.",
    ],
    solution: [
      "Generate the board tiles in code, spawn and place pieces programmatically, and track board state in a two-dimensional piece matrix.",
      "Implement move generation per piece type through inheritance so each chess piece can expose its own legal movement pattern.",
      "Use drag-and-drop selection, tile highlighting, turn switching, dead-piece placement, and a victory screen to complete the playable loop.",
    ],
    technicalDecisions: [
      "The board is generated at runtime instead of being modeled as static scene geometry, which keeps state lookup and tile indexing straightforward.",
      "Each piece derives from a shared ChessPiece class and overrides available-move logic, making the rules more modular and easier to extend.",
      "Tile layers are reused to represent default, hover, and legal-move highlight states, which is a pragmatic real-time interaction technique in Unity.",
      "The public implementation appears focused on core playable behavior rather than advanced rule completeness such as full check validation.",
    ],
    uiuxDecisions: [
      "Drag interaction keeps the game tactile and visually intuitive in 3D.",
      "Hover and highlight states make legal movement discoverable without relying on external instructions.",
      "Captured pieces are repositioned visibly off the main board, which preserves game readability during a match.",
    ],
    results: [
      "The public repository contains a playable 3D chess foundation with custom movement logic for multiple piece types and a complete turn loop.",
      "This project demonstrates comfort with gameplay scripting, runtime board management, and object-oriented rule modeling.",
      "The strongest current evidence is technical implementation; formal polish, advanced rules, and distribution context are not fully documented publicly.",
    ],
    futureImprovements: [
      "Add stricter chess rule coverage such as check validation, checkmate detection, castling, and move history.",
      "Improve camera, match feedback, and onboarding for new players.",
      "Separate production gameplay scripts from imported sample and package content for cleaner portfolio review.",
    ],
    media: [],
    links: [
      {
        label: "View repository",
        href: "https://gitlab.com/ChantoS/chess-3d",
        external: true,
        enabled: true,
      },
    ],
  },
  {
    id: "himnario-backend",
    slug: "himnario-backend",
    title: "Himnario Backend",
    headline:
      "A Node and MySQL backend for serving hymn data, songbooks, and media-related operations for a digital hymnbook workflow.",
    summary:
      "The public repository exposes an Express backend with routes for retrieving hymns, fetching songbooks, and uploading songbook-related assets using MySQL and file upload helpers.",
    recruiterSummary:
      "A backend support project that shows server structure, database connectivity, and media-oriented CRUD thinking for a content-driven application.",
    category: "Backend service",
    status: "Built",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "API and content support for a hymnbook application",
    role: "Backend API developer",
    period: "2022 - 2023",
    featured: false,
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "express-fileupload",
      "dotenv",
      "uuid",
    ],
    tags: ["Backend", "MySQL", "Media upload", "Express API"],
    outcomes: [
      "Song retrieval endpoints",
      "Songbook management endpoints",
      "File upload utility",
      "Separated routes and controllers",
    ],
    problem: [
      "A digital hymnbook experience benefits from a backend that can expose structured hymn data and administrative content operations.",
      "If songs, books, and media live only in a client bundle, it becomes harder to evolve the product into a broader managed system.",
      "The public repo suggests a need to support both content retrieval and file-based updates for songbooks or related assets.",
    ],
    solution: [
      "Build an Express server with dedicated route and controller layers for hymn retrieval and related content operations.",
      "Use MySQL connections through middleware so controllers can query and return song and songbook data.",
      "Add upload helpers for image handling so the backend can support richer songbook records beyond plain text fields.",
    ],
    technicalDecisions: [
      "The backend uses environment-configured database credentials and express-myconnection for request-scoped MySQL access.",
      "Routes are kept simple and mapped to focused controllers for songs, songbooks, and uploads.",
      "File upload handling includes extension checks, generated file names, and storage path management.",
      "The public codebase favors a straightforward structure, though it would benefit from additional hardening around validation and query safety.",
    ],
    uiuxDecisions: [
      "This repository is backend-only, so its experience decisions show up mainly through API shape and support for media-enabled content flows.",
      "The presence of separate endpoints for songs, books, and uploads suggests the backend was shaped around concrete app use cases rather than a purely generic scaffold.",
    ],
    results: [
      "The public repo documents a functioning backend structure for hymn and songbook-related operations.",
      "It strengthens the portfolio by showing that the hymnbook work was not only a frontend exercise but also had server-side support.",
      "The repo does not currently include a richer public API spec, deployment notes, or usage metrics.",
    ],
    futureImprovements: [
      "Parameterize database queries consistently and add stronger input validation.",
      "Document the API contract and data model more explicitly for external reviewers.",
      "Add authentication, tests, and production-oriented error handling.",
    ],
    media: [],
    links: [
      {
        label: "View repository",
        href: "https://gitlab.com/ChantoS/himnario-backend",
        external: true,
        enabled: true,
      },
    ],
  },
  {
    id: "blackjack-3d",
    slug: "blackjack-3d",
    title: "Blackjack 3D",
    headline:
      "A Unity blackjack prototype with card dealing, betting interactions, dealer logic, ace handling, and a 3D casino presentation.",
    summary:
      "The public repository includes gameplay scripts for dealing, hit and stand behavior, chip betting, pot and cash tracking, dealer turns, and hand evaluation within a 3D Unity environment.",
    recruiterSummary:
      "A gameplay-heavy project that shows interactive systems work, state transitions, and rule implementation inside a visually themed 3D scene.",
    category: "3D game prototype",
    status: "Built",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "Casino card-game logic and 3D interaction",
    role: "Unity gameplay and interaction developer",
    period: "2022",
    featured: false,
    technologies: ["Unity", "C#", "ShaderLab", "HLSL", "TextMeshPro"],
    tags: ["Unity", "Card game", "Game state", "3D prototype"],
    outcomes: [
      "Playable blackjack round loop",
      "Betting and chip interaction",
      "Dealer automation",
      "Cash and pot tracking",
    ],
    problem: [
      "Blackjack requires clear handling of dealing, ace value changes, dealer rules, and outcome resolution to feel coherent as an interactive game.",
      "A 3D casino presentation also needs the supporting logic to make buttons, chips, deck behavior, and card visibility work together.",
      "Without a structured state loop, betting and round progression quickly become error-prone.",
    ],
    solution: [
      "Create dedicated gameplay scripts for cards, players, deck behavior, chip actions, and overall round management.",
      "Implement deal, hit, stand, and round-over behavior while tracking hand values, ace adjustments, and dealer turns.",
      "Connect the gameplay logic to a 3D casino scene so the experience reads as a cohesive prototype instead of isolated scripts.",
    ],
    technicalDecisions: [
      "GameManager centralizes round flow, UI button wiring, betting actions, and outcome handling.",
      "PlayerScript tracks hand state and adjusts ace values dynamically, which is one of the core gameplay correctness challenges in blackjack.",
      "Card and deck scripts separate representation from draw logic, which keeps the implementation easier to follow and extend.",
    ],
    uiuxDecisions: [
      "The prototype uses dedicated buttons and visible chip denominations to keep betting actions understandable.",
      "A hidden dealer card and end-of-round messaging recreate familiar blackjack expectations in a simple but readable way.",
      "The 3D casino environment adds thematic context without replacing the need for explicit round feedback.",
    ],
    results: [
      "The public repository shows a complete playable prototype loop with betting, dealing, score changes, and round outcomes.",
      "This project demonstrates practical comfort with real-time game state, rules, and interaction scripting.",
      "The public repo currently reads as a prototype rather than a polished shipped game, which is appropriate to state clearly.",
    ],
    futureImprovements: [
      "Add richer animation, audio, and table feedback.",
      "Expand rule coverage with options like split, double down, and stronger edge-case handling.",
      "Reduce editor and package noise in the repo to make the authored gameplay code easier to review.",
    ],
    media: [],
    links: [
      {
        label: "View repository",
        href: "https://gitlab.com/ChantoS/blackjack-3d",
        external: true,
        enabled: true,
      },
    ],
  },
  {
    id: "contact-tracing",
    slug: "contact-tracing",
    title: "Contact Tracing App",
    headline:
      "A Salesforce-based contact tracing application centered on people, locations, tracing records, and Apex controller logic.",
    summary:
      "The public repository contains an SFDX project with custom Salesforce objects, app metadata, layouts, and Apex controllers for person lookup, location lookup, people tracing, and location tracing workflows.",
    recruiterSummary:
      "A platform-specific project that demonstrates Apex, SOQL, Salesforce object modeling, and relationship-oriented backend logic rather than generic web-stack development.",
    category: "Salesforce application",
    status: "Built",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "Tracing workflows, people and location records, and Salesforce platform customization",
    role: "Salesforce Apex implementation study and repository author",
    period: "2025",
    featured: false,
    technologies: ["Salesforce", "Apex", "SOQL", "SFDX", "Metadata API"],
    tags: ["Salesforce", "Apex", "Platform app", "Data relationships"],
    outcomes: [
      "Custom object structure",
      "Apex controller layer",
      "Search and lookup logic",
      "Duplicate trace checking",
    ],
    problem: [
      "Tracing workflows require reliable relationships between people, locations, and visit or contact events.",
      "A usable platform implementation also needs searchable records and safeguards against duplicate trace entries.",
      "Inside Salesforce, that means modeling the data well and exposing focused controller logic around the main tracing behaviors.",
    ],
    solution: [
      "Use custom objects such as Person, Location, People Tracing, and Location Tracing to represent the core domain entities and relationships.",
      "Implement Apex controllers for recent status changes, search flows, entity lookup by id, and duplicate-checking logic for tracing records.",
      "Package the app as an SFDX project so the metadata, layouts, and classes can be deployed into a Salesforce org.",
    ],
    technicalDecisions: [
      "The repo uses Apex and SOQL to query person and location records directly within Salesforce platform conventions.",
      "Duplicate-checking logic is handled in controller code for both people tracing and location tracing records.",
      "The project includes app metadata, object metadata, layouts, and a utility bar configuration, indicating a Salesforce-native implementation path instead of a custom standalone frontend.",
    ],
    uiuxDecisions: [
      "The visible UX is largely expressed through Salesforce-native layouts and app configuration rather than a separate bespoke frontend codebase.",
      "That choice is appropriate for internal platform-style workflows where speed of configuration and data integration can matter more than full custom UI branding.",
    ],
    results: [
      "The public repository demonstrates working platform structure across metadata, object modeling, and controller logic.",
      "It broadens the portfolio beyond standard web and mobile work by showing comfort inside a specialized enterprise ecosystem.",
      "The public repo does not document business rollout, org usage, or outcome metrics, so review should remain implementation-focused.",
    ],
    futureImprovements: [
      "Add tests, stronger documentation, and clearer screenshots of the configured Salesforce app experience.",
      "Harden data validation around tracing record creation and reporting flows.",
      "Clarify whether the repo is intended as a study implementation, internal app, or broader production prototype.",
    ],
    media: [],
    links: [
      {
        label: "View repository",
        href: "https://github.com/ChantoCr/contact_tracing",
        external: true,
        enabled: true,
      },
    ],
  },
  {
    id: "mado-inventory",
    slug: "mado-inventory",
    title: "Mado Inventory",
    headline:
      "A public inventory project slot that is present in the repository list but not yet documented with implementation details in the public repo.",
    summary:
      "The public GitLab repository currently exposes an initialized project with the default README and no public implementation files, so this entry is intentionally kept honest and lightweight.",
    recruiterSummary:
      "Included for portfolio completeness, but the current public repository does not yet provide enough documented scope to present it as a full proof-of-work case study.",
    category: "Inventory product concept",
    status: "Planned",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "Inventory management direction; detailed public scope not documented yet",
    role: "Project owner; implementation details pending public documentation",
    period: "2024",
    featured: false,
    technologies: [],
    tags: ["Inventory", "Planned", "Underdocumented"],
    outcomes: [
      "Public repository initialized",
      "Future case study slot reserved",
    ],
    problem: [
      "The repository name suggests an inventory-focused product direction, but the public codebase does not yet document the target workflow, user roles, or system scope.",
      "Publishing more than that would require guessing, which this portfolio should avoid.",
    ],
    solution: [
      "Keep the project visible in the library so the work history stays transparent while clearly marking it as underdocumented.",
      "Reserve this slot for a fuller case study once real implementation details or approved notes are available.",
    ],
    technicalDecisions: [
      "The public repo currently contains an initial commit and starter README only.",
      "No implementation stack can be confirmed yet from the repository contents.",
    ],
    uiuxDecisions: [
      "No public UI or UX assets are documented yet.",
    ],
    results: [
      "The repository exists publicly and has been acknowledged without overstating its current state.",
      "This entry demonstrates documentation discipline by not inventing features that are not present in the repo.",
    ],
    futureImprovements: [
      "Add approved scope, stack, and screenshots once implementation begins or is made public.",
      "Upgrade this entry into a full case study using the intake template and real build details.",
    ],
    media: [],
    links: [
      {
        label: "View repository",
        href: "https://gitlab.com/ChantoS/mado_inventory",
        external: true,
        enabled: true,
      },
    ],
  },
  {
    id: "developer-portfolio-os",
    slug: "developer-portfolio-os",
    title: "Gabriel Soto Portfolio",
    headline:
      "A cinematic portfolio system designed to present technical depth, product thinking, professional context, and future-ready interactive exploration.",
    summary:
      "This portfolio is being built as a product system rather than a template site, combining structured content, premium motion, project storytelling, and long-term extensibility.",
    recruiterSummary:
      "A portfolio product that demonstrates frontend execution, content architecture, interaction design, and disciplined engineering choices instead of relying on generic personal branding.",
    category: "Flagship product",
    status: "In Progress",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "Developer portfolio and professional positioning",
    role: "Product architect, frontend developer, and case study author",
    period: "2026 - Present",
    featured: false,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui-ready",
    ],
    tags: [
      "Portfolio product",
      "Frontend architecture",
      "Motion design",
      "Structured content",
    ],
    outcomes: [
      "Production-minded frontend architecture",
      "Structured professional profile layer",
      "Reusable motion system",
      "Case-study-ready project foundation",
    ],
    problem: [
      "Generic portfolio sites often show surface-level design without proving technical reasoning, structure, or product thinking.",
      "Recruiters, developers, and clients evaluate work differently, so the portfolio needed a system that could support multiple perspectives without duplicating content.",
      "The experience needed to feel premium and memorable while remaining maintainable and extensible for future project pages.",
    ],
    solution: [
      "Design the portfolio as a modular product with typed content, reusable sections, and dynamic project routes.",
      "Use a cinematic dark visual system with purposeful motion, staggered reveals, and interactive cards to elevate first impression without hurting readability.",
      "Store profile, timeline, qualifications, and project data in structured modules so the UI stays reusable and future features can build on the same knowledge base.",
    ],
    technicalDecisions: [
      "Used Next.js App Router with TypeScript to support scalable routing, reusable layouts, and future content expansion.",
      "Separated content, UI, motion, utilities, and types into dedicated folders to keep the codebase maintainable as the product grows.",
      "Created reusable motion primitives instead of hardcoding animation logic inside every section component.",
      "Built project case study routes from structured data so each project can evolve without rewriting the rendering layer.",
    ],
    uiuxDecisions: [
      "Used a dark premium visual system with warm orange and soft violet accents to balance cinematic feel and technical clarity.",
      "Applied strong typography hierarchy and generous spacing so complex information still feels readable.",
      "Introduced motion through reveals, staggered entrances, floating background layers, and tilt interactions while respecting reduced-motion preferences.",
      "Kept the homepage focused on progression: identity, proof of work, capabilities, timeline, architecture, and conversion.",
    ],
    results: [
      "The portfolio now has a validated Next.js foundation with cinematic motion, structured professional data, and dynamic project case study routes.",
      "Public-facing messaging is cleaner and more product-oriented, making the work feel authored and intentional.",
      "The codebase supports future project pages, richer storytelling, and deeper interactive experiences without restructuring the entire app.",
    ],
    futureImprovements: [
      "Continue enriching the library with stronger public and approved project case studies.",
      "Expand the project gallery with richer media, diagrams, and architecture callouts.",
      "Add filtered recruiter, developer, and client views across project content.",
      "Introduce deeper scroll storytelling and page transitions where they add real value.",
    ],
    media: [],
    links: [
      {
        label: "View homepage",
        href: "/",
        external: false,
        enabled: true,
      },
    ],
  },
  {
    id: "case-study-framework",
    slug: "case-study-framework",
    title: "Portfolio Case Study Framework",
    headline:
      "A reusable project storytelling model that turns work into structured case studies for recruiters, developers, and future portfolio growth.",
    summary:
      "This system defines how projects are documented through problem framing, solutions, technical decisions, UI/UX rationale, results, and next steps.",
    recruiterSummary:
      "A structure that makes projects easier to evaluate by translating implementation work into clear business, technical, and growth signals.",
    category: "Portfolio infrastructure",
    status: "Built",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "Content architecture and portfolio infrastructure",
    role: "Content systems designer and implementation lead",
    period: "2026",
    featured: false,
    technologies: ["TypeScript models", "Dynamic routing", "Structured content", "Reusable UI"],
    tags: ["Case studies", "Content architecture", "Scalable documentation"],
    outcomes: [
      "Consistent project storytelling",
      "Better recruiter readability",
      "Clearer technical explanation structure",
    ],
    problem: [
      "Freelance and technical work can look fragmented when each project is presented differently or with inconsistent depth.",
      "Without a repeatable structure, it becomes hard to explain tradeoffs, decisions, and lessons learned in a way that feels professional.",
    ],
    solution: [
      "Create a shared project data model that holds recruiter summary, problem, solution, technical decisions, design decisions, and results.",
      "Render case studies through reusable page components so every future project page inherits the same quality baseline.",
      "Use the same structured format for homepage previews and detailed project routes to avoid duplicated content maintenance.",
    ],
    technicalDecisions: [
      "Expanded the Project type so project content can scale from preview cards to full detail pages.",
      "Added helper functions for listing featured projects and retrieving a project by slug.",
      "Used route-driven project pages so the portfolio can grow from a homepage into a proper work library.",
    ],
    uiuxDecisions: [
      "Built detail pages with clear hierarchy: project overview, impact summary, technical reasoning, and future improvements.",
      "Kept the visual language consistent with the homepage so project pages feel like part of the same product.",
      "Used chips, content cards, and section rhythm to make dense information easier to scan.",
    ],
    results: [
      "The portfolio now supports dedicated project pages rather than only homepage previews.",
      "New projects can be added through structured content without redesigning the rendering layer.",
      "Case studies now feel more deliberate, extensible, and review-friendly.",
    ],
    futureImprovements: [
      "Add project media galleries and architecture diagrams.",
      "Add external demo and repository links where publication is approved.",
      "Add project filtering by stack, audience, and business domain.",
    ],
    media: [],
    links: [
      {
        label: "Browse projects",
        href: "/projects",
        external: false,
        enabled: true,
      },
    ],
  },
  {
    id: "architecture-lab-module",
    slug: "architecture-lab-module",
    title: "Architecture Lab Module",
    headline:
      "A planned product area focused on system boundaries, tradeoffs, design rationale, and engineering thinking behind featured work.",
    summary:
      "This planned module will help technical audiences inspect architecture reasoning in a format that is visual, structured, and easier to understand than a generic project summary.",
    recruiterSummary:
      "A future module intended to make senior-level technical thinking visible through architecture breakdowns, not just project screenshots.",
    category: "Technical showcase",
    status: "Planned",
    engagementType: "Portfolio",
    publicationMode: "Public",
    domain: "Technical storytelling and architecture communication",
    role: "Product planning and architecture definition",
    period: "Planned next phase",
    featured: false,
    technologies: ["System design", "Interactive UI", "Typed content modules"],
    tags: ["Architecture", "Technical storytelling", "Planning"],
    outcomes: [
      "Clearer technical credibility",
      "Deeper engineering storytelling",
      "Expandable architecture documentation layer",
    ],
    problem: [
      "Project cards alone are not enough for technical reviewers who want to understand architecture boundaries, design choices, and scalability tradeoffs.",
      "Important engineering reasoning is often hidden behind final UI unless a dedicated explanation layer exists.",
    ],
    solution: [
      "Plan a dedicated module where architectures can be broken down into systems, boundaries, patterns, and tradeoffs.",
      "Connect this module to the same structured project content model so explanations stay consistent with the rest of the portfolio.",
    ],
    technicalDecisions: [
      "Keep the concept separate from the homepage so it can evolve into a richer experience without cluttering the landing flow.",
      "Design the content shape early so future project pages can reference architecture notes without duplication.",
    ],
    uiuxDecisions: [
      "The module should favor diagrams, layered cards, and progressive disclosure rather than long uninterrupted text.",
      "Animation should support comprehension by showing relationships between systems, not by adding decorative motion.",
    ],
    results: [
      "The concept has been shaped and named inside the portfolio roadmap.",
      "Its role inside the overall product architecture is now clearer and easier to implement in a later phase.",
    ],
    futureImprovements: [
      "Turn this concept into a dedicated route with diagrams and system maps.",
      "Connect architecture notes to each published case study.",
      "Add audience-specific summaries for recruiters and developers.",
    ],
    media: [],
    links: [
      {
        label: "Back to projects",
        href: "/projects",
        external: false,
        enabled: true,
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
