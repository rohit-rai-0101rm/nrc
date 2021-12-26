import Errorhandler from "../utils/ErrorHandler.js";
export const Error=(err,req,res,next)=>{
    err.statusCode=err.statusCode||500;
    err.message=err.message||"Internal server Error"

    res.status(err.statusCode).json({
        message:err.message
    })
}