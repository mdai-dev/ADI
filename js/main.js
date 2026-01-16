function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.classList.toggle("active");
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");
  const question = input.value.trim();

  if (question === "") return;

  // Add User Message
  addMessage(question, "user");
  input.value = "";

  // Simulate AI Delay
  const loadingId = addLoading();

  setTimeout(() => {
    removeLoading(loadingId);
    const response = getAIResponse(question);
    addMessage(response, "bot");
  }, 800);
}

function addMessage(text, sender) {
  const messages = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = `msg ${sender}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function addLoading() {
  const messages = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "msg bot";
  div.textContent = "...";
  div.id = "loading-" + Date.now();
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div.id;
}

function removeLoading(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function getAIResponse(input) {
  const lower = input.toLowerCase();

  if (
    lower.includes("launch") ||
    lower.includes("event") ||
    lower.includes("when") ||
    lower.includes("date")
  ) {
    return "The Virtual Launch is on January 22, 2026, at 1:00 PM CST live via Zoom. You can register for free using the button above! 🎉";
  }
  if (
    lower.includes("price") ||
    lower.includes("cost") ||
    lower.includes("tier") ||
    lower.includes("membership") ||
    lower.includes("join")
  ) {
    return "We have 3 tiers: Horizon ($200/yr), Summit ($500/yr), and Pinnacle ($750/yr). Pinnacle also offers a 'Two Representatives' options for $1,250/yr. Founding rates are available!";
  }
  if (
    lower.includes("what is adi") ||
    lower.includes("mission") ||
    lower.includes("purpose") ||
    lower.includes("who")
  ) {
    return "ADI (Artistic Directors International) is a global network dedicated to empowering artistic leaders through connection, education, and resources. 🌍";
  }
  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hello there! How can I help you today?";
  }
  return "I'm still learning! Check the sections above for details on Membership and the Launch event, or ask me something else about ADI.";
}

function toggleBio(id, btn) {
  const extra = document.getElementById(id);
  if (extra.style.display === "none") {
    extra.style.display = "block";
    btn.textContent = "Show Less";
  } else {
    extra.style.display = "none";
    btn.textContent = "Read More";
  }
}
