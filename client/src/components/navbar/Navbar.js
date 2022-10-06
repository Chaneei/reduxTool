import { ArrowDropDown, Search } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const name = useSelector((state) => state.user.userInfo.name);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">찬찬</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              className="searchInput"
            />
            <Search />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src="https://chan-portfolio-site.web.app/static/media/me-about.fb9f209068b03765935b.jpg"
            alt="프로필"
          />
          <span className="navbarName">{name}</span>
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
