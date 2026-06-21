/* ===================================
   RESTAURANT GUIDE HCMC - MAIN SCRIPT
   =================================== */

// ===================================
// DOM ELEMENTS
// ===================================

const header = document.querySelector('.header');
const navbar = document.querySelector('.header .navbar');
const menuBtn = document.querySelector('#menu-btn');
const navClose = document.querySelector('#nav-close');
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const closeSearch = document.querySelector('#close-search');
const toTop = document.querySelector('.to-top');

// ===================================
// MOBILE MENU TOGGLE
// ===================================

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
}

// Close navbar when clicking on a link
document.querySelectorAll('.header .navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// Close navbar when scrolling
window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
});

// ===================================
// SEARCH FORM TOGGLE
// ===================================

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    searchForm.classList.add('active');
  });
}

if (closeSearch) {
  closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('active');
  });
}

// Close search when clicking on background
if (searchForm) {
  searchForm.addEventListener('click', (e) => {
    if (e.target === searchForm) {
      searchForm.classList.remove('active');
    }
  });
}

// ===================================
// HEADER BACKGROUND ON SCROLL
// ===================================

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// Set initial header state
window.addEventListener('load', () => {
  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// ===================================
// TO TOP BUTTON
// ===================================

if (toTop) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add('active');
    } else {
      toTop.classList.remove('active');
    }
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Format currency VND
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
}

// Generate stars HTML
function generateStars(rating) {
  let starsHtml = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<span class="star">★</span>';
  }

  if (hasHalfStar) {
    starsHtml += '<span class="star">½</span>';
  }

  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    starsHtml += '<span class="star">☆</span>';
  }

  return starsHtml;
}

// Format time
function formatTime(timeStr) {
  const [hour, minute] = timeStr.split(':');
  return `${hour}:${minute}`;
}

// Truncate text
function truncateText(text, length) {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

// ===================================
// AUTHENTICATION & FAVORITES UTILS
// ===================================

function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

function saveFavorites(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function isFavorite(restaurantId) {
  return getFavorites().includes(restaurantId);
}

function toggleFavorite(restaurantId) {
  const favorites = getFavorites();
  const index = favorites.indexOf(restaurantId);

  if (index > -1) {
    favorites.splice(index, 1);
    // alert('Đã xóa khỏi yêu thích'); // Optional: provide user feedback
  } else {
    favorites.push(restaurantId);
    // alert('Đã lưu vào yêu thích'); // Optional: provide user feedback
  }

  saveFavorites(favorites);
  updateFavoriteButtons();

  // If on favorites page, reload the list
  if (window.location.pathname.endsWith('favorites.html')) {
    if (typeof loadFavorites === 'function') {
      loadFavorites();
    }
  }
}

function updateFavoriteButtons() {
  document.querySelectorAll('.restaurant-favorite[data-restaurant-id]').forEach(button => {
    const id = Number(button.dataset.restaurantId);
    const icon = button.querySelector('i.fa-heart');
    if (isFavorite(id)) {
      button.classList.add('active');
      if (icon) {
        icon.classList.remove('far');
        icon.classList.add('fas');
      }
    } else {
      button.classList.remove('active');
      if (icon) {
        icon.classList.remove('fas');
        icon.classList.add('far');
      }
    }
  });
}

// ===================================
// HERO SEARCH FUNCTIONALITY
// ===================================

function performHeroSearch() {
  const searchInput = document.getElementById('hero-search-input');
  if (!searchInput) return;
  
  const searchTerm = searchInput.value.trim();
  if (!searchTerm) {
    alert('Vui lòng nhập tên quán hoặc loại ăn');
    return;
  }
  
  // Redirect to restaurants.html with search parameter
  window.location.href = `restaurants.html?search=${encodeURIComponent(searchTerm)}`;
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', () => {
  const heroSearchInput = document.getElementById('hero-search-input');
  if (heroSearchInput) {
    heroSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performHeroSearch();
      }
    });
  }

  // Mega Menu Logic
  // This handles both the dropdown and the on-page version
  document.querySelectorAll('.has-megamenu, .on-page-filter').forEach(container => {
    const tabs = container.querySelectorAll('.mega-menu-tab');
    const contents = container.querySelectorAll('.mega-menu-content');

    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('mouseover', () => {
        // Deactivate all tabs and content within this specific container
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Activate the hovered tab
        tab.classList.add('active');

        // Activate the corresponding content
        const targetId = tab.dataset.target;
        const targetContent = container.querySelector('#' + targetId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });
});

window.addEventListener('load', () => {
  updateFavoriteButtons();
});

// ===================================
// INITIALIZATION
// ===================================

console.log('Restaurant Guide HCMC - Initialized');
