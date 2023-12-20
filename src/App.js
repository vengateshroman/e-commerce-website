import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Product from "./Product/Product";
import Recommented from "./Recommented/Recommented";
import Slidebare from "./component/Slidebare";
import datas from "./db/data"; // Make sure the path to your data source is correct
import Cards from "./component/Cards";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = datas.filter(
    (data) => data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(datas, selected, query, filteredItems) {
    let filtereddatas = datas;

    if (query) {
      filtereddatas = filteredItems;
    }

    if (selected) {
      filtereddatas = filtereddatas.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filtereddatas.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Cards
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(datas, selectedCategory, query, filteredItems);

  return (
    <>
      <Slidebare handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommented handleClick={handleClick} />
      <Product result={result} />
    </>
  );
}

export default App;
