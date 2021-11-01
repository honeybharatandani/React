import "./App.css";
import Counter from "./Counter";
import "./index.css";
import Axios from "./Axios";
import Context1 from "./Context1";
import { createContext } from "react";
import Todo from "./Todo";
import { GoogleLogin } from "react-google-login";

const FirstName = createContext();
const LastName = createContext();

const responseGoogle = response => {
  console.log(response);
};

function App() {
  return (
    <div className="App">
      {/* providing value */}
      <FirstName.Provider value={"Honey"}>
        <LastName.Provider value={"Andani"}>
          <Context1 />
        </LastName.Provider>
      </FirstName.Provider>
      <Counter />
      <GoogleLogin
        clientId={
          "71513807732-b39714qer36hjctlfghakdfb7g2batec.apps.googleusercontent.com"
        }
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <Todo />
      <Axios />
    </div>
  );
}

export default App;
export { FirstName, LastName };
