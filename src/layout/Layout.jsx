import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className="layout">
      <div className="left-bar">
        {/* title */}
        <h1 className="left-bar__title">Users CRM</h1>

        {/* navbar */}
        <nav className="left-bar__navbar">
          <Link
            className={`${currentUrl === "/users" ? "link-selected" : ""}`}
            to="/users"
          >
            Users
          </Link>

          <Link
            className={`${currentUrl === "/users/new" ? "link-selected" : ""}`}
            to="/users/new"
          >
            New user
          </Link>
        </nav>
      </div>

      {/* domain container */}
      <div className="dashboard">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
