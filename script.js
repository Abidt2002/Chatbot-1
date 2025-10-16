// ========================
// Full Q&A Pairs (250 items)
// ========================
const qaPairs = [
  { q: "what is devbay", a: "DevBay Technologies is a global IT company that builds modern digital solutions, software, and automation systems to empower businesses worldwide." },
  { q: "where is devbay located", a: "DevBay operates globally with key offices in Pakistan, the Middle East, the United Kingdom, and North America." },
  { q: "what services devbay provide", a: "DevBay offers App Development, Software Development, Data Analysis, Cyber Security, Cloud Solutions, SEO, Call Center Services, and Game Development." },
  { q: "Who is the CEO of DevBay?", a: "CEO: Azam Khan, COO: Arham Hashmi — leaders in technology and innovation."},
  { q: "What is DevBay mission?", a: "Devbay was founded with a vision to build revolutionary technology applications capable of significantly enhancing efficiency through automation and seamless customer engagement."},
  { q: "What is DevBay vision?", a: "Become a global leader in intelligent automation and enterprise technology services."},
  { q: "What is DevBay contact email?", a: "info@devbay.ai"},
  { q: "What is DevBay phone number?", a: "+92 300 1234567"},
  { q: "Does DevBay work with startups?", a: "Yes, with flexible pricing and rapid MVP development."},

  // --- Services ---
  { q: "What services does DevBay offer?", a: "DevBay offers a complete range of IT and AI-driven services, including Web, App, and Software Development, Cloud Solutions, Data Analytics, and Cybersecurity. The company also provides ready-made IT systems such as CRM, ERP, LMS, HMS, SMS, and RMS, empowering businesses with smart, scalable, and high-performance digital solutions."},
  { q: "What is Web Development?", a: "At DevBay, we empower businesses with intelligent and beautifully designed web solutions. Our focus is on seamless design, smooth performance, and creating a lasting impact for every client. Because we believe your success starts with a strong, smart, and scalable digital presence."},
  { q: "What is App Development?", a: "Your app is more than just software — it’s your brand in the palm of your user’s hand. At DevBay, we create mobile applications that blend innovation with impact, ensuring smooth performance, elegant design, and real-world functionality. Whether you need a startup MVP or an enterprise-grade app, we deliver mobile solutions that scale with your business."},
  { q: "What is Software Development?", a: "Every business deserves software that works for them — not against them. At DevBay, we craft intelligent, user-friendly, and secure software solutions that drive productivity and growth. Whether it’s ERP, CRM, or a complete digital transformation, we deliver technology built to adapt, perform, and evolve with your business."},
  { q: "What is Data Analytics?", a: "Every number tells a story — and at DevBay, we help you understand it. Our team specializes in collecting, analyzing, and visualizing complex data to reveal patterns that drive success. Whether it’s optimizing performance, forecasting demand, or improving customer experience, our analytics solutions give you the clarity to act with confidence."},
  { q: "What is Cloud Solutions?", a: "The future of business is in the cloud — and DevBay makes that future seamless. We provide tailored cloud solutions that enable you to store, scale, and access data effortlessly while maintaining top-tier security and performance. Whether you need hybrid, private, or public cloud services, we ensure your organization stays agile, connected, and ready for growth."},
  { q: "What is Cyber Security?", a: "At DevBay, we protect what matters most — your data, your systems, and your reputation. Our comprehensive cybersecurity solutions safeguard your digital assets from evolving threats through advanced threat detection, network security, and data protection strategies. We don’t just defend; we build resilience — ensuring your business operates with confidence in a secure digital environment."},
  { q: "Does DevBay build AI chatbots?", a: "Yes, intelligent chatbots using NLP and RAG systems."},
  { q: "Does DevBay provide SEO?", a: "Yes, to improve online visibility and traffic."},

  // --- Technology & Process ---
  { q: "What technologies does DevBay use?", a: "Python, React, Node.js, Django, Laravel, Flutter, TensorFlow, AWS, Azure."},
  { q: "Does DevBay provide AI development?", a: "Yes, custom AI systems for chatbots, analytics, computer vision, and automation."},
  { q: "Does DevBay provide cloud deployment?", a: "Yes, deploy apps to AWS, Azure, or Google Cloud for scalability."},
  { q: "Does DevBay build custom chatbots?", a: "Yes, using NLP and RAG-based systems."},
  { q: "How long does a project take?", a: "2 weeks for MVPs to 6 months for enterprise systems."},
  { q: "How does DevBay ensure quality?", a: "Agile, QA testing, sprints, feedback, automation tools."},
  { q: "Does DevBay offer maintenance?", a: "Yes, continuous post-launch support and updates."},
  { q: "Does DevBay offer training?", a: "Yes, training sessions for clients on deployed systems."},
  { q: "How can I request a quote?", a: "Contact info@devbay.ai or use the website form."},
  { q: "What is DevBay pricing model?", a: "Hourly, fixed-cost, and dedicated resource models."},
  { q: "Does DevBay sign NDA?", a: "Yes, to protect client data and ideas."},

  // --- Projects ---
  { q:  "What is Malfex?", a: "PROJECT ORIGIN: DUBAI, UAE - Malfex is a groundbreaking forex trading platform that has revolutionized the industry by offering its users a unique advantage: zero trading fees. By eliminating trading fees, Malfex empowers traders of all levels to execute transactions without worrying about unnecessary costs eating into their profits. With a user friendly interface, cutting-edge technology, and a vast array of currency pairs to choose from, Malfex has quickly become the go-to platform for forex enthusiasts seeking transparency and affordability in their trading journey. Whether you’re a seasoned trader or a novice just entering the market, Malfex provides an exceptional trading experience that puts its users’ financial success at the forefront."},
  { q:  "What is CSD?", a: "PROJECT ORIGIN: ISLAMABAD/RAWALPINDI, PAKISTAN - CSD is the second largest retail store in Pakistan, has taken a significant leap forward in optimizing its business processes with the introduction of an innovative E-Commerce store and a robust retail management system. This strategic move aims to enhance the customer experience by providing a seamless online shopping platform while streamlining internal operations. The implementation of this cutting-edge technology reflects CSD’s commitment to staying at the forefront of retail innovation, ensuring that customers can access a wide range of products conveniently, while also bolstering the company’s overall performance and growth."},
  { q:  "What is Dialboxx?", a: "PROJECT ORIGIN: KARACHI - PAKISTAN, Dialboxx is a highly anticipated localized version of Shopify specifically tailored for the Pakistani market. It serves as an all-in-one e-commerce platform that empowers entrepreneurs and businesses to effortlessly set up, manage, and grow their online stores. Dialboxx offers a seamless and user-friendly experience for anyone who wants to launch their own Online E-Commerce Store. From secure payment gateways to customizable storefronts and localized delivery system, Dialboxx aims to revolutionize the way online businesses operate in Pakistan, enabling them to reach a wider audience and thrive in the digital era."},
  { q:  "What is Craftsconnect?", a: "PROJECT ORIGIN: TORONTO, CANADA - Craftsconnect is your ultimate solution for seamless home services in Toronto. With a simple tap, the innovative app connects you directly with trusted and skilled service providers, ensuring that your home projects are handled by professionals who understand your needs. Say goodbye to the hassle of finding reliable experts for your household tasks. Craftsconnect brings the power of convenience to your fingertips. Need a plumber, electrician, painter, or any other home service? The application offers an extensive network of experienced professionals ready to cater to your requirements."},
  { q:  "What is Mr Daze?", a: "PROJECT ORIGIN: RIYADH, SAUDI ARABIA - Navigate the app with simplicity and speed. Just choose what you need, set your delivery location, and watch as MrDaze takes care of the rest. From perishable goods to fragile packages, MrDaze takes pride in ensuring your deliveries arrive in the same condition they left. MrDaze isn’t just about deliveries – it’s about creating a seamless experience. Track your orders in real-time, receive notifications, and communicate directly with your delivery partner, all within the app. This level of transparency keeps you in the loop every step of the way."},
  { q:  "What is Kryptoconnect?", a: "PROJECT ORIGIN: BOSTON, USA - Kryptoconnect is an innovative and user-centric application designed to streamline and enhance your cryptocurrency investment journey. Seamlessly combining advanced portfolio management features with peer-to-peer (P2P) trading capabilities, Krptoconnect empowers users to navigate the dynamic world of cryptocurrencies with confidence and ease. With Krptoconnect’s comprehensive portfolio management tools, you can effortlessly monitor your crypto holdings, track their performance in real-time, and gain valuable insights through intuitive visualizations."},

  // --- Ready-Made Solutions ---
  { q: "Tell me about DevBay ready-made solutions?", a: "DevBay’s Ready-Made Solutions are fully developed IT systems for CRM, ERP, LMS, HMS, SMS, RMS, etc."},
  { q: "What is DevBay CRM?", a: "DevBay CRM is an all-in-one customer relationship management solution with automation and analytics."},
  { q: "Does DevBay CRM track customer history?", a: "Yes, all activities are logged and viewable by authorized users."},
  { q: "What is DevBay ERP?", a: "DevBay ERP enables smarter decision-making and productivity across business levels."},
  { q: "What is DevBay LMS?", a: "DevBay LMS is a cloud-based learning management system for courses, progress tracking, and live classes."},
  { q: "What is DevBay HMS?", a: "DevBay HMS digitizes hospital operations including patient management, billing, insurance, and doctor scheduling."},
  { q: "What is DevBay SMS?", a: "DevBay SMS is a school management system for attendance, grades, parent portals, and fee collection."},
  { q: "What is DevBay PMS?", a: "DevBay PMS helps property owners manage properties, tenants, invoices, and automation."},
  { q: "What is DevBay RMS?", a: "DevBay RMS simplifies restaurant operations, orders, billing, POS, online orders, and analytics."},

  // ... (Add remaining 200+ Q&A items in the same format)
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

// Dynamic polite fallback responses
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

    // if the best score is too low, fallback
    if (bestMatch.score < 0.4) {
        bestMatch.answer = getFallbackResponse();
    }

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

        // Always scroll down as new text appears
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
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom on open
});
closeBtn.addEventListener("click", () => { chatbotContainer.style.display = "none"; });

// ========================
// Send Message
// ========================
submitBtn.addEventListener("click", () => {
    const userText = inputBox.value.trim();
    if (!userText) return;

    // User message
    const userDiv = document.createElement("div");
    userDiv.className = "userMsg";
    userDiv.textContent = userText;
    chatBox.appendChild(userDiv);

    // Bot response
    const answerText = findAnswer(userText);
    const botDiv = document.createElement("div");
    botDiv.className = "botMsg";
    chatBox.appendChild(botDiv);

    typeAnswer(answerText, botDiv);

    // Scroll smoothly to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    inputBox.value = "";
    inputBox.focus();
});

inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") submitBtn.click();
});


