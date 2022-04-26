import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="/login">Login Page</Link>
      <br />
      <Link to="/register">Register Page</Link>
    </div>
  );
};

export default Home;
