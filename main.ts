radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        for (let index = 0; index < 20; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(200)
        }
    }
})
radio.setGroup(10)
