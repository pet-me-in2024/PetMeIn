import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_doh/salonmanagementpage.css";
import dog from "../img/dog.jpg";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import ReactCalendar from "./calendar";

export default function Salonmanagementpage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dogmodalOpen, setDogmodalOpen] = useState(false);
  const modalBackground = useRef();
  const [day, setDay] = useState(new Date());

  return (
    <div className="salonmanagementpage">
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
      <hr className="thick-hr"></hr>
      <p>내 미용실</p>
      <div className="reservation-list">
        <div className="reservation-container">
          <div className="salon-photo">미용실사진</div>
          <div className="salon-description">미용실 설명</div>
        </div>
      </div>
      <hr className="thin-hr"></hr>
      <p className="intro-p">
        미용실 휴무일을 선택해 주세요. <br></br>이미 예약이 있는 날짜는 예약을
        취소할 수 있습니다.
      </p>
      <hr className="thin-hr"></hr>
      <ReactCalendar setModalOpen={setModalOpen}></ReactCalendar>

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
            <p>예약 정보</p>
            <div>강아지</div>
            <div>멍멍이</div>
            <div>댕댕이</div>
            <div className="modal-button-container">
              <button
                className={"modal-close-btn btn-left"}
                onClick={() => setModalOpen(false)}
              >
                휴무일 지정
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
    </div>
  );
}
