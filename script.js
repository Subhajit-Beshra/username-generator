const slider = document.getElementById("countSlider");
const countValue = document.getElementById("count-value");
const styleButtons = document.querySelectorAll(".dropdown");
const outputItems = document.querySelectorAll(".output-results-item");
const loader = document.querySelector(".loader");
const results = document.querySelector(".output-results");
const titleIntro = document.querySelector(".title-2");

// Slider
if (slider && countValue) {
  countValue.textContent = slider.value;
  slider.addEventListener("input", () => {
    countValue.textContent = slider.value;
  });
}
//style buttons
document.querySelectorAll(".dropdown").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
   });
});

// Favorite icon toggle
document.querySelectorAll(".material-symbols-outlined").forEach(icon => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
});

// Generate Usernames
async function generateUsernames() {
  const title = document.querySelector(".title-2");
  const loader = document.querySelector(".loader");
  const results = document.querySelector(".output-results");

  const activeStyle = document.querySelector(".dropdown.active");
  const checkedOptions = document.querySelectorAll('input[name="options"]:checked');

  if(!activeStyle){
    alert("Please select one style down below!");
    return;
  }

  if (checkedOptions.length === 0) {
  alert("Please select at least one option.");
  return;
  }
    title.style.display = "none";
    loader.style.display = "block";
    results.style.display = "none";
  
  setTimeout(() => {
    loader.style.display = "none";
    results.style.display = "block";
  },2000);

}


// Copy Function
function copyUsername(id) {
  const text = document.querySelector(`#${id} p`).textContent;

  navigator.clipboard.writeText(text).then(() => {
    alert("Copied: " + text);
  });
}
