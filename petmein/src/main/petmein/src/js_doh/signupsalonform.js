import { useState } from "react";
import "../css_doh/signupsalonform.css";

export default function Signupsalonform() {
  const [time, setTime] = useState([
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ]);
  const [minute, setMinute] = useState(["00", "10", "20", "30", "40", "50"]);
  const [startTime, setStartTime] = useState();
  const [startMinute, setStartMinute] = useState();
  const [endTime, setEndTime] = useState();
  const [endMinute, setEndMinute] = useState();
  return (
    <div className="signupsalonform">
      <div className="signupform-container">
        <label>가게 이름</label>
        <br></br>
        <input></input>
      </div>
      <div className="signupform-container">
        <label>가게 사진</label>
        <br></br>
        <label for="input-file" className="signupform-input">
          파일 업로드
        </label>
        <input type="file" id="input-file" style={{ display: "none" }}></input>
      </div>
      <div className="signupform-container">
        <label>운영 시간</label>
        <br></br>
        <select
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
        >
          {time.map((i) => {
            return (
              <option key={i} value={i}>
                {i}
              </option>
            );
          })}
        </select>
        <select
          onChange={(e) => {
            setStartMinute(e.target.value);
          }}
        >
          {minute.map((i) => {
            return (
              <option key={i} value={i}>
                {i}
              </option>
            );
          })}
        </select>
        ~
        <select
          onChange={(e) => {
            setEndTime(e.target.value);
          }}
        >
          {time.map((i) => {
            return (
              <option key={i} value={i}>
                {i}
              </option>
            );
          })}
        </select>
        <select
          onChange={(e) => {
            setEndMinute(e.target.value);
          }}
        >
          {minute.map((i) => {
            return (
              <option key={i} value={i}>
                {i}
              </option>
            );
          })}
        </select>
      </div>
      <div className="signupform-container">
        <label>휴무일</label>
        <br></br>
        <input placeholder="예시) 매주 일요일, 매주 월요일, 격주 토요일"></input>
      </div>
      <div className="signupform-container">
        <label>가게 전화번호</label>
        <br></br>
        <input></input>
      </div>
      <div className="signupform-container">
        <label>컷 종류, 가격 선택</label>
        <br></br>
        <button>컷 종류, 가격 선택</button>
      </div>
      <div className="signupform-container">
        <label>사업자 등록 번호</label>
        <br></br>
        <div className="signupform-container-auth">
          <input></input>
          <button>인증하기</button>
        </div>
      </div>
      <div className="signupform-container">
        <label>상호명</label>
        <br></br>
        <input></input>
      </div>
      <div className="signupform-container">
        <label>주소</label>
        <br></br>
        <input placeholder="주소"></input>
        <br></br>
        <input placeholder="상세주소"></input>
      </div>
      <div className="signupform-container end">
        <label>포트폴리오 사진</label>
        <br></br>
        <label for="input-file" className="signupform-input">
          파일 업로드
        </label>
        <input type="file" id="input-file" style={{ display: "none" }}></input>
      </div>
      <button className="signupform-continuebutton">계속하기</button>
      <div className="margindiv"></div>
    </div>
  );
}
