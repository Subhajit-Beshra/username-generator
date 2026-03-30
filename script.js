const slider = document.getElementById("countSlider");
const countValue = document.getElementById("count-value");

if (slider && countValue) {
    countValue.textContent = slider.value;
    slider.addEventListener("input", function() {
        countValue.textContent = slider.value;
    });
}
document.querySelectorAll(".dropdown").forEach(t =>{
  t.addEventListener('click', () =>{
    document.querySelectorAll(".dropdown").forEach(x =>{
      x.classList.remove('active');
    })
    t.classList.add('active');
  })
})
document.querySelectorAll(".material-symbols-outlined").forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll(".material-symbols-outlined").forEach(x => {
      x.classList.remove('active');
    })
    t.classList.add('active');
  })
})
function generateUsernames(){
  document.getElementsByClassName("title-2")[0].style.display = "none";
  document.getElementsByClassName("loader")[0].style.display = "block";
  setTimeout(() =>{
      document.getElementsByClassName("loader")[0].style.display = "none";
      document.getElementsByClassName("output-results")[0].style.display = "block";
  }, 1000);
}
function copyUsername(id){
  alert("Username Copied: ");
}