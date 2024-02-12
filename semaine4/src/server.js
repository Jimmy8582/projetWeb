import express, { response } from "express";
import mariadb from "mariadb";

const app = express();
app.use(express.json);

const port = 9000;

const db = mariadb.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "perso"
});

app.get("/users", async (request, response) => {

    let conn;

    try {
        conn = db.getConnection()
        const query = "SELECT * FROM USERS";

        const rs = await conn.query(query);

        console.log(rs)
        return response.json(rs);

    } catch (error) {
        console.log(error);
    } finally {
        if (conn) conn.end();
    }

});

app.put("/users", (request, response) => {
    let conn;

    try {

    } catch (error) {
        console.log(error);
    } finally {
        if (conn) conn.end();
    }

})

app.post("/users", (request, response) => {
    let conn;

    try {

    } catch (error) {
        console.log(error);
    } finally {
        if (conn) conn.end();
    }

})

app.delete("/users", (request, response) => {
    let conn;

    try {

    } catch (error) {
        console.log(error);
    } finally {
        if (conn) conn.end();
    }

})

app.listen(port, () => {
    console.log("==>Server is listening on port 9000<==");
})

/**
 * app.get('/login/:pwd/:username/:key',(req,res)=>{
  //  return res.json("Test method Get of API REST with Express!");
    console.log(req.params);
});
 */