// ==================== API CONFIGURATION ====================
const API_BASE_URL = 'http://localhost:3000/api';

// ==================== DOM ELEMENTS ====================
const videoGrid = document.getElementById('video-grid');
const loadingState = document.getElementById('loading');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('search-input');
const tabBtns = document.querySelectorAll('.tab-btn');
const tagBtns = document.querySelectorAll('.tag');
const themeToggle = document.querySelector('.theme-toggle');

// ==================== STATE ====================
let currentTab = 'Home';
let allVideos = [];
let filteredVideos = [];
let currentTheme = 'dark';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    loadVideos('Home');
    loadThemePreference();
});

// ==================== EVENT LISTENERS ====================
function initializeEventListeners() {
    // Tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            switchTab(tab);
        });
    });

    // Tag buttons (category filters)
    tagBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tagBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Search input
    searchInput.addEventListener('input', handleSearch);

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
}

// ==================== TAB SWITCHING ====================
function switchTab(tab) {
    if (currentTab === tab) return;

    currentTab = tab;

    // Update active state
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tab) {
            btn.classList.add('active');
        }
    });

    // Load videos
    loadVideos(tab);
}

// ==================== API FUNCTIONS ====================
async function loadVideos(tab) {
    try {
        showLoading(true);
        
        // Map tab names to API endpoints
        const endpointMap = {
            'Home': 'mock/home',
            'Trending': 'mock/trending',
            'Subscriptions': 'mock/subscriptions',
            'Library': 'mock/library',
            'History': 'mock/history',
            'Likes': 'mock/likes'
        };

        const endpoint = endpointMap[tab] || 'mock/home';
        const url = `${API_BASE_URL}/${endpoint}`;
        
        console.log(`Loading videos from: ${url}`);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`Loaded ${data.length} videos for ${tab}`, data);
        
        allVideos = Array.isArray(data) ? data : [];
        filteredVideos = [...allVideos];
        renderVideos();
    } catch (error) {
        console.error(`Error loading ${tab} videos:`, error);
        
        // Show error message
        showLoading(false);
        showEmptyState(true);
        
        // Update error message if elements exist
        const emptyH3 = emptyState.querySelector('h3');
        const emptyP = emptyState.querySelector('p');
        
        if (emptyH3) emptyH3.innerText = 'Unable to load videos';
        if (emptyP) emptyP.innerText = `Error: ${error.message}`;
    }
}

// ==================== RENDER FUNCTIONS ====================
function renderVideos() {
    videoGrid.innerHTML = '';
    showLoading(false);
    showEmptyState(false);

    if (filteredVideos.length === 0) {
        showEmptyState(true);
        return;
    }

    filteredVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // Ensure video data is valid
    if (!video || typeof video !== 'object') {
        return card;
    }

    const playSvg = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
        </svg>
    `;

    const likeSvg = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    `;

    const shareSvg = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
    `;

    // Extract data with fallbacks
    const title = video.title || 'Untitled Video';
    const channel = video.channel || 'Unknown Channel';
    const thumbnail = video.thumbnail || '/assets/images/1.jpg';
    const avatar = video.avatar || '/assets/images/2.jpg';
    const views = video.views || '0 views';
    const uploaded = video.uploaded || 'Recently';

    card.innerHTML = `
        <img src="${sanitizeAttr(thumbnail)}" 
             alt="${sanitizeAttr(title)}" 
             class="video-thumbnail"
             onerror="this.src='../assets/images/1.jpg'">
        <div class="video-content">
            <div class="video-header">
                <img src="${sanitizeAttr(avatar)}" 
                     alt="${sanitizeAttr(channel)}" 
                     class="video-avatar"
                     onerror="this.src='../assets/images/2.jpg'">
                <div class="video-info">
                    <div class="video-title">${sanitizeText(title)}</div>
                    <div class="video-channel">${sanitizeText(channel)}</div>
                    <div class="video-stats">
                        <span>${sanitizeText(views)}</span>
                        <span>${sanitizeText(uploaded)}</span>
                    </div>
                </div>
            </div>
            <div class="video-actions">
                <button class="video-action-btn" title="Play">
                    ${playSvg}
                    Play
                </button>
                <button class="video-action-btn" title="Like">
                    ${likeSvg}
                    Like
                </button>
                <button class="video-action-btn" title="Share">
                    ${shareSvg}
                    Share
                </button>
            </div>
        </div>
    `;

    // Add click handler for the thumbnail
    card.querySelector('.video-thumbnail').addEventListener('click', () => {
        handleVideoClick(video);
    });

    // Add action button handlers
    const playBtn = card.querySelector('.video-action-btn:nth-child(1)');
    const likeBtn = card.querySelector('.video-action-btn:nth-child(2)');
    const shareBtn = card.querySelector('.video-action-btn:nth-child(3)');

    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleVideoClick(video);
    });

    likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        likeBtn.style.backgroundColor = 'rgba(255, 0, 128, 0.3)';
        likeBtn.style.color = '#ff0080';
        showNotification('❤️ Added to your likes!');
    });

    shareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNotification('🔗 Video link copied!');
    });

    return card;
}

// ==================== SEARCH & FILTER ====================
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query === '') {
        filteredVideos = [...allVideos];
    } else {
        filteredVideos = allVideos.filter(video => {
            const title = (video.title || '').toLowerCase();
            const channel = (video.channel || '').toLowerCase();
            return title.includes(query) || channel.includes(query);
        });
    }

    renderVideos();
}

// ==================== UTILITY FUNCTIONS ====================
function showLoading(show) {
    if (show) {
        loadingState.classList.add('active');
    } else {
        loadingState.classList.remove('active');
    }
}

function showEmptyState(show) {
    if (show) {
        emptyState.classList.add('active');
    } else {
        emptyState.classList.remove('active');
    }
}

function sanitizeText(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .slice(0, 100);
}

function sanitizeAttr(attr) {
    if (!attr || typeof attr !== 'string') return '';
    return attr.replace(/"/g, '&quot;').replace(/'/g, '&#x27;').slice(0, 500);
}

function handleVideoClick(video) {
    const message = `🎬 Playing: ${video.title}`;
    showNotification(message);
    console.log('Video clicked:', video);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #ff0080 0%, #ff8c00 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 12px 24px rgba(255, 0, 128, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== THEME TOGGLE ====================
function toggleTheme() {
    const html = document.documentElement;
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    currentTheme = savedTheme || 'dark';
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// ==================== ANIMATIONS ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0) translateY(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%) translateY(20px);
        }
    }
`;
document.head.appendChild(style);
