const videos = {
  video1: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title:
      "STREAM-1: CODING STREAM | PYTHON | RAG | AI | AGENTIC SYSTEMS | 100% FREE",
    channel: "Yash Codzz",
    views: "1M views",
    uploaded: "1 year ago",
    tags: ["All", "Coding", "Education", "Development", "Live"],
  },
  video2: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title:
      "How Neural Networks ACTUALLY Work: Coding an AND Gate from Scratch (No Libraries)",
    channel: "Yash Codzz",
    views: "2M views",
    uploaded: "2 years ago",
    tags: ["All", "Coding", "Development", "Education", "Science"],
  },
  video3: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "This is a travelling video",
    channel: "Mr Beast",
    views: "2M views",
    uploaded: "2 years ago",
    tags: ["All", "trending", "City", "Travel"],
  },
  video4: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "A cooking video",
    channel: "Caseoh",
    views: "3M views",
    uploaded: "3 years ago",
    tags: ["All", "trending", "Food", "Cooking"],
  },
  video5: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "A gaming video",
    channel: "Doni Bobes",
    views: "4M views",
    uploaded: "4 years ago",
    tags: ["All", "trending", "Gaming", "Esports"],
  },
  video6: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "A gaming video",
    channel: "Karfton India Esports",
    views: "4M views",
    uploaded: "4 years ago",
    tags: ["All", "trending", "Gaming", "Esports"],
  },
  video7: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "An educational video",
    channel: "Vedantu",
    views: "5M views",
    uploaded: "5 years ago",
    tags: ["All", "trending", "Education", "Science"],
  },
  video8: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: " A live music video ",
    channel: "Idleglance",
    views: "2M views",
    uploaded: "2 years ago",
    tags: ["All", "trending", "Music", "Live"],
  },
  video9: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: " A live music video ",
    channel: "Shake Music",
    views: "2M views",
    uploaded: "2 years ago",
    tags: ["All", "trending", "Music", "Live"],
  },
  video10: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "A lifestyle vlog",
    channel: "Random Vlogger",
    views: "2M views",
    uploaded: "2 years ago",
    tags: ["All", "Vlog", "Lifestyle"],
  },
  video11: {
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    title: "A comedy sketch",
    channel: "Funny Guy",
    views: "2M views",
    uploaded: "2 years ago",
    tags: ["All", "Comedy", "Entertainment"],
  },
};

const tags = [
  "All",
  "trending",
  "Coding",
  "Development",
  "City",
  "Food",
  "Gaming",
  "Education",
  "Science",
  "Music",
  "Live",
  "Comedy",
  "Entertainment",
  "Vlog",
  "Lifestyle",
];

// hamburger → collapse / expand the sidebar
document.querySelector("#menuBtn").addEventListener("click", () => {
  document.body.classList.toggle("side-mini");
});

const chipsbar = document.querySelector("#chipsbar");

// Render chips dynamically based on the tags array
tags.forEach((tag) => {
  const chip = document.createElement("button");
  chip.classList.add("chip");
  chip.classList.toggle("on", tag === "All");
  chip.textContent = tag;
  chipsbar.appendChild(chip);
});

//  chips → visual active state only for now
document.querySelectorAll("#chipsbar .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document
      .querySelectorAll("#chipsbar .chip")
      .forEach((c) => c.classList.remove("on"));
    chip.classList.add("on");

    selectedChip = chip.textContent; // Update the selected tag
    renderVideos(); // Re-render videos based on the selected chip
  });
});

let selectedChip = "All"; // Default selected chip

//  sidebar items → visual active state for now
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
  const filteredVideos = Object.values(videos).filter((video) => {
    const matchesTag =
      selectedChip === "All" ||
      video.tags.some(
        (tag) => tag.toLowerCase() === selectedChip.toLowerCase(),
      );

    const matchesSearch =
      video.title.toLowerCase().includes(query) ||
      video.channel.toLowerCase().includes(query) ||
      video.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesTag && matchesSearch;
  });
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
// render all lucide icons
lucide.createIcons();

const query = document.querySelector("#searchInput");

if (query) {
  query.addEventListener("input", renderVideos);
}

renderVideos();
