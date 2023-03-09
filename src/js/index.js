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

const expression = /^[+-]?\d+$/;
const isInteger = (text) => !!text.match(expression);

const addInputState = (input, state) => {
    input.addEventListener('click', ()=> {
        console.log('check');
        let innerTextState = document.getElementById(`${input.id}_innerText`);
        console.log('innerTextState', innerTextState.innerText);
        const inputClass = input.className;
        inputClass.includes('active') ? input.classList.remove('active') : input.classList.add('active');
        state = innerTextState;
        return state;                                   
    });
}
const addLiEvent = (input) => {
    
    let len = input.getElementsByTagName('li').length;
    
    for (i=0; i < len; i++) {
        let liElm = document.getElementById(`${input.id}_${i}`)
        liElm.addEventListener('click', ()=> {
            
            cutStr = input.id;
            inputText = document.getElementById(`${cutStr.substr(0, (cutStr.length - 3))}_innerText`);
            inputText.innerText= liElm.innerText

        })
    }
}
async function mainHeader() {
    console.log(pageType[0].id);

    const createAdButton = document.getElementById('create_ad_button');
    createAdButton.addEventListener('click', () => {
        alert('Раздел в разработке');
    })
    const exitButton = document.getElementById('exit');
    exitButton.addEventListener ('click', () => {
        console.log('kekw');
        authState = false;
        checkAuth();
    })

    if (authState) {
        userMenuButton.addEventListener('click', function(e) {
            let menuClass = userMenu.className;
            e.preventDefault();
            console.log('kekw');
            if (menuClass.includes('hidden')) {
                userMenu.classList.remove('hidden');
                console.log('da');
            } else {
                userMenu.classList.add('hidden');
                console.log('net');
            };
        })
    }
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
            // search tab logic-----------------------
            const roomTab = document.getElementById('room_tab');
            const roomInputVars = ['Cтудия', '1 комната', '2 комнаты', '3 комнаты', '4 комнаты'];
            const roomInputCheckboxes = ['Стиральная машина', 'Микроволновая печь', 'Раздельный санузел', 'Кондиционер', 'Парковка', 'Лифт'];

            const houseTab = document.getElementById('house_tab');
            const houseInputVars = ['1 комната', '2 комнаты', '3 комнаты', '4 комнаты'];
            const houseInputCheckboxes = ['Стиральная машина', 'Микроволновая печь', 'Водоём', 'Кондиционер', 'Сауна', 'Мангал'];

            const bathTab = document.getElementById('bath_tab');
            const bathInputVars = ['Один', 'До трёх', 'До пяти', 'До десяти', 'Больше десяти'];
            const bathInputCheckboxes = ['Раздельные парные', 'Купель', 'Хамам', 'Сауна', 'Уличный котёл', 'Мангал'];

            const carsTab = document.getElementById('cars_tab');
            const carsInputVars = ['Седан', 'Хэтчбэк', 'Купе', 'Грузовая', 'Внедорожник'];
            const carsInputCheckboxes = ['Новая', 'Страховка', 'Спорт', 'Детское кресло', 'Безопасность', 'Электро\гибрид'];

            const cityState = document.getElementById('city_input');
            const cityUlState = document.getElementById('city_input_ul');
            let cityStateValue = '';

            const roomState = document.getElementById('room_input');
            const roomUlState = document.getElementById('room_input_ul');
            let roomStateValue = '';

            const inputFromElement = document.getElementById('from_input');
            let inputFromState = '0';

            const inputToElement = document.getElementById('to_input');
            let inputToState = '0';

            const mapState = document.getElementById('map_button');
            const mapContainer = document.getElementById('map');

            const optionState = document.getElementById('more_button');
            const optionContainer = document.getElementById('search_container');
            const extraOptionContainer = document.getElementById('extra_search_container');

            const showButton = document.getElementById('show_button');
            
            showButton.addEventListener('click', ()=>{

                let cityInnerText = document.getElementById('city_input_innerText');
                let roomInnerText = document.getElementById('room_input_innerText');
                cityStateValue = cityInnerText.innerText;
                roomStateValue = roomInnerText.innerText;
                
                const filterObject = {
                    city: ((cityStateValue && (cityStateValue !='Выберите')) ? cityStateValue : 'any') , 
                    room: ((roomStateValue && (roomStateValue !='Выберите')) ? roomStateValue : 'any'), 
                    priceFrom: (inputFromState ? inputFromState : 'any'), 
                    priceTo: (inputToState ? inputToState : 'any')}

                alert(JSON.stringify(filterObject));
                
            })

            const searchTabClick = (tabArray) => {
                
                const searchTabClear = (tabArray) => {
                    tabArray.forEach(elm => {
                        elm.className.includes('active') && elm.classList.remove('active')})   
                }
                const changeFilter = (input) => {

                    const newRoomUl = document.getElementById('room_input_ul');
                    const newRoomTitle = document.getElementById('room_box_title');
                    const newRoomInnerText = document.getElementById('room_input_innerText');

                    const check1 = document.getElementById('checkBox_1_title');
                    const check2 = document.getElementById('checkBox_2_title');
                    const check3 = document.getElementById('checkBox_3_title');
                    const check4 = document.getElementById('checkBox_4_title');
                    const check5 = document.getElementById('checkBox_5_title');
                    const check6 = document.getElementById('checkBox_6_title');
                    const checkBoxArr = [check1, check2, check3, check4, check5, check6];

                    const changeUl = (ul, checkbox) => {

                        newRoomInnerText.innerText = 'Выберите';
                        for (let i=0; i < ul.length; i++) {
                            let newLi = document.createElement('li');
                            newLi.setAttribute('id', `room_input_ul_${i}`)
                            newLi.innerText = ul[i];
                            newRoomUl.appendChild(newLi);
                        }

                        addLiEvent(newRoomUl);

                        for (let i=0; i < checkBoxArr.length; i++) {
                            checkBoxArr[i].innerText = checkbox[i];
                        }

                    }

                    switch (input) {

                        case 'room_tab':
                            newRoomUl.innerHTML = '';
                            newRoomTitle.innerText = 'Комнаты';
                            changeUl(roomInputVars, roomInputCheckboxes);

                            break;

                        case 'house_tab':
                                           
                            newRoomUl.innerHTML = '';
                            newRoomTitle.innerText = 'Комнат в доме';
                            changeUl(houseInputVars, houseInputCheckboxes);

                            break;

                        case 'bath_tab':

                            newRoomUl.innerHTML = '';
                            newRoomTitle.innerText = 'Отдыхающих';
                            changeUl(bathInputVars, bathInputCheckboxes);

                            break;

                        case 'cars_tab':

                            newRoomUl.innerHTML = '';
                            newRoomTitle.innerText = 'Тип автомобиля';
                            changeUl(carsInputVars, carsInputCheckboxes);

                            break;

                        default:
                            console.warn('error check case correctly')
                            break;
                    }
                };
                tabArray.forEach(elm => {
                    elm.addEventListener('click', ()=> {
                        searchTabClear(tabArray);
                        let inputClass = elm.className;                       
                        inputClass.includes('active') ? elm.classList.remove('active') : elm.classList.add('active'); 
                        changeFilter(elm.id);
                    })
                })
            };


            mapState.addEventListener('click', () => {
                mapContainer.className.includes('active') ? mapContainer.classList.remove('active') : mapContainer.classList.add('active'); 
                mapContainer.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            });

            optionState.addEventListener('click', () => {
                
                optionContainer.className.includes('active') ? (
                    optionContainer.classList.remove('active'), 
                    extraOptionContainer.classList.remove('active'),
                    optionState.classList.remove('active')
                    ) : 
                    (optionContainer.classList.add('active'), 
                    extraOptionContainer.classList.add('active'),
                    optionState.classList.add('active')); 
            });

            inputFromElement.addEventListener('input', () => {

                inputFromState = inputFromElement.value;
                checkRange();
                });

            inputToElement.addEventListener('input', () => {
                
                inputToState = inputToElement.value;
                checkRange();
            });

            const checkRange = () => {

            (isInteger(inputFromState) && (+inputFromState < +inputToState)) ? (inputFromElement.classList.remove('wrong'), showButton.removeAttribute('disabled')) : (inputFromElement.classList.add('wrong'), showButton.setAttribute('disabled', 'disabled'));
            (isInteger(inputToState) && (+inputFromState < +inputToState)) ? (inputToElement.classList.remove('wrong'),showButton.removeAttribute('disabled')) : (inputToElement.classList.add('wrong'),showButton.setAttribute('disabled', 'disabled'));
        }
        searchTabClick([roomTab, houseTab, bathTab, carsTab]);
        addInputState(roomState);
        addLiEvent(roomUlState);
        addInputState(cityState);
        addLiEvent(cityUlState);
        //rent types logic -----------------

        const housesTypesListButton = document.getElementById('rent_types_button');
        const housesTypes = document.getElementById('houses_types');
        const housesTypesMore = ['Ещё', 'одни', 'коттеджи', 'ещё', 'усадьбы'];

        const addMoreRentTypes = (typesArr, rentTypes) => {
            typesArr.forEach(elm => {
                let newElmWrapper = rentTypes.childNodes[3];
                let newElm = document.createElement('div');
                    newElm.classList.add('rentTypesCardsBlock_buttonList_item_button');
                        let newElmTitle = document.createElement('div');
                        newElmTitle.classList.add('rentTypesCardsBlock_buttonList_item_button_text');
                        newElmTitle.innerText = elm;
                        let newElmNumber = document.createElement('div');
                        newElmNumber.classList.add('rentTypesCardsBlock_buttonList_item_button_number');
                        newElmNumber.innerText = '100';
                    newElm.append(newElmTitle,newElmNumber);
                newElmWrapper.append(newElm);
            });
        }

        housesTypesListButton.addEventListener('click', () => {
            addMoreRentTypes(housesTypesMore, housesTypes);
            housesTypesListButton.remove();
        })

        // rent rooms block logic ----------------------
        
        const metroButton = document.getElementById('metro_button');
        const metroUlState = document.getElementById('metro_button_ul');
        const areaButton = document.getElementById('area_button');
        const areaUlState = document.getElementById('area_button_ul');
        const rentPrevButton = document.getElementById('rent_prev_button');
        const rentNextButton = document.getElementById('rent_next_button');
        const cardContent = document.querySelector('.rentCard');
        let sliderNext = 0;
        const sliderLine = document.querySelector('.rentRoomsCardsBlock_innerContainer_cards_line');

        const addContactEvent = (button) => {
            console.log(button);
            const counts = sliderLine.childElementCount;
            switch (button) {
                case 'card_contacts_button':
                    for (let i = 0; i < counts; i++) {
                        let element = document.getElementById(`${button}_${i}`);
                        console.log('element1', element);
                        element.addEventListener('click', () => {
                        const inputClass = element.className;
                        inputClass.includes('active') ? element.classList.remove('active') : element.classList.add('active');
        
                        })
                    }  
                    break;
                case 'card_more_button': 
                    for (let i = 0; i < counts; i++) {
                        let element = document.getElementById(`${button}_${i}`);
                        element.addEventListener('click', () => {
                        //const inputClass = element.className;
                        //inputClass.includes('active') ? element.classList.remove('active') : element.classList.add('active');
                            //console.log('eeee');
                            alert(element.id)
                        })
                    }
                default:
                    break;
            }                 
        }

        const addCardsButtonsEvent = () => {
            addContactEvent('card_contacts_button');
            addContactEvent('card_more_button');
        }

        const loadGoldCards = () => {
            let cardArray = [{
                price: '60.00 BYN',
                type: 'За сутки',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 10',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},
            {
                price: '65.00 BYN',
                type: 'За месяц',
                capacity: '4 (1+1)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 11',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},
            {
                price: '165.00 BYN',
                type: 'За сутки',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 12',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},

            {
                price: '165.00 BYN',
                type: 'За сутки',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 13',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},

            {
                price: '165.00 BYN',
                type: 'За сутки',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 14',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},

            {
                price: '165.00 BYN',
                type: 'За сутки',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 15',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},

            {
                price: '165.00 BYN',
                type: 'За сутки',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 16',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},
            {
                price: '165.00 BYN',
                type: 'За сутки',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 17',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},
            {
                price: '165.00 BYN',
                type: 'За сутки',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 18',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},
            {
                price: '165.00 BYN',
                type: 'За сутки',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 19',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},
            {
                price: '165.00 BYN',
                type: 'За сутки',
                capacity: '4 (2+2)',
                rooms: '4 комн.',
                size: '179',
                photo: '../../assets/images/card_1_Img.png',
                address: 'Минск, б-р Мулявина, д. 20',
                metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],
                description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
                ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png',
                name: 'Vasye',
                phone: ' +375 (29) 291-14-44',
                email: 'vladimir6234@tut.by'}},               
            ];

            const deleteCardId = () => {
                let contactButton = document.getElementById('card_contacts_button_0');
                contactButton.setAttribute('id', `card_contacts_button`); 
                let moreButton = document.getElementById('card_more_button_0');
                moreButton.setAttribute('id', `card_more_button`); 

                let priceState = document.getElementById('card_price_0');
                priceState.setAttribute('id', `card_price`);
                let typeState = document.getElementById('card_type_0');
                typeState.setAttribute('id', `card_type`);

                let capacitytate = document.getElementById('card_capacity_0');
                capacitytate.setAttribute('id', `card_capacity`); 
                let roomsState = document.getElementById('card_rooms_0');
                roomsState.setAttribute('id', `card_rooms`); 
                let sizeState = document.getElementById('card_size_0');
                sizeState.setAttribute('id', `card_size`);  
                
                let addressState = document.getElementById('card_address_0');
                addressState.setAttribute('id', `card_address`); 
                let metroState = document.getElementById('card_station_0_0');
                metroState.setAttribute('id', `card_station_0`);
                let stationState = document.getElementById('card_station_1_0');
                stationState.setAttribute('id', `card_station_1`); 
                
                let descriptionState = document.getElementById('card_description_0');
                descriptionState.setAttribute('id', `card_description`);  
            }

            deleteCardId();

           // console.log('Ayaya', contactButton);
            const new_card = cardContent.cloneNode(true);
            //console.log('Ayaya', new_card);
            sliderLine.innerHTML ='';

            for (let i = 0; i < cardArray.length; i++) {

                const item = document.createElement('div');
                item.classList.add('rentRoomsCardsBlock_innerContainer_cards_item');
                item.setAttribute('id', `card_item_${i}`);
                new_card.setAttribute('id', `rent_card_${i}`) 
                item.append(new_card.cloneNode(true));
                    
                sliderLine.append(item);
        
                const contactButton = document.getElementById('card_contacts_button');
                contactButton.setAttribute('id', `card_contacts_button_${i}`); 

                const moreButton = document.getElementById('card_more_button');
                moreButton.setAttribute('id', `card_more_button_${i}`);

                const priceState = document.getElementById('card_price');
                priceState.setAttribute('id', `card_price_${i}`);
                priceState.innerText = cardArray[i].price;

                const typeState = document.getElementById('card_type');
                typeState.setAttribute('id', `card_type_${i}`);
                typeState.innerText = cardArray[i].type;

                const capacityState = document.getElementById('card_capacity');
                capacityState.setAttribute('id', `card_capacity_${i}`);
                capacityState.innerText = cardArray[i].capacity;

                const roomsState = document.getElementById('card_rooms');
                roomsState.setAttribute('id', `card_rooms_${i}`);
                roomsState.innerText = cardArray[i].rooms;

                const sizeState = document.getElementById('card_size');
                sizeState.setAttribute('id', `card_size_${i}`);
                sizeState.innerText = cardArray[i].size;

                const addressState = document.getElementById('card_address');
                addressState.setAttribute('id', `card_address_${i}`);
                addressState.innerText = cardArray[i].address;

                const metroState = document.getElementById('card_station_0');
                metroState.setAttribute('id', `card_station_0_${i}`);
                metroState.innerText = cardArray[i].metro[0].name;

                const stationState = document.getElementById('card_station_1');
                stationState.setAttribute('id', `card_station_1_${i}`);
                stationState.innerText = cardArray[i].metro[1].name;

                const descriptionState = document.getElementById('card_description');
                descriptionState.setAttribute('id', `card_description_${i}`);
                descriptionState.innerText = cardArray[i].description;

               /* const item = document.createElement('div');
                item.classList.add('rentRoomsCardsBlock_innerContainer_cards_item');
                item.setAttribute('id', `card_item_${i}`);

                    const rentCard = document.createElement('div');
                    rentCard.classList.add('rentCard', 'vertical');
                    rentCard.setAttribute('id', `rent_card_${i}`);

                        const rentCard_top = document.createElement('div');
                        rentCard_top.classList.add('rentCard_top', 'vertical');

                            const rentCard_top_status = document.createElement('div');
                            rentCard_top_status.classList.add('rentCard_top_status', 'vertical');
                                rentCard_top_status_innerText = document.createElement('span');
                                rentCard_top_status_innerText.innerText ='Gold'
                                rentCard_top_status.append(rentCard_top_status_innerText)

                            const rentCard_top_photo = document.createElement('div');
                            rentCard_top_photo.classList.add('rentCard_top_photo', 'vertical');
                                const rentCard_top_photo_img = document.createElement('img');
                                rentCard_top_photo_img.setAttribute('src', `${cardArray[i].photo}`)
                                rentCard_top_photo.append(rentCard_top_photo_img);
                            
                            const rentCard_wrapper = document.createElement('div');
                            rentCard_wrapper.classList.add('rentCard_wrapper', 'vertical');

                                const rentCard_info = document.createElement('div');
                                rentCard_info.classList.add('rentCard_info', 'vertical');

                                    const rentCard_info_rooms = document.createElement('div');
                                    rentCard_info_rooms.classList.add('rentCard_info_rooms', 'vertical');

                                        const rentCard_info_rooms_price = document.createElement('div');
                                        rentCard_info_rooms_price.classList.add('rentCard_info_rooms_price', 'vertical');

                                            const rentCard_info_rooms_price_number = document.createElement('span');
                                            rentCard_info_rooms_price_number.classList.add('price');
                                            rentCard_info_rooms_price_number.setAttribute('id', `card_price_${i}`);
                                            rentCard_info_rooms_price_number.innerText = cardArray[i].price

                                            const rentCard_info_rooms_price_type = document.createElement('span');
                                            rentCard_info_rooms_price_type.classList.add('type');
                                            rentCard_info_rooms_price_type.setAttribute('id', `card_type_${i}`);
                                            rentCard_info_rooms_price_type.innerText = cardArray[i].type;

                                            rentCard_info_rooms_price.append(rentCard_info_rooms_price_number, rentCard_info_rooms_price_type);

                                        const rentCard_info_rooms_buttons = document.createElement('div');
                                        rentCard_info_rooms_buttons.classList.add('rentCard_info_rooms_buttons', 'vertical');

                                            const rentCard_info_rooms_buttons_item = document.createElement('div');
                                            rentCard_info_rooms_buttons_item.classList.add('rentCard_info_rooms_buttons_item');
                                        //--------------------------
                                        rentCard_info_rooms.append(rentCard_info_rooms_price,rentCard_info_rooms_buttons);

                                    rentCard_info.append(rentCard_info_rooms);
                                const rentCard_line = document.createElement('div');
                                rentCard_line.classList.add('rentCard_line', 'vertical');

                                const rentCard_bottom = document.createElement('div');
                                rentCard_bottom.classList.add('rentCard_bottom', 'vertical');

                                rentCard_wrapper.append(rentCard_info, rentCard_line, rentCard_bottom)
                            rentCard_top.append(rentCard_top_status, rentCard_top_photo, rentCard_wrapper);

                        rentCard.append(rentCard_top)
                    item.append(rentCard)
                sliderLine.append(item)*/
            }
        }
        
        loadGoldCards();
        const cardContentNew = document.querySelector('.rentCard');
    
        rentNextButton.addEventListener('click', () => {
            let offset = cardContentNew.offsetWidth + 30
            if (sliderNext > ((sliderLine.childElementCount - 2) * offset)) {sliderNext = -(offset)}
            sliderNext += (offset);
            sliderLine.style.left = -sliderNext + 'px';
        });

        rentPrevButton.addEventListener('click', () => {
            let offset = cardContentNew.offsetWidth + 30
            if (sliderNext <= 0) {sliderNext = ((sliderLine.childElementCount) * offset)}
            sliderNext -= offset;
            sliderLine.style.left = -sliderNext + 'px';  
        })
        addCardsButtonsEvent();
        
        addInputState(metroButton);
        addLiEvent(metroUlState);
        addInputState(areaButton);
        addLiEvent(areaUlState);

        //services block logic---------------------------------------
        const servicesMapButton = document.getElementById('services_map_button'); 
        servicesMapButton.addEventListener('click', () => {
            mapContainer.className.includes('active') ? mapContainer.classList.remove('active') : mapContainer.classList.add('active'); 
            mapContainer.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        });
            break;
        }
        //login page logic---------------------
        case 'loginPage': {
            console.log('check works');
            const loginBtn = document.getElementById('loginBtn');
            const loginInput = document.getElementById('login');
            const loginContainer = document.getElementById('loginContainer');
            const loginAlert = document.getElementById('loginAlert');

            const passwordInput = document.getElementById('password');
            const passwordContainer = document.getElementById('passwordContainer');

            if (loginBtn !== null) {
                loginBtn.addEventListener('click', function () {
                    console.log(authState);
                    getAuth(loginInput.value, passwordInput.value);            
                });
            }

            loginInput.addEventListener ('input', () => {
                console.log('input', loginInput.value);
                //validateLogin(loginInput.value);
                !validateLogin(loginInput.value) ? (loginContainer.classList.add('wrong'), loginAlert.classList.add('wrong')) : (loginContainer.classList.remove('wrong'), loginAlert.classList.remove('wrong')); 
            });
            passwordInput.addEventListener ('input', () => {
                console.log('input', passwordInput.value);
            });

            async function getAuth (login, password) {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const authData = await response.json();
                console.log('RES', authData);

                for (let key in authData) {
                    console.log(authData[key]);

                    if (login === authData[key].email){
                        let userData = {
                            login: login,
                            password: password
                        }
                        console.log(JSON.stringify(userData));
                        authState = true;
                        checkAuth(authState);
                        console.log('test ----------------');

                        alert(JSON.stringify(userData))
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

    regBtn.setAttribute('disabled', 'disabled');

    loginInput.addEventListener('input', function() {
        let loginContainer = document.getElementById('loginContainer');
        let loginAlert = document.getElementById('loginAlert');
        checkPassword(loginInput.value) 
        ? (loginContainer.classList.remove('wrong'), loginAlert.classList.remove('wrong'), loginState = true) 
        : (loginContainer.classList.add('wrong'), loginAlert.classList.add('wrong'), loginState = false);
        checkRegisterStates();
    });
    mailInput.addEventListener('input', function() {
        let mailContainer = document.getElementById('mailContainer');
        let mailAlert = document.getElementById('mailAlert');
        validateLogin(mailInput.value) 
        ? (mailContainer.classList.remove('wrong'), mailAlert.classList.remove('wrong'), mailState = true) 
        : (mailContainer.classList.add('wrong'), mailAlert.classList.add('wrong'), mailState = false);
        checkRegisterStates();
    });
    passwordInput.addEventListener('input', function() {
        let passwordContainer = document.getElementById('passwordContainer');
        let passwordAlert = document.getElementById('passwordAlert');
        checkPassword(passwordInput.value) 
        ? (passwordContainer.classList.remove('wrong'), passwordAlert.classList.remove('wrong'), passwordState = true) 
        : (passwordContainer.classList.add('wrong'), passwordAlert.classList.add('wrong'), passwordState = false);
        checkRegisterStates();
    });
    passwordCheckInput.addEventListener('input', function() {
        let passwordCheckContainer = document.getElementById('checkContainer');
        let passwordCheckAlert = document.getElementById('checkAlert');
        checkPassword(passwordCheckInput.value) 
        ? (passwordCheckContainer.classList.remove('wrong'), passwordCheckAlert.classList.remove('wrong'), passwordCheckState = true) 
        : (passwordCheckContainer.classList.add('wrong'), passwordCheckAlert.classList.add('wrong'), passwordCheckState = false);
        checkRegisterStates();
    });

    checkRegisterStates = () => {
        let userData = {
            login: '',
            email: '',
            password: '',
        }
        if (!loginState || !mailState || !passwordState || !passwordCheckState) {
            alertState.classList.add("wrong")
        }
        else {
            alertState.classList.remove("wrong")
            userData.login = loginInput.value,
            userData.email =  mailInput.value,
            userData.password = passwordInput.value,
            regBtn.removeAttribute('disabled');
            
            alert(JSON.stringify(userData))
        }
    }
    regBtn.addEventListener('click', () => {
        checkRegisterStates();
        window.location.href = '/submit.html'
    });   
        break;
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
            async function newsPagination(news) {
                let newsData = await getNews();
                
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
                        //console.log('yayay', el.id);
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

                        newsElm_Container_card.append(newsElm_Container_card_top, newsElm_Container_card_middle, newsElm_Container_card_bottom);

                        newsElm_Container.appendChild(newsElm_Container_card);
                        newsElmList.appendChild(newsElm_Container); 

                        newsElm = document.getElementById(el.id);

                 
                        
                    });
                }

                
                function displayPagination(arrData, newsOnPage, limit) {
                    const prevBtn = document.getElementById('prevBtn');
                    const nextBtn = document.getElementById('nextBtn');

                    const clearLi = (page) => {
                        let li = document.getElementById(`pagi_li_${page}`);
                            let currentItemLi = document.querySelector('li.--active');
                            currentItemLi.classList.remove('--active');               
                            li.classList.add('--active');
                    }
                    prevBtn.addEventListener('click', () => {
                        if (currentPage > 1) {
                            currentPage--
                            displayNewsList(newsData, rows, currentPage);
                            clearLi(currentPage);                          
                        } else {
                            currentPage = pagesLimit
                            displayNewsList(newsData, rows, currentPage);
                            clearLi(currentPage);
                        }
                    })
                    nextBtn.addEventListener('click', () => {

                        if (currentPage < pagesLimit) {
                            currentPage++
                            displayNewsList(newsData, rows, currentPage);
                            clearLi(currentPage);                          
                        } else {
                            currentPage = 1
                            displayNewsList(newsData, rows, currentPage);
                            clearLi(currentPage);
                        }
                    })

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
                                //console.log('li', liElm);
                                ulElm.append(liElm);  
                            }
                            if (i == paginationLimit -1) {
                                const liElm = displayPaginationBtn('...');
                                //console.log('li', liElm);
                                ulElm.append(liElm);  
                            }
                            if (i == paginationLimit-1) {
                                const liElm = displayPaginationBtn(pageCount);
                                //console.log('li', liElm);
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
                    liElm.setAttribute('id', `pagi_li_${page}`);
                    liElm.innerText = page;
                    console.log(currentPage, page);
                    if (currentPage == page) {liElm.classList.add('--active'); console.log('kekw', liElm);};

                    if (page !== '...') {
                        liElm.addEventListener('click', () => {
                            currentPage = page;
                            displayNewsList(newsData, rows, currentPage);
                            let currentItemLi = document.querySelector('li.--active');
                            currentItemLi.classList.remove('--active');               
                            liElm.classList.add('--active');
                        })
                       //console.log('ayay', pagesLimit);
                    } else {
                        liElm.addEventListener('click', () => {
                            console.log('test');
                        })
                    }

                    return liElm;                  
                }
                displayNewsList(newsData, rows, currentPage);
                displayPagination(newsData, rows, pagesLimit);

                const searchInput = document.getElementById('search_news_input');
                let searchInputState = ''
                const searchButton = document.getElementById('search_news_input_button');
    
                searchInput.addEventListener('input', () => {
                    searchInputState = searchInput.value;
                    //console.log(searchInputState);
                });
                searchButton.addEventListener('click', () => {

                    console.log('button', searchInputState, newsData);
                    let filtred = newsData.filter(function(val, i, arr) {
                        if (String(val.title).includes(searchInputState)) return val; 
                    })
                    //console.log(filtred);

                    displayNewsList(filtred, rows, currentPage);
                    displayPagination(filtred, rows, pagesLimit);
                })

                
            }
            newsPagination();


            break           
        }
        case 'newsPage': {
            break
        }
        case 'contactsPage': {
            const alertContent = document.querySelector('.contact_alert');
            let alertContentState = false;
            const closeAlertButton = document.getElementById('close_alert_button');
            
            const nameInput = document.getElementById('name');
            const nameAlert = document.getElementById('nameAlert');
            const nameContainer = document.getElementById('nameContainer');

            const mailInput = document.getElementById('mail');
            const mailAlert = document.getElementById('mailAlert');
            const mailContainer = document.getElementById('mailContainer');

            const messageText = document.getElementById('message_textarea');
            const sendMessage = document.getElementById('send_message_button');
            
            let nameState = ''
            let mailState = '';
            let messageTextState = '';

            const checkAlert = () => {
                alertContentState ? (alertContentState = true, alertContent.classList.remove('wrong')) : (alertContentState = false, alertContent.classList.add('wrong'))
            }
            checkAlert();

            const checkMessage = () => {
                if(!nameState || !mailState || !messageTextState) {
                    sendMessage.setAttribute('disabled', 'disabled')
                }
                else  sendMessage.removeAttribute('disabled')
            }
            checkMessage();
            nameInput.addEventListener('input', () => {
    
                nameState = nameInput.value;
                checkMessage();
            });

            mailInput.addEventListener('input', () => {
                console.log('log');
                validateLogin(mailInput.value) 
                ? (mailContainer.classList.remove('wrong'), mailAlert.classList.remove('wrong'), mailState = mailInput.value) 
                : (mailContainer.classList.add('wrong'), mailAlert.classList.add('wrong'), mailState = '');
                checkMessage();
            });
            messageText.addEventListener('input', () => {
                messageTextState = messageText.value;
                checkMessage();
            });

            closeAlertButton.addEventListener('click', () => {
                alertContentState = false;
                checkAlert();
            })
            sendMessage.addEventListener('click', () => {
                let messageJSON = {
                    name: nameState,
                    email: mailState,
                    messageText: messageTextState,
                }
                //console.log('a', messageJSON);   
                alert(JSON.stringify(messageJSON));
                alertContentState = true;
                checkAlert();
            });

            break;
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
}

const validateLogin = (value) => {
    const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let valid = !!String(value).toLowerCase().match(emailRegEx);
    return valid
    
    
}
checkPassword = (password) => {
    //min 8 letter password, with at least a symbol, upper and lower case letters and a number
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password); 
}

main();
