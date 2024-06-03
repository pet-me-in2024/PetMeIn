import { useState } from "react";
import "../css_jiho/meongsaengcontent.css"


export default function MeongsaengContent() {
    let [num] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])

    return (
        <div className="meongsaengcontent">
            <div className="meongcontent">
                <div className="content">
                    {
                        num.map((a, i) => {
                            return (
                                <Card i={i}></Card>
                            )
                        })
                    }
                </div>
                <div style={{ height: "62px", width: "600px" }}></div>
            </div>
        </div>
    );
}

function Card(props) {
    return (
        <div className='meongsaengcontent-pics'>
            <img src={require('../img/사진' + (props.i + 1) + '.jpg')} height="160px"
            style={{borderRadius: "5px", boxShadow: "2px 2px 3px gray"}} />
        </div>
    );
}