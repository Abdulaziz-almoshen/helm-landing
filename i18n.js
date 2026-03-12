/**
 * Helm Landing Page — Lightweight i18n Engine
 *
 * Usage:
 *   <span data-i18n="nav.how">How it works</span>
 *   <span data-i18n-html="hero.tag">...</span>  (for elements with inner HTML)
 *   <span data-i18n-attr="placeholder:search.placeholder">...</span>
 *
 * Switch language: HelmI18n.setLang('ar')
 * Get current:     HelmI18n.lang
 */
;(function () {
  'use strict';

  // ─── Translation Dictionaries ───────────────────────────────
  const translations = {
    en: {
      // Meta
      'meta.title': "Helm — Your notes don't just sit there. They think.",
      'meta.description': "Helm captures voice, meetings, and scattered thoughts — then turns them into structured action with AI.",

      // Nav
      'nav.brand': 'Helm',
      'nav.how': 'How it works',
      'nav.features': 'Features',
      'nav.engine': 'AI Engine',
      'nav.pricing': 'Pricing',
      'nav.cta': 'Get Early Access',

      // Hero
      'hero.tag': 'AI-Powered Knowledge Engine',
      'hero.h1_1': "Your notes don't",
      'hero.h1_2': 'just sit there.',
      'hero.p': "Capture voice, meetings, and scattered thoughts. Helm's AI engine turns raw input into structured action — prioritized tasks, meeting minutes, and a specific next step for everything.",
      'hero.btn_start': 'Start Free',
      'hero.btn_how': 'See how it works',
      'hero.proof': 'Trusted by <strong>teams across Saudi Arabia</strong>',

      // Typing phrases (used by JS animation)
      'hero.phrases': ['They think.', 'They reason.', 'They act.', 'They research.', 'They remember.'],

      // Fragments
      'frag.voice': 'Voice memo 0:42',
      'frag.budget': 'Send budget to CFO',
      'frag.photo': 'whiteboard_photo.jpg',
      'frag.zatca': 'Check ZATCA compliance',
      'frag.ahmed': 'Ahmed · Vendor B · 500K',
      'frag.completion': '87% weekly completion',
      'frag.processed': 'Processed in 6s',

      // Phone mockup
      'phone.greeting': 'Good morning',
      'phone.name': 'Abdulaziz',
      'phone.workspace': 'Ruwad',
      'phone.search': 'Talk to your workspace...',
      'phone.ai_on': 'AI',
      'phone.brief_tag': 'Intelligence Brief',
      'phone.brief_action': '3 urgent →',
      'phone.brief_sub': 'Sprint demo in 45 min · investor brief ready',
      'phone.insight_tag': 'Helm spotted',
      'phone.insight_time': '· 8:22 AM',
      'phone.insight_count': '3',
      'phone.insight_alert': 'Ahmed hasn\'t confirmed — contract deadline today',
      'phone.insight_b1': '500K SAR deal needs immediate action',
      'phone.insight_b2': 'Meeting in 45 min — brief is ready',
      'phone.insight_b3': 'Weekly completion: 87%',
      'phone.insight_cta': 'View plan →',
      'phone.topics': 'Your Topics',
      'phone.t1_name': 'Q2 Revenue Strategy',
      'phone.t1_meta': 'CFO review · 8 threads',
      'phone.t1_ai': 'Linked forecast model + 2 reports',
      'phone.t1_badge': '1 urgent',
      'phone.t2_name': 'Product Roadmap H1',
      'phone.t2_meta': '12 features · Mar 13',
      'phone.t2_ai': '5 features scoped by AI',
      'phone.t3_name': 'AI Feature Sprint',
      'phone.t3_meta': '4 threads · Mar 11',
      'phone.t3_ai': 'Sprint 8 plan auto-drafted',
      'phone.proc_extract': 'Extract ✓',
      'phone.proc_classify': 'Classify ✓',
      'phone.proc_link': 'Linking…',
      'phone.proc_found': 'Found: 6 insights, 3 themes',
      'phone.nav_topics': 'Topics',
      'phone.nav_tasks': 'Tasks',
      'phone.nav_team': 'Team',
      'phone.nav_inbox': 'Inbox',

      // Marquee
      'marquee.items': ['Voice Notes', 'Meeting Minutes', 'Eisenhower Matrix', 'AI Research', 'People Graph', 'Intelligence Brief', 'Arabic-First', 'Knowledge Engine', 'Workspace Agent', 'Task Intelligence', 'Action Planning', 'Offline Drafts'],

      // Narrative — Problem
      'narrative.tag': 'The real problem',
      'narrative.h2': "You don't need another place<br>to write things down.",
      'narrative.p': "You walk out of a meeting with ten things in your head. You capture three. The other seven disappear. Or worse — you capture everything, but nothing moves. Notes become graveyards.",

      // Scene
      'scene.chaos_label': 'Your reality right now',
      'scene.sticky1': 'Call Ahmed<br>about the thing',
      'scene.sticky2': 'Meeting<br>notes???',
      'scene.sticky3': 'URGENT<br>follow up',
      'scene.sticky4': 'Budget<br>numbers',
      'scene.sticky5': 'Deploy fix<br>ASAP 🔥',
      'scene.sticky6': 'Q3 roadmap<br>slides???',
      'scene.notif1': '12 unread messages',
      'scene.notif2': 'Meeting in 5 min',
      'scene.notif3': '3 missed calls',
      'scene.overdue': '4 tasks overdue',
      'scene.transform': '6 seconds',
      'scene.order_label': 'After Helm processes it',
      'scene.minutes': 'Meeting Minutes',
      'scene.min1': 'AI chat feature approved for Sprint 8',
      'scene.min2': 'Sara leads design sprint from Monday',
      'scene.min3': '2 engineers allocated to platform team',
      'scene.tasks': 'Tasks Created',
      'scene.task1': 'Send Sara the design brief by Wed',
      'scene.task2': 'Update investor deck with Q2 roadmap',
      'scene.task3': 'Schedule sprint 8 planning session',
      'scene.next': 'Next Action',
      'scene.next_text': '"Send Sara the design brief — sprint starts Monday, unblocks 3 engineers"',

      // Pipeline
      'pipeline.tag': 'How it works',
      'pipeline.h2': 'Capture anything. Get back everything.',
      'pipeline.step1_label': 'Dump it',
      'pipeline.step1_sub': 'Voice, text, images, PDFs, scans — mixed in one thread. No formatting.',
      'pipeline.step2_label': 'Helm thinks',
      'pipeline.step2_sub': 'Six-layer AI pipeline. Extract. Classify. Plan. Research. Connect. Learn.',
      'pipeline.step3_label': 'Act on it',
      'pipeline.step3_sub': 'Prioritized tasks, meeting minutes, specific next actions — on your Canvas.',
      'pipeline.chip_voice': 'Voice',
      'pipeline.chip_text': 'Text',
      'pipeline.chip_image': 'Image',
      'pipeline.chip_pdf': 'PDF',
      'pipeline.chip_extract': 'Extract',
      'pipeline.chip_classify': 'Classify',
      'pipeline.chip_plan': 'Plan',
      'pipeline.chip_research': 'Research',
      'pipeline.chip_tasks': 'Tasks',
      'pipeline.chip_minutes': 'Minutes',
      'pipeline.chip_export': 'Export',

      // AI Canvas
      'canvas.tag': 'AI Canvas',
      'canvas.h2': "It doesn't just record.<br>It reasons.",
      'canvas.p': "A two-pass cognitive pipeline extracts what happened, then classifies what matters. Every task placed in the right quadrant — with AI reasoning you can read.",
      'canvas.breadcrumb_folder': 'Work',
      'canvas.breadcrumb_doc': 'Q1 Planning Review',
      'canvas.status': 'AI Processed',
      'canvas.title': 'Product Strategy Q2',
      'ph.processing': 'Processing "User research session"…',
      'canvas.meta_date': 'Mar 3, 2026',
      'canvas.meta_input': 'Voice + Text',
      'canvas.meta_people': '3 attendees',
      'canvas.meta_passes': '6 passes completed',
      'canvas.summary_title': 'Summary',
      'canvas.summary_text': 'Team reviewed Q2 roadmap and approved the <strong>AI chat feature</strong> for Sprint 8. <span class="mention"><span>S</span> Sara</span> leads design sprint starting <strong>Monday</strong>. 2 engineers reallocated to platform. Investor deck update due <strong>March 15</strong>.',
      'canvas.ai_label': 'Helm AI Suggestion',
      'canvas.ai_text': 'This meeting references 3 previous threads about Vendor B evaluation. Want me to link them and add the price comparison to this canvas?',
      'canvas.ai_link': 'Link threads',
      'canvas.ai_dismiss': 'Dismiss',
      'canvas.decisions_title': 'Key Decisions',
      'canvas.decision1': 'AI chat approved for Sprint 8 — 2 engineers assigned',
      'canvas.decision2': 'Mobile redesign pushed to Q3 — design debt needs resolution first',
      'canvas.decision3': 'Research synthesis tool: build in-house, not buy',
      'canvas.actions_title': 'Action Items',
      'canvas.quad_do': 'Do Now',
      'canvas.quad_schedule': 'Schedule',
      'canvas.quad_delegate': 'Delegate',
      'canvas.quad_later': 'Later',
      'canvas.task_do1': 'Send <span class="mention"><span>S</span> Sara</span> the design brief — sprint starts Monday',
      'canvas.task_do2': 'Update investor deck with Q2 roadmap changes',
      'canvas.task_sched1': 'Schedule Sprint 8 planning — all engineers',
      'canvas.task_sched2': 'Run user research synthesis workshop',
      'canvas.task_deleg1': 'Platform migration spec — assign to backend lead',
      'canvas.task_later1': 'Archive Q1 research interviews to knowledge base',
      'canvas.why_label': 'Why "Do Now"?',
      'canvas.why_text': "Sara's design sprint starts Monday. Without the brief today, 3 engineers are blocked. Urgency: high. Impact: delays Sprint 8 and Q2 roadmap delivery.",
      'canvas.people_title': 'People Mentioned',
      'canvas.person_ahmed': 'Ahmed — 4 action items',
      'canvas.person_sara': 'Sara — 1 delegated task',
      'canvas.person_marketing': 'Marketing Team — mentioned',

      // Feature: Capture
      'capture.tag': 'Multi-Modal Capture',
      'capture.h3': 'Talk, type, snap, scan.<br>All in one thread.',
      'capture.p': "No templates. No forms. Open a thread and dump everything — voice memos, typed thoughts, photos of whiteboards, even brain dumps. Mix formats freely. Helm handles the rest.",
      'capture.li1': 'Voice transcription — speak naturally, get structured text',
      'capture.li2': 'Image analysis — whiteboard photos understood by AI',
      'capture.li3': 'Offline drafts — capture without signal, sync later',
      'capture.phone_title': 'New Capture',
      'capture.phone_msg1': 'Meeting with Ahmed about vendor decision. He prefers vendor B — 500K budget.',
      'capture.phone_msg2': 'We should check if vendor B has ZATCA compliance before signing...',
      'capture.phone_msg3': 'Sarah needs the updated timeline by Friday.',
      'capture.phone_input': 'Add to thread...',

      // Feature: Agent
      'agent.tag': 'Workspace Agent',
      'agent.h3': 'Talk to your workspace.<br>It talks back.',
      'agent.p': 'Not a chatbot skin on a search bar. 10+ skillful specialized agents — they search every thread, create tasks, update priorities, query your people graph, and research on your behalf. Every write action requires your approval.',
      'agent.li1': 'Search across all notes, tasks, meetings, and people',
      'agent.li2': 'Create and manage tasks through conversation',
      'agent.li3': 'Two-phase: AI proposes, you confirm — human-in-the-loop',
      'agent.phone_title': 'Talk to Workspace',
      'agent.phone_sub': 'Ask anything about your work',
      'agent.q1': 'What did we decide about the vendor contract?',
      'agent.tool1': 'Searched workspace — 8 results',
      'agent.answer': 'In the Q1 Planning meeting (Feb 12), your team selected <strong>Vendor B</strong> with a 500K SAR budget. Ahmed is finalizing — due Thursday.',
      'agent.step1': 'Searched 3 topics',
      'agent.step2': 'Found decision in thread #42',
      'agent.step3': "Cross-referenced with Ahmed's tasks",
      'agent.q2': 'Create a follow-up task for Wednesday',
      'agent.tool2': 'Proposing task for your approval',
      'agent.proposal_title': 'Follow up with Ahmed on vendor B contract',
      'agent.proposal_meta_priority': 'Q1 — Do Now',
      'agent.proposal_meta_due': 'Due: Wed, Feb 19',
      'agent.confirm': 'Confirm',
      'agent.edit': 'Edit',

      // Stats
      'stats.processing': 'Average processing time',
      'stats.passes': 'AI passes per note',
      'stats.types': 'Action types classified',
      'stats.agents': 'Specialized AI agents',
      'stats.entitlements': 'Feature entitlements',

      // Engine
      'engine.tag': 'Under the hood',
      'engine.h2': 'Not another AI wrapper.<br>A cognitive engine.',
      'engine.arch_tag': 'Architecture',
      'engine.arch_h': 'Two minds.<br>One pipeline.',
      'engine.arch_p': "Extraction and classification are separate cognitive tasks. Combining them degrades both. We don't.",
      'engine.action_tag': 'Action Planning',
      'engine.action_h': 'Not "follow up."<br><span style="color:var(--amber)">"Send Ahmed the 500K<br>decision by Thursday."</span>',
      'engine.action_p': 'Every task gets a verb-first next step. 9 action types — research, communicate, create, schedule, decide, execute, delegate, review, monitor.',
      'engine.research_tag': 'Auto-Research',
      'engine.research_h': 'Context arrives<br>before you ask.',
      'engine.research_p': 'Tasks that need context get researched while you sleep. Summarized findings arrive via push notification.',
      'engine.knowledge_tag': 'Knowledge Engine',
      'engine.knowledge_h': 'Every note makes<br>the next one smarter.',
      'engine.knowledge_p': 'Your goals, people, patterns — stored and compounding. Context builds over time, not lost between sessions.',
      'engine.brief_tag': 'Intelligence Brief',
      'engine.brief_h': 'Your daily alert.<br>What matters right now.',
      'engine.brief_p': 'Tasks scored on urgency, stakeholder impact, reversibility. Weekly progress stats built in. Never miss what\'s important.',
      'engine.agents_tag': 'Agent Army',
      'engine.agents_h': 'An army of AI agents.<br>Every action needs your OK.',
      'engine.agents_p': 'Skillful specialized agents that search, create, prioritize, and research across your workspace — with human-in-the-loop approval on every action.',

      // AI Pipeline
      'vpipe.tag': 'AI Pipeline',
      'vpipe.h2': 'Six layers of intelligence.<br>Every single note.',
      'vpipe.p': "Each capture flows through a multi-pass AI pipeline. Here's what happens in ~6 seconds.",
      'vpipe.pass1': 'Pass 1 — Extraction',
      'vpipe.name1': 'What happened?',
      'vpipe.desc1': 'Extracts facts, people, decisions, tasks. Generates meeting minutes with attendees, topics, decisions.',
      'vpipe.pass2': 'Pass 2 — Classification',
      'vpipe.name2': 'How urgent is it?',
      'vpipe.desc2': 'Classifies each task into the Eisenhower Matrix with confidence scores and plain-language reasoning. Temporally aware.',
      'vpipe.pass3': 'Pass 3 — Action Planning',
      'vpipe.name3': "What's the next move?",
      'vpipe.desc3': 'Assigns one of 9 action types. Generates a verb-first action hint. Not "follow up" — "Send Ahmed the 500K decision by Thursday."',
      'vpipe.pass4': 'Pass 4 — Background Research',
      'vpipe.name4': 'What do you need to know?',
      'vpipe.desc4': 'Tasks flagged for research are auto-queued. Web search, page analysis, summarized findings with sources. Push notification when ready.',
      'vpipe.pass5': 'Pass 5 — People Graph',
      'vpipe.name5': "Who's involved?",
      'vpipe.desc5': 'Extracts names, roles, organizations from every conversation. Builds a workspace-scoped relationship graph that grows with use.',
      'vpipe.pass6': 'Pass 6 — Knowledge Engine',
      'vpipe.name6': 'Remember everything.',
      'vpipe.desc6': 'Long-term AI memory — goals, patterns, key people, accumulated facts. Hijri calendar awareness, Saudi regulatory context. Every note makes the next one smarter.',

      // Arabic section
      'arabic.tag': 'Bilingual by Design',
      'arabic.h2': 'مبني للعربية من الأساس',
      'arabic.p': 'Speak in Arabic. Get summaries, tasks, and action hints in Arabic. Mix languages freely. Hijri calendar awareness and Saudi regulatory context built in.',
      'arabic.input_label': 'المدخل — Voice Note',
      'arabic.input_text': 'اجتماع مع أحمد عن عقد المورّد. ميزانية ٥٠٠ ألف ريال. يبي يخلص الأسبوع هذا قبل نهاية الربع.',
      'arabic.output_label': 'Output — AI Canvas',
      'arabic.output_text': '<strong>المهمة:</strong> إنهاء عقد المورّد ب<br><strong>الأولوية:</strong> عاجل ومهم — الموعد النهائي هذا الأسبوع<br><strong>الخطوة التالية:</strong> أرسل لأحمد قرار الميزانية ٥٠٠ ألف قبل الخميس',

      // Pricing
      'pricing.tag': 'Pricing',
      'pricing.h2': 'Start capturing. Upgrade when ready.',
      'pricing.monthly': 'Monthly',
      'pricing.annual': 'Annual',
      'pricing.save': 'Save 20%',
      'pricing.popular': 'Most Popular',
      'pricing.free_name': 'Free',
      'pricing.free_desc': 'For individuals getting started',
      'pricing.free_f1': 'Unlimited threads and topics',
      'pricing.free_f2': '50 AI processing runs / month',
      'pricing.free_f3': '3 meeting minutes / month',
      'pricing.free_f4': 'Intelligence brief included',
      'pricing.free_f5': 'Up to 5 team members',
      'pricing.free_cta': 'Get Started',
      'pricing.growth_name': 'Growth',
      'pricing.growth_desc': 'For teams that move fast',
      'pricing.growth_f1': 'Unlimited AI processing',
      'pricing.growth_f2': 'Unlimited meeting minutes',
      'pricing.growth_f3': 'Background AI research',
      'pricing.growth_f4': 'People graph + Knowledge Engine',
      'pricing.growth_f5': 'Up to 15 team members',
      'pricing.growth_cta': 'Start Free Trial',
      'pricing.plus_name': 'Plus',
      'pricing.plus_desc': 'For teams with no ceiling',
      'pricing.plus_f1': 'Everything in Growth',
      'pricing.plus_f2': 'Unlimited seats + smart actions',
      'pricing.plus_f3': 'Weekly AI synthesis',
      'pricing.plus_f4': 'Domain agents (Finance, Legal)',
      'pricing.plus_f5': '500 GB storage',
      'pricing.plus_cta': 'Contact Sales',
      'pricing.seat': '/ seat / month',

      // Aha interstitials
      'aha.canvas': 'Your notes... <span class="aha__accent">move.</span>',
      'aha.pipeline': '6 seconds. <span class="aha__accent">That\'s it.</span>',
      'aha.arabic': 'Arabic. <span class="aha__accent">From day one.</span>',
      'aha.pricing': 'AI agents <span class="aha__accent">working for you.</span>',

      // CTA
      'cta.h2_1': 'Your brain captures.',
      'cta.h2_2': 'Helm does the rest.',
      'cta.p': "You were never meant to be your own project manager, note organizer, and follow-up tracker. You were meant to think, decide, and act.",
      'cta.btn': 'Get Early Access — Free',

      // Acts (infographic)
      'acts.tag': 'Intelligence',
      'acts.h2': 'Understands you <span class="aha__accent">ahead.</span>',
      'acts.p': "Helm doesn't stop at understanding. It drafts, follows up, prepares, and nudges — so you don't have to.",
      'acts.do_h': 'Do it for me',
      'acts.do_p': 'AI plans, researches, generates. You review and approve.',
      'acts.email_h': 'Draft & send',
      'acts.email_p': 'Emails pre-written from context. One tap through Gmail.',
      'acts.followup_h': 'Follow up',
      'acts.followup_p': "No reply? Helm nudges you. Meeting done? Asks how it went.",
      'acts.prep_h': 'Meeting prep',
      'acts.prep_p': 'Slide decks and talking points ready before you walk in.',

      // Integrations
      'integ.tag': 'Everywhere you work',
      'integ.h2': 'Connected to your tools.<br>Available everywhere.',
      'integ.app_cal': 'Calendar',
      'integ.app_gmail': 'Gmail',
      'integ.app_voice': 'Voice',
      'integ.app_slack': 'Slack',
      'integ.why_statement': 'Your work lives in 12 different apps. None of them talk to each other.',
      'integ.why_sub': 'Helm connects every surface you already use — so your <strong>context travels with you</strong>, not against you.',
      'integ.badge_live': 'Live',
      'integ.badge_ios': 'iOS · iPadOS',
      'integ.badge_mac': 'macOS · Windows',
      'integ.badge_smart': 'AI-Powered',
      'integ.google_h': 'Reads your calendar. Prepares your day.',
      'integ.google_desc': 'Before every meeting, Helm scans past threads and drafts a context brief. Your Gmail drafts get sent in one tap — written from what Helm already knows.',
      'integ.google_ex': '"Q1 Review in 90 min — 3 past threads found, brief ready →"',
      'integ.widget_h': 'Capture in 6 seconds. Not 60.',
      'integ.widget_desc': 'One tap from your home screen — voice, text, or photo. No app-opening ritual. Helm processes it in the background while you keep moving.',
      'integ.widget_ex': '"Captured your voice note in the elevator. 2 tasks extracted →"',
      'integ.desktop_h': 'Sits in your meeting. Works for you.',
      'integ.desktop_desc': 'Records live, transcribes in real time, extracts tasks as the conversation happens. You stay fully present — Helm handles the admin.',
      'integ.desktop_ex': '"47 min recorded · 6 action items extracted · Brief sent to 3 attendees →"',
      'integ.notif_h': 'Nudges you before it\'s too late.',
      'integ.notif_desc': 'Helm reads your deadlines from context — not from what you manually entered. It nudges you when follow-ups go cold and prepares you before important moments.',
      'integ.notif_ex': '"Ahmed hasn\'t replied in 3 days. Send follow-up now? →"',
      'integ.badge_teams': 'Coming Soon',
      'integ.teams_h': 'Every Teams meeting. Zero admin.',
      'integ.teams_desc': 'Helm joins your Teams calls, transcribes live, and delivers a structured canvas — decisions, tasks, and follow-ups — the moment the call ends.',
      'integ.teams_ex': '"Teams call ended · 5 action items extracted · Sent to 4 attendees →"',
      'integ.badge_gws': 'Google Workspace',
      'integ.gws_h': 'Your canvas. Exported anywhere.',
      'integ.gws_desc': 'One tap exports your Helm canvas to Google Docs, Sheets, or Slides — formatted, structured, and ready to share with your team.',
      'integ.gws_ex': '"Q1 Review exported to Docs · Shared with 3 team members →"',
      'integ.badge_collab': 'Collaboration',
      'integ.invite_h': 'Invite your team.',
      'integ.invite_desc': 'Invite teammates to your workspace. Every brief, task, and decision stays in sync. Helm knows who owns what — and nudges the right person at the right time.',
      'integ.invite_m1': 'Ahmed closed Vendor B contract',
      'integ.invite_m2': 'Sara updated the Q1 canvas',
      'integ.invite_m3': 'Helm: 3 tasks reassigned after contract close',
      'integ.invite_ex': '"Your team is in sync. Helm tracks who\'s doing what →"',

      // Floating notifications
      'notif.pres_t': 'Presentation Ready',
      'notif.pres_s': 'Your Q1 review deck is generated',
      'notif.cal_t': 'Google Calendar',
      'notif.cal_s': 'Team standup in 5 min',
      'notif.follow_t': 'Follow-up',
      'notif.follow_s': 'Did Ahmed respond to the contract?',
      'notif.draft_t': 'Draft Email',
      'notif.draft_s': 'Budget approval ready to send',

      // Footer
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.contact': 'Contact',
      'footer.copy': 'Built by Ruwad. Your ideas deserve better than a bullet list.',
    },
    ar: {
      'meta.title': 'حُلْم — ملاحظاتك ما تبقى ساكتة. تفكّر.',
      'meta.description': 'حُلْم يجمع تسجيلاتك الصوتية واجتماعاتك وملاحظاتك المتفرقة — ويحوّلها إلى مهام وخطوات واضحة باستخدام الذكاء الاصطناعي.',
      'nav.brand': 'حُلْم',
      'nav.how': 'كيف يشتغل',
      'nav.features': 'المزايا',
      'nav.engine': 'محرك الذكاء',
      'nav.pricing': 'الأسعار',
      'nav.cta': 'احصل على الوصول المبكر',
      'hero.tag': 'محرك معرفة مدعوم بالذكاء الاصطناعي',
      'hero.h1_1': 'ملاحظاتك ما',
      'hero.h1_2': 'تبقى ساكتة.',
      'hero.p': 'سجّل صوتك، اجتماعاتك، أو أي ملاحظات متفرقة. محرك حُلْم الذكي يحوّل كل هذا إلى مهام مرتبة، محاضر اجتماعات، وخطوة واضحة بعدها.',
      'hero.btn_start': 'ابدأ مجانًا',
      'hero.btn_how': 'شوف كيف يشتغل',
      'hero.proof': 'موثوق من <strong>فرق في السعودية</strong>',
      'hero.phrases': ['تفكّر.', 'تحلّل.', 'تتحرك.', 'تبحث.', 'تتذكر.'],
      'frag.voice': 'مذكرة صوتية 0:42',
      'frag.budget': 'أرسل الميزانية للمدير المالي',
      'frag.photo': 'صورة_السبورة.jpg',
      'frag.zatca': 'تأكد من امتثال زاتكا',
      'frag.ahmed': 'أحمد · المورّد ب · 500 ألف',
      'frag.completion': '87٪ إنجاز هذا الأسبوع',
      'frag.processed': 'تمت المعالجة خلال 6 ثواني',
      'phone.greeting': 'صباح الخير',
      'phone.name': 'عبدالعزيز',
      'phone.workspace': 'رواد',
      'phone.search': 'تكلم مع مساحة عملك...',
      'phone.ai_on': 'AI',
      'phone.brief_tag': 'ملخص الذكاء',
      'phone.brief_action': '٣ عاجل ←',
      'phone.brief_sub': 'عرض السبرينت خلال 45 دق · الملخص للمستثمر جاهز',
      'phone.insight_tag': 'Helm اكتشف',
      'phone.insight_time': '· ٨:٢٢ ص',
      'phone.insight_count': '٣',
      'phone.insight_alert': 'Ahmed لم يؤكد — موعد العقد اليوم',
      'phone.insight_b1': 'صفقة 500K SAR تحتاج إجراءً فورياً',
      'phone.insight_b2': 'اجتماع خلال 45 دق — الملخص جاهز',
      'phone.insight_b3': 'إنجاز هذا الأسبوع: 87٪',
      'phone.insight_cta': 'عرض الخطة ←',
      'phone.topics': 'مواضيعك',
      'phone.t1_name': 'استراتيجية إيرادات الربع الثاني',
      'phone.t1_meta': 'مراجعة CFO · 8 محادثات',
      'phone.t1_ai': 'ربط نموذج التوقعات + تقريرَين',
      'phone.t1_badge': '١ عاجل',
      'phone.t2_name': 'خارطة طريق المنتج H1',
      'phone.t2_meta': '12 ميزة · ١٣ مارس',
      'phone.t2_ai': '٥ ميزات حدّدها الذكاء الاصطناعي',
      'phone.t3_name': 'سبرينت ميزات الذكاء الاصطناعي',
      'phone.t3_meta': '4 محادثات · ١١ مارس',
      'phone.t3_ai': 'خطة السبرينت 8 جاهزة تلقائياً',
      'phone.proc_extract': 'استخراج ✓',
      'phone.proc_classify': 'تصنيف ✓',
      'phone.proc_link': 'ربط...',
      'phone.proc_found': 'وجد: 6 رؤى، 3 محاور',
      'phone.nav_topics': 'المواضيع',
      'phone.nav_tasks': 'المهام',
      'phone.nav_team': 'الفريق',
      'phone.nav_inbox': 'الوارد',
      'marquee.items': ['ملاحظات صوتية', 'محاضر اجتماعات', 'مصفوفة أيزنهاور', 'بحث بالذكاء الاصطناعي', 'خريطة العلاقات', 'ملخص الذكاء', 'عربي أولًا', 'محرك المعرفة', 'وكيل مساحة العمل', 'ذكاء المهام', 'تخطيط الأفعال', 'مسودات بدون إنترنت'],
      'narrative.tag': 'المشكلة الحقيقية',
      'narrative.h2': 'أنت ما تحتاج مكان جديد<br>تكتب فيه.',
      'narrative.p': 'تطلع من اجتماع وفي رأسك عشر نقاط. تسجل ثلاث، والباقي يضيع. أو يمكن تسجل كل شيء… لكن ما يتحرك شيء. الملاحظات تصير مجرد أرشيف.',
      'scene.chaos_label': 'وضعك الآن',
      'scene.sticky1': 'كلم أحمد<br>عن الموضوع',
      'scene.sticky2': 'ملاحظات<br>الاجتماع؟؟',
      'scene.sticky3': 'عاجل<br>متابعة',
      'scene.sticky4': 'أرقام<br>الميزانية',
      'scene.sticky5': 'نشر الإصلاح<br>الآن 🔥',
      'scene.sticky6': 'شرائح<br>الخارطة???',
      'scene.notif1': '12 رسالة غير مقروءة',
      'scene.notif2': 'اجتماع بعد 5 دقائق',
      'scene.notif3': '3 مكالمات فائتة',
      'scene.overdue': '4 مهام متأخرة',
      'scene.transform': '6 ثواني',
      'scene.order_label': 'بعد ما يعالجها حُلْم',
      'scene.minutes': 'محضر الاجتماع',
      'scene.min1': 'ميزة AI Chat اعتُمدت للسبرينت 8',
      'scene.min2': 'سارة تقود سبرينت التصميم من الاثنين',
      'scene.min3': 'مهندسان أُضيفا لفريق المنصة',
      'scene.tasks': 'المهام المنشأة',
      'scene.task1': 'أرسل لسارة موجز التصميم قبل الأربعاء',
      'scene.task2': 'حدّث عرض المستثمرين بخارطة طريق Q2',
      'scene.task3': 'جدوِل جلسة تخطيط السبرينت 8',
      'scene.next': 'الخطوة التالية',
      'scene.next_text': 'أرسل لسارة موجز التصميم — السبرينت يبدأ الاثنين، و3 مهندسين في الانتظار',
      'pipeline.tag': 'كيف يشتغل',
      'pipeline.h2': 'أضف أي شيء. واسترجع كل شيء.',
      'pipeline.step1_label': 'اكتب أو سجّل',
      'pipeline.step1_sub': 'صوت، نص، صور، ملفات — كلها في محادثة واحدة.',
      'pipeline.step2_label': 'حُلْم يفهم',
      'pipeline.step2_sub': 'محرك ذكاء يحلل ويصنف ويربط المعلومات.',
      'pipeline.step3_label': 'وتتحول إلى عمل',
      'pipeline.step3_sub': 'مهام واضحة، محاضر اجتماعات، وخطوات تالية.',
      'pipeline.chip_voice': 'صوت',
      'pipeline.chip_text': 'نص',
      'pipeline.chip_image': 'صورة',
      'pipeline.chip_pdf': 'ملف',
      'pipeline.chip_extract': 'استخراج',
      'pipeline.chip_classify': 'تصنيف',
      'pipeline.chip_plan': 'تخطيط',
      'pipeline.chip_research': 'بحث',
      'pipeline.chip_tasks': 'مهام',
      'pipeline.chip_minutes': 'محاضر',
      'pipeline.chip_export': 'تصدير',
      // AI Canvas
      'canvas.tag': 'لوحة الذكاء',
      'canvas.h2': 'لا يكتفي بالتسجيل.<br>بل يفهم.',
      'canvas.p': 'نظام تحليل من مرحلتين يستخرج ما حدث، ثم يحدد ما يستحق الاهتمام. كل مهمة توضع في مكانها الصحيح مع تفسير واضح.',
      'canvas.breadcrumb_folder': 'عمل',
      'canvas.breadcrumb_doc': 'مراجعة تخطيط الربع الأول',
      'canvas.status': 'تمت المعالجة',
      'canvas.title': 'استراتيجية المنتج Q2',
      'ph.processing': '...معالجة "جلسة بحث المستخدمين"',
      'canvas.meta_date': '٣ مارس ٢٠٢٦',
      'canvas.meta_input': 'صوت + نص',
      'canvas.meta_people': '٣ حاضرين',
      'canvas.meta_passes': '٦ مراحل تحليل',
      'canvas.summary_title': 'الملخص',
      'canvas.summary_text': 'راجع الفريق خارطة طريق Q2 واعتمد <strong>ميزة AI Chat</strong> للسبرينت 8. <span class="mention"><span>س</span> سارة</span> تقود سبرينت التصميم من <strong>الاثنين</strong>. مهندسان أُعيد توزيعهما على المنصة. تحديث عرض المستثمرين <strong>١٥ مارس</strong>.',
      'canvas.ai_label': 'اقتراح حُلْم',
      'canvas.ai_text': 'هذا الاجتماع يشير إلى ٣ محادثات سابقة عن تقييم المورّد ب. هل تريدني أربطها وأضيف مقارنة الأسعار للوحة؟',
      'canvas.ai_link': 'اربط المحادثات',
      'canvas.ai_dismiss': 'تجاهل',
      'canvas.decisions_title': 'القرارات الرئيسية',
      'canvas.decision1': 'AI Chat اعتُمد للسبرينت 8 — مهندسان مُعيَّنان',
      'canvas.decision2': 'إعادة تصميم الموبايل مؤجّلة لـ Q3 — الديون التصميمية تُحل أولاً',
      'canvas.decision3': 'أداة تحليل الأبحاث: نطورها داخلياً وليس شراءً',
      'canvas.actions_title': 'بنود العمل',
      'canvas.quad_do': 'نفّذ الآن',
      'canvas.quad_schedule': 'جدوِل',
      'canvas.quad_delegate': 'فوّض',
      'canvas.quad_later': 'لاحقاً',
      'canvas.task_do1': 'أرسل لـ<span class="mention"><span>س</span> سارة</span> موجز التصميم — السبرينت يبدأ الاثنين',
      'canvas.task_do2': 'حدّث عرض المستثمرين بتغييرات خارطة طريق Q2',
      'canvas.task_sched1': 'جدوِل تخطيط السبرينت 8 — جميع المهندسين',
      'canvas.task_sched2': 'أدِر ورشة تحليل أبحاث المستخدمين',
      'canvas.task_deleg1': 'مواصفات ترحيل المنصة — عيّن للمسؤول التقني',
      'canvas.task_later1': 'أرشف مقابلات أبحاث Q1 في قاعدة المعرفة',
      'canvas.why_label': 'لماذا "نفّذ الآن"؟',
      'canvas.why_text': 'عقد أحمد موعده النهائي الخميس بتبعات مالية (٥٠٠ ألف ريال). الاستعجال: عالٍ. التأثير: يعطّل تفعيل المورّد ب وجدول تسليم الربع الأول.',
      'canvas.people_title': 'الأشخاص المذكورون',
      'canvas.person_ahmed': 'أحمد — ٤ بنود عمل',
      'canvas.person_sara': 'سارة — مهمة واحدة مفوّضة',
      'canvas.person_marketing': 'فريق التسويق — مذكور',
      // Capture
      'capture.tag': 'التقاط متعدد الوسائط',
      'capture.h3': 'تكلّم، اكتب، صوّر، امسح.<br>كلها في محادثة واحدة.',
      'capture.p': 'بدون قوالب. بدون نماذج. افتح محادثة وفرّغ كل شيء — تسجيلات صوتية، أفكار مكتوبة، صور سبورات. حُلْم يتكفّل بالباقي.',
      'capture.li1': 'تفريغ صوتي — تكلّم بطبيعتك، واحصل على نص منظم',
      'capture.li2': 'تحليل الصور — صور السبورة يفهمها الذكاء الاصطناعي',
      'capture.li3': 'مسودات بدون إنترنت — سجّل بدون شبكة، وزامن لاحقاً',
      'capture.phone_title': 'التقاط جديد',
      'capture.phone_msg1': 'اجتماع مع أحمد عن قرار المورّد. يفضّل المورّد ب — ميزانية ٥٠٠ ألف.',
      'capture.phone_msg2': 'لازم نتأكد من امتثال المورّد ب لنظام زاتكا قبل التوقيع...',
      'capture.phone_msg3': 'سارة تحتاج الجدول المحدّث قبل يوم الجمعة.',
      'capture.phone_input': 'أضف إلى المحادثة...',
      // Agent
      'agent.tag': 'وكيل مساحة العمل',
      'agent.h3': 'تحدّث مع مساحة عملك.<br>وسيُجيبك.',
      'agent.p': 'ليس مجرد واجهة محادثة. أكثر من ١٠ وكلاء ذكاء متخصصين — يبحثون في كل محادثاتك، ينشئون مهام، يحدّثون الأولويات، ويبحثون نيابةً عنك. كل إجراء يتطلب موافقتك.',
      'agent.li1': 'بحث شامل في الملاحظات والمهام والاجتماعات والأشخاص',
      'agent.li2': 'إنشاء وإدارة المهام من خلال المحادثة',
      'agent.li3': 'مرحلتان: الذكاء يقترح، وأنت تقرر — الإنسان في الحلقة',
      'agent.phone_title': 'تحدّث مع مساحة العمل',
      'agent.phone_sub': 'اسأل أي شيء عن عملك',
      'agent.q1': 'ما الذي قررناه بخصوص عقد المورّد؟',
      'agent.tool1': 'تم البحث في مساحة العمل — ٨ نتائج',
      'agent.answer': 'في اجتماع تخطيط الربع الأول (١٢ فبراير)، اختار فريقك <strong>المورّد ب</strong> بميزانية ٥٠٠ ألف ريال. أحمد يُنهي الإجراءات — الموعد النهائي الخميس.',
      'agent.step1': 'بحث في ٣ مواضيع',
      'agent.step2': 'عثر على القرار في المحادثة #٤٢',
      'agent.step3': 'ربط مع مهام أحمد',
      'agent.q2': 'أنشئ مهمة متابعة ليوم الأربعاء',
      'agent.tool2': 'يقترح مهمة بانتظار موافقتك',
      'agent.proposal_title': 'متابعة مع أحمد بخصوص عقد المورّد ب',
      'agent.proposal_meta_priority': 'ر١ — نفّذ الآن',
      'agent.proposal_meta_due': 'الموعد: الأربعاء ١٩ فبراير',
      'agent.confirm': 'موافق',
      'agent.edit': 'تعديل',
      // Stats
      'stats.processing': 'متوسط وقت المعالجة',
      'stats.passes': 'مراحل ذكية لكل ملاحظة',
      'stats.types': 'أنواع أفعال مصنفة',
      'stats.agents': 'وكلاء ذكاء متخصصون',
      'stats.entitlements': 'ميزة مشمولة',
      // Engine
      'engine.tag': 'تحت الغطاء',
      'engine.h2': 'ليس مجرد ذكاء اصطناعي.<br>بل محرك معرفة.',
      'engine.arch_tag': 'البنية',
      'engine.arch_h': 'عقلان.<br>خط معالجة واحد.',
      'engine.arch_p': 'الاستخراج والتصنيف مرحلتان مختلفتان. حُلْم يعالج كل مرحلة بدقة حتى تحصل على نتائج أوضح.',
      'engine.action_tag': 'تخطيط الأفعال',
      'engine.action_h': 'ليس مجرد متابعة.<br><span style="color:var(--amber)">بل خطوة واضحة.</span>',
      'engine.action_p': 'كل مهمة تتحول إلى خطوة عملية محددة تبدأ بفعل واضح.',
      'engine.research_tag': 'بحث تلقائي',
      'engine.research_h': 'المعلومة توصلك<br>قبل ما تطلبها.',
      'engine.research_p': 'المهام التي تحتاج سياق أو بحث يتم تحليلها تلقائياً وتظهر لك النتائج المختصرة.',
      'engine.knowledge_tag': 'محرك المعرفة',
      'engine.knowledge_h': 'كل ملاحظة تجعل<br>التي بعدها أذكى.',
      'engine.knowledge_p': 'حُلْم يبني سياقاً مستمراً حول عملك وأهدافك وعلاقاتك.',
      'engine.brief_tag': 'ملخص الذكاء',
      'engine.brief_h': 'تنبيهك اليومي.',
      'engine.brief_p': 'ملخص يومي يوضح أهم ما يحتاج انتباهك.',
      'engine.agents_tag': 'الوكلاء',
      'engine.agents_h': 'وكلاء ذكاء يعملون معك.',
      'engine.agents_p': 'وكلاء متخصصون يبحثون ويرتبون المهام ويقترحون الإجراءات — مع موافقتك دائماً.',
      // AI Pipeline vertical
      'vpipe.tag': 'خط المعالجة الذكي',
      'vpipe.h2': 'ست طبقات من الذكاء.<br>لكل ملاحظة.',
      'vpipe.p': 'كل التقاط يمر بخط معالجة ذكي متعدد المراحل. هذا ما يحدث في ~٦ ثوانٍ.',
      'vpipe.pass1': 'المرحلة ١ — الاستخراج',
      'vpipe.name1': 'ماذا حدث؟',
      'vpipe.desc1': 'يستخرج الحقائق والأشخاص والقرارات والمهام. يُنشئ محاضر اجتماعات بالحاضرين والمواضيع والقرارات.',
      'vpipe.pass2': 'المرحلة ٢ — التصنيف',
      'vpipe.name2': 'ما مدى استعجاله؟',
      'vpipe.desc2': 'يصنّف كل مهمة في مصفوفة أيزنهاور بدرجات ثقة وتفسير واضح.',
      'vpipe.pass3': 'المرحلة ٣ — تخطيط الأفعال',
      'vpipe.name3': 'ما الخطوة التالية؟',
      'vpipe.desc3': 'يعيّن واحداً من ٩ أنواع أفعال. يولّد خطوة عملية تبدأ بفعل.',
      'vpipe.pass4': 'المرحلة ٤ — البحث في الخلفية',
      'vpipe.name4': 'ما الذي تحتاج معرفته؟',
      'vpipe.desc4': 'المهام التي تحتاج بحثاً تُضاف تلقائياً إلى القائمة. بحث ويب، تحليل صفحات، نتائج ملخّصة بالمصادر.',
      'vpipe.pass5': 'المرحلة ٥ — خريطة العلاقات',
      'vpipe.name5': 'مَن المعنيّون؟',
      'vpipe.desc5': 'يستخرج الأسماء والأدوار والمنظمات من كل محادثة. يبني خريطة علاقات تنمو مع الاستخدام.',
      'vpipe.pass6': 'المرحلة ٦ — محرك المعرفة',
      'vpipe.name6': 'تذكّر كل شيء.',
      'vpipe.desc6': 'ذاكرة ذكية طويلة المدى — أهداف، أنماط، أشخاص مهمون. وعي بالتقويم الهجري والسياق السعودي.',
      // Arabic section
      'arabic.tag': 'ثنائي اللغة بالتصميم',
      'arabic.h2': 'مبني للعربية من الأساس',
      'arabic.p': 'تكلّم بالعربي. احصل على ملخصات ومهام وخطوات تالية بالعربي. اخلط اللغات بحرية. وعي بالتقويم الهجري والسياق السعودي مدمج.',
      'arabic.input_label': 'المدخل — تسجيل صوتي',
      'arabic.input_text': 'اجتماع مع أحمد عن عقد المورّد. ميزانية ٥٠٠ ألف ريال. يبي يخلّص الأسبوع هذا قبل نهاية الربع.',
      'arabic.output_label': 'المخرج — لوحة الذكاء',
      'arabic.output_text': '<strong>المهمة:</strong> إنهاء عقد المورّد ب<br><strong>الأولوية:</strong> عاجل ومهم — الموعد النهائي هذا الأسبوع<br><strong>الخطوة التالية:</strong> أرسل لأحمد قرار الميزانية ٥٠٠ ألف قبل الخميس',
      // Pricing
      'pricing.tag': 'الأسعار',
      'pricing.h2': 'ابدأ ببساطة. وطوّر استخدامك عندما تحتاج.',
      'pricing.monthly': 'شهري',
      'pricing.annual': 'سنوي',
      'pricing.save': 'وفّر ٢٠٪',
      'pricing.popular': 'الأكثر طلباً',
      'pricing.free_name': 'مجاني',
      'pricing.free_desc': 'للأفراد الذين يبدأون رحلتهم',
      'pricing.free_f1': 'محادثات ومواضيع بلا حدود',
      'pricing.free_f2': '٥٠ معالجة ذكية شهرياً',
      'pricing.free_f3': '٣ محاضر اجتماعات شهرياً',
      'pricing.free_f4': 'ملخص الذكاء اليومي مشمول',
      'pricing.free_f5': 'حتى ٥ أعضاء فريق',
      'pricing.free_cta': 'ابدأ الآن',
      'pricing.growth_name': 'نمو',
      'pricing.growth_desc': 'للفِرق التي تتحرك بسرعة',
      'pricing.growth_f1': 'معالجة ذكية بلا حدود',
      'pricing.growth_f2': 'محاضر اجتماعات بلا حدود',
      'pricing.growth_f3': 'بحث ذكي في الخلفية',
      'pricing.growth_f4': 'خريطة العلاقات + محرك المعرفة',
      'pricing.growth_f5': 'حتى ١٥ عضو فريق',
      'pricing.growth_cta': 'ابدأ التجربة المجانية',
      'pricing.plus_name': 'بلس',
      'pricing.plus_desc': 'للفِرق بلا سقف',
      'pricing.plus_f1': 'كل شيء في باقة النمو',
      'pricing.plus_f2': 'مقاعد + إجراءات ذكية بلا حدود',
      'pricing.plus_f3': 'تجميع ذكي أسبوعي',
      'pricing.plus_f4': 'وكلاء متخصصون (مالية، قانونية)',
      'pricing.plus_f5': '٥٠٠ جيجابايت تخزين',
      'pricing.plus_cta': 'تواصل مع المبيعات',
      'pricing.seat': '/ مقعد / شهرياً',
      // Aha interstitials
      'aha.canvas': 'ملاحظاتك... <span class="aha__accent">تتحرّك.</span>',
      'aha.pipeline': '٦ ثوانٍ. <span class="aha__accent">هذا كل شي.</span>',
      'aha.arabic': 'عربي. <span class="aha__accent">من البداية.</span>',
      'aha.pricing': 'وكلاء ذكاء <span class="aha__accent">يشتغلون لك.</span>',

      // CTA
      'cta.h2_1': 'عقلك يلتقط.',
      'cta.h2_2': 'وحُلْم يتكفّل بالباقي.',
      'cta.p': 'أنت ما خلقت عشان تكون مدير مهام لنفسك. خلك تفكر وتقرر وتتحرك — وحُلْم يهتم بالباقي.',
      'cta.btn': 'احصل على الوصول المبكر — مجانًا',
      // Acts (infographic)
      'acts.tag': 'ذكاء',
      'acts.h2': 'يفهمك <span class="aha__accent">قبل ما تطلب.</span>',
      'acts.p': 'حُلْم ما يكتفي بالفهم. يكتب، يتابع، يجهّز، وينبّهك — عشان ما تحتاج تسوي كل شيء بنفسك.',
      'acts.do_h': 'نفّذها لي',
      'acts.do_p': 'الذكاء يخطط ويبحث وينتج. أنت تراجع وتوافق.',
      'acts.email_h': 'اكتب وأرسل',
      'acts.email_p': 'إيميلات جاهزة من سياق اجتماعاتك. ضغطة واحدة عبر جيميل.',
      'acts.followup_h': 'تابع',
      'acts.followup_p': 'ما رد؟ حُلْم ينبّهك. خلصت الاجتماع؟ يسألك كيف راح.',
      'acts.prep_h': 'تجهيز الاجتماعات',
      'acts.prep_p': 'عرض تقديمي ونقاط حوار جاهزة قبل ما تدخل.',

      // Integrations
      'integ.tag': 'في كل مكان تشتغل فيه',
      'integ.h2': 'متصل بأدواتك.<br>متاح في كل مكان.',
      'integ.app_cal': 'تقويم',
      'integ.app_gmail': 'جيميل',
      'integ.app_voice': 'صوت',
      'integ.app_slack': 'سلاك',
      'integ.why_statement': 'عملك موزّع في ١٢ تطبيق مختلف. لا أحد منهم يكلّم الثاني.',
      'integ.why_sub': 'حُلْم يربط كل الأدوات اللي تستخدمها — عشان <strong>سياقك يمشي معك</strong>، مو ضدك.',
      'integ.badge_live': 'مباشر',
      'integ.badge_ios': 'آيفون · آيباد',
      'integ.badge_mac': 'ماك · ويندوز',
      'integ.badge_smart': 'ذكاء اصطناعي',
      'integ.google_h': 'يقرأ تقويمك. يجهّز يومك.',
      'integ.google_desc': 'قبل كل اجتماع، حُلْم يراجع المحادثات السابقة ويكتب لك ملخص جاهز. مسوداتك على جيميل ترسل بضغطة واحدة — مكتوبة من سياقك أنت.',
      'integ.google_ex': '"مراجعة الربع الأول بعد ٩٠ دقيقة — وجدت ٣ محادثات ذات صلة، الملخص جاهز ←"',
      'integ.widget_h': 'التقط في ٦ ثواني. مو ٦٠.',
      'integ.widget_desc': 'ضغطة واحدة من شاشتك الرئيسية — صوت، نص، أو صورة. بدون فتح التطبيق. حُلْم يعالجها في الخلفية وأنت تكمل يومك.',
      'integ.widget_ex': '"التقطتُ ملاحظتك الصوتية في المصعد. استخرجتُ مهمتين ←"',
      'integ.desktop_h': 'يجلس معك في الاجتماع. ويشتغل عنك.',
      'integ.desktop_desc': 'يسجّل مباشرة، يفرّغ النص لحظة بلحظة، ويستخرج المهام أثناء الحديث. أنت تركز على النقاش — حُلْم يتكفل بالباقي.',
      'integ.desktop_ex': '"٤٧ دقيقة مسجّلة · ٦ مهام مستخرجة · الملخص أُرسل لـ ٣ حضور ←"',
      'integ.notif_h': 'ينبّهك قبل فوات الأوان.',
      'integ.notif_desc': 'حُلْم يفهم مواعيدك من السياق — مو من اللي أدخلته يدويًا. ينبّهك لما المتابعات تبرد، ويجهّزك قبل اللحظات المهمة.',
      'integ.notif_ex': '"أحمد ما رد من ٣ أيام. ترسل متابعة الحين؟ ←"',
      'integ.badge_teams': 'قريباً',
      'integ.teams_h': 'كل اجتماع Teams. بدون إدارة يدوية.',
      'integ.teams_desc': 'حُلْم يدخل مكالمات Teams، يفرغ المحادثة مباشرة، ويسلّمك لوحة منظّمة — قرارات ومهام ومتابعات — فور انتهاء المكالمة.',
      'integ.teams_ex': '"انتهت مكالمة Teams · استُخرج 5 بنود عمل · أُرسلت لـ 4 حاضرين ←"',
      'integ.badge_gws': 'Google Workspace',
      'integ.gws_h': 'لوحتك. تصدير أينما تريد.',
      'integ.gws_desc': 'بضغطة واحدة، تصدر لوحة حُلْم إلى Google Docs أو Sheets أو Slides — منسّقة ومهيّأة للمشاركة مع فريقك.',
      'integ.gws_ex': '"مراجعة الربع الأول صُدّرت للـ Docs · شُورك مع 3 أعضاء ←"',
      'integ.badge_collab': 'تعاون',
      'integ.invite_h': 'ادعُ فريقك.',
      'integ.invite_desc': 'ادعُ زملاءك لمساحة عملك. كل ملخص ومهمة وقرار يبقى متزامناً. حُلْم يعرف من يملك ماذا — ويذكّر الشخص الصح في الوقت الصح.',
      'integ.invite_m1': 'أحمد أنهى عقد المورّد ب',
      'integ.invite_m2': 'سارة حدّثت لوحة الربع الأول',
      'integ.invite_m3': 'حُلْم: أُعيد تعيين 3 مهام بعد إغلاق العقد',
      'integ.invite_ex': '"فريقك متزامن. حُلْم يتابع من يعمل على ماذا ←"',

      // Floating notifications
      'notif.pres_t': 'العرض جاهز',
      'notif.pres_s': 'ملف عرض الربع الأول اكتمل',
      'notif.cal_t': 'تقويم قوقل',
      'notif.cal_s': 'اجتماع الفريق بعد ٥ دقائق',
      'notif.follow_t': 'متابعة',
      'notif.follow_s': 'هل رد أحمد على العقد؟',
      'notif.draft_t': 'مسودة إيميل',
      'notif.draft_s': 'اعتماد الميزانية جاهز للإرسال',

      // Footer
      'footer.privacy': 'الخصوصية',
      'footer.terms': 'الشروط',
      'footer.contact': 'تواصل',
      'footer.copy': 'صُنع بواسطة روّاد. أفكارك تستحق أكثر من مجرد قائمة نقاط.',
    }
  };

  // ─── Engine ─────────────────────────────────────────────────
  const STORAGE_KEY = 'helm_lang';
  let currentLang = 'en';

  function detectLang() {
    // 1. URL param: ?lang=ar
    const url = new URLSearchParams(window.location.search);
    if (url.has('lang')) return url.get('lang') === 'ar' ? 'ar' : 'en';
    // 2. localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    // 3. Browser language
    const nav = navigator.language || navigator.userLanguage || '';
    if (nav.startsWith('ar')) return 'ar';
    // Default to Arabic for Saudi market
    return 'ar';
  }

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) ||
           (translations.en && translations.en[key]) ||
           key;
  }

  function applyTranslations() {
    // data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    // data-i18n-html → innerHTML (for elements with markup)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key);
    });
    // data-i18n-attr → attributes (placeholder, aria-label, etc.)
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var pairs = el.getAttribute('data-i18n-attr').split(';');
      pairs.forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) {
          el.setAttribute(parts[0].trim(), t(parts[1].trim()));
        }
      });
    });
  }

  function applyDirection() {
    var html = document.documentElement;
    if (currentLang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
    }
  }

  function updateMeta() {
    document.title = t('meta.title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));
  }

  function updateToggleBtn() {
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = currentLang === 'en' ? 'عربي' : 'EN';
      btn.setAttribute('aria-label', currentLang === 'en' ? 'Switch to Arabic' : 'Switch to English');
    }
  }

  function setLang(lang) {
    currentLang = lang === 'ar' ? 'ar' : 'en';
    localStorage.setItem(STORAGE_KEY, currentLang);
    applyDirection();
    applyTranslations();
    updateMeta();
    updateToggleBtn();
    // Dispatch event for other scripts that need to react
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
  }

  function init() {
    currentLang = detectLang();
    applyDirection();
    applyTranslations();
    updateMeta();
    updateToggleBtn();
  }

  // Public API
  window.HelmI18n = {
    init: init,
    setLang: setLang,
    t: t,
    get lang() { return currentLang; },
    get translations() { return translations; }
  };

  // Init immediately — script is at bottom of body, DOM is ready
  init();
})();
