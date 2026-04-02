# UI-V4 Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [HTML Structure](#html-structure)
4. [CSS Documentation](#css-documentation)
5. [JavaScript API Reference](#javascript-api-reference)
6. [State Management](#state-management)
7. [Event Handling](#event-handling)
8. [Integration Guide](#integration-guide)
9. [Customization](#customization)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

**VibeStream UI v4** is a modern video platform interface built with vanilla technologies (HTML5, CSS3, JavaScript). It provides a YouTube-like user experience with gradient aesthetics, responsive design, and smooth interactions.

### Design Philosophy
- **Mobile-First**: Responsive design starting from mobile
- **User-Centric**: Focus on intuitive navigation
- **Performance**: Minimal dependencies, fast loading
- **Accessibility**: Semantic HTML, proper ARIA labels
- **Maintainability**: Clean, organized code structure

### Technology Stack
- **Frontend**: HTML5, CSS3, ES6+ JavaScript
- **Styling**: CSS Variables for theming
- **Layout**: CSS Grid & Flexbox
- **Icons**: Inline SVG
- **API**: Fetch API for async operations

---

## Architecture

### Client-Side MVC Pattern

```
┌─────────────────────────────────────────────┐
│         View Layer (HTML/CSS)               │
│  - Semantic markup                          │
│  - Responsive layout                        │
│  - Gradient styling                         │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│    Controller Layer (JavaScript)            │
│  - Event handlers                           │
│  - State management                         │
│  - DOM manipulation                         │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│      Model Layer (Data/API)                 │
│  - API communication                        │
│  - Data transformation                      │
│  - Caching & persistence                    │
└─────────────────────────────────────────────┘
```

### Application Flow

```
Page Load
  ↓
Initialize Event Listeners
  ↓
Load Theme Preference
  ↓
Load Videos (Home tab)
  ↓
Render Videos
  ↓
User Interaction (tab, search, filter)
  ↓
Update State → Fetch/Filter Data → Re-render
```

---

## HTML Structure

### Semantic Markup

The HTML uses semantic elements for better accessibility and SEO:

```html
<header class="header">           <!-- Navigation & branding -->
<section class="hero">             <!-- Hero banner -->
<nav class="tab-navigation">       <!-- Tab buttons -->
<main class="main-container">      <!-- Primary content -->
<section class="featured-section"> <!-- Featured videos -->
<div class="content-grid">         <!-- Grid layout -->
```

### Key Elements

#### Header (`<header class="header">`)
Contains:
- Brand logo and name
- Theme toggle button
- User avatar

**CSS Classes**:
- `.header-container` - Max-width container
- `.brand` - Logo and title
- `.header-controls` - Right-side buttons
- `.theme-toggle` - Dark/Light button
- `.avatar-btn` - User profile

#### Hero Section (`<section class="hero">`)
Eye-catching banner with gradient background and messaging.

**CSS Classes**:
- `.hero`
- `.hero-content`

#### Search Bar (`<div class="search-section">`)
Full-width search input with button.

**CSS Classes**:
- `.search-section`
- `.search-wrapper`
- `.search-input`
- `.search-btn`

#### Tab Navigation (`<nav class="tab-navigation">`)
Horizontal tabs for content categories.

**CSS Classes**:
- `.tab-navigation`
- `.tab-btn` - Individual tab
- `.tab-btn.active` - Current tab

**Data Attributes**:
```html
<button class="tab-btn active" data-tab="Home">
<button class="tab-btn" data-tab="Trending">
<button class="tab-btn" data-tab="Subscriptions">
```

#### Category Tags (`<div class="category-tags">`)
Horizontal filter buttons.

**CSS Classes**:
- `.category-tags`
- `.tag` - Individual filter
- `.tag.active` - Current filter

**Data Attributes**:
```html
<button class="tag active" data-filter="all">All Videos</button>
<button class="tag" data-filter="music">🎵 Music</button>
```

#### Video Grid (`<div class="content-grid">`)
Container for video cards.

**CSS Classes**:
- `.content-grid`
- `.featured-section`
- `.video-grid` - Card container
- `.video-card` - Individual card
- `.video-thumbnail` - Preview image
- `.video-content` - Metadata
- `.video-title`
- `.video-channel`
- `.video-stats`
- `.video-actions`

#### Loading State (`<div class="loading-state">`)
Spinner shown while loading data.

**CSS Classes**:
- `.loading-state`
- `.loading-state.active` - Visible

#### Empty State (`<div class="empty-state">`)
Message shown when no results found.

**CSS Classes**:
- `.empty-state`
- `.empty-state.active` - Visible

---

## CSS Documentation

### CSS Architecture

```
main.css
├── Root & Variables (40 lines)
│   ├── Light theme overrides
│   ├── Dark theme defaults
│   └── CSS custom properties
│
├── Reset & Base (30 lines)
│   ├── * reset rules
│   ├── Body styling
│   └── Global defaults
│
├── Header (80 lines)
│   ├── Sticky positioning
│   ├── Gradient backgrounds
│   └── Button styling
│
├── Hero Section (60 lines)
│   ├── Full-width banner
│   ├── Text positioning
│   └── Gradient overlays
│
├── Search Bar (50 lines)
│   ├── Input styling
│   ├── Button styling
│   └── Focus states
│
├── Navigation (70 lines)
│   ├── Tab buttons
│   ├── Active states
│   └── Responsive adjustments
│
├── Categories (40 lines)
│   ├── Tag styling
│   ├── Active states
│   └── Transitions
│
├── Main Content (100 lines)
│   ├── Grid layout
│   ├── Card styling
│   └── Hover effects
│
├── Video Cards (150 lines)
│   ├── Card structure
│   ├── Image handling
│   ├── Hover animations
│   └── Action buttons
│
├── Loading/Empty States (40 lines)
│   ├── Spinner animation
│   └── Message styling
│
├── Responsive (200 lines)
│   ├── Mobile breakpoints
│   ├── Tablet adjustments
│   └── Desktop optimizations
│
└── Animations (30 lines)
    ├── Keyframes
    ├── Transitions
    └── Effects
```

### CSS Variables Reference

#### Colors

```css
/* Light Mode (default dark, overridden by [data-theme="light"]) */
--primary: #ff0080;              /* Hot pink brand color */
--primary-light: #ff6db3;        /* Lighter pink */
--secondary: #00d4ff;            /* Cyan accent */
--secondary-dark: #0099cc;       /* Darker cyan */
--accent: #ff8c00;               /* Orange gradient */
--accent-light: #ffb84d;         /* Light orange */
--success: #00e676;              /* Green for positive feedback */

/* Backgrounds & Surfaces */
--background: #0f0f1e;           /* Primary background (dark) */
--surface: #1a1a2e;              /* Card background (dark) */
--surface-alt: #16213e;          /* Alternative surface (dark) */

/* Text */
--text-primary: #ffffff;         /* Main text color */
--text-secondary: #b0b0b0;       /* Secondary text color */

/* Borders & Spacing */
--border: #2d2d4d;              /* Border color (dark) */

/* Shadows */
--shadow-sm: 0 2px 8px rgba(255, 0, 128, 0.1);
--shadow-md: 0 8px 16px rgba(255, 0, 128, 0.15);
--shadow-lg: 0 12px 24px rgba(255, 0, 128, 0.2);

/* Transitions */
--transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
```

### Responsive Breakpoints

```css
/* Desktop (default) */
@media (max-width: 1400px) { /* Large desktop adjustments */ }
@media (max-width: 1024px) { /* Medium desktop */ }

/* Tablet */
@media (max-width: 880px) {
  .watch-layout { grid-template-columns: 1fr; }  /* Stack layout */
  .video-grid { grid-template-columns: repeat(2, 1fr); } /* 2 columns */
}

/* Mobile */
@media (max-width: 480px) {
  .video-grid { grid-template-columns: 1fr; }  /* 1 column */
  .tab-navigation { flex-wrap: wrap; }         /* Wrap tabs */
  .search-wrapper { flex-direction: column; }  /* Stack search */
}
```

### Animations & Transitions

```css
/* Smooth transitions */
--transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);

/* Keyframe animations */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## JavaScript API Reference

### Global Variables

```javascript
// Configuration
const API_BASE_URL = 'http://localhost:3000/api';

// DOM References (cached for performance)
const videoGrid = document.getElementById('video-grid');
const loadingState = document.getElementById('loading');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('search-input');
const tabBtns = document.querySelectorAll('.tab-btn');
const tagBtns = document.querySelectorAll('.tag');
const themeToggle = document.querySelector('.theme-toggle');

// State
let currentTab = 'Home';
let allVideos = [];
let filteredVideos = [];
let currentTheme = 'dark';
```

### Initialization

#### `initializeEventListeners()`
Sets up all event handlers on page load.

```javascript
function initializeEventListeners() {
  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.getAttribute('data-tab'));
    });
  });

  // Category filtering
  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      // Trigger filtering
    });
  });

  // Search functionality
  searchInput.addEventListener('input', handleSearch);

  // Theme toggle
  themeToggle.addEventListener('click', toggleTheme);
}
```

**Called**: On `DOMContentLoaded`

### Tab & Navigation Functions

#### `switchTab(tab)`
Switches to a new content tab and loads videos.

**Parameters**:
- `tab` (string): Tab name ("Home", "Trending", "Subscriptions", etc.)

**Logic**:
1. Skip if same tab already active
2. Update `currentTab` variable
3. Update active button styling
4. Call `loadVideos(tab)`

**Example**:
```javascript
switchTab('Trending');  // Switch to trending videos
```

#### `loadVideos(tab)`
Fetches videos from API for the specified tab.

**Parameters**:
- `tab` (string): Tab to load

**API Endpoints**:
- `Home` → `/api/mock/home`
- `Trending` → `/api/mock/trending`
- `Subscriptions` → `/api/mock/subscriptions`
- `Library` → `/api/mock/library`
- `History` → `/api/mock/history`
- `Likes` → `/api/mock/likes`

**Flow**:
1. Show loading state
2. Fetch from appropriate endpoint
3. Parse JSON response
4. Update `allVideos` and `filteredVideos`
5. Call `renderVideos()`
6. Handle errors gracefully

**Example**:
```javascript
loadVideos('Home');  // Load home feed
```

### Rendering Functions

#### `renderVideos()`
Renders the current filtered video list to the DOM.

**Logic**:
1. Clear existing video grid
2. Check if results are empty
3. For each video, create card and append
4. Update loading/empty states

**Performance**: O(n) time complexity

#### `createVideoCard(video)`
Creates a single video card DOM element.

**Parameters**:
- `video` (object): Video data

**Video Object Structure**:
```javascript
{
  id: 1,
  title: "Video Title",
  channel: "Channel Name",
  thumbnail: "image-url.jpg",
  avatar: "avatar-url.jpg",
  views: "1M",
  uploaded: "2 days ago"
}
```

**Returns**: DOM element (div.video-card)

**Features**:
- Sanitizes text to prevent XSS
- Sets up event listeners
- Includes action buttons
- Error handling for missing images

**Example HTML Generated**:
```html
<div class="video-card">
  <img src="thumbnail.jpg" alt="Title" class="video-thumbnail">
  <div class="video-content">
    <div class="video-header">
      <img src="avatar.jpg" class="video-avatar">
      <div class="video-info">
        <div class="video-title">Title</div>
        <div class="video-channel">Channel</div>
        <div class="video-stats">
          <span>1M views</span>
          <span>2 days ago</span>
        </div>
      </div>
    </div>
    <div class="video-actions">
      <button class="video-action-btn">Play</button>
      <button class="video-action-btn">Like</button>
      <button class="video-action-btn">Share</button>
    </div>
  </div>
