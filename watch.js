// ==================== API CONFIGURATION ====================
const API_BASE = "http://localhost:3000/api/mock";

// ==================== SAMPLE VIDEO DATABASE WITH YOUTUBE LINKS ====================
const SAMPLE_VIDEOS = [
  {
    id: 1,
    title: "JavaScript Crash Course - Learn JS in 1 Hour",
    channel: "Tech Academy",
    videoUrl: "https://www.youtube.com/embed/jS4aFq5-91M",
    thumbnail: "https://img.youtube.com/vi/jS4aFq5-91M/maxresdefault.jpg",
    avatar: "https://yt4.googleusercontent.com/ytc/AEdYJ-QfRj0kx-_BoyVX4cOAj7u_1n8aOCQf5D9S_Q=s176-c-k-c0x00ffffff-no-rj",
    views: "2.5M",
    uploaded: "3 weeks ago",
    description: "Learn JavaScript fundamentals in just 60 minutes! Perfect for beginners. Topics covered: variables, functions, loops, arrays, objects, and DOM manipulation.",
    subscribers: "450K",
    likes: "45K",
    dislikes: "2K"
  },
  {
    id: 2,
    title: "React Tutorial for Beginners - Full Course 2024",
    channel: "Code Masters",
    videoUrl: "https://www.youtube.com/embed/SqcY0GlEPh4",
    thumbnail: "https://img.youtube.com/vi/SqcY0GlEPh4/maxresdefault.jpg",
    avatar: "https://yt4.googleusercontent.com/ytc/AEdYJ-Qh3-bL_7R5h8vK_u3KzQlL2mI5_5N7PqQ2cA=s176-c-k-c0x00ffffff-no-rj",
    views: "1.8M",
    uploaded: "2 months ago",
    description: "Complete React tutorial covering hooks, components, state management, and real-world projects. Start building modern web applications today!",
    subscribers: "380K",
    likes: "38K",
    dislikes: "1.5K"
  },
  {
    id: 3,
    title: "Web Development Roadmap 2024 - What You Need to Learn",
    channel: "Dev Simplified",
    videoUrl: "https://www.youtube.com/embed/Qs5vXGGDqtU",
    thumbnail: "https://img.youtube.com/vi/Qs5vXGGDqtU/maxresdefault.jpg",
    avatar: "https://yt4.googleusercontent.com/ytc/AEdYJ-Ky2L5h9B2_7Qz5_mJkL3nQ5pR7sT9uVwXyZA=s176-c-k-c0x00ffffff-no-rj",
    views: "920K",
    uploaded: "1 month ago",
    description: "Complete roadmap for becoming a web developer in 2024. Learn front-end, back-end, and full-stack development paths with recommended resources.",
    subscribers: "520K",
    likes: "62K",
    dislikes: "3K"
  },
  {
    id: 4,
    title: "CSS Grid & Flexbox - Master Modern Layouts",
    channel: "CSS Tricks",
    videoUrl: "https://www.youtube.com/embed/jV8B24rSN5o",
    thumbnail: "https://img.youtube.com/vi/jV8B24rSN5o/maxresdefault.jpg",
    avatar: "https://yt4.googleusercontent.com/ytc/AEdYJ-Sg7KmL9_5jV2nQpX7xR5sT_mZuYwAbCdEfQw=s176-c-k-c0x00ffffff-no-rj",
    views: "1.2M",
    uploaded: "2 weeks ago",
    description: "Master CSS Grid and Flexbox for creating responsive, modern layouts. Includes live coding examples and best practices for professional results.",
    subscribers: "280K",
    likes: "28K",
    dislikes: "1K"
  },
  {
    id: 5,
    title: "Node.js & Express.js - Build REST APIs",
    channel: "Backend Academy",
    videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
    thumbnail: "https://img.youtube.com/vi/L72fhGm1tfE/maxresdefault.jpg",
    avatar: "https://yt4.googleusercontent.com/ytc/AEdYJ-QpKmN7_3bS5vL8xM9yP2qR_tUvWxYzAbFgEQ=s176-c-k-c0x00ffffff-no-rj",
    views: "1.5M",
    uploaded: "1 week ago",
    description: "Learn to build scalable REST APIs using Node.js and Express.js. Covers routing, middleware, databases, authentication, and deployment.",
    subscribers: "310K",
    likes: "41K",
    dislikes: "2.2K"
  },
  {
    id: 6,
    title: "MongoDB Complete Tutorial - Database Mastery",
    channel: "Database Pro",
    videoUrl: "https://www.youtube.com/embed/ofme2o29ngU",
    thumbnail: "https://img.youtube.com/vi/ofme2o29ngU/maxresdefault.jpg",
    avatar: "https://yt4.googleusercontent.com/ytc/AEdYJ-ThL5vB7_9cX3hZ_uQ2pM_sRxSkVwCdFgHjYA=s176-c-k-c0x00ffffff-no-rj",
    views: "750K",
    uploaded: "3 weeks ago",
    description: "Complete MongoDB tutorial for beginners. Learn CRUD operations, indexing, aggregation pipelines, and best practices for NoSQL databases.",
    subscribers: "195K",
    likes: "19K",
    dislikes: "800"
  },
  {
    id: 7,
    title: "TypeScript Masterclass - Type Safety in JavaScript",
    channel: "Tech Channel",
    videoUrl: "https://www.youtube.com/embed/2KQQvBKtwks",
    thumbnail: "https://img.youtube.com/vi/2KQQvBKtwks/maxresdefault.jpg",
    avatar: "https://yt4.googleusercontent.com/ytc/AEdYJ-QtMpL5_7dZ_kV2_rN4sQ_uBvWxYzCgEhIjMA=s176-c-k-c0x00ffffff-no-rj",
    views: "890K",
    uploaded: "2 weeks ago",
    description: "Master TypeScript for type-safe development. Covers interfaces, types, generics, decorators, and integration with React and Node.js projects.",
    subscribers: "340K",
    likes: "51K",
    dislikes: "2.5K"
  },
  {
    id: 8,
    title: "Python for Data Science - Complete Guide",
    channel: "AI & ML Hub",
    videoUrl: "https://www.youtube.com/embed/LHBE6Q9XlzI",
    thumbnail: "https://img.youtube.com/vi/LHBE6Q9XlzI/maxresdefault.jpg",
    avatar: "https://yt4.googleusercontent.com/ytc/AEdYJ-SqRpM6_8tN_vO5_uR7sT_wXyZ1AbDeFgIjKA=s176-c-k-c0x00ffffff-no-rj",
    views: "2.1M",
    uploaded: "1 month ago",
    description: "Learn Python for data science. Covers NumPy, Pandas, Matplotlib, and scikit-learn. Perfect for aspiring data scientists and analysts.",
    subscribers: "620K",
    likes: "95K",
    dislikes: "4K"
  }
];

