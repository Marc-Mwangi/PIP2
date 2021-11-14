akanNamesboy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yao", "Kofi", "Kwame"];
akanNamesgirl = ["Akosua", "Adwoa", "Abena","Akua","Yaa", "Afua", "Amma"];
days = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"];
var gen ;
const form = document.getElementById("data");
 form.addEventListener("submit", (e) => {
     e.preventDefault();
     var date = document.getElementById("birthday").value ;
     var boy = document.getElementById("Male").value ;
     var girl = document.getElementById("Female").value;
     var gender =form[0].value;
     for(var i = 0; i < form.length; i++){
         if(form[i].type ==="radio" && form[i].checked)
         gen = form[i].value;
         console.log(gen);
         console.log(date);
     }
    
 })

