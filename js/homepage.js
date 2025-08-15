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

// Handle logout directly in homepage
document.addEventListener('DOMContentLoaded', function () {
    // Find the logout link by href
    const logoutLink = document.querySelector('a[href="logout.html"]');

    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();

            // Show confirmation dialog
            if (confirm('Are you sure you want to log out?')) {
                try {
                    localStorage.removeItem('currentUser'); // Only remove current user, keep database
                } catch (error) {
                    console.log('Could not clear session');
                }

                // Show logout success message
                alert('You have been logged out successfully!');

                // Redirect directly to login page
                window.location.href = 'welcome.html';
            }
        });
    }

    // Check if user is logged in and update UI accordingly
    checkUserSession();
});

// Function to check user session and update UI
// Function to check user session and update UI
function checkUserSession() {
    try {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            const userData = JSON.parse(currentUser);
            console.log('User logged in:', userData.username);

        } else {
            // User not logged in, redirect to login page
            console.log('No user session found');
            alert('You need to be logged in to access this page.');
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.log('Could not check session:', error);
        // If there's an error reading session, redirect to login
        window.location.href = 'login.html';
    }
}

//Slider
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;
let autoSlideInterval;

function updateSlider(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    updateSlider(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    updateSlider(currentIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

rightArrow.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

leftArrow.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        updateSlider(index);
        startAutoSlide();
    });
});

// Initialize slider
updateSlider(0);
startAutoSlide();
function goToPage(url) {
    window.location.href = url;
}
