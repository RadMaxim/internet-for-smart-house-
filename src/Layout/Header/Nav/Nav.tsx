import { Link } from "react-router-dom";
import { nav } from "../navigate/navigate";
import classNav from "./css/classNav.module.css";

const Nav = () => {
  return (
    <>
      <div className={classNav.menu_container}>
        <ul className={classNav.ul}>
          {nav.map((val, index) => {
            return (
              <li key={index} className={classNav.li}>
                <Link to={val.link}>{val.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Nav;
