"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee col-sm-6 align-items-center row coffee-card mb-2 p-1 " id="' + coffee.id + '">';
    html += '<img  id="img' + coffee.id + '" src="http://placeholder.pics/svg/250x250" alt="#" class="img-thumbnail m-auto">';       /*will create a function to find this and customize the src remotely*/
    html += '<div class="w-100"></div>';
    html += '<h5 class="text-nowrap mx-auto d-none">This visit we recommend:</h5>';
    html += '<div class="textBox d-flex d-nowrap mx-auto"><h5 class="col p-0 m-0">' + coffee.name + '</h5>';
    html += '<p class=" col-auto p-1 m-0" style="color: darkgrey">' + coffee.roast + '</p></div>';
    html += '</div>';
    return html;

/*    let html = '<div class="coffee col-sm-6 row mb-2" id="' + coffee.id + '">';*/
/*    let html = '<div class="coffee card col-sm-6 row m-auto mb-sm-2" style="height: 10rem;" id="'+ coffee.id +'">'
    html += '<img class="card-img-top" src="#" alt="#">'
    html += '<div class="card-body">'
    html += '<div class="card-title row"> <h4 class="col-auto px-1">' + coffee.name + '</h4>';
    html += '<p class="col-auto p-0 m-0" style="color: darkgrey">' + coffee.roast+ '</p></div>';
    html +=  '<p class="card-text">' + '</p></div></div></div>'
    return html;                        card format. couldn't clean it as easily as divs so abandoned*/
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
    let newId = filteredCoffees.length +1; /*actually needed a +1 cause list starts with array#0 & id#1.*/
    let newCoffee= {id: newId, name: newName.value, roast: newRoast.value};
    filteredCoffees.push(newCoffee);
    updateCoffees();
}

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(filteredCoffees);

submitButton.addEventListener('click', addCoffee);

function Search() {
    let input, filter, a, i, txtValue, div;
    input = document.getElementById('Search');
    filter = input.value.toUpperCase();
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
    /*I want a new function to randomly select a coffee div and make it shiny, proclaiming it's the recommended coffee for this visit!*/
function recommend() {
    let cofy, div, text, i;
    cofy = Math.floor(Math.random() * 13);  /*gets a random id# for coffee, note: id#14 is at array #13*/

    div = document.getElementById(filteredCoffees[cofy].id);  /*selects that random coffee div by id*/
    div.classList.add("recommend");                          /*adds the 'recommend' class. will add into css to make do shiny thing*/
    text = div.getElementsByClassName("d-none");     /*I gave all divs a recommended text, I couldn't add it in between divs otherwise.*/
    text[0].classList.remove('d-none');                  /*so this removes its display none to reveal the specific coffee's text.*/
}

recommend();


/*I also want to create a function that will create a special div to showcase 3 random coffees per reload!*/

/*
function image(){
    let i, id;

    for(i=0; i<coffees.length;){
    id= document.getElementById("img"+coffees[i].id);
    id.src="./assets/"+coffees[i].id+".jpg"
    id.alt = coffees[i].name
        i++;
    }
}
image();            doesnt need to be so difficult...
*/
