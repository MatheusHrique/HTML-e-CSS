// script.js
async function buscarPokemon() {
    const input = document.getElementById("pokemonInput").value.toLowerCase();
    let url;
    if (!isNaN(input)) {
        url = `https://pokeapi.co/api/v2/pokemon/${input}`;
    } else {
        url = `https://pokeapi.co/api/v2/pokemon/${input}/`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("pokemonimagem").src = data.sprites.front_default;
        document.getElementById("pokemonnome").textContent = data.name;
        document.getElementById("pokemontipo").textContent = `Tipo: ${data.types.map(type => type.type.name).join(", ")}`;
        document.getElementById("pokemonpeso").textContent = `Peso: ${data.weight / 10} kg`;
        document.getElementById("pokemonaltura").textContent = `Altura: ${data.height / 10} m`;
        reproduzirSom();
    } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
    }
}

async function reproduzirSom() {
    const pokemonInpute = document.getElementById("pokemonInput").value.toLowerCase();
    const urlSom = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonInpute}.ogg`;

    try {
        const audio = new Audio(urlSom);
        await audio.play();
    } catch (error) {
        console.error("Erro ao reproduzir som do Pokémon:", error);
    }
}

