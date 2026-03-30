const slider = document.getElementById("countSlider");
const countValue = document.getElementById("count-value");

if (slider && countValue) {
    countValue.textContent = slider.value;
    slider.addEventListener("input", function() {
        countValue.textContent = slider.value;
    });
}

function toggleDarkMode() {
      document.body.classList.toggle("dark");
    }

    function generateUsername() {
      const mode = document.getElementById("mode").value;
      const input = document.getElementById("inputText").value.trim();
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = ""; // Clear previous

      let suggestions = [];

      if (mode === "normal" && input) {
        suggestions = [
          input + "_123",
          input + "Pro",
          "The_" + input,
          input + "_X",
          input + "Official"
        ];
      } else if (mode === "hard" && input) {
        suggestions = [
          input + "Master",
          input + "King",
          input + "_Zone",
          "iAm" + input,
          input + "_HQ"
        ];
      } else if (mode === "harder") {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (let i = 0; i < 5; i++) {
          let randomName = "";
          for (let j = 0; j < 10; j++) {
            randomName += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          suggestions.push(randomName);
        }
      } else {
        suggestions = ["⚠️ Please enter a name or keyword"];
      }

      suggestions.forEach(name => {
        const div = document.createElement("div");
        div.className = "username";
        div.textContent = name;
        resultsDiv.appendChild(div);
      });
    }