import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_doh/pwfind.css";
import { useRef, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Pwfind() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  return (
    <div className="pwfind">
      <h3>PET ME IN</h3>
      <p>아이디 비밀번호 찾기</p>
      <p>비밀번호는 8~20자의 영문, 숫자, 특수문자를 포함해야 합니다.</p>
      <hr></hr>
      <input
        className="pw-change-input"
        placeholder="비밀번호 입력 (8~20자 영문, 숫자, 특수문자 조합)"
      ></input>
      <input className="pw-change-input" placeholder="비밀번호 확인"></input>
      <button onClick={() => setModalOpen(true)} className="pw-change-button">
        비밀번호 변경
      </button>
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
              비밀번호 변경이
              <br /> 완료되었습니다.
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
  );
}
