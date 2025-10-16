// ========================
// Full DevBay Q&A Dataset (complete Ready-Made items fixed)
// ========================
const qaData = [
  { q: "what is devbay", a: "DevBay Technologies is a global IT company that builds modern digital solutions, software, and automation systems to empower businesses worldwide." },
  { q: "where is devbay located", a: "DevBay operates globally with key offices in Pakistan, the Middle East, the United Kingdom, and North America." },
  { q: "what services devbay provide", a: "DevBay offers App Development, Software Development, Data Analysis, Cyber Security, Cloud Solutions, SEO, Call Center Services, and Game Development." },
  { q: "who is the ceo of devbay", a: "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation." },
  { q: "what is devbay mission", a: "Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement." },
  { q: "what is devbay vision", a: "Become a global leader in intelligent automation and enterprise technology services." },
  { q: "what is devbay contact email", a: "info@devbay.ai" },
  { q: "what is devbay phone number", a: "+92 300 1234567" },
  { q: "does devbay work with startups", a: "Yes, with flexible pricing and rapid MVP development." },

  // ------------------- Services -------------------
  { q: "what services does devbay offer", a: "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, empowering businesses with smart, scalable, and high-performance digital solutions." },
  { q: "what is web development", a: "At DevBay, we empower businesses with intelligent and beautifully designed web solutions. Our focus is on seamless design, smooth performance, and creating a lasting impact for every client." },
  { q: "what is app development", a: "Your app is more than just software — it’s your brand in the palm of your user’s hand. At DevBay, we create mobile applications that blend innovation with impact, ensuring smooth performance, elegant design, and real-world functionality." },
  { q: "what is software development", a: "Every business deserves software that works for them — not against them. At DevBay, we craft intelligent, user-friendly, and secure software solutions that drive productivity and growth." },
  { q: "what is data analytics", a: "Every number tells a story — and at DevBay, we help you understand it. Our team specializes in collecting, analyzing, and visualizing complex data to reveal patterns that drive success." },
  { q: "what is cloud solutions", a: "The future of business is in the cloud — and DevBay makes that future seamless. We provide tailored cloud solutions that enable you to store, scale, and access data effortlessly while maintaining top-tier security and performance." },
  { q: "what is cyber security", a: "At DevBay, we protect what matters most — your data, your systems, and your reputation. Our comprehensive cybersecurity solutions safeguard your digital assets from evolving threats." },
  { q: "does devbay build ai chatbots", a: "Yes, intelligent chatbots using NLP and RAG systems." },
  { q: "does devbay provide seo", a: "Yes, to improve online visibility and traffic." },

  // ------------------- Technology & Process -------------------
  { q: "what technologies does devbay use", a: "Python, React, Node.js, Django, Laravel, Flutter, TensorFlow, AWS, Azure." },
  { q: "does devbay provide ai development", a: "Yes, custom AI systems for chatbots, analytics, computer vision, and automation." },
  { q: "does devbay provide cloud deployment", a: "Yes, deploy apps to AWS, Azure, or Google Cloud for scalability." },
  { q: "does devbay build custom chatbots", a: "Yes, using NLP and RAG-based systems." },
  { q: "how long does a project take", a: "2 weeks for MVPs to 6 months for enterprise systems." },
  { q: "how does devbay ensure quality", a: "Agile, QA testing, sprints, feedback, automation tools." },
  { q: "does devbay offer maintenance", a: "Yes, continuous post-launch support and updates." },
  { q: "does devbay offer training", a: "Yes, training sessions for clients on deployed systems." },
  { q: "how can i request a quote", a: "Contact info@devbay.ai or use the website form." },
  { q: "what is devbay pricing model", a: "Hourly, fixed-cost, and dedicated resource models." },
  { q: "does devbay sign nda", a: "Yes, to protect client data and ideas." },

  // ------------------- Projects -------------------
  { q: "what is malfex", a: "PROJECT ORIGIN: DUBAI, UAE - Malfex is a groundbreaking forex trading platform that has revolutionized the industry by offering its users a unique advantage: zero trading fees. By eliminating trading fees, Malfex empowers traders of all levels to execute transactions without worrying about unnecessary costs eating into their profits." },
  { q: "what is csd", a: "PROJECT ORIGIN: ISLAMABAD/RAWALPINDI, PAKISTAN - CSD is the second largest retail store in Pakistan and has launched an E-Commerce store and robust retail management system to enhance customer experience and internal operations." },
  { q: "what is dialboxx", a: "PROJECT ORIGIN: KARACHI - PAKISTAN, Dialboxx is a localized version of Shopify specifically tailored for the Pakistani market, enabling entrepreneurs to create and manage online stores with localized payment and delivery integrations." },
  { q: "what is craftsconnect", a: "PROJECT ORIGIN: TORONTO, CANADA - Craftsconnect is a home services app connecting users with trusted service providers for tasks like plumbing, electrical, painting, and more." },
  { q: "what is mr daze", a: "PROJECT ORIGIN: RIYADH, SAUDI ARABIA - Mr Daze is an on-demand delivery app providing real-time tracking, notifications, and reliable delivery for a wide range of goods." },
  { q: "what is kryptoconnect", a: "PROJECT ORIGIN: BOSTON, USA - Kryptoconnect is an application for cryptocurrency portfolio management with peer-to-peer trading features and real-time analytics." },

  // ------------------- Ready-Made Solutions (complete) -------------------
  { q: "tell me about devbay ready-made solutions", a: "DevBay’s Ready-Made Solutions are intelligent, fully developed IT systems tailored for instant deployment across industries. From CRM, ERP, and LMS to Hospital, School, and Restaurant Management Systems, each solution is built for efficiency, scalability, and seamless performance." },
  { q: "what is devbay crm", a: "DevBay CRM is an intelligent, all-in-one customer relationship management solution designed to streamline your business operations and strengthen customer connections. Built with automation, analytics, and AI-driven insights at its core." },
  { q: "what modules are in devbay crm", a: "Lead Management, Contact Management, Deals, Tasks, Email Marketing, Reporting." },
  { q: "does devbay crm support whatsapp or email", a: "Yes, integrates with WhatsApp API, Gmail, Outlook." },
  { q: "can devbay crm track customer history", a: "Yes, all activities are logged and viewable by authorized users." },
  { q: "what is devbay erp", a: "With real-time analytics, seamless integrations, and user-friendly dashboards, DevBay ERP enables smarter decision-making and improved productivity across every level of your business." },
  { q: "does devbay erp include analytics", a: "Yes, advanced dashboards for business performance." },
  { q: "can devbay erp be integrated with crm", a: "Yes, CRM and ERP work together for unified workflows." },
  { q: "is devbay erp multi-branch compatible", a: "Yes, supports multiple locations." },
  { q: "what is devbay lms", a: "DevBay LMS is an advanced, cloud-powered learning management system designed to transform how organizations deliver education and training. It supports courses, tracking, live classes, and certifications." },
  { q: "does devbay lms support live classes", a: "Yes, integrates Zoom, Google Meet, Teams." },
  { q: "can devbay lms auto-grade quizzes", a: "Yes, instant feedback on quizzes/assignments." },
  { q: "does devbay lms issue certificates", a: "Yes, digital certificates generated automatically." },
  { q: "what is devbay hospital management system", a: "DevBay HMS is a comprehensive healthcare management solution designed to digitize hospital operations. It covers patient registration, appointment scheduling, billing, pharmacy, laboratory, and electronic health records." },
  { q: "does devbay hms handle billing and insurance", a: "Yes, includes billing, insurance claims, and payments." },
  { q: "can devbay hms manage doctor schedules", a: "Yes, doctors can manage appointments and shifts." },
  { q: "is devbay hms hipaa compliant", a: "Yes." },
  { q: "what is devbay school management system", a: "DevBay SMS is a fully integrated platform for school administration including enrollment, attendance, exams, teacher management, parent communication, and fee collection." },
  { q: "does devbay sms support parent portals", a: "Yes, parents can view attendance, grades, announcements." },
  { q: "does devbay sms include fee management", a: "Yes, automated fee collection and reporting." },
  { q: "can devbay sms manage teacher performance", a: "Yes, performance analytics available." },
  { q: "what is devbay property management system", a: "Built for property owners, real estate agencies, and facility managers, DevBay PMS enhances transparency and automates rent, maintenance, and reporting." },
  { q: "can devbay pms handle rent invoices", a: "Yes, auto-generates invoices and receipts." },
  { q: "does devbay pms support tenant portals", a: "Yes, tenants can view rent history and submit requests." },
  { q: "is devbay pms cloud-based", a: "Yes, accessible from anywhere." },
  { q: "what is devbay restaurant management system", a: "DevBay RMS automates restaurant operations: order management, billing, reservations, inventory tracking, kitchen coordination, and staff scheduling." },
  { q: "does devbay rms support pos", a: "Yes, for dine-in, delivery, takeaway." },
  { q: "can devbay rms manage online orders", a: "Yes, integrates with delivery apps and websites." },
  { q: "does devbay rms include analytics", a: "Yes, dashboards available for owners." },
  { q: "are ready-made solutions customizable", a: "Yes, branding, modules, and business rules can be tailored to customer needs." },
  { q: "do ready-made systems include ai", a: "Yes, dashboards, chatbots, predictive reports, and AI-driven analytics are included where applicable." },
  { q: "how long does deployment take", a: "3–10 business days depending on customization." }
];

