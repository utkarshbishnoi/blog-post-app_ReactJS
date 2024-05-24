import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#1e1c1cb5",
    color: "white",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.9)",
    marginTop: "-8px",
    marginLeft:"-8px",
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1>Blog App</h1>
        <img
          width="35"
          height="35"
          src="https://img.icons8.com/plasticine/100/blog.png"
          alt="blog"
        />
      </div>
    </header>
  );
};

export default Header;
