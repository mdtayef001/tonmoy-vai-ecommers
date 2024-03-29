import { MdClose } from "react-icons/md";
import peod from "../../../assets/products/earbuds-prod-3.webp";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-produt">
        <div className="img-container">
          <img src={peod} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">Product name</span>
          <MdClose className="close-btn" />

          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">&#2547;12312</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
