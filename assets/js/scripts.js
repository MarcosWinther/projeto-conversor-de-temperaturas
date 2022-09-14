function Converter() {
    let valorTemperatura = parseFloat(document.getElementById("txtTemperature").value);
    let resultadoTemperaturaF = document.getElementById("temperaturaF");
    let resultadoTemperaturaK = document.getElementById("temperaturaK");

    resultadoTemperaturaF.innerHTML = ConverterParaFahrenheit(valorTemperatura);
    resultadoTemperaturaK.innerHTML = ConverterParaKelvin(valorTemperatura);
}

function ConverterParaFahrenheit(valor) {
    let fahrenheit = valor * 1.8 + 32;
    return fahrenheit;
}

function ConverterParaKelvin(valor) {
    let kelvin = valor + 273.15;
    return kelvin;
}

