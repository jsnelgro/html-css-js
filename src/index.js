import { doSomethingGreat } from '~/some-module'
const rootEl = document.getElementById('root')

let getDog = async () => {
  const RANDOM_DOG = 'https://dog.ceo/api/breeds/image/random'
  try {
    let res = await fetch(RANDOM_DOG).then((r) => r.json())
    return `<img src=${res.message} />`
  } catch (e) {
    console.warn(e)
  }
}

rootEl.innerHTML = doSomethingGreat() ? 'Loading...!' : 'Uh oh'
getDog().then((res) => (rootEl.innerHTML = res))
