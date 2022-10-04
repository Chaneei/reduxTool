import React from "react";
import "./recommendation.css";
import { useSelector } from "react-redux";

export default function Recommendation({ type }) {
  const name = useSelector((state) => state.user.name);
  const title =
    type === "user"
      ? `${name}님을 위한 포스트`
      : type === "popular"
      ? "인기있는 포스트"
      : "주간 인기 포스트";

  const img =
    type === "user"
      ? "https://images.pexels.com/photos/5797991/pexels-photo-5797991.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      : type === "popular"
      ? "https://images.pexels.com/photos/5191390/pexels-photo-5191390.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      : "https://images.pexels.com/photos/2733659/pexels-photo-2733659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  return (
    <div className="recommendation">
      <span className="rightTitle">{title}</span>
      <img className="rightImg" src={img} alt="" />
    </div>
  );
}
