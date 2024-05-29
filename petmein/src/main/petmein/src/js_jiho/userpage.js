import "../css_jiho/userpage.css"
import { faBell, faCalendarCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserPage() {
    return (
        <>
            <div className="user-page">
                <div className="mytop">
                    <div style={{ display: "flex", width: "180px", height: "60px" }}>
                        <div style={{ textAlign: "center", margin: "15px 10px 10px 20px" }}>
                            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ceb69e", width: "30px", height: "25px" }} />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", textAlign: "center", margin: "11px 0px 0px 15px" }}>
                            <p style={{ fontWeight: "700", fontSize: "20px" }}>0ii.ki</p>
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
                <div className="userpage-profile">
                    <div className="userpage-profile-up">
                        <div className="profile-up-img"></div>
                        <div className="profile-up-text">
                            <div style={{fontWeight: "700"}}>8</div>
                            <div style={{fontWeight: "500"}}>게시물</div>
                        </div>
                        <div className="profile-up-text">
                            <div style={{fontWeight: "700"}}>1.9k</div>
                            <div style={{fontWeight: "500"}}>팔로워▼</div>
                        </div>
                        <div className="profile-up-text">
                            <div style={{fontWeight: "700"}}>219</div>
                            <div style={{fontWeight: "500"}}>팔로잉▼</div>
                        </div>
                    </div>
                    <div className="userpage-profile-Low">
                        <div className="userpage-introduce">
                            <pre style={{ margin: "0", fontWeight: "500"}}>
                                4살 말티즈 ❤️프린❤️, ❤️보리❤️ <br></br>
                                부산에 살아요 <br></br>
                                우리집 강아지 프린, 보리 귀엽죠❣️❣️
                            </pre>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600"}}>
                            <div className="user-follow">팔로우</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}