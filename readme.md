# Storybook Web Application

## Overview
Storybook is a web application designed to let users chronicle their life journeys. This full-stack project integrates a dynamic user interface, secure user management, and robust backend functionality to provide a seamless storytelling experience. Users can create, manage, and share their life stories with features for public and private storytelling.

## Features
- **Frontend**:
  - Dynamic and responsive UI rendered with **Express-Handlebars**.
  - Styled using **Bootstrap** for a user-friendly experience.

- **Backend**:
  - Built with **Node.js** and **Express.js** for a robust server-side framework.
  - Secure data storage with **MongoDB**.

- **User Management**:
  - Secure login and authentication using **Passport.js** and **OAuth 2.0** integration with social media platforms.

- **Story Management**:
  - Create, edit, and delete stories.
  - Set stories as public or private with secure access controls.

## Technologies Used
### Frontend
- Express-Handlebars
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- Passport.js
- OAuth 2.0

## Installation and Setup
### Prerequisites
- Node.js
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/amank-04/story-book.git
   cd story-book
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your-mongodb-uri
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     SESSION_SECRET=your-session-secret
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:3000`.

## Usage
- Sign up or log in using your Google account.
- Create and manage your life stories.
- Share public stories with others or keep them private for personal use.

## Future Enhancements
- Add support for multimedia uploads (images, videos) in stories.
- Implement advanced search and tagging for stories.
- Provide analytics for public story views and interactions.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Passport.js](http://www.passportjs.org/)
- [Bootstrap](https://getbootstrap.com/)
