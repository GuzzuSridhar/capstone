import React, { useState, useEffect } from "react";

const EditProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [nricNumber, setNricNumber] = useState("");
  const [email, setEmail] = useState(""); // Email state

  useEffect(() => {
    // Get stored user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Set initial values for the input fields
    setFirstName(storedUserData.firstName || "");
    setLastName(storedUserData.lastName || "");
    setPhoneNumber(storedUserData.phoneNumber || "");
    setAddress(storedUserData.address || "");
    setNricNumber(storedUserData.nricNumber || "");
    setEmail(storedUserData.email || ""); // Set email state
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Update the user data with new profile information
    const updatedUserData = {
      firstName,
      lastName,
      phoneNumber,
      address,
      nricNumber,
      email, // Include email in the updated data
    };

    // Update local storage with the updated user data
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    // Navigate to a confirmation page or another route
    console.log("Profile updated successfully!");
  };

  return (
    <div className="container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <table>
          <tbody>
            <tr>
              <td>First Name:</td>
              <td>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>NRIC:</td>
              <td>
                <input
                  type="text"
                  value={nricNumber}
                  onChange={(e) => setNricNumber(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly
                />
              </td>
            </tr>
            {/* Similar rows for other fields */}
            <tr>
              <td></td>
              <td>
                <button type="submit">Update Profile</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default EditProfilePage;
