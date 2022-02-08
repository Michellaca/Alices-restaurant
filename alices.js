/**
  PRO-1 forår 2022
  Michella Carstens
**/
console.log('alices.js = ok')

/** Selvstudiedag 1 spørgsmål 1:
Lad der være et copyright-tegn efterfulgt af dit navn samt dag, måned, år og
klokkeslet i <footer>. Ugedag og måned skal naturligvis skrives på dansk, shire-kalender,
***/

// globale variabler
let d = new Date();
let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];


/** Selvstudiedag 1 Spørgsmål 2: Fremstil en funktion, der kan tilføje restaurantens
navn, adresse og telefonnummer i en <div id="adresse"></div>, der placeres <footer>.
Genbrug denne funktion på alle websider. 2
***/

// Informationer i footeren
const info = {
  author: 'Michella Fleischer Carstens', // Spørgsmål 1
  dag: uge[ d.getDay() ],
  maaned: maaneder[ d.getMonth() ],
  dagImaaned: d.getDate(),
  aar: d.getFullYear(),
  time: d.getHours(),
  minut: d.getMinutes(),
  restaurant: 'Alice\'s Restaurant', // Spørgsmål 2
  adresse: 'Volden 234 <br>8000 Aarhus C', // Spørgsmål 2
  telefon: '42434445',


  // Metoder
  skrivTilFooter: function() {
    console.log('footeren.skrivTilFooter() = aktiv');
    footerInfo.innerHTML += `
      <div>
        &copy; Alle rettigheder forbeholdes<br>
        by ${this.author}
        ${this.dag}
        ${this.dagImaaned}.
        ${this.maaned}
        ${this.aar}.
      </div>
    `;
  },
  skrivAdresse: function() {
    footerInfo.innerHTML += `
      <div class="adresse">
        <h3>${this.restaurant}</h3>
        <p>
          ${this.adresse}<br>
          ${this.telefon}
        </p>
      </div>
    `
  }
}

info.skrivAdresse(); // Spørgsmål 2
info.skrivTilFooter(); // Spørgsmål 1


/* Selvstudie dag 1 spørgsmål 3:
Skab et array, hvor man kan se medsarbejdernes navne.
Skriv i første omgang navnene i en helt tilfældig rækkeføle.
Brug derefter metoden sort(),
således at man kan læse navnene i alfabetisk orden.
***/

// Medarbejdere
let vis, ansatte = [
  'Alice Sørensen - ejer',
  'Tjener: Peter Stefansen',
  'Tjener: Mikkel Thygesen',
  'Tjener: Aris tokat',
  'Tjener: William Nederdal',
  'Opvask: Sofie Jacobsen',
  'Opvask: Mille B. Dinesen',
  'Opvask: Sune Holm',
  'Pedel: Isaac Newton',
  'Tjener: Laylah Smith'
].sort(); // nem måde at sortere på


for (vis in ansatte){
  hvem.innerHTML += '<li>' + ansatte[ vis ] + '</li>';
}

/*** Selvstudiedag 1 spørgsmål 4 - jeg har selv lavet det om til dagens ret i stedet
for citat, så det gav mening på siden :)
***/

let citater = [
  'Avokado toast m. pocheret æg ',
  'Nachos med kylling + hjemmelavet guacamole',
  'Lakse sandwich af hjemmebagt surdejsbrød',
  'Alices Burger',
];

// selvkørende funktion
(function dagensCitat() {
  rndNo = Math.floor(Math.random() * citater.length );
  citat.innerHTML = '<em>' +  citater[ rndNo ] + '</em>';
})();




/** Selvstudiedag 2: Fremstil navigationsmenuen:
Nav bar - burgermenu
**/

let hide = true; // global

// hide or show
let hideShow = function(){

  if (hide == true) {
    document.getElementById('showBrg').style.display = 'block';
    hide = false;
  } else {
    document.getElementById('showBrg').style.display = 'none';
    hide = true;
  }

}

// detect click
burger.addEventListener('click', hideShow);





/**
 * Youtube: control the player by JavaScript
 * Play video when the containing tag is visible
 **/

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: '1o645n7OeeA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

/* Player kontrolleres af funktioner */
function onPlayerReady(event) {
  console.log("player is ready");
  event.target.pauseVideo();
}

function playItSam(event) {
  console.log("player is ready");
  event.target.playVideo(); // event from player
}

function onPlayerStateChange() {
  console.log("player state change");

  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    done = true;
  }
}

/* is element visible? if ok playVideo() */
var elementet = document.getElementById("synlig");

window.addEventListener("scroll", function() {

  if (elFllVsbl(elementet)) {
    console.log("play video");
    player.playVideo(); // with player you can manipulate the video
  } else {
    console.log("pause video")
    player.pauseVideo();
  }
}); // end eventlistener

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}


// Menukort
 // nu skal vi bruge vores JSON: jeg har kopiret det ind fra excel via JSON
menu = `{
     "menu": [
       {
  "Ark1": [
    {
      "Id": 1,
      "navn": "Club sandwich",
      "ret": "hovedret",
      "pris": 140
    },
    {
      "Id": 2,
      "navn": "moules frites",
      "ret": "hovedret",
      "pris": 160
    },
    {
      "Id": 3,
      "navn": "Lakse sandwich",
      "ret": "hovedret",
      "pris": 140
    },
    {
      "Id": 4,
      "navn": "Rørt tartar",
      "ret": "forret",
      "pris": 170
    },
    {
      "Id": 5,
      "navn": "braiseret gris",
      "ret": "hovedret",
      "pris": 170
    },
    {
      "Id": 6,
      "navn": "rosastegt kalv",
      "ret": "hovedret",
      "pris": 155
    },
    {
      "Id": 7,
      "navn": "saltet kammusling",
      "ret": "hovedret",
      "pris": 170
    },
    {
      "Id": 8,
      "navn": "ceviche",
      "ret": "forret",
      "pris": 75
    },
    {
      "Id": 9,
      "navn": "chorizo",
      "ret": "forret",
      "pris": 75
    },
    {
      "Id": 10,
      "navn": "Mango & ananas brownie",
      "ret": "dessert",
      "pris": 65
    },
    {
      "Id": 11,
      "navn": "Iskugle",
      "ret": "dessert",
      "pris": 65
    },
    {
      "Id": 12,
      "navn": "chokolademousse",
      "ret": "dessert",
      "pris": 65
    }
  ]
}`;

 const xxx = JSON.parse(menu);
 console.log( xxx.menu[1].titel )

 // loop der henter hele arrayet
 for (let i=0; i<xxx.menu.length; i++){


   if( xxx.menu[i].ret == 'dessert' ){

   // console.log( xxx.menu[i].titel )
   resultat.innerHTML += `
     <div class="menuTing flex" style="font-family: sans-serif;">
       <h2> ${xxx.menu[i].titel} </h2>
       <p> ${xxx.menu[i].beskrivelse} </p>
       <p> ${xxx.menu[i].pris} kr. </p>
     </div>
   `
   }
 }
