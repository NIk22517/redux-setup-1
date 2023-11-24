import React, { FC, memo } from "react";
import { connect } from "react-redux";
import LogIn from "./screen/auth/LogIn";
import SignUp from "./screen/auth/SignUp";
interface MainProps {
  auth: any;
}
const Main: FC<MainProps> = (props) => {
  const { auth } = props;

  return (
    <>
      <h1>Redux Setup</h1>
      <LogIn />
      <SignUp />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(memo(Main));
