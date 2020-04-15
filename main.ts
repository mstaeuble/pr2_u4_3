while (true) {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(4 - x, 4 - y)
            basic.pause(100)
            led.unplot(4 - x, 4 - y)
        }
    }
}
basic.forever(function () {
	
})
