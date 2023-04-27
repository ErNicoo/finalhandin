# flaskwork

In this website I will showcase some pages and features that satisfy all the requiremenets of the hand-in
This is the base to my future portfolio website, This website was built on a virtual environment using Flask. This project satisfies all the requirements stated by the hand-in.

To access the page for creating the database: /create To access the page for editing the database: /edit/1 => the number is the ID of each database element, for example: /edit/2 => edit name of the second project with ID 2 To access the page for deleting element from database: /delete/1 => the number is the ID of the element like in /edit

examples:
https://nicosportfoliowebsite.onrender.com/create
https://nicosportfoliowebsite.onrender.com/edit/1
https://nicosportfoliowebsite.onrender.com/delete/3

(The ID of the created elements on the database will always go up on the deplyed website, while if it's being runned locally it resets from the first available ID, so in the website if you would create a new element through the /create page the ID will be startign from ID=10 so for deleting or editing you would have to selectr it with /delete/10)

Deployment: The application is deployed using render.com following the same steps in the tutorial provided by Samuel. The only difference is that I adjusted the version of python that render.com was using to match my version 3.8.6 and not 3.7.10.

The database is now directly editable from a page and you can create and delete content, and if you click on the projects added in the database through those pages you can access a new page that takes the name of the project and creates an automatic slug in the URL that even if you edit the name of the project, the slug will change accordingly.
