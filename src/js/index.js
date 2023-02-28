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
var authState = true;
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

async function mainContent() {
    
    console.log(pageType[0].id);
    
    switch(pageType[0].id) {
        //index page logic------------------

        case 'indexPage': {
            const cityState = document.getElementById('city_input');
            const roomState = document.getElementById('room_input');
            const inputFromElement = document.getElementById('from_input');
            const inputToElement = document.getElementById('to_input');
            let inputFromState = +0;
            let inputToState = +0;
            const expression = /^[+-]?\d+$/;
            const isInteger = (text) => !!text.match(expression);

                inputFromElement.addEventListener('input', () => {
                    inputFromState = inputFromElement.value;
                    checkRange();
                    })
    
                inputToElement.addEventListener('input', () => {
                    inputToState = inputToElement.value;
                    checkRange()
                })

            const checkRange = () => {
                console.log(+inputFromState < +inputToState);
            (isInteger(inputFromState) && (+inputFromState <= +inputToState)) ? inputFromElement.classList.remove('wrong') : inputFromElement.classList.add('wrong');
            (isInteger(inputToState) && (+inputFromState <= +inputToState)) ? inputToElement.classList.remove('wrong') : inputToElement.classList.add('wrong');

            }
            
            const addInputState = (input) => {
                input.addEventListener('click', ()=> {
                    const inputClass = input.className;
                    inputClass.includes('active') ? input.classList.remove('active') : input.classList.add('active');
                });
            }

            addInputState(roomState);
            addInputState(cityState);
        }
        //login page logic---------------------
        case 'loginPage': {

            let loginBtn = document.getElementById('loginBtn');
            let loginInput = document.getElementById('login');
            let passwordInput = document.getElementById('password');

            loginBtn.addEventListener('click', function () {
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
                        console.log('test ----------------');
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
        });

        async function getCards() {
            //const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
            //const newsData = await response.json();
            cardsData = [{
                status: 'Gold', 
                photo: 'PHOTO', 
                price: '65.00 BYN',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: 'PHOTO', name: 'Vasye', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},
                type: 'active'
            },]
            return cardsData;
        }
        async function cardsPagination() {

                const cardsData = await getCards();
                let currentPage = 1;
                let rows = 6;

                function displayCardsList(arrData, cardsOnPage, page) {
                    
                    const cardsElmList = document.querySelector('#cardsList');
                    //cardsElmList.innerHTML = '';
                    console.log('PAGINATION', cardsElmList);
                    let start = cardsOnPage * (page - 1);
                    let end = start + cardsOnPage;
                    let cardsPaginated = arrData.slice(start, end);

                    cardsPaginated.forEach((el) => {
                        const cardsItemContainer = document.createElement('div');
                        cardsItemContainer.classList.add('.rentRoomsCardsBlock_innerContainer_cards_item');

                            const rentCard = document.createElement('div');
                            rentCard.classList.add('./rentCard');

                            const rentCard_top = document.createElement('div');
                            rentCard_top.classList.add('./rentCard_top');
                                const rentCard_top_status = document.createElement('div');
                                rentCard_top_status.classList.add('./rentCard_top_status');
                                rentCard_top_status.innerText = cardsData.status
                                const rentCard_top_photo = document.createElement('div');
                                rentCard_top_photo.classList.add('./rentCard_top_photo');
                                rentCard_top_photo.innerText = cardsData.photo

                                rentCard_top.append(rentCard_top_status, rentCard_top_photo);

                            const rentCard_wrapper = document.createElement('div');
                            rentCard_wrapper.classList.add('./rentCard_wrapper');
                                const rentCard_info = document.createElement('div');
                                rentCard_info.classList.add('./rentCard_info');
                                const rentCard_line = document.createElement('div');
                                rentCard_line.classList.add('./rentCard_line');
                                const rentCard_bottom = document.createElement('div');
                                rentCard_bottom.classList.add('./rentCard_bottom');

                            //cardsItemContainer.appendChild(cardsItemContainer);     
                    })

                }

                function displayPagination(arrData, newsOnPage) {

                    let pageCount = Math.ceil(arrData.length / newsOnPage);
                    const ulElm = document.querySelector('#pagination')
                    ulElm.innerHTML = ('');
                    
                    for (let i = 0; i < pageCount; i++) {
                            const liElm = displayPaginationBtn(i + 1);
                            console.log('li', liElm);
                            ulElm.append(liElm);   
                    }
                }

                
                function displayPaginationBtn(page) {

                    const liElm = document.createElement('li');
                    liElm.innerText = page;

                    if (currentPage == page) liElm.classList.add('--active');

                    liElm.addEventListener('click', () => {
                        currentPage = page;
                        displayCarsList(newsData, rows, currentPage);
                        let currentItemLi = document.querySelector('li.--active');
                        currentItemLi.classList.remove('--active');
                        
                        liElm.classList.add('--active');
                    })
                    return liElm;                  
                }
                displayCardsList(cardsData, rows, currentPage);
                displayPagination(cardsData, rows);
            }
        cardsPagination();    
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
    });   
        }

        case 'newslistPage': {

            async function getNews() {
                const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
                const newsData = await response.json();
                return newsData;
            }
            async function newsRout(news) {
                console.log(news);
            }
            async function newsPagination() {
                const newsData = await getNews();
                let currentPage = 1;
                let rows = 9;
                let pagesLimit = 12;
                function displayNewsList(arrData, newsOnPage, page) {
                    
                    const newsElmList = document.querySelector('.newsList_content_innerContainer_newsCards');
                    newsElmList.innerHTML = '';
                    console.log('PAGINATION', newsElmList);
                    let start = newsOnPage * (page - 1);
                    let end = start + newsOnPage;
                    let newsPaginated = arrData.slice(start, end);

                    newsPaginated.forEach((el) => {
                        console.log('yayay', el.id);
                        const newsElm_Container = document.createElement('div');
                        newsElm_Container.classList.add('newsList_content_innerContainer_newsCards_card');

                        const newsElm_Container_card = document.createElement('div');
                        newsElm_Container_card.classList.add('newsCard');

                        //top container
                        const newsElm_Container_card_top = document.createElement('div');
                        newsElm_Container_card_top.classList.add('newsCard_top');
                            const newsElm_Container_card_top_photo = document.createElement('div');
                            newsElm_Container_card_top_photo.classList.add('newsCard_top_photo');
                        newsElm_Container_card_top.append(newsElm_Container_card_top_photo);

                        //middle container
                        const newsElm_Container_card_middle = document.createElement('div');
                        newsElm_Container_card_middle.classList.add('newsCard_middle');
                            const newsElm_Container_card_title = document.createElement('div');
                            newsElm_Container_card_title.classList.add('newsCard_middle_title');
                            newsElm_Container_card_title.innerHTML = `<span>${el.title}</span>`;
                            const newsElm_Container_card_description = document.createElement('div');
                            newsElm_Container_card_description.classList.add('newsCard_middle_description');
                            newsElm_Container_card_description.innerHTML = `<span>${el.body}</span>`;
                            const middle_hr = document.createElement('hr');
                        newsElm_Container_card_middle.append(newsElm_Container_card_title, newsElm_Container_card_description, middle_hr);

                        //bottom container
                        const newsElm_Container_card_bottom = document.createElement('div');
                        newsElm_Container_card_bottom.classList.add('newsCard_bottom');
                            const newsElm_Container_card_date = document.createElement('div');
                            newsElm_Container_card_date.classList.add('newsCard_bottom_date');
                            newsElm_Container_card_date.innerText = `${el.id} января 2008`;
                            const newsElm_Container_card_button = document.createElement('div');
                            newsElm_Container_card_button.classList.add('newsCard_bottom_button');
                            newsElm_Container_card_button.innerHTML = `<button id = ${el.id} onclick="document.location='/news.html/${el.id}'" class="stdBtn primary purple light w7 standard" style="gap:5px;flex-direction:left;width:undefined;">
                            <div class="stdBtn_innerText">Читать
                            </div>
                          </button>`
                        newsElm_Container_card_bottom.append(newsElm_Container_card_date, newsElm_Container_card_button);

                        //const testHtml = document.createElement('div')
                        //testHtml.innerHTML = `<div class = 'class1'>TEST</div>`;
                        //console.log('testHtml', testHtml);
                        newsElm_Container_card.append(newsElm_Container_card_top, newsElm_Container_card_middle, newsElm_Container_card_bottom);

                        newsElm_Container.appendChild(newsElm_Container_card);
                        newsElmList.appendChild(newsElm_Container); 

                        newsElm = document.getElementById(el.id);

                 
                        
                    });
                }

                
                function displayPagination(arrData, newsOnPage, limit) {

                    let pageCount = Math.ceil(arrData.length / newsOnPage);
                    const ulElm = document.querySelector('#pagination')
                    ulElm.innerHTML = ('');
                    let paginationLimit = limit;

                    if (pageCount <= paginationLimit) {

                        for (let i = 0; i < pageCount; i++) {
                            const liElm = displayPaginationBtn(i + 1);
                            console.log('li', liElm);
                            ulElm.append(liElm);  
                        }
                    } else {
                        for (let i = 0; i < paginationLimit; i++) {
                            if (i < paginationLimit - 2) {
                                const liElm = displayPaginationBtn(i + 1);
                                console.log('li', liElm);
                                ulElm.append(liElm);  
                            }
                            if (i == paginationLimit -1) {
                                const liElm = displayPaginationBtn('...');
                                console.log('li', liElm);
                                ulElm.append(liElm);  
                            }
                            if (i == paginationLimit-1) {
                                const liElm = displayPaginationBtn(pageCount);
                                console.log('li', liElm);
                                ulElm.append(liElm); 
                            }
                        }

                    }
                    /*for (let i = 0; i < pageCount; i++) {
                            const liElm = displayPaginationBtn(i + 1);
                            console.log('li', liElm);
                            ulElm.append(liElm);   
                    }*/
                }

                
                function displayPaginationBtn(page) {

                    const liElm = document.createElement('li');
                    liElm.innerText = page;

                    if (currentPage == page) liElm.classList.add('--active');

                    if (page !== '...') {
                        liElm.addEventListener('click', () => {
                            currentPage = page;
                            displayNewsList(newsData, rows, currentPage);
                            let currentItemLi = document.querySelector('li.--active');
                            currentItemLi.classList.remove('--active');               
                            liElm.classList.add('--active');
                        })
                       console.log('ayay', pagesLimit);
                    } else {
                        liElm.addEventListener('click', () => {
                            console.log('test');
                        })
                    }

                    return liElm;                  
                }
                displayNewsList(newsData, rows, currentPage);
                displayPagination(newsData, rows, pagesLimit);
            }
            newsPagination();
            break           
        }
        case 'newsPage': {
            
        }
    }
}

async function main () {
    
    await mainContent();    
    await mainHeader();
    await checkAuth();
}



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

    userMenuButton.addEventListener('click', function(e) {
        let menuClass = userMenu.className;
        e.preventDefault();
        //menuClass.includes('hidden') ? userMenu.classList.remove('hidden') : userMenu.classList.add('');
        if (menuClass.includes('hidden')) {
            userMenu.classList.remove('hidden');
            console.log('da');
        } else {
            userMenu.classList.add('1');
            console.log('net');
        }
        //menuClass === 'header_Top_user_menu active' ? (userMenu.classList.add('hidden'), console.log('sdsds') ): userMenu.classList.remove('hidden')
        //menuClass === 'header_Top_user_menu active' ? (userMenu.classList.replace('active', 'hidden'), console.log('sdsds') ): userMenu.classList.replace('hidden', 'active')
        //menuClass === 'header_Top_user_menu active' ? userMenu.classList.replace('active', 'hidden') : userMenu.classList.remove('hidden');
        //userMenu.classList.replace('hidden', 'active') ;
    })
}


checkPassword = (password) => {
    //min 8 letter password, with at least a symbol, upper and lower case letters and a number
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password); 
}

main();
