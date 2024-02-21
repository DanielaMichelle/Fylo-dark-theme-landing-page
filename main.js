const twitterIcon = document.querySelector(".twitter");
const facebookIcon = document.querySelector(".facebook");
const instagramIcon = document.querySelector(".instagram");

// change icon img on hover
const changeTwiter = (icon) => {
  if (
    icon.getAttribute("src") ===
    `images/square-${icon.getAttribute("class")}-white.svg`
  ) {
    icon.setAttribute("src", `images/square-${icon.getAttribute("class")}.svg`);
  } else {
    icon.setAttribute(
      "src",
      `images/square-${icon.getAttribute("class")}-white.svg`
    );
  }
};

twitterIcon.addEventListener("mouseover", () => changeTwiter(twitterIcon));
twitterIcon.addEventListener("mouseout", () => changeTwiter(twitterIcon));
facebookIcon.addEventListener("mouseover", () => changeTwiter(facebookIcon));
facebookIcon.addEventListener("mouseout", () => changeTwiter(facebookIcon));
instagramIcon.addEventListener("mouseover", () => changeTwiter(instagramIcon));
instagramIcon.addEventListener("mouseout", () => changeTwiter(instagramIcon));
