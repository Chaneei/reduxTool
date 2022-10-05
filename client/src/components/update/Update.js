import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, update, addHello } from "../redux/userSlice";

export default function Update() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(addHello({ name, email }));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(remove());
  };
  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">회원 정보</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>
          회원 탈퇴하기
        </button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>프로필 사진</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">변경</span>
              </div>
            </div>
            <div className="formItem">
              <label>아이디</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>이메일</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>비밀번호</label>
              <input className="formInput" type="password" />
            </div>
            <button className="updateButton" onClick={handleUpdate}>
              변경하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
