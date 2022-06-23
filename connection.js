const sql = require('mssql/msnodesqlv8');

const config = {
    server: "localhost",
    user: "sa",
    password: "123456",
    database: "BlackDragon",
    driver: "msnodesqlv8"
};

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
});

module.exports = {
    conn: this.conn,
    sql: this.sql
};