// let calculateButton=document.getElementById("calculateButton");
// let ageDisplay=document.getElementById("ageDisplay");
// let timeDisplay=document.getElementById("timeDisplay");
//let reset=document.getElementById("reset");








document.getElementById("calculateButton").addEventListener("click", function () {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

   
    const ageInMilliseconds = today - birthdate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear()-1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1; 

  
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

  
    document.getElementById("ageDisplay").textContent = `${years} years, ${months} months, ${days} days`;
    document.getElementById("timeDisplay").textContent = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    
    document.getElementById("results").style.display = "block";


    
}); 
myreset.addEventListener("click", function () {
    myinput.value = ""; 
    mysubmit.disabled = true; 
  });