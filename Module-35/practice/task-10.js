const loadRandomCocktail = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`
    fetch(url)
    .then(response => response.json())
    .then(data => displayLoadedRandomCocktail(data.drinks))
}

const displayLoadedRandomCocktail = cocktails => {
    const loadCocktail = document.getElementById('load-cocktail');
    loadCocktail.textContent = ``;
    cocktails.forEach(cocktail => {
        const cocktailDiv = document.createElement('div');
        cocktailDiv.classList.add('col');
        cocktailDiv.innerHTML = `
        <div class="card h-100">
                    <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Name: ${cocktail.strCategory}</h5>
                      <h5 class="card-title">Category: ${cocktail.strAlcoholic}</h5>
                      <p class="card-text">${cocktail.strInstructions}</p>
                    </div>
                  </div>
        `;
        loadCocktail.appendChild(cocktailDiv);
    })
}

