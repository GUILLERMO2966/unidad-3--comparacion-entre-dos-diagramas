basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.Sad)
    }
})
