
const btnEnviar = document.getElementById('enviar')
const btnLimpar = document.getElementById('limpar')
const input = document.getElementById('input')
const imgPokemon = document.getElementById('pokemon')
const pokemonName = document.getElementById('pokemon-name')
const pokemonType = document.getElementById('pokemon-type')

const númeroMaximoPokémon = 905
const apenasNúmeros = typeof input.value === 'string'



btnEnviar.addEventListener('click', event => {
    event.preventDefault()
    imgPokemon.style.backgroundImage = "url(img/background-pokedex.png)"
    imgPokemon.style.borderRadius = '20px'
    
    
    
    
    

    const fetchPokemon = async id => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`

        const response = await fetch(url)
        return response.json()
            .then(({ name, id, types }) => {

                const typePokemon = types.map(typePokemon =>
                    typePokemon.type.name).join(', ');


                if (input.value) {
                    somPokemon(id)
                    imgPokemon.innerHTML = `<img id="img-pokémon" src= "./assets/spritesPokemon/${name}.gif"></img>`
                    pokemonName.innerHTML = `${name}`
                    pokemonType.innerHTML = `type: ${typePokemon}`
                    

                } else if (!input.value) {
                    alert('Digite um número antes de clicar em "enviar"')
                }
            }).catch(err => {
                if (input.value > númeroMaximoPokémon) {
                    alert('905 é o número maximo de pokémon')

                } else if (apenasNúmeros) {
                    alert('digite APENAS NÚMEROS')
                }
            })
    }

    fetchPokemon(input.value)

});

btnLimpar.addEventListener('click', event => {
    event.preventDefault()
    imgPokemon.innerHTML = ''
    imgPokemon.style.backgroundImage = ''
    pokemonName.innerHTML = ''
    pokemonType.innerHTML = ''
    input.value = ''
});



const somPokemon = id => {

    const url = `sonsPokemon/${id}.mp3`;
    const audio = new Audio(url);

    audio.load();
    audio.play()
}
