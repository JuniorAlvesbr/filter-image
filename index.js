const listItems = document.querySelectorAll('[data-js="list-items"]');
const listContent = document.querySelectorAll(".content");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    activeList(item);
    activeContent(item);
  });
});

function activeList(item) {
  listItems.forEach((listItem) => {
    listItem.classList.remove("-active");
  });
  item.classList.add("-active");
}

function activeContent(item) {
  listContent.forEach((content) => {
    content.classList.remove("-active");
    if (item.classList[1] === "all") {
      content.classList.add("-active");
    } else if (item.classList[1] === content.classList[1]) {
      content.classList.add("-active");
    }
  });
}
