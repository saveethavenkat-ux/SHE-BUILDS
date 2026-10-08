import {
    getCityCoordinates,
    getWeather
} from "./api.js";

import {
    getWeatherDescription,
    formatTime
} from "./utils.js";

const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");
const message = document.getElementById("message");

const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const countryName = document.getElementById("countryName");

const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");

const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

const updatedTime = document.getElementById("updatedTime");

const showMessage = (text) => {
    message.textContent = text;
};

const clearMessage = () => {
    message.textContent = "";
};

const showLoading = () => {
    showMessage("Loading weather information...");
    weatherResult.classList.add("hidden");
};

const showError = (error) => {
    showMessage(error.message);
    weatherResult.classList.add("hidden");
};

const displayWeather = (location, weatherData) => {

    const {
        current,
        current_units
    } = weatherData;

    const {
        temperature_2m,
        relative_humidity_2m,
        apparent_temperature,
        weather_code,
        wind_speed_10m,
        time
    } = current;

    const weatherInfo = getWeatherDescription(weather_code);

    cityName.textContent = location.name;
    countryName.textContent = location.country;

    weatherIcon.textContent = weatherInfo.icon;

    temperature.textContent = Math.round(temperature_2m);

    weatherDescription.textContent = weatherInfo.description;

    feelsLike.textContent =
        `${Math.round(apparent_temperature)}${current_units.apparent_temperature}`;

    humidity.textContent =
        `${relative_humidity_2m}${current_units.relative_humidity_2m}`;

    windSpeed.textContent =
        `${Math.round(wind_speed_10m)} ${current_units.wind_speed_10m}`;

    updatedTime.textContent = formatTime(time);

    weatherResult.classList.remove("hidden");
};

const searchWeather = async (city) => {

    try {

        showLoading();

        const location = await getCityCoordinates(city);

        const weatherData = await getWeather(
            location.latitude,
            location.longitude
        );

        clearMessage();

        displayWeather(location, weatherData);

    } catch (error) {

        console.error("Weather search error:", error);

        showError(error);
    }
};

searchForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        showMessage("Please enter a city name.");
        weatherResult.classList.add("hidden");
        return;
    }

    await searchWeather(city);
});
console.log("Weather Dashboard JavaScript loaded");