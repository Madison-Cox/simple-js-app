let pokemonRepository = (function(){
let pokemonList = [
    {
        name: 'Charmander',
        height: .6,
        type: 'Fire'},
    {
        name: 'Mudkip',
        height: .4,
        type: 'Water'},
    {
        name: 'Bulbasaur',
        height: .7,
        type: ['Grass','Poison']},
    {
        name: 'Pikachu',
        height: .4,
        type: 'Electric'}
];

function add(pokemon) {
    if (
        typeof pokemon === 'object' &&
        'name' in pokemon &&
        'height' in pokemon &&
        'types' in pokemon
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
function showDetails(pokemon){
    console.log(pokemon);
    }
}
return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
};

})();

pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
});
