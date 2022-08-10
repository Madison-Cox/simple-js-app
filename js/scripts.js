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
for (let i=0; i < pokemonList.length; i++) {
        document.write(pokemonList[i].name +  "(Height:  )" + pokemonList[i].height +);
}