</div>
```

### Search & Filter Functions

#### `handleSearch(e)`
Real-time search handler triggered on input.

**Parameters**:
- `e` (event): Input event object

**Logic**:
1. Extract query from input
2. Convert to lowercase
3. Filter `allVideos` by title or channel
4. Update `filteredVideos`
5. Call `renderVideos()`

**Time Complexity**: O(n × m)
- n = number of videos
- m = average string length

**Example**:
```javascript
// User types "javascript"
// Filters videos with "javascript" in title or channel
```

#### `filterByCategory(category)`
Filters videos by category tag.

**Parameters**:
- `category` (string): Filter name

**Categories**:
- "all" - All videos
- "music" - Music content
- "gaming" - Gaming videos
- "tech" - Technology videos
- "education" - Educational content

**Logic**:
1. Update active tag styling
2. If "all", reset to unfiltered
3. Otherwise, filter by category
4. Re-render videos

### UI State Functions

#### `showLoading(show)`
Shows or hides the loading spinner.

**Parameters**:
- `show` (boolean): Visibility toggle

**Implementation**:
```javascript
if (show) {
  loadingState.classList.add('active');
} else {
  loadingState.classList.remove('active');
}
```

#### `showEmptyState(show)`
Shows or hides the "no results" message.

**Parameters**:
- `show` (boolean): Visibility toggle

### Notification Function

#### `showNotification(message)`
Displays a toast-style notification.

**Parameters**:
- `message` (string): Notification text

**Features**:
- Auto-dismisses after 3 seconds
- Animated slide-in/out
- Positioned bottom-right
- Gradient styling

**Example**:
```javascript
showNotification('❤️ Added to likes!');
showNotification('🎬 Playing: Video Title');
```

### Theme Functions

#### `toggleTheme()`
Switches between dark and light themes.

**Logic**:
1. Toggle `currentTheme` variable
2. Update HTML `data-theme` attribute
3. Save preference to localStorage
4. CSS variables update automatically

**Storage**: `localStorage.setItem('theme', theme)`

**Example**:
```javascript
toggleTheme();  // Switch from dark to light or vice versa
```

#### `loadThemePreference()`
Loads saved theme from localStorage on page load.

**Logic**:
1. Check localStorage for saved theme
2. Default to 'dark' if not found
3. Apply theme via `data-theme` attribute
4. Update CSS variables

### Security Functions

#### `sanitizeText(text)`
Prevents XSS attacks by encoding HTML entities.

**Parameters**:
- `text` (string): Text to sanitize

**Encodes**:
- `&` → `&amp;`
- `<` → `&lt;`
- `>` → `&gt;`
- `"` → `&quot;`
- `'` → `&#x27;`

