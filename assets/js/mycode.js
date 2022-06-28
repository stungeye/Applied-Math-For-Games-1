document.addEventListener("DOMContentLoaded", function (event) {
  if (GLightbox) {
    GLightbox({ selector: "img" });
  }

  const codepens = document.querySelectorAll(".codepen");

  if (codepens.length > 0) {
    const codepenScript = document.createElement("script");
    codepenScript.src = "https://static.codepen.io/assets/embed/ei.js";
    document.head.appendChild(codepenScript);
  }

  const iframes = document.querySelectorAll("iframe");

  // A bunch of tomfoolery to hide the p5.js embed header.
  // Iframe for the embed must be give an explicit height/width.
  // Height of iframe must be set 42 pixels greater than sketch height.
  for (const iframe of iframes) {
    if (iframe.src.includes("p5js")) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("iframe-wrapper");
      wrapper.style.height = parseInt(iframe.height) - 42 + "px";
      wrapper.style.width = parseInt(iframe.width) + "px";
      iframe.parentNode.insertBefore(wrapper, iframe);
      iframe.height = parseInt(iframe.height) + 42;
      iframe.width = parseInt(iframe.width) + 42;
      wrapper.appendChild(iframe);
    }
  }
});
