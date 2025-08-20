# Frontend Application

This is the frontend part of the categories application built using React. It interacts with the backend API to fetch and display categories data.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd technical_task_fs/frontend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then, run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Run the Application**
   Start the development server with:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Project Structure

- `src/`: Contains the source code for the React application.
  - `App.jsx`: The main component that fetches categories from the backend.
  - `components/`: Contains reusable components.
    - `CategoryList.jsx`: Displays the list of categories.
  - `api/`: Contains API interaction functions.
    - `categories.js`: Functions to fetch categories from the backend API.

## API Integration

The frontend communicates with the backend API to fetch categories data. Ensure that the backend is running and accessible for the frontend to function correctly.

## License

This project is licensed under the MIT License.
