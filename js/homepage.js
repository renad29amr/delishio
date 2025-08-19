let recipes = [];
let currentUser = null;

// Default recipes that are always available
const defaultRecipes = [
    {
        id: 1,
        name: "Fluffy Pancakes",
        category: "breakfast",
        prepTime: "10",
        cookTime: "15",
        servings: "4",
        description: "Light and fluffy pancakes perfect for breakfast",
        ingredients: ["2 cups all-purpose flour", "2 tablespoons sugar", "2 teaspoons baking powder", "1/2 teaspoon salt", "2 eggs", "1 3/4 cups milk", "1/4 cup melted butter"],
        instructions: "1. Mix dry ingredients in a bowl\n2. In another bowl, whisk eggs, milk, and melted butter\n3. Combine wet and dry ingredients until just mixed\n4. Heat griddle and cook pancakes until bubbles form\n5. Flip and cook until golden brown\n6. Serve hot with syrup",
        imageUrl: "../images/fluffy_pankaks.png",
        createdAt: new Date().toISOString(),
        isDefault: true
    },
    {
        id: 2,
        name: "Cheese Omelette",
        category: "breakfast",
        prepTime: "5",
        cookTime: "10",
        servings: "2",
        description: "Classic cheese omelette with herbs",
        ingredients: ["4 eggs", "1/4 cup milk", "1/2 cup shredded cheese", "2 tablespoons butter", "Salt and pepper to taste", "Fresh herbs (optional)"],
        instructions: "1. Beat eggs with milk, salt, and pepper\n2. Heat butter in non-stick pan\n3. Pour in egg mixture\n4. As eggs set, pull edges toward center\n5. When almost set, add cheese to one half\n6. Fold omelette in half and slide onto plate",
        imageUrl: "../images/Cheese_Omelette.png",
        createdAt: new Date().toISOString(),
        isDefault: true
    },
    {
        id: 3,
        name: "Italian Pasta Carbonara",
        category: "dinner",
        prepTime: "5",
        cookTime: "20",
        servings: "2",
        description: "a classic Roman dish",
        ingredients: ["28 spaghetti", "113 pancetta or bacon, diced", "2 large eggs", "1 cup grated Parmesan cheese", "2 cloves garlic, minced", "Salt and black pepper", "Fresh parsley, chopped (optional)"],
        instructions: "1. Fresh parsley, chopped (optional)\n2. In a bowl, whisk eggs and Parmesan cheese together.\n3. In a large skillet, cook pancetta with garlic until crispy.\n4. Add the cooked pasta to the skillet and toss well.\n5. Remove from heat, then quickly stir in the egg-cheese mixture, adding a splash of pasta water if needed for creaminess.\n6. Season with salt, pepper, and garnish with parsley. Serve immediately.",
        imageUrl: "../images/Italian_Pasta_Carbonara.png",
        createdAt: new Date().toISOString(),
        isDefault: true
    },
    {
        id: 4,
        name: "Grilled Ribeye Steak",
        category: "dinner",
        prepTime: "5",
        cookTime: "20",
        servings: "2",
        description: "a thick cut of beef, prized for its rich, buttery flavor and tender texture, achieved by grilling over an open flame",
        ingredients: [
            "2 ribeye steaks (about 1 inch thick)",
            "2 tablespoons olive oil",
            "Salt and black pepper, to taste",
            "2 cloves garlic, crushed",
            "Fresh rosemary sprigs (optional)"
        ],
        instructions: "1. Brush steaks with olive oil and season generously with salt and pepper.\n2. Preheat grill or grill pan to high heat.\n3. Grill steaks for 4—5 minutes per side for medium-rare, or until desired doneness.\n4. During the last minute, add garlic and rosemary for extra flavor.\n5. Rest steaks for 5 minutes before slicing. Serve hot.",
        imageUrl: "../images/Grilled_Ribeye_Steak.png",
        createdAt: new Date().toISOString(),
        isDefault: true
    },
    {
        id: 5,
        name: "Espresso",
        category: "hot-drinks",
        prepTime: "5",
        cookTime: "5",
        servings: "1",
        description: "a rich, concentrated coffee shot brewed under high pressure, delivering bold flavor and a creamy crema",
        ingredients: [
            "18—20 g finely ground coffee beans",
            "Hot water (about 2 oz / 60 ml)"
        ],
        instructions: "1. Fill the portafilter with ground coffee and tamp evenly.\n2. Lock it into the espresso machine.\n3. Brew for 25—30 seconds until you have a rich, concentrated shot.\n4. Serve immediately, plain or as a base for other coffee drinks.",
        imageUrl: "../images/Espresso.png",
        createdAt: new Date().toISOString(),
        isDefault: true
    },
    {
        id: 6,
        name: "Cappuccino",
        category: "hot-drinks",
        prepTime: "5",
        cookTime: "5",
        servings: "1",
        description: "a classic coffee drink with a bold espresso base, balanced by steamed milk and a thick layer of velvety foam",
        ingredients: [
            "1 shot espresso (about 1 oz / 30 ml)",
            "2 oz (60 ml) steamed milk",
            "2 oz (60 ml) milk foam"
        ],
        instructions: "1. Brew a shot of espresso into a cup.\n2. Steam milk until hot with a thick, velvety foam.\n3. Pour steamed milk over espresso, then top with foam.\n4. Serve immediately, optionally dusted with cocoa powder.",
        imageUrl: "../images/Cappuccino.png",
        createdAt: new Date().toISOString(),
        isDefault: true
    },
    {
        id: 7,
        name: "Iced Lemon Mint Cooler",
        category: "cold-drinks",
        prepTime: "10",
        cookTime: "0",
        servings: "2",
        description: "a refreshing, zesty cold drink with tangy lemon and cooling mint, perfect for a hot day",
        ingredients: [
            "2 cups cold water",
            "1/4 cup fresh lemon juice (about 2 lemons)",
            "2 tablespoons honey or simple syrup",
            "10 fresh mint leaves",
            "1 cup ice cubes",
            "Lemon slices, for garnish (optional)"
        ],
        instructions: "1. In a pitcher, combine cold water, lemon juice, and honey or simple syrup. Stir until fully dissolved.\n2. Muddle mint leaves gently in the bottom of two glasses to release flavor.\n3. Fill glasses with ice cubes and pour the lemon mixture over the ice.\n4. Garnish with lemon slices and extra mint leaves if desired. Serve chilled.",
        imageUrl: "../images/Iced_ Lemon_ Mint_ Cooler.png",
        createdAt: new Date().toISOString(),
        isDefault: true
    },
    {
        id: 8,
        name: "Watermelon Coconut Slush",
        category: "cold-drinks",
        prepTime: "15",
        cookTime: "0",
        servings: "2",
        description: "a sweet and hydrating cold drink blending juicy watermelon with creamy coconut, served icy cold",
        ingredients: [
            "3 cups seedless watermelon, cubed",
            "1/2 cup coconut milk",
            "1 tablespoon lime juice",
            "1 tablespoon agave syrup (optional, for extra sweetness)",
            "1 cup ice cubes",
            "Watermelon wedges, for garnish (optional)"
        ],
        instructions: "1. Add watermelon cubes, coconut milk, lime juice, and agave syrup (if using) to a blender.\n2. Add ice cubes and blend until smooth and slushy.\n3. Pour into two chilled glasses.\n4. Garnish with watermelon wedges if desired. Serve immediately with a straw.",
        imageUrl: "../images/Watermelon_Coconut_ Slush.png",
        createdAt: new Date().toISOString(),
        isDefault: true
    },
    {
        id: 9,
        name: "Tiramisu",
        category: "desserts",
        prepTime: "5",
        cookTime: "10",
        servings: "2",
        description: "Tiramisu is an Italian dessert made of ladyfinger pastries dipped in coffee, layered with a whipped mixture of egg yolks, sugar, and mascarpone, and topped with cocoa powder.",
        ingredients: ["1 cup strong brewed coffee(cooled)", "3 tablespoons coffee liqueur (optional)", "3 large eggs", "½ cup of sugar", "1 cup mascarpone cheese", "1 cup heavy cream", "24 ladyfinger biscuits", "Cocoa powder(for dusting)"],
        instructions: "Mix coffee and coffee liqueur in a shallow dish.Beat egg yolks with sugar until pale. Add mascarpone and mix until smooth.In another bowl, whip cream until stiff peaks form, then fold into mascarpone mixture.In a separate clean bowl, beat egg whites until stiff and fold in gently.Dip ladyfingers briefly into coffee mixture and layer them in a dish.Spread half of the cream mixture, then repeat layers.Chill for at least 4 hours, dust with cocoa before serving.",
        imageUrl: "../images/Tiramisu.png",
        createdAt: new Date().toISOString(),
        isDefault: true
    },
    {
        id: 10,
        name: "Crème Brûlée",
        category: "desserts",
        prepTime: "5",
        cookTime: "10",
        servings: "2",
        description: "Crème brûlée, also known as burnt cream, Cambridge burnt cream, or Trinity cream, and virtually identical to crema catalana, is a dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar.",
        ingredients: ["2 cups heavy cream", "5 large egg yolks", "½ cup sugar (plus extra for topping)", "1 teaspoon vanilla extract", "Pinch of salt"],
        instructions: "Preheat oven to 325°F (160°C).In a saucepan, heat cream until warm, not boiling.In a bowl, whisk egg yolks, sugar, vanilla, and salt.Slowly pour warm cream into the egg mixture while whiskin Pour into ramekins and place them in a baking dish. Add hot water to the dish halfway up the sides of the ramekins.Bake for 40—45 minutes until set but still slightly jiggly.chill for at least 2 hours.Sprinkle sugar on top and caramelize with a kitchen torch before serving..",
        imageUrl: "../Images/Creme_Brulee.png",
        createdAt: new Date().toISOString(),
        isDefault: true
    }
];

