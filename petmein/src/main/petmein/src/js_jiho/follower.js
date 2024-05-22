import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css_jiho/follower.css";
import { faBell, faCalendarCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import img1 from "../img/사진1.jpg";
import img2 from "../img/사진2.jpg";
import img3 from "../img/사진3.jpg";


export default function Follower() {
    // let [user10] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    return (
        <>
            <div className="mytop">
                <div style={{ display: "flex", width: "180px", height: "60px" }}>
                    <div style={{ textAlign: "center", margin: "15px 10px 10px 20px" }}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ceb69e", width: "30px", height: "25px" }} />
                    </div>
                    <div style={{ textAlign: "center", margin: "15px 10px" }}>
                        <p style={{ fontWeight: "700", fontSize: "17px" }}>팔로워</p>
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
            <div style={{ height: "62px", width: "600px" }}></div>
            <div className="following-list">
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
            <div style={{ height: "62px", width: "600px" }}></div>
            {/* {
                    user10.map((a, i) => {
                        return (
                            <FollowingUser i={i}></FollowingUser>
                        )
                    })
                } */}
        </>
    )
}

// function FollowingUser(props) {
//     return (
//       <div className='user-profile-img' style={{backgroundImage : 'url(img' + (props.i + 1) + ')'}}></div>
//     );
//   }