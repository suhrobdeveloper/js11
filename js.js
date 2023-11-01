let div1= document.querySelector(".circle1")
let div2 = document.querySelector(".circle2");
let div3 = document.querySelector(".circle3");
// let showTime=document.querySelector("clock")

setInterval(()=>{
      div1.classList.toggle("circle1dark");
    
},8000);
setInterval(() => {
  div2.classList.toggle("circle2dark");
}, 4000);
setInterval(() => {
  div3.classList.toggle("circle3dark");
}, 16000);

// setTimeout(() => {
    
// }, 5_000);



function showTime() {
  let date = new Date();
  let h = date.getHours(); 
  let m = date.getMinutes(); 
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  if (h<10 ){
    h="0"+ h
  }
  else{
    h=h;
  }
   if (m< 10) {
     m= "0" + m
   } else {
     m= m
   }
    if (s < 10) {
      s = "0" + s;
    } else {
      s = s;
    }
//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("myclock").innerText=time;
  document.getElementById("myclock").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();