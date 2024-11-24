
# Social Media API

## Overview
This is a backend API for a basic social media platform. It includes user authentication, post creation, comment management, and real-time chat functionality. The application is built using **Node.js**, **Express.js**, **MongoDB**, and **Socket.IO**.

### Features
- **User Authentication**: Secure JWT-based user signup and login.
- **Post Management**: Users can create posts with text and optional media.
- **Commenting System**: Users can comment on posts.
- **Real-Time Chat**: Basic real-time messaging and notifications using WebSockets.
- **Pagination**: Posts can be fetched with pagination for optimized performance.

---

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm (comes with Node.js)

### Installation
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   JWT_SECRET=your_jwt_secret
   MONGO_URI=mongodb://127.0.0.1:27017/socialMediaApp
   ```

4. Start MongoDB:
   ```bash
   mongod
   ```
   Or ensure a MongoDB instance is running.

5. Run the server:
   ```bash
   npm start
   ```
   The server will start at `http://localhost:5000`.

---

## Usage

### Base URL
```
http://localhost:5000/api
```

### Testing
Use **Postman**, **Insomnia**, or cURL to test the API. See API documentation below.

---