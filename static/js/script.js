function updateTime() {
    console.log("tick");
    var date = new Date();
    var decimalHours = date.getHours();
    var decimalMinutes = date.getMinutes();
    var decimalSeconds = date.getSeconds();

    var binarySeconds = (decimalSeconds).toString(2).padStart(6, "0");
    var binaryMinutes = (decimalMinutes).toString(2).padStart(6, "0");
    var binaryHours = (decimalHours).toString(2).padStart(5, "0");

    var figure = 32;
    var figure2 = 16;

    for (var index = 0; index < binarySeconds.length; index++) {
        var elementName = "s" + figure;

        console.log(binarySeconds);
        console.log(decimalSeconds);

        if (binarySeconds.charAt(index) === "1") {
            document.getElementById(elementName).classList.add("on");
            document.getElementById(elementName).classList.remove("off");
        } else {
            document.getElementById(elementName).classList.add("off");
            document.getElementById(elementName).classList.remove("on");
        }

        figure = figure / 2;
    }

    figure = 32;

    for (var index = 0; index < binaryMinutes.length; index++) {
        var elementName = "m" + figure;

        if (binaryMinutes.charAt(index) === "1") {
            document.getElementById(elementName).classList.add("on");
            document.getElementById(elementName).classList.remove("off");
        } else {
            document.getElementById(elementName).classList.add("off");
            document.getElementById(elementName).classList.remove("on");
        }

        figure = figure / 2;
    }

    for (var index = 0; index < binaryHours.length; index++) {
        var elementName = "h" + figure2;

        console.log(elementName);
        console.log(binaryHours);

        if (binaryHours.charAt(index) === "1") {
            document.getElementById(elementName).classList.add("on");
            document.getElementById(elementName).classList.remove("off");
        } else {
            document.getElementById(elementName).classList.add("off");
            document.getElementById(elementName).classList.remove("on");
        }

        figure2 = figure2 / 2;
    }

    setTimeout(updateTime, 1000);
}

window.onload = updateTime;
