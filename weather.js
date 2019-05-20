class Weather {
  constructor(city, state) {
    this.apiKey = '59c54241464d4715efbdff33fde905c1'
    this.city = city
    this.state = state
  }
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&mode=json&APPID=${this.apiKey}`)
    const resData = await response.json()
    return resData

  }
  changeLocation(city, state) {
    this.city = city
    this.state = state
  }
}