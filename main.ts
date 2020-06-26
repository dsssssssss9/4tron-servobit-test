input.onButtonPressed(Button.A, function () {
    ServoBit.stopFlash()
    ServoBit.ledClear()
    t = -90
    ServoBit.setServo(0, t)
    basic.pause(500)
    for (let index = 0; index <= 180; index++) {
        ServoBit.setServo(0, t)
        ServoBit.waitServo(0)
        t += 1
    }
    ServoBit.setLedColor(0x18E600)
})
input.onButtonPressed(Button.B, function () {
    ServoBit.centreServos()
    ServoBit.startFlash(0xFF0000, 1000)
})
let t = 0
ServoBit.centreServos()
ServoBit.ledBrightness(19)
ServoBit.startFlash(0x0000FF, 565)
