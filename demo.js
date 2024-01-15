var registerForm =document.querySelector(".registerForm");

registerForm.onsubmit =function(e){
    e.preventDefault();
    var element=e.target.elements
    var input1 =element['amount'].value;
    var selector=element['exchange'].value;
    if(selector=='dollar')
    {
        document.querySelector(".result").textContent=input1/3.6;
    }
    if(selector=='dinar')
    {
        document.querySelector(".result").textContent=input1/5;
    }
    if(selector=='nis')
    {
        document.querySelector(".result").textContent=input1;
    }

   

}


 
