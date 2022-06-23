const { conn, sql } = require('../../connection');

module.exports = function () {
    this.getUsers = async function(result) {
        // var pool = await conn;
        // var sql = "SELECT * FROM [User]";

        // return await pool.request()
        //     .query(sql, function(err, data) {
        //         if(data.recordset.length > 0) {
        //             result(null, data.recordset)
        //         } else{
        //             result(true, null)
        //         }
        //     });

        result(null, 'Ok')
    };
}
