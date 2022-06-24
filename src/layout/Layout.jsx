import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="left-bar">
        {/* title */}
        <h2 className="left-bar__title">Users CRM</h2>

        {/* navbar */}
        <nav className="left-bar__navbar">
          <a href="/users">Users</a>
          <a href="/users/new">New user</a>
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
