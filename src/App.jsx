// import routes {react-router-dom}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Layout />}>
          <Route index element={<Home></Home>} />
          <Route path="new" element={<NewUser></NewUser>} />
          <Route path="edit/:id" element={<EditUser></EditUser>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
