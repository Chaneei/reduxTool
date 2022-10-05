import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import Recommendation from "../recommendation/Recommendation";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Recommendation type="user" />
        <Recommendation type="popular" />
        <Recommendation type="editor" />
        <button className="rightButton">
          더 보기
          <ArrowDropDown />
        </button>
      </div>
    </div>
  );
}
