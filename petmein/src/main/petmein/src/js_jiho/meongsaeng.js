import { useState } from "react";
import "../css_jiho/meongsaeng.css"

export default function Meongsaeng() {
    let [num] = useState([0,1,2,3,4,5,6,7,8])
    return (
        <>
            <div className="meong">
                <div className="meongTegBox">
                    <div className="meongTeg">#소형견</div>
                    <div className="meongTeg">#중형견</div>
                    <div className="meongTeg">#대형견</div>
                </div>
                <div className="meongTegBox">
                    <div className="meongTeg">#1세 미만</div>
                    <div className="meongTeg">#1 ~ 6세</div>
                    <div className="meongTeg">#7세 이상</div>
                </div>
                <div className="content">
                {
                  num.map((a, i) => {
                    return (
                      <Card i={i}></Card>
                    )
                  })
                }
                <div style={{height: "62px", width: "600px"}}></div>
                </div>
            </div>
            <div className="addButton">+</div>
        </>
    );
}

function Card(props) {
    return (
      <div className='pics'>
        <img src={require('../img/사진' + (props.i + 1) + '.jpg')} height="198px" />
      </div>
    );
  }