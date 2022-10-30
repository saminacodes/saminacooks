import Link from "next/link";
import Socials from "../components/common/Socials";

export default function Menu() {
  function closeMenu() {
    document
      .querySelector("header button.hamburger")
      .classList.remove("is-active");
    document.querySelector("header .menu").classList.remove("active-menu");
    document.querySelector("body").classList.remove("active-menu");
  }

  return (
    <div className="menu">
      <div className="wrapper">
        <ul className="nav-list">
          <li>
            <Link href="/">
              <a onClick={closeMenu}>Home</a>
            </Link>
          </li>
        </ul>
        <div className="footer-socials">
          <Socials username="saminacodes"></Socials>
          <p className="copyright">
            &copy; 2023 saminacooks | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
