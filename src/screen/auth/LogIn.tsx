import React, { useState } from "react";
import Auth from "../../api/auth";
import constants from "../../constants";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      email,
      password,
    };
    Auth.login({ data: data }).then((res: any) => {
      if (res.status === 200) {
        dispatch({
          type: constants("auth").reducers.login.success,
          payload: { data: res.data },
        });
      } else {
        console.log("error");
      }
    });
  };

  return (
    <div>
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

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LogIn;
