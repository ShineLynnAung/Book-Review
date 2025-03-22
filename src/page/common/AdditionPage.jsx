import React from "react";
import { TextField, ThemeProvider, Typography } from "@mui/material";
import DefaultBtnComponent from "../../components/Button/DefaultBtnComponent";
import theme from "../../theme";
import TextInputComponent from "../../components/Input/TextInputComponent";
export default function AdditionPage(){
    const [num1,setNum1]=React.useState(0);
    const [num2,setNum2]=React.useState(0);
    const [result,setResult]=React.useState(0);

    const handleAddition=()=>{
        setResult(parseInt(num1)+parseInt(num2));
    }
    return(
        <ThemeProvider theme={theme}>
        <TextInputComponent id="num1" label="Num1" type="number" variant="standard" className="w-full" onChange={setNum1} />         
        <TextInputComponent id="num2" label="Num2" type="number" variant="standard" className="w-full" onChange={setNum2} />                 
        <DefaultBtnComponent label="Add" className="w-full" variant={'contained'} color={'secondary'} style={{mt:10}} onClick={()=>handleAddition()} disabled={false}/>
        <Typography variant="h4" className="text-center mt-5" sx={{mt:10}}>Result: {result}</Typography> 
        </ThemeProvider>
    )
}