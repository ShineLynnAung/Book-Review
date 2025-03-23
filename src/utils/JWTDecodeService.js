import { jwtDecode } from "jwt-decode";
const _JWTDecodeService =(token)=>{
    console.log("Token",token);
    const decoded = jwtDecode(token);
    console.log("DecodedToken",decoded)
    return decoded;
}
export default _JWTDecodeService;