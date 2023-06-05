import { userDetailsI } from "../../Types/LoginTypes";
import { LoginApiCall } from "../apisCalls";

const verifyUser = async (userinfo: userDetailsI) => {
  const options = {
    method: "POST",
    body: JSON.stringify(userinfo),
  };
  const res = await fetch(LoginApiCall, options);
  const data = await res.json();
  return data;
};

export default verifyUser;
