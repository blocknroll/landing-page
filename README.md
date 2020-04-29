# Landing Page Project
----------------------

## Goal

The primary goal of the project is to use JavaScript to make a static page more dynamic.

## Features

__Navigation__  
The navigation menu is built dynamically.  
It grabs all the sections on the page,  
makes a link for each one,  
then adds it to an unordered list in the nav element.  

__Scroll to Anchor__  
When clicking an item from the nav menu,  
the link will scroll to the appropriate section.  

__Section Active State__  
While scrolling through the page,  
the section most visible in the viewport  
is highlighted,  
while the inactive sections are dimmed.

__Active Nav__  
An active state is added to navbar links  
when their related section is in the viewport.

__Hiding Navbar__  
The navbar is visible on page load.  
Then an Event Listener checks if a user is scrolling.  
The navbar remains visible while scrolling.  

The setTimeout method is then used  
to check if scrolling has stopped  
for more than 2 seconds.  
If it has stopped, the navbar is hidden.

__Scroll To Top__  
A scroll to top button is added to the page  
when the user scrolls below the fold of the page.
