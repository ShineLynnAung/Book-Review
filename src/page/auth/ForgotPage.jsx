import { Box, Button, TextField, ThemeProvider, Typography, Paper } from "@mui/material";
import React from "react";
import theme from "../../theme";

export default function Forgot() {
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gradient-to-r from-[#6a85ee] to-[#4a69bd]">
      <Paper elevation={6} className="p-10 rounded-2xl w-[30rem] bg-white shadow-lg">
        <Typography variant="h5" className="text-center font-bold text-gray-700 mb-2">
          Forgot Your Password?
        </Typography>
        <Typography variant="body2" className="text-center text-gray-500 mb-6 mt-3">
          No worries! Enter your name and we'll help you reset it.
        </Typography>

        <Box className="mt-6">
          <TextField
            id="name"
            label="Enter Email"
            variant="outlined"
            fullWidth
            className="mb-4 mt-6"
          />
        </Box>

        <ThemeProvider theme={theme}>
          <div className="flex justify-center mt-6">
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                borderRadius: "999px",
                padding: "12px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Reset Password
            </Button>
          </div>
        </ThemeProvider>
      </Paper>
    </div>
  );
}