// ==================== UTILITY FUNCTIONS ====================
const getVideoIdFromQuery = () => {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("v")) || 1;
};

const getVideoById = (id) => {
  return SAMPLE_VIDEOS.find(video => video.id === id);
};

// ==================== COMMENT GENERATION ====================
const buildComments = (video) => [
  {
    author: "Tech Enthusiast",
    text: `Excellent explanation of ${video.title.toLowerCase()}. Highly recommend!`,
    timestamp: "2 days ago",
    likes: 342
  },
  {
    author: "Code Learner",
    text: `This is exactly what I needed! Thank you ${video.channel} for the amazing tutorial.`,
    timestamp: "1 week ago",
    likes: 189
  },
  {
    author: "Web Developer",
    text: `The examples were so helpful. Please make more videos like this!`,
    timestamp: "3 days ago",
    likes: 156
  },
  {
    author: "JavaScript Fan",
    text: `Finally someone explaining this clearly. Been looking for this.`,
    timestamp: "5 hours ago",
    likes: 67
  },
  {
    author: "Full Stack Dev",
    text: `Can't wait for the next part of this series!`,
    timestamp: "1 day ago",
    likes: 203
  },
];

// ==================== RENDER FUNCTIONS ====================
const renderVideo = (video) => {
  const playerContainer = document.getElementById("video-player");
  
  if (!video) {
    renderNotFound();
    return;
  }

  playerContainer.innerHTML = `
    <iframe
      width="100%"
      height="600"
      src="${video.videoUrl}"
      title="${video.title}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      style="border-radius: 8px;"
    ></iframe>
  `;

  document.getElementById("video-title").textContent = video.title;
  document.getElementById("video-views").textContent = `${video.views} views`;
  document.getElementById("video-date").textContent = ` • ${video.uploaded}`;
  document.getElementById("channel-name").textContent = video.channel;
  document.getElementById("subscriber-count").textContent = `${video.subscribers} subscribers`;
  document.getElementById("video-description").textContent = video.description;
};

const renderComments = (video) => {
  const commentsContainer = document.getElementById("comments");
  
  if (!commentsContainer) return;
  
  commentsContainer.innerHTML = "";

  buildComments(video).forEach((comment) => {
    const div = document.createElement("div");
    div.className = "comment";
    div.style.cssText = `
      padding: 16px 0;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      gap: 12px;
    `;
    
    div.innerHTML = `
      <div style="flex-shrink: 0;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: #ccc; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #fff;">
          ${comment.author.charAt(0)}
        </div>
      </div>
      <div style="flex: 1;">
        <div style="font-weight: 500; margin-bottom: 4px;">${comment.author} <span style="color: #606060; font-weight: normal; font-size: 12px;">${comment.timestamp}</span></div>
        <div style="color: #030303; word-wrap: break-word;">${comment.text}</div>
        <div style="margin-top: 8px; display: flex; gap: 16px; font-size: 12px; color: #606060;">
          <button style="background: none; border: none; cursor: pointer; color: #606060;" onclick="this.textContent = '👍 ' + (${comment.likes} + 1)">👍 ${comment.likes}</button>
          <button style="background: none; border: none; cursor: pointer; color: #606060;">👎</button>
          <button style="background: none; border: none; cursor: pointer; color: #606060; font-weight: 500;">Reply</button>
        </div>
      </div>
    `;
    
    commentsContainer.appendChild(div);
  });
};

