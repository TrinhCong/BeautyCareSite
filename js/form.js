
        $(document).ready(function () {
            $("#hide").click(function () {
               $(".main-box-atm").hide();
           });
           $("#show").click(function () {
               $(".main-box-atm").show();
           });

           $("#form").submit(function(){
            var name=$("#name").val();
            if(name==""){
             $("#erroName").html(" * Enter name");
            }else{
             $("#erroName").html(" *");
            }
            //telephone
            var telephone = $("#telephone").val();
            if (telephone == "") {
                $("#erroTelephone").html(" * Enter telephone");
            } else {
                $("#erroTelephone").html(" *");
            }
            //email
            var email = $("#email").val();
            if (email == "") {
                $("#erroEmail").html(" * Enter Email");
            } else {
                $("#erroEmail").html(" *");
            }
            //address
            var address = $("#address").val();
            if (address == "") {
                $("#erroAddress").html(" * Enter address");
            } else {
                $("#erroAddress").html(" *");
            }
            //code
            var code = $("#code").val();
            if (code == "") {
                $("#erroCode").html(" * Enter code");
            } else {
                $("#erroCode").html(" *");
            }
            //card
             var card = $("#card").val();
            if (card == "") {
                $("#erroCard").html(" * Enter name");
            } else {
                $("#erroCard").html(" *");
            }
            //number
            var number = $("#number").val();
            if (number == "") {
                $("#erroNumber").html(" * Enter card number");
            } else {
                $("#erroNumber").html(" *");
            }
            //comment
            var comment = $("#comment").val();
            if (comment == "") {
                $("#erroComment").html(" * Write your comment");
            } else {
                $("#erroComment").html(" *");
            }
            var show=$("#show");
            var hide=$("#hide");
            if(show.is(":checked")==false&&hide.is(":checked")==false)
             $("#erroPay").html(" * Choose a purchase Method");
            else
                $("#erroPay").html(" * ");

            return false;
           });
       });