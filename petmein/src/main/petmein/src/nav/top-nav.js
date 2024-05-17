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
          <FontAwesomeIcon icon={faBell} />
          <p>알림</p>
        </div>
        <div className="topnav-right-content">
          <FontAwesomeIcon icon={faCalendarCheck} />
          <p>예약관리</p>
        </div>
      </div>
    </div>
  );
}
