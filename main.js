"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee col-sm-6 align-items-center coffee-bg row mb-2 p-1 " id="' + coffee.id + '">';
    html += '<img  id="img' + coffee.id + '" src="./assets/' + coffee.img + '.jpeg" alt="#" class="img-thumbnail m-auto">';       /*will create a function to find this and customize the src remotely*/
    html += '<div class="w-100"></div>';
    html += '<h5 class="fit text-nowrap mx-auto d-none">This time we recommend:</h5>';
    html += '<div class="textBox d-flex d-nowrap mx-auto"><h5 class="col p-0 m-0">' + coffee.name + '</h5>';
    html += '<p class=" col-auto p-1 m-0" style="color: #695252">' + coffee.roast + '</p></div>';
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
    {
        id: 1,
        name: 'Light City',
        roast: 'light',
        recommended: false,
        img: 'light_city',
        description: 'This roast is medium brown and really highlights the flavor of the beans, emphasizing their individual characteristics, unique aroma, complexity, and depth.'
    },
    {
        id: 2,
        name: 'Half City',
        roast: 'light',
        recommended: false,
        img: 'half_city',
        description: 'This roast has about the same flavor characteristics as a Light City Roast. It is a little darker, which decreases the above flavor qualities, but imparts a bit more body to the cup.'
    },
    {
        id: 3,
        name: 'Cinnamon',
        roast: 'light',
        recommended: false,
        img: 'cinnamon',
        description: 'This is the lightest drinkable roast. This roast results in toasted grain flavors with a sharp acidity to it.'
    },
    {
        id: 4,
        name: 'City',
        roast: 'medium',
        recommended: false,
        img: 'city',
        description: 'This roast imparts much more body than the Half City Roast and emphasizes bitter-sweet flavors. Oils can just barely be seen on the beans’ surface.'
    },
    {
        id: 5,
        name: 'American',
        roast: 'medium',
        recommended: false,
        img: 'american',
        description: 'American coffee is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.'
    },
    {
        id: 6,
        name: 'Breakfast',
        roast: 'medium',
        recommended: false,
        img: 'breakfast',
        description: 'Breakfast Blend coffee is perfect to wake you up and get ready to tackle the day ahead. A great blend of our favorite beans, roasted lightly to maintain flavor and caffeine! Whether hiking a mountain or navigating the morning commute, our Breakfast Blend coffee will help you reach your destination.'
    },
    {
        id: 7,
        name: 'High',
        roast: 'dark',
        recommended: false,
        img: 'high',
        description: 'This coffee is dark brown, even close to a blackened color. The beans are characterized by drawn-out oil that glosses the surface. Coffee made from a Dark Roast has a robust, full body. The flavors from the coffee’s country of origin are almost entirely roasted out, taking on a very bold and smoky taste'
    },
    {
        id: 8,
        name: 'Continental',
        roast: 'dark',
        recommended: false,
        img: 'continental',
        description: 'Continental is a blend of fully washed and sun-dried natural East African coffees that have been dark roasted to deliver a blend of coffee that is both typical and well loved in Europe.'
    },
    {
        id: 9,
        name: 'New Orleans',
        roast: 'dark',
        recommended: false,
        img: 'new_orleans',
        description: 'Typically brewed from dark roast coffee grounds and a secret ingredient: roasted chicory. The addition of chicory makes coffee sweeter than usual without taking anything away from the dark roast\'s rich depth.'
    },
    {
        id: 10,
        name: 'European',
        roast: 'dark',
        recommended: false,
        img: 'european',
        description: 'Most European espresso blends use low-acid coffee beans, and incorporate a small amount of high-quality Robusta coffees'
    },
    {
        id: 11,
        name: 'Espresso',
        roast: 'dark',
        recommended: false,
        img: 'espresso',
        description: 'This roast is a moderately dark roast, similar to a French Roast. The beans will have oils on their surface and the coffee will have much body, depth, and sweetness. At this point, you’re starting to taste the roast much more than the beans, but hey, who doesn’t like a nice, dark-roasted coffee?'
    },
    {
        id: 12,
        name: 'Viennese',
        roast: 'dark',
        recommended: false,
        img: 'viennese',
        description: 'The lightest of the dark roasts producing a full-bodied cup with a strong aroma. The depth and sweetness of the beans are very well-developed but the individual characteristics of the beans are starting to become weaker. Oils are more well-formed on the bean’s surface.'
    },
    {
        id: 13,
        name: 'Italian',
        roast: 'dark',
        recommended: false,
        img: 'italian',
        description: 'This roast is very dark with a thin body, and it is beginning to impart slightly burnt tones to the flavor. It is also a common roast for espresso blends.'
    },
    {
        id: 14,
        name: 'French',
        roast: 'dark',
        recommended: false,
        img: 'french',
        description: 'French roast is considered to be a double roast coffee. This is a category of dark roasted coffee characterized by an intense and smoky-sweet flavor, accompanied by a thin body and mouthfeel. Compared to lighter roasts, French roast coffee is far less acidic and roasted in flavor. It often has a charred, charcoal-like note.'
    },
];

/*I also want to create a function that will create a special div to showcase 3 random coffees per reload!*/

/*better idea. make this the dont know? button. but i should set it to dont like our pick? try another! there as well,
 as random vid of "the coffee" */
function ourRecommendation() {
    let coffie, roast, recc, txt, element;
    coffie = document.getElementById("RecCoffee");
    roast = document.getElementById("RecRoast");
    txt = document.getElementById("RecText")
    /*recc = coffees.findIndex(({recommended}) => recommended === true)*/
    element= document.getElementsByClassName("recommend");
    recc= element[0].id-1
    coffie.innerHTML = coffees[recc].name
    roast.innerHTML = coffees[recc].roast
    txt.innerHTML = coffees[recc].description
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
            /*filteredCoffees[i].recommended = true;*/
            text[0].classList.remove("d-none")
            if (!(id.classList.contains("recommend"))) {      /*to prevent infinite adding */
                id.classList.add("recommend");
            }
        } else {
            coffees[i].recommended = false;
            /*filteredCoffees[i].recommended = false;*/
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
    let newCoffee = {
        id: newId,
        name: newName.value,
        roast: newRoast.value,
        recommended: false,
        img: 'none',
        description: 'this is your custom coffee! if you see this you are very lucky!!'
    };
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

/*function randomizer for the 'recommended' tab's videos. videos aare royalty free at pixabay.com*/
function recommendedVideo() {
    let videos, vid, random;
    videos = ['Coffee_drip.mp4', 'Coffee_Pour.mp4', 'Coffee_smoky.mp4', 'Coffee_espresso.mp4', 'Coffee_fancy.mp4', 'Coffee_flowers.mp4', 'Coffee_lemon.mp4', 'espresso1.mp4', 'espresso2.mp4', 'Coffee_yellow.mp4']
    vid = document.getElementById("RecVid");
    random = Math.floor(Math.random() * 9);
    return vid.src = "./assets/" + videos[random];
}

recommendedVideo();
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
