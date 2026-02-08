let currentStep = 0;

function openTab(tabId, event) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  contents.forEach(content => content.classList.remove("active"));
  buttons.forEach(button => button.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.currentTarget.classList.add("active");
}

const steps = document.querySelectorAll(".process-card");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.remove("active");
    if (i === index) {
      step.classList.add("active");
    }
  });
}

function nextStep() {
  currentStep = (currentStep + 1) % steps.length;
  showStep(currentStep);
}

function prevStep() {
  currentStep = (currentStep - 1 + steps.length) % steps.length;
  showStep(currentStep);
}

showStep(currentStep);
