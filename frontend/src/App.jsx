import React, { useEffect, useState } from "react";
import CategoryList from "./components/CategoryList";
import { fetchCategories } from "./api/categories";

function App() {
  const [categories, setCategories] = useState([]);

  const fetchCategoriesList = async () => {
    const res = await fetchCategories();
    setCategories(res);
  };

  useEffect(() => {
    fetchCategoriesList();
  }, []);

  return (
    <div>
      <CategoryList
        categories={categories}
        refreshCategories={fetchCategoriesList}
      />
    </div>
  );
}

export default App;
