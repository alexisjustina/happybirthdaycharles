window.addEventListener("click", function(){
        document.getElementById("bgMusic").play();
    }, {once: true});

    function goNext() {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'flex';
}
const note = document.querySelector(".tap-note");
const moreSurpriseBtn = document.querySelector(".More");
const body = document.querySelector("body");
function openEnvelope(el) {
  el.classList.toggle('open');
  note.classList.toggle("tap-note2");
  moreSurpriseBtn.classList.toggle("display");
}
const page3 = document.querySelector(".page3");
moreSurpriseBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  page3.style.display = 'flex';
  document.getElementById('page2').style.display = 'none';
})