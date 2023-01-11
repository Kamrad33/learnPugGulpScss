import '../components';

let cardsList = [
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Vasye', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'}, type: 'active'},
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Dimitry', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},type: 'active'},
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Dimitry', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},type: 'active'},
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Vasye', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},type: 'active'},
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Dimitry', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},type: 'active'},
    {status: 'Gold',photo: '../../assets/images/card_1_Img.png',price: '65.00 BYN',capacity: '4 (2+2)',rooms: '4 комн.',size: '179',address: 'Минск, б-р Мулявина, д. 10',metro: [{icon: 'metro', name: 'Грушевка'}, {icon: 'rail', name: 'Шабаны'}],description: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...', ownerInfo: {photo: '../../assets/images/boyNextDoorImg.png', name: 'Dimitry', phone: ' +375 (29) 291-14-44', email: 'vladimir6234@tut.by'},type: 'active'},
    ];


let menuExtra = document.getElementById('menuExtra');

// extramenu func -------------------------------------------------
let menuExtraButton = document.getElementById('extraMenuButton');      
menuExtraButton.addEventListener('click', function() {
    let menuClass = menuExtra.className;
    menuClass === 'content_container_searchBlockCathalogFilterContainer_innerContainer_menuExtra active' ? menuExtra.classList.add('hidden') : menuExtra.classList.remove('hidden')  
})


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