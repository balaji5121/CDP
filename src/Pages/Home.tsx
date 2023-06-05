import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { getStateDataApiCall } from "../apiHooks/GET/DashBoardApi";
import { StateCovidDataList, StateDataItemInterface } from "../Types/HomeTypes";
import { getStateName } from "../Constants/StaticData";

const Home = () => {
  const [countriesCovidData, setCountriesCovidData] = useState<
    StateCovidDataList | []
  >([]);

  useEffect(() => {
    const getStateWiseData = async () => {
      const stateCovidData = await getStateDataApiCall();
      const stateCodes = Object.keys(stateCovidData);
      const updatedStateCovidData = stateCodes.map((stateItem: string) => {
        return {
          stateCode: stateItem,
          ...stateCovidData[stateItem].total,
          stateName: getStateName(stateItem),
          active:
            stateCovidData[stateItem].total.confirmed -
            stateCovidData[stateItem].total.recovered,
        };
      });

      setCountriesCovidData(updatedStateCovidData);
    };
    getStateWiseData();
    return () => {};
  }, []);

  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#161625", minHeight: "100vh" }}>
      <Typography>4</Typography>
    </Container>
  );
};

export default Home;
