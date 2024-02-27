import "./sidebar.css";
import Logo from "../../assests/logo.svg";

function Sidebar() {
  return (
    <aside>
      <a href="home" classname="nav_logo">
        <img src={Logo} alt="" />
      </a>
      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#resume" className="nav_link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#portfolio" className="nav_link">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#blog" className="nav_link">
                <i className="icon-note"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
