import { TYPE_TO_IMAGE } from "../../views/home/items";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cartDiv">
      <div className="cartInfo">
        <p>{`Shopping Cart (${cartItems.length} items)`}</p>
        <p>{`Total: $ ${cartItems.reduce((acc, obj) => {
          return parseFloat(parseFloat(acc) + parseFloat(obj.price)).toFixed(2);
        }, 0)}`}</p>
      </div>
      {cartItems.length === 0 && <p>The cart is empty!</p>}
      <div className="cartItemList">
        {cartItems.map((item, i) => {
          return (
            <div className="cartItem" key={i}>
              <img src={TYPE_TO_IMAGE[item.type]} alt="Cinnamon roll" />
              <p>{item.type}</p>
              <p>{`Glazing: ${item.glazing}`}</p>
              <p>{`Pack Size: ${item.packSize}`}</p>
              <p>
                <b>{`$ ${item.price}`}</b>
              </p>
              <button
                className="removeButton"
                onClick={() => removeFromCart(i)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
