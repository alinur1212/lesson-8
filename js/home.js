
// const menu = [
//  {
//         img: '',
//         name: '',
//  },
//  {
//     img: '',
//     name: '',
//  },
//  {
//     img: '',
//     name: '',
//  },
//  {
//     img: '',
//     name: '',
//  },
//  {
//     img: '',
//     name: '',
//  },
// ]

// const menuEl = document.getElementById('menu')

// menuEl.innerHTML = menu.map(m => {
//     retur`

const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
const recipes_cards = document.querySelector('.recipes-cards')

function getMeals(category = "Beef"){
    fetch(API + category)
    .then(response => response.json())
    .then(foods => {
        console.log(foods.meals);
        recipes_cards.innerHTML = foods.meals.slice(0,6).map( el => { 
            return renderCard(el)
        }).join('')
    })
}

getMeals()

buttnos = recipes_cards.querySelectorAll('button')

function renderCard(){
    return `
    <div class="card">
                    <div class="card-img">
                        <img src="${food.strMealThumb}    alt="">
                    </div>
                    <div class="card-text">
                        <h4></h4>
                        <p>
                            Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken
                        </p>
                        <div>
                            <p>40 Min - easy prep - 3 serves</p>
                            <button >view recipe</button>
                        </div>
                    </div>
                </div> `
}