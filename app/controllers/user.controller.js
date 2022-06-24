var config = require('../../dbConfig');
const sql = require('mssql');

async function getUsers(req, res) {
    try {
        let pool = await sql.connect(config);
        let users = await pool.request().query('SELECT * FROM [User]');

        // if(users.recordset.length > 0) {
        //     result(null, data.recordset)
        // } else{
        //     result(true, null)
        // }

         res.send({ result: users.recordset});
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUsers: getUsers
}