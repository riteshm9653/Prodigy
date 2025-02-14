const btn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const Api_Key = "43d59fea3a8d03e8b801d95291ac548a";

async function fetchData(city) {
  try {
    console.log("city name is ", city);
    console.log(" thank you !! to see my project");
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`
    );
    const result = await res.json();
    if (result.cod === "404") {
      document.getElementById(
        "secondDiv"
      ).innerHTML = ` <h2>${city} City not found</h2>`;
    }
    displayWeather(result);
  } catch (err) {
    console.log(err.message);
    document.getElementById("secondDiv").innerHTML = "City not found";
  }
}
btn.addEventListener("click", () => {
  fetchData(cityName.value);
});

// introduction to the api
function displayWeather({ name, main, wind }) {
  div = `
          
        <div class="weather-data" id="weather-info">
          <p id="temp">${main.temp}°C</p>
          <p id="City">${name}</p>
          <div class="other-data">
            <div class="wind">
              <p>Wind</p>
              <p>${wind.speed}Km/h</p>
            </div>
            <div class="pressure">
              <p>Pressure</p>
              <p>${main.pressure}mb</p>
            </div>
            <div class="humidity">
              <p>Humidity</p>
              <p>${main.humidity}%</p>
            </div>
          </div>
        </div>
  `;
  document.getElementById("secondDiv").innerHTML = div;
}

async function fetchDataByCoordinates(lati, longi) {
  try {
    const res =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${Api_Key}&units=metric
        `);
    const result = await res.json();
    if (result.cod === "404") {
      document.getElementById(
        "secondDiv"
      ).innerHTML = ` <h2>${city} City not found</h2>`;
    }
    displayWeather(result);
    cityName.value = result.name;
  } catch (err) {
    console.log(err.message);
    document.getElementById("secondDiv").innerHTML = "City not found";
  }
}
document.getElementById("locationBtn").addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lati = position.coords.latitude;
    let longi = position.coords.longitude;
    fetchDataByCoordinates(lati, longi);
  });
});
