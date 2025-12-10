async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "3d88af22251cfc670d3f1f3be62998ec"; // ← Replace with your real OpenWeather API key

    if (!city) { alert("Please enter a city name."); return; }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert(data.message); // e.g., city not found
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = `🌡️ ${data.main.temp}°C`;
        document.getElementById("description").innerText = `🌈 ${data.weather[0].description}`;
        document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        const box = document.getElementById("weatherBox");
        box.classList.remove("hidden");
        setTimeout(() => { box.classList.add("show"); }, 10);

    } catch (error) {
        alert("Error fetching weather!");
        console.error(error);
    }
}
