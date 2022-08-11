let pokemonRepository = (function(){
let pokemonList = [
    {
        name: 'Charmander',
        height: '.6',
        type: 'fire'},
    {
        name: 'Mudkip',
        height: '.4',
        type: 'water'},
    {
        name: 'Bulbasaur',
        height: '.7',
        type: ['grass','poison']},
];
function getAll() {
    return pokemonList;
}
function add(pokemon) {
    pokemonLIst.push(pokemon);
}

}})();

pokemonList.forEach(function(pokemonList){
  document.write(pokemonList.name + ' (Height: ' + pokemonList.height + ')' + '<br>')
})
