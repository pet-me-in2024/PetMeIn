import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_jiho/meongsaengtegsearch.css";
import { faChevronLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import tegimg from "../img/teg.jpg";


export default function MeongsaengTegSearch() {
    return (
        <div className="meongsaengtegsearch">
            <div className="top">
                <div className="search-box">
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ceb69e", width: "30px", height: "25px" }} />
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#8c6e50", width: "25px", height: "25px", margin: "3px 10px 0px 0px" }} />
                    <input className="box" placeholder="검색"></input>
                </div>
            </div>
            <div className="meong">
                <div className="meongsaengtegsearch-teg-box">
                    <div className="meongsaengtegsearch-teg">아이디</div>
                    <div className="meongsaengtegsearch-teg">내용</div>
                    <div className="meongsaengtegsearch-teg">지역</div>
                    <div className="meongsaengtegsearch-teg" style={{ backgroundColor: "#c5a98d" }}>태그</div>
                </div>
            </div>
            <div style={{ height: "62px", width: "100%" }}></div>
            <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className='user-profile-img' style={{ backgroundImage: 'url(' + tegimg + ')' }}></div>
                    <div style={{ fontWeight: "700" }}>#말티즈</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className='user-profile-img' style={{ backgroundImage: 'url(' + tegimg + ')' }}></div>
                    <div style={{ fontWeight: "700" }}>#말티즈미용</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className='user-profile-img' style={{ backgroundImage: 'url(' + tegimg + ')' }}></div>
                    <div style={{ fontWeight: "700" }}>#말티즈분양</div>
                </div>
            </div>
        </div>
    )
}