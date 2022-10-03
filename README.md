# Leftover Front End

**Live Site: https://leftover-frontend.netlify.app/**

This repository contains a frontend web application created for General Assembly's Software Engineering Immersive course. This site was created using Javascript and a React framework, and it was deployed using Netlify. To view the live site, click on the link above.<br />

The purpose of this application is for users to keep track of what items they have left in their kitchen on pantry, as well as save recipes from suggestions made based on what ingredients they have. In my free time, I am passionate about minimizing food waste and getting creative to use every last bit of food I have left in my fridge before it goes bad, and this website was created out of this interest of mine.<br />

In order to achieve my vision for this website, I utilized Edamam API to bring in information on a wide variety of recipes and ingredients, and I also built a backend web API to store the user's personal ingredient and recipe data. Using this third-party API, I am able to provide the user with a search bar that will automatically fill in the ingredient's name and image when added to their pantry, and I can give the user a variety of recipe suggestions that contain food items they already own. For each recipe suggestion, the application lets you know what ingredients you already have and what you still need to purchase. If a recipe is saved to the user's library, the recipe information is also stored in the web API so they can come back and view it at a later date.<br />

The biggest struggle for the frontend portion of this application was getting the Edamam API to work cohesively with the rest of the website. The API provided me with a surplus of information about recipes and food items, so it was difficult to sort through at times and pull exactly what I needed. I also encountered some recipes with incorrectly-labeled ingredients and 0-minute cooking times in its database, so that took some extra effort to work around.<br />

I also put time into adjusting the elements on the website to be responsive. The application is reformats and resizes all elements as you scale it up and down on desktop and mobile.
