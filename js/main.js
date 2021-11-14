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
     for(var i = 0; i < 2; i++){
         if(form[i].type ==="radio" && form[i].checked)
         gen = form[i].value;
         if (form[0].checked==true)
         gen = "male" ;
         else if( form[1].checked==true)
         gen = "female"
         console.log(gen);
         
     }
    
 })

