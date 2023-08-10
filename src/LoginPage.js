import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const history = useHistory(); // Initialize useHistory

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    console.log("Stored User Data:", storedUserData); // Log the retrieved data

    console.log("Entered Email:", email);
    console.log("Entered Password:", password);

    if (
      storedUserData &&
      storedUserData.email === email &&
      storedUserData.password === password
    ) {
      console.log("Login successful");
      setLoginSuccess(true);
      // Redirect to the welcome page after successful login
      history.push("/WelcomePage");
    } else {
      console.log("Login failed");
      setLoginSuccess(false);
    }
  };

  return (
    <div className="container">
      <h2>Login with your Email!</h2>
      {loginSuccess ? (
        <p>Login successful!</p>
      ) : (
        <form onSubmit={handleLogin}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Email:</label>
                </td>
                <td>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <button type="submit">Login</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
