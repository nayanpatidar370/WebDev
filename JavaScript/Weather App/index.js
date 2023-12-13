const API_KEY = "168771779c71f3d64106d8a88376808a";

function renderWeatherInfo(data) {
    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
  }
  
async function fetchWeatherDetails() {
  try {
    let city = "goa";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log("Weather data:-> ", data);

    rendernWeatherInfo(data);
  } catch (e) {
    console.log("Error occured while fetching data ", e);
  }
}

async function getCustomWeatherDetails() {
  try {
    let latitude = 15.6333;
    let longitude = 18.333;

    let result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    let data = await result.json();
    console.log(data);
  } catch (e) {
    console.log("Error Found", e);
  }
}
