# Mentor Me (client)

## Table of Contents

- [Description](#description)
- [FrontEnd](#frontend)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Endpoints](#endpoints)
- [Database](#database)
- [Contributing](#contributing)

## Description

Mentor Me is a full stack application that connects curious learners with mentors to learn a variety of different subjects. Mentor Me utilizes a ThreeJS interactive 3D globe to display users general locations and illustrate connecting people across the world.

## FrontEnd 
- https://github.com/jon-slva/mentor-me-client

## Features

- Interactive globe visualization.
- Markers for specific locations.
- GeoApify integration for translating addresses to map coordinates.
- User Authentication for Mentors and Mentees.
- Chat interface.

## Technologies Used

- Node.js
- Express
- Axios
- MySQL
- JWT
- React
- bcrypt
- Sass
- knex
- cors

## Installation

1. Clone the repository:
```bash
git clone https://github.com/jon-slva/mentor-me-server
```

2. Install dependencies:
```bash
npm install
```

3. Set up your database configurations in a `.env` file:

- PORT=8080
- CORS_ORIGIN=http://localhost:3000

- API_URL=http://localhost:8080
- DB_NAME=mentor_me

- SECRET_KEY=7452aods8g6hf8ifajysgdf*hg41a5117876
- API_KEY=242a019cc0bd462791509c195a8bef72

4. To create a accounts you need to configure the transporter body from nodeMailer, line 9 in signup.js.
Documentation in - https://github.com/nodemailer/nodemailer


5. Run the server:
```bash
npm start
```

## Endpoints

- **POST /api/users/login:** Login endpoint with authentication
- **GET /api/users/login:** Retrieve authorization for the logged-in user
- **POST /api/users/signup:** Signup endpoint to add new users
- **GET /api/mentors:** Search results of users in the database who are mentors


## Database

I used MySQL for this project.

1. Create a database locally and call it "mentor_me"

2. Run Migrations
```
npx knex migrate:latest
```
3. Lastly, run seeds
```
npx knex seed:run
```

## Contributing

Contributions to this project are welcome! If you find a bug or want to add a new feature, feel free to open an issue or submit a pull request.