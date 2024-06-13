document.addEventListener("DOMContentLoaded", function () {
  const knowDestinationRadio = document.querySelectorAll(
    'input[name="knowDestination"]'
  );
  const nextStep1Button = document.getElementById("nextStep1");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");
  const step1Hide = document.getElementById("step1Hide");
  const prevStep1Button = document.getElementById("prevStep1");
  const prevStep2Button = document.getElementById("prevStep2");
  const nextStep2Button = document.getElementById("nextStep2");
  const finalSubmitBtn = document.getElementById("finalSubmit");

  // Show step 1 and hide step 2 initially
  step1.style.display = "block";
  step2.style.display = "none";
  step3.style.display = "none";

  knowDestinationRadio.forEach(function (radio) {
    radio.addEventListener("change", function () {
      nextStep1Button.disabled = false;
      nextStep1Button.style.backgroundColor = "#964233";
      nextStep1Button.style.color = "white";
      if (this.value === "yes") {
        // Show step 2 with checkboxes
        step1Hide.innerHTML = `
        <div class="step1-hide-wrapper">
        <div>
          <label class="q-question">What City Would you Like to Visit?</label>
        </div>
        <div class="mt-8 step1-item-wrapper">
          <div class="step1-item-inner-wrapper">
            <div class="flex items-center justify-start gap-child-12px">
              <input
                class="checkbox"
                type="checkbox"
                name="destination[]"
                value="Marrakech"
              />
              <label class="choice-text" for="Marrakech">Marrakech</label>
            </div>
      
            <div class="flex items-center justify-start gap-child-12px">
              <input
                class="checkbox"
                type="checkbox"
                name="destination[]"
                value="Casablanca"
              />
              <label class="choice-text" for="Casablanca">Casablanca</label>
            </div>
            <div class="flex items-center justify-start gap-child-12px">
              <input
                class="checkbox"
                type="checkbox"
                name="destination[]"
                value="Rabat"
              />
      
              <label class="choice-text" for="Rabat">Rabat</label>
            </div>
      
            <div class="flex items-center justify-start gap-child-12px">
              <input
                class="checkbox"
                type="checkbox"
                name="destination[]"
                value="Fes"
              />
      
              <label class="choice-text" for="Fes">Fes</label>
            </div>
      
            <div class="flex items-center justify-start gap-child-12px">
              <input
                class="checkbox"
                type="checkbox"
                name="destination[]"
                value="Chefchaouen"
              />
      
              <label class="choice-text" for="Chefchaouen">Chefchaouen</label>
            </div>
      
            <div class="flex items-center justify-start gap-child-12px">
              <input
                class="checkbox"
                type="checkbox"
                name="destination[]"
                value="Agadir"
              />
      
              <label class="choice-text" for="Agadir">Agadir</label>
            </div>
          </div>
        </div>
      </div>
              `;
        document.getElementById("step1Hide").style.display = "block";
      } else {
        // Show next step
        document.getElementById("step1Hide").style.display = "none";
      }
    });
  });

  nextStep1Button.addEventListener("click", function (event) {
    event.preventDefault();
    step1.style.display = "none";
    step2.style.display = "block";
  });

  prevStep1Button.addEventListener("click", function (event) {
    event.preventDefault();
    step1.style.display = "block";
    step2.style.display = "none";
  });

  const travelTypeSelect = document.getElementById("travelType");
  const experienceCheckboxes = document.querySelectorAll(
    'input[name="experience[]"]'
  );

  [travelTypeSelect, ...experienceCheckboxes].forEach(function (element) {
    element.addEventListener("change", function () {
      let valid = true;
      if (element === travelTypeSelect) {
        valid = element.value !== "";
      } else {
        valid = Array.from(experienceCheckboxes).some(
          (checkbox) => checkbox.checked
        );
      }
      nextStep2Button.disabled = !valid;
      nextStep2Button.style.backgroundColor = "#964233";
      nextStep2Button.style.color = "white";
    });
  });

  prevStep2Button.addEventListener("click", function (event) {
    event.preventDefault();
    step2.style.display = "block";
    step3.style.display = "none";
  });

  nextStep2Button.addEventListener("click", function (event) {
    event.preventDefault();
    step2.style.display = "none";
    step3.style.display = "block";
  });
});
