import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../css_jiho/meongsaeng-top.css"


export default function MeongsaengTop() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="meongsaengtop">
            <div className="top">
                <div className="search-box">
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#8c6e50", width: "25px", height: "25px", marginTop: "3px" }} />
                    </div>
                    <input className="box" placeholder="검색"></input>
                </div>
            </div>
            {/* <div className="meongseng-teg-box">
                <div className="meongsaeng-teg">#소형견</div>
                <div className="meongsaeng-teg">#중형견</div>
                <div className="meongsaeng-teg">#대형견</div>
            </div>
            <div className="meongseng-teg-box">
                <div className="meongsaeng-teg">#1세 미만</div>
                <div className="meongsaeng-teg">#1 ~ 6세</div>
                <div className="meongsaeng-teg">#7세 이상</div>
            </div> */}
        </div>
    );
}