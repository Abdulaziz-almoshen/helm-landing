/**
 * Helm Landing Page — i18n System
 * Supports English (en) and Arabic (ar).
 * Usage: HelmI18n.t('key'), HelmI18n.setLang('ar'|'en'), HelmI18n.lang
 */
(function () {
  var translations = {
    en: {
      // Nav
      'nav.how': 'How it works',
      'nav.features': 'Features',
      'nav.pricing': 'Pricing',
      'nav.cta': 'Get Early Access',

      // Hero
      'hero.tag': 'Pilot',
      'hero.h1_1': 'You walk in prepared.',
      'hero.h1_2': 'You walk out handled.',
      'hero.p': 'Helm captures your conversations, extracts what matters, and acts on it. So you can think, decide, and move.',
      'hero.btn_pilot': 'Join the Pilot',
      'hero.btn_how': 'See how it works',
      'hero.founder': 'Built by Ruwad — because we were drowning in our own meetings.',
      'hero.phrases': [
        'Helm prepares.',
        'Helm extracts.',
        'Helm prioritizes.',
        'Helm follows up.',
        'Helm remembers.'
      ],

      // Narrative
      'narrative.tag': 'The real problem',
      'narrative.h2': "You don't need another place<br>to write things down.",
      'narrative.p': 'You walk out of a meeting with ten things in your head. You capture three. The other seven disappear. Or worse — you capture everything, but nothing moves. Notes become graveyards.',

      // Scene — chaos
      'scene.chaos_label': 'Your reality right now',
      'scene.sticky1': 'Call Ahmed<br>about the thing',
      'scene.sticky2': 'Meeting<br>notes???',
      'scene.sticky3': 'URGENT<br>follow up',
      'scene.sticky4': 'Budget<br>numbers',
      'scene.sticky5': 'Deploy fix<br>ASAP',
      'scene.sticky6': 'Roadmap<br>update???',
      'scene.notif1': '12 unread messages',
      'scene.notif2': 'Meeting in 5 min',
      'scene.notif3': '3 missed calls',
      'scene.overdue': '4 tasks overdue',

      // Scene — transform
      'scene.transform': '6 seconds',

      // Scene — order
      'scene.order_label': 'After Helm processes it',
      'scene.minutes': 'Meeting Minutes',
      'scene.min1': 'Budget approved: 500K SAR',
      'scene.min2': 'Ahmed to send contracts by Thu',
      'scene.min3': 'Next review: March 12',
      'scene.tasks': 'Tasks Created',
      'scene.task1': 'Send Ahmed 500K decision',
      'scene.task2': 'Review Q2 projections',
      'scene.task3': 'Update team on timeline',
      'scene.next': 'Next Action',
      'scene.next_text': '"Message Ahmed the budget approval with contract deadline — Thursday EOD"',

      // Acts / Intelligence
      'acts.h2': 'Understands you. Acts ahead.',
      'acts.p': "Helm doesn't stop at understanding. It drafts, follows up, prepares, and nudges — so you don't have to.",
      'acts.do_h': 'Do it for me',
      'acts.do_p': 'AI plans, researches, generates. You review and approve.',
      'acts.followup_h': 'Follow up',
      'acts.followup_p': 'No reply? Helm nudges you. Meeting done? Asks how it went.',
      'acts.email_h': 'Draft & send',
      'acts.email_p': 'Emails pre-written from context. One tap through Gmail.',
      'acts.prep_h': 'Meeting prep',
      'acts.prep_p': 'Slide decks and talking points ready before you walk in.',

      // How it works
      'how.tag': 'How it works',
      'how.h2': 'Raw input in. Structured action out.',
      'how.p': "Voice memos, meeting notes, photos, documents — Helm's six-layer AI pipeline processes everything in ~6 seconds.",
      'how.step1_h': 'Capture anything',
      'how.step1_p': 'Voice, text, photos, PDFs — dump it all into one thread. No templates, no formatting.',
      'how.chip_voice': 'Voice memo 2:34',
      'how.chip_text': 'Meeting notes',
      'how.chip_photo': 'Whiteboard',
      'how.chip_doc': 'Budget.pdf',
      'how.step2_h': 'AI reasons in ~6 seconds',
      'how.step2_p': 'Six-layer pipeline: extract facts, classify urgency, plan actions, research context, map people, build memory.',
      'how.engine_title': 'Helm AI Engine',
      'how.engine_sub': 'Processing "Q1 Planning Review"',
      'how.stage_extract': 'Extract ✓',
      'how.stage_classify': 'Classify ✓',
      'how.stage_plan': 'Plan ✓',
      'how.stage_research': 'Research',
      'how.stage_people': 'People ✓',
      'how.stage_memory': 'Memory ✓',
      'how.step3_h': 'Structured action, instantly',
      'how.step3_p': 'Every input produces meeting minutes, prioritized tasks, and a specific next action.',
      'how.result1_title': 'Meeting Minutes',
      'how.result1_detail': 'Budget approved: 500K SAR · Next review Mar 12',
      'how.result1_tag': 'Done',
      'how.result2_title': '3 Tasks Prioritized',
      'how.result2_detail': '1 urgent · 1 scheduled · 1 delegated',
      'how.result2_tag': '3 items',
      'how.result3_title': 'Next Action',
      'how.result3_detail': '"Send Ahmed the 500K decision by Thursday EOD"',
      'how.result3_tag': 'Next',

      // Canvas
      'canvas.tag': 'AI Canvas',
      'canvas.h2': 'Every meeting becomes a canvas.',
      'canvas.p': 'Summaries, prioritized tasks, people mentions, and AI recommendations — all structured automatically from your raw capture.',
      'canvas.breadcrumb': 'Product / Design Thinking Sprint',
      'canvas.status': 'AI Processed',
      'canvas.title': 'AI Product Development — Design Thinking Sprint',
      'canvas.meta_voice': 'Voice + Screen share',
      'canvas.meta_attendees': '4 attendees',
      'canvas.meta_passes': '6 passes completed',
      'canvas.summary_title': 'Summary',
      'canvas.summary_text': 'Team aligned on <strong>three user personas</strong> for the mobile onboarding flow. <span class="mention"><span>S</span> Sara</span> presented research findings from <strong>12 user interviews</strong>. Decision: prioritize the <strong>"busy professional"</strong> persona for v1. Prototype deadline set to <strong>next Wednesday</strong>.',
      'canvas.decisions_title': 'Design Decisions',
      'canvas.decision1': 'Onboarding will use <strong>progressive disclosure</strong> — show value before asking for permissions',
      'canvas.decision2': 'Voice capture as the <strong>primary input</strong> on first screen — reduce typing friction by 80%',
      'canvas.decision3': 'Calendar integration prompt — deferred to sprint 2 (needs OAuth review)',
      'canvas.actions_title': 'Action Items',
      'canvas.quad_do': 'Do Now',
      'canvas.quad_schedule': 'Schedule',
      'canvas.quad_delegate': 'Delegate',
      'canvas.quad_later': 'Later',
      'canvas.task1': 'Create Figma prototype for voice-first onboarding',
      'canvas.task1_due': 'Wed',
      'canvas.task2': 'Write copy for 3 onboarding screens',
      'canvas.task2_due': 'Tue',
      'canvas.task3': 'Usability test with 5 users',
      'canvas.task3_due': 'Next Fri',
      'canvas.task4': 'Set up analytics for onboarding funnel',
      'canvas.task4_assignee': 'Khalid',
      'canvas.task5': 'Evaluate speech-to-text providers',
      'canvas.agent_name': '✦ Helm Agent',

      // Integrations
      'integ.strip_label': 'Works with your tools',
      'integ.tag': 'Everywhere you work',
      'integ.h2': 'Connected to your tools.<br>Available everywhere.',
      'integ.badge_live': 'Live',
      'integ.google_h': 'Reads your calendar. Prepares your day.',
      'integ.google_desc': 'Before every meeting, Helm scans past threads and drafts a context brief. Gmail drafts sent in one tap.',
      'integ.google_ex': '"Q1 Review in 90 min — 3 past threads found, brief ready"',
      'integ.badge_ios': 'iOS',
      'integ.widget_h': 'Capture in 6 seconds. Not 60.',
      'integ.widget_desc': 'One tap — voice, text, or photo. No app-opening ritual. Helm processes in the background.',
      'integ.widget_ex': '"Voice note captured. 2 tasks extracted."',
      'integ.badge_mac': 'macOS',
      'integ.desktop_h': 'Sits in your meeting. Works for you.',
      'integ.desktop_desc': 'Records live, transcribes in real time, extracts tasks as the conversation happens.',
      'integ.desktop_ex': '"47 min recorded · 6 action items extracted"',
      'integ.badge_smart': 'AI-Powered',
      'integ.notif_h': "Nudges you before it's too late.",
      'integ.notif_desc': 'Helm reads deadlines from context. Nudges when follow-ups go cold. Prepares you before important moments.',
      'integ.notif_ex': '"Ahmed hasn\'t replied in 3 days. Follow up?"',
      'integ.badge_soon': 'Coming Soon',
      'integ.teams_h': 'Every Teams meeting. Zero admin.',
      'integ.teams_desc': 'Helm joins your Teams calls, transcribes live, and delivers a structured canvas the moment the call ends.',
      'integ.teams_ex': '"Teams call ended · 5 action items extracted"',
      'integ.outlook_h': 'Your inbox, already understood.',
      'integ.outlook_desc': 'Helm reads your Outlook calendar and email threads, surfaces relevant context, and drafts follow-ups automatically.',
      'integ.outlook_ex': '"3 meetings today · 2 need prep · briefs ready"',
      'integ.notion_h': 'Your canvas, synced to Notion.',
      'integ.notion_desc': 'Export structured canvases directly to Notion pages. Tasks, summaries, and action items flow into your existing workspace.',
      'integ.notion_ex': '"Canvas exported to Notion · 4 tasks synced"',
      'integ.whatsapp_h': 'Capture from WhatsApp. Instantly.',
      'integ.whatsapp_desc': 'Forward voice notes, messages, or images from WhatsApp directly to Helm. AI processes them into structured tasks and summaries.',
      'integ.whatsapp_ex': '"Voice note forwarded · 3 action items extracted"',
      'integ.p': 'Your work lives in 12 different apps. None of them talk to each other. Helm connects every surface — so your context travels with you.',

      // Arabic section
      'arabic.tag': 'Bilingual by Design',
      'arabic.h2': 'مبني للعربية من الأساس',
      'arabic.p': 'Speak in Arabic. Get summaries, tasks, and action hints in Arabic. Mix languages freely. Hijri calendar and Saudi context built in.',
      'arabic.input_label': 'المدخل — Voice Note',
      'arabic.output_label': 'Output — AI Canvas',
      'arabic.input_text': 'اجتماع مع أحمد عن عقد المورّد. ميزانية ٥٠٠ ألف ريال. يبي يخلص الأسبوع هذا قبل نهاية الربع.',
      'arabic.output_text': '<strong>المهمة:</strong> إنهاء عقد المورّد ب<br><strong>الأولوية:</strong> عاجل ومهم<br><strong>الخطوة التالية:</strong> أرسل لأحمد قرار الميزانية ٥٠٠ ألف قبل الخميس',

      // Pricing
      'pricing.tag': 'Pricing',
      'pricing.h2': 'Start capturing. Upgrade when ready.',
      'pricing.monthly': 'Monthly',
      'pricing.annual': 'Annual',
      'pricing.save': 'Save 20%',
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
      'pricing.seat': '/ seat / month',
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

      // Nav
      'nav.pilot': 'Join Pilot',

      // CTA
      'cta.h2_1': 'Your brain captures.',
      'cta.h2_2': 'Helm does the rest.',
      'cta.p': "Free during pilot. We'll always have a generous free tier.",
      'cta.btn_submit': 'Join the Pilot',
      'cta.success': "You're in! We'll email you when Helm is ready.",
      'cta.error': "Couldn't connect. Try again?",

      // Footer
      'footer.support': 'Support',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.contact': 'Contact',
      'footer.copy': 'Built by Ruwad. Your ideas deserve better than a bullet list.',

      // Float notifications
      'float.pres_title': 'Presentation Ready',
      'float.pres_sub': 'Q1 review deck generated',
      'float.cal_title': 'Google Calendar',
      'float.cal_sub': 'Team standup in 5 min',
      'float.followup_title': 'Follow-up',
      'float.followup_sub': 'Did Ahmed respond?',
      'float.email_title': 'Draft Email',
      'float.email_sub': 'Budget approval ready'
    },

    ar: {
      // Nav
      'nav.how': 'كيف يعمل',
      'nav.features': 'المميزات',
      'nav.pricing': 'الأسعار',
      'nav.cta': 'احصل على وصول مبكر',

      // Hero
      'hero.tag': 'تجربة مبكرة',
      'hero.h1_1': 'تدخل كل اجتماع جاهز.',
      'hero.h1_2': 'وتطلع وكل شي منجز.',
      'hero.p': 'حلم يلتقط محادثاتك، يستخرج اللي يهم، ويتصرف. عشان تفكر، تقرر، وتتحرك.',
      'hero.btn_pilot': 'انضم للتجربة',
      'hero.btn_how': 'شوف كيف',
      'hero.founder': 'صنعته رواد — لأننا كنا نغرق في اجتماعاتنا.',
      'hero.phrases': [
        'حلم يجهّز.',
        'حلم يستخرج.',
        'حلم يرتّب.',
        'حلم يتابع.',
        'حلم يتذكّر.'
      ],

      // Narrative
      'narrative.tag': 'المشكلة',
      'narrative.h2': 'المشكلة مو التدوين.<br>المشكلة إن ولا شيء يتحرّك.',
      'narrative.p': 'تطلع من اجتماع بعشر أفكار. تسجّل ثلاث. السبع الباقية تضيع. أو أسوأ — تسجّل كل شيء، بس ولا شيء يصير. ملاحظاتك تموت بصمت.',

      // Scene — chaos
      'scene.chaos_label': 'يومك الحين',
      'scene.sticky1': 'كلّم أحمد<br>عن الموضوع',
      'scene.sticky2': 'محضر<br>الاجتماع؟؟؟',
      'scene.sticky3': 'عاجل<br>تابع!',
      'scene.sticky4': 'أرقام<br>الميزانية',
      'scene.sticky5': 'حل المشكلة<br>الحين!',
      'scene.sticky6': 'خطة الطريق<br>وين؟؟؟',
      'scene.notif1': '12 رسالة ما قرأتها',
      'scene.notif2': 'اجتماع بعد 5 دقايق',
      'scene.notif3': '3 مكالمات فايتة',
      'scene.overdue': '4 مهام متأخرة',

      // Scene — transform
      'scene.transform': '6 ثوانٍ',

      // Scene — order
      'scene.order_label': 'بعد ما حلم يشتغل',
      'scene.minutes': 'محضر الاجتماع',
      'scene.min1': 'الميزانية معتمدة: 500 ألف ريال',
      'scene.min2': 'أحمد يرسل العقود قبل الخميس',
      'scene.min3': 'المراجعة الجاية: 12 مارس',
      'scene.tasks': 'مهام جاهزة',
      'scene.task1': 'أرسل لأحمد قرار الـ 500 ألف',
      'scene.task2': 'راجع توقعات الربع الثاني',
      'scene.task3': 'حدّث الفريق عن الجدول',
      'scene.next': 'الخطوة الجاية',
      'scene.next_text': '"أرسل لأحمد اعتماد الميزانية مع موعد العقد — الخميس نهاية الدوام"',

      // Acts / Intelligence
      'acts.h2': 'يفهمك. ويسبقك.',
      'acts.p': 'حلم ما يكتفي بالفهم — يكتب، يتابع، يجهّز، وينبّهك. أنت بس قرر.',
      'acts.do_h': 'نفّذ عنّي',
      'acts.do_p': 'يخطط ويبحث وينتج. أنت تراجع وتوافق.',
      'acts.followup_h': 'تابع تلقائياً',
      'acts.followup_p': 'ما ردّوا؟ ينبّهك. خلص الاجتماع؟ يسألك كيف كان.',
      'acts.email_h': 'اكتب وأرسل',
      'acts.email_p': 'رسائل جاهزة من السياق. ضغطة وحدة وتنرسل.',
      'acts.prep_h': 'جهّز اجتماعك',
      'acts.prep_p': 'العرض ونقاط النقاش جاهزين قبل ما تدخل.',

      // How it works
      'how.tag': 'آلية العمل',
      'how.h2': 'مدخل خام. نتائج جاهزة.',
      'how.p': 'صوت، اجتماعات، صور، ملفات — محرك هلم يعالج كل شيء تلقائيًا.',
      'how.step1_h': 'أرسل أي شيء',
      'how.step1_p': 'صوت، نص، صور، ملفات — أضفها كلها بمحادثة وحدة. بدون قوالب.',
      'how.chip_voice': 'تسجيل صوتي 2:34',
      'how.chip_text': 'ملاحظات اجتماع',
      'how.chip_photo': 'صورة سبورة',
      'how.chip_doc': 'ملف الميزانية',
      'how.step2_h': 'يحلّل في 6 ثوانٍ',
      'how.step2_p': '6 طبقات: استخراج، تصنيف، تخطيط، بحث، ربط أشخاص، بناء ذاكرة.',
      'how.engine_title': 'محرك حلم الذكي',
      'how.engine_sub': 'يعالج "مراجعة خطة الربع الأول"',
      'how.stage_extract': 'استخراج ✓',
      'how.stage_classify': 'تصنيف ✓',
      'how.stage_plan': 'تخطيط ✓',
      'how.stage_research': 'بحث',
      'how.stage_people': 'أشخاص ✓',
      'how.stage_memory': 'ذاكرة ✓',
      'how.step3_h': 'نتائج فورية',
      'how.step3_p': 'كل تسجيل ينتج: محضر، مهام مرتّبة، وخطوة تالية واضحة.',
      'how.result1_title': 'محضر الاجتماع',
      'how.result1_detail': 'الميزانية معتمدة: 500 ألف · المراجعة 12 مارس',
      'how.result1_tag': 'تم',
      'how.result2_title': '3 مهام جاهزة',
      'how.result2_detail': '1 عاجلة · 1 مجدولة · 1 مفوّضة',
      'how.result2_tag': '3 بنود',
      'how.result3_title': 'الخطوة الجاية',
      'how.result3_detail': '"أرسل لأحمد قرار الميزانية — الخميس نهاية الدوام"',
      'how.result3_tag': 'التالي',

      // Canvas
      'canvas.tag': 'اللوحة الذكية',
      'canvas.h2': 'كل اجتماع يطلع منه لوحة جاهزة.',
      'canvas.p': 'ملخص، مهام، إشارات لأشخاص، وتوصيات — كلها تتنظّم تلقائي من تسجيلك.',
      'canvas.breadcrumb': 'المنتج / سباق التفكير التصميمي',
      'canvas.status': 'عالجه الذكاء الاصطناعي',
      'canvas.title': 'تطوير المنتج بالذكاء الاصطناعي — سباق التفكير التصميمي',
      'canvas.meta_voice': 'صوت + مشاركة شاشة',
      'canvas.meta_attendees': '4 حاضرين',
      'canvas.meta_passes': '6 مراحل معالجة مكتملة',
      'canvas.summary_title': 'الملخص',
      'canvas.summary_text': 'الفريق اتفق على <strong>ثلاث شخصيات مستخدمين</strong> لتجربة التسجيل في التطبيق. <span class="mention"><span>س</span> سارة</span> عرضت نتائج بحث من <strong>12 مقابلة مستخدم</strong>. القرار: التركيز على شخصية <strong>"المحترف المشغول"</strong> للنسخة الأولى. موعد النموذج الأولي <strong>الأربعاء القادم</strong>.',
      'canvas.decisions_title': 'قرارات التصميم',
      'canvas.decision1': 'التسجيل يستخدم <strong>الكشف التدريجي</strong> — عرض القيمة قبل طلب الصلاحيات',
      'canvas.decision2': 'التسجيل الصوتي كـ<strong>مدخل رئيسي</strong> في الشاشة الأولى — تقليل الكتابة بنسبة 80%',
      'canvas.decision3': 'ربط التقويم — مؤجل للسباق الثاني (يحتاج مراجعة صلاحيات)',
      'canvas.actions_title': 'بنود العمل',
      'canvas.quad_do': 'نفّذ الآن',
      'canvas.quad_schedule': 'جدوِل',
      'canvas.quad_delegate': 'فوِّض',
      'canvas.quad_later': 'لاحقاً',
      'canvas.task1': 'إنشاء نموذج أولي لتجربة التسجيل الصوتي',
      'canvas.task1_due': 'الأربعاء',
      'canvas.task2': 'كتابة محتوى 3 شاشات تسجيل',
      'canvas.task2_due': 'الثلاثاء',
      'canvas.task3': 'اختبار قابلية الاستخدام مع 5 مستخدمين',
      'canvas.task3_due': 'الجمعة القادمة',
      'canvas.task4': 'إعداد تحليلات مسار التسجيل',
      'canvas.task4_assignee': 'خالد',
      'canvas.task5': 'تقييم مزودي تحويل الكلام إلى نص',
      'canvas.agent_name': '✦ وكيل حلم',

      // Integrations
      'integ.strip_label': 'يتكامل مع أدواتك',
      'integ.tag': 'وين ما تشتغل',
      'integ.h2': 'متصل بأدواتك.<br>حاضر في كل مكان.',
      'integ.badge_live': 'فعّال',
      'integ.google_h': 'يقرأ تقويمك. يجهّز يومك.',
      'integ.google_desc': 'قبل كل اجتماع، يسحب المحادثات السابقة ويجهّز ملخص. بريدك ينرسل بضغطة.',
      'integ.google_ex': '"مراجعة الربع الأول بعد 90 دقيقة — 3 محادثات سابقة، جاهز"',
      'integ.badge_ios': 'آيفون',
      'integ.widget_h': '6 ثوانٍ تكفي. مو 60.',
      'integ.widget_desc': 'ضغطة — صوت أو نص أو صورة. بدون فتح تطبيقات. يعالج بالخلفية.',
      'integ.widget_ex': '"تسجيل صوتي وصل. مهمتين طلعت منه."',
      'integ.badge_mac': 'ماك',
      'integ.desktop_h': 'يحضر اجتماعك. يشتغل عنك.',
      'integ.desktop_desc': 'يسجّل، يحوّل لنص، ويستخرج المهام وقت المحادثة.',
      'integ.desktop_ex': '"47 دقيقة · 6 بنود عمل طلعت"',
      'integ.badge_smart': 'ذكي',
      'integ.notif_h': 'ينبّهك قبل لا تنسى.',
      'integ.notif_desc': 'يقرأ المواعيد من كلامك. ينبّهك لما المتابعة تبرد. يجهّزك قبل كل لحظة مهمة.',
      'integ.notif_ex': '"أحمد ما ردّ من 3 أيام. تتابع؟"',
      'integ.badge_soon': 'قريباً',
      'integ.teams_h': 'كل اجتماع. صفر إدارة.',
      'integ.teams_desc': 'يدخل المكالمة، يحوّل الكلام لنص، ويطلع لوحة جاهزة لحظة ما تنتهي.',
      'integ.teams_ex': '"المكالمة خلصت · 5 بنود عمل جاهزة"',
      'integ.outlook_h': 'بريدك، مفهوم قبل ما تفتحه.',
      'integ.outlook_desc': 'يقرأ التقويم والبريد، يستخرج اللي يهمك، ويكتب المتابعات عنك.',
      'integ.outlook_ex': '"3 اجتماعات اليوم · 2 تحتاج تحضير · جاهز"',
      'integ.notion_h': 'لوحتك تروح لنوشن تلقائي.',
      'integ.notion_desc': 'صدّر اللوحات لنوشن مباشرة. المهام والملخصات تنتقل لمساحة عملك.',
      'integ.notion_ex': '"اللوحة انتقلت لنوشن · 4 مهام متزامنة"',
      'integ.whatsapp_h': 'من واتساب لحلم. فوراً.',
      'integ.whatsapp_desc': 'حوّل تسجيلات ورسائل وصور واتساب لمهام منظّمة وملخصات بثوانٍ.',
      'integ.whatsapp_ex': '"تسجيل صوتي وصل · 3 بنود عمل جاهزة"',
      'integ.p': 'شغلك موزّع على 12 تطبيق ولا واحد يتكلم مع الثاني. حلم يربطهم — السياق يمشي معك.',

      // Arabic section
      'arabic.tag': 'عربي أصيل',
      'arabic.h2': 'مبني للعربية من الأساس',
      'arabic.p': 'تكلّم عربي. النتائج عربي. اخلط لغات براحتك. التقويم الهجري والسياق السعودي مدمجين.',
      'arabic.input_label': 'المدخل — تسجيل صوتي',
      'arabic.output_label': 'المخرج — اللوحة الذكية',
      'arabic.input_text': 'اجتماع مع أحمد عن عقد المورّد. ميزانية ٥٠٠ ألف ريال. يبي يخلص الأسبوع هذا قبل نهاية الربع.',
      'arabic.output_text': '<strong>المهمة:</strong> إنهاء عقد المورّد ب<br><strong>الأولوية:</strong> عاجل ومهم<br><strong>الخطوة التالية:</strong> أرسل لأحمد قرار الميزانية ٥٠٠ ألف قبل الخميس',

      // Pricing
      'pricing.tag': 'الباقات',
      'pricing.h2': 'ابدأ مجاناً. طوّر لما تحتاج.',
      'pricing.monthly': 'شهري',
      'pricing.annual': 'سنوي',
      'pricing.save': 'وفّر 20%',
      'pricing.free_name': 'مجاني',
      'pricing.free_desc': 'للبداية',
      'pricing.free_f1': 'محادثات ومواضيع بلا حدود',
      'pricing.free_f2': '50 معالجة ذكية شهرياً',
      'pricing.free_f3': '3 محاضر اجتماعات شهرياً',
      'pricing.free_f4': 'ملخص ذكي يومي',
      'pricing.free_f5': 'حتى 5 أعضاء',
      'pricing.free_cta': 'ابدأ مجاناً',
      'pricing.growth_name': 'نمو',
      'pricing.growth_desc': 'للفرق السريعة',
      'pricing.seat': '/ مقعد / شهرياً',
      'pricing.growth_f1': 'معالجة ذكية بلا حدود',
      'pricing.growth_f2': 'محاضر اجتماعات بلا حدود',
      'pricing.growth_f3': 'بحث ذكي في الخلفية',
      'pricing.growth_f4': 'خريطة العلاقات + محرك المعرفة',
      'pricing.growth_f5': 'حتى 15 عضو',
      'pricing.growth_cta': 'جرّب مجاناً',
      'pricing.plus_name': 'متقدّم',
      'pricing.plus_desc': 'بلا حدود',
      'pricing.plus_f1': 'كل مميزات النمو',
      'pricing.plus_f2': 'مقاعد وإجراءات ذكية بلا حدود',
      'pricing.plus_f3': 'تحليل أسبوعي ذكي',
      'pricing.plus_f4': 'وكلاء متخصصون (مالية، قانونية)',
      'pricing.plus_f5': '500 جيجابايت تخزين',
      'pricing.plus_cta': 'كلّمنا',

      // Nav
      'nav.pilot': 'انضم للتجربة',

      // CTA
      'cta.h2_1': 'أنت تفكّر.',
      'cta.h2_2': 'حلم يسوّي الباقي.',
      'cta.p': 'مجاني خلال التجربة. دائماً بيكون في باقة مجانية سخية.',
      'cta.btn_submit': 'انضم للتجربة',
      'cta.success': 'تم التسجيل! سنراسلك عندما يصبح حلم جاهزاً.',
      'cta.error': 'ما قدرنا نتصل. حاول مرة ثانية؟',

      // Footer
      'footer.support': 'الدعم',
      'footer.privacy': 'الخصوصية',
      'footer.terms': 'الشروط',
      'footer.contact': 'تواصل معنا',
      'footer.copy': 'صنع رواد. أفكارك تستاهل أكثر من مجرد قائمة.',

      // Float notifications
      'float.pres_title': 'العرض جاهز',
      'float.pres_sub': 'عرض مراجعة الربع الأول جاهز',
      'float.cal_title': 'التقويم',
      'float.cal_sub': 'اجتماع الفريق بعد 5 دقايق',
      'float.followup_title': 'متابعة',
      'float.followup_sub': 'أحمد ردّ؟',
      'float.email_title': 'مسودة بريد',
      'float.email_sub': 'اعتماد الميزانية جاهز'
    }
  };

  /** Resolve a key from a translations object (flat lookup) */
  function resolve(obj, key) {
    if (obj.hasOwnProperty(key)) return obj[key];
    return undefined;
  }

  var HelmI18n = {
    lang: 'ar',

    /**
     * Return translation for a key in the current language.
     * Falls back to English, then to the key itself.
     */
    t: function (key) {
      var val = resolve(translations[this.lang], key);
      if (val !== undefined) return val;
      val = resolve(translations.en, key);
      if (val !== undefined) return val;
      return key;
    },

    /**
     * Switch language and update all data-i18n / data-i18n-html elements.
     */
    setLang: function (lang) {
      if (lang !== 'en' && lang !== 'ar') return;
      this.lang = lang;

      // Set document direction
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;

      // Update text-only elements
      var textEls = document.querySelectorAll('[data-i18n]');
      for (var i = 0; i < textEls.length; i++) {
        var el = textEls[i];
        var key = el.getAttribute('data-i18n');
        var val = this.t(key);
        if (typeof val === 'string') {
          el.textContent = val;
        }
      }

      // Update HTML elements
      var htmlEls = document.querySelectorAll('[data-i18n-html]');
      for (var j = 0; j < htmlEls.length; j++) {
        var el2 = htmlEls[j];
        var key2 = el2.getAttribute('data-i18n-html');
        var val2 = this.t(key2);
        if (typeof val2 === 'string') {
          el2.innerHTML = val2;
        }
      }

      // Dispatch event so other scripts can react
      window.dispatchEvent(new Event('langchange'));
    }
  };

  window.HelmI18n = HelmI18n;

  // Always start in Arabic. User can toggle to English manually.
  HelmI18n.setLang('ar');
})();
