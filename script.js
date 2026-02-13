// Typing effect
const text = "The day you walked into my life was the day my story truly began. Since then, every heartbeat whispers your name, every dream has you in it, and every future I imagine has you standing beside me. You are my peace in chaos, my light in darkness, and my forever in this temporary world. I cannot imagine a single tomorrow without you in it. And today, from the deepest part of my heart, I want to ask you something very special...";
let i=0;
function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,40);
}}
typing();

// // Navigation
// function nextSection(num){
//   document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
//   document.getElementById('section'+num).classList.add('active');
//   document.body.style.overflow=(num==='4' || num===4)?'auto':'hidden';
//   document.getElementById("bgMusic").play();
// }

// NO button moves
const noBtn=document.getElementById("noBtn");
noBtn.addEventListener("mouseover",()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
});

// Floating cursor
const cursor=document.getElementById("cursor");
document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.pageX+"px";
cursor.style.top=e.pageY+"px";
});

let reasonIndex = 0;

function showReasons() {
  const reasons = document.querySelectorAll(".reason");
  
  if (reasonIndex < reasons.length) {
    reasons[reasonIndex].classList.add("show");
    reasonIndex++;
    setTimeout(showReasons, 1800);
  }
}


// Wedding countdown
const weddingDate = new Date("May 10, 2026 00:00:00").getTime();
setInterval(()=>{
const now = new Date().getTime();
const distance = weddingDate - now;
const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
const seconds = Math.floor((distance % (1000*60)) / 1000);
document.getElementById("countdown").innerHTML =
days + " Days " + hours + " Hours " + minutes + " Min " + seconds + " Sec";
},1000);

function showReasons() {
  const reasons = document.querySelectorAll(".reason");
  
  if (reasonIndex < reasons.length) {
    reasons[reasonIndex].classList.add("show");
    reasonIndex++;
    setTimeout(showReasons, 1800); // slow romantic timing
  }
}

function nextSection(num){
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  const target = document.getElementById('section' + num);
  if(target){
    target.classList.add('active');
  }

  // Enable scroll only for memory section
  if(num == 4){
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  document.getElementById("bgMusic").play();

  // Start reasons animation when section 3 opens
  if(num == 3){
    reasonIndex = 0;
    const reasons = document.querySelectorAll(".reason");
    reasons.forEach(r => r.classList.remove("show"));
    showReasons();
  }
}


