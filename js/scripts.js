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
    button.addEventListener('click', function(event){
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
function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details) {
        item.name = details.name;
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
    }).catch(function (e) {
        console.error(e);
    });
}
function showModal(title, text, image){
    let pokeModal = document.querySelector('#poke-modal');
        pokeModal.innerHTML = '';

    let modal = document.createElement('div');
        modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h3');
        titleElement.innerText = title;

    let contentElement = document.createElement('p');
        contentElement.innerText = 'Height: ' + text;
    let pictureElement = document.createElement('img');
        pictureElement.src = image;
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(pictureElement);
        pokeModal.appendChild(modal);

        pokeModal.classList.add('is-visible');
        pokeModal.addEventListener('click', (e) => {

        let target = e.target;
            if (target === pokeModal); {
                hideModal();
            }
    });
}
function hideModal() {
    let pokeModal = document.querySelector('#poke-modal');
        pokeModal.classList.remove('is-visible');
    }
    window.addEventListener('keydown', (e) => {
    let pokeModal = document.querySelector('#poke-modal');
        if (e.key === 'Escape' && pokeModal.classList.contains('is-visible')) {
            hideModal();
        }
    });

//shows pokemon information on console
function showDetails(item){
    loadDetails(item).then(function () {
        showModal(item.name, item.height, item.imageUrl);
        })
};


return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    hideModal: hideModal,
    showModal: showModal,
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});
