radio.onReceivedString(function (receivedString) {
    led.plot(parseFloat(receivedString.substr(0, 1)), parseFloat(receivedString.substr(1, 1)))
    basic.pause(10000)
    basic.clearScreen()
})
radio.setGroup(1)
