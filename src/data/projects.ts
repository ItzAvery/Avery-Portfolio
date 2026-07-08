export const projects: any[] = [
  {
    id: 'gravity',
    number: '01',
    title: 'GravityDrive',
    subtitle: 'Centralized Team Management for Landcare Operations',
    semester: 'Spring 2026',
    client: 'GravityDrive',
    teamSize: '7 People',
    focus: 'Operations UX',
    myRole: 'UX Designer',
    roleBadge: 'UX Designer & Field Researcher',
    teamwork: 'Working in a team of seven, we split into two parallel workstreams to maximize efficiency. I contributed primarily to user research, observing crew leads during our on-site field research, and developing both low-fidelity and high-fidelity wireframes in Figma. My experience with professional interviews allowed me to confidently guide our research sessions and synthesize complex data to inform our design strategy.',
    quote: '"I leveraged my experience as a senior to help guide our parallel workstreams, ensuring our user research on the field directly informed our prototyping efforts."',
    teamworkBullets: [
      'Contributed to a parallel workstream strategy to divide research and ideation effectively among the 7-person team.',
      'Participated in on-site field research at landcare jobsites and gathered direct observational data from crew leads.',
      'Supported the translation of research insights into mid- and high-fidelity wireframes in Figma.'
    ],
    bgClass: 'bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]',
    tagColor: 'bg-yellow text-dark',
    overview: 'GravityDrive is a professional UX consulting company providing UX research, design, evaluation, and support services to help build better experiences. This sponsored project focused on designing a centralized digital platform for the landcare industry, tailoring a solution for crew leads to consolidate fragmented operational tools into a single system supporting scheduling, equipment, project progress, and crew management.',
    challenge: 'How can we design scalable solutions that address the highly fragmented, paper-heavy workflows of landcare operations, particularly improving real-time visibility and efficiency for crew leads working in fast-paced field conditions?',
    challengeBullets: [
      'Fragmented platforms lead to inefficiencies, poor data visibility, operational delays, and redundancies.',
      'Existing digital solutions are frequently seen as overly complex and poorly suited for offline field conditions.',
      'Crew leads need a mobile-friendly interface optimized for field use with offline capabilities and clear distinction between urgent alerts and general tasks.'
    ],
    process: [
      { num: '01', title: 'Context & Research', desc: 'Built upon prior exploratory research by conducting interviews and field observations with crew leads to identify key pain points such as paper-heavy workflows and siloed communication.' },
      { num: '02', title: 'Concept Ideation', desc: 'Translated synthesized research insights into low- and mid-fidelity wireframes, mapping out features through a priority matrix and refining them with concept testing sessions.' },
      { num: '03', title: 'On-Site Field Research & Refinement', desc: 'Conducted in-person field research at multiple jobsites to directly observe crew leads on the job, fueling usability testing that refined task tracking, real-time alerts, and map interactions.' },
      { num: '04', title: 'High-Fidelity Prototype', desc: 'Finalized an interactive Figma prototype featuring a role-based dashboard, team builder, equipment and materials tracker, gallery, and generated developer handoff documentation.' }
    ],
    media: [
      { type: 'image', src: '/images/gravity/Crazy 8\'s Sketching.PNG', caption: 'Crazy 8\'s Sketching' },
      { type: 'image', src: '/images/gravity/Group Skecthing .JPG', caption: 'Group Skecthing' },
      { type: 'image', src: '/images/gravity/Group Skecthing 3.JPG', caption: 'Group Skecthing' },
      { type: 'image', src: '/images/gravity/Group Sketching 2.JPG', caption: 'Group Sketching' },
      { type: 'image', src: '/images/gravity/On-Site Project Breifing.jpg', caption: 'On-Site Project Breifing' },
      { type: 'image', src: '/images/gravity/On-Site Project Discussions.jpg', caption: 'On-Site Project Discussions' },
      { type: 'image', src: '/images/gravity/On-Site Project Observation.jpg', caption: 'On-Site Project Observation' }
    ]
  },
  {
    id: 'apl',
    number: '02',
    title: 'Johns Hopkins APL',
    subtitle: 'Solving for AI Misuse & Misinformation',
    semester: 'Fall 2025',
    client: 'JHU-APL',
    teamSize: '5 People',
    focus: 'AI Misuse Research',
    myRole: 'Sponsored Project Lead',
    bgClass: 'bg-blue',
    tagColor: 'bg-orange text-white',
    overview: 'This sponsored project partnered with the Johns Hopkins Applied Physics Laboratory to investigate the growing risks of AI misuse and misinformation. As sponsored project lead, and the only senior on a team of sophomores, I was responsible for driving research direction, managing sponsor relationships, and introducing the team to methods they\'d never used before.',
    roleBadge: 'Sponsored Project Lead & Sponsor Liaison',
    teamwork: 'Being the only senior on the team gave me a natural mentor role. I introduced the group to activities they hadn\'t done before, like the Value Matrix and when I sensed they didn\'t fully grasp it, I ran a practice session with them first so we could work through it together before taking it to our sponsor.',
    quote: '"I could tell that the team didn\'t have a solid grasp on the concept. To mitigate this I had us do our own session of value matrix testing together where we discussed and debated where we would place each topic."',
    teamworkBullets: [
      'Requested to champion all sponsor communication and served as primary point of contact via email and Google Chat.',
      'Addressed delegation at the end of each class and checked back in at the start of the next to keep the team on track.',
      'Used a whiteboard to delegate presentation slides equitably across the 5-person team.'
    ],
    challenge: 'AI misinformation is a massive, ill-defined problem space. Before we could design anything, we had to understand what we were actually solving for. The real UX challenge was making sense of ambiguity and turning expert knowledge into a focused problem framework.',
    process: [
      { num: '01', title: 'SME Interviews', desc: 'Facilitated 4 of 7 SME interviews. Created interview protocols, drafted SME outreach emails, and coordinated scheduling.' },
      { num: '02', title: 'Value Matrix', desc: 'Introduced and led Value Matrix workshops first with the team, then with the sponsor, to map priorities against AI risk vectors.' },
      { num: '03', title: 'Mind-Map Narrowing', desc: 'Multiple rounds of mind-mapping to show interaction points and how they related to the overarching problem space, developed into clear visual graphics.' },
      { num: '04', title: 'UX Recommendations', desc: 'Translated expert insights into strategic UX recommendations and visual research artifacts for APL stakeholders.' }
    ],
    media: [
      { type: 'image', src: '/images/johns/Picture1.png', icon: '🖼️', caption: 'Artifact 1' },
      { type: 'image', src: '/images/johns/Picture2.png', icon: '🖼️', caption: 'Artifact 2' },
      { type: 'image', src: '/images/johns/Picture3.png', icon: '🖼️', caption: 'Artifact 3' },
      { type: 'image', src: '/images/johns/Picture4.png', icon: '🖼️', caption: 'Artifact 4' },
      { type: 'image', src: '/images/johns/Picture5.png', icon: '🖼️', caption: 'Artifact 5' }
    ]
  },
  {
    id: 'our',
    number: '03',
    title: 'Purdue OUR',
    subtitle: 'Increasing Undergraduate Research Engagement',
    semester: 'Spring 2025',
    client: 'Purdue OUR',
    teamSize: '9 People',
    focus: 'Engagement & Design',
    myRole: 'UX Designer',
    bgClass: 'bg-gradient-to-br from-[#2a5a7a] to-[#3a7a9a]',
    tagColor: 'bg-[#d4a820] text-white',
    overview: 'Purdue\'s Office of Undergraduate Research connects students with faculty-led research opportunities, but engagement was lower than it should be. Our team of 9 investigated the barriers students face and designed solutions to make research feel more accessible, welcoming, and navigable.',
    teamwork: 'Working as a team of nine, we split into a user flow group and a prototype group. I was on the prototype team, where the mid-fidelity work really brought everything together. I also noticed early on that our class time was disorganized, so I reached out to our team lead and worked with her to create a clearer in-class structure with assigned tasks.',
    quote: '"I reached out to the teammate who had taken on a leadership role and worked with her to come up with a clearer in-class structure and start assigning tasks during class, which I think really changed the group for the better."',
    teamworkBullets: [
      'Noticed there was no consistent meeting room, so I took initiative to book one for the remainder of the semester.',
      'Created a dedicated FigJam section for concept testing notes when no organized space existed and then led a team debrief discussion.',
      'Stayed active in the group chat to help teammates find clarity on questions and offer alternative perspectives.'
    ],
    challenge: 'Undergraduate research can feel intimidating and opaque. The OUR needed a way to present information that meets students where they are, not where the institution assumes they are.',
    challengeBullets: [
      'Existing information was dense, text-heavy, and difficult to navigate quickly.',
      'Students felt unsure whether they were "qualified" to pursue research opportunities.',
      'Multiple touchpoints needed to feel cohesive and welcoming, not bureaucratic.'
    ],
    process: [
      { num: '01', title: 'Comparative Analysis', desc: 'Led analysis of 9 universities focusing on Big 10 and high-engagement schools. I took the lead on University of Michigan\'s page.' },
      { num: '02', title: 'Concept Testing', desc: 'Organized a FigJam section for note-sharing, then led a debrief to surface common themes and identify areas for improvement.' },
      { num: '03', title: 'Affinity Diagramming', desc: 'Conducted affinity diagramming to cluster research insights, a method I was already comfortable with from prior semesters.' },
      { num: '04', title: 'Mid-Fidelity Prototype', desc: 'Worked with 3 of 5 prototype team members to design the OUR Scholarship page, transforming dense info into icon-driven, scannable layouts.' }
    ],
    media: [
      { type: 'image', src: '/images/purdueour/final.png', icon: '🖼️', caption: 'Final Design 1', fullWidth: true },
      { type: 'image', src: '/images/purdueour/final2.png', icon: '🖼️', caption: 'Final Design 2' },
      { type: 'image', src: '/images/purdueour/final3.png', icon: '🖼️', caption: 'Final Design 3' },
      { type: 'image', src: '/images/purdueour/final4.png', icon: '🖼️', caption: 'Final Design 4' },
      { type: 'image', src: '/images/purdueour/final5.png', icon: '🖼️', caption: 'Final Design 5' },
      { type: 'image', src: '/images/purdueour/final6.png', icon: '🖼️', caption: 'Final Design 6' },
      { type: 'image', src: '/images/purdueour/Final7.png', icon: '🖼️', caption: 'Final Design 7' },
      { type: 'image', src: '/images/purdueour/final8.png', icon: '🖼️', caption: 'Final Design 8' },
      { type: 'image', src: '/images/purdueour/final9.png', icon: '🖼️', caption: 'Final Design 9' },
      { type: 'image', src: '/images/purdueour/final10.png', icon: '🖼️', caption: 'Final Design 10' },
      { type: 'image', src: '/images/purdueour/image_1.png', icon: '📸', caption: 'Process Image 1' },
      { type: 'image', src: '/images/purdueour/image_2.png', icon: '📸', caption: 'Process Image 2' },
      { type: 'image', src: '/images/purdueour/image_3.png', icon: '📸', caption: 'Process Image 3' },
      { type: 'image', src: '/images/purdueour/image_4.png', icon: '📸', caption: 'Process Image 4' },
      { type: 'image', src: '/images/purdueour/image_5.png', icon: '📸', caption: 'Process Image 5' }
    ]
  },
  {
    id: 'donate',
    number: '04',
    title: 'Donate Equity',
    subtitle: 'Redesigning the Onboarding Experience',
    semester: 'Fall 2024',
    client: 'Donate Equity',
    teamSize: '6 People',
    focus: 'Onboarding & Dashboard',
    myRole: 'UX Designer',
    bgClass: 'bg-gradient-to-br from-[#1a4a88] to-[#2c6eb5]',
    tagColor: 'bg-white text-blue',
    overview: 'Donate Equity is a platform enabling people to donate equity to nonprofit organizations. The product had strong mission alignment but a confusing onboarding flow causing drop-off. This sponsored project focused on finding where users got stuck and redesigning the experience to make equity donation feel approachable for everyone.',
    teamwork: 'As a team of six, we split into groups of three. I worked on persona creation while others continued secondary research. The team of six required constant coordination: I made sure to pull the group together when things got disorganized, and took the initiative to lead meetings when needed.',
    quote: '"Leading meetings made me feel anxious before but always very proud of myself afterwards."',
    teamworkBullets: [
      'Took and maintained detailed sponsor meeting notes, which were crucial given the technical terminology our sponsor used.',
      'Led a sponsor prioritization workshop, explained the concept, then guided the sponsor through sorting features into must/should/could/won\'t haves.',
      'When the team was disorganized, pulled everyone together to write out a to-do list and re-prioritize by importance.'
    ],
    challenge: 'Equity donation is a genuinely novel and complex concept for most users. Onboarding couldn\'t assume financial literacty it had to educate, reassure, and guide simultaneously without overwhelming first-time donors.',
    challengeBullets: [
      'Users had limited familiarity with equity as a concept so onboarding was needed to build understanding, not just collect information.',
      'Prior semester research identified friction points but lacked actionable recommendations, synthesis was essential.',
      'Dashboard and onboarding feature priorities needed alignment with stakeholder goals.'
    ],
    process: [
      { num: '01', title: 'Research Synthesis', desc: 'Gathered and organized main insights from last semester\'s research to serve as the foundation for our work.' },
      { num: '02', title: 'Persona Development', desc: 'Created the intermediate persona (of three) researched over prior interview data and presented findings to the team.' },
      { num: '03', title: 'Comparative Analysis', desc: 'Analyzed Duolingo\'s onboarding, a highly engaging and well-informed onboarding process used as a benchmark.' },
      { num: '04', title: 'Prioritization Workshop', desc: 'Organized and led a sponsor workshop sorting dashboard and onboarding features by priority, ensuring the sponsor explained his reasoning throughout.' }
    ],
    media: [
      { type: 'image', src: '/images/donate/image_1.png', icon: '🗂️', caption: 'Comparative Analysis: Duolingo' },
      { type: 'image', src: '/images/donate/image_2.png', icon: '📊', caption: 'Final Prioritization Matrix' }
    ]
  },
  {
    id: 'pg',
    number: '05',
    title: 'P&G × Amazon',
    subtitle: 'Gillette Grooming Storefront Redesign',
    semester: 'Spring 2024',
    client: 'P&G / Amazon',
    teamSize: '9 People',
    focus: 'Gillette Storefront',
    myRole: 'UX Designer',
    bgClass: 'bg-gradient-to-br from-[#1a5fb4] to-[#0a3d88]',
    tagColor: 'bg-yellow text-dark',
    overview: 'This sponsored project challenged our team of 9 to redesign the Gillette Grooming Storefront on Amazon. The site was simplified and given features it didn\'t have before including a Discovery tab, a Learn tab, and a personalized Grooming Quiz. I championed the quiz and led the Figma prototype storytelling for the entire grooming sub-team.',
    teamwork: 'With 9 people, we split into grooming and skincare sub-teams. I was on grooming and made sure our side stayed aligned with the other half through regular cross-team check-ins. I led multiple sponsor meetings and consistently drove discussions forward even when it wasn\'t officially "my turn" to lead.',
    teamworkBullets: [
      'Led the grooming sub-team and organized check-ins between both halves of the group of nine.',
      'My sketches served as the foundational design direction for the sponsored project, communicating vision to both the team and sponsors.',
      'Analyzed Harry\'s grooming site for competitive analysis, gathered findings, and presented insights that shaped our sponsored project direction.',
      'Conducted professional user interviews with real P&G customers using a script we developed as a team.'
    ],
    challenge: 'On a crowded product page, too much choice creates paralysis. Grooming products are personal. Users needed help understanding what\'s right for them without feeling overwhelmed or sold to. The design had to feel like helpful guidance, not marketing.',
    process: [
      { num: '01', title: 'Competitive Analysis', desc: 'Analyzed Harry\'s grooming site, a brand with engaging, well-thought-out product guidance. Findings shaped our storefront direction.' },
      { num: '02', title: 'User Interviews', desc: 'Conducted professional interviews with real P&G customers, exploring grooming habits, decision-making, and purchase friction.' },
      { num: '03', title: 'Sketching', desc: 'Produced many sketches that became the foundational design direction for the sponsored project, communicating vision to team and sponsor.' },
      { num: '04', title: 'Grooming Quiz', desc: 'Championed the quiz from concept to final prototype,designed interaction logic, visual layout, and Figma prototype storytelling with full animations.' }
    ],
    media: [
      { type: 'image', src: '/images/proctor/image_1.gif', icon: '🎬', caption: 'Interaction 1' },
      { type: 'image', src: '/images/proctor/image_2.gif', icon: '🎬', caption: 'Interaction 2' },
      { type: 'image', src: '/images/proctor/image_3.gif', icon: '🎬', caption: 'Interaction 3' },
      { type: 'image', src: '/images/proctor/image_4.gif', icon: '🎬', caption: 'Interaction 4' },
      { type: 'image', src: '/images/proctor/image_5.gif', icon: '🎬', caption: 'Interaction 5' },
      { type: 'image', src: '/images/proctor/image_6.gif', icon: '🎬', caption: 'Interaction 6' },
      { type: 'image', src: '/images/proctor/image_7.gif', icon: '🎬', caption: 'Interaction 7' },
      { type: 'image', src: '/images/proctor/image.gif', icon: '🎬', caption: 'Interaction 8' }
    ]
  }
];
