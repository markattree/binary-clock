function updateTime() {
    var date = new Date();
    var decimalHours = date.getHours();
    var decimalMinutes = date.getMinutes();
    var decimalSeconds = date.getSeconds();

    var binarySeconds = (decimalSeconds).toString(2).padStart(6, "0");
    var binaryMinutes = (decimalMinutes).toString(2).padStart(6, "0");
    var binaryHours = (decimalHours).toString(2).padStart(5, "0");

    updateBinaryRow(binarySeconds, 32, "s");
    updateBinaryRow(binaryMinutes, 32, "m");
    updateBinaryRow(binaryHours, 16, "h");

    updateDecimalRow("decimal-hours", decimalHours);
    updateDecimalRow("decimal-mins", decimalMinutes);
    updateDecimalRow("decimal-secs", decimalSeconds);

    setTimeout(updateTime, 1000);
}

function updateBinaryRow(binaryNumber, mostSignificantFigure, elementPrefix) {
    var currentFigure = mostSignificantFigure;

    for (var index = 0; index < binaryNumber.length; index++) {
        var elementName = getElementName(elementPrefix, currentFigure);

        if (isAOne(binaryNumber.charAt(index))) {
            turnOnBinaryUnit(elementName);
        } else {
            turnOffBinaryUnit(elementName);
        }

        currentFigure = currentFigure / 2;
    }
}

function updateDecimalRow(elementName, decimalValue) {
    document.getElementById(elementName).innerHTML = decimalValue;
}

function turnOnBinaryUnit(elementName) {
    document.getElementById(elementName).classList.add("on");
    document.getElementById(elementName).classList.remove("off");
}

function turnOffBinaryUnit(elementName) {
    document.getElementById(elementName).classList.add("off");
    document.getElementById(elementName).classList.remove("on");
}

function isAOne(digit) {
    return digit === "1";
}

function getElementName(prefix, suffix) {
    return prefix + suffix;
}


window.onload = updateTime;
