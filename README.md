# Assignment #1 — Building Your First Express API (GET, POST, PUT, DELETE) with JSON Storage
Task Management System - Express API with JSON Storage

Express.js REST API for managing tasks with CRUD operations and JSON file storage.

##  Project Description

This is a backend API for a task management system. The API allows managing objects (tasks): create, read, update, and delete records.

**Chosen Object:** `Objects` (tasks)

Each object contains:
- `id` - unique identifier (number)
- `name` - task name (required field)

##  Installation and Setup

### Step 1: Clone the repository
```bash
git clone <your-repository-url>
cd your-project-folder
```

### Step 2: Install dependencies
```bash
npm install
```

This command will install all necessary packages from `package.json`:
- Express.js - web framework for building the API

### Step 3: Create data.json file
Create a `data.json` file in the project root with the following content:
```json
{
  "objects": [
    {
      "id": 1,
      "name": "Buy milk"
    },
    {
      "id": 2,
      "name": "Walk the dog"
    },
    {
      "id": 3,
      "name": "Read a book"
    }
  ]
}
```

### Step 4: Run the server
```bash
node server.js
```

The server will start on `http://localhost:3000`

You will see in the console:
```
Server started on http://localhost:3000
```

## List of API Routes

### Demo Routes (Test Routes)

| Method | URL | Description | Response |
|--------|-----|-------------|----------|
| GET | `/` | Check if server is running | "Server is running" |
| GET | `/hello` | JSON greeting | `{ "message": "Hello from server!" }` |
| GET | `/time` | Current server time | String with current date and time |
| GET | `/status` | Server status | `{ "status": "OK" }` |

### CRUD Operations for Objects

| Method | URL | Description | Required Data |
|--------|-----|-------------|---------------|
| GET | `/objects` | Get all objects | - |
| POST | `/objects` | Create new object | JSON in body |
| PUT | `/objects/:id` | Update object | JSON in body |
| DELETE | `/objects/:id` | Delete object | - |

## Example Postman Requests

### Initial state of data.json

```json
{
  "objects": [
    {
      "id": 1,
      "name": "Buy milk"
    },
    {
      "id": 2,
      "name": "Walk the dog"
    },
    {
      "id": 3,
      "name": "Read a book"
    }
  ]
}
```

---

### 1. GET - Retrieve all objects

**Request:**
```
GET http://localhost:3000/objects
```

**Status:** `200 OK`

**Response:**
```json
[
  {
    "id": 1,
    "name": "Buy milk"
  },
  {
    "id": 2,
    "name": "Walk the dog"
  },
  {
    "id": 3,
    "name": "Read a book"
  }
]
```

---

### 2. POST - Create a new object

**Request:**
```
POST http://localhost:3000/objects
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Buy bread"
}
```

**Status:** `201 Created`

**Response:**
```json
{
  "id": 4,
  "name": "Buy bread"
}
```

---

### 3. PUT - Update an object

**Request:**
```
PUT http://localhost:3000/objects/1
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Buy boat"
}
```

**Status:** `200 OK`

**Response:**
```json
{
  "id": 1,
  "name": "Buy boat"
}
```

**Note:** The name was updated from "Buy milk" to "Buy boat".

---

### 4. DELETE - Delete an object

**Request:**
```
DELETE http://localhost:3000/objects/4
```

**Status:** `200 OK`

**Response:**
```json
{
  "success": true
}
```

**Result:** Object with ID 4 has been deleted. A subsequent GET request to `/objects` will no longer show it in the list.

---

### 5. Verification after deletion

**Request:**
```
GET http://localhost:3000/objects
```

**Status:** `200 OK`

**Response:** Returns the original 3 objects (without "Complete homework"):
```json
[
  {
    "id": 1,
    "name": "Buy milk"
  },
  {
    "id": 2,
    "name": "Walk the dog"
  },
  {
    "id": 3,
    "name": "Read a book"
  }
]
```
### Technologies
```

✅ Implemented Features
Demo Routes

✅ GET / - check server status
✅ GET /hello - JSON greeting
✅ GET /time - current server time
✅ GET /status - server status

CRUD Operations

✅ GET /objects - retrieve all objects
✅ POST /objects - create a new object
✅ PUT /objects/:id - update an object
✅ DELETE /objects/:id - delete an object


```
## Postman Testing Results

All routes have been successfully tested:

| Operation | URL | Method | Status | Result |
|-----------|-----|--------|--------|--------|
| Get all | `/objects` | GET | 200 OK | ✅ Working |
| Create | `/objects` | POST | 201 Created | ✅ Working |
| Update | `/objects/1` | PUT | 200 OK | ✅ Working |
| Delete | `/objects/4` | DELETE | 200 OK | ✅ Working |

## Testing screenshots
<img width="1919" height="1077" alt="image" src="https://github.com/user-attachments/assets/3f92c513-6c0b-4a32-b6aa-c58410d4afeb" />




