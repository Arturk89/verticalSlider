document.addEventListener("DOMContentLoaded", function() {
  console.log("działa");

  const rootElement = document.querySelector("#root");
  const sections = document.querySelectorAll("section");

  document.addEventListener("mousewheel", function(e) {
    console.log(e.wheelDelta);
  });
});