// ========================
// Helper Functions
// ========================
function normalize(text) {
    return text.toLowerCase().replace(/[^\w\s]/gi, "").trim();
}

function fuzzyScore(input, target) {
    input = normalize(input);
    target = normalize(target);

    if (target.includes(input)) return 1;
    const inputTokens = input.split(" ");
    const targetTokens = target.split(" ");
    let matchCount = 0;
    inputTokens.forEach(t => { if (targetTokens.includes(t)) matchCount++; });
    return matchCount / inputTokens.length;
}

function findAnswer(query) {
    let bestMatch = { score: 0, answer: "Sorry, I don't understand your question." };
    qaPairs.forEach(pair => {
        const score = fuzzyScore(query, pair.q);
        if (score > bestMatch.score) bestMatch = { score, answer: pair.a };
    });
    return bestMatch.answer;
}

function typeAnswer(text, element) {
    element.innerHTML = "";
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 25);
}

// ========================
// DOM Elements
// ========================
const inputBox = document.getElementById("userInput");
const submitBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chat-body");
const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotContainer = document.getElementById("chatbot-container");
const closeBtn = document.getElementById("close-chat");

// ========================
// Chat Popup Toggle
// ========================
chatbotBtn.addEventListener("click", () => { chatbotContainer.style.display = "flex"; });
closeBtn.addEventListener("click", () => { chatbotContainer.style.display = "none"; });

// ========================
// Send Message
// ========================
submitBtn.addEventListener("click", () => {
    const userText = inputBox.value.trim();
    if (!userText) return;

    const userDiv = document.createElement("div");
    userDiv.className = "userMsg";
    userDiv.textContent = userText;
    chatBox.appendChild(userDiv);

    const answerText = findAnswer(userText);
    const botDiv = document.createElement("div");
    botDiv.className = "botMsg";
    chatBox.appendChild(botDiv);
    typeAnswer(answerText, botDiv);

    inputBox.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
});

inputBox.addEventListener("keypress", (e) => { if (e.key === "Enter") submitBtn.click(); });

