var windowHeight = window.innerHeight.toString();
var windowWidth = window.innerWidth.toString();
console.log(windowHeight, windowWidth);

var coverImg = document.querySelector(".cover-img");
const setCoverImgHeight = (coverImg.style.height = windowHeight + "px");
var onPageLoadSetHeight = (document.querySelector(".site-container").style.top =
  windowHeight - 100 + "px");

const menuHeader = document.querySelector("header");

// Dynamic top menu positioning
$(window).bind("scroll", function () {
  if ($(window).scrollTop() > windowHeight - 1) {
    $("header").addClass("fixed");
    $(".br-between-header-and-section").css("display", "block");
  } else {
    $("header").removeClass("fixed");
    $(".br-between-header-and-section").css("display", "none");
  }
});

//Hamburger Menu
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".show-menu");
const closeIcon = document.querySelector(".close-menu");

//desktop Hamburger
const desktopHamburger = document.querySelector(".show-menu-two");
const desktopCloseIcon = document.querySelector(`.close-menu-two`);

//section 1
const sectionOne = document.querySelector(`.section-one`);

console.log(sectionOne);

// const hidden = document.querySelector(".hidden");

// console.log(menuToggle);
console.log(hamburger.classList.contains("hidden"));
console.log(hamburger.classList.contains("show"));

function toggleMenu() {
  if (closeIcon.classList.contains("hidden")) {
    console.log(menuOpen);
    hamburger.classList.add("hidden");
    console.log(`before`);
    sectionOne.style.overflow = "sticky";
    console.log(`after`);
    closeIcon.classList.remove("hidden");
    menu.classList.remove("hidden");
    desktopHamburger.classList.add("hidden");
    desktopCloseIcon.classList.remove("hidden");
  } else if (hamburger.classList.contains("hidden")) {
    hamburger.classList.remove("hidden");
    menu.classList.add("hidden");
    closeIcon.classList.add("hidden");
    desktopHamburger.classList.remove("hidden");
    desktopCloseIcon.classList.add("hidden");
  }
}

const menuOpen = document
  .querySelector(`.show-menu`)
  .addEventListener(`click`, toggleMenu);
const menuClose = document
  .querySelector(".close-menu")
  .addEventListener(`click`, toggleMenu);
const openDesktopMenu = document
  .querySelector(`.show-menu-two`)
  .addEventListener(`click`, toggleMenu);
const closeDesktopMenu = document
  .querySelector(`.close-menu-two`)
  .addEventListener(`click`, toggleMenu);
//end hamburger Menu

//spotlight mega menu section
//get the buttons of spotlight section
const linvingInGeelingBtn = document
  .querySelector(".living")
  .addEventListener(`mouseover`, openMegaMenuLiving);
const businessInGeelingBtn = document
  .querySelector(".business")
  .addEventListener(`mouseover`, openMegaMenuBuiness);
const buildingInGeelingBtn = document
  .querySelector(".building")
  .addEventListener(`mouseover`, openMegaMenuBuilding);
const cityCouncilBtn = document
  .querySelector(".council")
  .addEventListener(`mouseover`, openMegaMenuCouncil);

//get the titles for the sections `living,building,council`- so i can manipulate the stlyes
const everythingAboutLiving = document.querySelector(
  ".everything-about-living"
);
const everythingAboutbusiness = document.querySelector(
  ".everything-about-business"
);
const everythingAboutbuilding = document.querySelector(
  ".everything-about-building"
);
const everythingAboutcouncil = document.querySelector(
  ".everything-about-council"
);
console.log(
  everythingAboutLiving,
  everythingAboutbuilding,
  everythingAboutbusiness,
  everythingAboutcouncil
);
//get `living,building,council` class - so i can manipulate the stlyes
const livingClass = document.querySelector(".living, .living-spotlight");
const businessSpotlightClass = document.querySelector(".business-spotlight");
console.log(businessSpotlightClass);
const buildingSpotlightClass = document.querySelector(".building-spotlight");
console.log(buildingSpotlightClass);
const councilSpotlightClass = document.querySelector(".council-spotlight");
console.log(councilSpotlightClass);

