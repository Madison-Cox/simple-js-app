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
// loop that iterates name with height
// added a conditional
pokemonList.forEach(function(pokemonList){
  document.write(pokemonList.name + ' (Height: ' + pokemonList.height + ')' + '<br>')
})
