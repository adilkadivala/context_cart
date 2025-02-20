import { Link } from "react-router-dom";
import "../../../assets/css/admin/sidebar.css";
import { useLocation } from "react-router-dom";
import { useItemData } from "../../../store/ProductData";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const { logout } = useItemData();

  const handleLogout = () => {
    logout();
  };

  return (
    <section id="sidebar" className={isOpen ? "" : "hide"}>
      <Link to="/dashboard" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">AdminHub</span>
      </Link>
      <ul className="side-menu top">
        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li className={location.pathname === "/product" ? "active" : ""}>
          <div className="dropdown">
            <Link to="/product">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="text">Product</span>
            </Link>
          </div>
        </li>
      </ul>

      <ul className="side-menu">
        <li>
          <Link onClick={handleLogout} className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
