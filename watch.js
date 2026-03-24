const API_BASE = "http://localhost:3000/api/mock";

const getVideoIdFromQuery = () => {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("v")) || 1;
};

const buildComments = (video) => [
  {
    author: "MyTube Viewer",
    text: `Great upload from ${video.channel}.`,
  },
  {
    author: "CodeFan",
    text: `This part about \"${video.title}\" was super useful.`,
  },
  {
    author: "LearningDaily",
    text: "Please post more videos like this!",
  },
];

const renderVideo = (video) => {
  document.getElementById("video-player").innerHTML = `
    <iframe
      src="${video.videoUrl}"
      title="${video.title}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  `;

  document.getElementById("video-title").textContent = video.title;
  document.getElementById("video-views").textContent = `${video.views} views`;
  document.getElementById("video-date").textContent =
    ` • ${video.uploaded || "Just now"}`;
  document.getElementById("channel-name").textContent = video.channel;
  document.getElementById("subscriber-count").textContent = "1.2M subscribers";
  document.getElementById("video-description").textContent =
    video.description || "No description provided.";
};

const renderComments = (video) => {
  const commentsContainer = document.getElementById("comments");
  commentsContainer.innerHTML = "";

  buildComments(video).forEach((comment) => {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `
      <div class="comment-author">${comment.author}</div>
      <div class="comment-text">${comment.text}</div>
    `;
    commentsContainer.appendChild(div);
  });
};

const renderRecommended = (videos, currentVideoId) => {
  const recContainer = document.getElementById("recommended-videos");
  recContainer.innerHTML = "";

  videos
    .filter((video) => video.id !== currentVideoId && video.type === "video")
    .slice(0, 8)
    .forEach((video) => {
      const card = document.createElement("div");
      card.className = "recommend-card";
      card.innerHTML = `
        <div class="recommend-thumb">
          <img src="${video.thumbnail}" alt="${video.title}" />
        </div>
        <div class="recommend-info">
          <h5>${video.title}</h5>
          <p>${video.channel}</p>
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
    '<div style="padding:16px;">Video not found.</div>';
  document.getElementById("video-title").textContent = "Video not found";
  document.getElementById("video-views").textContent = "";
  document.getElementById("video-date").textContent = "";
  document.getElementById("channel-name").textContent = "";
  document.getElementById("subscriber-count").textContent = "";
  document.getElementById("video-description").textContent =
    "Try opening another video from the home page.";
  document.getElementById("comments").innerHTML = "";
  document.getElementById("recommended-videos").innerHTML = "";
};

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
