import React, { useEffect } from "react";
import { TextField, ThemeProvider, Typography } from "@mui/material";
import DefaultBtnComponent from "../../components/Button/DefaultBtnComponent";
import theme from "../../theme";
import TextInputComponent from "../../components/Input/TextInputComponent";
import _JWTDecodeService from "../../utils/JWTDecodeService";
export default function AdditionPage(){    
    const [num1,setNum1]=React.useState(0);
    const [num2,setNum2]=React.useState(0);
    const [result,setResult]=React.useState(0);
    
    useEffect(()=>{
        sessionStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RVQVRTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJkN2MzNjg5NS1iN2I5LTRiYzctYjBmNy02ODA2ZmQ1ZTFmMjUiLCJpYXQiOiIzLzIzLzIwMjUgMzoyMDoyNSBQTSIsIlVzZXJJZCI6IllZYVBRUkE1WXB6N0NpeU56bFYxV0xGR3M4am1hWnFnaVhMaVVVWi9iQVk9IiwiVXNlck5hbWUiOiJKRzFFN21FUHY3N1Q0bnpkaDVOOTBDS0IvVTMyckx4S2tGRTlXcFpxZU5DL29acUV5ZlJHSjJmczVGL1JETGZoIiwiRW1haWwiOiJpRmlFQzI5eVEzOGt3MXhMaFFKWGs0T0xsNUtZaGdvVVFudnpYVFJ3eHlqSkZsYWZrQzI4V2JXbHB3bFE5QmM0IiwiVXNlclJvbGUiOiJUOFZaS1dWampWTjlWbXZUd1EwZzIrcFlxdFRiZ3JuWDRqQnowa0JadXdzPSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlQ4VlpLV1ZqalZOOVZtdlR3UTBnMitwWXF0VGJncm5YNGpCejBrQlp1d3M9IiwiZXhwIjoxNzQyNzc5MjI1LCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblVBVFNlcnZlciIsImF1ZCI6IkpXVFNlcnZpY2VQb3N0bWFuVUFUQ2xpZW50In0.dLRGKMivMN4Hg5RTcteVN5oMb-rRNMd6GABAQjNp2ys')
        console.log("Session Storage Token added");
    },[])

    const handleAddition=()=>{
        setResult(parseInt(num1)+parseInt(num2));
    }
    return(
        <ThemeProvider theme={theme}>
        <TextInputComponent id="num1" label="Num1" type="number" variant="standard" className="w-full" onChange={setNum1} />         
        <TextInputComponent id="num2" label="Num2" type="number" variant="standard" className="w-full" onChange={setNum2} />                 
        <DefaultBtnComponent label="Add" className="w-full" variant={'contained'} color={'secondary'} style={{mt:10}} onClick={()=>handleAddition()} disabled={false}/>
        <DefaultBtnComponent label="Decode Token" className="w-full" variant={'contained'} color={'secondary'} style={{mt:10}} onClick={()=>_JWTDecodeService(sessionStorage.getItem('token'))} disabled={false}/>
        <Typography variant="h4" className="text-center mt-5" sx={{mt:10}}>Result: {result}</Typography> 
        </ThemeProvider>
    )
}