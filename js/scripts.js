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
for (let i = 0; i < pokemonList.length; i++){
  if (pokemonList[i].height >=.7) {
      document.write('<p>' + pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ') - This is a bigger pokemon!')
  }
  else if (pokemonList[i].height <.7) {
      document.write('<p>' + pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ')')
}
}
