document.getElementById("search").addEventListener("click", getPokemon);
document.getElementById("searchbar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getPokemon();
    }
});

let colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

function Cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPokemon(e){

    const pokemon = document.getElementById("searchbar").value;
    const pokemonName = pokemon.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((Response) => Response.json()).then((data) => { 
    document.querySelector(".pokeBox").innerHTML = 
    `
    <div class="img">
    <img src="${data.sprites.other["official-artwork"].front_default}">
    </div>
    <div class="info">
        <p>${Cap(data.stats[0].stat.name)}<progress class="stat" value="${data.stats[0].base_stat}" max="100"></progress></p>
        <p>${Cap(data.stats[5].stat.name)}<progress class="stat" value="${data.stats[5].base_stat}" max="100"></progress></p>
        <p>${Cap(data.stats[1].stat.name)}<progress class="stat" value="${data.stats[1].base_stat}" max="100"></progress></p>
        <p>${Cap(data.stats[2].stat.name)}<progress class="stat" value="${data.stats[2].base_stat}" max="100"></progress></p>
        <p>${Cap(data.stats[3].stat.name)}<progress class="stat" value="${data.stats[3].base_stat}" max="100"></progress></p>
        <p>${Cap(data.stats[4].stat.name)}<progress class="stat" value="${data.stats[4].base_stat}" max="100"></progress></p>
    </div>
    `;
    document.getElementById("h1").innerHTML = `${Cap(data.types[0].type.name)} Pokemon`;
    document.getElementById("h1").style.color = colors[data.types[0].type.name];
    let stats = document.querySelectorAll(".stat");
    stats.forEach(bar => {
     bar.style.accentColor = colors[data.types[0].type.name];
    });

    }).catch((err) => console.log(err));
}




