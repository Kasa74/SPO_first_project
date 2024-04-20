import React, { useContext } from "react";
import basket from "./basket.module.css";
import common from "../../common.module.css";
import { useState } from "react";
import { Context } from "../..";
import Modal from "../../components/Modal/Modal";

const Basket = () => {
  const { clothes } = useContext(Context);

  const [modalActive, setModalActive] = useState(false);

  const [basketState, setBasketState] = useState(clothes.basket);

  const deleteBasketItem = (item) => {
    const basket = [...clothes.basket];
    let basketIndex = -1;
    for (let i = 0; i < basket.length; i++) {
      const basketItem = basket[i];
      if (basketItem.id === item.id) {
        basketIndex = i;
      }
    }
    if (basketIndex !== -1) {
      basket.splice(basketIndex, 1);
      clothes.setBasket(basket);
      setBasketState(basket);
    }
    // clothes.basketItemDelete(item);
    // setBasketState(clothes.basket);
  };

  const basketCountAdd = (item) => {
    const basket = [...clothes.basket];
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].id === item.id) {
        basket[i].count++;
        clothes.setBasket(basket);
        setBasketState(basket);
      }
    }
  };
  const basketCountRemove = (item) => {
    const basket = [...clothes.basket];
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].id === item.id) {
        basket[i].count--;
        if (basket[i].count === 0) {
          deleteBasketItem(item);
        } else {
          clothes.setBasket(basket);
          setBasketState(basket);
        }
      }
    }
  };

  const basketTotalAll = basketState.reduce(
    (totalAll, item) => totalAll + item.price * item.count,
    0
  );
  const basketTotalAmmount = basketState.reduce(
    (totalAll, item) => totalAll + item.count,
    0
  );
  return (
    <div className={basket.basket}>
      <div className={common.container_1300px}>
        <div className={basket.basket_block}>
          <div className={basket.basket_title}>Корзина</div>
          <div className={basket.basket_list}>
            <div className={basket.basket_items_and_summary}>
              <div className={basket.basket_items}>
                {basketState.map((item) => (
                  <div className={basket.basket_item} key={item.id}>
                    <img src={item.img} alt="basket_img" />
                    <div className={basket.basket_item_info}>
                      <div className={basket.basket_item_info_container}>
                        <div className={basket.basket_title_price}>
                          <div className={basket.basket_item_title}>
                            {item.name}
                          </div>
                          <div className={basket.basket_item_price}>
                            {item.price}
                          </div>
                        </div>
                        <div className={basket.basket_change_amount}>
                          <button
                            className={basket.basket_remove}
                            onClick={() => basketCountRemove(item)}
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 16H25"
                                stroke="black"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </button>

                          <div className={basket.basket_amount}>
                            {item.count}
                          </div>
                          <button
                            className={basket.basket_add}
                            onClick={() => basketCountAdd(item)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                              ></path>
                            </svg>
                          </button>
                          <div className={basket.basket_item_total}>
                            {item.price * item.count}
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      className={basket.delete}
                      onClick={() => deleteBasketItem(item)}
                    ></span>
                  </div>
                ))}
              </div>
              <div className={basket.basket_summary}>
                <div className={basket.basket_summary_info}>
                  <div className={basket.basket_summary_price}>
                    <div className={basket.basket_summary_ammount}>
                      {basketTotalAmmount} goods
                    </div>
                    <div className={basket.basket_summary_ammount_price}>
                      {basketTotalAll}$
                    </div>
                  </div>

                  <div className={basket.basket_total}>
                    <div className={basket.basket_total_title}>Total:</div>
                    <div className={basket.basket_total_ammount}>
                      {basketTotalAll}$
                    </div>
                  </div>
                  <button
                    className={basket.basket_order}
                    onClick={() => setModalActive(true)}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Basket;
