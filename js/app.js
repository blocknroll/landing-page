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
 * JS Standard: ESlint
 *
*/


// Create the NAV

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

  // add HTML to li
  newLi.insertAdjacentHTML("afterbegin",
                           '<a href="#' + section.id + '" class="menu__link">' + 
                           title.innerText + '</a>');
  // add newLi to nav ul
  navbarList.appendChild(newLi);
}


// .menu__link



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

// Build menu

// Scroll to section on link click

// Set sections as active
