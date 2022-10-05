import { useState } from "react";
import { Roll } from "../../views/home";

export function RollItem(type, price, image) {
  this.type = type;
  this.price = price;
  this.image = image;
}

const GLAZING_PRICE_MAP = {
  "Keep original": 0,
  "Sugar milk": 0,
  "Vanilla milk": 0.5,
  "Double chocolate": 1.5,
};

const GLAZING_OPTIONS_ORDER = [
  "Keep original",
  "Sugar milk",
  "Vanilla milk",
  "Double chocolate",
];

const PACK_SIZE_PRICE_MAP = {
  1: 1,
  3: 3,
  6: 5,
  12: 10,
};

const PACK_SIZE_OPTIONS_ORDER = ["1", "3", "6", "12"];

const calculateTotalPrice = (base, glazing, packSize) => {
  return parseFloat(
    (parseFloat(base) + GLAZING_PRICE_MAP[glazing]) * PACK_SIZE_PRICE_MAP[packSize]
  ).toFixed(2);
};

const Item = ({ type, price, image, addToCart }) => {
  const [glazing, setGlazing] = useState(GLAZING_OPTIONS_ORDER[0]);
  const [packSize, setPackSize] = useState(PACK_SIZE_OPTIONS_ORDER[0]);

  return (
    <div className="menuItem">
      <img src={image} alt="Original cinnamon roll" />
      <h3>{type}</h3>
      <div className="menuItemRow">
        <span>Glazing: </span>
        <select
          className="glazingDropdown"
          onChange={(evt) => setGlazing(evt.target.value)}
        >
          {GLAZING_OPTIONS_ORDER.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="menuItemRow">
        <span>Pack size: </span>
        <div className="packSizeOptions">
          {PACK_SIZE_OPTIONS_ORDER.map((option, i) => (
            <button
              className={packSize === option ? "selected" : ""}
              key={i}
              onClick={() => setPackSize(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="menuItemRow priceRow">
        <span className="priceValue">{`$${calculateTotalPrice(
          price,
          glazing,
          packSize
        )}`}</span>
        <button
          className="addToCardButton"
          onClick={() => addToCart(
            new Roll(type, calculateTotalPrice(
              price,
              glazing,
              packSize
            ), glazing, packSize)
          )}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
