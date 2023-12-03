import LandingPage from "./components/landingPage";
import Login from "./Auth/login";
import { jwtDecode } from "jwt-decode";

const App: React.FC = () => {
  const token = localStorage.getItem("token");

  const isTokenValid = () => {
    if (token) {
      //@ts-ignore
      const decoded = jwtDecode(token);
      //@ts-ignore
      if (decoded?.exp < Date.now() / 1000) {
        localStorage.clear();
        window.location.reload();
        return false;
      } else {
        return true;
      }
    }
  };
  return <>{!isTokenValid() ? <Login /> : <LandingPage />}</>;
};

export default App;
