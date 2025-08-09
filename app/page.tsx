"use client";

import React, { useMemo, useState, useEffect } from "react";

/** UI Primitives (Tailwind) */
function Button({
  children,
  className = "",
  variant = "solid",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" | "ghost" }) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-2xl text-sm font-semibold transition focus:outline-none";
  const styles =
    variant === "solid"
      ? "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
      : variant === "outline"
      ? "border border-current hover:opacity-80"
      : "hover:opacity-80";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
const Card = ({ className = "", children }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`rounded-2xl border p-0 ${className}`}>{children}</div>
);
const CardHeader = ({ className = "", children }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`px-4 pt-4 ${className}`}>{children}</div>
);
const CardTitle = ({ className = "", children }: React.PropsWithChildren<{ className?: string }>) => (
  <h3 className={`text-base font-semibold ${className}`}>{children}</h3>
);
const CardContent = ({ className = "", children }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`px-4 pb-4 ${className}`}>{children}</div>
);

/** Icons (inline SVG) */
const Icon = {
  Sparkles: (p: any) => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 2l1.8 4.5L18 8.2l-4.2 1.7L12 14l-1.8-4.1L6 8.2l4.2-1.7L12 2z" stroke="currentColor"/><path d="M20 11l.9 2.2L23 14l-2.1.8L20 17l-.9-2.2L17 14l2.1-.8L20 11z" stroke="currentColor"/></svg>),
  Sun: (p: any) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="4" stroke="currentColor"/><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor"/></svg>),
  Moon: (p: any) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z" stroke="currentColor"/></svg>),
  Language: (p: any) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 5h18M12 5s-1 9-8 14M12 5s1 9 8 14" stroke="currentColor"/><path d="M5 12h14" stroke="currentColor"/></svg>),
  Check: (p: any) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M20 6L9 17l-5-5" stroke="currentColor"/></svg>),
  Chart: (p: any) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 3v18h18" stroke="currentColor"/><path d="M7 15l3-3 3 2 4-6" stroke="currentColor"/></svg>),
  Users: (p: any) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M16 11a4 4 0 1 0-8 0" stroke="currentColor"/><path d="M2 20a7 7 0 0 1 20 0" stroke="currentColor"/></svg>),
  Shield: (p: any) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" stroke="currentColor"/></svg>),
  Cog: (p: any) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="3" stroke="currentColor"/><path d="M19 12h3M2 12h3M12 2v3M12 19v3M5 5l2 2M17 17l2 2M17 7l2-2M5 19l2-2" stroke="currentColor"/></svg>),
  Building: (p: any) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 21h18V7L12 3 3 7v14z" stroke="currentColor"/><path d="M9 21v-6h6v6" stroke="currentColor"/></svg>),
  Rocket: (p: any) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 2c4 2 7 6 7 10a7 7 0 0 1-7 7c-4 0-8-3-10-7 2-4 6-8 10-10z" stroke="currentColor"/></svg>),
  Message: (p: any) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v9z" stroke="currentColor"/></svg>),
};

