import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to={"/event_detail"}>
          HAPPY NEW YEAR🖤 첫 구매 10% + APP 5% + KIT 증정!
        </Link>
        <button>X</button>
      </div>
      <div>
        <h1>AMORE MALL</h1>
        <div>
          <select name="" id="">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div>
          <button>검색</button>
          <button>장바구니</button>
          <button>로그인</button>
        </div>
      </div>
      <nav>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
