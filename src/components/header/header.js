let userMenuButton = document.getElementById('userMenuButton');
let userMenu = document.getElementById('userMenu');

let pageType = document.getElementsByClassName('content');
console.log('AYAYA', pageType.indexPage);

 if ('indexPage' in pageType) {
    let indexBtn = document.getElementById('indexPg');
        indexBtn.classList.add('-selected');
 }
 if ('newslistPage' in pageType) {
    let indexBtn = document.getElementById('newsPg');
        indexBtn.classList.add('-selected');
 }
 if ('pricePage' in pageType) {
    let indexBtn = document.getElementById('pricePg');
        indexBtn.classList.add('-selected');
 }
 if ('mapPage' in pageType) {
    let indexBtn = document.getElementById('mapPg');
        indexBtn.classList.add('-selected');
 }
 if ('contactsPage' in pageType) {
    let indexBtn = document.getElementById('contactsPg');
        indexBtn.classList.add('-selected');
 }
 if ('favsPage' in pageType) {
    let indexBtn = document.getElementById('favsPg');
        indexBtn.classList.add('-selected');
 }
 if ('cathalogPage' in pageType) {
    let indexBtn = document.getElementById('roomsPg');
        indexBtn.classList.add('-selected');
 }
 if ('favsPage' in pageType) {
    let indexBtn = document.getElementById('housesPg');
        indexBtn.classList.add('-selected');
 }
 if ('favsPage' in pageType) {
    let indexBtn = document.getElementById('bathsPg');
        indexBtn.classList.add('-selected');
 }
 if ('favsPage' in pageType) {
    let indexBtn = document.getElementById('carsPg');
        indexBtn.classList.add('-selected');
 }

//get auth tocken-------------------------------------------------------
let authState = true;
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

