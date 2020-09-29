var segundo = 0
var minuto = 0
var hora = 0
var cronometro;
var decimo = 0

function iniciando_cronometro(botao_iniciar) {

    document.getElementById("principal").remove()

    var botao_pausar = document.createElement("button")
    botao_pausar.innerHTML = "Pausar"
    var botao_reiniciar = document.createElement("button")
    botao_reiniciar.innerHTML = "Reiniciar"
    document.getElementById("pausar").appendChild(botao_pausar)
    document.getElementById("pausar").appendChild(botao_reiniciar)
    botao_pausar.id = "pausando"

    botao_pausar.onclick = function(){
        pausando(botao_reiniciar)
    }
    botao_reiniciar.onclick = function() {
        reiniciar(botao_pausar, botao_reiniciar)
    }
    cronometros()

}

function cronometros() {
        cronometro = setInterval(function () {
            document.getElementById("decimo").innerHTML = decimo
            decimo = decimo + 1
            switch (decimo) {
                case 10:
                    decimo = 0
                    segundo = segundo + 1
                    document.getElementById("segundo").innerHTML = segundo
            }
            switch (segundo) {
                case 60:
                    segundo = 0
                    minuto = minuto + 1
                    document.getElementById("minuto").innerHTML = minuto
            }
            switch (minuto) {
                case 60:
                    minuto = 0
                    hora = hora + 1
                    document.getElementById("hora").innerHTML = hora
                }
            }, 100)
    }

function pausando(botao_reiniciar) {
    document.getElementById("pausando").remove()
    clearInterval(cronometro)
    var iniciar = document.createElement("button")
    iniciar.innerHTML = "Iniciar"
    iniciar.id = "principal"
    document.getElementById("pausar").appendChild(iniciar)
    iniciar.onclick = function () {
        botao_reiniciar.remove()
        iniciando_cronometro()
    }
    botao_reiniciar.onclick = function () {
        reiniciar(botao_reiniciar, iniciar)

    }
}


function reiniciar(botao_pausar, botao_reiniciar) {
    clearInterval(cronometro)
    document.getElementById("minuto").innerHTML = "00"
    document.getElementById("segundo").innerHTML = "00"
    document.getElementById("hora").innerHTML = "00"
    segundo = 0
    minuto = 0
    hora = 0
    botao_pausar.remove()
    botao_reiniciar.remove()
    var botao_iniciar = document.createElement("button")
    botao_iniciar.innerHTML = "Iniciar Cronometro"
    botao_iniciar.id = "principal"
    document.getElementById("pausar").appendChild(botao_iniciar)

    botao_iniciar.onclick = function(){
        iniciando_cronometro(botao_iniciar)
    }
}