/** i18n */
const dict = {
  ar: {
    brand: "Fixes OS",
    nav: { features: "المزايا", solutions: "الحلول", pricing: "الأسعار", demo: "اللوحة التجريبية", contact: "تواصل" },
    hero: {
      title: "منصة واحدة تُشغِّل شركتك من الاستراتيجية حتى التنفيذ",
      subtitle: "Fixes OS تجمع التحليلات، الامتثال، الأتمتة، والتشغيل في تجربة موحّدة — مصمّمة للسوق السعودي.",
      cta1: "ابدأ التجربة المجانية",
      cta2: "حجز عرض مباشر",
      ribbon: "توافق عربي/إنجليزي • تكاملات حكومية وخاصّة",
    },
    trust: ["توافق مع رؤية 2030", "استضافة محلية وخيارات سحابية", "دعم فني 24/7", "تكاملات عبر API"],
    featuresTitle: "كل ما تحتاجه الشركات… في مكان واحد",
    featuresSub: "وحدات مترابطة تعمل بتناغم لتقليل التكاليف وتعظيم الأثر.",
    solutionsTitle: "حلول حسب نوع الشركة",
    solutionsSub: "اضغط لمعرفة كيفية توافق Fixes OS مع احتياجك.",
    solutions: [
      { t: "شركات ناشئة", d: "وقت للإطلاق أسرع، حوكمة خفيفة، تسويق فعال" },
      { t: "SMEs", d: "أتمتة عمليات وفوترة وتكامل محاسبي" },
      { t: "مؤسسات", d: "حوكمة متقدمة، أمان وSSO، خدمات مُدارة" },
    ],
    pricingTitle: "خطط أسعار مرنة",
    pricingSub: "جميع الأسعار تشمل دعمًا أساسيًا.",
    planStart: { name: "Start", priceSAR: 499, period: "شهريًا", for: "للشركات الناشئة وSMEs", bullets: ["لوحة تحكم أساسية", "محلل أعمال (نسخة خفيفة)", "مركز تسويق أساسي", "3 تكاملات خارجية"] },
    planGrow: { name: "Grow", priceSAR: 1990, period: "شهريًا", for: "للشركات النامية", bullets: ["جميع المزايا الأساسية", "BPM متقدم + أتمتة", "الامتثال والحوكمة", "خدمات مُدارة أساسية", "8 تكاملات خارجية"] },
    planScale: { name: "Scale", priceSAR: NaN, period: "حسب العقد", for: "للمؤسسات", bullets: ["أمن مؤسسي وSSO", "خدمات مُدارة موسّعة", "تخصيص وحدات ونماذج", "SLA مخصصة"] },
    contactTitle: "جاهز للانطلاق؟",
    contactSub: "أخبرنا عن شركتك وسنجهّز لك عرضًا عمليًا يطابق احتياجك خلال 48 ساعة.",
    send: "إرسال الطلب",
    why: "لماذا Fixes OS؟",
    whyBullets: ["حل شامل يُقلّل تعدد المزوّدين", "ذكاء اصطناعي يربط الرؤية بالتنفيذ", "توافق محلي، أمان مؤسسي، دعم بلغتين"],
    demo: {
      title: "اللوحة التجريبية",
      kpiUsers: "العملاء النشطون",
      kpiPipeline: "قيمة الفرص",
      kpiCompliance: "امتثال العقود",
      kpiSLA: "الالتزام بـ SLA",
      cards: { pipeline: "قنوات المبيعات (آخر 30 يوم)", tasks: "حالة المهام", tickets: "تذاكر الدعم", approvals: "طلبات الاعتماد" },
    },
    tryNow: "جرّب الآن",
    getStarted: "ابدأ الآن",
    mostPicked: "الأكثر اختيارًا",
    privacy: "الخصوصية", terms: "الشروط", support: "الدعم",
    // chatbot
    botTitle: "مساعد Fixes OS",
    botWelcome: "مرحبًا! اختر ما تحتاجه:",
    botMenuFaq: "أسئلة شائعة",
    botMenuBooking: "حجز موعد",
    botMenuTicket: "إنشاء تذكرة",
    botAskAnything: "اكتب سؤالك أو اختر من القائمة.",
    botBooked: (r: string) => `تم الحجز ✅ رقم المرجع: ${r}`,
    botTicketed: (r: string) => `تم إنشاء تذكرة ✅ رقم المرجع: ${r}`,
    botOpenWhatsApp: "فتح محادثة واتساب",
  },
  en: {
    brand: "Fixes OS",
    nav: { features: "Features", solutions: "Solutions", pricing: "Pricing", demo: "Demo Dashboard", contact: "Contact" },
    hero: {
      title: "One platform to run your company from strategy to execution",
      subtitle: "Fixes OS unifies analytics, compliance, automation, and operations — tailored for Saudi businesses.",
      cta1: "Start Free Trial",
      cta2: "Book a Live Demo",
      ribbon: "Arabic/English • Gov & Private Integrations",
    },
    trust: ["Aligned with Vision 2030", "Local hosting + Cloud", "24/7 Support", "API Integrations"],
    featuresTitle: "Everything companies need… in one place",
    featuresSub: "Interconnected modules that cut costs and maximize impact.",
    solutionsTitle: "Solutions by company type",
    solutionsSub: "Click to see how Fixes OS fits your needs.",
    solutions: [
      { t: "Startups", d: "Faster time-to-launch, lean governance, effective marketing" },
      { t: "SMEs", d: "Process automation, invoicing, accounting integrations" },
      { t: "Enterprises", d: "Advanced governance, SSO security, managed services" },
    ],
    pricingTitle: "Flexible Pricing",
    pricingSub: "All prices include basic support.",
    planStart: { name: "Start", priceSAR: 499, period: "Monthly", for: "For startups and SMEs", bullets: ["Core dashboard", "Light AI analyzer", "Basic marketing studio", "3 integrations"] },
    planGrow: { name: "Grow", priceSAR: 1990, period: "Monthly", for: "For growing companies", bullets: ["Everything in Start", "Advanced BPM + automation", "Compliance & governance", "Managed services (basic)", "8 integrations"] },
    planScale: { name: "Scale", priceSAR: NaN, period: "Per contract", for: "For enterprises", bullets: ["Enterprise security & SSO", "Expanded managed services", "Custom modules & forms", "Custom SLAs"] },
    contactTitle: "Ready to launch?",
    contactSub: "Tell us about your company and we'll prepare a tailored live demo within 48 hours.",
    send: "Send Request",
    why: "Why Fixes OS?",
    whyBullets: ["All-in-one to reduce vendors", "Practical AI from strategy to execution", "Local compliance, enterprise security, bilingual"],
    demo: {
      title: "Demo Dashboard",
      kpiUsers: "Active Customers", kpiPipeline: "Pipeline Value", kpiCompliance: "Contract Compliance", kpiSLA: "SLA Adherence",
      cards: { pipeline: "Sales Pipeline (Last 30d)", tasks: "Task Status", tickets: "Support Tickets", approvals: "Approval Requests" },
    },
    tryNow: "Try Now",
    getStarted: "Get Started",
    mostPicked: "Most Picked",
    privacy: "Privacy", terms: "Terms", support: "Support",
    botTitle: "Fixes OS Assistant",
    botWelcome: "Hi! Choose what you need:",
    botMenuFaq: "FAQs",
    botMenuBooking: "Book a Meeting",
    botMenuTicket: "Create Ticket",
    botAskAnything: "Type your question or pick an option.",
    botBooked: (r: string) => `Booking confirmed ✅ Ref: ${r}`,
    botTicketed: (r: string) => `Ticket created ✅ Ref: ${r}`,
    botOpenWhatsApp: "Open WhatsApp",
  },
} as const;
type Lang = keyof typeof dict;

