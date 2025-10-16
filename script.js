// ========================
// DevBay Chatbot Data
// ========================
const qaPairs = [
 { q: "what is devbay", a: "DevBay Technologies is a global IT company that builds modern digital solutions, software, and automation systems to empower businesses worldwide." },
 { q: "where is devbay located", a: "DevBay operates globally with key offices in Pakistan, the Middle East, the United Kingdom, and North America." },
 { q: "what services devbay provide", a: "DevBay offers App Development, Software Development, Data Analysis, Cyber Security, Cloud Solutions, SEO, Call Center Services, and Game Development." },
 { q: "who is the ceo of devbay", a: "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation." },
 { q: "what is devbay mission", a: "DevBay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement." },
 { q: "what is devbay vision", a: "Become a global leader in intelligent automation and enterprise technology services." },
 { q: "what is devbay contact email", a: "info@devbay.ai" },
 { q: "what is devbay phone number", a: "+92 300 1234567" },
 { q: "does devbay work with startups", a: "Yes, with flexible pricing and rapid MVP development." },

 // ------------------- Services -------------------
 { q: "what services does devbay offer", a: "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, empowering businesses with smart, scalable, and high-performance digital solutions." },
 { q: "what is web development", a: "At DevBay, we empower businesses with intelligent and beautifully designed web solutions. Our focus is on seamless design, smooth performance, and creating a lasting impact for every client." },
 { q: "what is app development", a: "At DevBay, we create mobile applications that blend innovation with impact — ensuring smooth performance, elegant design, and real-world functionality. Whether you need a startup MVP or an enterprise-grade app, we deliver mobile solutions that scale with your business." },
 { q: "what is software development", a: "DevBay crafts intelligent, user-friendly, and secure software solutions that drive productivity and growth. Whether it’s ERP, CRM, or digital transformation, we deliver adaptive, high-performance systems." },
 { q: "what is data analytics", a: "Every number tells a story — and at DevBay, we help you understand it. We specialize in collecting, analyzing, and visualizing data to reveal patterns that drive success." },
 { q: "what is cloud solutions", a: "DevBay provides tailored cloud solutions that enable you to store, scale, and access data effortlessly while maintaining top-tier security and performance." },
 { q: "what is cyber security", a: "We protect what matters most — your data, systems, and reputation. Our cybersecurity solutions safeguard digital assets through threat detection and data protection strategies." },
 { q: "does devbay build ai chatbots", a: "Yes, DevBay develops intelligent chatbots using NLP and RAG systems." },
 { q: "does devbay provide seo", a: "Yes, DevBay provides SEO services to improve online visibility and traffic." },

 // ------------------- Technology & Process -------------------
 { q: "what technologies does devbay use", a: "Python, React, Node.js, Django, Laravel, Flutter, TensorFlow, AWS, Azure." },
 { q: "does devbay provide ai development", a: "Yes, custom AI systems for chatbots, analytics, computer vision, and automation." },
 { q: "does devbay provide cloud deployment", a: "Yes, deploy apps to AWS, Azure, or Google Cloud for scalability." },
 { q: "how long does a project take", a: "Typically 2 weeks for MVPs and up to 6 months for enterprise systems." },
 { q: "how does devbay ensure quality", a: "We follow Agile methodology, QA testing, sprint cycles, and automation tools." },
 { q: "does devbay offer maintenance", a: "Yes, continuous post-launch support and updates are provided." },
 { q: "does devbay offer training", a: "Yes, DevBay provides training sessions for clients on deployed systems." },
 { q: "how can i request a quote", a: "You can email info@devbay.ai or use the contact form on our website." },
 { q: "what is devbay pricing model", a: "We offer hourly, fixed-cost, and dedicated resource engagement models." },
 { q: "does devbay sign nda", a: "Yes, DevBay signs NDAs to protect client confidentiality and ideas." },

 // ------------------- Projects -------------------
 { q: "what is malfex", a: "PROJECT ORIGIN: DUBAI, UAE - Malfex is a groundbreaking forex trading platform offering zero trading fees to empower traders globally." },
 { q: "what is csd", a: "PROJECT ORIGIN: ISLAMABAD/RAWALPINDI, PAKISTAN - CSD introduced a robust e-commerce and retail management system to enhance operations and customer experience." },
 { q: "what is dialboxx", a: "PROJECT ORIGIN: KARACHI, PAKISTAN - Dialboxx is a localized version of Shopify built for Pakistan, empowering entrepreneurs to create online stores effortlessly." },
 { q: "what is craftsconnect", a: "PROJECT ORIGIN: TORONTO, CANADA - Craftsconnect is a home services app connecting users with trusted professionals for seamless household projects." },
 { q: "what is mr daze", a: "PROJECT ORIGIN: RIYADH, SAUDI ARABIA - MrDaze is an on-demand delivery app ensuring fast, reliable, and safe deliveries for goods and packages." },
 { q: "what is kryptoconnect", a: "PROJECT ORIGIN: BOSTON, USA - Kryptoconnect simplifies cryptocurrency portfolio management with P2P trading and real-time insights." },

 // ------------------- Ready-Made Solutions -------------------
 { q: "tell me about devbay ready-made solutions", a: "DevBay’s Ready-Made Solutions are intelligent, fully developed IT systems tailored for instant deployment across industries — CRM, ERP, LMS, HMS, SMS, RMS, and more." },
 { q: "what is devbay crm", a: "DevBay CRM is an all-in-one system for lead management, automation, analytics, and AI-driven customer engagement." },
 { q: "what modules are in devbay crm", a: "Modules include Lead Management, Contact Management, Deals, Tasks, Email Marketing, and Reporting." },
 { q: "does devbay crm support whatsapp", a: "Yes, it integrates with WhatsApp API, Gmail, and Outlook." },
 { q: "can devbay crm track customer history", a: "Yes, all activities are logged and accessible by authorized users." },
 { q: "what is devbay erp", a: "DevBay ERP delivers real-time analytics, seamless integration, and customizable modules for enterprise efficiency." },
 { q: "does devbay erp include analytics", a: "Yes, advanced dashboards for monitoring business performance." },
 { q: "can devbay erp integrate with crm", a: "Yes, both systems are connected for unified workflows." },
 { q: "is devbay erp multi branch", a: "Yes, supports multi-location management." },
 { q: "what is devbay lms", a: "DevBay LMS is a cloud-based platform for managing online learning, training, and course delivery efficiently." },
 { q: "does devbay lms support live classes", a: "Yes, integrates with Zoom, Google Meet, and Microsoft Teams." },
 { q: "can devbay lms auto grade quizzes", a: "Yes, automatic grading and instant feedback features included." },
 { q: "does devbay lms issue certificates", a: "Yes, digital certificates can be auto-generated." },
 { q: "what is devbay hospital management system", a: "DevBay HMS is a comprehensive healthcare management system that connects departments — appointments, billing, pharmacy, lab, and EHR." },
 { q: "does devbay hms handle billing", a: "Yes, includes billing, insurance claims, and payments." },
 { q: "can devbay hms manage doctor schedules", a: "Yes, doctor shifts and appointments are fully managed." },
 { q: "is devbay hms hipaa compliant", a: "Yes, 100% HIPAA compliant." },
 { q: "what is devbay school management system", a: "DevBay SMS automates school operations — admissions, attendance, exams, parent communication, and fee collection." },
 { q: "does devbay sms support parent portals", a: "Yes, parents can view attendance, grades, and announcements." },
 { q: "does devbay sms include fee management", a: "Yes, includes automatic fee tracking and reports." },
 { q: "can devbay sms manage teacher performance", a: "Yes, performance analytics included." },
 { q: "what is devbay property management system", a: "DevBay PMS helps manage properties, tenants, rent, and maintenance with smart automation." },
 { q: "can devbay pms handle rent invoices", a: "Yes, generates rent invoices and receipts automatically." },
 { q: "does devbay pms support tenant portals", a: "Yes, tenants can view rent history and submit maintenance requests." },
 { q: "is devbay pms cloud based", a: "Yes, accessible anywhere, anytime." },
 { q: "what is devbay restaurant management system", a: "DevBay RMS automates restaurant operations including orders, tables, billing, inventory, and staff management." },
 { q: "does devbay rms support pos", a: "Yes, supports dine-in, takeaway, and delivery POS." },
 { q: "can devbay rms manage online orders", a: "Yes, integrates with delivery apps and websites." },
 { q: "does devbay rms include analytics", a: "Yes, dashboards and reports for performance insights." },
 { q: "are ready made solutions customizable", a: "Yes, fully customizable with branding and modules." },
 { q: "do ready made systems include ai", a: "Yes, includes AI dashboards, chatbots, and predictive analytics." },
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

function getFallbackResponse() {
  const fallbacks = [
    "I'm sorry, I don't have information about that yet.",
    "Could you rephrase your question? I’ll try to understand better.",
    "That’s an interesting question! Let me connect you with our team for more details.",
    "Hmm… I don’t have that answer right now, but you can contact us at info@devbay.ai.",
    "Sorry, I didn’t quite get that — please ask something related to DevBay or its services."
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

function findAnswer(query) {
  let bestMatch = { score: 0, answer: getFallbackResponse() };
  qaPairs.forEach(pair => {
    const score = fuzzyScore(query, pair.q);
    if (score > bestMatch.score) bestMatch = { score, answer: pair.a };
  });
  if (bestMatch.score < 0.4) bestMatch.answer = getFallbackResponse();
  return bestMatch.answer;
}

// ========================
// Typewriter + smooth scroll
// ========================
function typeAnswer(text, element) {
  element.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    chatBox.scrollTop = chatBox.scrollHeight;
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
chatbotBtn.addEventListener("click", () => {
  chatbotContainer.style.display = "flex";
  chatBox.scrollTop = chatBox.scrollHeight;
});
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

  const botDiv = document.createElement("div");
  botDiv.className = "botMsg";
  chatBox.appendChild(botDiv);

  const answerText = findAnswer(userText);
  typeAnswer(answerText, botDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
  inputBox.value = "";
  inputBox.focus();
});

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") submitBtn.click();
});



