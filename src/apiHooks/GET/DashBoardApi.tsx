import { StateData } from "../apisCalls";

export const getStateDataApiCall = async () => {
  const options = {
    method: "GET",
  };
  const res = await fetch(StateData, options);
  const data = await res.json();
  return data;
};
