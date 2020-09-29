var segundo = 55
var minuto = 58
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
                    melhorando_formatacao(segundo, "segundo")

            }
            switch (segundo) {
                case 60:
                    segundo = 0
                    minuto = minuto + 1
                    melhorando_formatacao(segundo, "segundo")
                    melhorando_formatacao(minuto, "minuto")
            }
            switch (minuto) {
                case 60:
                    minuto = 0
                    hora = hora + 1
                    melhorando_formatacao(minuto, "minuto")
                    melhorando_formatacao(hora, "hora")
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
    document.getElementById("minuto").innerHTML = "00 "
    document.getElementById("segundo").innerHTML = "00"
    document.getElementById("hora").innerHTML = "00 "
    document.getElementById("decimo").innerHTML = "00"

    decimo = 0
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

function melhorando_formatacao(tempo, id) {
    if (tempo<=9) {
        document.getElementById(id).innerHTML =
            ": 0"+tempo
        }
    else if (tempo>9) {
        document.getElementById(id).innerHTML =
            ": "+tempo
        }
}



