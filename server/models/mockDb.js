// models/mockDb.js

let mockVideos = [];

// Helper to generate a random number
const rand = (max) => Math.floor(Math.random() * max) + 1;

const youtubeIds = [
  "dQw4w9WgXcQ",
  "M7lc1UVf-VE",
  "ysz5S6PUM-U",
  "kXYiU_JCYtU",
  "hHW1oY26kxQ",
  "ScMzIvxBSi4",
  "fLexgOxsZu0",
  "9bZkp7q19f0",
  "3JZ_D3ELwOQ",
  "Zi_XLOBDo_Y",
  "2Vv-BfVoq4g",
  "ktvTqknDobU",
  "JGwWNGJdvx8",
  "CevxZvSJLk8",
  "09R8_2nJtjg",
  "60ItHLz5WEA",
  "e-ORhEE9VVg",
  "YQHsXMglC9A",
  "RgKAFK5djSk",
  "OPf0YbXqDm0",
];

const getYoutubeUrl = (index) =>
  `https://www.youtube.com/embed/${youtubeIds[index % youtubeIds.length]}`;

const getDescription = (title, channel) =>
  `${title} by ${channel}. Watch this featured YouTube video on MyTube.`;

// 1. GENERATE TRENDING (HOME) - 15 Videos
for (let i = 1; i <= 15; i++) {
  const title = `Trending Video #${i}: Exploring the Future of Tech`;
  const channel = `TechChannel ${i}`;
  mockVideos.push({
    id: i,
    title,
    channel,
    views: `${rand(999)}K`,
    uploaded: `${i}h ago`,
    type: "video",
    category: "trending",
    thumbnail: `https://picsum.photos/seed/home${i}/300/170`,
    avatar: `https://i.pravatar.cc/50?u=home${i}`,
    description: getDescription(title, channel),
    videoUrl: getYoutubeUrl(i - 1),
  });
}

// 2. GENERATE SUBSCRIPTIONS - 15 Videos
for (let i = 1; i <= 15; i++) {
  const title = `Subscribed Content: Daily Vlog Day ${i + 100}`;
  const channel = `Creator ${i}`;
  mockVideos.push({
    id: i + 15,
    title,
    channel,
    views: `${rand(50)}K`,
    uploaded: `${i}d ago`,
    type: "video",
    category: "subscription",
    thumbnail: `https://picsum.photos/seed/sub${i}/300/170`,
    avatar: `https://i.pravatar.cc/50?u=sub${i}`,
    description: getDescription(title, channel),
    videoUrl: getYoutubeUrl(i + 14),
  });
}

// 3. GENERATE HISTORY (YOU) - 15 Videos
for (let i = 1; i <= 15; i++) {
  const title = `Rewatch: Learning SQL Part ${i}`;
  const channel = "Database Academy";
  mockVideos.push({
    id: i + 30,
    title,
    channel,
    views: `${rand(5)}M`,
    uploaded: `${i}mo ago`,
    type: "video",
    category: "history",
    thumbnail: `https://picsum.photos/seed/hist${i}/300/170`,
    avatar: `https://i.pravatar.cc/50?u=hist${i}`,
    description: getDescription(title, channel),
    videoUrl: getYoutubeUrl(i + 29),
  });
}

// 4. GENERATE SHORTS - 15 Shorts
for (let i = 1; i <= 15; i++) {
  const title = `Amazing Short #${i}! #shorts`;
  const channel = "ShortsMaster";
  mockVideos.push({
    id: i + 45,
    title,
    channel,
    views: `${rand(10)}M`,
    type: "short",
    category: "shorts",
    thumbnail: `https://picsum.photos/seed/short${i}/200/350`, // Taller aspect ratio for shorts
    avatar: `https://i.pravatar.cc/50?u=short${i}`,
    description: getDescription(title, channel),
    videoUrl: getYoutubeUrl(i + 44),
  });
}

const mockDb = {
  query: async (sql, params) => {
    const queryStr = sql.toLowerCase();

    // Filtering logic
    if (queryStr.includes("where category = ?")) {
      const filtered = mockVideos.filter((v) => v.category === params[0]);
      return [filtered];
    }

    if (queryStr.includes("where id = ?")) {
      const id = Number(params[0]);
      const selected = mockVideos.filter((v) => v.id === id);
      return [selected];
    }

    return [mockVideos]; // Default return all
  },
};

module.exports = mockDb;
