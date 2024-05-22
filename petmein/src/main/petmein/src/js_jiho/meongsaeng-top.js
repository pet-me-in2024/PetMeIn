import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../css_jiho/meongsaeng-top.css"


export default function MeongsaengTop() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="top">
            <div className="search-box">
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#8c6e50", width: "25px", height: "25px" }} />
                </div>
                <input className="box"></input>
            </div>
        </div>
    );
}