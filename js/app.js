/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * jshint esversion: 6 *
 *
 * JS Standard: ESlint
 *
*/




// Create the NAV /////////////////////////////////////

// first access the NAV <ul>
// we'll append <li>'s to it next...
const navbarList = document.getElementById("navbar__list");

// start creating <li> links //////////////////////
// first, select all sections, save in a variable
const sections = document.getElementsByTagName("section");

// loop through those sections and make a link from each
for (const section of sections) {
  // create the <li> element
  const newLi = document.createElement("li");

  // grab the section's title from the <h2>
  // we'll use it for the button text
  const title = section.querySelector("h2");

  // add HTML to <li>
  newLi.insertAdjacentHTML("afterbegin",
                           '<a href="#' + section.id + '" target="#' +
                           section.id + '" class="menu__link">' +
                           title.innerText + '</a>');
  // add newLi to <nav> <ul>
  navbarList.appendChild(newLi);
}




// IN VIEWPORT HIGHLIGHT /////////////////////////////////

// helper function: check if element is > 50% in viewport
function isInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight / 2) &&
    rect.bottom >= (window.innerHeight / 2)
  );
}

// find all sections. for each loop:
    // add an eventListener for scrolling
    // check if in viewport
    // add/remove class if in viewport
document.querySelectorAll("section").forEach(section => {
  window.addEventListener("scroll", function() {
    if ( isInViewport(section) === true ) {
      section.className = "active";
    } else {
      section.className = "inactive";
    }
  });
});




// SCROLL TO LINKS ///////////////////////////////////////

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

document.querySelectorAll("a").forEach( (a) => {
  a.addEventListener("click", () => {
    event.preventDefault();
    scrollTo( document.querySelector( a.target ) );
  });
});

















/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables



 * Start Helper Functions
 *
*/



/**
 * End Helper Functions



 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions



 * Begin Events
 *
*/
