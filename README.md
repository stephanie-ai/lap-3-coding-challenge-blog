# BlogSpace

Make an anonymous post, tell others about your day or any experience.

## To Use

- Clone down the repo with the like above and use `git clone "link"`.
- `cd server` and start the docker container using `docker-compose up`.
- You will have to start a new terminal to close the ongoing docker container and use `docker-compose stop` if you want to keep the data entered into the data base. Use `docker-compose down --rmi all --volumes --remove-orphans` to stop the container and remove all the data.
- `cd client` and `npm install` to install the packages required in the package.json.
- `npm start` to start the web app and visit on `http://localhost:8080`. You can close the server using `ctrl+c`.


## Features

- Enter blog into database.
- View all previous entries in the database.
- Search for specific entry based on id.
- Navigation between the form and posts page.
- EXTRA: delete button allows users to delete stories.


## Wins and Challenges

### Wins

- The posts are entered into the database.
- Interaction between the front-end user and the database.

### Challenges 

- Setting up and connecting to the database in the back-end side of the application.