

# TodoBackend

TodoBackend is a simple backend application that provides endpoints for user authentication and managing notes. This project includes features for user registration, login, creating notes, updating notes, and deleting notes.

## Endpoints

### Authentication

- **Login**
  - **Endpoint:** `user/login`
  - **Method:** `POST`
  - **Description:** Authenticate a user with email and password.
  - **Request Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "userpassword"
    }
    ```

- **Signup**
  - **Endpoint:** `user/register`
  - **Method:** `POST`
  - **Description:** Register a new user.
  - **Request Body:**
    ```json
    {
      "name": "John Doe",
      "email": "user@example.com",
      "password": "userpassword"
    }
    ```

### Notes

- **Get All Notes**
  - **Endpoint:** `/notes`
  - **Method:** `GET`
  - **Description:** Retrieve all notes for the authenticated user.
  - **Headers:**
    ```
    Authorization: Bearer <token>
    ```
- **Query Parameters:**
    - **page:** (optional, default: 1): The page number to retrieve.
    - **limit:** (optional, default: 10): The number of notes per page.
    - **search:** (optional): Search notes by title.
    - **sort:** (optional, default: asc): Sort notes by title in ascending (asc) or descending (desc) order.
  
  ```GET /notes?page=2&limit=5&title=meeting&sortby=desc```

- **Create Note**
  - **Endpoint:** `/notes/create`
  - **Method:** `POST`
  - **Description:** Create a new note.
  - **Headers:**
    ```
    Authorization: Bearer <token>
    ```
  - **Request Body:**
    ```json
    {
      "title": "Sample Note",
      "content": "This is a sample note.",
    "category": "notes"
    }
    ```

- **Update Note**
  - **Endpoint:** `/notes/update`
  - **Method:** `PATCH`
  - **Description:** Update an existing note.
  - **Headers:**
    ```
    Authorization: Bearer <token>
    ```
  - **Request Body:**
    ```json
    {
      "id": "note_id",
      "title": "Updated Note Title",
      "content": "Updated content of the note."
    }
    ```

- **Delete Note**
  - **Endpoint:** `/notes/delete`
  - **Method:** `DELETE`
  - **Description:** Delete an existing note.
  - **Headers:**
    ```
    Authorization: Bearer <token>
    ```
  - **Request Body:**
    ```json
    {
      "id": "note_id"
    }
    ```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/deepak65190/todoBackend
   ```
2. Navigate to the project directory
   ```sh
   cd todoBackend
   ```
3. Install dependencies
   ```sh
   npm install
   ```

### Running the Application

1. Start the server
   ```sh
   node index.js or use nodemon
   ```
2. The application will be running on `http://localhost:8080`


```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact
bisht65190@gmail.com

Project Link: https://todobackend-eb7k.onrender.com

---

Feel free to customize the placeholders with your actual information. This README format provides a clear and structured presentation of your project's endpoints, setup instructions, and other essential details.
