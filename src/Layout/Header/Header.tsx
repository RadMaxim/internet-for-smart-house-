import { Link } from "react-router-dom";
import classHeader from "./css/classHeader.module.css";
import { nav } from "./navigate/navigate";

const Header = () => {
  return (
    <>
      <header>
        <div className={classHeader.header_container}>
          <div className={classHeader.theme}>

          </div>
          <div className={classHeader.burger}>
          <input type="checkbox" id="burger_toggle" className={classHeader.burger_checkbox}/>
            <label htmlFor="burger_toggle" className={classHeader.burger_menu}>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className={classHeader.menu}>
              <div className={classHeader.menu_container}>
                <ul className={classHeader.ul}>
                  {nav.map((val ,index)=>{
                    return (
                    <li className={classHeader.li}> 
                    <Link to={val.link} key={index}>{val.name}</Link>
                    </li>)})}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
