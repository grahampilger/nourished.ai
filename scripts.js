document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.send-button');
    const questionnaireButton = document.querySelector('.questionnaire-button');
    const investorButton = document.querySelector('.investor-button');
    const beginPitchButton = document.querySelector('.begin-pitch-button');
    const solutionButton = document.querySelector('.solution-button');
    const problemButton = document.querySelector('.problem-button');

function appendMessage(text, className) {
    const message = document.createElement('div');
    message.classList.add('message', className);
    message.innerHTML = text.replace(/\n/g, '<br>');
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

    questionnaireButton.addEventListener('click', () => {
    chatInput.value = 'Questionnaire';
    handleSendMessage(true);
    questionnaireButton.style.display = 'none';
    investorButton.style.display = 'none';

    // Show the "Begin the pitch" button after 3 seconds
    setTimeout(() => {
        beginPitchButton.style.display = 'block';
    }, 3000);
});

investorButton.addEventListener('click', () => {
    chatInput.value = 'Investor';
    handleSendMessage(true);
    questionnaireButton.style.display = 'none';
    investorButton.style.display = 'none';

    // Show the "Begin the pitch" button after 3 seconds
    setTimeout(() => {
        beginPitchButton.style.display = 'block';
    }, 3000);
});

beginPitchButton.addEventListener('click', () => {
    displayContent(investorPitch[0]);
    beginPitchButton.style.display = 'none';
    setTimeout(() => {
        problemButton.style.display = 'block';
    }, 3000);
});

problemButton.addEventListener('click', () => {
    displayContent(investorPitch[1]);
    problemButton.style.display = 'none';
    setTimeout(() => {
        solutionButton.style.display = 'block';
    }, 3000);
});

    function fetchSampleProductRecommendations(query) {
        const queryLower = query.toLowerCase();
        const products = [
            {
        keyword: ["muscle", "lifting", "gym", "protein"],
        name: "Nourished.ai reccomends Optimum Nutrition Gold Standard 100% Whey Protein Powder",
        description: "Whey protein powder for muscle growth and recovery",
        link: "https://www.amazon.com/dp/B000QSNYGI",
        citation: "Davies, R. W., Carson, B. P., & Jakeman, P. M. (2018). The effect of whey protein supplementation on the temporal recovery of muscle function following resistance training: A systematic review and meta-analysis. Nutrients, 10(2), 221.",
        justification: "Whey protein supplementation has been shown to improve muscle function recovery after resistance training."
    },
    {
        keyword: ["heart", "cardiovascular"],
        name: "Nourished.ai reccomends Nature's Bounty Fish Oil",
        description: "Fish oil contains omega-3 fatty acids that support heart health and have anti-inflammatory properties.",
        safety: "Generally safe when used as directed. Consult a healthcare professional before use if you are pregnant, nursing, or have a medical condition.",
        citation: "https://www.ncbi.nlm.nih.gov/pubmed/18541598",
        justification: "Fish oil supplements support heart health due to their high content of omega-3 fatty acids, specifically EPA and DHA. These fatty acids help reduce inflammation, lower triglyceride levels, and improve blood vessel function. They also help maintain a regular heartbeat and prevent blood clots. Collectively, these benefits contribute to a reduced risk of developing cardiovascular diseases.",
        link: "https://www.amazon.com/Natures-Bounty-Omega-3s-Release-Softgels/dp/B000NPYY04"
    },
    {
        keyword: ["energy", "healthy oil"],
        name: "Nourished.ai reccomends Viva Naturals Organic Extra Virgin Coconut Oil",
        description: "Coconut oil is rich in medium-chain triglycerides (MCTs) that can be easily absorbed and used for energy.",
        safety: "Generally safe when used as directed. Consult a healthcare professional before use if you are pregnant, nursing, or have a medical condition.",
        citation: "https://www.ncbi.nlm.nih.gov/pubmed/29387131",
        justification: "This is an organic, extra-virgin coconut oil with positive reviews.",
        link: "https://www.amazon.com/Viva-Naturals-Organic-Virgin-Coconut/dp/B00DS842HS"
    },
    {
        keyword: ["memory", "cognitive"],
        name: "Nourished.ai recommends Neuriva Original Brain Performance Supplement",
        description: "Supports memory, focus, and overall cognitive function with clinically proven ingredients.",
        safety: "Generally safe when used as directed. Consult a healthcare professional before use if you are pregnant, nursing, or have a medical condition.",
        citation: "https://www.ncbi.nlm.nih.gov/pubmed/23803881",
        justification: "Neuriva contains ingredients that are known to improve neuronal communication, enhancing memory and cognitive performance.",
        link: "https://www.amazon.com/Neuriva-Original-Clinically-Ingredients-Performance/dp/B07NDN7WSC"
    },
    {
        keyword: ["relaxation", "sleep", "recovery"],
        name: "Nourished.ai reccomends Doctor's Best High Absorption Magnesium",
        description: "Magnesium is involved in various physiological processes, including sleep health and muscle relaxation.",
        safety: "Generally safe when used as directed. Consult a healthcare professional before use if you are pregnant, nursing, or have a medical condition.",
        citation: "https://www.ncbi.nlm.nih.gov/pubmed/19621856",
        justification: "It is a high-absorption magnesium supplement with positive reviews.",
        link: "https://www.amazon.com/Doctors-Best-Absorption-Magnesium-Glycinate/dp/B000BD0RT0"
    },

        ];  

    return products.filter(product => product.keyword.some(keyword => queryLower.includes(keyword)));
    }
let lastQueryProducts = [];
function createLoadingMessage() {
    const loadingMessage = document.createElement('div');
    loadingMessage.classList.add('message', 'bot', 'loading-message');
    loadingMessage.innerHTML = 'thinking...';
    return loadingMessage;
}

function handleSendMessage(isInvestorMessage = false) {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    appendMessage(userMessage, 'user');
    chatInput.value = '';

    const loadingMessage = createLoadingMessage();
    chatMessages.appendChild(loadingMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        chatMessages.removeChild(loadingMessage);

        if (isInvestorMessage) {
            const welcomeMessage = "Welcome, esteemed investor! We appreciate your interest in Nourished.ai. We'll provide you with an overview of our company and our innovative approach to personalized health and wellness. Please feel free to ask any questions as we go through the pitch.";
            appendMessage(welcomeMessage, 'bot');
            } else if (userMessage.toLowerCase().includes("begin the pitch")) {
                const problemSection = "The Problem: The health and wellness market is flooded with countless products, making it difficult for consumers to navigate and find the right solutions tailored to their needs. Individuals often waste time, money, and effort on suboptimal products, leading to frustration and poor health outcomes.";
                appendMessage(problemSection, 'bot');
            } else if (userMessage.toLowerCase().includes("the solution")) {
                const solutionSection = "Nourished.ai offers a personalized AI-driven health and wellness shopping experience. Our platform uses a chatbot to engage users, gather information about their health concerns, and provide tailored recommendations for products that can optimize their well-being. With Nourished.ai, users receive a seamless, user-friendly, and effective solution for their health needs.";
                appendMessage(solutionSection, 'bot');
            } else if (userMessage.toLowerCase().includes("The Market")) {
                const solutionSection = "The global health and wellness market is valued at over $4 trillion, with a significant portion driven by consumer demand for personalized solutions. With increasing interest in health optimization and a growing number of product offerings, the market presents a substantial opportunity for Nourished.ai to make an impact.";
                appendMessage(solutionSection, 'bot');
            } else if (userMessage.toLowerCase().includes("why") || userMessage.toLowerCase().includes("safety") || userMessage.toLowerCase().includes("citation") || userMessage.toLowerCase().includes("mechanism")) {
                const productMessage = lastQueryProducts.map(product => {
    let message = "";
    if (userMessage.toLowerCase().includes("why")) {
        if (product.justification) {
            message += `Why: ${product.justification} `;
        }
    }
    if (userMessage.toLowerCase().includes("safety")) {
        if (product.safety) {
            message += `Safety: ${product.safety} `;
        }
    }
    if (userMessage.toLowerCase().includes("citation")) {
        if (product.citation) {
            message += `Citation: <a href="${product.citation}" target="_blank">${product.citation}</a> `;
        }
    }
    if (userMessage.toLowerCase().includes("mechanism")) {
        if (product.mechanism) {
            message += `Mechanism: ${product.mechanism} `;
        }
    }
    return message;
}).join('<br>');
appendMessage(productMessage, 'bot');
        } else {
            const sampleProducts = fetchSampleProductRecommendations(userMessage);
            lastQueryProducts = sampleProducts;

            if (sampleProducts.length > 0) {
                const productMessage = sampleProducts.map(product => `${product.name}: ${product.description} (<a href="${product.link}" target="_blank">Purchase Link</a>)`).join('<br>');
                appendMessage(productMessage, 'bot');
            } else {
                appendMessage("I couldn't find any products related to your query. Please try again with a different keyword.", 'bot');
            }
        }
    }, 1500);
}



    sendButton.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    });
   
// Add the event listener for the "Begin the pitch" button here
beginPitchButton.addEventListener('click', () => {
    chatInput.value = "Begin the pitch";
    handleSendMessage();
});

    appendMessage("Welcome to Nourished.ai! Please enter your health or wellness concern, and we'll provide you with personalized product recommendations.", 'bot');
});
