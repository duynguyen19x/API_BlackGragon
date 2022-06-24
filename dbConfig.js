
const config = {
    user: 'sa',
    password: '123456',
    server: '127.0.0.1',
    database: 'BlackDragon',
    options: {
        instancename: 'MSSQLSERVER',
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
    port: 1434
};

module.exports = config;