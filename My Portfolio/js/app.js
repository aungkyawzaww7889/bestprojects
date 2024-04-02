// UI 

// Start Home 


// Start navbar
const navbar = document.querySelector('.navbar');
// console.log(navbar);

const toogglerbtns = document.querySelector('.toogglerbtns');
// console.log(toogglerbtns);

const togglers = document.querySelector('.togglers');


togglers.addEventListener('click',()=>{
    togglers.classList.toggle('fivesixs');
});

navbar.addEventListener('mouseenter',function(){
    navbar.classList.add('opacity');
});


navbar.addEventListener('mouseleave',function(){
    navbar.classList.remove('opacity');
});



window.addEventListener('scroll',()=>{
    const scrolly = window.scrollY;
    // console.log(scrolly);

    if(scrolly > 400){
        navbar.classList.add('hiders');
        
    }else{
        navbar.classList.remove('hiders');

    }
});
// End Navbar


// Start flabour 
const flavourlorem = document.getElementById('flavourlorem');
// console.log(flavourlorem);

let loremtext = "I am web developer who creates designs and codes websites and web pages that include text slides, images effect, animation effect, audio video graphics and other features. As a Developer, I assist you in reaching your goals and aim fulfill your visions to the best of my abilities.";

let idx = 0;

function autotext(){
    flavourlorem.innerText = loremtext.slice(0,idx);
    idx++;

    // if(idx > loremtext.length){
    //     idx = 1;
    // }
}

autotext();

setInterval(autotext,50);
// End Flabour

// End Home 


// Start About Us Section 
const aboutusimgboxs = document.querySelector('.aboutusimgboxs');
const aboutustexts = document.querySelector('.aboutustexts');

window.addEventListener('scroll',()=>{
    const scrolly = window.scrollY;
    // console.log(scrolly);

    if(scrolly >= 55){
        aboutusimgboxs.classList.add('fromlefts');
        aboutustexts.classList.add('fromrights');
    }else{
        aboutusimgboxs.classList.remove('fromlefts');
        aboutustexts.classList.remove('fromrights');
    }
});
// End About us Section 



// Start Gallery Section 
const gallerys = document.getElementById('gallerys');
const imgs = document.querySelectorAll('.gallerys img');

let idnx = 0;
let idrx =0;

function rightchanges(){

    idnx++;
    if(idrx == 10){
        idrx = 0;
        // idnx--;
    }

    console.log(idnx);
}
// setInterval(rightchanges,1000);



// function leftchanges(){
//     for(idrx; idrx < 10; idrx--){
//         console.log(idrx);
//     }
// }

// leftchanges();

// setInterval(leftchanges,1000);




// End Gallery Section



// Start Review Section 
const changetextones = document.querySelector('.changetextones');
const changetexttwos = document.querySelector('.changetexttwos');
const changetextthrees = document.querySelector('.changetextthrees');
const changetextfours = document.querySelector('.changetextfours');

let loremtexts = ["Our Projects include three members ", "Our Project title is LOTAYA", "It is including its objectives, scope, timeline, resources, and the roles and responsibilities of team members.", 'Our Communication plan is Outline how communication will be managed within the team, including frequency of meetings, communication channels, reporting structure',"It takes 2 weeks, our project finished. ", "We discuss how to create, first we discuss how to create logo and then we drew sketch andthen built low fedility and high fedility"];

function getrandomnumber(){
    return loremtexts[Math.floor(Math.random()*loremtexts.length)];
}

// console.log(getrandomnumber());

function alwayswork(){
    changetextones.innerText = getrandomnumber();
    changetexttwos.innerText = getrandomnumber();
    changetextthrees.innerText = getrandomnumber();
    changetextfours.innerText = getrandomnumber();
}

alwayswork();

setInterval(alwayswork,3000);



const changenumberones = document.querySelector('.changenumberones');
const changenumbertwos = document.querySelector('.changenumbertwos');
const changenumberthrees = document.querySelector('.changenumberthrees');
const changenumberfours = document.querySelector('.changenumberfours');


let numbers = ["10", "25", "10", "20", "30", "50", "60"];

function getrandomnumbertwo(){
    return numbers[Math.floor( Math.random()*numbers.length)];
}

// console.log(getrandomnumbertwo());


function alwaysworkone(){
    changenumberones.innerText = getrandomnumbertwo();
    changenumbertwos.innerText = getrandomnumbertwo();
    changenumberthrees.innerText = getrandomnumbertwo();
    changenumberfours.innerText = getrandomnumbertwo();

}

alwaysworkone();
setInterval(alwaysworkone,2000);
// End Review Section 


//Start Footer Section 
const footerimages = document.querySelector('.footerimages');
const year = document.getElementById('year');
// console.log(year);

window.addEventListener('scroll',()=>{
    let scrolly = window.scrollY;
    // console.log(scrolly);

    if(scrolly >= 4910){
        footerimages.classList.add('footrights');
    }else{
        footerimages.classList.remove('footrights');

    }
});


const getyear = new Date().getUTCFullYear();
// console.log(getyear);

year.textContent = getyear;
// End Footer Section 
