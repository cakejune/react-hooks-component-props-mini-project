import React from "react";

function Header(props) {

  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
    </div>
  );
}

export default Header;
