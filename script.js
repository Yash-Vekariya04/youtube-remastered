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
/* render all lucide icons */
lucide.createIcons();
