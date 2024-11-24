



## Database Schema Design

### User Schema
```javascript
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});
```

- **Fields**:
  - `name`: Name of the user.
  - `email`: Unique email address.
  - `password`: Hashed password.

---

### Post Schema
```javascript
const PostSchema = new mongoose.Schema({
    text: { type: String, required: true },
    media: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, default: Date.now },
});
```

- **Fields**:
  - `text`: Content of the post.
  - `media`: Optional media URL.
  - `user`: Reference to the `User` who created the post.
  - `timestamp`: Time of creation.

---

### Comment Schema
```javascript
const CommentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    timestamp: { type: Date, default: Date.now },
});
```

- **Fields**:
  - `text`: Content of the comment.
  - `user`: Reference to the `User` who wrote the comment.
  - `post`: Reference to the `Post` being commented on.
  - `timestamp`: Time of creation.

---

## Real-Time Chat (WebSocket)

### Connection
- Connect to WebSocket using:
  ```
  ws://localhost:5000
  ```

### Events
- **Send Message**:
  ```json
  {
      "event": "sendMessage",
      "message": "Hello!"
  }
  ```
- **Receive Message**:
  ```json
  {
      "event": "receiveMessage",
      "message": "Hello!"
  }
  ```

---

