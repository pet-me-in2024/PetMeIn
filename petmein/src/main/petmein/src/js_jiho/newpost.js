import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_jiho/newpost.css";
import { faBell, faCalendarCheck, faChevronLeft, faPaw } from "@fortawesome/free-solid-svg-icons";

export default function NewPost() {
    return (
        <div className="newpost">
            <div className="newpost-top">
                <div style={{ display: "flex", width: "180px", height: "60px" }}>
                    <div style={{ textAlign: "center", margin: "13px 10px 10px 20px" }}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ceb69e", width: "30px", height: "25px" }} />
                    </div>
                    <div style={{ textAlign: "center", margin: "15px 0px 0px 15px" }}>
                        <p style={{ fontWeight: "700", fontSize: "17px" }}>새 게시물</p>
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
            <div style={{ height: "70px", width: "600px" }}></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="new-post-photo-select">
                    <div>
                        <div>30MB 이하의 파일만</div>
                        <div>등록할 수 있습니다.</div>
                        <div className="new-post-file">사진선택</div>
                    </div>
                </div>
            </div>
            <div className="new-post-input">
                <input className="new-post-input-input" placeholder="문구를 작성해주세요."></input>
            </div>
            <div style={{ borderTop: "1px solid #dadada", borderBottom: "1px solid #dadada", padding: "10px 0px" }}>
                <FontAwesomeIcon icon={faPaw} style={{ color: "#e4d7ca", width: "25px", height: "23px", marginRight: "15px" }}
                />멍태그 선택
            </div>
            <div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center" }}>
                <div className="new-post-meongTegBox">
                    <div className="new-post-meongTeg">#소형견</div>
                    <div className="new-post-meongTeg">#중형견</div>
                    <div className="new-post-meongTeg">#대형견</div>
                </div>
                <div className="new-post-meongTegBox">
                    <div className="new-post-meongTeg">#1세 미만</div>
                    <div className="new-post-meongTeg">#1 ~ 6세</div>
                    <div className="new-post-meongTeg">#7세 이상</div>
                </div>
                <div className="new-post-meongTegBox">
                    <div className="new-post-new-teg">새로운 태그</div>
                    <div className="new-post-meongTeg">태그 추가</div>
                </div>
                <div className="new-post-meongTegBox">
                    <div className="new-post-add">글쓰기</div>
                </div>
            </div>
            <div style={{ height: "62px", width: "600px" }}></div>
        </div>
    )
}