**Also**: Truncates to 100 characters max

**Example**:
```javascript
sanitizeText('<script>alert("XSS")</script>');
// Returns: '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
```

#### `sanitizeAttr(attr)`
Sanitizes attribute values for safe DOM insertion.

**Parameters**:
- `attr` (string): Attribute value

**Encodes**: Quotes and apostrophes  
**Truncates**: To 500 characters max

---

## State Management

### State Variables

```javascript
// Current context
let currentTab = 'Home';              // Active tab
let currentTheme = 'dark';            // Theme mode

// Data storage
let allVideos = [];                   // Original API data
let filteredVideos = [];              // Filtered results

// Derived state (computed)
const activeTab = currentTab;         // Current tab reference
const resultCount = filteredVideos.length;  // Result count
```

### State Flow

```
User Action
    ↓
Event Listener
    ↓
Update State (currentTab, query, etc.)
    ↓
Fetch/Filter Data
    ↓
Update Data State (allVideos, filteredVideos)
    ↓
Re-render DOM
    ↓
Visual Update
```

### Persistence

```javascript
// Theme preference persisted
localStorage.setItem('theme', currentTheme);
const saved = localStorage.getItem('theme');

// Can be extended to persist:
// - Search history
// - Recently watched
// - Playlists
// - User preferences
```

