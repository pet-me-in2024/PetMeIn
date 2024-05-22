import "../css_doh/login.css";
import naver from "../img/logoSVG/btn_naver.svg";
import kakao from "../img/logoSVG/btn_kakao.svg";
import google from "../img/logoSVG/btn_google.svg";

export default function Login() {
  return (
    <div className="login">
      <h3>PET ME IN</h3>
      <p>로그인</p>
      <hr></hr>
      <div className="idpw">
        <label>아이디</label>
      </div>
      <input
        placeholder="이메일 아이디를 입력해주세요."
        className="idpw-input"
      ></input>
      <div className="idpw">
        <label>비밀번호</label>
      </div>
      <input
        placeholder="비밀번호를 입력해주세요."
        className="idpw-input"
      ></input>
      <br></br>
      <div className="login-detail">
        <div>
          <input type="checkbox"></input>
          <label>로그인 상태 유지</label>
        </div>
        <p>아이디 비밀번호 찾기</p>
      </div>
      <button className="login-btn">로그인</button>
      <button className="social-button-naver">
        <img src={naver}></img>
        <p className="social-button-p">네이버로 로그인</p>
      </button>
      <button className="social-button-kakao">
        <img src={kakao}></img>
        <p className="social-button-p"> 카카오 로그인</p>
      </button>
      <button className="social-button-google">
        <img className="googleimg" src={google}></img>
        <p className="social-button-p"> 구글 로그인</p>
      </button>
      <p className="simplesignup">간편 회원가입 하기</p>
    </div>
  );
}
