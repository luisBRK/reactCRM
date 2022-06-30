// import routes {react-router-dom}
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import EditUser from "./pages/EditUser";
import ViewUser from "./pages/ViewUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewUser />} />
          <Route path="edit/:id" element={<EditUser />} />
          <Route path=":id" element={<ViewUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
