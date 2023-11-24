import React, { useState } from "react";
import Auth from "../../api/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("User");

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setName("");
    setPhoneNumber("");
    setRole("");
  };
  const handleSubmit = () => {
    const data = {
      email,
      password,
      name,
      phoneNumber: parseInt(phoneNumber),
      role,
    };
    Auth.signup({ data: data }).then((res: any) => {
      if (res.status === 201) {
        handleClose();
      } else {
        console.log("error");
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="phone-number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Admin</option>
        <option>User</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUp;
