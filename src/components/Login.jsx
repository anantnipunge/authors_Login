import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();

//   const onClick = async (e) => {
//     e.preventDefault();
//   };

  return (
    <>
      <div className="wrapper">
        <div className="form">
          <h1 className="title">Author Login</h1>
          <form onClick={() => 
                  navigate("/Navbar")
                }>
            <div>
              <input
                type="text"
                value={username || email}
                onChange={(e) =>
                  setUsername(e.target.value) || setEmail(e.target.value)
                }
                className="input"
                placeholder="Username or Email"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Password"
                required
              />
              <button
                className="button"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
