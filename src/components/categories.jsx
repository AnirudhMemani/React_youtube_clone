import "../styles/categories.css";
import { useState } from "react";
import { useEffect } from "react";

const Categories = () => {
  let [categories, setCategories] = useState([]);

  let image =
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1686302770099_troyboireviseblrdesktop.jpg";

  useEffect(() => {
    let categories = async () => {
      let response = await fetch("http://localhost:4000/categories");
      let data = await response.json();
      setCategories(data);
    };
    categories();
  }, []);

  return (
    <div className="categories">
      <ul>
        {categories.map((data, index) => {
          return (
            <li key={index}>
              <a href="">{data.links}</a>
            </li>
          );
        })}
      </ul>
      <img className="img" src={image} alt="" />
    </div>
  );
};

export default Categories;
