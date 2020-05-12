# bus-mall

## Author: Amber Falbo


Day 1 of Bus-Mall

Developer Style Guide -

1. Create a new repo for this weekly project called bus-mall at the roo level of your labs directory. - **DONE**

2. Scaffold your repo with the usual README, CSS, JS, and HTML, plus a img/ directory. - **DONE**


3. Include in your repository a .eslintrc.json file whose contents are copied from the .eslintrc.json file in the class repository. - **DONE**

4. Retrieve the assets rom the assets/ directory and place them in your image directory. - **DONE**

5. Do today's work on a branch called lab11-busmall - **DONE**


User Stories 
Instructions
  1. As a user, I would lke to display three unique products by chance to that the viewers can pick a favorite. 
    **Feature Tasks**
    - Create a constructor function that creates an object associated with each product, and has te follower properties:
      1. Name of the product
      2. File path of image

    - Create an algorithm that will randomly generate three unique product imaged from the images directory an display them side-by-side in the browser window.

    - Attach an event listener to the section of the HTML page where the images are going to be displayed.

    - Once the users 'clicks' a product, generate three new products for the user to pick from.

  2. As a user, I would like to rack the selections made by viewers so that I can determine which products to keep for the catalog.

    - In the constructor function define a property to hold the number of times a product has been clicked

    - After every selection by the viewer, update the newly added property to reflect if it was clicked.

  3. As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.

    - By default, the user should be presented with 25 rounds of voting before ending the session

    - Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.

  4. As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.

    - Create a property attached t the constructor function itself that keeps track of all the products that are currently being considered.

    - After voting rounds have been completed, remove the event listeners on the product.

    - Display the list of all the products followed by the votes received an number of times seen for each. Example: Banana Slicer had 3 votes and was shown 5 times

