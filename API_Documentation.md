## API Documentation

### Authentication

#### **1. User Signup**
- **Endpoint**: `POST /auth/signup`
- **Request Body**:
  ```json
  {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
      "message": "User registered"
  }
  ```

#### **2. User Login**
- **Endpoint**: `POST /auth/login`
- **Request Body**:
  ```json
  {
      "email": "johndoe@example.com",
      "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
      "token": "JWT_TOKEN"
  }
  ```

### Posts

#### **1. Create a Post**
- **Endpoint**: `POST /posts`
- **Headers**:
  ```
  Authorization: Bearer JWT_TOKEN
  ```
- **Request Body**:
  ```json
  {
      "text": "This is a new post",
      "media": "http://example.com/image.jpg"
  }
  ```
- **Response**:
  ```json
  {
      "_id": "POST_ID",
      "text": "This is a new post",
      "media": "http://example.com/image.jpg",
      "user": "USER_ID",
      "timestamp": "2024-11-23T10:00:00Z"
  }
  ```

#### **2. Fetch All Posts (with Pagination)**
- **Endpoint**: `GET /posts`
- **Query Parameters**:
  ```
  page=1&limit=10
  ```
- **Response**:
  ```json
  [
      {
          "_id": "POST_ID",
          "text": "This is a new post",
          "media": "http://example.com/image.jpg",
          "user": {
              "_id": "USER_ID",
              "name": "John Doe"
          },
          "timestamp": "2024-11-23T10:00:00Z"
      }
  ]
  ```

### Comments

#### **1. Add a Comment**
- **Endpoint**: `POST /comments`
- **Headers**:
  ```
  Authorization: Bearer JWT_TOKEN
  ```
- **Request Body**:
  ```json
  {
      "text": "This is a comment",
      "post": "POST_ID"
  }
  ```
- **Response**:
  ```json
  {
      "_id": "COMMENT_ID",
      "text": "This is a comment",
      "user": "USER_ID",
      "post": "POST_ID",
      "timestamp": "2024-11-23T10:15:00Z"
  }
  ```

---