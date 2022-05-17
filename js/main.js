var ipVal = "";
const routersLocal = JSON.parse(window.localStorage.getItem('routers'));
$(document).ready(function(){
  $("#model").attr('disabled',true);
  let count = 0;
  $.each(routersLocal, function(key) {
    $("#marca").append($("<option />").val(count).text(key));
    count++;
  });
  $("#marca").change(function() {
    if($(this).find("option:selected").val() != ""){
      if($("#model option").length != 1) {
        $('#model option').each(function() {
          if ( $(this).val() != "" ) {
              $(this).remove();
          }
        });
      }
      $("#model").attr('disabled',false);
      const routersLocal = JSON.parse(window.localStorage.getItem('routers'));
      const models = routersLocal[$(this).find("option:selected").text()];
      $.each(models, function(key,value) {
        $("#model").append($("<option />").val(key).text(value));
        count++;
      });
    }
  });
});
self = this;
$.validator.addMethod("ipValid", function(value, element) {
  self.ipVal = "";
  if(/^[0-9.]+$/.test(value)){
        let octetos = value.split('.');
        if (octetos.length == 4) {
            let num = 1;
            octetos.forEach(octeto => {
                if (octeto.length != 0) {
                    let number = Number(octeto);
                    if (number >= 0 && number <= 255) {
                        if (num == 4) {
                          self.ipVal = self.ipVal + number;
                        }else {
                          self.ipVal = self.ipVal + number +'.';
                        }
                        
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
                num+=1;
            });
            return true;
        }else {
            return false;
        }
  }else{
    return false;
  }
}, "Ip debe ser valida");
function validate() {
  $("#validation").validate({
    rules: {
      marca : {
        required: true
      },
      model: {
        required: true
      },
      ip: {
        required: true,
        minlength: 7,
        maxlength: 15,
        ipValid: true
      },
      subnet: {
        required: true,
        minlength: 7,
        maxlength: 15,
        ipValid: true
      },
      gateway: {
        required: true,
        minlength: 7,
        maxlength: 15,
        ipValid: true
      }
    },
    messages : {
      marca: {
        required: "La marca es obligatoria"
      },
      model: {
        required: "Modelo es obligatorio"
      },
      ip: {
        required: "IP es obligatoria",
        minlength: "La ip debe tener entre 7 y 15 caracteres",
        maxlength: "La ip debe tener entre 7 y 15 caracteres"
      },
      subnet: {
        required: "IP es obligatoria",
        minlength: "La ip debe tener entre 7 y 15 caracteres",
        maxlength: "La ip debe tener entre 7 y 15 caracteres"
      },
      gateway: {
        required: "La ip debe tener entre 7 y 15 caracteres",
        minlength: "La ip debe tener entre 7 y 15 caracteres",
        maxlength: "La ip debe tener entre 7 y 15 caracteres"
      }
    },
    submitHandler: function() {
      alert('ENVIADO CORRECTA 🥳')
    }
  });
}
