import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_doh/signupuserform.css";
import { faCheck, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

export default function Signupuserform() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  return (
    <div className="signupuserform">
      <FontAwesomeIcon
        icon={faCircleUser}
        style={{
          color: "#cbcbcb",
          width: "70px",
          height: "70px",
          margin: "10px",
        }}
      />
      <input placeholder="이메일"></input>
      <input placeholder="비밀번호"></input>
      <input placeholder="비밀번호 확인"></input>
      <div className="signupuserform-container">
        <label>이름</label>
        <input placeholder="이름을(를) 입력하세요"></input>
      </div>
      <div className="signupuserform-container">
        <label>닉네임</label>
        <input placeholder="닉네임을 입력하세요"></input>
      </div>
      <div className="signupuserform-container">
        <label>성별</label>
        <div className="signupuserform-container-genderselect">
          <input type="radio" id="option1" name="gender" value="1"></input>
          <label for="option1">남자</label>
          <br></br>
          <input type="radio" name="gender" value="2"></input>
          <label>여자</label>
        </div>
      </div>
      <div className="signupuserform-container phoneauth">
        <label>휴대폰</label>
        <br></br>
        <input placeholder="숫자만 입력해 주세요"></input>
        <button>전화번호 인증</button>
      </div>
      <div className="signupuserform-container">
        <label>주소</label>
        <input placeholder="주소"></input>
        <input placeholder="상세주소"></input>
      </div>
      <div className="signupuserform-container">
        <label>생년월일</label>
        <input placeholder="생년월일을 입력해주세요 ex)20240526"></input>
      </div>
      <div className="signupuserform-container">
        <label>반려견 이름</label>
        <input placeholder="반려견 이름을 입력해주세요"></input>
      </div>
      <div className="signupuserform-container">
        <label>
          반려견 나이{"("}살{")"}
        </label>
        <select>
          <option>12개월 이내</option>
          <option>1 ~ 6세</option>
          <option>7세 이상</option>
        </select>
      </div>
      <div className="signupuserform-container">
        <label>
          반려견 몸무게{"("}kg{")"}
        </label>
        <input placeholder="반려견 몸무게를 입력해주세요"></input>
      </div>
      <div className="signupuserform-container">
        <label>견종</label>
        <input placeholder="견종을 입력해주세요"></input>
      </div>
      <div className="signupuserform-container doginfo">
        <div>
          <label>반려견 성별</label>
          <div className="signupuserform-container-genderselect">
            <input type="radio" id="option1" name="gender" value="1"></input>
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
        className="signupuserform-submitbutton"
        onClick={() => setModalOpen(true)}
      >
        가입하기
      </button>
      <div className="margindiv"></div>
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
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#3bbc46", width: "28px", height: "28px" }}
            />
            <p>회원가입 완료</p>
            <button
              className={"modal-close-btn"}
              onClick={() => setModalOpen(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
