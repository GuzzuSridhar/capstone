import "./App.css";
import "./Navbar.css";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import EditProfilePage from "./EditProfilePage";
import WelcomePage from "./WelcomePage";
//import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to UOB</h1>
      </header>

      <Navbar />

      <Switch>
        <Route path="/LoginPage">
          <LoginPage />
        </Route>
        <Route path="/edit-profile">
          <EditProfilePage />
        </Route>
        <Route path="/RegistrationPage">
          <RegistrationPage />
        </Route>
        <Route path="/WelcomePage">
          <WelcomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
