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
function addListItem(item){
    let list = document.querySelector('.list-group');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    listItem.classList.add('group-list-item')
    button.innerText = item.name;
    button.classList.add('btn', 'btn-outline-primary', 'button-class');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#details-modal');
    listItem.appendChild(button);
    list.appendChild(listItem);
    button.addEventListener('click', function(){
        showDetails(item);
    })
}
function loadList(item) {
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
function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details) {
        item.name = details.name;
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types.map(type => type.type.name).join(', ');
    }).catch(function (e) {
        console.error(e);
    });
}
function showModal(item){
let modalBody = $('.modal-body');
let modalTitle = $('.modal-title');
let modalHeader = $('.model-header');
modalTitle.empty();
modalBody.empty();
//name for element in modal
let elementName = $('<h2>' + item.name + '<h2>');
//image of element in modal
let elementImageFront = $('<img class="modal-img" style="width:50%">');
elementImageFront.attr('src', item.imageUrl);
//height of element in modal
let elementHeight = $('<p>' + 'Height: ' + item.height + '</p>');
//type of element in modal
let elementType = $('<p>' + 'Type: ' + item.types + '</p>');

modalTitle.append(elementName);
modalBody.append(elementImageFront);
modalBody.append(elementHeight);
modalBody.append(elementType);
}

//shows pokemon information on console
function showDetails(item){
    loadDetails(item).then(function () {
        showModal(item);
        })
};


return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    };

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});
