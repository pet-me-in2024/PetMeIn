import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css_jiho/meongsaengpost.css"
import { faBookmark, faChevronLeft, faComment, faHeart } from "@fortawesome/free-solid-svg-icons"

export default function MeongsaengPost() {
    return (
        <div className="meongsaengpost">
            <div className="post-top">
                <div style={{ display: "flex", width: "180px", height: "60px" }}>
                    <div style={{ textAlign: "center", margin: "13px 10px 10px 20px" }}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ceb69e", width: "30px", height: "25px" }} />
                    </div>
                    <div style={{ textAlign: "center", margin: "11px 0px 0px 15px" }}>
                        <p style={{ fontWeight: "700", fontSize: "20px" }}>게시물</p>
                    </div>
                </div>
            </div>
            <div style={{ height: "62px", width: "600px" }}></div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className="post-profile-img"></div>
                <div>jiho_0507</div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
            <div className="post-photo"></div>
            </div>
            <div className="post-handle">
                <div style={{ display: "flex" }}>
                    <div style={{ margin: "10px 10px 0px 40px" }}>
                        <FontAwesomeIcon icon={faHeart} style={{ color: "#e4d7ca", width: "30px", height: "30px" }} />
                        <div style={{ textAlign: "center" }}>23</div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComment} style={{ color: "#e4d7ca", width: "30px", height: "30px", margin: "10px 10px 10px 25px" }} />
                    </div>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faBookmark} style={{ color: "#e4d7ca", width: "30px", height: "30px", margin: "10px 40px 20px 10px" }} />
                    </div>
                </div>
            </div>
            <div style={{ margin: "5px 5px 5px 35px", fontWeight: "600", fontSize: "18px"}}>jiho_1234</div>
            <div style={{ margin: "5px 5px 5px 35px", fontSize: "18px" }}>귀여운 우리집 프린~~❤️❤️❤️❤️</div>

            <div className="post-tegs">
                <div className="post-teg-box">
                    <div className="post-teg">#소형견</div>
                    <div className="post-teg">#해운대</div>
                    <div className="post-teg">#산책</div>
                    <div className="post-teg">#말티즈</div>
                </div>
            </div>

            <div style={{ height: "62px", width: "600px" }}></div>
        </div>
    )
}