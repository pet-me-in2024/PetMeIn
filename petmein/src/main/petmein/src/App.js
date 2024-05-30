import logo from "./logo.svg";
import "./css_doh/App.css";
import BottomNav from "./nav/bottom-nav";
import TopNav from "./nav/top-nav";
import Login from "./js_doh/login";
import Loginfind from "./js_doh/loginfind";
import Pwfind from "./js_doh/pwfind";
import Signup from "./js_doh/signup";
import Termsagree from "./js_doh/termsagree";
import Signupsalonform from "./js_doh/signupsalonform";
import Signupuserform from "./js_doh/signupuserform";
import Managementpage from "./js_doh/managementpage";
import Salonmanagementpage from "./js_doh/salonmanagementpage";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Login></Login>
      <BottomNav></BottomNav>
    </div>
  );
}

export default App;