// Load recipes - always include default recipes
function loadRecipesFromStorage() {
    try {
        // Start with default recipes
        recipes = [...defaultRecipes];

        // Add any additional recipes from storage
        const storedRecipes = JSON.parse(localStorage.getItem('recipeDatabase') || '[]');
        const additionalRecipes = storedRecipes.filter(recipe => !recipe.isDefault);
        recipes = [...recipes, ...additionalRecipes];

        // Update storage to include defaults
        saveRecipesToStorage();

        console.log(`Loaded ${recipes.length} recipes (${defaultRecipes.length} default + ${additionalRecipes.length} custom)`);
    } catch (e) {
        console.log('Error loading recipes from storage:', e);
        recipes = [...defaultRecipes];
        saveRecipesToStorage();
    }
}

// Save recipes to storage
function saveRecipesToStorage() {
    try {
        localStorage.setItem('recipeDatabase', JSON.stringify(recipes));
    } catch (e) {
        console.log('Error saving recipes to storage:', e);
    }
}

// Load user session
function loadUserSession() {
    try {
        const currentUserData = localStorage.getItem('currentUser');
        if (currentUserData) {
            currentUser = JSON.parse(currentUserData);
        }
    } catch (e) {
        console.log('Error loading user session:', e);
    }
}

// Check if current user is admin
function isAdmin() {
    return currentUser && (currentUser.role === 'admin' || currentUser.isAdmin === true);
}

