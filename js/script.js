
const CARDS=[
    {
        name: 'Шоколад Аленка',
        price: '89 руб.',
        img: 'Assets/Images/alenka.png',
    },

    {
        name: 'Масло Брест-Литовск',
        price: '165 руб.',
        img: 'Assets/Images/brest-litovsk.png',
    },

    {
        name: 'Пиво Essa',
        price: '65 руб.',
        img: 'Assets/Images/essa.png',
    },

    {
        name: 'Туалетная бумага',
        price: '7 руб.',
        img: 'Assets/Images/popkinaRadost.png',
    },
];
let count = 0;
let button = document.querySelector('#btnAddCard')
let cards=document.querySelector('#cards')

button.addEventListener('click', () => {
   
    let oneCard = document.createElement('div')
    oneCard.classList.add('cardStyle') 

    let name = document.createElement('h2')
    name.id = `name${count}`
    name.innerHTML = CARDS[count].name
    oneCard.appendChild(name)
    
    
       

    let img = document.createElement('img')
    img.classList.add('img')
    img.id = `price${count}`
    img.src=CARDS[count].img
    oneCard.appendChild(img)
    img.classList.add('imgCards')


    let price = document.createElement('h2')
    price.id = `price${count}`
    price.innerHTML = CARDS[count].price
    oneCard.appendChild(price)

    cards.appendChild(oneCard)

     count++ 
    if (count===4) 
    {button.disabled=true;
    button.classList.add('btn_disabled');
    };  
});





