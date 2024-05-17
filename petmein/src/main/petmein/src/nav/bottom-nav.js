import {
  faCalendarCheck,
  faHouse,
  faPaw,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BottomNav() {
  return (
    <div className="bottom">
      <div className="navbar">
        <div className="nav-button" onClick={() => {}}>
          <a href="#home" className="nav-a">
            <FontAwesomeIcon
              icon={faHouse}
              className="homebutton"
              style={{ color: "#e4d7ca", width: "28px", height: "28px" }}
            />
            홈
          </a>
        </div>
        <div className="nav-button">
          <a href="#reservation" className="nav-a">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              style={{ color: "#e4d7ca", width: "28px", height: "28px" }}
            />
            예약
          </a>
        </div>
        <div className="nav-button">
          <a href="#board" className="nav-a">
            <FontAwesomeIcon
              icon={faPaw}
              style={{ color: "#e4d7ca", width: "28px", height: "28px" }}
            />
            멍 생
          </a>
        </div>
        <div className="nav-button">
          <a href="#mypage" className="nav-a">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#e4d7ca", width: "28px", height: "28px" }}
            />
            마이페이지
          </a>
        </div>
      </div>
    </div>
  );
}
