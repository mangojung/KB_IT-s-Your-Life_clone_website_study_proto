async function loadHTML(id, file) {
  const response = await fetch(file);
  const text = await response.text();
  document.getElementById(id).innerHTML = text;
}

loadHTML("header", "./parts/header.html");
loadHTML("left-nav", "./parts/left_nav.html");
loadHTML("main-content", "./parts/main_content.html");
loadHTML("right-nav", "./parts/right_nav.html");
loadHTML("footer", "./parts/footer.html");