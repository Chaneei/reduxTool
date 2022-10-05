import {
  ExitToAppOutlined,
  FileCopyOutlined,
  GroupOutlined,
  HearingOutlined,
  HomeOutlined,
  List,
  MovieCreationOutlined,
  PhotoSizeSelectActualOutlined,
  ScheduleOutlined,
  Settings,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import React from "react";
import MenuLink from "../menuLink/MenuLink";
import "./leftbar.css";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<HomeOutlined />} text="홈" />
        <MenuLink icon={<List />} text="글 목록" />
        <MenuLink icon={<GroupOutlined />} text="친구" />
        <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="사진" />
        <MenuLink icon={<ScheduleOutlined />} text="일정" />
        <MenuLink icon={<HearingOutlined />} text="관심목록" />
        <MenuLink icon={<Settings />} text="설정" />
        <MenuLink icon={<ExitToAppOutlined />} text="로그아웃" />
      </div>
    </div>
  );
}
