import React, { useState } from "react";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidEmail && password) {
      const userData = {
        email: email,
        password: password,
      };

      // Store user data in local storage
      localStorage.setItem("userData", JSON.stringify(userData));

      setRegistrationSuccess(true);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="container">
      <h2>Register with your Email!</h2>
      {registrationSuccess ? (
        <p>Registration successful! You can now log in.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className={isValidEmail ? "" : "invalid"}
                  />
                  {!isValidEmail && (
                    <p className="error-text">Invalid email format</p>
                  )}
                </td>
              </tr>
              <tr>
                <td>Password:</td>
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
                  <button type="submit">Register</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </div>
  );
};

export default RegistrationPage;
