// === DevBay Data ===
const devbayData = [
 { q: "what is devbay", a: "DevBay Technologies is a global IT company that builds modern digital solutions, software, and automation systems to empower businesses worldwide." },
 { q: "where is devbay located", a: "DevBay operates globally with key offices in Pakistan, the Middle East, the United Kingdom, and North America." },
 { q: "what services devbay provide", a: "DevBay offers App Development, Software Development, Data Analysis, Cyber Security, Cloud Solutions, SEO, Call Center Services, and Game Development." },
 { q: "who is the ceo of devbay", a: "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation." },
 { q: "what is devbay mission", a: "Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement." },
 { q: "what is devbay vision", a: "Become a global leader in intelligent automation and enterprise technology services." },
 { q: "what is devbay contact email", a: "info@devbay.ai" },
 { q: "what is devbay phone number", a: "+92 300 1234567" },
 { q: "does devbay work with startups", a: "Yes, with flexible pricing and rapid MVP development." },

 // ---- Services ----
 { q: "what services does devbay offer", a: "DevBay offers Web, App, and Software Development, Cloud Solutions, Data Analytics, Cybersecurity, and ready-made systems such as CRM, ERP, LMS, HMS, SMS, and RMS." },
 { q: "what is web development", a: "DevBay creates beautiful and intelligent web solutions for impactful digital presence." },
 { q: "what is app development", a: "DevBay builds innovative, high-performing mobile apps for startups and enterprises." },
 { q: "what is software development", a: "DevBay develops secure and scalable software systems like ERP, CRM, and automation tools." },
 { q: "what is data analytics", a: "DevBay helps analyze and visualize data to uncover insights that improve business performance." },
 { q: "what is cloud solutions", a: "DevBay offers tailored cloud solutions — AWS, Azure, and hybrid — to scale securely and efficiently." },
 { q: "what is cyber security", a: "DevBay protects your data and systems from threats using modern cybersecurity strategies." },
 { q: "does devbay build ai chatbots", a: "Yes, DevBay develops intelligent chatbots using NLP and RAG systems." },
 { q: "does devbay provide seo", a: "Yes, to improve online visibility and traffic." },

 // ---- Technology ----
 { q: "what technologies does devbay use", a: "Python, React, Node.js, Django, Laravel, Flutter, TensorFlow, AWS, Azure." },
 { q: "does devbay provide ai development", a: "Yes, custom AI systems for analytics, vision, and automation." },
 { q: "does devbay provide cloud deployment", a: "Yes, deploys to AWS, Azure, or Google Cloud." },
 { q: "how long does a project take", a: "From 2 weeks for MVPs to 6 months for large systems." },
 { q: "how does devbay ensure quality", a: "By using Agile methods, QA testing, and automation tools." },
 { q: "does devbay offer maintenance", a: "Yes, continuous post-launch updates and support." },
 { q: "does devbay offer training", a: "Yes, DevBay provides client training on deployed systems." },
 { q: "how can i request a quote", a: "Contact info@devbay.ai or use our website form." },
 { q: "what is devbay pricing model", a: "Hourly, fixed-cost, and dedicated resource models." },
 { q: "does devbay sign nda", a: "Yes, to protect client ideas and data." },

 // ---- Ready-made Solutions ----
 { q: "tell me about devbay ready-made solutions", a: "DevBay offers pre-built IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, designed for rapid deployment and customization." },
 { q: "what is devbay crm", a: "DevBay CRM manages leads, clients, and communication through automation and analytics." },
 { q: "what is devbay erp", a: "DevBay ERP offers real-time dashboards, analytics, and automation to optimize business performance." },
 { q: "what is devbay lms", a: "DevBay LMS is a modern e-learning platform supporting live classes, auto-grading, and certificates." },
 { q: "what is devbay hospital management system", a: "DevBay HMS connects departments like billing, pharmacy, lab, and appointments in one secure healthcare system." },
 { q: "what is devbay school management system", a: "DevBay SMS automates admissions, attendance, exams, and parent communication." },
 { q: "what is devbay property management system", a: "DevBay PMS manages rent, invoices, and tenant portals with smart dashboards." },
 { q: "what is devbay restaurant management system", a: "DevBay RMS automates restaurant operations including POS, billing, orders, and analytics." },
 { q: "do ready-made systems include ai", a: "Yes, dashboards, chatbots, and predictive analytics are included." },
 { q: "how long does deployment take", a: "3–10 business days depending on customization." }
];

// === Chatbot Logic ===
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(message, type) {
  const msg = document.createElement("div");
  msg.classList.add(type === "bot" ? "bot-message" : "user-message");
  msg.textContent = message;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll down
}

function getResponse(userText) {
  const query = userText.toLowerCase().trim();
  const match = devbayData.find(item => query.includes(item.q.toLowerCase()));
  if (match) {
    return match.a;
  } else {
    return "🤖 Sorry, I couldn’t find an answer for that. Please ask about DevBay’s services, projects, or solutions.";
  }
}

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;
  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getResponse(text);
    addMessage(reply, "bot");
  }, 500);
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});



