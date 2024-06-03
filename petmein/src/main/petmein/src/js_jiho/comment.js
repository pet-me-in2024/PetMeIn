import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css_jiho/comment.css"
import { faChevronLeft, faFaceSmile, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import img1 from "../img/사진1.jpg";
import img2 from "../img/사진2.jpg";
import img3 from "../img/사진3.jpg";

export default function Comment() {
    return (
        <div className="comment">
            <div className="board-top">
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
            <div className="comment-list">
                <div className="com">댓글</div>
                <div>
                    <div className="comment-doc">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className='comment-user-profile-img' style={{ backgroundImage: 'url(' + img1 + ')' }}></div>
                            <div style={{ fontWeight: "700", fontSize: "12px" }}>Jiho_0001
                                <div style={{ fontWeight: "500", fontSize: "14px" }}>
                                    프린 너무 귀여워!
                                </div>
                            </div>
                        </div>
                        <div style={{ fontSize: "25px", marginRight: "20px" }}>♡
                        <div style={{fontSize: "12px", textAlign: "center"}}>30</div>
                        </div>
                    </div>
                    <div className="comment-doc">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className='comment-user-profile-img' style={{ backgroundImage: 'url(' + img2 + ')' }}></div>
                            <div style={{ fontWeight: "700", fontSize: "12px" }}>Jiho_0002
                                <div style={{ fontWeight: "500", fontSize: "14px" }}>
                                    귀여운 프린~~
                                </div>
                            </div>
                        </div>
                        <div style={{ fontSize: "25px", marginRight: "20px" }}>♡
                        <div style={{fontSize: "12px", textAlign: "center"}}>24</div>
                        </div>
                    </div>
                    <div className="comment-doc">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className='comment-user-profile-img' style={{ backgroundImage: 'url(' + img3 + ')' }}></div>
                            <div style={{ fontWeight: "700", fontSize: "12px" }}>Jiho_0003
                                <div style={{ fontWeight: "500", fontSize: "14px" }}>
                                    보리도 보여주세요!!
                                </div>
                            </div>
                        </div>
                        <div style={{ fontSize: "25px", marginRight: "20px" }}>♡
                            <div style={{fontSize: "12px", textAlign: "center"}}>2</div>
                        </div>
                    </div>
                </div>
                <div className="comment-input">
                    <div className="comment-input-profile-img"></div>
                    <input className="comment-input-input" placeholder="댓글을 남겨주세요."></input>
                   <FontAwesomeIcon icon={faFaceSmile} style={{color: "#d0c1b4", height: "20px", width: "20px", marginRight: "20px" }}/>
                   <FontAwesomeIcon icon={faPaperPlane} style={{color: "#d0c1b4", height: "20px", width: "20px", marginRight: "20px"}} />
                </div>
            </div>
        </div>
    )
}