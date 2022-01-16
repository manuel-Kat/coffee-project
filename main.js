"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee col-sm-6 align-items-center row mb-2 p-1 " id="' + coffee.id + '">';
    html += '<img  id="img' + coffee.id + '" src="./assets/' + coffee.img + '.jpeg" alt="#" class="img-thumbnail m-auto">';       /*will create a function to find this and customize the src remotely*/
    html += '<div class="w-100"></div>';
    html += '<h5 class="fit text-nowrap mx-auto d-none">This time we recommend:</h5>';
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
    {id: 1, name: 'Light City', roast: 'light', recommended: false, img: 'light_city'},
    {id: 2, name: 'Half City', roast: 'light', recommended: false, img: 'half_city'},
    {id: 3, name: 'Cinnamon', roast: 'light', recommended: false, img: 'cinnamon'},
    {id: 4, name: 'City', roast: 'medium', recommended: false, img: 'city'},
    {id: 5, name: 'American', roast: 'medium', recommended: false, img: 'american'},
    {id: 6, name: 'Breakfast', roast: 'medium', recommended: false, img: 'breakfast'},
    {id: 7, name: 'High', roast: 'dark', recommended: false, img: 'high'},
    {id: 8, name: 'Continental', roast: 'dark', recommended: false, img: 'continental'},
    {id: 9, name: 'New Orleans', roast: 'dark', recommended: false, img: 'new_orleans'},
    {id: 10, name: 'European', roast: 'dark', recommended: false, img: 'european'},
    {id: 11, name: 'Espresso', roast: 'dark', recommended: false, img: 'espresso'},
    {id: 12, name: 'Viennese', roast: 'dark', recommended: false, img: 'viennese'},
    {id: 13, name: 'Italian', roast: 'dark', recommended: false, img: 'italian'},
    {id: 14, name: 'French', roast: 'dark', recommended: false, img: 'french'},
];

/*I also want to create a function that will create a special div to showcase 3 random coffees per reload!*/

/*better idea. make this the dont know? button. but i should set it to dont like our pick? try another! there as well,
 as random vid of "the coffee" */
function ourRecommendation() {
    let coffie, roast, img, recc;
    coffie = document.getElementById("RecCoffee");
    roast = document.getElementById("RecRoast");
    img = document.getElementById("RecImg")
    recc = coffees.findIndex(({recommended}) => recommended === true)
    coffie.innerHTML = coffees[recc].name
    roast.innerHTML = coffees[recc].roast
    img.src = "./assets/" + coffees[recc].img + ".jpeg"
}

/*I want a new function to randomly select a coffee div and make it shiny, proclaiming it's the recommended coffee for this visit!*/
function recommend(keep) {
    let cofy, i, id, text;                                    /*this version ignores DOM to maintain continuity on updates*/

    if (!keep) {                                        /*so i can decide where i want to keep the recs and where i want new ones*/
        cofy = Math.floor(Math.random() * 13);
    } else {                                                    /*gets a random id# for coffee, note: id#14 is at array #13*/
        cofy = coffees.findIndex(({recommended}) => recommended === true)
    }

    for (i = 0; i < filteredCoffees.length; i++) {              /*flips a switch to trigger hidden recommended property*/
        id = document.getElementById(filteredCoffees[i].id);
        text = id.getElementsByClassName("fit");
        if (filteredCoffees[i].id === coffees[cofy].id) {
            coffees[i].recommended = true;
            filteredCoffees[i].recommended = true;
            text[0].classList.remove("d-none")
            if (!(id.classList.contains("recommend"))) {      /*to prevent infinite adding */
                id.classList.add("recommend");
            }
        } else {
            coffees[i].recommended = false;
            filteredCoffees[i].recommended = false;
            id.classList.remove("recommend");       /*doesnt matter; if remove cant find the target it ignores itself.*/
            if (!(text[0].classList.contains("d-none"))) {      /*to prevent infinite adding */
                text[0].classList.add("d-none");
            }
        }
    }

    ourRecommendation();  /*to renew the html recommends too*/
}


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
    let newCoffee = {id: newId, name: newName.value, roast: newRoast.value, recommended: false, img: 'none'};
    coffees.push(newCoffee);
    updateCoffees();
    recommend(true);
}

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
updateCoffees();
recommend();
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
