input.onButtonPressed(Button.A, function () {
    RTC_DS1307.DateTime(
    2019,
    1,
    17,
    12,
    31,
    19
    )
    OLED.clear()
    basic.pause(500)
    led.plot(0, 0)
    OLED.init(128, 64)
    OLED.writeStringNewLine("Hello!")
    basic.pause(500)
    led.unplot(0, 0)
    OLED.writeStringNewLine("")
})
basic.forever(function () {
	
})
