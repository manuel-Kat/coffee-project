"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee col-sm-6 align-items-center row mb-2 p-1 " id="' + coffee.id + '">';
    html += '<img  id="img' + coffee.id + '" src="http://placeholder.pics/svg/250x250" alt="#" class="img-thumbnail m-auto">';       /*will create a function to find this and customize the src remotely*/
    html += '<div class="w-100"></div>';
    if(coffee.recommended === true) {
        html += '<h5 class="fit text-nowrap mx-auto">This time we recommend:</h5>';

    }

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
    {id: 1, name: 'Light City', roast: 'light', recommended: false},
    {id: 2, name: 'Half City', roast: 'light', recommended: false},
    {id: 3, name: 'Cinnamon', roast: 'light', recommended: false},
    {id: 4, name: 'City', roast: 'medium', recommended: false},
    {id: 5, name: 'American', roast: 'medium', recommended: false},
    {id: 6, name: 'Breakfast', roast: 'medium', recommended: false},
    {id: 7, name: 'High', roast: 'dark', recommended: false},
    {id: 8, name: 'Continental', roast: 'dark', recommended: false},
    {id: 9, name: 'New Orleans', roast: 'dark', recommended: false},
    {id: 10, name: 'European', roast: 'dark', recommended: false},
    {id: 11, name: 'Espresso', roast: 'dark', recommended: false},
    {id: 12, name: 'Viennese', roast: 'dark', recommended: false},
    {id: 13, name: 'Italian', roast: 'dark', recommended: false},
    {id: 14, name: 'French', roast: 'dark', recommended: false},
];

/*I also want to create a function that will create a special div to showcase 3 random coffees per reload!*/
/*better idea. make this the dont know? button. but i should set it to dont like our pick? try another! there as well,
 as random vid of "the coffee" */
function ourRecommendation(){
    let coffie, roast, recc;
    coffie= document.getElementById("RecCoffee");
    roast=document.getElementById("RecRoast");
    recc = coffees.find(({recommended}) => recommended===true)
    coffie.innerHTML = recc.name
    roast.innerHTML = recc.roast
}

/*I want a new function to randomly select a coffee div and make it shiny, proclaiming it's the recommended coffee for this visit!*/
function recommend() {
    let cofy, i;                                    /*this version ignores DOM to maintain continuity on updates*/
    cofy = Math.floor(Math.random() * 13);          /*gets a random id# for coffee, note: id#14 is at array #13*/
    for(i=0;i<coffees.length;i++){              /*flips a switch to trigger hidden recommended feature*/
        coffees[i].recommended = coffees[i] === coffees[cofy];
    }
    ourRecommendation();  /*to renew the html recommends too*/
}

recommend();



let filteredCoffees = coffees;

function updateCoffees() {

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
    let newId = filteredCoffees.length + 1; /*actually needed a +1 cause list starts with array#0 & id#1.*/
    let newCoffee = {id: newId, name: newName.value, roast: newRoast.value, recommended: false};
    coffees.push(newCoffee);
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
