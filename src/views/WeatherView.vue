<template>
    <div class="container">
        <h1>Weather Information</h1>
        <div class="search-bar">
            <input 
                v-model="city" 
                type="text" 
                placeholder="Enter city name"
                class="search-input" 
            />
            <button @click="searchWeatherByCity"
                    class="search-button">Search</button>
        </div>
        <!--The <main> tag in HTML is used to specify the main content of a document 
        More info about main, check https://www.w3schools.com/tags/tag_main.asp-->  
        <main>
        <!--If there are no data returned, then skip rendering the information-->  
        <div v-if="weatherData">
            <!--Display the weather data attribute returned from API
            Example of API data: https://openweathermap.org/current-->  
            <h2>
                {{ weatherData.name }}, {{ weatherData.sys.country }}
            </h2>
            <div>
            <!--The image source of of the weather icon will be coming from a function called iconUrl
                which will be shared in script later-->  
            <img :src="iconUrl" alt="Weather Icon" />
            <p>{{ temperature }} °C</p>
            </div>
            <!-- weather[0] means the current weather, the way we need to obtain data depends on how
            the API JSON data looks-->
            <span>{{ weatherData.weather[0].description }}</span>
        </div>
        </main>
    </div>

</template>

<script>
import axios from "axios";

const apiKey = "6d8857f59adb686572a826747062e813";

export default {
    name: "App",
    data() {
        return {
        city: "",
        weatherData: null,
        hourlyForecast: [],
        dailyForecast: [],
        };
    },
    // computed is a property that is used to define a property that
    // is dependent on other data properties.
    // The derived value such as temperature automatically updates when the relevant value changes.
    computed: {
        // There are multiple ways to obtain the data in Celsius format.
        // Calculation by yourself like below after data is retrieved or via API parameters.
        temperature() {
            // The API returns temperature in Kelvin. We subtract 273.15 to convert to Celsius.
            return this.weatherData
            ? Math.round(this.weatherData.main.temp - 273.15)
            : null;
        },
        // Get the current weather icon using the API link
        iconUrl() {
            // Construct the full URL for the weather icon image
            return this.weatherData
            ? `https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
            : null;
        },
    },
    //There are two steps involved in this, 
    //step 1: identify current location 
    //step 2: after identify, get the weather data straight based on the current location.
    mounted() {
        this.fetchCurrentLocationWeather();
    },
    methods: {
        // Async in a easy to understand way means the method will run in background thread,
        // and it won't occupy the main thread, so the user experience is still smooth.
        async fetchCurrentLocationWeather() {
            // The navigator.geolocation object is part of the Web API provided by modern web browsers.
            // It asks the user for permission to get their current location.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                // API link to obtain the current weather based on the current location browser identifies.
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
                // await means wait for the fetchWeatherData method to complete before proceeding.
                await this.fetchWeatherData(url);
                });
            } else {
                console.error("Geolocation is not supported by this browser.");
            }
        },
        async fetchWeatherData(url) {
            try {
                const response = await axios.get(url);
                // Returned data from API is stored as JSON object in weatherData
                this.weatherData = response.data;
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        },
        async searchWeatherByCity() {
        if (!this.city.trim()) {
            this.message = "Please enter a city name.";
            return;
        }
        this.weatherData = null; // Clear previous results
        this.message = `Searching for weather in ${this.city}...`;
        // Construct a new URL for searching by city name
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`;
        await this.fetchWeatherData(url);
        },
    },
};
</script>

<style scoped>
.card {
  max-width: 500px;
  margin: 0 auto;
}
img {
  width: 100px;
  height: 100px;
}
</style>