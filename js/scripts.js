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
    {   name: 'Pikachu',
        height: .4,
        type: 'Electric'}
];
function getAll() {
    return pokemonList;
}
function add(pokemon) {
    pokemonList.push(pokemon);
}
return {
    getAll: getAll,
    add: add
};

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