// Load all data and initialize
function loadData() {
    loadRecipesFromStorage();
    loadUserSession();
    populateMenus();

    // Show admin controls if user is admin
    if (isAdmin()) {
        showAdminControls();
    }
}



// Delete recipe function
function deleteRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    if (recipe.isDefault) {
        alert('Default recipes cannot be deleted, but they can be edited.');
        return;
    }

    if (confirm(`Are you sure you want to delete "${recipe.name}"?`)) {
        recipes = recipes.filter(r => r.id !== recipeId);
        saveRecipesToStorage();
        populateMenus();
        alert('Recipe deleted successfully!');
    }
}

// Edit recipe function
function editRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    // Store recipe to edit in sessionStorage and open admin panel
    sessionStorage.setItem('editRecipe', JSON.stringify(recipe));
    window.open('admin-panel.html?edit=' + recipeId, '_blank');
}

// Add new recipe function
function addNewRecipe() {
    window.open('admin-panel.html?new=true', '_blank');
}

// Refresh recipes from storage
function refreshRecipes() {
    console.log('Refreshing recipes...');
    loadRecipesFromStorage();
    populateMenus();

    const refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
        const originalText = refreshBtn.innerHTML;
        refreshBtn.innerHTML = '✓';
        refreshBtn.style.background = '#28a745';

        setTimeout(() => {
            refreshBtn.innerHTML = originalText;
            refreshBtn.style.background = '#300202';
        }, 1000);
    }
}

