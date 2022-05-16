const validation = document.getElementById('validation')
console.log(validation)
const inputs = document.querySelectorAll('#validation  input');
var banderIp = false;
function validarIP() {

  var usuario = document.getElementById("ip").value;
  if (usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }

  this.submit();
}

const expressions = {
  ip: /^(?:(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)\.){3}(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)(?:\:(?:\d|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5]))?$/,
  model: /^.{1,20}$/,
  marca: /^.{1,15}$/
}

const campos = {
  ip: false,
  model: false,
  gateway: false,
  subnet: false
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "ip":
      validar(expressions.ip, e.target, 'ip');
      break;
    case "marca":
      validar(expressions.model, e.target, 'marca');
      break;
    case "model":
      validar(expressions.model, e.target, 'model');
      break;
    case "gateway":
      validar(expressions.ip, e.target, 'gateway');
      break;
    case "subnet":
      validar(expressions.ip, e.target, 'subnet');
      break;
  }
}

const validar = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    console.log(input.value)
    document.getElementById(`Status__${campo}`).classList.remove('validation__incorrect');
    document.getElementById(`Status__${campo}`).classList.add('validation__correct');
    campos[campo] = true;
  } else {
    document.getElementById(`Status__${campo}`).classList.add('validation__incorrect');
    document.getElementById(`Status__${campo}`).classList.remove('validation__correct');
    campos[campo] = false;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario)
  input.addEventListener('blur', validarFormulario)
});

validation.addEventListener('submit', (e) => {
  validation.reset();

  document.getElementById("validation").classList.remove("validation__incorrect");
  document.getElementById("validation").classList.remove("validation__correct");
  e.preventDefault();
  if (campos.ip && campos.model && campos.subnet && campos.gateway) {
    alert('ENVIADO CORRECTA 🥳')
    //AQUI GUARDAR POR LOCAL STORAGE
  } else {
    alert('NO FUE POSIBLE ENVIAR ☠')
  }
  campos.ip, campos.gateway, campos.model, campos.subnet = false;
});