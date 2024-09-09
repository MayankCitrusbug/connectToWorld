import mongoose from "mongoose";
import  {DATABASE_NAME} from "../constant.js"

function demo(){
    console.log(`database name is ${DATABASE_NAME}`);
}

export default demo;