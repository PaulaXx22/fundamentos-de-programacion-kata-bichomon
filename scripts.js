console.log(document.title);


//punto 1
const Generation1Pokémon= document.querySelector('#gen-1');
Generation1Pokémon.textContent = 'Generasión 1 Pokimon';

//punto 2
const infocard = document.querySelector('.infocard-list')
infocard.style.background = 'orange'

//punto 3
const urllocal = document.URL
console.log ( urllocal)

//punto 4
const urldominio = document.domain
console.log (urldominio)


//punto 5
const imagendonos = document.querySelectorAll('.img-fixed')
 console.log (imagendonos)


//punto 6 
 const camabiarimg = document.images;
 for (let i = 0; i < camabiarimg.length; i++) {
    camabiarimg[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
 };


 //punto extra 

let infoCards = document.querySelectorAll(".infocard-lg-data.text-muted")
for (i = 0 ; i < infoCards.length; i++){
    if (infoCards[i].innerHTML.includes("flying")){
        infoCards[i].style.backgroundColor = "black";
    }
}