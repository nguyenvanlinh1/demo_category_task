import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

const OTP = () => {
  const length = 6;
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      const input = document.getElementById(`otp-input-${index + 1}`);
      if (input) {
        input.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const input = document.getElementById(`otp-input-${index - 1}`);
      if (input) {
        input.focus();
      }
    }
  };
  return (
    <div>
      <Box display="flex" justifyContent={"center"} alignItems={"center"} height="70vh" gap={1}>
        {otp.map((digit, index) => (
          <TextField
            key={index}
            id={`otp-input-${index}`}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: "center",
                fontSize: "1.5rem",
                width: "3rem",
                height: "3rem",
              },
            }}
          />
        ))}
      </Box>
    </div>
  );
};

export default OTP;
