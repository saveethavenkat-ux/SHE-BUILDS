export const getWeatherDescription = (weatherCode) => {

    const weatherDescriptions = {
        0: {
            description: "Clear Sky",
            icon: "☀️"
        },
        1: {
            description: "Mainly Clear",
            icon: "🌤️"
        },
        2: {
            description: "Partly Cloudy",
            icon: "⛅"
        },
        3: {
            description: "Overcast",
            icon: "☁️"
        },
        45: {
            description: "Fog",
            icon: "🌫️"
        },
        48: {
            description: "Depositing Rime Fog",
            icon: "🌫️"
        },
        51: {
            description: "Light Drizzle",
            icon: "🌦️"
        },
        53: {
            description: "Moderate Drizzle",
            icon: "🌦️"
        },
        55: {
            description: "Dense Drizzle",
            icon: "🌧️"
        },
        61: {
            description: "Light Rain",
            icon: "🌦️"
        },
        63: {
            description: "Moderate Rain",
            icon: "🌧️"
        },
        65: {
            description: "Heavy Rain",
            icon: "🌧️"
        },
        71: {
            description: "Light Snow",
            icon: "🌨️"
        },
        73: {
            description: "Moderate Snow",
            icon: "❄️"
        },
        75: {
            description: "Heavy Snow",
            icon: "❄️"
        },
        80: {
            description: "Rain Showers",
            icon: "🌦️"
        },
        81: {
            description: "Moderate Rain Showers",
            icon: "🌧️"
        },
        82: {
            description: "Heavy Rain Showers",
            icon: "⛈️"
        },
        95: {
            description: "Thunderstorm",
            icon: "⛈️"
        },
        96: {
            description: "Thunderstorm with Hail",
            icon: "⛈️"
        },
        99: {
            description: "Thunderstorm with Heavy Hail",
            icon: "⛈️"
        }
    };

    return weatherDescriptions[weatherCode] || {
        description: "Unknown Weather",
        icon: "🌡️"
    };
};

export const formatTime = (time) => {
    return new Date(time).toLocaleString();
};
