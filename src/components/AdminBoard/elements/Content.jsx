import { Route, Routes } from "react-router-dom";
import Users from "../Users";
import Dashboard from "../Dashboard";
const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/users" exact element={<Users />} />
        <Route path="/profile" exact element={<div>Profile</div>} />
        <Route path="/data" exact element={<div>Data</div>} />
      </Routes>
    </div>
  );
};

export default Content;
