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
              style={{ color: "#e4d7ca", width: "20px", height: "20px" }}
            />
            <p>홈</p>
          </a>
        </div>
        <div className="nav-button">
          <a href="#reservation" className="nav-a">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              style={{ color: "#e4d7ca", width: "20px", height: "20px" }}
            />
            <p>예약</p>
          </a>
        </div>
        <div className="nav-button">
          <a href="#board" className="nav-a">
            <FontAwesomeIcon
              icon={faPaw}
              style={{ color: "#e4d7ca", width: "20px", height: "20px" }}
            />
            <p>멍생</p>
          </a>
        </div>
        <div className="nav-button">
          <a href="#mypage" className="nav-a">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#e4d7ca", width: "20px", height: "20px" }}
            />
            <p>마이페이지</p>
          </a>
        </div>
      </div>
    </div>
  );
}
