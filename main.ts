radio.onReceivedNumber(function (receivedNumber) {
    angle = receivedNumber
})
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
    if (angle < -60) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, right_rate - 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, left_rate)
    } else {
        if (angle < -30) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, right_rate - 25)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, left_rate)
        } else {
            if (angle > 60) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, left_rate - 50)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, right_rate)
            } else {
                if (angle > 30) {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, left_rate - 25)
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, right_rate)
                } else {
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, right_rate)
                }
            }
        }
    }
}
let angle = 0
let left_rate = 0
let right_rate = 0
radio.setGroup(42)
right_rate = 230
left_rate = 230
basic.forever(function () {
    go()
})
