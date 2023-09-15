import HelloWorld from "./components/hello-world";
import ElectronLogo from "./assets/icons/electron.png";
import logo from "./assets/logo-v1.svg";
import "./App.scss";
function App() {
  return (
    <>
      <div className="home-page">
        <div className="logo-box">
          <img
            style={{
              height: 200,
            }}
            src={ElectronLogo}
            alt="Electron logo"
          />
          <img
            alt="Vue logo"
            src={logo}
            style={{
              height: 200,
            }}
          />
        </div>
        <HelloWorld msg="Hello Electron + React + Vite" />
      </div>
    </>
  );
}

export default App;
