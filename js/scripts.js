let pokemonRepository = (function () {
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon) {
    if (
        typeof pokemon === 'object' &&
        'name' in pokemon &&
        'detailsUrl' in pokemon
    ) {
        pokemonList.push(pokemon);
} else {
    console.log('Pokemon is not correct');
    }
}
function getAll() {
    return pokemonList;
}
function addListItem(pokemon){
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    list.appendChild(listItem);
    button.addEventListener('click', function(){
        showDetails(pokemon);
    })
}
function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
            add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
//shows pokemon information on console
function showDetails(pokemon){
    console.log(pokemon);
    }
return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});
