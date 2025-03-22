import { TextField } from "@mui/material";
export default function TextInputComponent({id,label,type,variant,className,onChange}){
    return(
        <TextField id={id} label={label} type={type} variant={variant} className={className} onChange={(e)=>onChange(e.target.value)}/>
    )
}