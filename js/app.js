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
/*jshint esversion: 6 */




// build the NAV /////////////////////////////////////

function createNav () {
  // first access the NAV <ul>
  // we'll append <li>'s to it next...
  const navbarList = document.getElementById("navbar__list");

  // start creating <li> links /////////
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
                             '<a href="#' + section.id +
                             '" id="' + section.id + 'Link" target="#' +
                             section.id + '" class="menu__link">' +
                             title.innerText + '</a>');
    // add newLi to <nav> <ul>
    navbarList.appendChild(newLi);
  }
}
createNav();






// Scroll to anchor ID ///////////////////////////////
document.querySelectorAll("a").forEach( a => {
  a.addEventListener("click", () => {
    event.preventDefault();
    document.querySelector( a.target ).scrollIntoView( {behavior: "smooth"} );
  });
});






// HIDING NAVBAR //////////////////////////////////////
let isScrolling;

// add scroll event
window.addEventListener("scroll", () => {

  // while scrolling: clear timeout + display <nav>
  window.clearTimeout( isScrolling );
  document.querySelector("nav").style.display = "block";

  // set timeout to run after scrolling ends
  isScrolling = setTimeout( () => {
    // callback actions
    document.querySelector("nav").style.display = "none";
  }, 2*1000);  // delay 2 seconds before running

});






// IN VIEWPORT HIGHLIGHTS //////////////////////////////////

// helper function: check if element is > 50% in viewport
function isInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight / 2) &&
    rect.bottom >= (window.innerHeight / 2)
  );
}

// find all sections – for each loop:
    // find the link associated with that section
    // add an eventListener for scrolling
    //    check if in viewport
    //    add/remove class of section + link
document.querySelectorAll("section").forEach(section => {
  const link = document.querySelector('#' + section.id + 'Link');

  window.addEventListener("scroll", () => {
    if ( isInViewport(section) === true ) {
      section.className = "active";
      link.classList.add("activeLink");
    } else {
      section.className = "inactive";
      link.classList.remove("activeLink");
    }
  });
});
