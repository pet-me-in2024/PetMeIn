import logo from "./logo.svg";
import "./css_doh/App.css";
import BottomNav from "./nav/bottom-nav";
import TopNav from "./nav/top-nav";
import Login from "./js_doh/login";
import Loginfind from "./js_doh/loginfind";

function App() {
  return (
    <div className='App'>
      <TopNav></TopNav>
      <Loginfind></Loginfind>
      {/* <BottomNav></BottomNav> */}
    </div>
  );
}

export default App;
