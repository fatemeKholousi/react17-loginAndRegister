import { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [state, setstate] = useState({ clicked_on: "sign-up" });
  return (
    <div className="App">
      <form className="sign_up_form">
        <span id="containerBTN">
          <button
            onClick={() => {
              setstate({ clicked_on: "login" });
            }}
            className="mainBTN"
          >
            ورود
          </button>
          <button
            onClick={() => {
              setstate({ clicked_on: "signup" });
            }}
            className="mainBTN"
          >
            ثبت نام
          </button>
        </span>

        {/* my ternary rendering  */}
        {state.clicked_on === "signup" ? <SignUp /> : <Login />}
      </form>
    </div>
  );
}

export default App;
