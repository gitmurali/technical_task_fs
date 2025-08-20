# Backend API Project

This is a backend API project built using FastAPI and SQLAlchemy to interact with a PostgreSQL database. The API provides endpoints to manage and retrieve categories data.

## Project Structure

```
backend/
├── src/
│   ├── main.py          # Entry point of the application
│   ├── models.py        # ORM models definition
│   ├── database.py      # Database connection and session management
│   └── routes.py        # API endpoints definition
├── requirements.txt      # Python dependencies
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd technical_task_fs/backend
   ```

2. **Create a virtual environment** (optional but recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:

   ```bash
   uvicorn src.main:app --reload
   ```

   The API will be available at `http://localhost:8000`.

## API Usage

### Fetch Categories

- **Endpoint**: `GET /categories`
- **Description**: Retrieves a list of categories from the database.

### Example Request

```bash
curl -X GET http://localhost:8000/categories
```

### Example Response

```json
[
  {
    "id": 1,
    "name": "Category 1"
  },
  {
    "id": 2,
    "name": "Category 2"
  }
]
```