/** Features */
const baseFeatures = [
  { k: "ai", title: { ar: "محلل الأعمال والمنافسين (AI)", en: "AI Business & Competitor Analyzer" }, text: { ar: "تحليلات لحظية للسوق والمنافسين مع توصيات قابلة للتنفيذ.", en: "Real-time market & competitor analytics with actionable recommendations." } },
  { k: "compliance", title: { ar: "مركز الامتثال والحوكمة", en: "Compliance & Governance Hub" }, text: { ar: "تتبُّع اللوائح السعودية وتحديثات فورية وتنبيهات ذكية.", en: "Track Saudi regulations with instant updates and smart alerts." } },
  { k: "dashboard", title: { ar: "لوحة تحكم موحّدة", en: "Unified Dashboard" }, text: { ar: "مؤشرات أداء وتشغيل وتقارير وتكامل خارجي.", en: "KPIs, reports, and external integrations in one place." } },
  { k: "managed", title: { ar: "الخدمات المدارة (Managed)", en: "Managed Services" }, text: { ar: "تشغيل باتفاقيات خدمة ومراقبة 24/7.", en: "Operations with SLAs and 24/7 monitoring." } },
  { k: "fm", title: { ar: "إدارة المنشآت", en: "Facility Management" }, text: { ar: "عقود وأصول وصيانة ومورّدون.", en: "Contracts, assets, maintenance, vendors." } },
  { k: "bpm", title: { ar: "أتمتة العمليات (BPM)", en: "Process Automation (BPM)" }, text: { ar: "نمذجة تدفقات العمل واعتماد رقمي.", en: "Model workflows with digital approvals." } },
  { k: "marketing", title: { ar: "مركز التسويق والمحتوى", en: "Marketing Studio" }, text: { ar: "مولد محتوى وتحليلات حملات.", en: "Content generation & campaign analytics." } },
  { k: "support", title: { ar: "دعم ذكي", en: "Smart Support" }, text: { ar: "مساعد محادثي لتذاكر العملاء.", en: "Chat assistant for support tickets." } },
];

