import React, { useState, useEffect } from "react";
import Category from "../TypeBar/Category";
import common from "../../common.module.css";
import shop from "../../components/Shop/shop.module.css";
import BrandBar from "../BrandBar/BrandBar";
import brandbar from "../BrandBar/branbar.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Shop = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch(
      `https://65e848554bb72f0a9c4ed3e6.mockapi.io/item?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setClothes(arr);
      });
  }, [categoryId]);

  return (
    <section className={shop.shop}>
      <div className={common.container_1300px}>
        <Category
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <div className={brandbar.brandbar_content} data-grid-columns="3">
          {clothes.map((obj) => (
            <BrandBar key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
