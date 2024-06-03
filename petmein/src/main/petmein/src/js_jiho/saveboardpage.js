import { faBell, faCalendarCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MeongsaengContent from "./meongsaengcontent";
import "../css_jiho/saveboardpage.css"

export default function SaveBoardPage() {
    return (
        <div className="saveboardpage">
            <div className="save-mytop">
                <div style={{ display: "flex", width: "180px", height: "60px" }}>
                    <div style={{ textAlign: "center", margin: "15px 10px 10px 20px" }}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ceb69e", width: "30px", height: "25px" }} />
                    </div>
                    <div style={{ textAlign: "center", margin: "15px 10px" }}>
                        <p style={{ fontWeight: "700", width: "120px", fontSize: "17px" }}>저장한 게시물</p>
                    </div>
                </div>
            </div>
            <div style={{ height: "62px", width: "600px" }}></div>
            <MeongsaengContent></MeongsaengContent>
        </div>
    )
}