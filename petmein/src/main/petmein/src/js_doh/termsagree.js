import "../css_doh/termsagree.css";

export default function Termsagree() {
  return (
    <div className="termsagree">
      <h3>
        서비스 이용을 위해<br></br>약관 동의가 필요합니다.
      </h3>
      <hr></hr>
      <div className="allagree-container">
        <input type="checkbox"></input>
        <p>전체 동의</p>
      </div>
      <hr></hr>
      <div className="agree-container">
        <input type="checkbox"></input>
        <p>
          {"["}필수{"]"} 서비스 이용 약관 동의
        </p>
      </div>
      <div className="agree-container">
        <input type="checkbox"></input>
        <p>
          {"["}필수{"]"} 개인정보 수집 및 이용 동의
        </p>
      </div>
      <div className="agree-container">
        <input type="checkbox"></input>
        <p>
          {"["}선택{"]"} 개인정보 수집 및 이용 동의
        </p>
      </div>
      <div className="agree-container">
        <input type="checkbox"></input>
        <p>
          {"["}선택{"]"} 위치 기반 서비스 이용 동의
        </p>
      </div>
      <div className="agree-container">
        <input type="checkbox"></input>
        <p>
          {"["}선택{"]"} 마케팅 정보 수신 동의
        </p>
      </div>
      <div className="agree-container">
        <input type="checkbox"></input>
        <p>
          {"["}필수{"]"} 만 14세 이상입니다.<br></br>
        </p>
      </div>
      <p className="p-small">만 14세 이상 고객만 가입 가능합니다.</p>
      <button className="button-next">다음</button>
    </div>
  );
}