---

## Event Handling

### Event Delegation

Rather than attaching listeners to each card, events are attached to the parent grid:

```javascript
videoGrid.addEventListener('click', (e) => {
  // Determine what was clicked
  // Handle accordingly
});
```

### Event Types

#### Click Events
- Tab buttons → `switchTab()`
- Category tags → Filter videos
- Video cards → Navigate or play
- Action buttons → Like, share, save
- Theme toggle → `toggleTheme()`

#### Input Events
- Search input → `handleSearch()` (debounced)

#### Load Events
- Window load → `initializeEventListeners()`
- Window load → `loadThemePreference()`
- API response → `renderVideos()`

### Custom Events (Future)

```javascript
// Could implement:
document.dispatchEvent(new CustomEvent('videoLoaded'));
document.dispatchEvent(new CustomEvent('themeChanged'));
```

---

## Integration Guide

### Integrating with Backend

#### Connect to Real Backend
Replace mock API with your backend:

```javascript
const API_BASE_URL = 'http://your-api.com/api';

// API calls will use real endpoints:
// GET /api/videos/home
// GET /api/videos/trending
// POST /api/videos/like
// POST /api/users/subscribe
```

#### API Response Format Expected

```javascript
// Array of videos
[
  {
    id: "uuid",
    title: string,
    channel: string,
    thumbnail: string,
    avatar: string,
    views: number,
    uploaded: string,
    description: string,
    duration: number,
    category: string,
    likes: number,
    commentCount: number
  }
]
```

