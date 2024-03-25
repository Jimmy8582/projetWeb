import mariadb from "mariadb";


export const connectionDB =mariadb.createPool({
        host:"127.0.0.1",
        port:"3306",
        user:"root",
        password:"",
        database:"s9"
    }
)