// Populate menu lists with recipes and admin controls
function populateMenus() {
    const categories = {
        'breakfast': 'breakfast-list',
        'dinner': 'dinner-list',
        'desserts': 'desserts-list',
        'hot-drinks': 'hot-drinks-list',
        'cold-drinks': 'cold-drinks-list',
        'specialty-drinks': 'specialty-drinks-list'
    };
    Object.keys(categories).forEach(category => {
        const categoryRecipes = recipes.filter(recipe => recipe.category === category);
        const listElement = document.getElementById(categories[category]);

        if (listElement && categoryRecipes.length > 0) {
            listElement.innerHTML = categoryRecipes.map(recipe => {
                return `
                <li class="recipe-item custom-recipe">
                    <div onclick="showRecipeDetail(${recipe.id})" class="recipe-content">
                        <span class="recipe-name">${recipe.name}</span>
                        <span class="recipe-meta">
                            ⏱️ ${(parseInt(recipe.prepTime || 0) + parseInt(recipe.cookTime || 0))} min |
                            👥 ${recipe.servings || 'N/A'} servings
                        </span>
                    </div>
                </li>
            `;
            }).join('');
        } else if (listElement) {
            listElement.innerHTML = '<li style="text-align: center; color: #666;">No recipes available in this category</li>';
        }
    });




    console.log('Menus populated with', recipes.length, 'total recipes');
}

// FIXED: Show recipe detail modal with proper error handling
function showRecipeDetail(recipeId) {
    console.log('Attempting to show recipe detail for ID:', recipeId);

    // Find the recipe
    const recipe = recipes.find(r => r.id === parseInt(recipeId));
    if (!recipe) {
        console.error('Recipe not found with ID:', recipeId);
        alert('Recipe not found!');
        return;
    }

    console.log('Recipe found:', recipe);

    // Get modal elements
    const modal = document.getElementById('recipeModal');
    const recipeDetail = document.getElementById('recipeDetail');

    if (!modal) {
        console.error('Modal element with ID "recipeModal" not found');
        alert('Modal not found! Check your HTML structure.');
        return;
    }

    if (!recipeDetail) {
        console.error('Recipe detail element with ID "recipeDetail" not found');
        alert('Recipe detail container not found! Check your HTML structure.');
        return;
    }

    console.log('Modal elements found, populating content...');

    const adminControls = '';


    recipeDetail.innerHTML = `
        <div class="recipe-detail-header">
            <h2>${recipe.name} ${recipe.isDefault ? '<span class="default-badge">Default</span>' : ''}</h2>
            <img src="${recipe.imageUrl}" alt="${recipe.name}" class="recipe-detail-image" onerror="this.style.display='none'">
        </div>
        
        ${adminControls}
        
        <div class="recipe-detail-meta">
            <div class="meta-item">
                <strong>⏱️ ${recipe.prepTime || 0}</strong>
                <span>Prep Time (min)</span>
            </div>
            <div class="meta-item">
                <strong>🔥 ${recipe.cookTime || 0}</strong>
                <span>Cook Time (min)</span>
            </div>
            <div class="meta-item">
                <strong>👥 ${recipe.servings || 'N/A'}</strong>
                <span>Servings</span>
            </div>
            <div class="meta-item">
                <strong>📂 ${recipe.category}</strong>
                <span>Category</span>
            </div>
        </div>
        
        <div class="recipe-section">
            <h3>Description</h3>
            <p>${recipe.description || 'No description available'}</p>
        </div>
        
        <div class="recipe-section">
            <h3>Ingredients</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients && recipe.ingredients.length > 0 ?
            recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('') :
            '<li>No ingredients listed</li>'
        }
            </ul>
        </div>
        
        <div class="recipe-section">
            <h3>Instructions</h3>
            <div class="instructions">${recipe.instructions || 'No instructions available'}</div>
        </div>
    `;

    // Show the modal
    modal.style.display = 'block';
    console.log('Modal should now be visible');
}

