# UI-V4 Quick Reference Guide

## Project Overview
**VibeStream** - Modern video platform UI with gradient aesthetics, dark/light mode, and interactive components.

## Quick Start

### Open the UI
```
c:\Users\ADMIN\schoolprojects\YoutubeClone\ui-v4\index.html
```

### File Structure
```
ui-v4/
├── index.html              # Main HTML page
├── css/
│   └── main.css           # All styling (700+ lines)
├── js/
│   └── app.js             # JavaScript logic
├── README.md              # Project overview
├── DESIGN_EXPLANATION.md  # Architecture & algorithms
├── DOCUMENTATION.md       # Complete API docs
└── QUICK_REFERENCE.md     # This file
```

## Key Features at a Glance

| Feature | Description |
|---------|-------------|
| **Tab Navigation** | Home, Trending, Subscriptions, Library, History, Likes |
| **Search** | Real-time video search by title & channel |
| **Categories** | Filter videos: All, Music, Gaming, Tech, Education |
| **Theme Toggle** | Dark/Light mode with localStorage persistence |
| **Video Cards** | Grid layout with image, title, channel, stats |
| **Notifications** | Toast-style user feedback messages |
| **Responsive** | Adapts to desktop, tablet, mobile |

## DOM Elements & IDs

```javascript
// Critical IDs used in JavaScript
#video-grid           // Container for video cards
#search-input         // Search input field
#loading              // Loading spinner element
#empty-state          // "No results" message
.tab-btn              // Tab navigation buttons
.tab-btn.active       // Currently selected tab
.tag                  // Category filter buttons
.theme-toggle         // Dark/Light mode button
```

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary | #ff0080 | Brand, buttons, gradients |
| Secondary | #00d4ff | Accents, highlights |
| Accent | #ff8c00 | Call-to-action, gradients |
| Background | #0f0f1e | Dark mode background |
| Surface | #1a1a2e | Cards, containers |
| Text Primary | #ffffff | Main text (dark mode) |
| Text Secondary | #b0b0b0 | Muted text |

**Light Mode**: Inverse colors with #f5f5f7 background

## CSS Variables

```css
:root {
  --primary: #ff0080;
  --secondary: #00d4ff;
  --accent: #ff8c00;
  --background: #0f0f1e;
  --surface: #1a1a2e;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}
```

## JavaScript State

```javascript
// Global state variables
let currentTab = 'Home';          // Active tab
let allVideos = [];               // All videos from API
let filteredVideos = [];          // Filtered results
let currentTheme = 'dark';        // Current theme
```

## Key Functions

### Navigation & UI
- `switchTab(tab)` - Change active tab and load videos
- `toggleTheme()` - Switch between dark/light mode
- `handleSearch(e)` - Real-time search filtering
- `renderVideos()` - Render filtered results
- `createVideoCard(video)` - Generate video card HTML

### API & Data
- `loadVideos(tab)` - Fetch videos for tab
- `getVideoById(id)` - Get video by ID
- `sanitizeText(text)` - XSS prevention
- `sanitizeAttr(attr)` - Safe attribute values

### User Feedback
- `showNotification(message)` - Toast notification
- `showLoading(show)` - Show/hide loading state
- `showEmptyState(show)` - Show "no results"

## Event Listeners

```javascript
// Tab buttons
tabBtns.addEventListener('click', switchTab)

// Category filters
tagBtns.addEventListener('click', toggleFilter)

// Search input
searchInput.addEventListener('input', handleSearch)

// Theme toggle
themeToggle.addEventListener('click', toggleTheme)

// Video cards (delegation)
videoGrid.addEventListener('click', handleCardClick)
```

## API Endpoints (Expected)

```
GET /api/mock/home           → Home feed videos
GET /api/mock/trending       → Trending videos
GET /api/mock/subscriptions  → Subscribed channels
GET /api/mock/library        → Saved videos
GET /api/mock/history        → Watch history
GET /api/mock/likes          → Liked videos
```

## Video Object Structure

```javascript
{
  id: number,           // Unique identifier
  title: string,        // Video title
  channel: string,      // Creator name
  thumbnail: string,    // Image URL
  avatar: string,       // Creator image
  views: string,        // View count
  uploaded: string,     // Date posted
  duration?: number,    // Video length (optional)
  category?: string     // Content type (optional)
}
```

## Common CSS Classes

| Class | Purpose |
|-------|---------|
| `.header` | Top navigation bar |
| `.hero` | Banner section |
| `.search-section` | Search bar area |
| `.tab-navigation` | Tab buttons container |
| `.category-tags` | Filter buttons |
| `.video-grid` | Video cards container |
| `.video-card` | Individual video card |
| `.video-thumbnail` | Video preview image |
| `.video-title` | Video title text |
| `.tab-btn.active` | Current active tab |
| `.tag.active` | Current active filter |

## Keyboard Shortcuts (Future)

| Key | Action |
|-----|--------|
| `T` | Toggle theme |
| `/` | Focus search |
| `Esc` | Close modals |
| `←/→` | Previous/Next video |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Search Optimization**: Currently O(n×m) - Consider caching
2. **Lazy Loading**: Load videos only when visible
3. **Image Optimization**: Use WebP for thumbnails
4. **Debounce Search**: Add delay to reduce filter calls
5. **Virtual Scrolling**: For large video lists

## Troubleshooting

### Videos don't load
- Check API endpoint is running
- Open browser DevTools Console for errors
- Verify API response format matches expected structure

### Search not working
- Check `#search-input` element exists
- Ensure `allVideos` array is populated
- Check browser console for JavaScript errors

### Theme toggle broken
- Verify localStorage is enabled
- Check `data-theme` attribute on html element
- Ensure CSS variables are supported

### Cards don't render
- Check if `#video-grid` element exists in HTML
- Verify `filteredVideos` array has data
- Check console for createElement errors

## Useful Links

- **View Source**: [ui-v4/js/app.js](./js/app.js)
- **Styling**: [ui-v4/css/main.css](./css/main.css)
- **Full Design Docs**: [DESIGN_EXPLANATION.md](./DESIGN_EXPLANATION.md)
- **Complete API**: [DOCUMENTATION.md](./DOCUMENTATION.md)

## Tips & Tricks

### Enable Debug Mode
```javascript
// In browser console
console.log(allVideos);          // See all videos
console.log(filteredVideos);     // See filtered results
console.log(currentTab);         // Current active tab
```

### Test Search
```javascript
// In search input
"javascript" → Filter by title
"tech academy" → Filter by channel
""  → Reset to all
```

### Test Theme Toggle
- Click sun icon in header
- Check localStorage: `localStorage.getItem('theme')`
- Should toggle between 'dark' and 'light'

---

**Last Updated**: April 2, 2026  
**Version**: 1.0  
**Status**: Production Ready
