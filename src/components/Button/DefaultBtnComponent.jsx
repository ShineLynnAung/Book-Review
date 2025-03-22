import React from "react";
import { Button } from "@mui/material";
export default function DefaultBtnComponent({style,variant,color,onClick,label,disabled,className}) {
  return (
    <Button variant={variant} color={color} onClick={onClick} disabled={disabled} sx={style} className={className}>
      {label}
    </Button>
  );
}