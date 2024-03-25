import {connectionDB} from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const loginRoute={
    path:"/api/login",
    method:"post",
    handler:async(req,res)=>{

        const {email,password}=req.body;
        const db=await connectionDB.getConnection();
        const query= "SELECT * FROM STUDENT WHERE EMAIL=?";

        const resultSet=await db.query(query,email);
        const student =resultSet[0];

        if (! resultSet.length){
            console.log("Student does not exist");
            res.sendStatus(401);
        } else{
            const isCorrect= await bcrypt.compare(password,student.PASSWORD);
            if(isCorrect){
                jwt.sign({
                    id:student.StudentId,
                    email,
                    FAVORITESONG:student.FAVORITESONG,
                    DATE:"25/03/2024",
                    LIEU:"MARIE-VIC"
                },process.env.JWT_SECRET,
                    {expiresIn:"2d"},
                    (err,token)=>{
                    if(err){
                        res.status(500).json(err);
                    }
                    res.status(200).json(token)
                    });
            }else{
                res.sendStatus(401);
                console.log("Incorrect PWD")
            }
        }
    }
}