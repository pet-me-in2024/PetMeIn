import { faBell, faCalendarCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MeongsaengContent from "./meongsaengContent";

export default function SaveBoardPage() {
    return (
        <>
            <div className="mytop">
                <div style={{ display: "flex", width: "180px", height: "60px" }}>
                    <div style={{ textAlign: "center", margin: "15px 10px 10px 20px" }}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ceb69e", width: "30px", height: "25px" }} />
                    </div>
                    <div style={{ textAlign: "center", margin: "15px 10px" }}>
                        <p style={{ fontWeight: "700", width: "150px" }}>저장한 게시물</p>
                    </div>
                </div>
                <div style={{ display: "flex", width: "130px", height: "60px" }}>
                    <div style={{ textAlign: "center", margin: "10px" }}>
                        <FontAwesomeIcon icon={faBell} style={{ color: "#e4d7ca", width: "25px", height: "25px" }} />
                        <div style={{ fontSize: "10px", fontWeight: "900" }}>알림</div>
                    </div>
                    <div style={{ textAlign: "center", margin: "10px" }}>
                        <FontAwesomeIcon icon={faCalendarCheck} style={{ color: "#e4d7ca", width: "25px", height: "25px" }} />
                        <div style={{ fontSize: "10px", fontWeight: "900" }}>예약관리</div>
                    </div>
                </div>
            </div>
            <div style={{ width: "600px", height: "62px" }}></div>
            <MeongsaengContent></MeongsaengContent>
        </>
    )
}