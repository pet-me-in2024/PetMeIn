import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_doh/signup.css";
import {
  faCircleRight,
  faDog,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  return (
    <div className="signup">
      <h3>PET ME IN</h3>
      <p>회원가입</p>
      <hr></hr>
      <p>가입하실 회원 유형을 선택하세요.</p>
      <div className="signup-category">
        <div className="signup-container">
          <FontAwesomeIcon
            icon={faDog}
            style={{ color: "#e4d7ca", width: "50px", height: "50px" }}
          />
          <p>반려인 회원가입</p>
          <FontAwesomeIcon
            icon={faCircleRight}
            style={{
              color: "#e4d7ca",
              width: "25px",
              height: "25px",
            }}
          />
        </div>
        <div className="signup-container">
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#e4d7ca", width: "50px", height: "50px" }}
          />
          <p>미용사 회원가입</p>
          <p className="p-small">미용실 정보를 추가로 기입해야 합니다.</p>
          <FontAwesomeIcon
            icon={faCircleRight}
            style={{ color: "#e4d7ca", width: "25px", height: "25px" }}
          />
        </div>
      </div>
    </div>
  );
}
