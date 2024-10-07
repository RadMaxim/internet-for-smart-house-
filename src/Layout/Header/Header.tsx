import classHeader from "./css/classHeader.module.css";
import icon1 from "./../../../public/img/Layout/Ellipse.svg";
import icon2 from "./../../../public/img/Layout/Ellipse (1).svg";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <>
      <header>
        <div className={classHeader.header_container}>
          <div className={classHeader.theme}>
            <label htmlFor="theme2">
              <img src={icon1} alt="" />
            </label>
            <input type="checkbox" name="theme" id="theme2" />
            <label htmlFor="theme2">
              <img src={icon2} alt="" />
            </label>
          </div>
          <div className={classHeader.burger}>
            <input
              type="checkbox"
              id="burger_toggle"
              className={classHeader.burger_checkbox}
            />
            <label htmlFor="burger_toggle" className={classHeader.burger_menu}>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className={classHeader.menu}>
              <Nav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
