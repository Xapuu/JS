function attachEventsListeners(){

    document.getElementById("convert").addEventListener("click",Convert)

    function Convert(){

    let fromMetrics = document.getElementById("inputUnits").value
    let toMetrics = document.getElementById("outputUnits").value
    let valueForConvert = Number(document.getElementById("inputDistance").value)

    let metrics = {
        "km":1000,
        "m":1,
        "cm":0.01,
        "mm":0.001,
        "mi":1609.34,
        "yrd":0.9144,
        "ft":0.3048,
        "in":0.0254
    }

    document.getElementById("outputDistance").value=valueForConvert*metrics[fromMetrics]/metrics[toMetrics]
    }
}

