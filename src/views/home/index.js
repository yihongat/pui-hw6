import React, { useEffect, useState } from "react";
import Cart from "../../components/Cart/Cart";
import Item from "../../components/Item/Item";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ROLLS } from "./items";

export function Roll(type, price, glazing, packSize) {
  this.type = type;
  this.price = price;
  this.glazing = glazing;
  this.packSize = packSize;
}

function compareName(a, b) {
  if (a.type < b.type) {
    return -1;
  }
  if (a.type > b.type) {
    return 1;
  }
  return 0;
}

function comparePrice(a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
}

const Home = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("cart", []);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("price");
  const [newItem, setNewItem] = useState();
  const [filteredRolls, setFilteredRolls] = useState(ROLLS);

  const addToCart = (item) => {
    const detailedItem = new Roll(
      item.type,
      item.price,
      item.glazing,
      item.packSize
    );
    setCartItems([...cartItems, detailedItem]);
    setNewItem(detailedItem);
    setTimeout(() => {
      setNewItem(null);
    }, 3000);
  };

  const removeFromCart = (index) => {
    setCartItems([...cartItems.slice(0,index), ...cartItems.slice(index + 1, cartItems.length)]);
  };

  useEffect(() => {
    const items = ROLLS.slice();
    items.sort(filter === "price" ? comparePrice : compareName);
    setFilteredRolls(
      items.filter((item) => {
        return item.type.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [filter, searchValue]);

  return (
    <React.Fragment>
      <Navbar
        cartItems={cartItems}
        newItem={newItem}
        setShowCart={setShowCart}
      />
      {showCart && <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>}
      <section className="optionBar">
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
        <div>
          <span>sort by: </span>
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="price">Base Price</option>
            <option value="name">Name</option>
          </select>
        </div>
      </section>
      <section className="menuList">
        {filteredRolls.map(({ type, price, image }) => (
          <Item type={type} price={price} image={image} addToCart={addToCart} key={type} />
        ))}
        {filteredRolls.length === 0 && "No match!"}
      </section>
    </React.Fragment>
  );
};

export default Home;
