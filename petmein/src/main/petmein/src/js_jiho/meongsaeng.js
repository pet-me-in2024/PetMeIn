import { useState } from "react";
import "../css_jiho/meongsaeng.css"
import MeongsaengContent from "./meongsaengcontent";

export default function Meongsaeng() {
  return (
    <div className="meongsaeng">
      <div className="meong">
        <div className="meongseng-teg-box">
          <div className="meongsaeng-teg">#소형견</div>
          <div className="meongsaeng-teg">#중형견</div>
          <div className="meongsaeng-teg">#대형견</div>
        </div>
        <div className="meongseng-teg-box">
          <div className="meongsaeng-teg">#1세 미만</div>
          <div className="meongsaeng-teg">#1 ~ 6세</div>
          <div className="meongsaeng-teg">#7세 이상</div>
        </div>
        <MeongsaengContent></MeongsaengContent>
        <div className="addButton">+</div>
      </div>
    </div>
  );
}