import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_doh/managementpage.css";
import dog from "../img/dog.jpg";
import { faCheck, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

export default function Managementpage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dogmodalOpen, setDogmodalOpen] = useState(false);
  const modalBackground = useRef();
  return (
    <div className="managementpage">
      <div className="profile">
        <div className="profile-box">
          <img src={dog} className="profile-img"></img>
        </div>
        <div className="profile-description">
          <h5>ht01_470155</h5>
          <p>✉ht01020@naver.com</p>
          <p>01048656811</p>
        </div>
      </div>
      <p className="mypet-title">내 펫</p>
      <div className="mypet-list">
        <div className="mypet">
          <div className="mypet-box">
            <img src={dog} className="profile-img"></img>
          </div>
          <p>개</p>
        </div>
        <div className="mypet">
          <div className="mypet-box">
            <div className="profile-img" onClick={() => setDogmodalOpen(true)}>
              <p>+</p>
            </div>
          </div>
          <p>추가</p>
        </div>
      </div>
      <hr></hr>
      <p>📋예약내역</p>
      <div className="reservation-list">
        <div className="reservation-container">
          <div className="salon-photo">미용실사진</div>
          <div className="salon-description">미용실 설명</div>
        </div>
        <button className="reservation-info" onClick={() => setModalOpen(true)}>
          예약 정보
        </button>
      </div>
      {modalOpen && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className={"modal-content"}>
            <p>예약 시간</p>
            <p className="modal-content-title">날짜</p>
            <div className="reservation-date">
              <input placeholder="2024"></input>
              <p>년</p>
              <input placeholder="5"></input>
              <p>월</p>
              <input placeholder="26"></input>
              <p>일</p>
            </div>
            <p className="modal-content-title">시간</p>
            <div className="reservation-hour">
              <button>10:00 ~ 12:00</button>
              <button>13:00 ~ 15:00</button>
              <button>15:00 ~ 17:00</button>
              <button>17:00 ~ 19:00</button>
            </div>
            <p className="modal-content-title">원하는 미용</p>
            <div className="reservation-cut">
              <button>위생+목욕</button>
              <button>전체미용</button>
              <button>스포팅</button>
              <button>가위컷</button>
              <button>기타</button>
            </div>
            <div className="modal-button-container">
              <button
                className={"modal-close-btn btn-left"}
                onClick={() => setModalOpen(false)}
              >
                예약 취소
              </button>
              <button
                className={"modal-close-btn"}
                onClick={() => setModalOpen(false)}
              >
                변경 및 확인
              </button>
            </div>
          </div>
        </div>
      )}
      {dogmodalOpen && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setDogmodalOpen(false);
            }
          }}
        >
          <div className={"modal-content dogmodal"}>
            <p>반려견 이름</p>
            <input placeholder="개"></input>
            <p>
              반려견 나이{"("}살{")"}
            </p>
            <input placeholder="1 ~ 6세"></input>
            <p>
              반려견 몸무게{"("}kg{")"}
            </p>
            <input placeholder="2.2kg"></input>
            <p>견종</p>
            <input placeholder="포메라니안"></input>
            <div className="signupuserform-container doginfo">
              <div>
                <p>반려견 성별</p>
                <div className="signupuserform-container-genderselect">
                  <input
                    type="radio"
                    id="option1"
                    name="gender"
                    value="1"
                  ></input>
                  <label for="option1">남</label>
                  <br></br>
                  <input type="radio" name="gender" value="2"></input>
                  <label>여</label>
                </div>
              </div>
              <div className="doginfo-right">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  style={{
                    color: "#cbcbcb",
                    width: "50px",
                    height: "50px",
                    margin: "10px",
                  }}
                />
                <p>반려견의 사진을 넣어주세요</p>
              </div>
            </div>
            <button
              className={"modal-close-btn"}
              onClick={() => setDogmodalOpen(false)}
            >
              등록하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