/** Currency */
const SAR_TO_USD = 0.27;
function formatCurrency(lang: Lang, priceSAR: number): { label: string; value: string } {
  const isCustom = Number.isNaN(priceSAR);
  if (isCustom) return { label: lang === "ar" ? "مخصص" : "Custom", value: "" };
  if (lang === "ar") return { label: "SAR", value: new Intl.NumberFormat("ar-SA").format(priceSAR) };
  const usd = priceSAR * SAR_TO_USD;
  return { label: "USD", value: new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(usd) };
}

/** SVG Chart */
function LineChart({ data, height = 180, padding = 12 }: { data: number[]; height?: number; padding?: number }) {
  const width = 520;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = Math.max(1, max - min);
  const stepX = (width - padding * 2) / (data.length - 1);
  const points = data.map((v, i) => {
    const x = padding + i * stepX;
    const y = padding + (1 - (v - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="currentColor" opacity="0.2" />
    </svg>
  );
}

/** ChatBot (FSM) */
type BotMode = "menu" | "faq" | "booking" | "ticket";
type BotMsg = { from: "bot" | "me"; text: string };

function ChatBot({ lang, waNumber }: { lang: Lang; waNumber: string }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<BotMode>("menu");
  const [msgs, setMsgs] = useState<BotMsg[]>([]);
  const [text, setText] = useState("");

  const [booking, setBooking] = useState({ name: "", email: "", company: "", date: "", time: "" });
  const [ticket, setTicket] = useState({ subject: "", priority: "normal", description: "" });

  useEffect(() => {
    setMsgs([{ from: "bot", text: (dict[lang] as any).botWelcome }]);
    setMode("menu");
  }, [lang]);

  function pushBot(t: string) { setMsgs(m => [...m, { from: "bot", text: t }]); }
  function pushMe(t: string) { setMsgs(m => [...m, { from: "me", text: t }]); }

  function openWA(prefill: string) {
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(prefill)}`;
    window.open(url, "_blank");
  }

  async function postWebhook(payload: any) {
    const res = await fetch("/api/webhook", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const data = await res.json().catch(() => ({}));
    return data;
  }

  function handleMenuClick(which: "faq" | "booking" | "ticket") {
    setMode(which);
    if (which === "faq") {
      pushBot((dict[lang] as any).botAskAnything);
      pushBot(lang === "ar" ? "أمثلة: الأسعار • المزايا • التكاملات • الدعم" : "Examples: pricing • features • integrations • support");
    } else if (which === "booking") {
      pushBot(lang === "ar" ? "لنحجز موعدًا — أدخل البيانات بالأسفل." : "Let's book a meeting — fill the form below.");
    } else if (which === "ticket") {
      pushBot(lang === "ar" ? "سننشئ تذكرة دعم — أدخل التفاصيل بالأسفل." : "We'll create a support ticket — fill the details below.");
    }
  }

  function sendText() {
    if (!text.trim()) return;
    const t = text.trim();
    setText("");
    pushMe(t);

    if (mode === "faq") {
      const lc = t.toLowerCase();
      const isPricing = /price|pricing|سعر|الأسعار|التسعير/.test(lc);
      const isFeatures = /feature|features|ميزة|المزايا|الخصائص/.test(lc);
      const isIntegr = /integrat|تكامل|api/.test(lc);
      const isSupport = /support|دعم|صيانة/.test(lc);
      const wantsWA = /whatsapp|واتساب|تواصل/.test(lc);
      setTimeout(() => {
        if (isPricing) pushBot(lang === "ar" ? "خططنا: Start/Grow/Scale — تقدر تشوف التسعير أسفل الصفحة." : "Our plans: Start/Grow/Scale — see pricing below.");
        else if (isFeatures) pushBot(lang === "ar" ? "المزايا تشمل: ذكاء الأعمال، الامتثال، BPM، التسويق، الدعم." : "Features include: AI analytics, compliance, BPM, marketing, support.");
        else if (isIntegr) pushBot(lang === "ar" ? "ندعم تكاملات عبر API ومع أنظمة متعددة." : "We support API integrations and multiple systems.");
        else if (isSupport) pushBot(lang === "ar" ? "الدعم متاح 24/7 مع اتفاقيات SLA." : "Support is 24/7 with SLAs.");
        else pushBot(lang === "ar" ? "ممكن أوضح أكثر؟" : "Could you clarify?");
        if (wantsWA) {
          pushBot((dict[lang] as any).botOpenWhatsApp);
          openWA(t);
        }
      }, 300);
      return;
    }
    openWA(t);
  }

  async function submitBooking(e: React.FormEvent) {
    e.preventDefault();
    pushMe(lang === "ar" ? "إرسال حجز" : "Submit booking");
    const payload = { type: "booking", ...booking, lang };
    const res = await postWebhook(payload);
    const ref = res?.ref ?? "FX-LOCAL";
    pushBot((dict[lang] as any).botBooked(ref));
    setBooking({ name: "", email: "", company: "", date: "", time: "" });
    setMode("menu");
  }

  async function submitTicket(e: React.FormEvent) {
    e.preventDefault();
    pushMe(lang === "ar" ? "إرسال تذكرة" : "Submit ticket");
    const payload = { type: "ticket", ...ticket, lang };
    const res = await postWebhook(payload);
    const ref = res?.ref ?? "FX-LOCAL";
    pushBot((dict[lang] as any).botTicketed(ref));
    setTicket({ subject: "", priority: "normal", description: "" });
    setMode("menu");
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <Button className="rounded-full w-14 h-14 shadow-lg" onClick={() => setOpen(true)}>💬</Button>
      ) : (
        <div className="w-80 bg-white dark:bg-neutral-900 border rounded-2xl shadow-xl overflow-hidden">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <div className="font-semibold">{(dict[lang] as any).botTitle}</div>
            <button onClick={() => setOpen(false)} className="text-sm opacity-70 hover:opacity-100">✕</button>
          </div>
          <div className="p-3 flex gap-2">
            <Button variant={mode==="faq"?"solid":"outline"} className="rounded-xl flex-1" onClick={()=>handleMenuClick("faq")}>{(dict[lang] as any).botMenuFaq}</Button>
            <Button variant={mode==="booking"?"solid":"outline"} className="rounded-xl flex-1" onClick={()=>handleMenuClick("booking")}>{(dict[lang] as any).botMenuBooking}</Button>
            <Button variant={mode==="ticket"?"solid":"outline"} className="rounded-xl flex-1" onClick={()=>handleMenuClick("ticket")}>{(dict[lang] as any).botMenuTicket}</Button>
          </div>
          <div className="px-3 h-60 overflow-y-auto space-y-2 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] px-3 py-2 rounded-2xl ${m.from === "bot" ? "bg-gray-100 dark:bg-neutral-800" : "bg-black text-white dark:bg-white dark:text-black ml-auto"}`}>
                {m.text}
              </div>
            ))}
          </div>
          {mode === "faq" && (
            <div className="p-3 border-t flex gap-2">
              <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e)=>{ if(e.key==="Enter") sendText(); }}
                className="flex-1 border rounded-xl px-3 py-2 bg-transparent" placeholder={(dict[lang] as any).botAskAnything} />
              <Button onClick={sendText} className="rounded-xl">{lang === "ar" ? "إرسال" : "Send"}</Button>
            </div>
          )}
          {mode === "booking" && (
            <form onSubmit={submitBooking} className="p-3 border-t grid grid-cols-2 gap-2 text-sm">
              <input required value={booking.name} onChange={(e)=>setBooking(s=>({...s, name:e.target.value}))} className="border rounded-xl px-3 py-2 col-span-2" placeholder={lang==="ar"?"الاسم":"Name"} />
              <input required type="email" value={booking.email} onChange={(e)=>setBooking(s=>({...s, email:e.target.value}))} className="border rounded-xl px-3 py-2 col-span-2" placeholder={lang==="ar"?"البريد الإلكتروني":"Email"} />
              <input value={booking.company} onChange={(e)=>setBooking(s=>({...s, company:e.target.value}))} className="border rounded-xl px-3 py-2 col-span-2" placeholder={lang==="ar"?"الشركة":"Company"} />
              <input required type="date" value={booking.date} onChange={(e)=>setBooking(s=>({...s, date:e.target.value}))} className="border rounded-xl px-3 py-2" />
              <input required type="time" value={booking.time} onChange={(e)=>setBooking(s=>({...s, time:e.target.value}))} className="border rounded-xl px-3 py-2" />
              <Button type="submit" className="rounded-xl col-span-2">{lang==="ar"?"تأكيد الحجز":"Confirm Booking"}</Button>
            </form>
          )}
          {mode === "ticket" && (
            <form onSubmit={submitTicket} className="p-3 border-t grid grid-cols-2 gap-2 text-sm">
              <input required value={ticket.subject} onChange={(e)=>setTicket(s=>({...s, subject:e.target.value}))} className="border rounded-xl px-3 py-2 col-span-2" placeholder={lang==="ar"?"الموضوع":"Subject"} />
              <select value={ticket.priority} onChange={(e)=>setTicket(s=>({...s, priority:e.target.value}))} className="border rounded-xl px-3 py-2 col-span-2">
                <option value="low">{lang==="ar"?"منخفض":"Low"}</option>
                <option value="normal">{lang==="ar"?"متوسط":"Normal"}</option>
                <option value="high">{lang==="ar"?"عالي":"High"}</option>
              </select>
              <textarea required value={ticket.description} onChange={(e)=>setTicket(s=>({...s, description:e.target.value}))} className="border rounded-xl px-3 py-2 col-span-2 h-20" placeholder={lang==="ar"?"الوصف":"Description"} />
              <Button type="submit" className="rounded-xl col-span-2">{lang==="ar"?"إنشاء تذكرة":"Create Ticket"}</Button>
            </form>
          )}
          <div className="p-3 border-t">
            <Button onClick={()=>openWA(lang==="ar"?"تواصل عبر واتساب":"Contact via WhatsApp")} variant="outline" className="w-full rounded-xl">
              {(dict[lang] as any).botOpenWhatsApp}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

