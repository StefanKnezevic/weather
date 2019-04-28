class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
    this.dewpoint = document.getElementById('w-dewpoint')
    this.wind = document.getElementById('w-wind')
  }
  paint(weather) {
    this.location.textContent = weather.city.name
    this.desc.textContent = weather.list[0].weather[0].description
    this.string.textContent = weather.list[0].main.temp
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`)
    this.humidity.textContent = `Relative humidity: ${weather.list[0].main.humidity} `
    this.feelsLike.textContent = `Max temp: ${weather.list[0].main.temp_max} `
    this.dewpoint.textContent = `Min temp: ${weather.list[0].main.temp_min} `
    this.wind.textContent = `Wind: ${weather.list[0].wind.speed} `

  }
}