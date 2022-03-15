const results= document.getElementById("results");

const clickMe=()=>{
  setTimeout(()=>{
  alert("Please contact this number-(1800-180-9632)");
    },0);
}

function bookMe(){
    alert("Please wait your Dr call on waiting .....");
setTimeout(()=>{
    alert("Your appointment is Book now");
    results.innerHTML="Dr. Ajju Agarwal";
},2000);

}
