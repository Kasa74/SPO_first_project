import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Slider from "react-slick";
import { Context } from "../..";
import typebar from "./Category.module.css";
import left_arrow from "../../img/slider_left_arrow.svg";
import right_arrow from "../../img/slider_right_arrow.svg";

const Category = observer(({ value, onClickCategory }) => {
  const { clothes } = useContext(Context);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 0,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    prevArrow: <img src={left_arrow} className={typebar.prev} alt="1"></img>,
    nextArrow: <img src={right_arrow} alt="2"></img>,
  };

  return (
    <div className={typebar.typebar_content}>
      <div>
        <h3>
          SHOP BY
          <br /> ESSENTIALS
        </h3>
      </div>
      <div className={typebar.typebar_categories}>
        <Slider {...sliderSettings}>
          {clothes.types.map((category, i) => (
            <div>
              <div
                className={
                  value === i ? `${typebar.active}` : `${typebar.non_active}`
                }
                key={category.id}
                onClick={() => onClickCategory(i)}
              >
                {category.name}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
});

export default Category;
