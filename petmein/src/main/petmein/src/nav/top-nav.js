import { faBell, faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopNav() {
  return (
    <div className="topnav">
      <div>
        <h3>Pet Me In</h3>
      </div>
      <div className="topnav-right">
        <div className="topnav-right-content">
          <FontAwesomeIcon
            icon={faBell}
            style={{ color: "#e4d7ca", width: "20px", height: "20px" }}
          />
          <p style={{ fontSize: "10px", fontWeight: "900" }}>알림</p>
        </div>
        <div className="topnav-right-content">
          <FontAwesomeIcon
            icon={faCalendarCheck}
            style={{ color: "#e4d7ca", width: "20px", height: "20px" }}
          />
          <p style={{ fontSize: "10px", fontWeight: "900" }}>예약관리</p>
        </div>
      </div>
    </div>
  );
}
