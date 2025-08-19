import React, { useEffect, useState } from "react";
import CategoryList from "./components/CategoryList";
import { fetchCategories } from "./api/categories";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesList = async () => {
      const res = await fetchCategories();
      setCategories(res);
    };

    fetchCategoriesList();
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
