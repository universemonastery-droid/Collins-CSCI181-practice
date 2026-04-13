//Weather Java Script for weather.html by Ryan Collins
//Declare Variables
let is_loading = false;
let error_message = "";
let weather_data = null;

//Weather output container
const output_element = document.getElementById("weather-output");
//Creating the renderWeather function
function renderWeather() {
  //Clear the previous content
  output_element.innerHTML = "";

  //Loading State
  if (is_loading) {
    output_element.className = "loading";
    output_element.textContent = "Loading";
    return;
  }

  //Error state
  if (error_message) {
    output_element.className = "error";
    output_element.textContent = error_message;
    return;
  }
  //Success! (data is avalable)
  if (weather_data) {
    output_element.className = "weather-info";

    const period = weather_data.properties.periods[0];
    const temp = period.temperature;
    const forecast = period.shortForecast;

    output_element.innerHTML = `<div class="temp">${temp}&deg;F</div>
        <div class="forecast">${forecast}</div>`;
    return;
  }
  //Fallback state
  output_element.className = "";
  output_element.textContent = "Weather data not available :(";
}

//Function to fetch data
async function getWeatherData() {
  const url = "https://api.weather.gov/gridpoints/MSO/105,131/forecast";
  //Begin Loading
  is_loading = true;
  error_message = "";
  renderWeather();

  try {
    const response = await fetch(url);
    //This checks if the http responce is good
    if (!response.ok) {
      throw new Error(`Error!! Status: ${response.status}`);
    }
    const data = await response.json();
    weather_data = data;
  } catch (error) {
    //Deals with network or manuel errors
    console.error("Fetch error:", error);
    error_message =
      "No weather data to display at the moment... Try again when theres data!";
  } finally {
    //Stop loading
    is_loading = false;
    renderWeather();
  }
}
//Inital call to fetch data when the page loads
getWeatherData();
