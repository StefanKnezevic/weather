const weather = new Weather('Belgrade', 'rs')
const ui = new UI

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log('results: ', results)
      ui.paint(results)
    })
    .catch(err => console.log('err: ', err))
}


