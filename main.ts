radio.onReceivedString(function (receivedString) {
    if (receivedString == "speed_up") {
        if (left_rate < 255 || right_rate < 255) {
            right_rate += 50
            left_rate += 50
        }
    }
    if (receivedString == "speed_down") {
        if (left_rate > 230 || right_rate > 230) {
            right_rate += -50
            left_rate += -50
        }
    }
})
function go () {
	
}
let left_rate = 0
let right_rate = 0
radio.setGroup(42)
right_rate = 230
left_rate = 230
