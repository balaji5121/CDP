import React, { ChangeEvent, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import "../Styles/GlobalStyles.css";
import { errorPropsI, userDetailsI } from "../Types/LoginTypes";
import verifyUser from "../apiHooks/POST/LoginApi";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const [userinfo, setUserinfo] = useState<userDetailsI>({
    username: "",
    password: "",
  });

  const [errorProps, setErrorProps] = useState<errorPropsI>({
    errorMessage: "",
    errorValue: false,
  });

  const history = useHistory();

  const handleUserDetailsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserinfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLoginSubmit = async (event: any) => {
    event.preventDefault();
    const userAuthentication = await verifyUser(userinfo);
    if (userAuthentication.jwt_token) {
      localStorage.setItem(
        "token",
        JSON.stringify(userAuthentication.jwt_token)
      );
      setErrorProps({
        errorMessage: "",
        errorValue: false,
      });
      history.push("/");
    } else {
      setErrorProps({
        errorMessage: userAuthentication.error_msg,
        errorValue: true,
      });
    }
  };

  return (
    <Container
      maxWidth="xl"
      className="LoginMainContainer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className="LoginCard">
        <Typography sx={{ alignSelf: "center", fontSize: 32, padding: 2 }}>
          Login
        </Typography>
        <form onSubmit={handleLoginSubmit}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              fullWidth
              size="small"
              label="Username"
              name="username"
              onChange={handleUserDetailsChange}
            />
            <TextField
              fullWidth
              size="small"
              label="Password"
              type="password"
              name="password"
              onChange={handleUserDetailsChange}
            />
            <Stack direction="row" gap={2}>
              <Button variant="contained" sx={{ width: "100%" }} type="submit">
                Login
              </Button>
              <Button variant="outlined" sx={{ width: "100%" }}>
                Register
              </Button>
            </Stack>
            <Typography variant="body2" sx={{ color: "red" }}>
              {errorProps.errorValue && errorProps.errorMessage}
            </Typography>
          </CardContent>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