const renderRecommended = (currentVideoId) => {
  const recContainer = document.getElementById("recommended-videos");
  
  if (!recContainer) return;
  
  recContainer.innerHTML = "";

  const recommendedVideos = SAMPLE_VIDEOS
    .filter(video => video.id !== currentVideoId)
    .slice(0, 8);

  recommendedVideos.forEach((video) => {
    const card = document.createElement("div");
    card.className = "recommend-card";
    card.style.cssText = `
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: background 0.3s;
    `;
    
    card.onmouseover = () => card.style.background = "#f9f9f9";
    card.onmouseout = () => card.style.background = "transparent";

    card.innerHTML = `
      <div style="flex-shrink: 0; width: 120px;">
        <img src="${video.thumbnail}" alt="${video.title}" style="width: 100%; border-radius: 6px; height: 67px; object-fit: cover;" />
      </div>
      <div style="flex: 1; min-width: 0;">
        <h5 style="font-size: 13px; font-weight: 500; line-height: 1.3; margin: 0 0 4px 0; color: #030303;">${video.title}</h5>
        <p style="font-size: 12px; color: #606060; margin: 0 0 2px 0;">${video.channel}</p>
        <p style="font-size: 12px; color: #606060; margin: 0;">${video.views} views</p>
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `./watch.html?v=${video.id}`;
    });

    recContainer.appendChild(card);
  });
};

const renderNotFound = () => {
  document.getElementById("video-player").innerHTML =
    '<div style="padding: 40px 16px; text-align: center; background: #f9f9f9; border-radius: 8px;">❌ Video not found</div>';
  document.getElementById("video-title").textContent = "Video Not Found";
  document.getElementById("video-views").textContent = "";
  document.getElementById("video-date").textContent = "";
  document.getElementById("channel-name").textContent = "";
  document.getElementById("subscriber-count").textContent = "";
  
  const descEl = document.getElementById("video-description");
  if (descEl) descEl.textContent = "The video you're looking for is not available. Try selecting another video from the recommendations.";
  
  const commentsEl = document.getElementById("comments");
  if (commentsEl) commentsEl.innerHTML = "";
  
  const recEl = document.getElementById("recommended-videos");
  if (recEl) recEl.innerHTML = "";
};

// ==================== INTERACTION HANDLERS ====================
const handleLike = () => {
  const likeBtn = document.querySelector('[data-action="like"]');
  if (likeBtn) {
    likeBtn.style.color = "#ff0000";
    likeBtn.textContent = "❤️ Liked";
  }
};

const handleSubscribe = () => {
  const subscribeBtn = document.querySelector('.subscribe-btn');
  if (subscribeBtn) {
    subscribeBtn.textContent = "✓ Subscribed";
    subscribeBtn.disabled = true;
    subscribeBtn.style.background = "#f0f0f0";
    subscribeBtn.style.color = "#030303";
  }
};

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  const videoId = getVideoIdFromQuery();
  const video = getVideoById(videoId);

  if (video) {
    renderVideo(video);
    renderComments(video);
    renderRecommended(videoId);
  } else {
    renderNotFound();
  }

  // Add event listeners for buttons if they exist
  const subscribeBtn = document.querySelector(".subscribe-btn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", handleSubscribe);
  }

  // Add share functionality
  const shareButtons = document.querySelectorAll('[data-action="share"]');
  shareButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const url = window.location.href;
      if (navigator.share) {
        navigator.share({
          title: document.getElementById("video-title").textContent,
          url: url
        }).catch(err => console.log("Share failed:", err));
      } else {
        alert(`Share link: ${url}`);
      }
    });
  });
});

const initWatchPage = async () => {
  const selectedVideoId = getVideoIdFromQuery();

  try {
    const [videoResponse, recommendationsResponse] = await Promise.all([
      fetch(`${API_BASE}/video/${selectedVideoId}`),
      fetch(`${API_BASE}/home`),
    ]);

    if (!videoResponse.ok) {
      renderNotFound();
      return;
    }

    const selectedVideo = await videoResponse.json();
    const recommendedVideos = recommendationsResponse.ok
      ? await recommendationsResponse.json()
      : [];

    renderVideo(selectedVideo);
    renderComments(selectedVideo);
    renderRecommended(recommendedVideos, selectedVideo.id);
  } catch (error) {
    console.error("Failed to load watch page data:", error);
    renderNotFound();
  }
};

initWatchPage();
