import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import theme from "../../theme";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DefaultBtnComponent from "../../components/Button/DefaultBtnComponent";

export default function RegisterPage({ history }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="flex w-full h-full">
        <div className="bg-white w-full sm:w-[50%] h-full">
          <h1 className="uppercase text-[#7a85ee] font-medium text-lg mx-3 mt-5">
            Sign Up
          </h1>
          <div className="mt-8">
            <Box className="mx-10">
              <div className="mt-6">
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  className="w-full"
                />
              </div>
              <div className="mt-10">
                <TextField
                  id="outlined"
                  label="Email"
                  variant="standard"
                  slotProps={{
                    htmlInput: {
                      sx: { textAlign: "left" },
                    },
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          @gmail.com
                        </InputAdornment>
                      ),
                    },
                  }}
                  className="w-full"
                />
              </div>
              <div className="mt-10">
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="mt-10">
                <TextField
                  label="Comfirm Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="mt-6 flex justify-between">
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the terms and conditions"
                />
              </div>
              <ThemeProvider theme={theme}>
                <div className="flex justify-center mt-6">
                  {/* <Button
                    variant="contained"
                    color="secondary"
                    className="w-[60%] "
                    sx={{ borderRadius: "999px", padding: "10px" }}
                    onClick={() => history.push('/home')}
                  >
                    Sign Up
                  </Button> */}
                  <DefaultBtnComponent
                    className={"w-[60%]"}
                    style={{ borderRadius: "999px", padding: "10px" }}
                    variant={"contained"}
                    color={"secondary"}
                    onClick={()=>history.push('/home')}
                    label={"Register"}
                    disabled={false}
                  />
                </div>
              </ThemeProvider>

              <div className="flex justify-center">
                <p className="text-center text-gray-600 font-normal text-md mt-8">
                  Already have an account?
                </p>
                <Link to="/" className="text-[#7a85ee] mt-8 ms-3">
                  Sign in
                </Link>
              </div>
            </Box>
          </div>
        </div>
        <div className="hidden md:block bg-[#7a85ee] w-[50%] h-full">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="font-semibold text-center text-white text-5xl font-sans">
              Hey There
            </h1>
            <p className="text-center text-white font-medium text-xl mt-8">
              Welcome.
            </p>
            <p className="text-center text-white font-normal text-xl mt-8">
              You are just one step away to your feed
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
