import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryList from "./components/CategoryList";

function App() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:8000/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <CategoryList
        categories={categories}
        refreshCategories={fetchCategories}
      />
    </div>
  );
}

export default App;
