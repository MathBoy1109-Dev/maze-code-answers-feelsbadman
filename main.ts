function Answering_2 () {
    while (Question_Number == 1) {
        if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Correct!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Incorrect!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Incorrect!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
    }
}
function Show_Answers_5 () {
    while (Question_Number == 4) {
        if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 1")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 2")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
        }
        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 3")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
        }
    }
}
function Show_Answers_4 () {
    while (Question_Number == 3) {
        if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 1")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 2")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
        }
        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 3")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
        }
    }
}
function Answering_4 () {
    while (Question_Number == 3) {
        if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Correct!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Incorrect!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Incorrect!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
    }
}
function Show_Answers_2 () {
    while (Question_Number == 1) {
        if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 1")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 2")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
        }
        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 3")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
        }
    }
}
function Answering_5 () {
    while (Question_Number == 4) {
        if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Correct!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Incorrect!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Incorrect!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    Question_Number += 1
})
function Answering_3 () {
    while (Question_Number == 2) {
        if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Correct!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Incorrect!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2) && Use_Answers == _1) {
            OLED.writeStringNewLine("Incorrect!")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
    }
}
function Show_Answers_3 () {
    while (Question_Number == 2) {
        if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 1")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
            Question_Number += 1
        }
        if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 2")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
        }
        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2) && Show_Answers == _1) {
            OLED.writeStringNewLine("Answer 3")
            basic.pause(500)
            OLED.clear()
            Use_Answers = 0
            Show_Answers = 0
        }
    }
}
let Use_Answers = 0
let Show_Answers = 0
let Question_Number = 0
let _1 = 0
OLED.clear()
Question_Number = 1
OLED.init(128, 64)
Show_Answers = 0
Use_Answers = 0
basic.forever(function () {
    if (Show_Answers >= 2) {
        Show_Answers = 0
    }
    if (Use_Answers >= 2) {
        Use_Answers = 0
    }
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P2)) {
        Show_Answers = 1
        Use_Answers = 0
        OLED.writeStringNewLine("Show Answer Mode")
        basic.pause(500)
        OLED.clear()
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P2)) {
        Use_Answers = 1
        Show_Answers = 0
        OLED.writeStringNewLine("Answer Mode")
        basic.pause(500)
        OLED.clear()
    }
    while (Question_Number == 1) {
        if (Show_Answers == 1) {
            Show_Answers_2()
        } else {
            Answering_2()
        }
    }
    while (Question_Number == 2) {
        if (Show_Answers == 1) {
            Show_Answers_3()
        } else {
            Answering_3()
        }
    }
    while (Question_Number == 3) {
        if (Show_Answers == 1) {
            Show_Answers_4()
        } else {
            Answering_4()
        }
    }
    while (Question_Number == 4) {
        if (Show_Answers == 1) {
            Show_Answers_5()
        } else {
            Answering_5()
        }
    }
})
