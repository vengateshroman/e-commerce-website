import Button from "../component/Button.jsx";
import "../css/Recommented.css";
const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button className="btns" onClickHandler={handleClick} value="" title="All Products" />
          <Button className="btns" onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button className="btns" onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button className="btns" onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button className="btns" onClickHandler={handleClick} value="Vans" title="Vans" />
          </div>
      </div>
    </>
  );
};

export default Recommended;