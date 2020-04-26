$(document).ready(function(){

    $(document).on('click','#send_contact',function(){

        result = true;
        $(".error").remove();

        var pname = /^[a-zA-Z]+[\-'\s]?[a-zA-Z]{2,51}$/;
        var pmessage = /^[0-9A-Za-z\s]{20,100}$/;
        var pmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if ($("#cname").val() === "" || $("#cname").val() === "Introduce tu nombre" ) {
            $("#cname").focus().after("<span class='error'>Introduce tu nombre</span>");
            return false;
        }else if (!pname.test($("#cname").val())) {
            $("#cname").focus().after("<span class='error'>El nombre tiene un minimo de 3 caracteres</span>");
            return false;
        }
        if ($("#cemail").val() === "" || $("#cemail").val() === "Introduce tu email" ) {
            $("#cemail").focus().after("<span class='error'>Introduce tu email</span>");
            return false;
        }else if (!pmail.test($("#cemail").val())) {
            $("#cemail").focus().after("<span class='error'>El formato del mail es incorrecto</span>");
            return false;
        }
        if ($("#matter").val() === "" ) {
            $("#matter").focus().after("<span class='error'>Seleccione un asunto</span>");
            return false;
        }
        if ($("#message").val() === "" || $("#message").val() === "Seleccione un asunto" ) {
            $("#message").focus().after("<span class='error'>Introduzca su mensaje</span>");
            return false;
        }else if (!pmessage.test($("#message").val())) {
            $("#message").focus().after("<span class='error'>El mensaje tiene un minimo de 20 caracteres</span>");
            return false;
        }
        
        if (result) {

            var data = $('#contactus').serialize();
            // console.log(data)

            var info= {module:'contact',function:'send_cont',data:data}

            // alert(info['module']);
            form(amigable("?"), info)
            .then(function(data){
                console.log(data)
                console.log(JSON.parse(data))
            
                if((JSON.parse(data)['message'])=='Queued. Thank you.'){
                    // console.log('hola')
                    toastr.success("We sent the email, please check your inbox.", "Email sent.");
                    window.setTimeout(function(){
                        document.location.href = "/FRAMEWORK_JOYAS/";
                    },2000)

                }else{
                    toastr.error("A failure has been made when sending your message","Email Not Sent.")
                }

            })
        }
    });

});

var form = function (url, data) { //function/promise GENERAL 

    console.log(data)

    return new Promise(function (resolve) {
        // console.log(url)
        // console.log(data)
        $.ajax({
            type: "POST",
            url: url,
            data: data
        })
            .done(function (data) {
                resolve(data);
            })
    })
};