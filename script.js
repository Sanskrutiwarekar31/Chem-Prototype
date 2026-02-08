// -------------------- TAB NAVIGATION --------------------
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.classList.remove("active-section"));

  document.getElementById(sectionId).classList.add("active-section");

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  event.target.classList.add("active");
}

// -------------------- CHEMICAL FILTER --------------------
function filterChemicals(type) {
  const cards = document.querySelectorAll(".chem-card");
  const filters = document.querySelectorAll(".filter");

  filters.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    if (type === "all" || card.classList.contains(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// -------------------- PROCESS STEPS --------------------
const steps = [
  {
    title: "Measure Castor Oil",
    desc: "Measure 10 ml castor oil in a clean beaker.",
    anim: "🧴 ➜ 🧪",
    duration: "1–2 min"
  },
  {
    title: "Prepare NaOH Solution",
    desc: "Carefully dissolve NaOH in distilled water.",
    anim: "⚠️ ➜ 💧",
    duration: "2–3 min"
  },
  {
    title: "Heat the Oil",
    desc: "Heat the castor oil gently using a water bath.",
    anim: "🔥 ➜ 🧴",
    duration: "3–5 min"
  },
  {
    title: "Mix Oil and NaOH",
    desc: "Slowly add NaOH solution to the oil while stirring.",
    anim: "🧴 + 💧",
    duration: "3–4 min"
  },
  {
    title: "Continuous Stirring",
    desc: "Stir continuously until mixture thickens.",
    anim: "🔄",
    duration: "4–5 min"
  },
  {
    title: "Add Salt Solution",
    desc: "Add NaCl solution to adjust thickness.",
    anim: "🧂 ➜ 🧴",
    duration: "1–2 min"
  },
  {
    title: "Cooling",
    desc: "Allow the mixture to cool down naturally.",
    anim: "❄️",
    duration: "5 min"
  },
  {
    title: "Add Fragrance & Color",
    desc: "Add fragrance oil and coloring agent.",
    anim: "🌸 + 🎨",
    duration: "1–2 min"
  },
  {
    title: "Final Product",
    desc: "Your liquid soap is ready to use!",
    anim: "🧼✨",
    duration: "—"
  }
];

let currentStep = 0;
let autoPlayInterval = null;

function updateProcessUI() {
  const step = steps[currentStep];

  document.getElementById("step-title").innerText = step.title;
  document.getElementById("step-desc").innerText = step.desc;
  document.getElementById("animation").innerText = step.anim;
  document.querySelector(".duration").innerText = "⏱ Duration: " + step.duration;
  document.getElementById("step-indicator").innerText =
    `Step ${currentStep + 1} of ${steps.length}`;

  const progressPercent = ((currentStep + 1) / steps.length) * 100;
  document.getElementById("progress-fill").style.width = progressPercent + "%";

  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentStep].classList.add("active");
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateProcessUI();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    updateProcessUI();
  }
}

function goToStep(index) {
  currentStep = index;
  updateProcessUI();
}

function resetProcess() {
  currentStep = 0;
  updateProcessUI();
  stopAutoPlay();
}

function autoPlay() {
  stopAutoPlay();
  autoPlayInterval = setInterval(() => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateProcessUI();
    } else {
      stopAutoPlay();
    }
  }, 2000);
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
}

// Initial UI load
updateProcessUI();
