document.getElementById("convertButton").addEventListener("click", function() {
    const inputTemperature = document.getElementById("temperatureInput").value.trim();
    const unitInput = document.getElementById("unitInput").value;
    let resultText = "";
  
    // Validate that input is a valid number
    if (inputTemperature === "" || isNaN(inputTemperature)) {
      resultText = "Please enter a valid number for the temperature.";
    } else {
      const temperature = parseFloat(inputTemperature);
  
      // Conversion logic for Celsius
      if (unitInput === "celsius") {
        const toFahrenheit = (temperature * 9/5) + 32;
        const toKelvin = temperature + 273.15;
        resultText = `${temperature} °C = ${toFahrenheit.toFixed(2)} °F | ${toKelvin.toFixed(2)} K`;
      
      // Conversion logic for Fahrenheit
      } else if (unitInput === "fahrenheit") {
        const toCelsius = (temperature - 32) * 5/9;
        const toKelvin = toCelsius + 273.15;
        resultText = `${temperature} °F = ${toCelsius.toFixed(2)} °C | ${toKelvin.toFixed(2)} K`;
      
      // Conversion logic for Kelvin
      } else if (unitInput === "kelvin") {
        const toCelsius = temperature - 273.15;
        const toFahrenheit = (toCelsius * 9/5) + 32;
        resultText = `${temperature} K = ${toCelsius.toFixed(2)} °C | ${toFahrenheit.toFixed(2)} °F`;
      }
    }
  
    // Display the result
    document.getElementById("result").innerText = resultText;
  });
  
  