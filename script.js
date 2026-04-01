// --- DOM Elements ---
const slider = document.getElementById("countSlider");
const countValue = document.getElementById("count-value");
const styleButtons = document.querySelectorAll(".dropdown");
const outputItems = document.querySelectorAll(".output-results-item");
const loader = document.querySelector(".loader");
const results = document.querySelector(".output-results");
const titleIntro = document.querySelector(".title-2");

// --- Slider Display ---
if (slider && countValue) {
  countValue.textContent = slider.value;
  slider.addEventListener("input", () => {
    countValue.textContent = slider.value;
  });
}

// --- Style Selection ---
styleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    styleButtons.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
  });
});

// --- Favorite Icon Toggle ---
document.querySelectorAll(".material-symbols-outlined").forEach(icon => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
});

// --- Generate Usernames ---
async function generateUsernames() {
  const title = document.querySelector(".title-2");

  const activeStyle = document.querySelector(".dropdown.active");
  const checkedOptions = document.querySelectorAll('input[name="options"]:checked');

  if (!activeStyle) {
    alert("Please select a style!");
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

    const style = activeStyle.dataset.style;
    const addNumbers = document.getElementById("option-numbers").checked;
    const addSymbols = document.getElementById("option-symbols").checked;
    const addUnderscores = document.getElementById("option-underscore").checked;
    const length = parseInt(slider.value);

    const chars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    const styles = {
      anime: ["naruto", "sakura", "goku", "luffy", "eren"],
      gamer: ["xXProGamerXx", "NoobSlayer69", "EliteSniper420", "PixelWarrior", "GameOverlord"],
      dev: ["CodeMaster", "BugHunter", "PixelPusher", "ScriptKiddie", "DebugNinja"],
      aesthetic: ["LunarDreams", "PastelVibes", "VintageSoul", "EtherealGlow", "RetroWave"],
      dark: ["ShadowReaper", "NightStalker", "DarkVortex", "GrimPhantom", "EclipseWraith"],
      random: ["alpha", "beta", "omega", "nova", "zen"]
    };

    const words = styles[style] || styles["random"];
    const items = document.querySelectorAll(".output-results-item p");

    items.forEach(element => {
      // --- Step 1: Pick base word ---
      let name = words[Math.floor(Math.random() * words.length)];

      // --- Step 2: Adjust length with letters ---
      while (name.length < length) {
        name += chars[Math.floor(Math.random() * chars.length)];
      }
      name = name.slice(0, length);

      // --- Step 3: Randomly insert numbers, symbols, underscores ---
      let arr = name.split("");

      if (addNumbers) {
        const pos = Math.floor(Math.random() * (arr.length + 1));
        arr.splice(pos, 0, numbers[Math.floor(Math.random() * numbers.length)]);
      }
      if (addSymbols) {
        const pos = Math.floor(Math.random() * (arr.length + 1));
        arr.splice(pos, 0, symbols[Math.floor(Math.random() * symbols.length)]);
      }
      if (addUnderscores) {
        const pos = Math.floor(Math.random() * (arr.length + 1));
        arr.splice(pos, 0, "_");
      }

      name = arr.join("");

      // --- Step 4: Show Result ---
      element.textContent = name;
    });
  }, 2000);
}

// --- Copy Function ---
function copyUsername(id) {
  const text = document.querySelector(`#${id} p`).textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied: " + text);
  });
}