var config = require('../../dbConfig');
const sql = require('mssql');

async function getAlls(req, res) {
    try {
        let pool = await sql.connect(config);
        let users = await pool.request().query('SELECT * FROM [User]');

        res.send({ result: users.recordset });
    }
    catch (error) {
        console.log(error);
    }
}

async function getById(req, res) {
    try {
        let pool = await sql.connect(config);
        let users = await pool.request()
            .input('Id', sql.UniqueIdentifier, req.params.id)
            .query('SELECT * FROM [User] WHERE Id = @Id');

        res.send({ result: users.recordset });
    }
    catch (error) {
        console.log(error);
    }
}

async function Create(req, res) {
    try {
        
        let sqlString = "INSERT INTO [dbo].[User] ([Id],[Code],[Name],[Addres],[GenderId],[PhoneNumber],[Password],[UserType]) VALUES (@Id, @Code, @NAME, @Addres, @GenderId, @PhoneNumber, @Password, @UserType);"

        let pool = await sql.connect(config);
        let users = await pool.request()
            .input('Id', sql.UniqueIdentifier, req.body.Id)
            .input('Code', sql.NVarChar, req.body.Code)
            .input('Name', sql.NVarChar, req.body.Name)
            .input('Addres', sql.NVarChar, req.body.Addres)
            .input('GenderId', sql.SmallInt, req.body.GenderId)
            .input('PhoneNumber', sql.NVarChar, req.body.PhoneNumber)
            .input('Password', sql.NVarChar, req.body.Password)
            .input('UserType', sql.SmallInt, req.body.UserType)
            .query(sqlString, function(err, data) {
                if(err == null) {
                    res.send({ result: users.recordset });
                } else {
                    res.send({ result: "Error" });
                }
            }
        );
    }
    catch (error) {
        console.log(error);
    }
}

async function Update(req, res) {
    try {
        let sqlString = "UPDATE [dbo].[User] SET [Code] = @Code, [Name] = @Name, [Addres] = @Addres, [GenderId] = @GenderId, [PhoneNumber] = @PhoneNumber, [Password] = @Password, [UserType] = @UserType WHERE Id = @Id";

        let pool = await sql.connect(config);
        let users = await pool.request()
            .input('Code', sql.NVarChar, req.body.Code)
            .input('Name', sql.NVarChar, req.body.Name)
            .input('Addres', sql.NVarChar, req.body.Addres)
            .input('GenderId', sql.SmallInt, req.body.GenderId)
            .input('PhoneNumber', sql.NVarChar, req.body.PhoneNumber)
            .input('Password', sql.NVarChar, req.body.Password)
            .input('UserType', sql.SmallInt, req.body.UserType)
            .input('Id', sql.UniqueIdentifier, req.body.Id)
            .query(sqlString, function(err, data) {
                if(err == null) {
                    res.send({ result: users.recordset });
                } else {
                    res.send({ result: "Error" });
                }
            }
        );
    }
    catch (error) {
        console.log(error);
    }
}

async function deleteById(req, res) {
    try {
        let pool = await sql.connect(config);
        let users = await pool.request()
            .input('Id', sql.UniqueIdentifier, req.params.id)
            .query('DELETE FROM [User] WHERE Id = @Id', function(err, data) {
                if(err == null) {
                    res.send({ result: users.recordset });
                } else {
                    res.send({ result: "Error" });
                }
            }
        );
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAlls: getAlls,
    getById: getById,
    Create, Create,
    Update: Update,
    deleteById, deleteById
}