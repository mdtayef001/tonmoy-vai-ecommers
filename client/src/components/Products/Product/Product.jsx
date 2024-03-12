import "./Product.scss";
import pord from "../../../assets/products/earbuds-prod-1.webp";
const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={pord} alt="" />
      </div>
      <div className="prod-details">
        <div className="name">Produt Names</div>
        <div className="price">&#2547;499</div>
      </div>
    </div>
  );
};

export default Product;
