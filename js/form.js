
        $(document).ready(function () {
            $("#hide").click(function () {
               $(".main-box-atm").hide();
           });
           $("#show").click(function () {
               $(".main-box-atm").show();
           });
       });
       function getInfo() {
           //name
           var name=document.getElementById("name").value;
           if(name==""){
            document.getElementById("erroName").innerHTML="Enter name"
           }else{
            document.getElementById("erroName").innerHTML = ""
           }
           //telephone
           var telephone = document.getElementById("telephone").value;
           if (telephone == "") {
               document.getElementById("erroTelephone").innerHTML = "Enter telephone"
           } else {
               document.getElementById("erroTelephone").innerHTML = ""
           }
           //email
           var email = document.getElementById("email").value;
           if (email == "") {
               document.getElementById("erroEmail").innerHTML = "Enter Email"
           } else {
               document.getElementById("erroEmail").innerHTML = ""
           }
           //address
           var address = document.getElementById("address").value;
           if (address == "") {
               document.getElementById("erroAddress").innerHTML = "Enter address"
           } else {
               document.getElementById("erroAddress").innerHTML = ""
           }
           //code
           var code = document.getElementById("code").value;
           if (code == "") {
               document.getElementById("erroCode").innerHTML = "Enter code"
           } else {
               document.getElementById("erroCode").innerHTML = ""
           }
           //card
            var card = document.getElementById("card").value;
           if (card == "") {
               document.getElementById("erroCard").innerHTML = "Enter name"
           } else {
               document.getElementById("erroCard").innerHTML = ""
           }
           //number
           var number = document.getElementById("number").value;
           if (number == "") {
               document.getElementById("erroNumber").innerHTML = "Enter card number"
           } else {
               document.getElementById("erroNumber").innerHTML = ""
           }
           
       }