import '../components';
import '../components/header/header.js';
let cardsList = [
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Vasye', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'}, type: 'active'},
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Dimitry', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},type: 'active'},
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Dimitry', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},type: 'active'},
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Vasye', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},type: 'active'},
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Dimitry', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},type: 'active'},
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Dimitry', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},type: 'active'},
    ];


let userMenuButton = document.getElementById('userMenuButton');
let userMenu = document.getElementById('userMenu');
let pageType = document.getElementsByClassName('content');
var authState = false;
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

async function main() {
    
    
    switch(pageType[0].id) {

        //login page logic---------------------
        case 'loginPage': {

            let loginBtn = document.getElementById('loginBtn');
            let loginInput = document.getElementById('login');
            let passwordInput = document.getElementById('password');

            loginBtn.addEventListener('click', function () {
                //console.log(loginInput.value);
                //console.log(passwordInput.value);
                console.log(authState);
                getAuth(loginInput.value, passwordInput.value);            
            });

            async function getAuth (login, password) {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const authData = await response.json();
                console.log('RES', authData);

                for (let key in authData) {
                    console.log(authData[key]);

                    if (login === authData[key].username){
                        authState = true;
                        checkAuth(authState);
                        return console.log('auth', login, password, authState);
                    } else {
                        return console.log('false');
                    }
                }                   
            }       
           break
        }

        //cathalog page logic---------------------
        case 'cathalogPage': {
            let menuExtra = document.getElementById('menuExtra');
            let menuExtraButton = document.getElementById('extraMenuButton');      
            menuExtraButton.addEventListener('click', function() {
            let menuClass = menuExtra.className;
            menuClass === 'content_container_searchBlockCathalogFilterContainer_innerContainer_menuExtra active' ? menuExtra.classList.add('hidden') : menuExtra.classList.remove('hidden')  
        })
        break
        }

        //register page logic---------------------
        case 'registerPage': {
    let regBtn = document.getElementById('registerBtn');
    let alertState = document.getElementById('alert');
    let loginInput = document.getElementById('login');
    let mailInput = document.getElementById('mail');
    let passwordInput = document.getElementById('password');
    let passwordCheckInput = document.getElementById('passwordCheck');

    let loginState = false;
    let mailState = false;
    let passwordState = false;
    let passwordCheckState = false;

    loginInput.addEventListener('change', function() {
        let loginContainer = document.getElementById('loginContainer');
        let loginAlert = document.getElementById('loginAlert');
        checkPassword(loginInput.value) 
        ? (loginContainer.classList.remove('wrong'), loginAlert.classList.remove('wrong'), loginState = true) 
        : (loginContainer.classList.add('wrong'), loginAlert.classList.add('wrong'), loginState = false)
    });
    mailInput.addEventListener('change', function() {
        let mailContainer = document.getElementById('mailContainer');
        let mailAlert = document.getElementById('mailAlert');
        checkPassword(mailInput.value) 
        ? (mailContainer.classList.remove('wrong'), mailAlert.classList.remove('wrong'), mailState = true) 
        : (mailContainer.classList.add('wrong'), mailAlert.classList.add('wrong'), mailState = false)
    });
    passwordInput.addEventListener('change', function() {
        let passwordContainer = document.getElementById('passwordContainer');
        let passwordAlert = document.getElementById('passwordAlert');
        checkPassword(passwordInput.value) 
        ? (passwordContainer.classList.remove('wrong'), passwordAlert.classList.remove('wrong'), passwordState = true) 
        : (passwordContainer.classList.add('wrong'), passwordAlert.classList.add('wrong'), passwordState = false)
    });
    passwordCheckInput.addEventListener('change', function() {
        let passwordCheckContainer = document.getElementById('checkContainer');
        let passwordCheckCAlert = document.getElementById('checkAlert');
        checkPassword(passwordCheckInput.value) 
        ? (passwordCheckContainer.classList.remove('wrong'), loginpasswordCheckCAlertAlert.classList.remove('wrong'), passwordCheckState = true) 
        : (passwordCheckContainer.classList.add('wrong'), passwordCheckCAlert.classList.add('wrong'), passwordCheckState = false)
    });

    regBtn.addEventListener('click', () => {
        if (!loginState || !mailState) {
            alertState.classList.add("wrong")
        }
        else {
            alertState.classList.remove("wrong")
        }
    })   
        }
    }
}

main();    
mainHeader();
checkAuth();

async function checkAuth (state) {

    let authBtn = document.getElementById('registerPg');
    let userDiv = document.getElementById('userDiv');

    if (state) {  
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
}


checkPassword = (password) => {
    //min 8 letter password, with at least a symbol, upper and lower case letters and a number
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password); 
}


let cardDiv = document.querySelector('#cardsList');
let items = document.querySelectorAll('#pagination li');
let cardsOnPage = 6;

for (let item of items) {
    item.addEventListener('click', function() {
        let pageNum = +this.innerHTML;

        let cardsStart= (pageNum - 1) * cardsOnPage; 
        let cardsEnd = cardsStart + cardsOnPage;

        let cards = cardsList.slice(cardsStart, cardsEnd);
        console.log(cards.length);

        
        span = document.getElementById("number");
        span.innerText = ''
        txt = document.createTextNode(cards.length);
        span.appendChild(txt);
               
        for (let card of cards) {
            
           // let div = document.createElement(cardDiv)
           // div.innerHTML = card.status
            //cardDiv.appendChild(div)

           // var td = document.createElement('td')
            //td.innerHTML = card.status
           // tr.appendChild(td);


        }
    });
}