//Get the search bar
const searchBar = document.querySelector(".desktop-search");
// console.log(searchBar.classList);

//get the spotlight content boxes
const spotlightContentBox = document.querySelector(
  ".geelong-spotlight-content"
);
const livingSpotLight = document.querySelector(".living-spotlight");
const buildingTabColor = document.querySelector(".building");
const businessTabColor = document.querySelector(".business");
const councilTabColor = document.querySelector(".council");

// const businessSpotLight =
//to get the different spotligh menus to open
const showLivingSpotlightContentBox = function () {
  if (livingSpotLight.style.display !== "grid") {
    spotlightContentBox.style.display = "grid";
    livingSpotLight.style.display = "grid";
    buildingSpotlightClass.style.display = "none";
    businessSpotlightClass.style.display = "none";
    councilSpotlightClass.style.display = "none";
    searchBar.style.display = "none";
    livingClass.style.backgroundColor = "rgba(231, 6, 32, .7)";
    businessTabColor.style.backgroundColor = "rgba(162, 96, 163, .7)";
    buildingTabColor.style.backgroundColor = "rgba(0, 165, 125, .7)";
    councilTabColor.style.backgroundColor = "RGBA(3, 72, 142, 0.7)";
    spotlightContentBox.style.backgroundColor = "rgba(231, 6, 32, .7)";
    everythingAboutLiving.style.display = "block";
    everythingAboutbusiness.style.display = "none";
    everythingAboutbuilding.style.display = "none";
    everythingAboutcouncil.style.display = "none";
    searchBar.style.display = "none";
    buildingSpotlightClass.style.display = "none";
    businessSpotlightClass.style.display = "none";
    councilSpotlightClass.style.display = "none";
    console.log(`is it getting this far`);
  } else if (livingSpotLight.style.display === "grid") {
    console.log(`i now contain display none`);
    spotlightContentBox.style.display = "none";
    livingSpotLight.style.display = "none";
    buildingSpotlightClass.style.display = "none";
    businessSpotlightClass.style.display = "none";
    councilSpotlightClass.style.display = "none";
    everythingAboutLiving.style.display = "none";
  }
};

const showBusinessSpotlightContentBox = function () {
  if (businessSpotlightClass.style.display !== "grid") {
    console.log(`tring to open businessSpotlightClass`);
    spotlightContentBox.style.display = "grid";
    console.log(`2`);
    buildingSpotlightClass.style.display = "none";
    businessSpotlightClass.style.display = "grid";
    councilSpotlightClass.style.display = "none";
    livingSpotLight.style.display = "none";
    livingClass.style.backgroundColor = "rgba(231, 64, 32, .7)";
    businessTabColor.style.backgroundColor = "rgba(162, 9, 163, .7)";
    buildingTabColor.style.backgroundColor = "rgba(0, 165, 125, .7)";
    councilTabColor.style.backgroundColor = "RGBA(3, 72, 142, 0.7)";
    spotlightContentBox.style.backgroundColor = "rgba(162, 9, 163, .7)";
    everythingAboutLiving.style.display = "none";
    everythingAboutbusiness.style.display = "block";
    everythingAboutbuilding.style.display = "none";
    everythingAboutcouncil.style.display = "none";
    searchBar.style.display = "none";
    console.log(`is it getting this far`);
  } else if ((businessSpotlightClass.style.display = "grid")) {
    console.log(`i now contain display none`);
    spotlightContentBox.style.display = "none";
    livingSpotLight.style.display = "none";
    buildingSpotlightClass.style.display = "none";
    businessSpotlightClass.style.display = "none";
    councilSpotlightClass.style.display = "none";
  }
};

