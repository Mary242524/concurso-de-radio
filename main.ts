input.onButtonPressed(Button.A, function () {
    Coordenada_X += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(Coordenada_X * 10 + Coordenada_Y)
    radio.sendString("MARÍA")
})
radio.onReceivedString(function (receivedString) {
    led.plot(parseFloat(receivedString.substr(0, 1)), parseFloat(receivedString.substr(1, 1)))
    basic.pause(10000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Coordenada_Y += 1
})
let Coordenada_Y = 0
let Coordenada_X = 0
radio.setGroup(1)
