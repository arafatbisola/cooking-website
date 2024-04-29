// subpage1.js

// Accordion for Ingredients
const ingredientsToggle = document.getElementById('ingredients-toggle');
const ingredientsList = document.getElementById('ingredients-list');

ingredientsToggle.addEventListener('click', () => {
    ingredientsList.classList.toggle('show');
});

// Accordion for Cooking Process
const processToggle = document.getElementById('process-toggle');
const processSteps = document.getElementById('process-steps');

processToggle.addEventListener('click', () => {
    processSteps.classList.toggle('show');
});

// Recipe Rating System
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        alert(`You rated this recipe ${rating} stars!`);
        // Here you can send the rating data to your backend server
    });
});

// Interactive Cooking Tips
const cookingTips = document.querySelectorAll('.cooking-tips li');

cookingTips.forEach(tip => {
    tip.addEventListener('mouseover', () => {
        const tooltipText = tip.getAttribute('title');
        tip.setAttribute('data-tooltip', tooltipText);
    });

    tip.addEventListener('mouseout', () => {
        tip.removeAttribute('data-tooltip');
    });
});

// Recipe Search Feature
const recipeSearch = document.getElementById('recipe-search');

recipeSearch.addEventListener('input', () => {
    const searchTerm = recipeSearch.value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe');

    recipes.forEach(recipe => {
        const recipeTitle = recipe.querySelector('.recipe-title').textContent.toLowerCase();
        if (recipeTitle.includes(searchTerm)) {
            recipe.style.display = 'block';
        } else {
            recipe.style.display = 'none';
        }
    });
});
