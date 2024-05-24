import "./App.css"
import MeongsaengTop from './js_jiho/meongsaeng-top';
import BottomNav from './nav/bottom-nav';
import Meongsaeng from './js_jiho/meongsaeng';
import MyPage from './js_jiho/mypage';
import MeongsaengContent from './js_jiho/meongsaengContent';
import SaveBoardPage from './js_jiho/saveboardpage';
import Following from './js_jiho/following';
import Follower from './js_jiho/follower';
import MeongsaengSearch from './js_jiho/meongsaengsearch';
import MeongsaengNameSearch from './js_jiho/meongsaengnamesearch';
import MeongsaengTegSearch from './js_jiho/meongsaengtegsearch';
import UserPage from './js_jiho/userpage';
import TopNav from './nav/top-nav';

function App() {
  return (
    <div className="App">
      {/* 멍생 페이지 (검색창, 태그박스, 콘텐츠)
      <MeongsaengTop></MeongsaengTop>
      <Meongsaeng></Meongsaeng> */}

      {/* 멍생 검색화면
       <MeongsaengSearch></MeongsaengSearch>
      <MeongsaengNameSearch></MeongsaengNameSearch>
      <MeongsaengTegSearch></MeongsaengTegSearch> */}

      {/* 마이페이지, 마이페이지 내 글
      <MyPage></MyPage>
      <MeongsaengContent></MeongsaengContent> */}

      {/* 저장한 게시물
      <SaveBoardPage></SaveBoardPage> */}

      {/* 팔로잉, 팔로워
       <Following></Following>
       <Follower></Follower> */}

      {/* 다른사람 페이지
      <UserPage></UserPage>
      <MeongsaengContent></MeongsaengContent> */}

      <BottomNav></BottomNav>
    </div>

  );
}

export default App;