const showBuildingSpotlightContentBox = function () {
  if (buildingSpotlightClass.style.display !== "grid") {
    console.log(`tring to open buildingSpotlightClass`);
    spotlightContentBox.style.display = "grid";
    console.log(`3`);
    buildingSpotlightClass.style.display = "grid";
    businessSpotlightClass.style.display = "none";
    councilSpotlightClass.style.display = "none";
    livingSpotLight.style.display = "none";
    livingClass.style.backgroundColor = "rgba(231, 64, 32, .7)";
    businessTabColor.style.backgroundColor = "rgba(162, 96, 163, .7)";
    buildingTabColor.style.backgroundColor = "rgba(0, 125, 135, .7)";
    councilTabColor.style.backgroundColor = "RGBA(3, 72, 142, 0.7)";
    spotlightContentBox.style.backgroundColor = "rgba(0, 125, 135, .8)";
    searchBar.style.display = "none";
    everythingAboutLiving.style.display = "none";
    everythingAboutbusiness.style.display = "none";
    everythingAboutbuilding.style.display = "block";
    everythingAboutcouncil.style.display = "none";
    console.log(`is it getting this far`);
    livingClass.style.backgroundColor = "rgba(231, 64, 32, .7)";
  } else if ((buildingSpotlightClass.style.display = "none")) {
    console.log(`i now contain display none`);
    spotlightContentBox.style.display = "none";
    livingSpotLight.style.display = "none";
    buildingSpotlightClass.style.display = "none";
    businessSpotlightClass.style.display = "none";
    councilSpotlightClass.style.display = "none";
  }
};

const showCouncilSpotlightContentBox = function () {
  if ((councilSpotlightClass.style.display = "none")) {
    console.log(`tring to open buildingSpotlightClass`);
    spotlightContentBox.style.display = "grid";
    console.log(`4`);
    buildingSpotlightClass.style.display = "none";
    businessSpotlightClass.style.display = "none";
    councilSpotlightClass.style.display = "grid";
    livingSpotLight.style.display = "none";
    livingClass.style.backgroundColor = "rgba(231, 64, 32, .7)";
    businessTabColor.style.backgroundColor = "rgba(162, 96, 163, .7)";
    buildingTabColor.style.backgroundColor = "rgba(0, 165, 125, .7)";
    councilTabColor.style.backgroundColor = "RGBA(3, 7, 142, 0.7)";
    spotlightContentBox.style.backgroundColor = "RGBA(3, 7, 142, 0.7)";
    searchBar.style.display = "none";
    everythingAboutLiving.style.display = "none";
    everythingAboutbusiness.style.display = "none";
    everythingAboutbuilding.style.display = "none";
    everythingAboutcouncil.style.display = "block";
    console.log(`is it getting this far`);
    livingClass.style.backgroundColor = "rgba(231, 64, 32, .7)";
  } else if ((councilSpotLightclass.style.display = "grid")) {
    console.log(`i now contain display none`);
    spotlightContentBox.style.display = "none";
    livingSpotLight.style.display = "none";
    buildingSpotlightClass.style.display = "none";
    businessSpotlightClass.style.display = "none";
    councilSpotlightClass.style.display = "none";
  }
};
////end of getting the different spotlight menus to open

//get the background overlay, so the menu will close when not ont it
const backgroundOverlay = document
  .querySelector(".overlay")
  .addEventListener(`mouseover`, closeAllMenus);
console.log(backgroundOverlay);

