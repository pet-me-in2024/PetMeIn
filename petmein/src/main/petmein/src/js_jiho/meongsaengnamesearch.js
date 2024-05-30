import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_jiho/meongsaengnamesearch.css";
import { faChevronLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import img1 from "../img/사진1.jpg";
import img2 from "../img/사진2.jpg";
import img3 from "../img/사진3.jpg";

export default function MeongsaengNameSearch() {
    return (
        <>
            <div className="top">
                <div className="search-box">
                <div style={{ textAlign: "center", margin: "13px 10px 10px 20px" }}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ceb69e", width: "30px", height: "25px" }} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#8c6e50", width: "25px", height: "25px", marginTop: "3px" }} />
                    </div>
                    <input className="box"></input>
                </div>
            </div>
            <div className="meong">
                <div className="meongsaengnamesearch-teg-box">
                    <div className="meongsaengnamesearch-teg" style={{backgroundColor: "#c5a98d"}}>아이디</div>
                    <div className="meongsaengnamesearch-teg">내용</div>
                    <div className="meongsaengnamesearch-teg">지역</div>
                    <div className="meongsaengnamesearch-teg">태그</div>
                </div>
            </div>
            <div style={{ height: "62px", width: "100%" }}></div>
            <div>
                <div style={{display: "flex", alignItems: "center" }}>
                    <div className='user-profile-img' style={{ backgroundImage: 'url(' + img1 + ')' }}></div>
                    <div style={{fontWeight: "700" }}>Jiho_0001</div>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div className='user-profile-img' style={{ backgroundImage: 'url(' + img2 + ')' }}></div>
                    <div style={{fontWeight: "700" }}>Jiho_0002</div>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div className='user-profile-img' style={{ backgroundImage: 'url(' + img3 + ')' }}></div>
                    <div style={{fontWeight: "700" }}>Jiho_0003</div>
                </div>
            </div>
        </>
    )
}