import React, { useState } from "react";
import axios from "axios";

const CategoryList = ({ categories, refreshCategories }) => {
  const [selected, setSelected] = useState([]);
  const [parentId, setParentId] = useState("");

  const handleCheckbox = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleSetParent = async () => {
    for (const catId of selected) {
      await axios.post(
        `http://localhost:8000/categories/${catId}/set-parent?parent_id=${
          parentId || ""
        }`
      );
    }
    setSelected([]);
    setParentId("");
    if (refreshCategories) refreshCategories();
  };

  return (
    <div>
      <h1>Categories</h1>
      <label>
        Select Parent Category:
        <select value={parentId} onChange={(e) => setParentId(e.target.value)}>
          <option value="">None</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </label>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <input
              type="checkbox"
              checked={selected.includes(category.id)}
              onChange={() => handleCheckbox(category.id)}
              disabled={parentId === String(category.id)}
            />
            {category.name}
            {category.parent_name && (
              <span style={{ color: "#888" }}>
                {" "}
                (Parent: {category.parent_name})
              </span>
            )}
          </li>
        ))}
      </ul>
      <button onClick={handleSetParent} disabled={selected.length === 0}>
        Set Selected Categories' Parent
      </button>
    </div>
  );
};

export default CategoryList;
