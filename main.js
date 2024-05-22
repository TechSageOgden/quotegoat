const heroUnit = document.getElementById('quoteBlocks')
let url = 'https://api.quotable.io/quotes/random?limit=1'

const mediaFunction = (media) => {
    if (media.matches) {
        heroUnit.classList.add('mobile')
        url = 'https://api.quotable.io/quotes/random?limit=1&maxlen=100'
    } 
}

const mediaQuery = window.matchMedia("(maxwidth: 700px)")



const dataRequest = async () => {
    const res = await fetch(url)
    const quotes = await res.json()
    console.log(quotes)
    console.log(quotes[0])


    
        heroUnit.innerHTML = `
        <div class="hero-card fade-in" id="quote1">
        <h1 class="quote-text">"${quotes[0].content}"</h1>
        <h3 class="quote-author">~ ${quotes[0].author} ~</h3>
        <button id="new-quote" class="button-quote">GOAT</button>
        </div>
        `
    let quoteBlock = document.getElementById('quote1')    
    let button = document.getElementById('new-quote')
    button.addEventListener('click', ev => {
        ev.preventDefault()
        quoteBlock.classList.remove('fade-in')
        quoteBlock.classList.add('fade')

        setTimeout(() => {
            dataRequest()
        }, 500)
    })
    
}

const quoteVisibility = heroUnit => {

}

mediaFunction(mediaQuery)
dataRequest()
