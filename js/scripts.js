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
    pokemonList.push(pokemon);
}

})();
let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function(pokemon) {
  if(pokemon.height>=.7) {
    document.write('<p>'+ pokemon.name + '(Height: ' + pokemon.height + ')' + '-This is a bigger pokemon'+'</p>')
  }
  else {
    document.write('<p>' + pokemon.name + '(Height: ' + pokemon.height + ')')
  }
});
