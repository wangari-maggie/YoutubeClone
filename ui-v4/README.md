# VibeStream - UI v4

A modern, vibrant video platform UI with gradient aesthetics, built with vanilla JavaScript, CSS3, and HTML5. Features a hero section, horizontal tab navigation, and smooth animations.

## Group Members


## Key Features

### Visual Design
- **Modern Gradient Aesthetics**: Vibrant pink-to-orange and cyan gradients throughout
- **Dark-First Design**: Sleek dark mode by default with light mode toggle
- **Hero Section**: Eye-catching banner with gradient text and background
- **Glassmorphism Effects**: Semi-transparent surfaces with backdrop blur
- **Smooth Animations**: Fluid transitions (0.4s ease-out curves)
- **Custom Scrollbars**: Gradient-styled scrollbars matching the theme

### Layout & Navigation
- **Horizontal Top Navigation**: Tab-based navigation instead of sidebar
- **Header Bar**: Sticky header with brand logo and theme toggle
- **Category Tags**: Horizontal category filter system
- **Featured Videos Section**: Grid layout with responsive columns
- **Search Integration**: Full-width search bar with gradient button

### Functionality
- **Tab System**: Home, Trending, Subscriptions, Library, History, Likes
- **Smart Search**: Real-time search across video titles and channels
- **Category Filtering**: Quick filter by content type
- **Theme Toggle**: Dark/Light mode with localStorage persistence
- **Card Interactions**: Hover effects with elevation and scale transforms
- **Action Buttons**: Play, Like, and Share functionality on each card
- **Notifications**: Toast-style notifications with gradient backgrounds

### Responsive Design
- **Desktop**: Full horizontal navigation and multi-column grid
- **Tablet**: Adjusted spacing and flexible grid columns
- **Mobile**: Single-column layout, compact navigation, optimized touch targets

## File Structure

```
ui-v4/
├── index.html          # Modern HTML5 with semantic markup
├── css/
│   └── main.css       # Gradient-based styling, 700+ lines
└── js/
    └── app.js         # Event handling and API integration
```

## Design System

### Color Palette
- **Primary**: `#ff0080` (Hot Pink) - Main brand color
- **Secondary**: `#00d4ff` (Cyan) - Accent and highlights
- **Accent**: `#ff8c00` (Dark Orange) - Call-to-action elements
- **Success**: `#00e676` (Green) - Positive feedback
- **Background**: `#0f0f1e` (Dark) - Primary background
- **Surface**: `#1a1a2e` (Lighter Dark) - Cards and containers

### Typography
- **Primary Font**: Segoe UI, Roboto, system fonts
- **Font Weights**: 600 (semi-bold), 700 (bold), 800 (heavy)
- **Heading Sizes**: 1.75rem (section), 2.5rem (hero), gradient text effects

### Spacing System
- **1rem = 16px** - Base unit
- **Gap**: 1rem-2rem between sections, 0.75rem-1rem between items
- **Padding**: 1.25rem-2rem for container padding

## How to Use

1. **Open the UI**:
   ```
   http://localhost:3000/ui-v4/
   ```

2. **Navigate**:
   - Click tab buttons to switch between content sections
   - Use search bar to find specific videos
   - Click category tags to filter content

3. **Interact**:
   - **Play**: Click video thumbnail or play button
   - **Like**: Click heart icon (shows feedback)
   - **Share**: Click share icon (copies link)

4. **Theme Toggle**:
   - Click sun icon in header to switch between dark/light modes
   - Preference saved in localStorage

## What Makes v4 Different

| Feature | v3 | v4 |
|---------|-----|-----|
| Navigation | Sidebar | Horizontal Tabs |
| Color Scheme | Indigo/Pink | Pink/Orange/Cyan |
| Aesthetics | Minimalist | Gradient-Heavy |
| Hero Section | None | Full Featured |
| Cards | Rounded | Modern with hover effects |
| Search Bar | Top navbar | Center focus section |
| Spacing | Compact | Generous |
| Animations | 0.3s | 0.4s ease-out |

## API Integration

The UI connects to the backend API at `http://localhost:3000/api` and supports these endpoints:

```javascript
// Endpoints mapped by tab:
- /api/mock/home         → Home tab
- /api/mock/trending     → Trending tab
- /api/mock/subscriptions → Subscriptions tab
- /api/mock/library      → Library tab
- /api/mock/history      → History tab
- /api/mock/likes        → Likes tab
```

Expected video object structure:
```javascript
{
    id: string,
    title: string,
    channel: string,
    thumbnail: string,
    avatar: string,
    views: string,
    uploaded: string
}
```

## Browser Support
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## Performance
- **Zero external dependencies** - Vanilla JS/CSS only
- **Lightweight**: ~15KB CSS, ~8KB JS combined
- **Fast animations**: GPU-accelerated transforms and opacity
- **Optimized images**: Graceful fallbacks with onerror handlers

## Accessibility
- Semantic HTML5 markup
- ARIA labels on interactive elements
- Keyboard-navigable buttons
- High contrast gradients (4.5:1+ ratio)
- Focus visible states on all interactive elements

## Future Enhancements
- [ ] Video detail/watch page
- [ ] User authentication
- [ ] Playlist functionality
- [ ] Comments system
- [ ] Upload video interface

