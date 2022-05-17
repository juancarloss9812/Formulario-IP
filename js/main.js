const routers = {
  'TP-Link': {
    0 : 'Archer C7',
    1: 'Archer C80',
    2 : 'Archer AX10',
    3 : 'Archer AX50',
    4 : 'Archer C9',
    5 : 'Archer AX6000',
    6 : 'Deco P9',
    7 : 'Deco X20',
    8 : 'Deco M4'
  },
  'Tenda': {
    0 : 'AC10',
    1: 'RX3 WiFi 6'
  },
  'Asus': {
    0 : 'RT-AC53',
    1: 'RT-AC85P',
    2 : 'RT-AX55',
    3 : 'RT-AC86U',
    4 : 'RT-AX82U',
    5 : 'RT-AX92U',
    6 : 'RT-AX86U',
    7 : 'ROG Rapture GT-AC5300',
    8 : 'RT-AX88U',
    9 : 'RT-AX89X',
    10 : 'GT-AX11000',
    11 : 'ZenWifi CD6',
    12 : 'ZenWifi AX Mini (XD4)',
    13 : 'ZenWifi XT8'
  },
  'HONOR': {
    0 : 'Router 3 WiFi 6'
  },
  'Netgear': {
    0 : 'R6400',
    1: 'Nighthawk X6 (R8000)',
    2: 'R7800 Nighthawk X4S',
    3: 'RAX50',
    4: 'AX6000 RAX80',
    5: 'Orbi Mesh WiFi 6 RBK352',
    6: 'Orbi AC3000 RBK50',
    7: 'Orbi Mesh WiFi 6 RBK752'
  },
  'Xiaomi': {
    0 : 'AX3600'
  },
  'Linksys': {
    0 : 'MR7350',
    1: 'EA6900',
    2: 'MR9600'
  },
  'D-Link': {
    0 : 'DIR-882'
  }
};
var ipVal = "";
window.localStorage.setItem('routers',JSON.stringify(routers));
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
    }
  });
}
