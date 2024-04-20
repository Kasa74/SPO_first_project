import { makeAutoObservable } from "mobx";

const STORAGE_BASKET_KEY = "Basket";

export default class ClothesStore {
  constructor() {
    this._types = [
      { id: 0, name: "all" },
      { id: 1, name: "summer coll" },
      { id: 2, name: "new arrive" },
      { id: 3, name: "best sell" },
      { id: 4, name: "flash" },
    ];
    this._brands = [
      { id: 1, name: "ZNY" },
      { id: 2, name: "ZAZA" },
      { id: 3, name: "SASA" },
    ];
    this._basket = JSON.parse(localStorage.getItem(STORAGE_BASKET_KEY) || "[]");
    this._clothes = [];
    this._selectedType = {};
    this._selectedClothes = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setBasket(basket) {
    this._basket = basket;
    localStorage.setItem(STORAGE_BASKET_KEY, JSON.stringify(this._basket));
  }
  setClothes(clothes) {
    this._clothes = clothes;
  }
  setSelectedType(type) {
    this.selectedType = type;
  }
  setSelectedClothes(clothes) {
    this._selectedClothes = clothes;
  }

  get types() {
    return this._types;
  }
  get basket() {
    return this._basket;
  }
  get brands() {
    return this._brands;
  }
  get clothes() {
    return this._clothes;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedClothes() {
    return this._selectedClothes;
  }

  // actions
  addBasketItem(Item) {
    const newItem = { ...Item, count: 1 };
    const basket = [...this.basket];
    const currentItem = basket.find(
      (BasketItem) => BasketItem.id === newItem.id
    );
    if (currentItem) {
      currentItem.count = currentItem.count ? currentItem.count + 1 : 1;
    } else {
      basket.push(newItem);
    }
    this.setBasket(basket);
  }

  // basketItemDelete(Item) {
  //   const basket = [...this._basket];
  //   const basketIndex = basket.findIndex((basketItem) => {
  //     return basketItem.id === Item.id;
  //   });
  //   if (basketIndex !== -1) {
  //     basket.splice(basketIndex, 1);
  //     this.setBasket(basket);
  //   }
  // }
}