/** Page component with landing sections + ChatBot */
export default function Page() {
  const [lang, setLang] = useState<Lang>("ar");
  const [dark, setDark] = useState(false);
  const t = useMemo(() => dict[lang], [lang]);

  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);

  useEffect(() => {
    // tests
    const arFmt = formatCurrency("ar", 1000);
    const enFmt = formatCurrency("en", 1000);
    console.assert(arFmt.label === "SAR" && enFmt.label === "USD", "Currency labels ok");
    console.assert(/^966\d{9,}$/.test(WABA), "WhatsApp number format looks OK (KSA intl)");
  }, []);

  const sectionAlt = dark ? "bg-neutral-900" : "bg-gray-50";
  const plans = [t.planStart, { ...t.planGrow, recommended: true }, t.planScale];

  const ENV_WABA = process.env.NEXT_PUBLIC_WABA_NUMBER || "";
  const WABA = ENV_WABA || "966549357309";

  function openWhatsApp(payload: Record<string, any>) {
    const text =
      lang === "ar"
        ? f"طلب تواصل Fixes OS:\n- الشركة: {payload.company}\n- البريد: {payload.email}\n- المجال: {payload.industry}"
        : `Fixes OS contact request:\n- Company: ${payload.company}\n- Email: ${payload.email}\n- Industry: ${payload.industry}`;
    const url = `https://wa.me/${encodeURIComponent(WABA)}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className={dark ? "min-h-screen bg-neutral-900 text-neutral-50" : "min-h-screen bg-white text-neutral-900"}>
      {/* Header */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur ${dark ? "bg-neutral-900/70" : "bg-white/70"}`}>
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl"><Icon.Sparkles /> Fixes OS</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">{t.nav.features}</a>
            <a href="#solutions" className="hover:opacity-80">{t.nav.solutions}</a>
            <a href="#pricing" className="hover:opacity-80">{t.nav.pricing}</a>
            <a href="#demo" className="hover:opacity-80">{t.nav.demo}</a>
            <a href="#contact" className="hover:opacity-80">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="rounded-2xl"><Icon.Language className="mr-1" /> {lang === "ar" ? "EN" : "AR"}</Button>
            <Button variant="ghost" onClick={() => setDark(v => !v)} className="rounded-2xl">{dark ? <Icon.Sun /> : <Icon.Moon />}</Button>
            <Button className="rounded-2xl px-5">{t.tryNow}</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">{t.hero.title}</h1>
            <p className="text-lg md:text-xl opacity-80 mb-8">{t.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-2xl px-6">{t.hero.cta1}</Button>
              <Button variant="outline" className="rounded-2xl px-6">{t.hero.cta2}</Button>
            </div>
            <div className="mt-6 text-sm opacity-70">{t.hero.ribbon}</div>
          </div>
          <div>
            <div className="aspect-[16/10] rounded-2xl border shadow-sm flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-6 w-full">
                {baseFeatures.slice(0, 4).map((f) => (
                  <Card key={f.k} className="rounded-xl">
                    <CardHeader className="pb-2"><CardTitle>{f.title[lang]}</CardTitle></CardHeader>
                    <CardContent className="text-sm opacity-80">{f.text[lang]}</CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className={`border-y ${sectionAlt}`}>
        <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm opacity-80">
          {t.trust.map((x: any, i: number) => (<div key={i}>{x}</div>))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">{t.featuresTitle}</h2>
          <p className="opacity-80 mt-2">{t.featuresSub}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {baseFeatures.map((f) => (
            <Card key={f.k} className="rounded-2xl">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {f.k === "ai" ? <Icon.Chart /> : f.k === "compliance" ? <Icon.Shield /> : f.k === "dashboard" ? <Icon.Chart /> : f.k === "managed" ? <Icon.Cog /> : f.k === "support" ? <Icon.Message /> : <Icon.Cog />}
                  <span className="font-semibold">{f.title[lang]}</span>
                </div>
              </CardHeader>
              <CardContent className="text-sm opacity-80">{f.text[lang]}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className={sectionAlt}>
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold">{t.solutionsTitle}</h2>
            <p className="opacity-80 mt-2">{t.solutionsSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {t.solutions.map((x: any, i: number) => (
              <Card key={i} className="rounded-2xl hover:shadow-md transition">
                <CardHeader><CardTitle>{x.t}</CardTitle></CardHeader>
                <CardContent className="opacity-80">{x.d}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">{t.pricingTitle}</h2>
          <p className="opacity-80 mt-2">{t.pricingSub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[t.planStart, { ...t.planGrow, recommended: true }, t.planScale].map((p: any, i: number) => {
            const fmt = formatCurrency(lang, p.priceSAR);
            return (
              <Card key={i} className={`rounded-2xl ${p.recommended ? "border-2 shadow-lg" : ""}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{p.name}</CardTitle>
                    {p.recommended && (
                      <span className="text-xs px-2 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                        {t.mostPicked}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-3xl font-extrabold">
                    {fmt.value || (lang === "ar" ? "مخصص" : "Custom")}
                    {fmt.value ? <span className="text-base font-normal opacity-70"> {fmt.label}</span> : null}
                  </div>
                  <div className="text-sm opacity-70">{p.period} — {p.for}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {p.bullets.map((b: string, j: number) => (
                      <li key={j} className="flex items-start gap-2"><Icon.Check className="mt-0.5" />{b}</li>
                    ))}
                  </ul>
                  <div className="mt-6"><Button className="w-full rounded-2xl">{t.getStarted}</Button></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className={sectionAlt}>
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">{t.demo.title}</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Card className="rounded-2xl"><CardContent className="p-4"><div className="text-xs opacity-60 flex items-center gap-2"><Icon.Users /> {t.demo.kpiUsers}</div><div className="text-2xl font-bold mt-2">1,284</div></CardContent></Card>
            <Card className="rounded-2xl"><CardContent className="p-4"><div className="text-xs opacity-60 flex items-center gap-2"><Icon.Chart /> {t.demo.kpiPipeline}</div><div className="text-2xl font-bold mt-2">SAR 6.2M</div></CardContent></Card>
            <Card className="rounded-2xl"><CardContent className="p-4"><div className="text-xs opacity-60 flex items-center gap-2"><Icon.Shield /> {t.demo.kpiCompliance}</div><div className="text-2xl font-bold mt-2">98%</div></CardContent></Card>
            <Card className="rounded-2xl"><CardContent className="p-4"><div className="text-xs opacity-60 flex items-center gap-2"><Icon.Cog /> {t.demo.kpiSLA}</div><div className="text-2xl font-bold mt-2">92%</div></CardContent></Card>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            <Card className="rounded-2xl lg:col-span-2">
              <CardHeader><CardTitle className="flex items-center gap-2"><Icon.Chart /> {t.demo.cards.pipeline}</CardTitle></CardHeader>
              <CardContent><LineChart data={[10,14,12,18,16,20,19,24,22,28,27,31]} /></CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader><CardTitle className="flex items-center gap-2"><Icon.Message /> {t.demo.cards.tickets}</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 text-sm"><li>#4213 — Pending</li><li>#4212 — In progress</li><li>#4211 — Resolved</li></ul></CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader><CardTitle>{t.demo.cards.tasks}</CardTitle></CardHeader>
              <CardContent><div className="h-40 rounded-xl border border-dashed flex items-center justify-center opacity-60">(Kanban)</div></CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader><CardTitle>{t.demo.cards.approvals}</CardTitle></CardHeader>
              <CardContent><div className="h-40 rounded-xl border border-dashed flex items-center justify-center opacity-60">(Approvals)</div></CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact → WhatsApp */}
      <section id="contact" className={sectionAlt}>
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.contactTitle}</h3>
            <p className="opacity-80 mb-6">{t.contactSub}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              const payload = Object.fromEntries(fd.entries());
              console.log("Lead:", payload);
              const ENV_WABA = process.env.NEXT_PUBLIC_WABA_NUMBER || "";
              const WABA = ENV_WABA || "966549357309";
              const text =
                lang === "ar"
                  ? `طلب تواصل Fixes OS:\n- الشركة: ${payload.company}\n- البريد: ${payload.email}\n- المجال: ${payload.industry}`
                  : `Fixes OS contact request:\n- Company: ${payload.company}\n- Email: ${payload.email}\n- Industry: ${payload.industry}`;
              const url = `https://wa.me/${encodeURIComponent(WABA)}?text=${encodeURIComponent(text)}`;
              window.open(url, "_blank");
            }} className="grid sm:grid-cols-2 gap-3">
              <input name="company" className="border rounded-2xl px-4 py-3" placeholder={lang==="ar"?"اسم الشركة":"Company name"} required />
              <input name="email" type="email" className="border rounded-2xl px-4 py-3" placeholder={lang==="ar"?"البريد الإلكتروني":"Email"} required />
              <input name="industry" className="border rounded-2xl px-4 py-3 sm:col-span-2" placeholder={lang==="ar"?"مجال العمل":"Industry"} />
              <Button type="submit" className="rounded-2xl px-6 sm:col-span-2">{t.send}</Button>
            </form>
          </div>
          <div>
            <Card className="rounded-2xl">
              <CardHeader><CardTitle className="flex items-center gap-2"><Icon.Building /> {t.why}</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm opacity-80">
                {t.whyBullets.map((x: any, i: number) => (<p key={i}>{x}</p>))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
          <div className="flex items-center gap-2"><Icon.Rocket /> © {new Date().getFullYear()} Fixes OS.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100">{t.privacy}</a>
            <a href="#" className="hover:opacity-100">{t.terms}</a>
            <a href="#" className="hover:opacity-100">{t.support}</a>
          </div>
        </div>
      </footer>

      {/* Floating ChatBot */}
      <ChatBot lang={lang} waNumber={WABA} />
    </div>
  );
}
