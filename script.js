const videos = {
  video1: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "Video Title",
    channel: "Channel Name",
    views: "1M views",
    uploaded: "1 year ago",
  },
  video2: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "Video Title 2",
    channel: "Channel Name 2",
    views: "2M views",
    uploaded: "2 years ago",
  },
  video3: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "Video Title 3",
    channel: "Channel Name 3",
    views: "3M views",
    uploaded: "3 years ago",
  },
  video4: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "Video Title 4",
    channel: "Channel Name 4",
    views: "4M views",
    uploaded: "4 years ago",
  },
  video5: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "Video Title 5",
    channel: "Channel Name 5",
    views: "5M views",
    uploaded: "5 years ago",
  },
  video6: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "Video Title 6",
    channel: "Channel Name 6",
    views: "2M views",
    uploaded: "2 years ago",
  },
  video7: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "Video Title 7",
    channel: "Channel Name 7",
    views: "2M views",
    uploaded: "2 years ago",
  },
  video8: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "Video Title 8",
    channel: "Channel Name 8",
    views: "2M views",
    uploaded: "2 years ago",
  },
};

/* hamburger → collapse / expand the sidebar */
document.querySelector("#menuBtn").addEventListener("click", () => {
  document.body.classList.toggle("side-mini");
});
/* chips → visual active state only for now (filtering comes in Step 4) */
document.querySelectorAll("#chipsbar .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document
      .querySelectorAll("#chipsbar .chip")
      .forEach((c) => c.classList.remove("on"));
    chip.classList.add("on");
  });
});
/* sidebar items → visual active state for now */
document.querySelectorAll(".sb-item, .mn-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement
      .querySelectorAll(".sb-item, .mn-item")
      .forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

function renderVideos() {
  const videoGrid = document.querySelector("#grid");
  videoGrid.innerHTML = ""; // Clear existing videos
  // Here we take the search query
  const query = document.querySelector("#searchInput").value.toLowerCase();
  // Here we filter videos based on the search query
  const filteredVideos = Object.values(videos).filter((video) =>
    video.title.toLowerCase().includes(query) || video.channel.toLowerCase().includes(query),
  );
  // Here we render the filtered videos
  filteredVideos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.classList.add("card");
    videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
            <p>${video.channel}</p>
            <p>${video.views} • ${video.uploaded}</p>
        `;
    videoGrid.appendChild(videoCard);
  });
}
/* render all lucide icons */
lucide.createIcons();

const query = document.querySelector("#searchInput");

if (query) {
  searchInput.addEventListener("input", renderVideos);
}

renderVideos();
