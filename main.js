"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee col-6 row justify-content-between" id="' + coffee.id + '">';
    html += '<h4 class="col-auto p-0">' + coffee.name + '</h4>';
    html += '<p class="col-auto p-0">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let filteredCoffees = coffees;

function updateCoffees(e) {

    let selectedRoast = roastSelection.value;
    filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast === "all") {
            filteredCoffees = coffees;
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e) {
    e.preventDefault();
    let newRoast = document.querySelector('#createRoast');
    let newName = document.querySelector('#createName');
    let newId = coffees.length;
    let newCoffee= {name: newName.value,id: newId,roast: newRoast.value};
    coffees.push(newCoffee);
    updateCoffees();
}

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', addCoffee);

function Search() {
    let input, filter, a, i, txtValue, div;
    input = document.getElementById('Search');
    filter = input.value.toUpperCase();
    div = document.getElementsByClassName("coffee");
    // Loop through all list items, and hide those who don't match the search query

        for (i = 0; i < filteredCoffees.length; i++) {
            a = filteredCoffees[i].name;
            txtValue = a;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                div = document.getElementById(filteredCoffees[i].id);
                div.style.display = "";

            } else {
                div = document.getElementById(filteredCoffees[i].id);
                div.style.display = "none";
            }
        }
    }