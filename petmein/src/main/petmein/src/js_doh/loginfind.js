import { useRef, useState } from "react";
import "../css_doh/loginfind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Loginfind() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const [toggleidpw, setToggleidpw] = useState(true);

  return (
    <div className="loginfind">
      <h3>PET ME IN</h3>
      <p>아이디 비밀번호 찾기</p>
      <div className="find-button-div">
        <button className="find-button" onClick={() => setToggleidpw(true)}>
          아이디 찾기
        </button>
        <button className="find-button" onClick={() => setToggleidpw(false)}>
          비밀번호 찾기
        </button>
      </div>
      {toggleidpw && <Idfind setModalOpen={setModalOpen}></Idfind>}
      {toggleidpw || <Pwfind></Pwfind>}
      <div>
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
                style={{ color: "#e4d7ca", width: "28px", height: "28px" }}
              />
              <p>
                회원님의 아이디는
                <br /> ~~~ 입니다.
              </p>
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
    </div>
  );
}

function Idfind(props) {
  return (
    <div>
      <div className="submit-container">
        <div className="submit-div">
          <input
            className="submit-input"
            placeholder="휴대전화번호 입력 ('-'제외)"
          ></input>
          <button className="submit-button">인증번호 전송</button>
        </div>
        <div className="submit-div">
          <input className="submit-input" placeholder="인증번호 입력"></input>
          <button className="submit-button">확인</button>
        </div>
      </div>
      <button
        className="id-find-button"
        onClick={() => props.setModalOpen(true)}
      >
        아이디 찾기
      </button>
    </div>
  );
}

function Pwfind(props) {
  return (
    <div>
      <div className="submit-container">
        <div className="id-label">
          <label>아이디</label>
        </div>
        <input
          className="id-input"
          placeholder="이메일 아이디를 입력해 주세요."
        ></input>
        <div className="submit-div">
          <input
            className="submit-input"
            placeholder="휴대전화번호 입력 ('-'제외)"
          ></input>
          <button className="submit-button">인증번호 전송</button>
        </div>
        <div className="submit-div">
          <input className="submit-input" placeholder="인증번호 입력"></input>
          <button className="submit-button">확인</button>
        </div>
      </div>
      <button className="id-find-button">비밀번호 변경</button>
    </div>
  );
}