// Close recipe modal
function closeRecipeModal() {
    const modal = document.getElementById('recipeModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Handle main buttons (Food / Drinks)
document.querySelectorAll('.main-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const subMenu = btn.nextElementSibling;
        const isActive = btn.classList.contains('active');

        // Close all main menus
        document.querySelectorAll('.main-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.sub-menu').forEach(menu => menu.classList.remove('active'));

        // Close all sub-items
        document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.item-list').forEach(list => list.classList.remove('active'));

        // Toggle current menu
        if (!isActive) {
            btn.classList.add('active');
            subMenu.classList.add('active');
        }
    });
});

// Handle sub buttons (Breakfast / Dinner / etc.)
document.querySelectorAll('.sub-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const itemList = btn.nextElementSibling;
        const parentMenu = btn.closest('.sub-menu');
        const isActive = btn.classList.contains('active');

        // Close other sub-buttons in same menu
        parentMenu.querySelectorAll('.sub-btn').forEach(b => {
            if (b !== btn) b.classList.remove('active');
        });
        parentMenu.querySelectorAll('.item-list').forEach(list => {
            if (list !== itemList) list.classList.remove('active');
        });

        // Toggle current sub-menu
        if (!isActive) {
            btn.classList.add('active');
            itemList.classList.add('active');
        } else {
            btn.classList.remove('active');
            itemList.classList.remove('active');
        }
    });
});

// Handle logout
function handleLogout() {
    if (confirm('Are you sure you want to log out?')) {
        try {
            localStorage.removeItem('currentUser');
        } catch (e) {
            console.log('Could not clear session');
        }

        alert('You have been logged out successfully!');
        window.location.href = 'login.html';
    }
}

// Check user session
function checkUserSession() {
    if (currentUser && currentUser.username) {
        console.log('User logged in:', currentUser.username);
        if (isAdmin()) {
            console.log('Admin user detected');
        }
    } else {
        console.log('No user session found');
        alert('You need to be logged in to access this page.');
        window.location.href = 'login.html';
    }
}

// Slider functionality
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;
let autoSlideInterval;

function updateSlider(index) {
    if (slides && dots.length > 0) {
        slides.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }
}

function nextSlide() {
    if (dots.length > 0) {
        currentIndex = (currentIndex + 1) % dots.length;
        updateSlider(currentIndex);
    }
}

function prevSlide() {
    if (dots.length > 0) {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        updateSlider(currentIndex);
    }
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

if (rightArrow) {
    rightArrow.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
}

if (leftArrow) {
    leftArrow.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        updateSlider(index);
        startAutoSlide();
    });
});

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('recipeModal');
    if (event.target === modal) {
        closeRecipeModal();
    }
}

// Auto-refresh when page gains focus
window.addEventListener('focus', function () {
    console.log('Page focused, refreshing recipes...');
    loadRecipesFromStorage();
    populateMenus();
});

// Listen for localStorage changes
window.addEventListener('storage', function (e) {
    if (e.key === 'recipeDatabase') {
        console.log('Recipe database changed in another tab, refreshing...');
        loadRecipesFromStorage();
        populateMenus();
    }
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing homepage...');

    loadData();
    checkUserSession();

    // Initialize slider if elements exist
    if (slides && dots.length > 0) {
        updateSlider(0);
        startAutoSlide();
    }

    console.log('Homepage initialized with', recipes.length, 'recipes');

    // Debug: Check if modal exists
    const modal = document.getElementById('recipeModal');
    const recipeDetail = document.getElementById('recipeDetail');
    console.log('Modal found:', !!modal);
    console.log('Recipe detail container found:', !!recipeDetail);
});