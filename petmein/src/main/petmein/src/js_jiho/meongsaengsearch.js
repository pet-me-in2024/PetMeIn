import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_jiho/meongsaengsearch.css";
import { faChevronLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function MeongsaengSearch() {
    return (
        <div className="meongsaengsearch">
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
                <div className="meongsaengsearch-teg-box">
                    <div className="meongsaengsearch-teg" style={{ backgroundColor: "#c5a98d" }}>아이디</div>
                    <div className="meongsaengsearch-teg">내용</div>
                    <div className="meongsaengsearch-teg">지역</div>
                    <div className="meongsaengsearch-teg">태그</div>
                </div>
            </div>
        </div>
    )
}