function openMegaMenuLiving() {
  console.log("click megamenu living");
  showLivingSpotlightContentBox();
}
function openMegaMenuBuiness() {
  console.log("click megamenu buiness");
  showBusinessSpotlightContentBox();
}
function openMegaMenuBuilding() {
  console.log("click megamenu building");
  showBuildingSpotlightContentBox();
}
function openMegaMenuCouncil() {
  console.log("click megamenu council");
  // document

  showCouncilSpotlightContentBox();
}
function closeAllMenus() {
  if (
    livingSpotLight.style.display !== "none" ||
    businessSpotlightClass.style.display !== "none" ||
    buildingSpotlightClass.style.display !== "none" ||
    councilSpotlightClass.style.display !== "none"
  ) {
    console.log(`99`);
    livingClass.style.backgroundColor = "rgba(231, 64, 32, .7)";
    businessTabColor.style.backgroundColor = "rgba(162, 96, 163, .7)";
    buildingTabColor.style.backgroundColor = "rgba(0, 165, 125, .7)";
    councilTabColor.style.backgroundColor = "RGBA(3, 72, 142, 0.7)";
    console.log(`trying to close everything`);
    spotlightContentBox.style.display = "none";
    livingSpotLight.style.display = "none";
    buildingSpotlightClass.style.display = "none";
    businessSpotlightClass.style.display = "none";
    councilSpotlightClass.style.display = "none";
    searchBar.style.display = "block";
  }
}

// //reset colours
// const resetLivingTabColors = function () {
//   livingClass.style.backgroundColor = "rgba(231, 64, 32, .7)";
// };
// const resetBusinessTabColors = function () {
//   businessTabColor.style.backgroundColor = "rgba(162, 96, 163, .7)";
// };
// const resetBuildingTabColors = function () {
//   buildingTabColor.style.backgroundColor = "rgba(0, 165, 125, .7)";
// };
// const resetcouncilTabColors = function () {
//   councilTabColor.style.backgroundColor = "RGBA(3, 72, 142, 0.7)";
// };

// //activate tab colours
// const activateLivingTabColors = function () {
//   livingClass.style.backgroundColor = "rgba(231, 6, 32, .7)";
//   businessTabColor.style.backgroundColor = "rgba(162, 96, 163, .7)";
//   buildingTabColor.style.backgroundColor = "rgba(0, 165, 125, .7)";
//   councilTabColor.style.backgroundColor = "RGBA(3, 72, 142, 0.7)";
// };

// const activateBusinesTabColors = function () {
//   livingClass.style.backgroundColor = "rgba(231, 64, 32, .7)";
//   businessTabColor.style.backgroundColor = "rgba(162, 9, 163, .7)";
//   buildingTabColor.style.backgroundColor = "rgba(0, 165, 125, .7)";
//   councilTabColor.style.backgroundColor = "RGBA(3, 72, 142, 0.7)";
// };

// const activateBuildingTabColors = function () {
//   livingClass.style.backgroundColor = "rgba(231, 64, 32, .7)";
//   businessTabColor.style.backgroundColor = "rgba(162, 96, 163, .7)";
//   buildingTabColor.style.backgroundColor = "rgba(0, 165, 180, .7)";
//   councilTabColor.style.backgroundColor = "RGBA(3, 72, 142, 0.7)";
// };

//news events updates
//get the headings
const newsHead = document.querySelector(".news");
const eventHead = document.querySelector(".events");
const updatesHead = document.querySelector(".updates");
console.log(newsHead, eventHead, updatesHead);

//get the content boxes
const newsCard = document.querySelector(".news-cards");
const eventCard = document.querySelector(".event-cards");
const updateCard = document.querySelector(".update-cards");
console.log(newsCard, eventCard, updateCard);

//change the content boxes
showNews = function () {
  console.log(`hey there`);
  newsCard.style.display = "grid";
  eventCard.style.display = "none";
  updateCard.style.display = "none";
};
showEvents = function () {
  console.log("events");
  newsCard.style.display = "none";
  eventCard.style.display = "grid";
  updateCard.style.display = "none";
};
showUpdates = function () {
  console.log("showe updates");
  newsCard.style.display = "none";
  eventCard.style.display = "none";
  updateCard.style.display = "grid";
};

//add click event
newsHead.addEventListener(`mouseover`, showNews);
eventHead.addEventListener(`mouseover`, showEvents);
updatesHead.addEventListener(`mouseover`, showUpdates);

const hiseSpotlightBoxes = function () {
  if ((document.querySelector("header").classList.contains = "fixed"))
    // console.log(menuHeader.style.position);
    console.log("try the hide spotlightboxes");
};
