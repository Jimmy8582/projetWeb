import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import UserInfoPage from "./Pages/UserInfoPage";
import NotFound from "./Pages/NotFound";
import PrivateRoute from "./Pages/PrivateRoute";

function App() {
  function getBrowserRouter() {
    return <BrowserRouter>
      <Routes>

        <Route path="/" element={<PrivateRoute/>}>
          <Route path="/" element={<UserInfoPage/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>

      </Routes>
    </BrowserRouter>;
  }

  return (
    <div className="page-container">
      {getBrowserRouter()}

    </div>
  );
}

export default App;
