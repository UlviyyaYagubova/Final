import React from "react";
import { useState, useEffect } from "react";
import data from "../data/mainData";
import ProductItem from "./common/ProductItemTwo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Search = () => {
  const [query, setQuery] = useState("");
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
<div className="search-all">
<div className="container">
        <div className="row">
          <div className="search">
            <div className="my-3">
              <input
                type="text"
                placeholder="Search product"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={() => setQuery("")}>Clear</button>
            </div>
          </div>
          {data
            .filter((u) => u.title.toLocaleLowerCase().includes(query))
            .map((item, index) => (
              <div className="col-lg-3 p-3" key={index} data-aos="zoom-in-up">
                <ProductItem product={item} />
              </div>
            ))}
        </div>
      </div>
</div>
    </>
  );
};

export default Search;
