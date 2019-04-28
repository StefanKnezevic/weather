const weather = new Weather('Aleksandrovac', 'rs')
const ui = new UI

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value

  weather.changeLocation(`${city}`, `${state}`)

  getWeather();

  $('#locModal').modal('hide')
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log('results: ', results)
      ui.paint(results)

    })
    .catch(err => console.log('err: ', err))
}


