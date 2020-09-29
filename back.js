var segundo = 0
var minuto = 0
var hora = 0
var cronometro;

function cronometros() {
        cronometro = setInterval(function () {
            segundo = segundo + 1
            document.getElementById("segundo").innerHTML = segundo
            switch (segundo) {
                case 60:
                    milesimo = 0
                    minuto = minuto + 1
                    document.getElementById("minuto").innerHTML = minuto
            }
            switch (minuto) {
                case 60:
                    minuto = 0
                    hora = hora + 1
                    document.getElementById("hora").innerHTML = hora
                }
            }, 1000)
    }

function pausando() {
    clearInterval(cronometro)

}

function reiniciar() {
    clearInterval(cronometro)
    document.getElementById("minuto").innerHTML = "00"
    document.getElementById("segundo").innerHTML = "00"
    document.getElementById("hora").innerHTML = "00"
    segundo = 0
    minuto = 0
    hora = 0

}
