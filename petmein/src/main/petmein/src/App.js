// import TopNav from './nav/top-nav';
// import "./css_doh/App.css"
import MeongsaengTop from './js_jiho/meongsaeng-top';
import BottomNav from './nav/bottom-nav';
import Meongsaeng from './js_jiho/meongsaeng';
import MyPage from './js_jiho/mypage';
import MeongsaengContent from './js_jiho/meongsaengContent';
import SaveBoardPage from './js_jiho/saveboardpage';
import Following from './js_jiho/following';
import Follower from './js_jiho/follower';

import "./App.css"

function App() {
  return (
    <div className="App">
      {/* 마이페이지, 마이페이지 내 글
      <MyPage></MyPage>
      <MeongsaengContent></MeongsaengContent> */}
      {/* 멍생 페이지 (검색창, 태그박스, 콘텐츠)
      <MeongsaengTop></MeongsaengTop>
      <Meongsaeng></Meongsaeng> */}
      {/* 저장한 게시물
      <SaveBoardPage></SaveBoardPage> */}
       {/* 팔로잉, 팔로워
       <Following></Following>
       <Follower></Follower> */}
      <BottomNav></BottomNav>
      </div>

  );
}

export default App;
