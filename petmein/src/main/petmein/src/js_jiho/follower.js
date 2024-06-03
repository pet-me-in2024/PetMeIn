import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_jiho/follower.css";
import { faBell, faCalendarCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import img1 from "../img/사진1.jpg";
import img2 from "../img/사진2.jpg";
import img3 from "../img/사진3.jpg";


export default function Follower() {
    return (
        <div className="follower">
            <div className="mytop">
                <div style={{ display: "flex", width: "180px", height: "60px" }}>
                    <div style={{ textAlign: "center", margin: "13px 10px 10px 20px" }}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ceb69e", width: "30px", height: "25px" }} />
                    </div>
                    <div style={{ textAlign: "center", margin: "13px 0px 0px 15px" }}>
                        <p style={{ fontWeight: "700", fontSize: "17px" }}>팔로워</p>
                    </div>
                </div>
            </div>
            <div style={{ height: "62px", width: "600px" }}></div>
            <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className='follow-user-profile-img' style={{ backgroundImage: 'url(' + img1 + ')' }}></div>
                    <div style={{ fontWeight: "700" }}>Jiho_0001</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className='follow-user-profile-img' style={{ backgroundImage: 'url(' + img2 + ')' }}></div>
                    <div style={{ fontWeight: "700" }}>Jiho_0002</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className='follow-user-profile-img' style={{ backgroundImage: 'url(' + img3 + ')' }}></div>
                    <div style={{ fontWeight: "700" }}>Jiho_0003</div>
                </div>
            </div>
            <div style={{ height: "62px", width: "600px" }}></div>
        </div>
    )
}