### Integrating with User Auth

```javascript
// Add user context
let currentUser = null;

// Fetch user on load
async function loadUser() {
  const response = await fetch('/api/user/me');
  currentUser = await response.json();
}

// Use user ID for actions
async function likeVideo(videoId) {
  await fetch(`/api/videos/${videoId}/like`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ userId: currentUser.id })
  });
}
```

### Integrating with Analytics

```javascript
// Track user interactions
function trackEvent(event, data) {
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({ event, data, timestamp: new Date() })
  });
}

// Track in key functions
function handleSearch(e) {
  trackEvent('search', { query: e.target.value });
  // ... rest of search logic
}

function switchTab(tab) {
  trackEvent('tab_switch', { tab });
  // ... rest of tab switch logic
}
```

---

## Customization

### Changing Colors

Edit CSS variables in `main.css`:

```css
:root {
  --primary: #ff0080;           /* Change brand color */
  --secondary: #00d4ff;         /* Change accent color */
  --accent: #ff8c00;            /* Change highlight color */
  --background: #0f0f1e;        /* Change background */
  --surface: #1a1a2e;           /* Change card background */
}
```

### Custom Tabs

Add new tabs in HTML:

```html
<button class="tab-btn" data-tab="YourTab">Your Tab</button>
```

Then update JavaScript:

```javascript
const endpointMap = {
  // ... existing mappings
  'YourTab': 'api/your-tab'
};
```

### Custom Categories

Add new filters in HTML:

```html
<button class="tag" data-filter="your-category">Your Category</button>
```

Then update filtering logic based on your needs.

### Custom Styling

Add overrides after CSS imports or modify main.css directly.

Example - larger cards:

```css
.video-grid {
  grid-template-columns: repeat(2, 1fr);  /* Fewer columns */
  gap: 2rem;  /* More spacing */
}

.video-card {
  height: 400px;  /* Taller cards */
}
```

---

## Troubleshooting

### Videos Don't Load

**Symptoms**: Empty grid, loading spinner stuck

**Solutions**:
1. Check console for HTTP errors
2. Verify API endpoint is running
3. Check CORS headers if using different domain
4. Verify API response format matches expected structure

```javascript
// Debug in console
console.log(allVideos);  // Should have data
console.log(filteredVideos);  // Should have data
```

### Search Not Working

**Symptoms**: Search input not filtering results

**Solutions**:
1. Check `#search-input` element exists in HTML
2. Verify JavaScript has access to DOM element
3. Check console for errors in `handleSearch()`
4. Ensure videos are loaded before searching

```javascript
// Debug search
console.log(document.getElementById('search-input'));  // Should exist
console.log(allVideos.length);  // Should be > 0
```

### Theme Toggle Not Working

**Symptoms**: Dark/Light mode not switching

**Solutions**:
1. Check localStorage is enabled in browser
2. Verify `data-theme` attribute changes on `<html>`
3. Check CSS variable support in browser
4. Verify theme toggle button has `'theme-toggle'` class

```javascript
// Debug theme
console.log(currentTheme);  // Should show 'dark' or 'light'
console.log(localStorage.getItem('theme'));  // Should show saved value
console.log(document.documentElement.getAttribute('data-theme'));  // Should show current
```

### Cards Not Rendering

**Symptoms**: Grid exists but no video cards

**Solutions**:
1. Check `#video-grid` element exists
2. Verify `filteredVideos` array has data
3. Check `createVideoCard()` returns valid HTML
4. Verify images are loading (check Network tab)

```javascript
// Debug rendering
console.log(document.getElementById('video-grid'));  // Should exist
console.log(filteredVideos);  // Should have items
```

### Performance Issues

**Symptoms**: Sluggish scrolling, slow search

**Solutions**:
1. Reduce number of videos rendered at once (pagination)
2. Implement lazy loading for images
3. Debounce search input
4. Use virtual scrolling for large lists

```javascript
// Add search debounce
let searchTimeout;
searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    handleSearch(e);
  }, 300);
});
```

---

**Document Version**: 1.0  
**Last Updated**: April 2, 2026  
**Maintainers**: Briton Musembi, John Hunja, Dianah Mwendia, Suheila Mohamed
