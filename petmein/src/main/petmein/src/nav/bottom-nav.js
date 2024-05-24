import {
  faCalendarCheck,
  faHouse,
  faPaw,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bottom-nav.css"

export default function BottomNav() {
  return (
    <div className="bottom">
      <div className="navbar">
        <div className="nav-button">
          <a href="#home" className="nav-a">
            <FontAwesomeIcon
              icon={faHouse}
              className="homebutton"
              style={{ color: "#e4d7ca", width: "25px", height: "23px" }}
            />
            <div>홈</div>
          </a>
        </div>
        <div className="nav-button">
          <a href="#reservation" className="nav-a">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              style={{ color: "#e4d7ca", width: "25px", height: "23px" }}
            />
            <div>에약</div>
          </a>
        </div>
        <div className="nav-button">
          <a href="#board" className="nav-a">
            <FontAwesomeIcon
              icon={faPaw}
              style={{ color: "#e4d7ca", width: "25px", height: "23px" }}
            />
            <div>멍 생</div>
          </a>
        </div>
        <div className="nav-button">
          <a href="#mypage" className="nav-a">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#e4d7ca", width: "25px", height: "23px" }}
            />
            <div>마이페이지</div>
          </a>
        </div>
      </div>
    </div>
  );
}
