import { MdClose } from "react-icons/md";
import "./Search.scss";
import peod from "../../../assets/products/earbuds-prod-4.webp";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-model">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for procuts" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={peod} alt="" />
            </div>

            <div className="prod-details">
              <span className="name">Product name</span>
              <span className="desc">Product desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
