import React from "react";
import { useSelector } from "react-redux";
import "./warning.css";

export default function Warning() {
  const name = useSelector((state) => state.user.name);
  return (
    <div className="warning">
      회원탈퇴가 아직 완료되지 않았습니다 <b>{name}</b>님! 비밀번호를 확인하시고
      회원탈퇴를 진행해주세요!
    </div>
  );
}
