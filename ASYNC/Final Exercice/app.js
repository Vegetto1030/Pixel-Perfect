const searchInput = document.getElementById('search-input');
const resultsText = document.getElementById('results-text');
const resultsGrid = document.getElementById('results-grid');
const mealModal = document.getElementById('meal-modal');
const closeButton = document.querySelector('.close-button');
const mealDetails = document.getElementById('meal-details');

searchInput.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            await fetchMeals(query);
        }
    }
});

closeButton.addEventListener('click', () => {
    mealModal.style.display = 'none';
});

mealModal.addEventListener('click', (event) => {
    if (event.target === mealModal) {
        mealModal.style.display = 'none';
    }
});

async function fetchMeals(query) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    console.log(data);
    displayMeals(data.meals, query);
}

function displayMeals(meals, query) {
    resultsGrid.innerHTML = '';
    resultsText.textContent = `These are the results for ${query}`;
    if (meals) {
        meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.classList.add('meal');
            mealDiv.innerHTML = `<img src="${meal.strMealThumb}">
            <div class="meal-title">${meal.strMeal}</div>`;
            
            mealDiv.addEventListener('click', () => {
                showMealDetails(meal);
            });
            resultsGrid.appendChild(mealDiv);
        });
    } else {
        resultsText.textContent = `There is no result for ${query}`;
    }
}

function showMealDetails(meal) {
    mealDetails.innerHTML = `<img src="${meal.strMealThumb}">
    <div class="meal-title">${meal.strMeal}</div>
    <h3>Ingredients</h3>
    <ul>${ingredients(meal)}</ul>
    <h3>Instructions</h3>
    <p>${meal.strInstructions}</p>`;

    mealModal.style.display = 'block';
}

function ingredients(meal) {
    let ingredientsList = '';

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (!ingredient) {
            break;
        };

        if (ingredient.trim() !== '') {
            ingredientsList += `<li>${ingredient} - ${measure}</li>`;
        }
    }
    return ingredientsList;
}
