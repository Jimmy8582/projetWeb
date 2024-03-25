import {connectionDB} from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signUpRoute= {
    path: "/api/login",
    method: "post",
    handler: async (req, res) => {

        const {email, password} = req.body;
        const db = await connectionDB.getConnection();
        const query = "SELECT * FROM STUDENT WHERE EMAIL=?";

        const resultSet = await db.query(query, email);

        if(resultSet.length){
            console.log("Student already exist");
            res.sendStatus(401);
        } else{
            const passwordHash=await bcrypt.hash(password,10);

            const isVerified=false;
            const startingInfo={
                email,
                passwordHash,
                "favoriteSong",
                "favoriteArtist",
                "favoriteLangage",
                isVerified,
            };

            const query2="INSERT INTO STUDENT(EMAIL,PASSWORD,FAVORITESONG,FAVORITEARTIST,FAVORITELANGAGE,ISVERIFIED) VALUES (?)";

        }

    }
}