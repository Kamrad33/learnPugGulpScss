/*let userMenuButton = document.getElementById('userMenuButton');
let userMenu = document.getElementById('userMenu');
let pageType = document.getElementsByClassName('content');
var headerVar = true;
console.log(mainVar);
async function mainHeader() {
    console.log(pageType[0].id);

    switch(pageType[0].id) {

        case 'indexPage': {
            let indexBtn = document.getElementById('indexPg');
            indexBtn.classList.add('-selected');
            console.log('This works 1');
            break
        }

        case 'newslistPage': {
            let indexBtn = document.getElementById('newsPg');
            indexBtn.classList.add('-selected');
            console.log('This works 2');
            break
        }

        case 'pricePage': {
            let indexBtn = document.getElementById('pricePg');
            indexBtn.classList.add('-selected');
            break
        }

        case 'mapPage': {
            let indexBtn = document.getElementById('mapPg');
            indexBtn.classList.add('-selected');
            break
        }

        case 'contactsPage': {
            let indexBtn = document.getElementById('contactsPg');
            indexBtn.classList.add('-selected');
            break
        }

        case 'favsPage': {
            let indexBtn = document.getElementById('favsPg');
            indexBtn.classList.add('-selected');
            break
        }

        case 'cathalogPage': {
            let indexBtn = document.getElementById('roomsPg');
            indexBtn.classList.add('-selected');
            break
        }

        case 'favsPage': {
            let indexBtn = document.getElementById('housesPg');
            indexBtn.classList.add('-selected');
            break
        }

        case 'favsPage': {
            let indexBtn = document.getElementById('bathsPg');
            indexBtn.classList.add('-selected');
            break
        }

        case 'favsPage': {
            let indexBtn = document.getElementById('carsPg');
            indexBtn.classList.add('-selected');
            break
        }

    }
}
mainHeader();

//get auth tocken-------------------------------------------------------



var authState = true;
let authBtn = document.getElementById('registerPg');
let userDiv = document.getElementById('userDiv');

if (authState) {   
    authBtn.classList.replace('primary', 'hidden');
    userDiv.classList.replace('hidden', 'visible');
}
else {
    userDiv.classList.replace('visible', 'hidden');
    authBtn.classList.replace('hidden', 'primary');   
}


userMenuButton.addEventListener('click', function() {
    let menuClass = userMenu.className;
    menuClass === 'header_Top_user_menu active' ? (userMenu.classList.add('hidden'), console.log('sdsds') ): userMenu.classList.remove('hidden')  
})

*/