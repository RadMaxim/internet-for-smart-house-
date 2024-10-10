import classHeader from "./css/classHeader.module.css";
import icon1 from "./../../../public/img/Layout/Ellipse.svg";
import icon2 from "./../../../public/img/Layout/Ellipse (1).svg";
import Nav from "./Nav/Nav";
import { memo, useRef } from "react";
import useTheme from "../../MyHooks/ThemeHooks";

const Header = memo(() => {
  // let {results} = (await(await fetch('http://localhost:3002/api/stocks')).json())
  const refInput = useRef<HTMLInputElement>(null);
  const { setTheme } = useTheme();
  const toggle = () => {
    if (refInput.current?.checked) {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };
  return (
    <>
      <header>
        <div className={classHeader.header_container}>
          <div className={classHeader.theme}>
            <label htmlFor="theme2">
              <img src={icon1} alt="" />
            </label>
            <input
              ref={refInput}
              onClick={toggle}
              type="checkbox"
              name="theme"
              id="theme2"
            />
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
});
export default Header;
